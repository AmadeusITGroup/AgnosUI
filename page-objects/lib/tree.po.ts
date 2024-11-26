import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export const treeSelectors = {
	rootComponent: '[role="tree"]',
	itemContainer: '[role="treeitem"]',
	itemToggle: '.au-tree-expand-icon',
	itemContents: '.au-tree-item',
};

export class TreePO extends BasePO {
	selectors = structuredClone(treeSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorItemToggle(): Locator {
		return this.locatorRoot.locator(this.selectors.itemToggle);
	}

	get locatorItemContainer(): Locator {
		return this.locatorRoot.locator(this.selectors.itemContents);
	}

	async itemContainerState() {
		return this.locatorRoot.locator(this.selectors.itemContainer).evaluateAll((rootNode: HTMLElement[]) => {
			return rootNode.map((rn) => {
				return {
					ariaSelected: rn.getAttribute('aria-selected'),
					ariaExpanded: rn.getAttribute('aria-expanded'),
				};
			});
		});
	}

	async itemToggleState() {
		return this.locatorRoot.locator(this.selectors.itemToggle).evaluateAll((rootNode: HTMLElement[]) => {
			return rootNode.map((rn) => {
				return {
					ariaLabel: rn.getAttribute('aria-label'),
				};
			});
		});
	}
}
