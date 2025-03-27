import {Carousel, type CarouselSlideContext} from '@agnos-ui/react-bootstrap/components/carousel';
import {useCallback, useId, useMemo} from 'react';

type Photo = {id: string; src: string};

const CarouselRtlDemo = () => {
	const prefixId = useId();
	const photos: Photo[] = useMemo(
		() => [944, 1011, 984].map((n) => ({id: `${prefixId}-${n}`, src: `https://picsum.photos/id/${n}/900/500`})),
		[prefixId],
	);
	const slide = useCallback(
		({src}: CarouselSlideContext<Photo>) => <img className="w-100" alt="random picsum" style={{aspectRatio: '1.8 / 1'}} src={src} />,
		[],
	);
	return <Carousel direction="rtl" slidesData={photos} slide={slide} />;
};
export default CarouselRtlDemo;
