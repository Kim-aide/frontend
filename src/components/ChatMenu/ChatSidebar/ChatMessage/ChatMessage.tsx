import React from 'react';
import type { ChatMessageInfo } from '../../../../types/chat';
import * as S from './ChatMessage.styled';

const ChatMessage = ({
	avatar,
	nickname,
	createdAt,
	message,
}: ChatMessageInfo) => {
	const timeString = createdAt.toLocaleTimeString([], {
		hour12: false,
		hour: '2-digit',
		minute: '2-digit',
	});

	return (
		<S.Container>
			<S.AvatarWrapper>
				<S.Avatar src={avatar} alt={`${nickname}님의 프로필 사진`} />
			</S.AvatarWrapper>
			<S.ContentContainer>
				<S.Header>
					<S.Nickname>{nickname}</S.Nickname>
					<S.Timestamp>{timeString}</S.Timestamp>
				</S.Header>
				<S.Message>{message}</S.Message>
			</S.ContentContainer>
		</S.Container>
	);
};

export default ChatMessage;
