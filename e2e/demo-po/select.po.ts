import {BasePO} from '@agnos-ui/base-po';

export class SelectDemoPO extends BasePO {
	getComponentSelector(): string {
		return 'div.demo-select-config';
	}

	get locatorFilterTextInput() {
		return this.locatorRoot.getByLabel('Default filterText:');
	}

	get locatorResetFilterTextButton() {
		return this.locatorRoot.getByText('Reset widget filterText');
	}
}
