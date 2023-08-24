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
}
