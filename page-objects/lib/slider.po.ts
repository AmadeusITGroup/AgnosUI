import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export const sliderSelectors = {
	rootComponent: '.au-slider',
	clickableArea: '.au-slider-clickable-area',
	handle: '.au-slider-handle',
	tick: '.au-slider-tick',
	tickLabel: '.au-slider-tick-label',
	tickLabelVertical: '.au-slider-tick-label-vertical',
	tickLabelNow: '.au-slider-tick-label-now',
	minLabelHorizontal: '.au-slider-label-min',
	maxLabelHorizontal: '.au-slider-label-max',
	minLabelVertical: '.au-slider-label-vertical-min',
	maxLabelVertical: '.au-slider-label-vertical-max',
	valueLabel: '.au-slider-label-now',
	progress: '.au-slider-progress',
};

export class SliderPO extends BasePO {
	selectors = structuredClone(sliderSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorHandle(): Locator {
		return this.locatorRoot.locator(this.selectors.handle);
	}

	get locatorTick(): Locator {
		return this.locatorRoot.locator(this.selectors.tick);
	}

	get locatorTickLabel(): Locator {
		return this.locatorRoot.locator(this.selectors.tickLabel);
	}

	get locatorTickLabelNow(): Locator {
		return this.locatorRoot.locator(this.selectors.tickLabelNow);
	}

	get locatorTickLabelVertical(): Locator {
		return this.locatorRoot.locator(this.selectors.tickLabelVertical);
	}

	get locatorMinLabelHorizontal(): Locator {
		return this.locatorRoot.locator(this.selectors.minLabelHorizontal);
	}

	get locatorMaxLabelHorizontal(): Locator {
		return this.locatorRoot.locator(this.selectors.maxLabelHorizontal);
	}

	get locatorMinLabelVertical(): Locator {
		return this.locatorRoot.locator(this.selectors.minLabelVertical);
	}

	get locatorMaxLabelVertical(): Locator {
		return this.locatorRoot.locator(this.selectors.maxLabelVertical);
	}

	get locatorProgress(): Locator {
		return this.locatorRoot.locator(this.selectors.progress);
	}

	get locatorValueLabel(): Locator {
		return this.locatorRoot.locator(this.selectors.valueLabel);
	}

	async sliderHandleState() {
		return this.locatorRoot.locator(this.selectors.handle).evaluateAll((rootNode: HTMLElement[]) => {
			return rootNode.map((rn) => {
				return {
					style: rn.getAttribute('style'),
					value: rn.getAttribute('aria-valuenow'),
					min: rn.getAttribute('aria-valuemin'),
					max: rn.getAttribute('aria-valuemax'),
					disabled: rn.getAttribute('aria-disabled'),
					readonly: rn.getAttribute('aria-readonly'),
					ariaLabel: rn.getAttribute('aria-label'),
					ariaValueText: rn.getAttribute('aria-valuetext'),
				};
			});
		});
	}

	async sliderProgressState() {
		return this.locatorRoot.locator(this.selectors.progress).evaluateAll((rootNode: HTMLElement[]) => {
			return rootNode.map((rn) => rn.getAttribute('style'));
		});
	}

	/**
	 * Get the state of the tick elements
	 * @param locator tick locator (horizontal or vertical)
	 * @returns state of all the ticks
	 */
	async sliderTickLabelState(locator: Locator) {
		return locator.evaluateAll((rootNode: HTMLElement[]) => {
			return rootNode.map((rn) => {
				return {
					style: rn.getAttribute('style'),
					innerText: rn.innerText,
				};
			});
		});
	}
}
