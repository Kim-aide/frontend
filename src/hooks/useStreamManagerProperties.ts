import { useState, useEffect, useRef } from 'react';
import type {
	StreamManager,
	StreamPropertyChangedEvent,
} from 'openvidu-browser';

interface UseStreamManagerPropertiesParams {
	streamManager: StreamManager;
}
const useStreamManagerProperties = ({
	streamManager,
}: UseStreamManagerPropertiesParams) => {
	const [videoActive, setVideoActive] = useState(
		streamManager.stream.videoActive,
	);
	const [isUserSpeaking, setIsUserSpeaking] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const videoElement = videoRef.current;

		if (!videoElement) {
			return;
		}

		streamManager.addVideoElement(videoElement);

		const handleVideoActiveChanged = (event: StreamPropertyChangedEvent) => {
			const videoActive = event.stream.videoActive;

			if (event.changedProperty === 'videoActive') {
				setVideoActive(videoActive);
			}
		};

		const handleStartSpeaking = () => {
			setIsUserSpeaking(true);
		};

		const handleStopSpeaking = () => {
			setIsUserSpeaking(false);
		};

		setVideoActive(streamManager.stream.videoActive);

		streamManager.on('streamPropertyChanged', handleVideoActiveChanged);
		streamManager.on('publisherStartSpeaking', handleStartSpeaking);
		streamManager.on('publisherStopSpeaking', handleStopSpeaking);

		return () => {
			streamManager.off('streamPropertyChanged', handleVideoActiveChanged);
			streamManager.off('publisherStartSpeaking', handleStartSpeaking);
			streamManager.off('publisherStopSpeaking', handleStopSpeaking);
		};
	}, [streamManager]);

	return {
		videoRef,
		videoActive,
		isUserSpeaking,
	};
};

export default useStreamManagerProperties;
