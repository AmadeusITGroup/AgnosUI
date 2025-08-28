const e=`import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';

const RangeSliderDemo = () => {
	const [sliderControl, setSliderControl] = useState([10, 40, 50, 60, 90]);
	const [sliderValues, setSliderValues] = useState([10, 40]);

	return (
		<>
			<h5>Slider with form control</h5>
			<Slider min={0} max={100} stepSize={1} values={sliderControl} onValuesChange={setSliderControl} />
			Form control values: {sliderControl?.join(', ')}
			<hr />
			<h5>Slider with values</h5>
			<Slider min={0} max={100} stepSize={1} values={sliderValues} onValuesChange={setSliderValues} />
			Values: {sliderValues.join(', ')}
		</>
	);
};
export default RangeSliderDemo;
`;export{e as default};
