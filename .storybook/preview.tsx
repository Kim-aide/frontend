import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: 'black',
			values: [
				{ name: 'black', value: '#000000' },
				{ name: 'darkGray', value: '#202020' },
				{ name: 'white', value: '#FFFFFF' },
			],
		},
	},
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Story />
			</ThemeProvider>
		),
	],
};

export default preview;
