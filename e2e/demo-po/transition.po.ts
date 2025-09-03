import {BasePO} from '@agnos-ui/base-po';

export interface State {
	visible: boolean;
	transitioning: boolean;
	shown: boolean;
	hidden: boolean;
	animated: boolean;
	animatedOnInit: boolean;
	removeFromDOM: boolean;
	transition: 'verticalCollapse' | 'horizontalCollapse' | 'fade';
	classes: string[] | undefined;
}

export class TransitionPO extends BasePO {
	getComponentSelector(): string {
		return 'div.demo-transition';
	}

	get locatorInnerContainer() {
		return this.locatorRoot.locator('.transition-inner');
	}

	get locatorToggleComponent() {
		return this.locatorRoot.locator('#toggle-component');
	}

	get locatorVerticalCollapseButton() {
		return this.locatorRoot.locator('button >> text="Vertical collapse"');
	}

	get locatorHorizontalCollapseButton() {
		return this.locatorRoot.locator('button >> text="Horizontal collapse"');
	}

	get locatorDefaultToggleButton() {
		return this.locatorRoot.locator('button >> text="Toggle"');
	}

	get locatorToggleWithAnimationButton() {
		return this.locatorRoot.locator('button >> text="Toggle with animation"');
	}

	get locatorToggleWithoutAnimationButton() {
		return this.locatorRoot.locator('button >> text="Toggle without animation"');
	}

	get locatorAnimatedCheckbox() {
		return this.locatorRoot.locator('label >> text="Animated" >> input[type=checkbox]').first();
	}

	get locatorAnimatedOnInitCheckbox() {
		return this.locatorRoot.locator('label >> text="Animated on init" >> input[type=checkbox]');
	}

	get locatorRemoveFromDOMCheckbox() {
		return this.locatorRoot.locator('label >> text="Remove from DOM" >> input[type=checkbox]');
	}

	async getState() {
		return await this.locatorRoot.evaluate((rootNode: HTMLElement) => {
			const toCamelCase = (str: string) =>
				str
					.trim()
					.replace(/\s+(\w)/g, (_a, b) => b.toUpperCase())
					.replace(/^(\w)/g, (_a, b) => b.toLowerCase());
			const state: Partial<State> = {};
			for (const child of rootNode.querySelector('ul')!.children) {
				const [property, value] = child.textContent.split('=');
				(state as any)[toCamelCase(property)] = JSON.parse(value);
			}
			for (const checkbox of rootNode.querySelectorAll<HTMLInputElement>('input[type=checkbox]')) {
				const property = checkbox.parentElement!.textContent;
				(state as any)[toCamelCase(property)] = checkbox.checked;
			}
			state.transition = toCamelCase(rootNode.querySelector('button.active')!.textContent) as any;
			const className = rootNode.querySelector('.card')?.parentElement!.className.trim();
			state.classes = className === '' ? [] : className?.split(/\s+/).sort();
			return state as State;
		});
	}
}
