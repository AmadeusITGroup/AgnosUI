import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export const sliderSelectors = {
	rootComponent: '.au-slider',
	clickableArea: '.au-clickable-slider-area',
	handle: '.au-slider-handle',
	minLabelHorizontal: '.au-slider-label-min',
	maxLabelHorizontal: '.au-slider-label-max',
	minLabelVertical: '.au-slider-label-vertical-min',
	maxLabelVertical: '.au-slider-label-vertical-max',
	sliderProgress: '.au-slider-progress',
};

export class SliderPO extends BasePO {
	selectors = structuredClone(sliderSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorHandle(): Locator {
		return this.locatorRoot.locator(this.selectors.handle);
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

	async sliderHandleState() {
		return this.locatorRoot.locator(this.selectors.handle).evaluateAll((rootNode: HTMLElement[]) => {
			return rootNode.map((rn) => {
				return {
					style: rn.getAttribute('style'),
					value: rn.getAttribute('aria-valuenow'),
					min: rn.getAttribute('aria-valuemin'),
					max: rn.getAttribute('aria-valuemax'),
					text: rn.getAttribute('aria-valuetext'),
					disabled: rn.getAttribute('aria-disabled'),
					readonly: rn.getAttribute('aria-readonly'),
				};
			});
		});
	}

	async sliderProgressState() {
		return this.locatorRoot.locator(this.selectors.sliderProgress).evaluateAll((rootNode: HTMLElement[]) => {
			return rootNode.map((rn) => rn.getAttribute('style'));
		});
	}
}
