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
		return this.locatorRoot.locator('div.input-group').locator('input');
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
	locatorMenuItem(text: string) {
		return this.locatorMenu.getByText(text).nth(0);
	}

	/**
	 * Bages container
	 */
	get locatorBadges() {
		return this.locatorRoot.locator('div.input-group').locator('.input-group-text');
	}

	/**
	 * Return the first badge locator including the text
	 */
	locatorBadgeItem(text: string) {
		return this.locatorBadges.locator('div.badge').filter({hasText: text}).nth(0);
	}

	/**
	 * Return the cross locator for the first badge including the text
	 */
	locatorBadgeItemCross(text: string) {
		return this.locatorBadgeItem(text).getByRole('button');
	}

	// TODO to be pushed to the test itself
	// We already discuss with Guillaume Saas not to put this in the basic PO which should only return locator basically
	async state() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			const inputGroup = rootNode.querySelector('.input-group')!;
			const badgesContainer = rootNode.querySelector('div.input-group-text');
			const input = inputGroup.querySelector('input')!;

			const badges = [];
			if (badgesContainer) {
				const badgeElements = badgesContainer.querySelectorAll('div.badge');
				for (const badgeElement of badgeElements) {
					const children = [...badgeElement.children];
					badges.push([...children.map((node) => (node.textContent ?? '').trim())]);
				}
			}

			const menuElement = rootNode.querySelector('ul.dropdown-menu');
			const isOpen = menuElement != null;
			const list = [];
			if (menuElement != null) {
				const lis = menuElement.querySelectorAll('li.dropdown-item');
				for (const li of lis) {
					let hasCheckBox = false;
					let isChecked = false;
					const checkbox: HTMLInputElement | null = li.querySelector('input.form-check-input');
					if (checkbox) {
						hasCheckBox = true;
						isChecked = checkbox.checked;
					}
					list.push({
						text: li.textContent?.trim(),
						hasCheckBox,
						isChecked,
					});
				}
			}

			return {
				text: input.value,
				badges,
				isOpen,
				list,
			};
		});
	}
}
