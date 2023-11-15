import {BasePO} from '@agnos-ui/base-po';

export class PaginationDemoPO extends BasePO {
	override getComponentSelector(): string {
		return '.container';
	}

	async defaultPaginationDemoState() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			return {
				page: +rootNode.querySelector('#defaultPage')!.textContent!,
			};
		});
	}
}
