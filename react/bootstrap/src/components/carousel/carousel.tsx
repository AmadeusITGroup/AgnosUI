import type {CarouselApi, CarouselDirectives, CarouselProps, CarouselSlideProps} from './carousel.gen';
import {createCarousel} from './carousel.gen';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {PropsWithChildren, Context, Ref} from 'react';
import {useImperativeHandle, createContext, useContext, useId} from 'react';

const CarouselContext: Context<Partial<CarouselApi>> = createContext({});

const CarouselPrevButton = ({slidePrev}: {slidePrev: CarouselDirectives['slidePrev']}) => (
	<button className="carousel-control-prev" {...useDirective(slidePrev)}>
		<span className="carousel-control-prev-icon"></span>
	</button>
);

const CarouselNextButton = ({slideNext}: {slideNext: CarouselDirectives['slideNext']}) => (
	<button className="carousel-control-next" {...useDirective(slideNext)}>
		<span className="carousel-control-next-icon"></span>
	</button>
);

const CarouselTabIndicator = ({index, id, tabIndicator}: {index: number; id: string; tabIndicator: CarouselDirectives['tabIndicator']}) => (
	<button {...useDirective(tabIndicator, {index, id})}></button>
);

/**
 * Carousel component that uses a forward ref to expose an API.
 *
 * This component utilizes the {@link useWidgetWithConfig} hook to create a carousel widget
 * and the {@link https://react.dev/reference/react/useImperativeHandle | useImperativeHandle} hook to expose the widget's API via the ref.
 *
 * @param props - partial properties of the CarouselProps interface.
 * @param props.ref - forwarded reference to the CarouselApi.
 * @param props.children - content of the carousel
 *
 * @returns a JSX element that renders the Carousel component with navigation arrows and indicators.
 */
export function Carousel({children, ...props}: PropsWithChildren<Partial<CarouselProps>> & {ref?: Ref<CarouselApi>}) {
	const {
		state: {showNavigationArrows, showNavigationIndicators, canScrollPrev, canScrollNext, slides},
		directives: {root, tabIndicator, slidePrev, slideNext},
		api,
	} = useWidgetWithConfig(createCarousel, props, 'carousel');
	useImperativeHandle(props.ref, () => api, [api]);

	return (
		<CarouselContext value={api}>
			<div {...useDirective(root)}>
				{showNavigationArrows && (
					<>
						{canScrollPrev && <CarouselPrevButton slidePrev={slidePrev} />}
						{canScrollNext && <CarouselNextButton slideNext={slideNext} />}
					</>
				)}
				{showNavigationIndicators && (
					<div className="carousel-indicators" role="tablist">
						{slides.map(({id}, index) => (
							<CarouselTabIndicator key={id} index={index} tabIndicator={tabIndicator} id={id} />
						))}
					</div>
				)}
				<div className="au-carousel-container" aria-atomic="false" aria-live="polite">
					{children}
				</div>
			</div>
		</CarouselContext>
	);
}

/**
 * Carousel Slide component that renders a slide within a carousel.
 *
 * @param props - partial properties of the CarouselSlideProps interface.
 * @param props.children - content of the slide
 *
 * @returns a JSX element that renders the slide within a carousel.
 */
export function Slide({children, ...props}: PropsWithChildren<Partial<CarouselSlideProps>>) {
	const {registerSlide} = useContext(CarouselContext);
	const id = useId();
	const {
		directives: {root},
	} = useWidgetWithConfig(registerSlide!, props, null, {id});
	return <div {...useDirective(root)}>{children}</div>;
}
