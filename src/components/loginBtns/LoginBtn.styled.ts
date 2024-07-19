import styled from '@emotion/styled';

const LoginButton = styled.button<{ $type?: string }>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 302px;
	height: 52px;
	border: none;
	background-color: ${(props) =>
		props.$type === 'naver' ? '#1EC800' : '#FFFFFF'};
	border-radius: 5px;
`;
const LoginIcon = styled.img`
	width: 24px;
	height: 24px;
`;
const LoginText = styled.p<{ $type?: string }>`
	font-size: 16px;
	margin-left: ${(props) => (props.$type === 'naver' ? '32px' : '22px')};
	color: ${(props) => (props.$type === 'naver' ? '#FFFFFF' : '#000000')};
`;

export { LoginButton, LoginIcon, LoginText };
