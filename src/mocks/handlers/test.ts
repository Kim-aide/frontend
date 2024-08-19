import { http, HttpResponse } from 'msw';

export const testHandlers = [
	http.get('/api/test', () => {
		return HttpResponse.json({
			text: 'Kim-Aide MSW Test!',
		});
	}),
];
