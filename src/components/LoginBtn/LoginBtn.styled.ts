import styled from '@emotion/styled';

// Google
const GooogleLoginBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 302px;
	height: 52px;
	border: none;
	background-color: ${({ theme }) => theme.colors.WHITE};
	border-radius: 5px;
`;
const GoogleLoginIcon = styled.img`
	width: 20px;
`;

const GoogleLoginText = styled.p`
	margin-left: 22px;
	color: ${({ theme }) => theme.colors.BLACK};
	font-size: 18px;
`;

// Naver
const NaverLoginBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 302px;
	height: 52px;
	border: none;
	background-color: ${({ theme }) => theme.colors.NAVER_BACKGROUND};
	border-radius: 5px;
`;
const NaverLoginIcon = styled.img`
	width: 20px;
`;

const NaverLoginText = styled.p`
	font-size: 18px;
	margin-left: 28px;
	color: ${({ theme }) => theme.colors.WHITE};
`;

export {
	GooogleLoginBtn,
	GoogleLoginIcon,
	GoogleLoginText,
	NaverLoginBtn,
	NaverLoginIcon,
	NaverLoginText,
};
