import { useState, useEffect, useRef, useCallback } from 'react';
import { OpenVidu } from 'openvidu-browser';
import type { Session, Publisher, Subscriber, Device } from 'openvidu-browser';
import fetchRoomKey from '../domains/fetchRoomKey';

const useOpenViduMeetingRoom = () => {
	const [session, setSession] = useState<Session>();
	const [publisher, setPublisher] = useState<Publisher>();
	const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
	const [videoDevice, setVideoDevice] = useState<Device>();
	const [isCamActive, setIsCamActive] = useState(false);
	const [isMicActive, setIsMicActive] = useState(false);
	const [isHeadsetActive, setIsHeadsetActive] = useState(false);
	const openVidu = useRef<OpenVidu | null>();

	const joinSession = async (roomKey: string) => {
		openVidu.current = new OpenVidu();
		const newSession = openVidu.current.initSession();

		newSession.on('streamCreated', (event) => {
			const newSubscriber = newSession.subscribe(event.stream, undefined);
			setSubscribers((subscribers) => [...subscribers, newSubscriber]);
		});

		newSession.on('streamDestroyed', (event) => {
			setSubscribers((subscribers) =>
				subscribers.filter(
					(subscriber) =>
						subscriber.stream.streamManager !== event.stream.streamManager,
				),
			);
		});

		const testUsername = `사용자 ${Math.floor(Math.random() * 100_000)}`;

		newSession.connect(roomKey, { clientData: testUsername }).then(async () => {
			const publisher = await openVidu.current?.initPublisherAsync(undefined, {
				audioSource: undefined,
				videoSource: undefined,
				publishAudio: true,
				publishVideo: true,
				resolution: '640x480',
				frameRate: 30,
				insertMode: 'APPEND',
				mirror: false,
			});

			if (!publisher) {
				return;
			}

			newSession.publish(publisher);

			const devices = await openVidu.current?.getDevices();
			const videoDevices = devices?.filter(
				(device) => device.kind === 'videoinput',
			);
			const currentVideoDeviceId = publisher.stream
				.getMediaStream()
				.getVideoTracks()[0]
				.getSettings().deviceId;
			const currentVideoDevice = videoDevices?.find(
				(device) => device.deviceId === currentVideoDeviceId,
			);

			setVideoDevice(currentVideoDevice);
			setPublisher(publisher);
			setIsCamActive(true);
			setIsMicActive(true);
			setIsHeadsetActive(true);
		});

		setSession(newSession);
	};

	const toggleCamActive = () => {
		if (!session) {
			return;
		}

		setIsCamActive((prev) => {
			const newCamActiveState = !prev;

			publisher?.publishVideo(newCamActiveState);
			return newCamActiveState;
		});
	};

	const toggleMicActive = () => {
		if (!session) {
			return;
		}

		setIsMicActive((prev) => {
			const newMicActiveState = !prev;

			publisher?.publishAudio(newMicActiveState);
			return newMicActiveState;
		});
	};

	const toggleHeadsetActive = () => {
		if (!session) {
			return;
		}

		setIsHeadsetActive((prev) => {
			const newHeadsetActiveState = !prev;

			subscribers.forEach((subscriber) => {
				subscriber.subscribeToAudio(newHeadsetActiveState);
			});

			return newHeadsetActiveState;
		});
	};

	const leaveSession = useCallback(() => {
		session?.disconnect();

		openVidu.current = null;

		setSession(undefined);
		setPublisher(undefined);
		setSubscribers([]);
	}, [session]);

	useEffect(() => {
		const readRoomCodeAndConnect = async () => {
			const roomCode = location.href.split('/').pop();

			if (!roomCode) {
				return;
			}

			const roomKey = await fetchRoomKey(roomCode);
			joinSession(roomKey);
		};

		readRoomCodeAndConnect();
	}, []);

	useEffect(() => {
		window.addEventListener('beforeunload', leaveSession);

		return () => {
			window.removeEventListener('beforeunload', leaveSession);
		};
	}, [leaveSession]);

	const publisherInfo = publisher
		? {
				streamManager: publisher,
				nickname: JSON.parse(publisher?.stream.connection.data).username,
				avatar: '',
			}
		: undefined;

	const subscriberInfos = subscribers.map((subscriber) => {
		return {
			streamManager: subscriber,
			nickname: JSON.parse(subscriber.stream.connection.data).username,
			avatar: '',
		};
	});

	const participantInfos = publisherInfo
		? [publisherInfo, ...subscriberInfos]
		: subscriberInfos;

	const isConnected = !!session;

	return {
		participantInfos,
		videoDevice,
		isConnected,
		isCamActive,
		isMicActive,
		isHeadsetActive,
		leaveSession,
		toggleCamActive,
		toggleMicActive,
		toggleHeadsetActive,
	};
};

export default useOpenViduMeetingRoom;
