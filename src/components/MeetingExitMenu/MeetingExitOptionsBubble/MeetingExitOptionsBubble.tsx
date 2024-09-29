import * as S from './MeetingExitOptionsBubble.styled';

interface MeetingExitOptionsBubbleProps {
	onMeetingExit: () => void;
	onMeetingEnd: () => void;
}

const MeetingExitOptionsBubble = ({
	onMeetingExit,
	onMeetingEnd,
}: MeetingExitOptionsBubbleProps) => {
	return (
		<S.Container>
			<S.ControlPanelBtn
				type="button"
				$backgroundColor="#515151"
				$hoverBackgroundColor="#656565"
				onClick={onMeetingExit}
			>
				회의 나가기
			</S.ControlPanelBtn>
			<S.ControlPanelBtn
				type="button"
				$backgroundColor="#ff4040"
				$hoverBackgroundColor="#ff7c7c"
				onClick={onMeetingEnd}
			>
				모든 참가자에 대해 회의 종료하기
			</S.ControlPanelBtn>
		</S.Container>
	);
};

export default MeetingExitOptionsBubble;
