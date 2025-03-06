import {Carousel} from '@agnos-ui/react-bootstrap/components/carousel';

const photos = [944, 1011, 984].map((n) => ({id: `carousel-photo-${n}`, src: `https://picsum.photos/id/${n}/900/500`}));

const CollapseDemo = () => {
	return <Carousel slidesData={photos} slide={({src}) => <img className="w-100" alt="random picsum" src={src} />} />;
};
export default CollapseDemo;
