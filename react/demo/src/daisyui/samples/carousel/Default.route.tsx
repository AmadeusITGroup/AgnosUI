import classNames from 'classnames';
import {Carousel} from './Carousel';
import {useMemo, useState} from 'react';

const photos = [
	'https://picsum.photos/600/450.webp?random=1',
	'https://picsum.photos/600/450.webp?random=2',
	'https://picsum.photos/450/600.webp?random=3',
	'https://picsum.photos/600/450.webp?random=4',
	'https://picsum.photos/600/450.webp?random=5',
	'https://picsum.photos/600/450.webp?random=6',
];

const Slide = ({item}: {item: string}) => (
	<img className="select-none object-contain aspect-[4/3] w-full" alt="random picsum" src={item} loading="lazy" />
);

const DemoCarousel = () => {
	const [loop, setLoop] = useState(false);
	const [withNavArrows, setWithNavArrows] = useState(true);
	const [withNavIndicators, setWithNavIndicators] = useState(true);
	const [dragFree, setDragFree] = useState(false);
	const [_autoplay, setAutoplay] = useState(true);
	const autoPlay = useMemo(() => loop && _autoplay, [_autoplay, loop]);
	return (
		<div className="w-full flex justify-center">
			<div className="max-w-[600px] self-center">
				<Carousel
					items={photos}
					slide={Slide}
					withNavArrows={withNavArrows}
					withNavIndicators={withNavIndicators}
					loop={loop}
					autoplay={autoPlay}
					dragFree={dragFree}
				/>
				<div className="form-control items-start">
					<label className="label cursor-pointer gap-3">
						<span className="label-text">Loop</span>
						<input type="checkbox" className="toggle toggle-primary" checked={loop} onChange={(e) => setLoop(e.target.checked)} />
					</label>
					<label className={classNames('label', 'gap-3', {'cursor-pointer': loop})}>
						<span className="label-text">Autoplay</span>
						<input
							type="checkbox"
							className="toggle toggle-primary"
							checked={_autoplay}
							onChange={(e) => setAutoplay(e.target.checked)}
							disabled={!loop}
						/>
					</label>
					<label className="label cursor-pointer gap-3">
						<span className="label-text">Drag free</span>
						<input type="checkbox" className="toggle toggle-primary" checked={dragFree} onChange={(e) => setDragFree(e.target.checked)} />
					</label>
					<label className="label cursor-pointer gap-3">
						<span className="label-text">Navigation Indicators</span>
						<input
							type="checkbox"
							className="toggle toggle-primary"
							checked={withNavIndicators}
							onChange={(e) => setWithNavIndicators(e.target.checked)}
						/>
					</label>
					<label className="label cursor-pointer gap-3">
						<span className="label-text">Navigation Arrows</span>
						<input type="checkbox" className="toggle toggle-primary" checked={withNavArrows} onChange={(e) => setWithNavArrows(e.target.checked)} />
					</label>
				</div>
			</div>
		</div>
	);
};
export default DemoCarousel;
