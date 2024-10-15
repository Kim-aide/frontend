import useOpenViduMeetingRoom from '../../hooks/useOpenViduMeetingRoom';
import MeetingExitMenu from '../../components/MeetingExitMenu';
import UserVideoGrid from '../../components/UserVideoGrid';
import IconToggleBtn from '../../components/common/IconToggleBtn';
import {
	VideocamIcon,
	VideocamOffIcon,
	MicrophoneIcon,
	MicrophoneOffIcon,
	HeadsetIcon,
	HeadsetOffIcon,
} from '../../assets/svg';
import * as S from './MeetingRoom.styled';

const MeetingRoom = () => {
	const {
		participantInfos,
		isConnected,
		isCamActive,
		isMicActive,
		isHeadsetActive,
		leaveSession,
		toggleCamActive,
		toggleMicActive,
		toggleHeadsetActive,
	} = useOpenViduMeetingRoom();

	return (
		<S.Container>
			<S.UserVideoGridContainer>
				<UserVideoGrid userVideoInfos={participantInfos} />
			</S.UserVideoGridContainer>
			<S.ControlPanel>
				<IconToggleBtn
					activeIcon={<VideocamIcon />}
					inactiveIcon={<VideocamOffIcon />}
					isActive={isCamActive}
					onClick={toggleCamActive}
					disabled={!isConnected}
				/>
				<IconToggleBtn
					activeIcon={<MicrophoneIcon />}
					inactiveIcon={<MicrophoneOffIcon />}
					isActive={isMicActive}
					onClick={toggleMicActive}
					disabled={!isConnected}
				/>
				<IconToggleBtn
					activeIcon={<HeadsetIcon />}
					inactiveIcon={<HeadsetOffIcon />}
					isActive={isHeadsetActive}
					onClick={toggleHeadsetActive}
					disabled={!isConnected}
				/>
				<MeetingExitMenu
					roomName="테스트 룸"
					onMeetingExit={leaveSession}
					onMeetingEnd={() => {
						alert(
							'미팅 전체를 종료하는 로직은 아직 명세가 공개되지 않아 지금은 작동하지 않지만, 이 메시지가 띄워진다면 구현이 완료된 이후에는 미팅방을 제거하는 로직이 실행될 것입니다!',
						);
					}}
				/>
			</S.ControlPanel>
		</S.Container>
	);
};

export default MeetingRoom;
