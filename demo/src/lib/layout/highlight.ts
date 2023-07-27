import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
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
