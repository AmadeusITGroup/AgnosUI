const e=`# @agnos-ui/svelte-preprocess

[![npm](https://img.shields.io/npm/v/@agnos-ui/svelte-preprocess)](https://www.npmjs.com/package/@agnos-ui/svelte-preprocess)

Preprocessor to run [Svelte](https://svelte.dev/) [actions](https://svelte.dev/docs/svelte-action) server-side, which are called [directives](https://amadeusitgroup.github.io/AgnosUI/latest/docs/angular/headless/directives) in AgnosUI.

## Installation

\`\`\`sh
npm install @agnos-ui/svelte-preprocess
\`\`\`

## Usage

Add the \`directivesPreprocess()\` preprocessor to your \`svelte.config.js\`:

\`\`\`js
import {directivesPreprocess} from '@agnos-ui/svelte-preprocess';

// ...

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// ...

	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		// ... existing preprocessors

		// Add the following line:
		directivesPreprocess(),
	],

	// ...
};

export default config;
\`\`\`

Given the following file:

\`\`\`svelte
<script>
	import {myDirective} from './myDirective';
<\/script>

<div use:myDirective></div>
\`\`\`

The preprocessor will transform it into something like:

\`\`\`svelte
<script>
	import {ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
	import {BROWSER} from 'esm-env';
	import {myDirective} from './myDirective';
<\/script>

<div use:myDirective {...BROWSER ? {} : ssrAttributes(myDirective)}></div>
\`\`\`

On the server, \`ssrAttributes\` runs all the provided directives with an [\`SSRHTMLElement\`](https://github.com/AmadeusITGroup/AgnosUI/blob/ffc1339eb60e02e07d3415efd3f6fac890c8a39d/core/src/types.ts#L94) that implements a subset of the full [\`HTMLElement\`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement). The attributes added by the directives on this element are returned by \`ssrAttributes\` to be included in the SSR-generated markup.

If the element has a \`class\` attribute, the preprocessor will replace it with the \`classDirective\` directive to make sure the value of the class attribute is correctly merged both on the server and on the client with any other class that may be added by some other directive.
`;export{e as default};
