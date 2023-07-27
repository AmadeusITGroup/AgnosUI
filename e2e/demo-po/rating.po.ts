import {BasePO} from '@agnos-ui/base-po';

export class RatingDemoPO extends BasePO {
	getComponentSelector(): string {
		return '.container';
	}

	get locatorBtnEnabled() {
		return this.locatorRoot.locator('#form-btn-enable');
	}

	get locatorBtnClear() {
		return this.locatorRoot.locator('#form-btn-clear');
	}

	locatorBtnConfigDisabled(text: string) {
		return this.locatorRoot.locator('#btn-config-disabled').getByText(text);
	}

	locatorBtnConfigMaxRating(text?: string) {
		return this.locatorRoot.locator('#btn-config-maxRating').getByText(text ?? 'undefined');
	}

	locatorBtnConfigClassName(text: string) {
		return this.locatorRoot.locator('#btn-config-className').getByText(text);
	}

	locatorBtnConfigSlotStar(text: string) {
		return this.locatorRoot.locator('#btn-config-slotStar').getByText(text);
	}

	async defaultRatingDemoState() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			return {
				rating: +rootNode.querySelector('#defaultRating')!.textContent!,
				hovered: +rootNode.querySelector('#defaultHovered')!.textContent!,
				left: +rootNode.querySelector('#defaultLeft')!.textContent!,
			};
		});
	}

	async formRatingDemoState() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			return {
				msg: rootNode.querySelector('#form-msg')!.textContent!.trim(),
				model: +rootNode.querySelector('#form-model')!.textContent!,
				enabledBtnText: rootNode.querySelector('#form-btn-enable')!.textContent!.trim(),
			};
		});
	}
}
