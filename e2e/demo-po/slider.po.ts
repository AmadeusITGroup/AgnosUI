import {BasePO} from '@agnos-ui/base-po';
import type {Locator} from '@playwright/test';

export class SliderDemoPO extends BasePO {
	override getComponentSelector(): string {
		return '.container';
	}

	get disabledToggle(): Locator {
		return this.locatorRoot.locator('input[id=disabled]');
	}

	get readonlyToggle(): Locator {
		return this.locatorRoot.locator('input[id=readonly]');
	}

	get showMinMaxToggle(): Locator {
		return this.locatorRoot.locator('input[id=showMinMax]');
	}

	get showValuesToggle(): Locator {
		return this.locatorRoot.locator('input[id=showValues]');
	}
}
