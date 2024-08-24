const MAX_COLUMN_COUNT = 1_000;
const BASE_RATIO = 1_920 / 1_080;

const calculateUserVideoGridLayout = (
	videoGridWidth: number,
	videoGridHeight: number,
	videoGridLayoutGap: number,
	participantsCount: number,
) => {
	let bestRatio = 0;
	let layoutRowCount = 0;
	let layoutColumnCount = 0;
	let videoWidth = 0;
	let videoHeight = 0;

	for (let c = 1; c <= MAX_COLUMN_COUNT; c += 1) {
		const r = Math.ceil(participantsCount / c);
		const videoGridWidthWithoutGap =
			videoGridWidth - (c - 1) * videoGridLayoutGap;
		const videoGridHeightWithoutGap =
			videoGridHeight - (r - 1) * videoGridLayoutGap;

		if (videoGridWidthWithoutGap <= 0 || videoGridHeightWithoutGap <= 0) {
			continue;
		}

		const currentRatio =
			videoGridWidthWithoutGap / c / (videoGridHeightWithoutGap / r);

		if (getRatioDifference(currentRatio) < getRatioDifference(bestRatio)) {
			bestRatio = currentRatio;
			layoutRowCount = r;
			layoutColumnCount = c;
			videoWidth = videoGridWidthWithoutGap / c;
			videoHeight = videoGridHeightWithoutGap / r;
		}
	}

	videoWidth = Math.min(videoWidth, videoHeight * BASE_RATIO);
	videoHeight = Math.min(videoHeight, videoWidth / BASE_RATIO);

	const rowVideoCounts = Array.from({ length: layoutRowCount }).map(
		() => layoutColumnCount,
	);
	const emptySpacesCount =
		(layoutRowCount * layoutColumnCount - participantsCount) %
		layoutColumnCount;
	const rowSize = rowVideoCounts.length;

	for (let i = 0; i < emptySpacesCount; i += 1) {
		rowVideoCounts[layoutRowCount - (i % layoutRowCount) - 1] -= 1;
	}

	return {
		videoWidth,
		videoHeight,
		rowSize,
		rowVideoCounts,
	};
};

const getRatioDifference = (targetRatio: number) => {
	return Math.max(targetRatio, BASE_RATIO) / Math.min(targetRatio, BASE_RATIO);
};

export default calculateUserVideoGridLayout;
