import type {CarouselDirectives, CarouselProps, CarouselState} from '@agnos-ui/react-headless/components/carousel';
import {createCarousel} from '@agnos-ui/react-headless/components/carousel';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import clsx from 'clsx';
import AutoPlay from 'embla-carousel-autoplay';
import type {PointerEvent, ReactNode} from 'react';
import {useMemo, useState, useEffect} from 'react';
import PreviousSvg from '@agnos-ui/common/samples/carousel/previous.svg?react';
import NextSvg from '@agnos-ui/common/samples/carousel/next.svg?react';
import PauseSvg from '@agnos-ui/common/samples/carousel/pause.svg?react';
import PlaySvg from '@agnos-ui/common/samples/carousel/play.svg?react';

const CarouselPrevButton = ({scrollPrev, direction}: {scrollPrev: CarouselDirectives['scrollPrev']; direction: CarouselState['direction']}) => (
	<button className="btn btn-circle btn-xs" {...useDirective(scrollPrev)}>
		{direction === 'rtl' ? <NextSvg /> : <PreviousSvg />}
	</button>
);

const CarouselNextButton = ({scrollNext, direction}: {scrollNext: CarouselDirectives['scrollNext']; direction: CarouselState['direction']}) => (
	<button className="btn btn-circle btn-xs" {...useDirective(scrollNext)}>
		{direction === 'rtl' ? <PreviousSvg /> : <NextSvg />}
	</button>
);

const CarouselTabIndicator = ({
	index,
	id,
	tabIndicator,
	selectedScrollSnap,
}: {
	index: number;
	id: string;
	tabIndicator: CarouselDirectives['tabIndicator'];
	selectedScrollSnap: number;
}) => (
	<button className={clsx('btn btn-xs', selectedScrollSnap === index && 'btn-active')} {...useDirective(tabIndicator, {index, id})} key={id}>
		{index + 1}
	</button>
);

interface Photo {
	src: string;
	alt: string;
	id: string;
}

const CarouselSlide = ({
	photo,
	index,
	slideRenderer,
	slideDirective,
}: {
	photo: Photo;
	index: number;
	slideRenderer: (photo: Photo) => ReactNode;
	slideDirective: CarouselDirectives['slide'];
}) => <div {...useDirectives([classDirective, 'basis-full shrink-0 grow-0'], [slideDirective, {id: photo.id, index}])}>{slideRenderer(photo)}</div>;

export function Carousel({
	autoplay,
	photos,
	slideRenderer,
	...props
}: Partial<Omit<CarouselProps, 'plugins'>> & {
	autoplay?: boolean;
	photos: Photo[];
	slideRenderer: (photo: Photo) => ReactNode;
}) {
	const plugins = useMemo(() => (autoplay ? [AutoPlay({playOnInit: true, stopOnFocusIn: true, delay: 2_000})] : []), [autoplay]);
	const {
		state: {showNavigationArrows, showNavigationIndicators, selectedScrollSnap, direction},
		directives,
		api,
	} = useWidgetWithConfig(createCarousel, {...props, plugins, container: '.container'}, 'carousel');

	const [playing, setPlaying] = useState(false);
	useEffect(() => {
		if (autoplay) {
			setPlaying(true);
		}
	}, [autoplay]);

	const togglePlay = () => {
		if (!playing) {
			api.plugins()!.autoplay.play();
		} else {
			api.plugins()!.autoplay.stop();
		}
		setPlaying((playing) => !playing);
	};
	const onPointerDown = (e: PointerEvent<HTMLDivElement>) => e.preventDefault();

	return (
		<div
			className="overflow-hidden relative w-full cursor-grab active:cursor-grabbing ring-primary has-[.au-carousel-slide:focus-visible]:ring-3"
			{...useDirective(directives.root)}
		>
			{(showNavigationArrows || showNavigationIndicators || autoplay) && (
				<div className={clsx('absolute top-2 right-2 left-2 z-1 flex', autoplay ? 'justify-between' : 'justify-center')} dir={direction}>
					{autoplay && (
						<div className="flex p-1 px-2 cursor-auto bg-base-100 rounded" onPointerDown={onPointerDown}>
							<button className="btn btn-xs btn-square" aria-label={playing ? 'Pause' : 'Play'} onClick={togglePlay}>
								{playing ? <PauseSvg /> : <PlaySvg />}
							</button>
						</div>
					)}
					{(showNavigationArrows || showNavigationIndicators) && (
						<div className="flex p-1 px-2 gap-1 cursor-auto bg-base-100 rounded-xl" dir={direction} onPointerDown={onPointerDown}>
							{showNavigationArrows && <CarouselPrevButton scrollPrev={directives.scrollPrev} direction={direction} />}
							{showNavigationIndicators && (
								<div className="flex gap-1" role="tablist">
									{photos.map(({id}, index) => (
										<CarouselTabIndicator
											key={id}
											index={index}
											tabIndicator={directives.tabIndicator}
											selectedScrollSnap={selectedScrollSnap}
											id={id}
										/>
									))}
								</div>
							)}
							{showNavigationArrows && <CarouselNextButton scrollNext={directives.scrollNext} direction={direction} />}
						</div>
					)}
				</div>
			)}
			<div className="flex container touch-pan-y touch-pinch-zoom" aria-atomic="false" aria-live={autoplay ? 'off' : 'polite'} dir={props.direction}>
				{photos.map((photo, index) => (
					<CarouselSlide key={photo.id} index={index} photo={photos[index]} slideRenderer={slideRenderer} slideDirective={directives.slide} />
				))}
			</div>
		</div>
	);
}
