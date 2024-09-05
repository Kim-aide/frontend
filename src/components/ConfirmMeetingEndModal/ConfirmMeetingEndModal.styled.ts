import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

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
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 1345253;
`;

const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(6px);

	&.visible {
		animation: ${fadeIn} 0.2s forwards;
	}

	&.hidden {
		animation: ${fadeOut} 0.2s forwards;
		color: blue;
	}
`;

const Modal = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 100%;
	max-height: 100%;
	width: 400px;
	height: 200px;
	box-shadow: 0 10px 10px ${({ theme }) => theme.colors.DARK_GRAY};
	background-color: white;

	&.visible {
		animation: ${zoomIn} 0.2s forwards;
	}

	&.hidden {
		animation: ${zoomOut} 0.2s forwards;
	}
`;

export { Container, Backdrop, Modal };
