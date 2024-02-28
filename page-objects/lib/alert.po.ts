import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export const alertSelectors = {
	rootComponent: '.alert',
	body: '.alert-body',
	closeButton: '.btn-close',
};

export class AlertPO extends BasePO {
	selectors = structuredClone(alertSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorCloseButton(): Locator {
		return this.locatorRoot.locator(this.selectors.closeButton);
	}

	async state() {
		return this.locatorRoot.evaluate((rootNode: HTMLElement, selectors) => {
			// normalize body content to remove non-printable characters such as line breaks
			// as different browsers represent innerText in their own manner
			const body = rootNode.querySelector<HTMLDivElement>(selectors.body)?.innerText?.replace(/[^\x20-\x7E]/g, '');
			const closeButton = rootNode.querySelector<HTMLButtonElement>(selectors.closeButton)?.getAttribute('aria-label');
			return {
				rootClasses: rootNode.className.trim().split(' ').sort(),
				body,
				closeButton,
			};
		}, this.selectors);
	}
}
