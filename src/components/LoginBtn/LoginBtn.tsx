import React from 'react';
import * as S from './LoginBtn.styled';
import googleIcon from '../../assets/loginIcons/google-icon.svg';
import naverIcon from '../../assets/loginIcons/naver-icon.svg';

interface LoginBtnProps {
	type: 'google' | 'naver';
}

const LoginBtn = (props: LoginBtnProps) => {
	const handleLogin = () => {
		alert('로그인 되었습니다.');
	};

	if (props.type === 'google') {
		return (
			<S.GooogleLoginBtn onClick={handleLogin}>
				<S.GoogleLoginIcon src={googleIcon} alt="" />
				<S.GoogleLoginText>Google 계정으로 로그인하기</S.GoogleLoginText>
			</S.GooogleLoginBtn>
		);
	}

	if (props.type === 'naver') {
		return (
			<S.NaverLoginBtn onClick={handleLogin}>
				<S.NaverLoginIcon src={naverIcon} alt="" />
				<S.NaverLoginText>네이버 계정으로 로그인하기</S.NaverLoginText>
			</S.NaverLoginBtn>
		);
	}

	return null;
};

export default LoginBtn;
