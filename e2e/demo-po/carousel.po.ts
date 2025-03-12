import {BasePO} from '@agnos-ui/base-po';

export class CarouselDemoPO extends BasePO {
	override getComponentSelector(): string {
		return '.container';
	}
}
