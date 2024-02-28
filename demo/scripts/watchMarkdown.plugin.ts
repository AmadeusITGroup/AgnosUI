import type {Plugin} from 'vite';

export const watchMarkdown = (): Plugin => {
	return {
		name: 'watch-markdown',
		load: {
			order: 'pre',
			async handler(id) {
				if (id.endsWith('.md?url')) {
					this.addWatchFile(id.slice(0, -4));
				}
			},
		},
	};
};
