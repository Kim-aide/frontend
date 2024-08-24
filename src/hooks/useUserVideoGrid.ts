import { useState, useEffect, useRef } from 'react';
import calculateUserVideoGridLayout from '../domains/calculateUserVideoGridLayout';

interface UseUserVideoGridParams {
	videoGridLayoutGap: number;
	participantsCount: number;
}

const useUserVideoGrid = ({
	videoGridLayoutGap: initLayoutGap,
	participantsCount: initParticipantsCount,
}: UseUserVideoGridParams) => {
	const [videoGridLayoutGap, setVideoGridLayoutGap] = useState(0);
	const [participantsCount, setParticipantsCount] = useState(0);
	const [videoGridWidth, setVideoGridWidth] = useState(0);
	const [videoGridHeight, setVideoGridHeight] = useState(0);
	const videoGridRef = useRef<HTMLDivElement>(null);

	const { videoWidth, videoHeight, rowSize, rowVideoCounts } =
		calculateUserVideoGridLayout(
			videoGridWidth,
			videoGridHeight,
			videoGridLayoutGap,
			participantsCount,
		);

	const handleVideoGridSizeChange = () => {
		if (!videoGridRef.current) {
			return;
		}

		const { width, height } = videoGridRef.current.getBoundingClientRect();
		setVideoGridWidth(width);
		setVideoGridHeight(height);
	};

	useEffect(() => {
		setVideoGridLayoutGap(initLayoutGap);
		setParticipantsCount(initParticipantsCount);
	}, [initLayoutGap, initParticipantsCount]);

	useEffect(() => {
		if (!videoGridRef.current) {
			return;
		}

		const resizeObserver = new ResizeObserver(() => {
			handleVideoGridSizeChange();
		});

		resizeObserver.observe(videoGridRef.current);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return {
		videoWidth,
		videoHeight,
		rowSize,
		rowVideoCounts,
		videoGridRef,
	};
};

export default useUserVideoGrid;
