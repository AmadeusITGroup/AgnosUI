import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export const carouselSelectors = {
	rootComponent: '.au-carousel',
	container: '.au-carousel-container',
	slide: '.au-carousel-slide',
	nextBtn: '.carousel-control-next',
	prevBtn: '.carousel-control-prev',
	indicators: '.carousel-indicators',
	indicatorBtn: '.carousel-indicators button',
};

export interface CarouselPOState {
	rootClasses: string[];
	prevBtn: boolean;
	nextBtn: boolean;
	indicators: {
		selected: number;
		count: number;
	};
	slides: {
		visible: number;
	};
}

export class CarouselPO extends BasePO {
	selectors = structuredClone(carouselSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorContainer(): Locator {
		return this.locatorRoot.locator(this.selectors.container);
	}

	get locatorNextBtn(): Locator {
		return this.locatorRoot.locator(this.selectors.nextBtn);
	}

	get locatorPrevBtn(): Locator {
		return this.locatorRoot.locator(this.selectors.prevBtn);
	}

	get locatorIndicators(): Locator {
		return this.locatorRoot.locator(this.selectors.indicators);
	}

	get locatorIndicatorBtn(): Locator {
		return this.locatorRoot.locator(this.selectors.indicatorBtn);
	}

	get locatorSlide(): Locator {
		return this.locatorRoot.locator(this.selectors.slide);
	}

	async state(): Promise<CarouselPOState> {
		return this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			const indicators = rootNode.querySelectorAll('.carousel-indicators button');
			return {
				rootClasses: rootNode.className.trim().split(' ').sort(),
				prevBtn: rootNode.querySelector('.carousel-control-prev') !== null,
				nextBtn: rootNode.querySelector('.carousel-control-next') !== null,
				indicators: {
					selected: [...indicators].findIndex((indicator) => indicator.classList.contains('active')),
					count: indicators.length,
				},
				slides: {
					visible: [...rootNode.querySelectorAll('.au-carousel-slide')].findIndex((slide) => {
						const slideBoundingRect = slide.getBoundingClientRect();
						const rootBoundingRect = rootNode.getBoundingClientRect();
						return slideBoundingRect.left >= rootBoundingRect.left && slideBoundingRect.right <= rootBoundingRect.right;
					}),
				},
			};
		});
	}
}
