import * as S from './ConfirmMeetingEndModal.styled';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface ConfirmMeetingEndModalProps {
	roomName: string;
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

const ConfirmMeetingEndModal = ({
	open,
	onClose,
	onConfirm,
}: ConfirmMeetingEndModalProps) => {
	const [isModalClosing, setIsModalClosing] = useState(false);

	const closeModal = () => {
		setIsModalClosing(true);
	};

	const confirmModal = () => {
		onConfirm();
		closeModal();
	};

	const handleModalClosingAnimationEnd = () => {
		if (!isModalClosing) {
			return;
		}

		setIsModalClosing(false);
		onClose();
	};

	return open
		? createPortal(
				<S.Container role="dialog">
					<S.Backdrop
						className={isModalClosing ? 'hidden' : 'visible'}
						onClick={closeModal}
					/>
					<S.Modal
						className={isModalClosing ? 'hidden' : 'visible'}
						onAnimationEnd={handleModalClosingAnimationEnd}
					>
						<button onClick={closeModal}>닫기</button>
						<button onClick={confirmModal}>회의 종료</button>
					</S.Modal>
				</S.Container>,
				document.body,
			)
		: null;
};

export default ConfirmMeetingEndModal;
