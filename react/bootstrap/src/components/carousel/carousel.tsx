import type {CarouselApi, CarouselDirectives, CarouselProps, CarouselState} from './carousel.gen';
import {createCarousel} from './carousel.gen';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {Context, Ref} from 'react';
import {useImperativeHandle, createContext} from 'react';

const CarouselContext: Context<Partial<CarouselApi>> = createContext({});

const CarouselPrevButton = ({scrollPrev}: {scrollPrev: CarouselDirectives['scrollPrev']}) => (
	<button {...useDirective(scrollPrev)}>
		<span className="carousel-control-prev-icon"></span>
	</button>
);

const CarouselNextButton = ({scrollNext}: {scrollNext: CarouselDirectives['scrollNext']}) => (
	<button {...useDirective(scrollNext)}>
		<span className="carousel-control-next-icon"></span>
	</button>
);

const CarouselTabIndicator = ({index, id, tabIndicator}: {index: number; id: string; tabIndicator: CarouselDirectives['tabIndicator']}) => (
	<button {...useDirective(tabIndicator, {index, id})}></button>
);

const CarouselSlide = <SlideData extends {id: string}>({
	slideData,
	slideDirective,
	slideSlot,
	index,
}: {
	slideData: SlideData;
	slideDirective: CarouselDirectives['slide'];
	slideSlot: CarouselState<SlideData>['slide'];
	index: number;
}) => (
	<div {...useDirective(slideDirective, {id: slideData.id, index})}>
		<Slot slotContent={slideSlot} props={slideData} />
	</div>
);

/**
 * Carousel component that uses a forward ref to expose an API.
 *
 * This component utilizes the {@link useWidgetWithConfig} hook to create a carousel widget
 * and the {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} hook to expose the widget's API via the ref.
 *
 * @template SlideData - The type of data used by each slide in the carousel.
 *
 * @param props - partial properties of the CarouselProps interface.
 * @param props.ref - forwarded reference to the CarouselApi.
 * @param props.children - content of the carousel
 *
 * @returns a JSX element that renders the Carousel component with navigation arrows and indicators.
 */
export function Carousel<SlideData extends {id: string}>({ref, ...props}: Partial<CarouselProps<SlideData>> & {ref?: Ref<CarouselApi>}) {
	const {
		state: {showNavigationArrows, showNavigationIndicators, canScrollPrev, canScrollNext, slidesData, slide},
		directives,
		api,
	} = useWidgetWithConfig(createCarousel<SlideData>, props, 'carousel');
	useImperativeHandle(ref, () => api, [api]);

	return (
		<CarouselContext value={api}>
			<div {...useDirective(directives.root)}>
				{showNavigationArrows && (
					<>
						{canScrollPrev && <CarouselPrevButton scrollPrev={directives.scrollPrev} />}
						{canScrollNext && <CarouselNextButton scrollNext={directives.scrollNext} />}
					</>
				)}
				{showNavigationIndicators && (
					<div className="carousel-indicators" role="tablist">
						{slidesData.map(({id}, index) => (
							<CarouselTabIndicator key={id} index={index} tabIndicator={directives.tabIndicator} id={id} />
						))}
					</div>
				)}
				<div className="au-carousel-container" aria-atomic="false" aria-live="polite">
					{slidesData.map((slideData, index) => (
						<CarouselSlide key={slideData.id} slideData={slideData} slideDirective={directives.slide} slideSlot={slide} index={index} />
					))}
				</div>
			</div>
		</CarouselContext>
	);
}
