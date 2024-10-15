import * as S from './Main.styled';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_SERVER_URL } from '../../constants/serverUrl';

const registerAndFetchRoomCode = async () => {
	const { data } = await axios.post(
		`${API_SERVER_URL}/room`,
		{ userId: 1 },
		{
			headers: {
				'Content-Type': 'application/json',
			},
		},
	);

	return data.roomCode;
};

const Main = () => {
	const navigate = useNavigate();

	const createMeetingRoom = async () => {
		const roomCode = await registerAndFetchRoomCode();
		navigate(`/rooms/${roomCode}`);
	};

	return (
		<S.Container>
			<S.Title>김비서 / Kim-Aide 테스트 페이지</S.Title>
			<p>
				방을 생성하고, 자동으로 생성된 방에 참가하려면 아래의 버튼을 눌러
				주세요.
			</p>
			<S.JoinBtn type="button" onClick={createMeetingRoom}>
				생성 및 참가
			</S.JoinBtn>
		</S.Container>
	);
};

export default Main;
