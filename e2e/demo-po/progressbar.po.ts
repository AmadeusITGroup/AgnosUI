import {BasePO} from '@agnos-ui/base-po';

export class ProgressbarDemoPO extends BasePO {
	override getComponentSelector(): string {
		return '.container';
	}
}
