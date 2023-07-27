import {BasePO} from '@agnos-ui/base-po';

export class PaginationDemoPO extends BasePO {
	getComponentSelector(): string {
		return '.container';
	}

	locatorBtnConfigDisabled(text: string) {
		return this.locatorRoot.locator('#btn-config-disabled').getByText(text);
	}

	locatorBtnConfigCollectionSize(text?: string) {
		return this.locatorRoot.locator('#btn-config-collectionSize').getByText(text ?? 'undefined');
	}

	locatorBtnConfigClassName(text: string) {
		return this.locatorRoot.locator('#btn-config-className').getByText(text);
	}

	locatorBtnConfigSlotPages(text: string) {
		return this.locatorRoot.locator('#btn-config-slotPages').getByText(text);
	}

	async defaultPaginationDemoState() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			return {
				page: +rootNode.querySelector('#defaultPage')!.textContent!,
			};
		});
	}
}
