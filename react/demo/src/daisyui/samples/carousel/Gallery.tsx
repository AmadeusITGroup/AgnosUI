import type {Photo} from '@agnos-ui/common/samples/carousel/photo';
import {type CarouselDirectives, createCarousel} from '@agnos-ui/react-headless/components/carousel';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import clsx from 'clsx';
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
	id,
	index,
	slide,
}: Photo & {loadRequested: boolean; aspectRatio: number; id: string; index: number; slide: CarouselDirectives['slide']}) => {
	const spinnerRef = useRef<HTMLSpanElement>(null);
	const [imgLoaded, setImgLoaded] = useState(false);
	return (
		<div className="relative basis-full min-w-0 shrink-0 grow-0 flex justify-center" {...useDirective(slide, {id, index})}>
			{loadRequested ? (
				<>
					{!imgLoaded && (
						<span className="absolute top-1/2 -translate-y-1/2 left-1/2 loading loading-spinner loading-lg text-primary" ref={spinnerRef}></span>
					)}
					<picture className="flex justify-center">
						{sources.map(({media, srcset}, index) => (
							<source media={media} srcSet={srcset} key={index} />
						))}
						<img className={clsx('select-none', 'object-contain')} alt={alt} src={src} style={{aspectRatio}} onLoad={() => setImgLoaded(true)} />
					</picture>
				</>
			) : (
				<div className="skeleton w-full h-full"></div>
			)}
		</div>
	);
};

const GalleryNavArrows = ({scrollPrev, scrollNext}: {scrollPrev: CarouselDirectives['scrollPrev']; scrollNext: CarouselDirectives['scrollNext']}) => (
	<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
		<button
			className="btn btn-primary btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
			onPointerDown={(e) => e.preventDefault()}
			{...useDirective(scrollPrev)}
		>
			<PreviousSvg fill="currentColor" />
		</button>
		<button
			className="btn btn-primary btn-sm md:btn-md btn-circle opacity-75 hover:opacity-100"
			onPointerDown={(e) => e.preventDefault()}
			{...useDirective(scrollNext)}
		>
			<NextSvg fill="currentColor" />
		</button>
	</div>
);

const GalleryThumbnail = ({
	tabIndicator,
	index,
	id,
	selectedScrollSnap,
	aspectRatio,
	thumbnail,
}: {
	tabIndicator: CarouselDirectives['tabIndicator'];
	index: number;
	id: string;
	selectedScrollSnap: number;
	aspectRatio: number;
	thumbnail: string;
}) => (
	<button className={clsx('ring-primary', 'cursor-pointer', selectedScrollSnap === index && 'ring-3')} {...useDirective(tabIndicator, {index, id})}>
		<img className="select-none" alt="random picsum" src={thumbnail} loading="lazy" style={{aspectRatio}} />
	</button>
);

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

	const {state: mainState, directives: mainDirectives} = useWidget(createCarousel);
	const {api: thumbApi, directives: thumbDirectives} = useWidget(createCarousel, {dragFree: true, containScroll: 'keepSnaps'});

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
		const selectedSnap = mainState.selectedScrollSnap;
		thumbApi.scrollTo(selectedSnap);
		setPhotosWithLoadState((photos) =>
			photos.map((photoWithLoadState, index) =>
				Math.abs(index - selectedSnap) <= 1 && !photoWithLoadState.loadRequested ? {...photoWithLoadState, loadRequested: true} : photoWithLoadState,
			),
		);
	}, [mainState.selectedScrollSnap, thumbApi]);

	return (
		<div ref={refMainContainer} className="grid grid-flow-row max-h-dvh">
			<div className="overflow-hidden relative cursor-grab active:cursor-grabbing" {...useDirective(mainDirectives.root)}>
				<div className="flex max-h-full">
					{photosWithLoadState.map((photoWithLoadState, index) => (
						<ImageSlide
							key={index}
							{...photoWithLoadState}
							aspectRatio={aspectRatio}
							id={`gallery-photo-${index}`}
							index={index}
							slide={mainDirectives.slide}
						/>
					))}
				</div>
				{withNavArrows && <GalleryNavArrows scrollNext={mainDirectives.scrollNext} scrollPrev={mainDirectives.scrollPrev} />}
				{canFullScreen && (
					<div className="absolute right-5 bottom-5 flex">
						<button
							className="btn btn-primary btn-sm md:btn-md btn-square opacity-75 hover:opacity-100"
							onClick={toggleFullScreen}
							aria-label={isFullScreen ? 'leave fullscreen' : 'open photo in fullscreen'}
						>
							{isFullScreen ? <CompressSvg fill="currentColor" /> : <ExpandSvg fill="currentColor" />}
						</button>
					</div>
				)}
			</div>
			<div className="overflow-hidden mt-1 mb-2" {...useDirective(thumbDirectives.root)}>
				<div className="grid grid-flow-col auto-cols-max gap-2 mx-1 my-1 items-center" {...useDirective(mainDirectives.tabList)}>
					{photos.map(({thumbnail}, index) => (
						<GalleryThumbnail
							key={index}
							thumbnail={thumbnail}
							selectedScrollSnap={mainState.selectedScrollSnap}
							aspectRatio={aspectRatio}
							id={`gallery-photo-${index}`}
							index={index}
							tabIndicator={mainDirectives.tabIndicator}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
