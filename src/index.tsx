import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

const enableMocking = async () => {
	if (process.env.NODE_ENV === 'production') {
		return;
	}

	const { worker } = await import('./mocks/browser');

	return worker.start();
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

enableMocking().then(() => {
	root.render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</React.StrictMode>,
	);
});
