import {CarouselPO} from '@agnos-ui/page-objects';
import {expect, test} from '../fixture';
import {CarouselDemoPO} from '../demo-po/carousel.po';

test.describe(`Carousel tests`, () => {
	test(`Default carousel`, async ({page}) => {
		const carouselDemoPO = new CarouselDemoPO(page);
		const carouselPO = new CarouselPO(page, 0);

		await page.goto('#/carousel/default');
		await carouselDemoPO.locatorRoot.waitFor();

		await expect
			.poll(() => carouselPO.state())
			.toStrictEqual({
				rootClasses: ['au-carousel', 'carousel'],
				prevBtn: false,
				nextBtn: true,
				indicators: {
					selected: 0,
					count: 3,
				},
				slides: {
					visible: 0,
				},
			});

		await carouselPO.locatorNextBtn.click();
		await expect
			.poll(() => carouselPO.state())
			.toStrictEqual({
				rootClasses: ['au-carousel', 'carousel'],
				prevBtn: true,
				nextBtn: true,
				indicators: {
					selected: 1,
					count: 3,
				},
				slides: {
					visible: 1,
				},
			});

		await carouselPO.locatorNextBtn.click();
		await expect
			.poll(() => carouselPO.state())
			.toStrictEqual({
				rootClasses: ['au-carousel', 'carousel'],
				prevBtn: true,
				nextBtn: false,
				indicators: {
					selected: 2,
					count: 3,
				},
				slides: {
					visible: 2,
				},
			});

		await carouselPO.locatorIndicatorBtn.first().click();
		await expect
			.poll(() => carouselPO.state())
			.toStrictEqual({
				rootClasses: ['au-carousel', 'carousel'],
				prevBtn: false,
				nextBtn: true,
				indicators: {
					selected: 0,
					count: 3,
				},
				slides: {
					visible: 0,
				},
			});
	});

	test(`Autoplay carousel`, async ({page}) => {
		const carouselDemoPO = new CarouselDemoPO(page);
		const carouselPO = new CarouselPO(page, 0);

		await page.goto('#/carousel/autoplay');
		await carouselDemoPO.locatorRoot.waitFor();

		const getAutoplayState = async (carouselPO: CarouselPO) =>
			carouselPO.locatorRoot.evaluate((rootNode: HTMLElement) => {
				const indicators = rootNode.querySelectorAll('.navigation button[role="tab"]');
				return {
					ariaLive: rootNode.querySelector('.au-carousel-container')?.getAttribute('aria-live'),
					indicators: {
						selected: [...indicators].findIndex((indicator) => indicator.classList.contains('active')),
						count: indicators.length,
					},
					slides: {
						visible: [...rootNode.querySelectorAll('.au-carousel-slide')].findIndex((slide) => {
							const slideBoundingRect = slide.getBoundingClientRect();
							const rootBoundingRect = rootNode.getBoundingClientRect();
							return slideBoundingRect.left >= rootBoundingRect.left && slideBoundingRect.right <= rootBoundingRect.right;
						}),
					},
				};
			});

		await expect
			.poll(() => getAutoplayState(carouselPO))
			.toStrictEqual({
				ariaLive: 'off',
				indicators: {
					selected: 0,
					count: 3,
				},
				slides: {
					visible: 0,
				},
			});

		await new Promise((resolve) => setTimeout(resolve, 4_100));
		await expect
			.poll(() => getAutoplayState(carouselPO))
			.toStrictEqual({
				ariaLive: 'off',
				indicators: {
					selected: 1,
					count: 3,
				},
				slides: {
					visible: 1,
				},
			});
		await expect(carouselDemoPO.locatorPauseButton).toBeVisible();
		await carouselDemoPO.locatorPauseButton.click();
		await expect(carouselDemoPO.locatorPlayButton).toBeVisible();
		await expect
			.poll(() => getAutoplayState(carouselPO))
			.toStrictEqual({
				ariaLive: 'polite',
				indicators: {
					selected: 1,
					count: 3,
				},
				slides: {
					visible: 1,
				},
			});

		await carouselDemoPO.locatorTabIndicators.nth(2).click();
		await expect
			.poll(() => getAutoplayState(carouselPO))
			.toStrictEqual({
				ariaLive: 'polite',
				indicators: {
					selected: 2,
					count: 3,
				},
				slides: {
					visible: 2,
				},
			});
		await carouselDemoPO.locatorPlayButton.click();
		await expect
			.poll(() => getAutoplayState(carouselPO))
			.toStrictEqual({
				ariaLive: 'off',
				indicators: {
					selected: 2,
					count: 3,
				},
				slides: {
					visible: 2,
				},
			});
		await carouselDemoPO.locatorFocusableSlide.click();
		await expect
			.poll(() => getAutoplayState(carouselPO))
			.toStrictEqual({
				ariaLive: 'polite',
				indicators: {
					selected: 2,
					count: 3,
				},
				slides: {
					visible: 2,
				},
			});
	});
});
