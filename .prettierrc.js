import os from 'os';

/** @type import("prettier").Options */
export default {
	bracketSpacing: false,
	endOfLine: os.EOL === '\r\n' ? 'crlf' : 'lf',
	plugins: ['prettier-plugin-svelte'],
	overrides: [
		{
			files: 'angular/**/*.html',
			options: {
				parser: 'angular',
			},
		},
	],
};
