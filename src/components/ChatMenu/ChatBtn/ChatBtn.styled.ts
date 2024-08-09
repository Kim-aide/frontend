import styled from '@emotion/styled';

const Container = styled.button`
	position: relative;
	width: 40px;
	height: 40px;
	background: none;

	& > svg {
		width: 100%;
		height: 100%;
		color: ${({ theme }) => theme.colors.WHITE};
		transition: color 0.2s;
	}

	&:hover > svg {
		color: ${({ theme }) => theme.colors.LIGHT_GRAY};
	}
`;

const NotificationCircle = styled.span`
	position: absolute;
	right: 0;
	bottom: 0;
	display: inline-block;
	min-width: 16px;
	height: 16px;
	border-radius: 7px;
	background-color: ${({ theme }) => theme.colors.TOMATO};
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
`;

export { Container, NotificationCircle };
