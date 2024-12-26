import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';
import '@agnos-ui/common/samples/slider/custom.scss';
import CustomSliderComponent from './CoffeeSlider';

const FullCustomSliderDemo = () => {
	const [sliderControl, setSliderControl] = useState([50]);

	return (
		<>
			<Slider
				min={0}
				max={100}
				stepSize={1}
				values={sliderControl}
				onValuesChange={setSliderControl}
				structure={CustomSliderComponent}
				vertical
				className="custom-slider"
			/>
		</>
	);
};
export default FullCustomSliderDemo;
