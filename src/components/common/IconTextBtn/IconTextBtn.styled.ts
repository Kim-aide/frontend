import styled from '@emotion/styled';

const IconTextBtn = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 220px;
	height: 45px;
	border: ${({ theme }) => theme.colors.GRAY} solid 1px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.COMMON_BTN_BGC};
	transition: background-color 0.15s;
	&:hover {
		background-color: ${({ theme }) => theme.colors.COMMON_BTN_HOVER};
	}
`;

const IconImg = styled.img`
	margin-left: 8px;
	margin-right: 6px;
	width: 25px;
	height: 25px;
	color: ${({ theme }) => theme.colors.WHITE};
`;

const IconText = styled.p`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 200px;
	font-size: 16px;
	color: ${({ theme }) => theme.colors.WHITE};
`;
const SvgIcon = styled.div`
	margin-left: 8px;
	margin-right: 6px;
	width: 25px;
	height: 25px;
	& > svg {
		width: 100%;
		height: 100%;
		color: ${({ theme }) => theme.colors.WHITE};
	}
`;

export { IconTextBtn, IconImg, IconText, SvgIcon };
