import { useState, useEffect, useRef, useCallback } from 'react';
import { OpenVidu } from 'openvidu-browser';
import type { Session, Publisher, Subscriber, Device } from 'openvidu-browser';
import fetchRoomKey from '../domains/fetchRoomKey';

const useOpenViduMeetingRoom = () => {
	const [session, setSession] = useState<Session | undefined>(undefined);
	const [publisher, setPublisher] = useState<Publisher | undefined>(undefined);
	const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
	const [videoDevice, setVideoDevice] = useState<Device | undefined>(undefined);
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
		});

		setSession(newSession);
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
			console.log(`테스트: roomKey는 ${roomKey}입니다.`);
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

	return {
		participantInfos,
		videoDevice,
		leaveSession,
	};
};

export default useOpenViduMeetingRoom;
