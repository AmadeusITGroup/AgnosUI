import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export const drawerSelectors = {
	rootComponent: '.au-drawer',
	backdrop: "xpath=./preceding-sibling::div[contains(@class,'au-drawer-backdrop')]",
	header: '.au-drawer-header',
	body: '.au-drawer-body',
	container: '.au-drawer-container',
	splitter: '.au-splitter',
	closeButton: 'Close',
};

export class DrawerPO extends BasePO {
	readonly selectors = structuredClone(drawerSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorHeader(): Locator {
		return this.locatorRoot.locator(this.selectors.header);
	}

	get locatorBody(): Locator {
		return this.locatorRoot.locator(this.selectors.body);
	}

	get locatorBackdrop(): Locator {
		return this.locatorRoot.locator(this.selectors.backdrop);
	}

	get locatorContainer(): Locator {
		return this.locatorRoot.locator(this.selectors.container);
	}

	get locatorSplitter(): Locator {
		return this.locatorRoot.locator(this.selectors.splitter);
	}

	get locatorCloseButton(): Locator {
		return this._page.getByRole('button', {name: 'Close'});
	}

	/**
	 * Hovers the mouse over the center of a splitter element.
	 *
	 * @returns A promise that resolves to an object containing the absolute x and y coordinates
	 * of the hover position
	 */
	async hoverOnSplitter() {
		const locatorSplitter = this.locatorSplitter;
		const box = (await locatorSplitter.boundingBox())!;
		const dx = Math.round(box.width / 2) - 4; // The position given has a gap with teh one received by mouse down, to be investigated
		const dy = Math.round(box.height / 2);
		await locatorSplitter.hover({
			position: {
				x: dx,
				y: dy,
			},
		});

		const pos = {
			x: box.x + dx,
			y: box.y + dy,
		};
		return pos;
	}

	async state() {
		return this.locatorRoot.evaluate((rootNode: HTMLElement, selectors) => {
			const header = rootNode.querySelector<HTMLDivElement>(selectors.header)?.innerText?.trim();
			const body = rootNode.querySelector<HTMLDivElement>(selectors.body)?.innerText?.trim();
			return {
				rootClasses: rootNode.className.trim().split(' ').sort(),
				header,
				body,
			};
		}, this.selectors);
	}

	async statePosition() {
		return this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			const style = rootNode.style;
			return {
				'--df-drawer-size': style.getPropertyValue('--df-drawer-size'),
				'--df-drawer-size-min': style.getPropertyValue('--df-drawer-size-min'),
				'--df-drawer-size-max': style.getPropertyValue('--df-drawer-size-max'),
			};
		});
	}
}
