import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export const progressbarSelectors = {
	rootComponent: '[role="progressbar"]',
	outerBar: '.progress',
	innerBar: '.progress-bar',
};

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
}
