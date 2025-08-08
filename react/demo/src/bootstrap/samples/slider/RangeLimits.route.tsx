import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';

const RangeSliderDemo = () => {
	const [sliderControl, setSliderControl] = useState([10, 40, 50, 60, 90]);
	const [sliderValues, setSliderValues] = useState([10, 40]);

	return (
		<>
			<h2>Simple range</h2>
			<Slider min={0} max={100} minRange={10} maxRange={30} pushRange={true} stepSize={1} values={sliderValues} onValuesChange={setSliderValues} />
			Values: {sliderValues.join(', ')}
			<hr />
			<h2>Multiple ranges</h2>
			<Slider min={0} max={100} minRange={10} maxRange={30} pushRange={true} stepSize={1} values={sliderControl} onValuesChange={setSliderControl} />
			Form control values: {sliderControl?.join(', ')}
		</>
	);
};
export default RangeSliderDemo;
