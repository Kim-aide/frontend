import * as S from './ConfirmMeetingEndModal.styled';
import { useId } from 'react';
import { createPortal } from 'react-dom';
import useAnimatedModalClose from '../../../hooks/useAnimatedModalClose';
import { CloseIcon } from '../../../assets/svg';

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
	const {
		isModalOpen,
		isModalClosing,
		startClosingModal,
		handleClosingAnimationEnd,
	} = useAnimatedModalClose({ open, onClose });
	const titleId = useId();
	const descriptionId = useId();

	return isModalOpen
		? createPortal(
				<S.Container
					role="alertdialog"
					aria-modal="true"
					aria-labelledby={titleId}
					aria-describedby={descriptionId}
				>
					<S.Backdrop
						className={isModalClosing ? 'hidden' : 'visible'}
						onClick={startClosingModal}
					/>
					<S.Modal
						className={isModalClosing ? 'hidden' : 'visible'}
						onAnimationEnd={handleClosingAnimationEnd}
					>
						<S.ModalHeader>
							<S.Title id={titleId}>회의 종료 확인</S.Title>
							<S.CloseBtn aria-label="창 닫기" onClick={startClosingModal}>
								<CloseIcon />
							</S.CloseBtn>
						</S.ModalHeader>
						<S.ContentContainer id={descriptionId}>
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
								onClick={startClosingModal}
								autoFocus={true}
							>
								취소
							</S.ControlPanelBtn>
							<S.ControlPanelBtn
								type="button"
								$backgroundColor="#ff4040"
								$hoverBackgroundColor="#ff7c7c"
								onClick={() => {
									onConfirm();
									startClosingModal();
								}}
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
