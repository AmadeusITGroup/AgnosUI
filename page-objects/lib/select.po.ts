import {BasePO} from '@agnos-ui/base-po';

export const selectSelectors = {
	rootComponent: '.au-select',
	// TODO add selector list
};

export class SelectPO extends BasePO {
	selectors = structuredClone(selectSelectors);

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	/**
	 * Get the main title locator of the feature page
	 */
	get locatorInput() {
		return this.locatorRoot.locator('input[type="text"]').nth(0);
	}

	/**
	 * Menu container
	 */
	get locatorMenu() {
		return this.locatorRoot.locator('.dropdown-menu');
	}

	/**
	 * Return the first menu item locator including the text
	 */
	get locatorMenuItems() {
		return this.locatorMenu.locator('.au-select-item');
	}

	/**
	 * Return the first menu item locator including the text
	 */
	locatorMenuItem(text: string) {
		return this.locatorMenu.getByText(text).nth(0);
	}

	/**
	 * Bages container
	 */
	get locatorBadges() {
		return this.locatorRoot.locator('div.au-select-badge');
	}

	/**
	 * Return the first badge locator including the text
	 */
	locatorBadgeItem(text: string) {
		return this.locatorBadges.filter({hasText: text}).nth(0);
	}

	async state() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			const badgesContainer = rootNode.querySelector('div[role="combobox"]');
			const input: HTMLInputElement = rootNode.querySelector('input[type="text"]')!;

			const badges = [];
			if (badgesContainer) {
				const badgeElements = badgesContainer.querySelectorAll('div.au-select-badge');
				for (const badgeElement of badgeElements) {
					badges.push(badgeElement?.textContent?.trim());
				}
			}

			const menuElement = rootNode.querySelector('ul.dropdown-menu');
			const isOpen = menuElement != null;
			const list: Array<string | undefined> = [];
			const checked: Array<string | undefined> = [];
			if (menuElement != null) {
				const lis = menuElement.querySelectorAll('li.dropdown-item');
				for (const li of lis) {
					const text = li.textContent?.trim();
					list.push(text);
					if (li.classList.contains('selected')) {
						checked.push(text);
					}
				}
			}

			return {
				text: input.value,
				badges,
				isOpen,
				list,
				checked,
			};
		});
	}
}
