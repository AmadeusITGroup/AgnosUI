import type {Photo} from '@agnos-ui/common/samples/carousel/photo';
import {createCarousel} from '@agnos-ui/react-headless/components/carousel';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';
import {useEffect, useRef, useState} from 'react';
import PreviousSvg from '@agnos-ui/common/samples/carousel/previous.svg?react';
import NextSvg from '@agnos-ui/common/samples/carousel/next.svg?react';
import ExpandSvg from '@agnos-ui/common/samples/carousel/expand.svg?react';
import CompressSvg from '@agnos-ui/common/samples/carousel/compress.svg?react';
import {useWidget} from '@agnos-ui/react-headless/utils/widget';

const ImageSlide = ({
	sources,
	src,
	alt,
	loadRequested,
	aspectRatio,
	toShow,
}: Photo & {loadRequested: boolean; aspectRatio: number; toShow: boolean}) => {
	const spinnerRef = useRef<HTMLSpanElement>(null);
	const [imgLoaded, setImgLoaded] = useState(false);
	return (
		<div className="relative basis-full min-w-0 shrink-0 grow-0 flex justify-center">
			{loadRequested ? (
				<>
					{!imgLoaded && (
						<span className="absolute top-1/2 -translate-y-1/2 left-1/2 loading loading-spinner loading-lg text-primary" ref={spinnerRef}></span>
					)}
					<picture className="flex justify-center">
						{sources.map(({media, srcset}, index) => (
							<source media={media} srcSet={srcset} key={index} />
						))}
						<img
							className={classNames('select-none', 'object-contain', 'transition-opacity', 'ease-in-out', 'duration-300', 'opacity-0', {
								'opacity-100': toShow,
							})}
							alt={alt}
							src={src}
							style={{aspectRatio}}
							onLoad={() => setImgLoaded(true)}
						/>
					</picture>
				</>
			) : (
				<div className="skeleton w-full h-full"></div>
			)}
		</div>
	);
};

export const Gallery = ({
	photos,
	withNavArrows = false,
	withShowFullscreen = false,
	aspectRatio = 4 / 3,
}: {
	photos: Photo[];
	withNavArrows?: boolean;
	withShowFullscreen?: boolean;
	aspectRatio?: number;
}) => {
	const [photosWithLoadState, setPhotosWithLoadState] = useState(photos.map((photo, index) => ({...photo, loadRequested: index === 0})));

	const {state: mainCarouselState, api: mainCarouselApi, directives: mainCarouselDirectives} = useWidget(createCarousel);
	const {api: thumbCarouselApi, directives: thumbDirectives} = useWidget(createCarousel, {dragFree: true, containScroll: 'keepSnaps'});

	const refMainContainer = useRef<HTMLDivElement>(null);
	const canFullScreen = !!document?.fullscreenEnabled && withShowFullscreen;
	const [isFullScreen, setIsFullScreen] = useState(false);
	const toggleFullScreen = () => {
		if (!isFullScreen) {
			void refMainContainer.current!.requestFullscreen();
		} else {
			void document.exitFullscreen();
		}
		setIsFullScreen(!isFullScreen);
	};
	useEffect(() => {
		const selectedSnap = mainCarouselState.selectedScrollSnap;
		thumbCarouselApi.scrollTo(selectedSnap);
		setPhotosWithLoadState((photos) =>
			photos.map((photoWithLoadState, index) =>
				Math.abs(index - selectedSnap) <= 1 && !photoWithLoadState.loadRequested ? {...photoWithLoadState, loadRequested: true} : photoWithLoadState,
			),
		);
	}, [mainCarouselState.selectedScrollSnap, thumbCarouselApi]);

	return (
		<div ref={refMainContainer} className="grid grid-flow-row max-h-dvh">
			<div className="overflow-hidden relative cursor-grab active:cursor-grabbing" {...useDirective(mainCarouselDirectives.emblaDirective)}>
				<div className="flex max-h-full">
					{photosWithLoadState.map((photoWithLoadState, index) => (
						<ImageSlide
							key={index}
							{...photoWithLoadState}
							aspectRatio={aspectRatio}
							toShow={Math.abs(mainCarouselState.selectedScrollSnap - index) <= 1}
						/>
					))}
				</div>
				{withNavArrows && (
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<button
							className="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
							onPointerDown={(e) => e.preventDefault()}
							disabled={!mainCarouselState.canScrollPrev}
							onClick={mainCarouselApi.scrollPrev}
							aria-label="Go to previous photo"
						>
							<PreviousSvg />
						</button>
						<button
							className="btn btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
							onPointerDown={(e) => e.preventDefault()}
							disabled={!mainCarouselState.canScrollNext}
							onClick={mainCarouselApi.scrollNext}
							aria-label="Go to next photo"
						>
							<NextSvg />
						</button>
					</div>
				)}
				{canFullScreen && (
					<div className="absolute right-5 bottom-5 flex">
						<button
							className="btn btn-sm md:btn-md btn-square opacity-75 hover:opacity-100"
							onClick={toggleFullScreen}
							aria-label={isFullScreen ? 'leave fullscreen' : 'open photo in fullscreen'}
						>
							{isFullScreen ? <CompressSvg /> : <ExpandSvg />}
						</button>
					</div>
				)}
			</div>
			<div className="overflow-hidden relative mt-1 mb-2" {...useDirective(thumbDirectives.emblaDirective)}>
				<div className="grid grid-flow-col auto-cols-max gap-2 mx-1 my-1">
					{photos.map(({thumbnail}, index) => (
						<div key={index} className="content-center">
							<button
								className={classNames('shadow-primary', {ring: mainCarouselState.selectedScrollSnap === index})}
								onClick={() => mainCarouselApi.scrollTo(index, Math.abs(mainCarouselState.selectedScrollSnap - index) > 1)}
								aria-label={`Go to photo ${index + 1}`}
								key={index}
							>
								<img className="select-none" alt="random picsum" src={thumbnail} loading="lazy" style={{aspectRatio}} />
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
