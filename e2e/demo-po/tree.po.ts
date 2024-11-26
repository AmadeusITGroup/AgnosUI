import {BasePO} from '@agnos-ui/base-po';

export class TreeDemoPO extends BasePO {
	override getComponentSelector(): string {
		return '.container';
	}
}
