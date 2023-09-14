import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export const progressbarSelectors = {
	rootComponent: '[role="progressbar"]',
	outerBar: '.progress',
	innerBar: '.progress-bar',
};

export interface State {
	ariaLabel: string | null;
	ariaValueNow: string | null;
	ariaValueMin: string | null;
	ariaValueMax: string | null;
	ariaValueText: string | null;
	label: string | null | undefined;
	innerClasses: string[];
}

export class ProgressbarPO extends BasePO {
	selectors = structuredClone(progressbarSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorOuterBar(): Locator {
		return this.locatorRoot.locator(this.selectors.outerBar);
	}
	get locatorInnerBar(): Locator {
		return this.locatorRoot.locator(this.selectors.innerBar);
	}

	async getState(): Promise<State> {
		return this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			const innerBar = rootNode.querySelector('.progress-bar');
			return {
				ariaLabel: rootNode.getAttribute('aria-label'),
				ariaValueNow: rootNode.getAttribute('aria-valuenow'),
				ariaValueMin: rootNode.getAttribute('aria-valuemin'),
				ariaValueMax: rootNode.getAttribute('aria-valuemax'),
				ariaValueText: rootNode.getAttribute('aria-valuetext'),
				label: innerBar?.textContent?.trim(),
				innerClasses: innerBar?.className?.trim()?.split(' ')?.sort() ?? [],
			};
		});
	}
}
