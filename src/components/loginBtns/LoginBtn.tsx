import React from 'react';
import * as S from './LoginBtn.styled';
import googleIcon from '../../assets/loginicon/google-icon.png';
import naverIcon from '../../assets/loginicon/naver-icon.png';
interface LoginBtnProps {
	type: string;
}
const LoginBtn = (props: LoginBtnProps) => {
	const handleLogin = () => {
		alert('로그인 되었습니다.');
	};
	if (props.type === 'google') {
		return (
			<S.LoginButton onClick={handleLogin}>
				<S.LoginIcon src={googleIcon} alt="googleIcon" />
				<S.LoginText>Google 계정으로 로그인 하기</S.LoginText>
			</S.LoginButton>
		);
	}
	if (props.type === 'naver') {
		return (
			<S.LoginButton $type="naver" onClick={handleLogin}>
				<S.LoginIcon src={naverIcon} alt="naverIcon" />
				<S.LoginText $type="naver">네이버 계정으로 로그인 하기</S.LoginText>
			</S.LoginButton>
		);
	}
	return null;
};

export default LoginBtn;
