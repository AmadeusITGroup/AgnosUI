import os from 'os';

/** @type import("prettier").Options */
export default {
	bracketSpacing: false,
	endOfLine: os.EOL === '\r\n' ? 'crlf' : 'lf',
	plugins: ['prettier-plugin-svelte'],
};
