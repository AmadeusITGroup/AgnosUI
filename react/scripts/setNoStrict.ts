import type {Plugin} from 'vite';

const mainTsx = /.*main\.tsx$/;

export const setNoStrict = (): Plugin => {
	return {
		name: 'set-no-strict',
		apply: 'serve',
		enforce: 'pre',
		transform(src, id) {
			if (mainTsx.test(id) && process.env.STRICT === 'false') {
				return {
					code: src.replace('<React.StrictMode>', '').replace('</React.StrictMode>', ''),
					map: null,
				};
			}
		},
	};
};
