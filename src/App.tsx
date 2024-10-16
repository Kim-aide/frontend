import React from 'react';
import Main from './pages/Main/Main';
import MeetingRoom from './pages/MeetingRoom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/rooms/*" element={<MeetingRoom />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
