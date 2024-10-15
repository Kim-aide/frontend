import React from 'react';
import { Global, css } from '@emotion/react';

const baseStyle = css`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		font-family: Pretendard;
		box-sizing: border-box;
	}

	html,
	body {
		width: 100%;
		height: 100%;
	}

	#root {
		width: 100%;
		height: 100%;
	}

	button {
		border: 0;

		cursor: pointer;
	}

	button:disabled {
		cursor: not-allowed;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	body:has([role='dialog']) {
		overflow: hidden;
	}
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
