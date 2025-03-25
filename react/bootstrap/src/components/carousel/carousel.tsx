import type {CarouselApi, CarouselContext, CarouselDirectives, CarouselProps} from './carousel.gen';
import {createCarousel} from './carousel.gen';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {Ref} from 'react';
import {useImperativeHandle} from 'react';

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
	widget,
	index,
}: {
	slideData: SlideData;
	widget: CarouselContext<SlideData>;
	index: number;
}) => (
	<div {...useDirective(widget.directives.slide, {id: slideData.id, index})}>
		<Slot slotContent={widget.state.slide} props={{...slideData, ...widget}} />
	</div>
);

/**
 * Renders the default slot navigation for the carousel component.
 *
 * @param widget - The widget context containing the state, api and directives for carousel.
 * @returns The rendered carousel navigation.
 */
export const CarouselDefaultNavigation = <SlideData extends {id: string}>(widget: CarouselContext<SlideData>) => {
	const {
		state: {showNavigationArrows, showNavigationIndicators, canScrollNext, canScrollPrev, slidesData},
		directives,
	} = widget;
	return (
		<>
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
		</>
	);
};

/**
 * Renders the default slot structure for the carousel component.
 *
 * @param widget - The widget context containing the state, api and directives for carousel.
 * @returns The rendered carousel structure.
 */
export const CarouselDefaultStructure = <SlideData extends {id: string}>(widget: CarouselContext<SlideData>) => (
	<>
		<Slot slotContent={widget.state.navigation} props={widget} />
		<div className="au-carousel-container" aria-atomic="false" aria-live="polite">
			{widget.state.slidesData.map((slideData, index) => (
				<CarouselSlide key={slideData.id} slideData={slideData} widget={widget} index={index} />
			))}
		</div>
	</>
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
	const widget = useWidgetWithConfig(createCarousel<SlideData>, props, 'carousel', {
		structure: CarouselDefaultStructure,
		navigation: CarouselDefaultNavigation,
	});
	useImperativeHandle(ref, () => widget.api, [widget.api]);

	return (
		<div {...useDirective(widget.directives.root)}>
			<Slot slotContent={widget.state.structure} props={widget} />
		</div>
	);
}
