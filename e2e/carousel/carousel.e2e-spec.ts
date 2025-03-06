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
});
