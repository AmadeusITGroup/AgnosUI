import {promiseFromStore} from '../../utils/internal/promise';
import {attachDirectiveAndClick} from '../components.spec-utils';
import {type CarouselWidget, type CarouselState, createCarousel} from './carousel';
import {afterEach, beforeEach, describe, expect, test} from 'vitest';

describe(`Carousel`, () => {
	let carousel: CarouselWidget;
	let state: CarouselState;

	beforeEach(() => {
		carousel = createCarousel();
		return carousel.state$.subscribe((newState) => {
			state = newState;
		});
	});

	test(`should create carousel with a default state`, () => {
		expect(state).toEqual({
			canScrollNext: true,
			canScrollPrev: false,
			direction: 'ltr',
			initialized: false,
			scrolling: false,
			selectedScrollSnap: 0,
			showNavigationArrows: true,
			showNavigationIndicators: true,
		});
	});

	test(`does not allow to attach the carousel directive twice`, () => {
		const node1 = document.createElement('div');
		const container = document.createElement('div');
		node1.appendChild(container);
		const node2 = document.createElement('div');
		carousel.directives.root(node1);
		expect(() => carousel.directives.root(node2)).toThrow('Only one Embla directive can be attached per carousel widget !');
	});

	describe(`with directives attached`, () => {
		let instance: {destroy?: () => void} | void;
		let slideInstances: ({destroy?: () => void} | void)[];
		let viewport: HTMLDivElement;
		let container: HTMLDivElement;
		let slides: HTMLDivElement[];

		beforeEach(async () => {
			viewport = document.createElement('div');
			viewport.style.width = '200px';
			viewport.style.height = '100px';
			viewport.style.overflowX = 'hidden';

			container = document.createElement('div');
			container.style.display = 'flex';
			container.style.height = '100%';

			viewport.appendChild(container);

			slideInstances = [];
			slides = [];

			for (let i = 0; i < 3; i++) {
				const slide = document.createElement('div');
				slide.style.flex = '0 0 100%';
				slide.style.minWidth = '0';
				slides.push(slide);
				const slideContent = document.createElement('div');
				slideContent.style.width = '100%';
				slideContent.style.height = '100%';
				slideContent.textContent = `Slide ${i}`;
				slide.appendChild(slideContent);
				container.appendChild(slide);
				slideInstances.push(carousel.directives.slide(slide, {id: `auId-${i}`, index: i}));
			}
			document.body.appendChild(viewport);
			instance = carousel.directives.root(viewport);
			await promiseFromStore(carousel.stores.initialized$).promise;
		});

		afterEach(() => {
			instance?.destroy?.();
			slideInstances.forEach((slide) => slide?.destroy?.());
			document.body.removeChild(viewport);
		});

		test(`should have a default state`, () => {
			expect(state).toEqual({
				canScrollNext: true,
				canScrollPrev: false,
				direction: 'ltr',
				initialized: true,
				scrolling: false,
				selectedScrollSnap: 0,
				showNavigationArrows: true,
				showNavigationIndicators: true,
			});
		});

		test(`no plugins in options means no plugins in api`, () => {
			expect(carousel.api.plugins()).toEqual({});
		});

		test(`should scroll to slides with slideNext and slidePrev`, () => {
			attachDirectiveAndClick(carousel.directives.scrollNext);
			expect(state).toEqual({
				canScrollNext: true,
				canScrollPrev: true,
				direction: 'ltr',
				initialized: true,
				scrolling: false,
				selectedScrollSnap: 1,
				showNavigationArrows: true,
				showNavigationIndicators: true,
			});

			attachDirectiveAndClick(carousel.directives.scrollNext);
			expect(state).toEqual({
				canScrollNext: false,
				canScrollPrev: true,
				direction: 'ltr',
				initialized: true,
				scrolling: false,
				selectedScrollSnap: 2,
				showNavigationArrows: true,
				showNavigationIndicators: true,
			});

			attachDirectiveAndClick(carousel.directives.scrollPrev);
			expect(state).toEqual({
				canScrollNext: true,
				canScrollPrev: true,
				direction: 'ltr',
				initialized: true,
				scrolling: false,
				selectedScrollSnap: 1,
				showNavigationArrows: true,
				showNavigationIndicators: true,
			});
		});

		test(`removing a slide will update the state accordingly`, async () => {
			slideInstances.pop()?.destroy?.();
			container.removeChild(slides.pop()!);
			// Wait for the mutation observer to trigger
			await Promise.resolve();

			expect(state).toEqual({
				canScrollNext: true,
				canScrollPrev: false,
				direction: 'ltr',
				initialized: true,
				scrolling: false,
				selectedScrollSnap: 0,
				showNavigationArrows: true,
				showNavigationIndicators: true,
			});
		});

		test(`updating the loop option will allow to scroll prev on first slide`, () => {
			carousel.patch({loop: true});
			expect(state).toEqual({
				canScrollNext: true,
				canScrollPrev: true,
				direction: 'ltr',
				initialized: true,
				scrolling: false,
				selectedScrollSnap: 0,
				showNavigationArrows: true,
				showNavigationIndicators: true,
			});

			attachDirectiveAndClick(carousel.directives.scrollPrev);
			expect(state).toEqual({
				canScrollNext: true,
				canScrollPrev: true,
				direction: 'ltr',
				initialized: true,
				scrolling: false,
				selectedScrollSnap: 2,
				showNavigationArrows: true,
				showNavigationIndicators: true,
			});
		});

		test(`using tabindicator directive to scroll to last slide`, () => {
			attachDirectiveAndClick(carousel.directives.tabIndicator, {index: 2, id: 'auId-2', jump: false});

			expect(state).toEqual({
				canScrollNext: false,
				canScrollPrev: true,
				direction: 'ltr',
				initialized: true,
				scrolling: false,
				selectedScrollSnap: 2,
				showNavigationArrows: true,
				showNavigationIndicators: true,
			});
		});
	});
});
