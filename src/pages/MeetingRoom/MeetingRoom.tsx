import useOpenViduMeetingRoom from '../../hooks/useOpenViduMeetingRoom';
import UserVideoGrid from '../../components/UserVideoGrid';
import * as S from './MeetingRoom.styled';

const MeetingRoom = () => {
	const { participantInfos } = useOpenViduMeetingRoom();

	return (
		<S.Container>
			<UserVideoGrid userVideoInfos={participantInfos} />
		</S.Container>
	);
};

export default MeetingRoom;
