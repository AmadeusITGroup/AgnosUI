import {createHighlighterCore} from 'shiki/core';
import {createJavaScriptRegexEngine} from 'shiki/engine/javascript';
import shikiAngularTS from '@shikijs/langs/angular-ts';
import shikiAngularHTML from '@shikijs/langs/angular-html';
import shikiTsx from '@shikijs/langs/tsx';
import shikiHtml from '@shikijs/langs/html';
import shikiCss from '@shikijs/langs/css';
import shikiScss from '@shikijs/langs/scss';
import shikiSvelte from '@shikijs/langs/svelte';
import shikiBash from '@shikijs/langs/bash';
import shikiTypescript from '@shikijs/langs/typescript';
import shikiThemeLight from '@shikijs/themes/github-light-default';
import shikiThemeDark from '@shikijs/themes/github-dark-default';

export const langs = ['angular-ts', 'angular-html', 'tsx', 'html', 'css', 'scss', 'svelte', 'bash', 'typescript', 'ts'];

const highlighter = await createHighlighterCore({
	langs: [shikiAngularTS, shikiAngularHTML, shikiTsx, shikiHtml, shikiCss, shikiScss, shikiSvelte, shikiBash, shikiTypescript],
	themes: [shikiThemeLight, shikiThemeDark],
	engine: createJavaScriptRegexEngine(),
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
