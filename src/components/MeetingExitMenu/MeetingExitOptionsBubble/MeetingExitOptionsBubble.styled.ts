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
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 8px;
	position: relative;
	width: 244px;
	height: 114px;
	padding: 12px;
	border: 2px solid #282828;
	border-radius: 8px;
	box-shadow: 0 10px 10px #000000;
	background-color: #181818;

	&:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		width: 0;
		height: 0;
		border: 12px solid;
		border-top-width: 18px;
		border-color: #282828 transparent transparent transparent;
		transform: translateX(-50%);
		transform-origin: bottom;
	}

	&.visible {
		animation: ${zoomIn} 0.2s forwards;
	}

	&.hidden {
		animation: ${zoomOut} 0.2s forwards;
	}
`;

const ControlPanelBtn = styled.button<{
	$backgroundColor: string;
	$hoverBackgroundColor: string;
}>`
	width: 100%;
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

export { Container, ControlPanelBtn };
