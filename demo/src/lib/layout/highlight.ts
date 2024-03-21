import {getHighlighter, type ThemeInput} from 'shiki';
import lightPlus from './light-plus.json' with {type: 'json'};
import darkPlus from './dark-plus.json' with {type: 'json'};

export const langs = ['angular-ts', 'angular-html', 'tsx', 'html', 'css', 'scss', 'svelte', 'bash', 'typescript'];

const highlighter = await getHighlighter({
	langs,
	themes: [lightPlus as ThemeInput, darkPlus as ThemeInput],
});
export default highlighter;

const extensionRegExp = /\.\w+$/;
export const languageFromFileName = (fileName: string | undefined) => {
	if (fileName) {
		const extensionMatch = extensionRegExp.exec(fileName);
		switch (extensionMatch?.[0]) {
			case '.ts':
				if (fileName.endsWith('.component.ts')) {
					return 'angular-ts';
				}
				return 'typescript';
			case '.tsx':
				return 'tsx';
			case '.html':
				if (fileName.endsWith('.component.html')) {
					return 'angular-html';
				}
				return 'html';
			case '.css':
				return 'css';
			case '.scss':
				return 'scss';
			case '.svelte':
				return 'svelte';
			case '.sh':
				return 'bash';
			case '.svg':
				return 'html';
			default:
				return undefined;
		}
	}
};
