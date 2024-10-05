import axios from 'axios';
import { API_SERVER_URL } from '../constants/serverUrl';

const fetchRoomKey = async (roomCode: string) => {
	const response = await axios.post(`${API_SERVER_URL}/rooms/${roomCode}`);

	return response.data;
};

export default fetchRoomKey;
