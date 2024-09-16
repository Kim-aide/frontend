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
	row-gap: 24px;
	max-width: 100%;
	max-height: 100%;
	width: 448px;
	border: 2px solid #282828;
	border-radius: 8px;
	box-shadow: 0 10px 10px ${({ theme }) => theme.colors.DARK_GRAY};
	background-color: #181818;

	&.visible {
		animation: ${zoomIn} 0.15s forwards;
	}

	&.hidden {
		animation: ${zoomOut} 0.15s forwards;
	}
`;

const ModalHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	height: 54px;
	padding: 0 24px;
	border-radius: 6px 0;
`;

const Title = styled.span`
	font-size: 28px;
	color: white;
	font-family: BMHanna11yrs;
`;

const CloseBtn = styled.button`
	display: flex;
	overflow: hidden;
	width: 32px;
	height: 32px;
	color: #8d8d8d;
	background: none;

	& > svg {
		width: 100%;
		height: 100%;
		transition: 0.15s;
	}

	&:hover > svg {
		color: #bbbbbb;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 8px;
	padding: 0 24px;
`;

const Text = styled.p`
	font-size: 16px;
	color: white;
`;

const RoomNameText = styled.span`
	color: #b7b7b7;
	font-weight: 700;
`;

const ControlPanel = styled.div`
	display: flex;
	justify-content: flex-end;
	column-gap: 8px;
	height: 70px;
	padding: 16px;
	background-color: #1f1f1f;
	border-radius: 0 0 6px 6px;
`;

const ControlPanelBtn = styled.button<{
	$backgroundColor: string;
	$hoverBackgroundColor: string;
}>`
	width: 88px;
	height: 38px;
	border-radius: 4px;
	background-color: ${({ $backgroundColor }) => $backgroundColor};
	color: white;
	font-size: 15px;
	transition: 0.15s;

	&:hover {
		background-color: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor};
	}
`;

export {
	Container,
	Backdrop,
	Modal,
	ModalHeader,
	Title,
	CloseBtn,
	ContentContainer,
	Text,
	RoomNameText,
	ControlPanel,
	ControlPanelBtn,
};
