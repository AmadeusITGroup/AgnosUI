const e=`import {useState} from 'react';
import {Slider} from './Slider';

const DaisyUIDemo = () => {
	const [sliderValues, setSliderValues] = useState([20]);

	return (
		<>
			<h2 className="text-lg mb-2">DaisyUI Example</h2>
			<Slider min={0} max={100} stepSize={1} values={sliderValues} onValuesChange={setSliderValues} />
			Value: {sliderValues}
		</>
	);
};

export default DaisyUIDemo;
`;export{e as default};
