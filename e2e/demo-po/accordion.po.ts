import {BasePO} from '@agnos-ui/base-po';

export class AccordionDemoPO extends BasePO {
	//TODO: Complete when will be there examples
	override getComponentSelector(): string {
		return '.container';
	}
}

export class AccordionTogglePanels extends AccordionDemoPO {
	locatorToggleFirst() {
		return this.locatorRoot.getByText('Toggle first');
	}
	locatorToggleSecond() {
		return this.locatorRoot.getByText('Toggle second');
	}
	locatorExpandAll() {
		return this.locatorRoot.getByText('Expand all');
	}
	locatorCollapseAll() {
		return this.locatorRoot.getByText('Collapse all');
	}
}

export class AccordionCustomHeaders extends AccordionDemoPO {}
