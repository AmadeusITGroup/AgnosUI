import {expect, test} from '../fixture';
import {AccordionPO} from '@agnos-ui/page-objects';
import {AccordionTogglePanels} from '../demo-po/accordion.po';
import type {PromiseValue} from 'e2e/utils';

type State = PromiseValue<ReturnType<AccordionPO['state']>>;

function updateAccordionState(state: State, index: number, expanded: boolean) {
	state.items[index].expanded = expanded ? 'true' : 'false';
	state.items[index].isInDOM = expanded;
	state.items[index].bodyContainerId = expanded ? `${state.items[index].id}-body-container` : undefined;
	state.items[index].labeledBy = expanded ? `${state.items[index].id}-toggle` : undefined;
}

test.describe.parallel(`Accordion tests`, () => {
	test(`Default accordion behavior`, async ({page}) => {
		await page.goto('#/accordion/default');
		const accordionPO = new AccordionPO(page, 0);
		await accordionPO.locatorRoot.waitFor();

		const itemsIds = await Promise.all((await accordionPO.locatorAccordionItems.all()).map((item) => item.getAttribute('id')));
		const expectedState: State = {
			items: [
				{
					classes: ['accordion-item'],
					id: itemsIds[0]!,
					isInDOM: true,
					bodyContainerId: `${itemsIds[0]!}-body-container`,
					buttonId: `${itemsIds[0]!}-toggle`,
					expanded: 'true',
					disabled: 'false',
					labeledBy: `${itemsIds[0]!}-toggle`,
					buttonControls: `${itemsIds[0]!}-body-container`,
				},
				{
					classes: ['accordion-item'],
					id: itemsIds[1]!,
					isInDOM: false,
					bodyContainerId: undefined,
					buttonId: `${itemsIds[1]!}-toggle`,
					expanded: 'false',
					disabled: 'false',
					labeledBy: undefined,
					buttonControls: `${itemsIds[1]!}-body-container`,
				},
				{
					classes: ['accordion-item'],
					id: itemsIds[2]!,
					isInDOM: false,
					bodyContainerId: undefined,
					buttonId: `${itemsIds[2]!}-toggle`,
					expanded: 'false',
					disabled: 'true',
					labeledBy: undefined,
					buttonControls: `${itemsIds[2]!}-body-container`,
				},
			],
			rootClasses: ['accordion', 'au-accordion'],
		};
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
		//We are using the 'header' since if we would use the 'buttons' wouldn't be possible to click on the disabled one
		await accordionPO.locatorAccordionHeaders.nth(0).click();
		await accordionPO.locatorAccordionHeaders.nth(1).click();
		await accordionPO.locatorAccordionHeaders.nth(2).click();

		updateAccordionState(expectedState, 0, false);
		updateAccordionState(expectedState, 1, true);
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
	});

	test(`Toggle Panels`, async ({page}) => {
		const accordionDemoPO = new AccordionTogglePanels(page);
		await page.goto('#/accordion/togglepanels');
		const accordionPO = new AccordionPO(page, 0);
		await accordionPO.locatorRoot.waitFor();

		const itemsIds = await Promise.all((await accordionPO.locatorAccordionItems.all()).map((item) => item.getAttribute('id')));
		const expectedState: State = {
			items: [
				{
					classes: ['accordion-item'],
					id: itemsIds[0]!,
					isInDOM: false,
					bodyContainerId: undefined,
					buttonId: `${itemsIds[0]!}-toggle`,
					expanded: 'false',
					disabled: 'false',
					labeledBy: undefined,
					buttonControls: `${itemsIds[0]!}-body-container`,
				},
				{
					classes: ['accordion-item'],
					id: itemsIds[1]!,
					isInDOM: false,
					bodyContainerId: undefined,
					buttonId: `${itemsIds[1]!}-toggle`,
					expanded: 'false',
					disabled: 'false',
					labeledBy: undefined,
					buttonControls: `${itemsIds[1]!}-body-container`,
				},
			],
			rootClasses: ['accordion', 'au-accordion'],
		};
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
		await accordionDemoPO.locatorToggleFirst().click();
		updateAccordionState(expectedState, 0, true);
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
		await accordionDemoPO.locatorToggleFirst().click();
		await accordionDemoPO.locatorToggleSecond().click();
		updateAccordionState(expectedState, 0, false);
		updateAccordionState(expectedState, 1, true);
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
		await accordionDemoPO.locatorExpandAll().click();
		updateAccordionState(expectedState, 0, true);
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
		await accordionDemoPO.locatorCollapseAll().click();
		updateAccordionState(expectedState, 0, false);
		updateAccordionState(expectedState, 1, false);
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
	});

	test(`Playground accordion behavior no destroy on hide`, async ({page}) => {
		await page.goto('#/accordion/playground#{"config":{"itemDestroyOnHide":false}}');
		const accordionPO = new AccordionPO(page, 0);
		await accordionPO.locatorRoot.waitFor();

		const itemsIds = await Promise.all((await accordionPO.locatorAccordionItems.all()).map((item) => item.getAttribute('id')));
		const expectedState: State = {
			items: [
				{
					classes: ['accordion-item'],
					id: itemsIds[0]!,
					isInDOM: true,
					bodyContainerId: `${itemsIds[0]!}-body-container`,
					buttonId: `${itemsIds[0]!}-toggle`,
					expanded: 'false',
					disabled: 'false',
					labeledBy: `${itemsIds[0]!}-toggle`,
					buttonControls: `${itemsIds[0]!}-body-container`,
				},
				{
					classes: ['accordion-item'],
					id: itemsIds[1]!,
					isInDOM: true,
					bodyContainerId: `${itemsIds[1]!}-body-container`,
					buttonId: `${itemsIds[1]!}-toggle`,
					expanded: 'false',
					disabled: 'false',
					labeledBy: `${itemsIds[1]!}-toggle`,
					buttonControls: `${itemsIds[1]!}-body-container`,
				},
			],
			rootClasses: ['accordion', 'au-accordion'],
		};
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
		//We are using the 'header' since if we would use the 'buttons' wouldn't be possible to click on the disabled one
		await accordionPO.locatorAccordionHeaders.nth(0).click();
		await accordionPO.locatorAccordionHeaders.nth(1).click();

		expectedState.items[0].expanded = 'true';
		expectedState.items[1].expanded = 'true';
		await expect.poll(() => accordionPO.state()).toEqual(expectedState);
	});
});
