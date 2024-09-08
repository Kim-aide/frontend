import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Container = styled.div<{
	$width: string;
	$height: string;
	$videoActive: boolean;
	$isUserSpeaking: boolean;
}>`
	overflow: hidden;
	position: relative;
	width: ${({ $width }) => $width};
	height: ${({ $height }) => $height};
	border-radius: 8px;
	background-color: ${({ theme }) => theme.colors.BLACK};
	${({ theme, $isUserSpeaking }) =>
		$isUserSpeaking
			? css`
					outline: 4px solid ${theme.colors.GREEN};
					box-shadow: 0 0 20px ${theme.colors.GREEN};
				`
			: css`
					outline: 0 solid ${theme.colors.BLACK};
				`};
	transition: outline 0.15s;
`;

const NoVideoScreen = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.BLACK};

	& > img {
		max-width: 30%;
		max-height: 30%;
	}
`;

const Logo = styled.img`
	user-select: none;
`;

const Video = styled.video<{ $videoActive: boolean }>`
	display: ${({ $videoActive }) => ($videoActive ? 'block' : 'none')};
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const ProfilePanel = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 68px;
	padding: 14px;
	background-color: ${({ theme }) => theme.colors.BLACK_TRANSPARENT};
`;

const Avatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 20px;
	object-fit: cover;
`;

const Nickname = styled.div`
	overflow: hidden;
	font-weight: 700;
	font-size: 18px;
	color: ${({ theme }) => theme.colors.WHITE};
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export {
	Container,
	NoVideoScreen,
	Logo,
	Video,
	ProfilePanel,
	Avatar,
	Nickname,
};
