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

	for (let columnCount = 1; columnCount <= MAX_COLUMN_COUNT; columnCount += 1) {
		const rowCount = Math.ceil(participantsCount / columnCount);
		const videoGridWidthWithoutGap =
			videoGridWidth - (columnCount - 1) * videoGridLayoutGap;
		const videoGridHeightWithoutGap =
			videoGridHeight - (rowCount - 1) * videoGridLayoutGap;

		if (videoGridWidthWithoutGap <= 0 || videoGridHeightWithoutGap <= 0) {
			continue;
		}

		const currentRatio =
			videoGridWidthWithoutGap /
			columnCount /
			(videoGridHeightWithoutGap / rowCount);

		if (getRatioDifference(currentRatio) < getRatioDifference(bestRatio)) {
			bestRatio = currentRatio;
			layoutRowCount = rowCount;
			layoutColumnCount = columnCount;
			videoWidth = videoGridWidthWithoutGap / columnCount;
			videoHeight = videoGridHeightWithoutGap / rowCount;
		}
	}

	videoWidth = Math.min(videoWidth, videoHeight * BASE_RATIO);
	videoHeight = Math.min(videoHeight, videoWidth / BASE_RATIO);

	const rowVideoCounts = Array.from({ length: layoutRowCount }).map(
		() => layoutColumnCount,
	);
	const emptySpacesCount =
		layoutRowCount * layoutColumnCount - participantsCount;
	const rowSize = rowVideoCounts.length;

	for (let rowIndex = 0; rowIndex < emptySpacesCount; rowIndex += 1) {
		rowVideoCounts[layoutRowCount - (rowIndex % layoutRowCount) - 1] -= 1;
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
