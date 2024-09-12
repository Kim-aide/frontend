import styled from '@emotion/styled';

const Container = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 96px;
	height: 52px;
	border: 2px solid #ff4040;
	border-radius: 26px;
	background: none;
	transition: transform 0.2s;

	&:hover {
		transform: scale(1.07);
	}

	&:active {
		transform: scale(1);
	}

	& > svg {
		width: 32px;
		height: 32px;
		color: #ff4040;
	}
`;

export { Container };
