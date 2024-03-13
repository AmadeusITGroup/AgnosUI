import {marked} from 'marked';

export function getTokens(src: string): marked.TokensList {
	const tokens = marked.lexer(src);
	const walkTokens = (tokens: marked.TokensList | marked.Token[]) => {
		let indexLastHeading = -1;
		let indexLastSubHeading = -1;
		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];
			if ((token as marked.Tokens.Generic).tokens?.length) {
				walkTokens((token as marked.Tokens.Generic).tokens!);
			}
			if (token.type === 'heading' && token.depth === 3) {
				if (indexLastSubHeading >= 0) {
					tokens.splice(indexLastSubHeading, i - indexLastSubHeading, {
						type: 'section',
						tokens: tokens.slice(indexLastSubHeading, i),
					} as unknown as marked.Token);
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
						} as unknown as marked.Token);
						i = indexLastSubHeading + 1;
					}
					indexLastSubHeading = i;
					tokens.splice(indexLastHeading, i - indexLastHeading, {
						type: 'section',
						tokens: tokens.slice(indexLastHeading, i),
					} as unknown as marked.Token);
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
			} as unknown as marked.Token);
		}
		if (indexLastHeading >= 0) {
			tokens.splice(indexLastHeading, tokens.length - indexLastHeading, {
				type: 'section',
				tokens: tokens.slice(indexLastHeading, tokens.length),
			} as unknown as marked.Token);
		}
	};
	walkTokens(tokens);
	return tokens;
}
