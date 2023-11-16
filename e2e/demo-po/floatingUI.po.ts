import {BasePO} from '@agnos-ui/base-po';

export class FloatingUIDemoPO extends BasePO {
	getComponentSelector(): string {
		return 'div.demo-floatingui';
	}

	get locatorTogglePopoverButton() {
		return this.locatorRoot.locator('button');
	}

	get locatorPopover() {
		return this.locatorRoot.locator('.popover');
	}

	get locatorPopoverArrow() {
		return this.locatorPopover.locator('.popover-arrow');
	}

	async setScrollPosition(left: number, top: number) {
		await this.locatorRoot.evaluate(
			(domElement, position) => {
				domElement.scrollTo(position);
			},
			{left, top},
		);
	}
}
