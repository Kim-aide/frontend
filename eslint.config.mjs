import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from 'eslint-config-prettier'; // <--
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'; // <--
import { fixupConfigRules } from '@eslint/compat';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...fixupConfigRules(pluginReactConfig),
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
	{
		rules: {
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
		},
	},
];
