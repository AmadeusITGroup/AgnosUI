import {useState} from 'react';
import {Slider} from './Slider';

const DaisyUIDemo = () => {
	const [sliderValues, setSliderValues] = useState([20]);

	return (
		<>
			<Slider min={0} max={100} stepSize={1} values={sliderValues} onValuesChange={setSliderValues} className="w-full" />
			Value: {sliderValues}
		</>
	);
};

export default DaisyUIDemo;
