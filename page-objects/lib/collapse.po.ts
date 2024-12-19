import {BasePO} from '@agnos-ui/base-po';

export const collapseSelectors = {
	rootComponent: '.au-collapse',
};

export class CollapsePO extends BasePO {
	selectors = structuredClone(collapseSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	async state() {
		return this.locatorRoot.evaluate((rootNode: HTMLElement, _selectors) => {
			return {
				rootClasses: rootNode.className.trim().split(' ').sort(),
			};
		}, this.selectors);
	}
}
