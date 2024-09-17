import MeetingExitBtn from './MeetingExitBtn';
import MeetingExitOptionsBubble from './MeetingExitOptionsBubble';
import ConfirmEndMeetingModal from './ConfirmMeetingEndModal';
import useMeetingExitMenu from '../../hooks/useMeetingExitMenu';
import * as S from './MeetingExitMenu.styled';

interface MeetingExitMenuProps {
	roomName: string;
	onMeetingExit: () => void;
	onMeetingEnd: () => void;
}

const MeetingExitMenu = ({
	roomName,
	onMeetingExit,
	onMeetingEnd,
}: MeetingExitMenuProps) => {
	const {
		isExitBubbleOpen,
		isExitBubbleClosing,
		isEndMeetingModalOpen,
		menuContainerRef,
		startOpeningExitBubbleAnimation,
		startClosingExitBubbleAnimation,
		handleClosingExitBubbleAnimationEnd,
		setIsEndMeetingModalOpen,
	} = useMeetingExitMenu();

	return (
		<S.Container ref={menuContainerRef}>
			<MeetingExitBtn onClick={startOpeningExitBubbleAnimation} />
			{isExitBubbleOpen && (
				<S.MeetingExitOptionsBubbleWrapper
					className={isExitBubbleClosing ? 'hidden' : 'visible'}
					onAnimationEnd={handleClosingExitBubbleAnimationEnd}
				>
					<MeetingExitOptionsBubble
						onMeetingExit={() => {
							startClosingExitBubbleAnimation();
							onMeetingExit();
						}}
						onMeetingEnd={() => {
							startClosingExitBubbleAnimation();
							setIsEndMeetingModalOpen(true);
						}}
					/>
				</S.MeetingExitOptionsBubbleWrapper>
			)}
			<ConfirmEndMeetingModal
				roomName={roomName}
				open={isEndMeetingModalOpen}
				onClose={() => {
					setIsEndMeetingModalOpen(false);
				}}
				onConfirm={() => {
					onMeetingEnd();
				}}
			/>
		</S.Container>
	);
};

export default MeetingExitMenu;
