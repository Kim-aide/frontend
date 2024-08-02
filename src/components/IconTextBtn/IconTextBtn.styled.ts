import styled from '@emotion/styled';

const IconTextBtn = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 250px;
	height: 52px;
	border: ${({ theme }) => theme.colors.WHITE} solid 1px;
	border-radius: 5px;
	background-color: #545454;
`;

const IconImg = styled.img`
	margin-left: 6px;
	margin-right: 6px;
	width: 25px;
	height: 25px;
`;

const IconText = styled.p`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 200px;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.WHITE};
`;
const SvgIcon = styled.div`
	margin-left: 6px;
	margin-right: 6px;
	width: 25px;
	height: 25px;
	& > svg {
		width: 100%;
		height: 100%;
	}
`;

export { IconTextBtn, IconImg, IconText, SvgIcon };
