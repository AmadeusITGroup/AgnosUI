import {BasePO} from '@agnos-ui/base-po';

export class NavManagerLinePO extends BasePO {
	override getComponentSelector(): string {
		return 'div.demo-navmanager-line';
	}

	items() {
		return this.locatorRoot.locator('*').all();
	}
}

export class NavManagerPO extends BasePO {
	override getComponentSelector(): string {
		return 'div.demo-navmanager';
	}

	get locatorLTRLine() {
		return this.locatorRoot.locator('div[dir=ltr]');
	}

	get locatorRTLLine() {
		return this.locatorRoot.locator('div[dir=rtl]');
	}
}
