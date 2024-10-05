import axios from 'axios';
import { API_SERVER_URL } from '../constants/serverUrl';

const fetchRoomCode = async () => {
	const response = await axios.get(`${API_SERVER_URL}/room`);

	return response.data;
};

export default fetchRoomCode;
