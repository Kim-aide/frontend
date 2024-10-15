// import useOpenViduMeetingRoom from '../../hooks/useOpenViduMeetingRoom';
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
	// const { participantInfos } = useOpenViduMeetingRoom();
	const participantsCount = 9;
	const avatarUrl =
		'https://github.com/user-attachments/assets/20a8431a-f2c0-44b5-8f12-848630b44b91';

	const participantInfos = Array.from({ length: participantsCount }).map(
		(_, index) => ({
			streamManager: {
				addVideoElement: () => {},
				stream: {
					videoActive: false,
					streamId: String(index + 1),
				},
				on: () => {},
				off: () => {},
			},
			avatar: avatarUrl,
			nickname: `참가자 ${index + 1}`,
		}),
	);

	return (
		<S.Container>
			<S.UserVideoGridContainer>
				{/* @ts-expect-error 테스트용이므로, 실제 타입과 일치하지 않습니다. */}
				<UserVideoGrid userVideoInfos={participantInfos} />
			</S.UserVideoGridContainer>
			<S.ControlPanel>
				<IconToggleBtn
					activeIcon={<VideocamIcon />}
					inactiveIcon={<VideocamOffIcon />}
					isActive={true}
					onClick={() => {}}
				/>
				<IconToggleBtn
					activeIcon={<MicrophoneIcon />}
					inactiveIcon={<MicrophoneOffIcon />}
					isActive={true}
					onClick={() => {}}
				/>
				<IconToggleBtn
					activeIcon={<HeadsetIcon />}
					inactiveIcon={<HeadsetOffIcon />}
					isActive={true}
					onClick={() => {}}
				/>
				<MeetingExitMenu
					roomName="테스트 룸"
					onMeetingExit={() => {
						`leaveSession`; // 임시방편
						// 이렇게 주석을 달면 코드가 더 더러워져 보일 수 있지만
						// 내가 안 읽으면 상관이
						// 아무튼 없
						// 다
					}}
					onMeetingEnd={() => {}}
				/>
			</S.ControlPanel>
		</S.Container>
	);
};

export default MeetingRoom;
