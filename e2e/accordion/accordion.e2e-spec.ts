import {expect, test} from '@playwright/test';
import {AccordionPO} from '@agnos-ui/page-objects';
import {AccordionTogglePanels} from '../demo-po/accordion.po';

type PromiseValue<T> = T extends Promise<infer U> ? U : never;
type State = PromiseValue<ReturnType<AccordionPO['state']>>;

test.describe.parallel(`Accordion tests`, () => {
	test(`Default accordion behaviour`, async ({page}) => {
		await page.goto('#/accordion/default');
		const accordionPO = new AccordionPO(page, 0);

		const itemsIds = await Promise.all((await accordionPO.locatorAccordionItems.all()).map((item) => item.getAttribute('id')));
		const expectedState: State = {
			items: [
				{
					classes: ['accordion-item'],
					id: itemsIds[0]!,
					isInDOM: true,
					collapseId: `${itemsIds[0]!}-collapse`,
					buttonId: `${itemsIds[0]!}-toggle`,
					expanded: 'true',
					disabled: 'false',
					labeledBy: `${itemsIds[0]!}-toggle`,
					buttonControls: `${itemsIds[0]!}-collapse`,
				},
				{
					classes: ['accordion-item'],
					id: itemsIds[1]!,
					isInDOM: true,
					collapseId: `${itemsIds[1]!}-collapse`,
					buttonId: `${itemsIds[1]!}-toggle`,
					expanded: 'false',
					disabled: 'false',
					labeledBy: `${itemsIds[1]!}-toggle`,
					buttonControls: `${itemsIds[1]!}-collapse`,
				},
				{
					classes: ['accordion-item'],
					id: itemsIds[2]!,
					isInDOM: true,
					collapseId: `${itemsIds[2]!}-collapse`,
					buttonId: `${itemsIds[2]!}-toggle`,
					expanded: 'false',
					disabled: 'true',
					labeledBy: `${itemsIds[2]!}-toggle`,
					buttonControls: `${itemsIds[2]!}-collapse`,
				},
			],
			rootClasses: ['accordion'],
		};
		expect(await accordionPO.state()).toEqual(expectedState);
		//We are using the 'header' since if we would use the 'buttons' wouldn't be possible to click on the disabled one
		await accordionPO.locatorAccordionHeaders.nth(0).click();
		await accordionPO.locatorAccordionHeaders.nth(1).click();
		await accordionPO.locatorAccordionHeaders.nth(2).click();

		expectedState.items[0].expanded = 'false';
		expectedState.items[1].expanded = 'true';
		expect(await accordionPO.state()).toEqual(expectedState);
	});
	test(`Toggle Panels`, async ({page}) => {
		const accordionDemoPO = new AccordionTogglePanels(page);
		await page.goto('#/accordion/togglepanels');
		const accordionPO = new AccordionPO(page, 0);
		await accordionDemoPO.locatorRoot.waitFor();
		const itemsIds = await Promise.all((await accordionPO.locatorAccordionItems.all()).map((item) => item.getAttribute('id')));
		const expectedState: State = {
			items: [
				{
					classes: ['accordion-item'],
					id: itemsIds[0]!,
					isInDOM: true,
					collapseId: `${itemsIds[0]!}-collapse`,
					buttonId: `${itemsIds[0]!}-toggle`,
					expanded: 'false',
					disabled: 'false',
					labeledBy: `${itemsIds[0]!}-toggle`,
					buttonControls: `${itemsIds[0]!}-collapse`,
				},
				{
					classes: ['accordion-item'],
					id: itemsIds[1]!,
					isInDOM: true,
					collapseId: `${itemsIds[1]!}-collapse`,
					buttonId: `${itemsIds[1]!}-toggle`,
					expanded: 'false',
					disabled: 'false',
					labeledBy: `${itemsIds[1]!}-toggle`,
					buttonControls: `${itemsIds[1]!}-collapse`,
				},
			],
			rootClasses: ['accordion'],
		};
		expect(await accordionPO.state()).toEqual(expectedState);
		await accordionDemoPO.locatorToggleFirst().click();
		expectedState.items[0].expanded = 'true';
		expect(await accordionPO.state()).toEqual(expectedState);
		await accordionDemoPO.locatorToggleFirst().click();
		await accordionDemoPO.locatorToggleSecond().click();
		expectedState.items[0].expanded = 'false';
		expectedState.items[1].expanded = 'true';
		expect(await accordionPO.state()).toEqual(expectedState);
		await accordionDemoPO.locatorExpandAll().click();
		expectedState.items[0].expanded = 'true';
		expect(await accordionPO.state()).toEqual(expectedState);
		await accordionDemoPO.locatorCollapseAll().click();
		expectedState.items[0].expanded = 'false';
		expectedState.items[1].expanded = 'false';
		expect(await accordionPO.state()).toEqual(expectedState);
	});
});
