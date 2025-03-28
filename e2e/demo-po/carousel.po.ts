import {BasePO} from '@agnos-ui/base-po';

export class CarouselDemoPO extends BasePO {
	private readonly locators = {
		playButton: 'button[aria-label="Play rotation of slides"]',
		pauseButton: 'button[aria-label="Pause rotation of slides"]',
		tabIndicators: '.navigation button[role="tab"]',
		focusableSlide: '.au-carousel-slide[tabindex="0"]',
	};

	override getComponentSelector(): string {
		return '.container';
	}

	get locatorPlayButton() {
		return this.locatorRoot.locator(this.locators.playButton);
	}

	get locatorPauseButton() {
		return this.locatorRoot.locator(this.locators.pauseButton);
	}

	get locatorTabIndicators() {
		return this.locatorRoot.locator(this.locators.tabIndicators);
	}

	get locatorFocusableSlide() {
		return this.locatorRoot.locator(this.locators.focusableSlide);
	}
}
