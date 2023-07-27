import type {Plugin} from 'vite';

export const docExtractor = (): Plugin => {
	return {
		name: 'my-api',
		transform: {
			order: 'pre',
			handler(code: string, id: string) {
				if (id.endsWith('&extractApi')) {
					const widgetLowerCase = id.split('?')[1].split('&')[0].toLowerCase();
					// const widgetName = widgetLowerCase.at(0)?.toUpperCase() + widgetLowerCase.substring(1);
					const doc = JSON.parse(code);
					return JSON.stringify(doc.widgets[widgetLowerCase]);
				}
			},
		},
	};
};
