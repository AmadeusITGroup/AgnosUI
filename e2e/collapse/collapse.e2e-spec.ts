import {CollapsePO} from '@agnos-ui/page-objects';
import {expect, test} from '../fixture';
import {CollapseDemoPO} from '../demo-po/collapse.po';
import {assign} from 'common/utils';
import type {PromiseValue} from 'e2e/utils';

type State = PromiseValue<ReturnType<CollapsePO['state']>>;

test.describe(`Collapse tests`, () => {
	test(`Default collapse`, async ({page}) => {
		const collapseDemoPO = new CollapseDemoPO(page);
		const collapsePO = new CollapsePO(page, 0);

		await page.goto('#/collapse/default');
		await collapseDemoPO.locatorRoot.waitFor();

		const expectedState: State = {
			rootClasses: ['au-collapse', 'collapse', 'show'],
		};
		expect(await collapsePO.state()).toStrictEqual(expectedState);

		await collapseDemoPO.locatorToggleCollapseButton.click();
		await collapsePO.locatorRoot.waitFor({state: 'hidden'});

		expect(await collapsePO.state()).toStrictEqual(
			assign(expectedState, {
				rootClasses: ['au-collapse', 'collapse'],
			}),
		);
	});
});
