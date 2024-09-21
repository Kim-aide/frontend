export const getTransparentColor = (hexColor: string, opacity: number) => {
	const opacityHex = Math.round(255 * opacity)
		.toString(16)
		.padStart(2, '0');

	return `${hexColor}${opacityHex}`;
};
