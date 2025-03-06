// context
import {getContext, setContext} from 'svelte';
import type {CarouselApi} from '@agnos-ui/svelte-headless/components/carousel';

const contextInjectionKey = Symbol('carousel-api');

/**
 * Sets the Carousel API in the context.
 *
 * @param carouselApi - The Carousel API to be set in the context.
 */
export function setCarouselApiContext(carouselApi: CarouselApi) {
	setContext(contextInjectionKey, carouselApi);
}

/**
 * Retrieves the Carousel API from the Svelte context.
 *
 * @returns The Carousel API instance.
 */
export function getCarouselApiContext(): CarouselApi {
	return getContext(contextInjectionKey);
}
