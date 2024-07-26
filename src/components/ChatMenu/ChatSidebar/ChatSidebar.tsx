import React from 'react';
import * as S from './ChatSidebar.styled';
import ChatMessage from './ChatMessage';
import IconBtn from '../../common/IconBtn';
import { EmojiIcon, PaperPlaneIcon } from '../../../assets/svg';
import useChatSidebar from '../../../hooks/useChatSidebar';
import type { ChatMessageInfo } from '../../../types/chat';

interface ChatSidebarProps {
	open: boolean;
	top: string;
	height: string;
	messageInfos: ChatMessageInfo[];
	onSendMessage: (message: string) => void;
}

const ChatSidebar = ({
	open,
	top,
	height,
	messageInfos,
	onSendMessage,
}: ChatSidebarProps) => {
	const {
		currentMessage,
		textAreaRef,
		handleCurrentMessageChange,
		handleEnterKeyDown,
		handleSendMessage,
	} = useChatSidebar({ onSendMessage });
	return (
		<S.Container $top={top} $height={height} $isOpen={open}>
			<S.ChatMessagesContainer>
				{messageInfos.map((messageInfo) => (
					<ChatMessage key={messageInfo.id} {...messageInfo} />
				))}
			</S.ChatMessagesContainer>
			<S.InputPanel>
				<S.TextAreaInput
					ref={textAreaRef}
					value={currentMessage}
					placeholder="채팅을 입력해주세요..."
					spellCheck={false}
					disabled={!open}
					onChange={handleCurrentMessageChange}
					onKeyDown={handleEnterKeyDown}
				/>
				<IconBtn
					icon={<EmojiIcon />}
					size="small"
					ariaLabel="이모지 사용하기"
					disabled={!open}
					onClick={() => {}}
				/>
				<IconBtn
					icon={<PaperPlaneIcon />}
					size="small"
					ariaLabel="채팅 전송하기"
					disabled={!open}
					onClick={handleSendMessage}
				/>
			</S.InputPanel>
		</S.Container>
	);
};

export default ChatSidebar;
