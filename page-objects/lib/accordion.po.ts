import type {Locator} from '@playwright/test';
import {BasePO} from '@agnos-ui/base-po';

export class AccordionPO extends BasePO {
	private readonly selectors = {
		item: '.accordion-item',
		collapse: '.accordion-collapse',
		body: '.accordion-body',
		header: '.accordion-header',
		buttons: '.accordion-button',
	};
	override getComponentSelector(): string {
		return '.accordion';
	}

	/**
	 * Gets the locators of the items containing the header and the collapse inside
	 * the accordion
	 */
	get locatorAccordionItems(): Locator {
		return this.locatorRoot.locator(this.selectors.item);
	}

	/**
	 * Gets the locators of the item specified by the itemIndex containing the header and the collapse inside
	 * the accordion
	 */
	locatorAccordionItem(itemIndex: number): Locator {
		return this.locatorRoot.locator(this.selectors.item).nth(itemIndex);
	}

	get locatorAccordionCollapses(): Locator {
		return this.locatorAccordionItems.locator(this.selectors.collapse);
	}

	locatorAccordionCollapse(collapseIndex: number): Locator {
		return this.locatorAccordionItem(collapseIndex).locator(this.selectors.collapse);
	}

	/**
	 * Gets the locator of the bodies of the accordion.
	 */
	get locatorAccordionBodies(): Locator {
		return this.locatorAccordionCollapses.locator(this.selectors.body);
	}

	locatorAccordionBody(bodyIndex: number): Locator {
		return this.locatorAccordionCollapse(bodyIndex).locator(this.selectors.body);
	}

	get locatorAccordionHeaders(): Locator {
		return this.locatorAccordionItems.locator(this.selectors.header);
	}

	locatorAccordionHeader(headerIndex: number): Locator {
		return this.locatorAccordionItem(headerIndex).locator(this.selectors.header);
	}

	/**
	 * Gets the locators of the buttons that handle the accordion, present in the accordion header.
	 * It does not get the locators of the buttons present in the body, added by the developer.
	 */
	get locatorAccordionButtons(): Locator {
		return this.locatorAccordionHeaders.locator(this.selectors.buttons);
	}

	locatorAccordionButton(buttonIndex: number): Locator {
		return this.locatorAccordionHeader(buttonIndex).locator(this.selectors.buttons);
	}

	async state() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			const itemsElements = [...rootNode.querySelectorAll('.accordion-item')] as HTMLDivElement[];
			const items = [];
			for (const item of itemsElements) {
				const collapse = item.querySelector('.accordion-collapse');
				const button = item.querySelector('.accordion-button');
				items.push({
					classes: item.className.trim().split(' '),
					id: item.id,
					isInDOM: collapse !== null ? true : false,
					collapseId: collapse?.id,
					buttonId: button?.id,
					expanded: button?.getAttribute('aria-expanded'),
					disabled: button?.getAttribute('aria-disabled'),
					labeledBy: collapse?.getAttribute('aria-labelledby'),
					buttonControls: button?.getAttribute('aria-controls'),
				});
			}
			return {rootClasses: rootNode.className.trim().split(' '), items: items};
		});
	}
}
