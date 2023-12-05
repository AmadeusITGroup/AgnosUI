import type {UnsubscribeFunction, UnsubscribeObject} from '@amadeus-it-group/tansu';
import {asReadable, writable} from '@amadeus-it-group/tansu';

/**
 * Creates an iframe handler, allowing to enable dynamic resizing and detect if the parent should display a spinner.
 * The returned spinner store includes a debounce for better user experience.
 *
 * In order to detect when the page is fully loaded, we listen to message events.
 *
 * @param defaultHeight the default height in pixels of the iframe
 * @param resize enable dynamic resizing
 * @param messageType the type of the message event we listen to
 * @param spinnerDebounce the debounce in milliseconds before the spinner store is set to true
 * @returns the handler and a spinner store
 */
export function createIframeHandler(defaultHeight: number, resize = true, messageType = 'sampleload', spinnerDebounce = 300) {
	const _iframeLoaded$ = writable(true);
	const _showSpinner$ = writable(false);
	const _height$ = writable(0);

	let spinnerTimer: any;
	let resizeObserver: ResizeObserver | undefined;
	let heightSubscription: (UnsubscribeFunction & UnsubscribeObject) | undefined;

	const setupObserver = (iframe: HTMLIFrameElement) => {
		if (!resizeObserver) {
			resizeObserver = new ResizeObserver((entries) => {
				if (entries.length === 1) {
					if (_iframeLoaded$()) {
						_height$.set(Math.ceil(entries[0].contentRect.height || _height$()));
					}
				}
			});
		}
		resizeObserver.disconnect();
		const root = iframe.contentDocument?.getElementById('root');
		if (root) {
			resizeObserver.observe(root);
		}
	};
	const onLoad = (event: Event) => {
		if (event.target instanceof HTMLIFrameElement) {
			setupObserver(event.target);
		}
	};

	return {
		showSpinner$: asReadable(_showSpinner$),
		handler: (iframe: HTMLIFrameElement, baseSrc: string) => {
			iframe.onload = onLoad;
			if (iframe.contentDocument?.getElementById('root')) {
				setupObserver(iframe);
			}
			if (resize) {
				heightSubscription = _height$.subscribe((height) => (iframe.height = (height || defaultHeight) + 'px'));
			} else {
				iframe.height = defaultHeight + 'px';
			}

			const update = (baseSrc: string) => {
				if (!iframe.contentWindow?.location?.href?.startsWith(baseSrc)) {
					_iframeLoaded$.set(false);
					if (spinnerTimer) {
						clearTimeout(spinnerTimer);
					}
					spinnerTimer = setTimeout(() => {
						_showSpinner$.set(true);
						spinnerTimer = undefined;
					}, spinnerDebounce);
				}
			};
			update(baseSrc);

			const sampleLoad = (e: Event) => {
				if (e instanceof MessageEvent && e.data.type === messageType && e.source === iframe.contentWindow) {
					if (spinnerTimer) {
						clearTimeout(spinnerTimer);
						spinnerTimer = undefined;
					}
					_iframeLoaded$.set(true);
					_showSpinner$.set(false);
				}
			};
			window.addEventListener('message', sampleLoad, false);

			return {
				update,
				destroy: () => {
					window.removeEventListener('message', sampleLoad);
					resizeObserver?.disconnect();
					heightSubscription?.unsubscribe();
				},
			};
		},
	};
}
