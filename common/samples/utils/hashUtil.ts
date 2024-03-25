import {readable} from '@amadeus-it-group/tansu';

export const hash$ =
	typeof window === 'undefined'
		? readable('')
		: readable('', (set) => {
				function updateFromHash() {
					const hash = location.hash;
					set(hash ? hash.substring(1) : '');
				}

				window.addEventListener('hashchange', updateFromHash);
				updateFromHash();
				return () => window.removeEventListener('hashchange', updateFromHash);
			});
