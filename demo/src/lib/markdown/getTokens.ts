import {type TokensList, type Token, type Tokens, lexer} from 'marked';

export function getTokens(src: string): TokensList {
	const tokens = lexer(src);
	const walkTokens = (tokens: TokensList | Token[]) => {
		let indexLastHeading = -1;
		let indexLastSubHeading = -1;
		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];
			if ((token as Tokens.Generic).tokens?.length) {
				walkTokens((token as Tokens.Generic).tokens!);
			}
			if (token.type === 'heading' && token.depth === 3) {
				if (indexLastSubHeading >= 0) {
					tokens.splice(indexLastSubHeading, i - indexLastSubHeading, {
						type: 'section',
						tokens: tokens.slice(indexLastSubHeading, i),
						depth: 3,
					} as unknown as Token);
					i = indexLastSubHeading + 1;
				}
				indexLastSubHeading = i;
			}
			if (token.type === 'heading' && token.depth === 2) {
				if (indexLastHeading >= 0) {
					if (indexLastSubHeading >= 0) {
						tokens.splice(indexLastSubHeading, i - indexLastSubHeading, {
							type: 'section',
							tokens: tokens.slice(indexLastSubHeading, i),
							depth: 3,
						} as unknown as Token);
						i = indexLastSubHeading + 1;
					}
					indexLastSubHeading = i;
					tokens.splice(indexLastHeading, i - indexLastHeading, {
						type: 'section',
						tokens: tokens.slice(indexLastHeading, i),
						depth: 2,
					} as unknown as Token);
					i = indexLastHeading + 1;
					indexLastSubHeading = -1;
				}
				indexLastHeading = i;
			}
		}
		if (indexLastSubHeading >= 0) {
			tokens.splice(indexLastSubHeading, tokens.length - indexLastSubHeading, {
				type: 'section',
				tokens: tokens.slice(indexLastSubHeading, tokens.length),
				depth: 3,
			} as Token);
		}
		if (indexLastHeading >= 0) {
			tokens.splice(indexLastHeading, tokens.length - indexLastHeading, {
				type: 'section',
				tokens: tokens.slice(indexLastHeading, tokens.length),
				depth: 2,
			} as Token);
		}
	};
	walkTokens(tokens);
	return tokens;
}
