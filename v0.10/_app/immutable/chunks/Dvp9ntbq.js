const s=`import {Carousel, type CarouselSlideContext} from '@agnos-ui/react-bootstrap/components/carousel';
import clsx from 'clsx';
import {useCallback, useId, useMemo} from 'react';
import './custom.css';

type Photo = {id: string; src: string; className: string; aspectRatio: string; imgClass: string};

const CarouselSimpleCustomDemo = () => {
	const prefixId = useId();
	const photos: Photo[] = useMemo(
		() => [
			{
				id: \`\${prefixId}-944\`,
				src: 'https://picsum.photos/id/944/900/500',
				className: 'basis-81',
				aspectRatio: '1.8 / 1',
				imgClass: 'rounded-5',
			},
			{
				id: \`\${prefixId}-1011\`,
				src: 'https://picsum.photos/id/1011/500/900',
				className: 'basis-25',
				aspectRatio: '1 / 1.8',
				imgClass: 'rounded-3',
			},
			{
				id: \`\${prefixId}-984\`,
				src: 'https://picsum.photos/id/984/900/500',
				className: ' basis-81',
				aspectRatio: '1.8 / 1',
				imgClass: 'rounded-5',
			},
		],
		[prefixId],
	);
	const slideClass = useCallback(
		({index, active}: {index: number; active: boolean}) => photos[index].className + (active ? '' : ' opacity-50'),
		[photos],
	);
	const slide = useCallback(
		({src, aspectRatio, imgClass}: CarouselSlideContext<Photo>) => (
			<img className={clsx(['w-100', imgClass])} alt="random picsum" src={src} style={{aspectRatio: aspectRatio}} />
		),
		[],
	);

	return <Carousel slidesData={photos} containerClass="gap-2" className="custom-carousel" slideClass={slideClass} slide={slide} />;
};
export default CarouselSimpleCustomDemo;
`;export{s as default};
