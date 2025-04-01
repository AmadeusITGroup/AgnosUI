const e=`import {Carousel, type CarouselSlideContext} from '@agnos-ui/react-bootstrap/components/carousel';
import {useCallback, useId, useMemo} from 'react';

type Photo = {id: string; src: string; caption: {title: string; text: string}};

const CarouselDemo = () => {
	const prefixId = useId();
	const photos: Photo[] = useMemo(
		() => [
			{
				id: \`\${prefixId}-944\`,
				src: 'https://picsum.photos/id/944/900/500',
				caption: {title: 'First slide label', text: 'Some representative placeholder content for the first slide.'},
			},
			{
				id: \`\${prefixId}-1011\`,
				src: 'https://picsum.photos/id/1011/900/500',
				caption: {title: 'Second slide label', text: 'Some representative placeholder content for the second slide.'},
			},
			{
				id: \`\${prefixId}-984\`,
				src: 'https://picsum.photos/id/984/900/500',
				caption: {title: 'Third slide label', text: 'Some representative placeholder content for the third slide.'},
			},
		],
		[prefixId],
	);
	const slide = useCallback(
		({src, caption}: CarouselSlideContext<Photo>) => (
			<>
				<img className="w-100" alt="random picsum" style={{aspectRatio: '1.8 / 1'}} src={src} />
				<div className="carousel-caption d-none d-md-block">
					<h5>{caption.title}</h5>
					<p>{caption.text}</p>
				</div>
			</>
		),
		[],
	);

	return <Carousel slidesData={photos} slide={slide} />;
};
export default CarouselDemo;
`;export{e as default};
