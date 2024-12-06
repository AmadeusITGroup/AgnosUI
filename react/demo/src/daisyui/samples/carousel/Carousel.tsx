import {type CarouselProps, createCarousel} from '@agnos-ui/react-headless/components/carousel';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';
import AutoPlay from 'embla-carousel-autoplay';
import {useMemo, type ReactNode} from 'react';
import PreviousSvg from '@agnos-ui/common/samples/carousel/previous.svg?react';
import NextSvg from '@agnos-ui/common/samples/carousel/next.svg?react';

export function Carousel<Item>(
	props: Partial<Omit<CarouselProps, 'plugins'>> & {
		items: Item[];
		withNavArrows?: boolean;
		withNavIndicators?: boolean;
		autoplay?: boolean;
		slide: (props: {item: Item}) => ReactNode;
	},
) {
	const plugins = useMemo(
		() => (props.autoplay ? [AutoPlay({playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: true})] : []),
		[props.autoplay],
	);
	const {
		state,
		directives: {emblaDirective},
		api: {scrollPrev, scrollNext, scrollTo},
	} = useWidgetWithConfig(createCarousel, {...props, plugins, container: '.container'}, 'carousel');
	const Slide = props.slide;
	return (
		<div className="overflow-hidden relative cursor-grab active:cursor-grabbing flex flex-col-reverse" {...useDirective(emblaDirective)}>
			{props.withNavIndicators && (
				<div className="flex w-full justify-center gap-2 py-2 cursor-auto">
					{props.items.map((_, index) => (
						<button
							className={classNames('btn', 'btn-xs', 'md:btn-sm', {'btn-active': state.selectedScrollSnap === index})}
							onClick={() => scrollTo(index)}
							aria-label={`Go to slide ${index + 1}`}
							key={index}
						>
							{index + 1}
						</button>
					))}
				</div>
			)}
			<div className="flex container">
				{props.items.map((item, index) => (
					<div className="basis-full min-w-0 shrink-0 grow-0 flex justify-center" key={index}>
						<Slide item={item} />
					</div>
				))}
			</div>
			{props.withNavArrows && (
				<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
					<button
						className="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
						onPointerDown={(e) => e.preventDefault()}
						disabled={!state.canScrollPrev}
						onClick={scrollPrev}
						aria-label="Go to previous slide"
					>
						<PreviousSvg />
					</button>
					<button
						className="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
						onPointerDown={(e) => e.preventDefault()}
						disabled={!state.canScrollNext}
						onClick={scrollNext}
						aria-label="Go to next slide"
					>
						<NextSvg />
					</button>
				</div>
			)}
		</div>
	);
}
