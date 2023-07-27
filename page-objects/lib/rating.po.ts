import {BasePO} from '@agnos-ui/base-po';

export const ratingSelectors = {
	rootComponent: '.au-rating',
	star: '.au-rating-star',
};

// TODO add selector list
export class RatingPO extends BasePO {
	selectors = structuredClone(ratingSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	/**
	 * Get the main title locator of the feature page
	 */
	locatorStar(index: number) {
		return this.locatorRoot.locator(this.selectors.star).nth(index);
	}

	// TODO to be pushed to the test itself
	// We already discuss with Guillaume Saas not to put this in the basic PO which should only return locator basically
	async state() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement, selectors) => {
			const starsElements = [...rootNode.querySelectorAll(selectors.star)] as HTMLSpanElement[];
			const stars = [];
			const classes = [];
			for (const element of starsElements) {
				stars.push((element.textContent || '').trim());
				classes.push(element.className.split(' '));
			}

			return {
				rootClasses: rootNode.className.trim().split(' '),
				value: rootNode.getAttribute('aria-valuenow'),
				min: rootNode.getAttribute('aria-valuemin'),
				max: rootNode.getAttribute('aria-valuemax'),
				text: rootNode.getAttribute('aria-valuetext'),
				disabled: rootNode.getAttribute('aria-disabled'),
				readonly: rootNode.getAttribute('aria-readonly'),
				stars,
				classes,
			};
		}, this.selectors);
	}
}
