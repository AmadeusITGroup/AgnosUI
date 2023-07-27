const os = require('os');

/** @type import("prettier").Options */
module.exports = {
	bracketSpacing: false,
	endOfLine: os.EOL === '\r\n' ? 'crlf' : 'lf',
	plugins: ['prettier-plugin-svelte'],
};
