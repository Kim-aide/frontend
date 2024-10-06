import axios from 'axios';
import { API_SERVER_URL } from '../constants/serverUrl';

const fetchRoomKey = async (roomCode: string) => {
	const { data } = await axios.post(`${API_SERVER_URL}/rooms/${roomCode}`);

	return data.roomKey;
};

export default fetchRoomKey;
