import {describe, expect, test} from 'vitest';
import {marked} from 'marked';
import {getTokens} from './getTokens';

describe('getTokens', () => {
	marked.use({
		extensions: [
			{
				name: 'section',
				level: 'block',
				renderer(token) {
					return `<section>${this.parser.parse(token.tokens!)}</section>`;
				},
			},
		],
	});

	const expectGetTokens = (inputMarkdown: string, expectedHtml: string) => {
		expect(marked.parser(getTokens(inputMarkdown)).trim()).toEqual(expectedHtml.trim());
	};

	test('will not do anything on markdown without any heading', () => {
		expectGetTokens('Some markdown text', '<p>Some markdown text</p>');
	});

	test('will wrap up in section when using level 2 headings', () => {
		expectGetTokens(
			`
# Introduction

## My beautiful writing

Hello sirs !`,
			`<h1>Introduction</h1>
<section><h2>My beautiful writing</h2>
<p>Hello sirs !</p>
</section>`,
		);
	});

	test('will wrap up in two sections when using two level 2 headings', () => {
		expectGetTokens(
			`
# Introduction

## My beautiful writing

Hello sirs !

## Second writing

Hello ladies !`,
			`<h1>Introduction</h1>
<section><h2>My beautiful writing</h2>
<p>Hello sirs !</p>
</section><section><h2>Second writing</h2>
<p>Hello ladies !</p>
</section>`,
		);
	});

	test('will properly work with level 3 headings', () => {
		expectGetTokens(
			`
# Introduction

## My beautiful writing

Hello sirs !

### First level 3

Content

### Second level 3

Content

## Another writing

### Final level 3

Content
`,
			`<h1>Introduction</h1>
<section><h2>My beautiful writing</h2>
<p>Hello sirs !</p>
<section><h3>First level 3</h3>
<p>Content</p>
</section><section><h3>Second level 3</h3>
<p>Content</p>
</section></section><section><h2>Another writing</h2>
<section><h3>Final level 3</h3>
<p>Content</p>
</section></section>`,
		);
	});
});
