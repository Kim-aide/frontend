import React from 'react';
import * as S from './UserVideo.styled';
import type { StreamManager } from 'openvidu-browser';
import useStreamManagerProperties from '../../hooks/useStreamManagerProperties';
import { kimAideLogoLarge } from '../../assets/png';

interface UserVideoProps {
	streamManager: StreamManager;
	width: string;
	height: string;
	avatar: string;
	nickname: string;
}

const UserVideo = ({
	streamManager,
	width,
	height,
	avatar,
	nickname,
}: UserVideoProps) => {
	const { videoRef, videoActive, isUserSpeaking } = useStreamManagerProperties({
		streamManager,
	});

	return (
		<S.Container
			$width={width}
			$height={height}
			$videoActive={videoActive}
			$isUserSpeaking={isUserSpeaking}
		>
			<S.NoVideoScreen>
				<S.Logo src={kimAideLogoLarge} alt="" draggable={false} />
			</S.NoVideoScreen>
			<S.Video
				autoPlay={true}
				ref={videoRef}
				$videoActive={videoActive}
			></S.Video>
			<S.ProfilePanel>
				<S.Avatar src={avatar} alt={`${nickname}님의 프로필 사진`} />
				<S.Nickname>{nickname}</S.Nickname>
			</S.ProfilePanel>
		</S.Container>
	);
};

export default UserVideo;
