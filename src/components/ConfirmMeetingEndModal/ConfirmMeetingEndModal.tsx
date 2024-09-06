import * as S from './ConfirmMeetingEndModal.styled';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../../assets/svg';

interface ConfirmMeetingEndModalProps {
	roomName: string;
	open: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

const ConfirmMeetingEndModal = ({
	roomName,
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
						<S.ModalHeader>
							<S.Title>회의 종료 확인</S.Title>
							<S.CloseBtn onClick={closeModal}>
								<CloseIcon />
							</S.CloseBtn>
						</S.ModalHeader>
						<S.ContentContainer>
							<S.Text>
								정말로 모든 참가자들을 내보내고,{' '}
								<S.RoomNameText>{roomName}</S.RoomNameText>을(를) 종료할까요?
							</S.Text>
							<S.Text>
								단순히 참가자님이 회의에서 나가시는 작업이 아니에요. 신중히
								결정해주세요.
							</S.Text>
						</S.ContentContainer>
						<S.ControlPanel>
							<S.ControlPanelBtn
								type="button"
								$backgroundColor="#515151"
								$hoverBackgroundColor="#656565"
								onClick={closeModal}
							>
								취소
							</S.ControlPanelBtn>
							<S.ControlPanelBtn
								type="button"
								$backgroundColor="#ff4040"
								$hoverBackgroundColor="#ff7c7c"
								onClick={confirmModal}
							>
								회의 종료
							</S.ControlPanelBtn>
						</S.ControlPanel>
					</S.Modal>
				</S.Container>,
				document.body,
			)
		: null;
};

export default ConfirmMeetingEndModal;
