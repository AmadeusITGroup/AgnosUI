import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import xml from 'highlight.js/lib/languages/xml';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('angular', () => ({
	subLanguage: 'typescript',
	contains: [
		{
			begin: /^(\s*)(template:\s*`)/gm,
			end: /^(\s*)(`,)/gm,
			subLanguage: 'xml',
			excludeBegin: true,
			excludeEnd: true,
		},
	],
}));
hljs.registerLanguage('react', typescript);
hljs.registerLanguage('svelte', () => ({
	subLanguage: 'xml',
	contains: [
		hljs.COMMENT('<!--', '-->', {
			relevance: 10,
		}),
		{
			begin: /^(\s*)(<script[^>]*>)/gm,
			end: /^(\s*)(<\/script>)/gm,
			subLanguage: 'typescript',
			excludeBegin: true,
			excludeEnd: true,
			contains: [
				{
					begin: /^(\s*)(\$:)/gm,
					end: /(\s*)/gm,
					className: 'keyword',
				},
			],
		},
		{
			begin: /^(\s*)(<style[^>]*>)/gm,
			end: /^(\s*)(<\/style>)/gm,
			subLanguage: 'css',
			excludeBegin: true,
			excludeEnd: true,
		},
		{
			begin: /\{/gm,
			end: /\}/gm,
			subLanguage: 'typescript',
			contains: [
				{
					begin: '{',
					end: '}',
					skip: true,
				},
				{
					begin: /([#:/@])(if|else|each|await|then|catch|debug|html)/gm,
					className: 'keyword',
					relevance: 10,
				},
			],
		},
	],
}));

export default hljs;

const extensionRegExp = /\.\w+$/;
export const languageFromFileName = (fileName: string | undefined) => {
	if (fileName) {
		const extensionMatch = extensionRegExp.exec(fileName);
		switch (extensionMatch?.[0]) {
			case '.ts':
				if (fileName.endsWith('.component.ts')) {
					return 'angular';
				}
				return 'typescript';
			case '.tsx':
				return 'react';
			case '.html':
				return 'html';
			case '.css':
				return 'css';
			case '.scss':
				return 'scss';
			case '.svelte':
				return 'svelte';
			case '.sh':
				return 'bash';
			default:
				return undefined;
		}
	}
};
