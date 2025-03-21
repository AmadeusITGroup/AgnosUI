import type {Locator} from '@playwright/test';
import {BasePO} from '@agnos-ui/base-po';
import {ToastPO, toastSelectors} from './toast.po';

export const toasterSelectors = {
	rootComponent: '.au-toaster',
	container: '.au-toaster-container',
	closeButton: '.au-toaster-closeAll',
};
export class ToasterPO extends BasePO {
	selectors = structuredClone(toasterSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorContainer(): Locator {
		return this.locatorRoot.locator(this.selectors.container);
	}

	async toastPOs(): Promise<ToastPO[]> {
		return Array.from(
			{length: await this.locatorContainer.locator(toastSelectors.rootComponent).count()},
			(_, i: number) => new ToastPO(this.locatorContainer, i),
		);
	}

	get locatorCloseButton(): Locator {
		return this.locatorRoot.locator(this.selectors.closeButton);
	}
}
