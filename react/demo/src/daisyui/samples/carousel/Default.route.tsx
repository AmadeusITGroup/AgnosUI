import clsx from 'clsx';
import {Carousel} from './Carousel';
import {useMemo, useState} from 'react';

const photos = [
	'https://picsum.photos/600/450.webp?random=1',
	'https://picsum.photos/600/450.webp?random=2',
	'https://picsum.photos/450/600.webp?random=3',
	'https://picsum.photos/600/450.webp?random=4',
	'https://picsum.photos/600/450.webp?random=5',
	'https://picsum.photos/600/450.webp?random=6',
].map((src, index) => ({src, id: `photo-${index}`, alt: `picsum photo ${index + 1} of 6`}));

const DemoCarousel = () => {
	const [loop, setLoop] = useState(false);
	const [showNavigationArrows, setShowNavigationArrows] = useState(true);
	const [showNavigationIndicators, setShowNavigationIndicators] = useState(true);
	const [dragFree, setDragFree] = useState(false);
	const [_autoplay, setAutoplay] = useState(true);
	const autoPlay = useMemo(() => loop && _autoplay, [_autoplay, loop]);
	const [rtl, setRtl] = useState(false);

	return (
		<div className="w-full flex justify-center">
			<div className="max-w-[600px] grow">
				<Carousel
					showNavigationArrows={showNavigationArrows}
					showNavigationIndicators={showNavigationIndicators}
					loop={loop}
					autoplay={autoPlay}
					dragFree={dragFree}
					direction={rtl ? 'rtl' : 'ltr'}
					photos={photos}
					slideRenderer={({src, alt}) => <img src={src} alt={alt} loading="lazy" className="select-none object-contain aspect-[4/3] w-full" />}
				/>

				<div className="flex justify-around mt-2">
					<div className="flex flex-col items-end gap-1">
						<label className="label text-sm md:text-base">
							Loop
							<input
								type="checkbox"
								className="toggle toggle-xs md:toggle-sm toggle-primary"
								checked={loop}
								onChange={(e) => setLoop(e.target.checked)}
							/>
						</label>
						<label className={clsx('label text-sm md:text-base', !loop && 'has-[input]:cursor-not-allowed')}>
							Autoplay
							<input
								type="checkbox"
								className="toggle toggle-xs md:toggle-sm toggle-primary"
								checked={_autoplay}
								onChange={(e) => setAutoplay(e.target.checked)}
								disabled={!loop}
							/>
						</label>
						<label className="label text-sm md:text-base">
							Drag free
							<input
								type="checkbox"
								className="toggle toggle-xs md:toggle-sm toggle-primary"
								checked={dragFree}
								onChange={(e) => setDragFree(e.target.checked)}
							/>
						</label>
					</div>
					<div className="flex flex-col items-end gap-1">
						<label className="label text-sm md:text-base">
							Right-to-left
							<input
								type="checkbox"
								className="toggle toggle-xs md:toggle-sm toggle-primary"
								checked={rtl}
								onChange={(e) => setRtl(e.target.checked)}
							/>
						</label>
						<label className="label text-sm md:text-base">
							Indicators
							<input
								type="checkbox"
								className="toggle toggle-xs md:toggle-sm toggle-primary"
								checked={showNavigationIndicators}
								onChange={(e) => setShowNavigationIndicators(e.target.checked)}
							/>
						</label>
						<label className="label text-sm md:text-base">
							Arrows
							<input
								type="checkbox"
								className="toggle toggle-xs md:toggle-sm toggle-primary"
								checked={showNavigationArrows}
								onChange={(e) => setShowNavigationArrows(e.target.checked)}
							/>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DemoCarousel;
