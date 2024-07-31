import {browserDirective} from '@agnos-ui/svelte-bootstrap/utils';
import {createResizeObserver} from '@agnos-ui/svelte-bootstrap/services';
import {asReadable, writable, type UnsubscribeFunction} from '@amadeus-it-group/tansu';
import {derived} from 'svelte/store';

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

	let spinnerTimer: any;
	const {dimensions$: iframeDimensions$, directive: resizeDirective} = createResizeObserver();
	let resizeDirectiveApplied: ReturnType<typeof resizeDirective>;

	const height$ = derived(
		[iframeDimensions$, _iframeLoaded$],
		([iframeDimensions, iframeLoaded], set) => {
			const height = iframeDimensions?.borderBoxSize?.[0]?.blockSize;
			if (iframeLoaded && height) {
				set(Math.ceil(height));
			}
		},
		defaultHeight,
	);

	const setupObserver = (iframe: HTMLIFrameElement) => {
		const root = iframe.contentDocument?.getElementById('root');
		if (root) {
			resizeDirectiveApplied?.destroy?.();
			resizeDirectiveApplied = resizeDirective(root);
		}
	};
	const onLoad = (event: Event) => {
		if (event.target instanceof HTMLIFrameElement) {
			setupObserver(event.target);
			event.target.classList.add('loaded');
		}
	};

	return {
		showSpinner$: asReadable(_showSpinner$),
		handlerDirective: browserDirective((iframe: HTMLIFrameElement, baseSrc: string) => {
			let heightUnsubscribe: UnsubscribeFunction | undefined;

			iframe.onload = onLoad;
			setupObserver(iframe);
			if (resize) {
				heightUnsubscribe?.();
				heightUnsubscribe = height$.subscribe((height) => (iframe.height = height + 'px'));
			} else {
				iframe.height = defaultHeight + 'px';
			}

			const update = (baseSrc: string) => {
				if (
					!iframe.contentWindow?.location?.href?.startsWith(baseSrc) ||
					!iframe.contentDocument ||
					iframe.contentDocument.readyState === 'loading'
				) {
					iframe.classList.remove('loaded');
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
					iframe.classList.add('loaded');
				}
			};
			window.addEventListener('message', sampleLoad, false);

			return {
				update,
				destroy: () => {
					window.removeEventListener('message', sampleLoad);
					heightUnsubscribe?.();
					resizeDirectiveApplied?.destroy?.();
				},
			};
		}),
	};
}
