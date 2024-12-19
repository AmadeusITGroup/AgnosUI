import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export class CollapseDemoPO extends BasePO {
	override getComponentSelector(): string {
		return '.container';
	}

	get locatorToggleCollapseButton(): Locator {
		return this.locatorRoot.getByRole('button', {name: /toggle/i});
	}

	async defaultCollapseDemoState() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			return {
				page: +rootNode.querySelector('#defaultPage')!.textContent!,
			};
		});
	}
}
