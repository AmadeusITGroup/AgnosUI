import type {Locator} from '@playwright/test';
import {BasePO} from '@agnos-ui/base-po';

export const modalSelectors = {
	// TODO: should we use bootstrap-independent classes starting with au- ?
	rootComponent: '.modal',
	closeButton: '.btn-close',
	backdrop: "xpath=./preceding-sibling::div[contains(@class,'modal-backdrop')]",
	header: '.modal-header',
	title: '.modal-title',
	body: '.modal-body',
	footer: '.modal-footer',
};

export class ModalPO extends BasePO {
	selectors = structuredClone(modalSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorHeader(): Locator {
		return this.locatorRoot.locator(this.selectors.header);
	}

	get locatorTitle(): Locator {
		return this.locatorHeader.locator(this.selectors.title);
	}

	get locatorBody(): Locator {
		return this.locatorRoot.locator(this.selectors.body);
	}

	get locatorFooter(): Locator {
		return this.locatorRoot.locator(this.selectors.footer);
	}

	get locatorCloseButton(): Locator {
		return this.locatorRoot.locator(this.selectors.closeButton);
	}

	get locatorBackdrop(): Locator {
		return this.locatorRoot.locator(this.selectors.backdrop);
	}

	async state() {
		return this.locatorRoot.evaluate(async (rootNode: HTMLElement, selectors) => {
			const closeButton = rootNode.querySelector<HTMLButtonElement>(selectors.closeButton)?.getAttribute('aria-label');
			const header = rootNode.querySelector<HTMLDivElement>(selectors.header)?.innerText?.trim();
			const title = rootNode.querySelector<HTMLDivElement>(selectors.title)?.innerText?.trim();
			const body = rootNode.querySelector<HTMLDivElement>(selectors.body)?.innerText?.trim();
			const footer = rootNode.querySelector<HTMLDivElement>(selectors.footer)?.innerText?.trim();
			return {
				rootClasses: rootNode.className.trim().split(' ').sort(),
				header,
				title,
				body,
				footer,
				closeButton,
			};
		}, this.selectors);
	}
}
