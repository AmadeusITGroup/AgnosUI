import {Carousel, Slide} from '@agnos-ui/react-bootstrap/components/carousel';

const photos = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

const CollapseDemo = () => (
	<Carousel>
		{photos.map((photo, index) => (
			<Slide key={index}>
				<img className="w-100" alt="random picsum" src={photo} />
			</Slide>
		))}
	</Carousel>
);
export default CollapseDemo;
