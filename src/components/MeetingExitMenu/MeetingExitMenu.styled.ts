import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';

const zoomIn = keyframes`
	from {
		transform: scale(0.9);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
`;

const zoomOut = keyframes`
	from {
		transform: scale(1);
		opacity: 1;
	}
	to {
		transform: scale(0.9);
		opacity: 0;
	}
`;

const Container = styled.div`
	display: inline-block;
	position: relative;
`;

const MeetingExitOptionsBubbleWrapper = styled.div`
	position: absolute;
	top: -145px;
	left: -74px;
	transform-origin: bottom;

	&.visible {
		animation: ${zoomIn} 0.2s forwards;
	}

	&.hidden {
		animation: ${zoomOut} 0.2s forwards;
	}
`;

export { Container, MeetingExitOptionsBubbleWrapper };
