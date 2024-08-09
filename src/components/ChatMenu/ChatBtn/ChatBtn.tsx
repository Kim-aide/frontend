import React from 'react';
import * as S from './ChatBtn.styled';
import { ChatBubbleIcon } from '../../../assets/svg';

interface ChatBtnProps {
	notificationCount: number;
	maxDisplayNotificationCount: number;
	onClick: () => void;
}

const ChatBtn = ({
	notificationCount,
	maxDisplayNotificationCount,
	onClick,
}: ChatBtnProps) => {
	const notificationDisplayText =
		notificationCount > maxDisplayNotificationCount
			? `${maxDisplayNotificationCount}+`
			: String(notificationCount);
	const ariaLabel =
		notificationCount > 0
			? `채팅방 열기. 확인하지 않은 ${notificationCount}개의 채팅이 있습니다.`
			: '채팅방 열기';

	return (
		<S.Container type="button" aria-label={ariaLabel} onClick={onClick}>
			<ChatBubbleIcon />
			{notificationCount > 0 && (
				<S.NotificationCircle>{notificationDisplayText}</S.NotificationCircle>
			)}
		</S.Container>
	);
};

export default ChatBtn;
