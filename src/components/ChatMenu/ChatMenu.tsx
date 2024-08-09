import React from 'react';
import { useState } from 'react';
import ChatBtn from './ChatBtn';
import ChatSidebar from './ChatSidebar';

const MAX_NOTIFICATION_COUNT = 99;

const ChatMenu = () => {
	const [isChatOpen, setIsChatOpen] = useState(false);

	return (
		<>
			<ChatBtn
				notificationCount={0}
				maxDisplayNotificationCount={MAX_NOTIFICATION_COUNT}
				onClick={() => {
					setIsChatOpen((prev) => !prev);
				}}
			/>
			<ChatSidebar
				top="60px"
				height="calc(100vh - 120px)"
				onSendMessage={(currentMessage) => {
					alert(
						`onSendMessage() 함수가 실행되었습니다. 전송할 내용은 아래와 같습니다.\n\n"${currentMessage}"\n\n * 이 메시지는 storybook에서만 사용할 테스트 alert입니다. 실제로 사용할 때에는 적절한 함수를 삽입해 주시기 바랍니다.`,
					);
				}}
				messageInfos={[]}
				open={isChatOpen}
			/>
		</>
	);
};

export default ChatMenu;
