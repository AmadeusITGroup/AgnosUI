import type {Locator} from '@playwright/test';
import {BasePO} from '@agnos-ui/base-po';

export const toastSelectors = {
	rootComponent: '.toast',
	closeButton: '.btn-close',
	header: '.toast-header',
	body: '.toast-body',
};

export class ToastPO extends BasePO {
	selectors = structuredClone(toastSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorCloseButton(): Locator {
		return this.locatorRoot.locator(this.selectors.closeButton);
	}

	async state() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement, selectors) => {
			const body = rootNode.querySelector<HTMLDivElement>(selectors.body)?.innerText;
			const header = rootNode.querySelector<HTMLDivElement>(selectors.header)?.innerText;
			const closeButton = rootNode.querySelector<HTMLButtonElement>(selectors.closeButton)?.getAttribute('aria-label');
			return {
				rootClasses: rootNode.className.trim().split(' ').sort(),
				body,
				header,
				closeButton,
			};
		}, this.selectors);
	}
}
