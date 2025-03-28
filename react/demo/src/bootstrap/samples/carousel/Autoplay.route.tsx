import type {CarouselContext, CarouselSlideContext} from '@agnos-ui/react-bootstrap/components/carousel';
import {Carousel} from '@agnos-ui/react-bootstrap/components/carousel';
import {useCallback, useId, useMemo, useState} from 'react';
import '@agnos-ui/common/samples/carousel/autoplay.css';
import AutoPlay from 'embla-carousel-autoplay';
import {AutoplayNavigation} from './AutoplayNavigation';

type Photo = {id: string; src: string};

const CarouselDemo = () => {
	const prefixId = useId();
	const photos: Photo[] = [944, 1011, 984].map((n) => ({id: `${prefixId}-${n}`, src: `https://picsum.photos/id/${n}/900/500`}));

	const [ariaLive, setAriaLive] = useState('off');
	const plugins = useMemo(() => [AutoPlay({playOnInit: true, stopOnFocusIn: true, delay: 4_000})], []);
	const slide = useCallback(
		({src}: CarouselSlideContext<Photo>) => <img className="w-100 rounded-5" alt="random picsum" style={{aspectRatio: '1.8 / 1'}} src={src} />,
		[],
	);

	const onPlayingChange = useCallback((playing: boolean) => {
		setAriaLive(playing ? 'off' : 'polite');
	}, []);
	const navigation = useCallback(
		(context: CarouselContext<Photo>) => <AutoplayNavigation {...context} onPlayingChange={onPlayingChange} />,
		[onPlayingChange],
	);

	return (
		<Carousel navigation={navigation} slidesData={photos} slide={slide} className="autoplay-carousel" loop plugins={plugins} ariaLive={ariaLive} />
	);
};
export default CarouselDemo;
