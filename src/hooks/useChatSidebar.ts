import { useState, useRef, useEffect } from 'react';
import type { ChangeEventHandler, KeyboardEventHandler } from 'react';

interface UseChatSideBarParams {
	onSendMessage: (message: string) => void;
}

/**
 * <ChatSidebar> 컴포넌트의 기능들을 사용하기 위한 커스텀 훅입니다. 아래의 기능들을 제공합니다.
 *
 * 1. 채팅창에 입력 중인 메시지를 관리합니다.
 * 2. 입력창에 입력되어 있는 메시지에 따라 입력창의 높이를 조절합니다.
 * 3. 메시지를 전송해야 하는 Enter 키의 눌림/전송 버튼의 클릭, 빈 줄만을 만들어야 하는 Shift+Enter 키의 눌림에 대한 로직을 처리합니다.
 *
 * @param params - 이 커스텀 훅의 파라미터를 의미합니다. 이 파라미터는 객체입니다.
 * @param params.onSendMessage - 메시지를 전송해야 할 경우 실행할 콜백 함수입니다.
 *
 * @returns 아래의 값들로 이루어진 오브젝트를 반환합니다.
 * - `currentMessage`: 현재 입력창에 입력되어 있는 메시지의 내용입니다.
 * - `textAreaRef`: 입력창에 사용해 주어야 하는 ref입니다.
 * - `handleCurrentMessageChange`: 메시지의 내용 변경 시 실행될 핸들러 함수입니다.
 * - `handleEnterKeyDown`: Enter 키가 눌렸을 경우 메시지 전송 또는 단순 개행 문자를 넣기 위한 로직을 실행할 핸들러 함수입니다.
 * - `handleSendMessage`: 메시지를 실질적으로 보내기 위한 핸들러 함수입니다.
 */
const useChatSidebar = ({ onSendMessage }: UseChatSideBarParams) => {
	const [currentMessage, setCurrentMessage] = useState('');
	const chatMessagesContainerRef = useRef<HTMLUListElement>(null);
	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const chatMessagesContainerElement = chatMessagesContainerRef.current;

		if (!chatMessagesContainerElement) {
			return;
		}

		chatMessagesContainerElement.scrollTop =
			chatMessagesContainerRef.current.scrollHeight;
	}, []);

	const handleCurrentMessageChange: ChangeEventHandler<HTMLTextAreaElement> = (
		event,
	) => {
		setCurrentMessage(event.target.value);

		if (!textAreaRef.current) {
			return;
		}

		textAreaRef.current.style.height = '0';
		textAreaRef.current.style.overflow = 'hidden';
		textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight + 3}px`;
		textAreaRef.current.style.overflow = 'auto';
	};

	const handleEnterKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (
		event,
	) => {
		if (event.key !== 'Enter' || event.shiftKey) {
			return;
		}

		event.preventDefault();

		if (currentMessage.trim() === '') {
			return;
		}

		onSendMessage(currentMessage);
	};

	const handleSendMessage = () => {
		if (currentMessage.trim() === '') {
			return;
		}

		onSendMessage(currentMessage);
	};

	return {
		currentMessage,
		chatMessagesContainerRef,
		textAreaRef,
		handleCurrentMessageChange,
		handleEnterKeyDown,
		handleSendMessage,
	};
};

export default useChatSidebar;
