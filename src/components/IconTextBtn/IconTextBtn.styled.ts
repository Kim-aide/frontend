import styled from '@emotion/styled';

const IconTextBtn = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 220px;
	height: 45px;
	border: ${({ theme }) => theme.colors.WHITE} solid 2px;
	border-radius: 5px;
	background-color: #545454;
	&:hover {
		background-color: #6f6f6f;
		transition: background-color 0.3s;
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
