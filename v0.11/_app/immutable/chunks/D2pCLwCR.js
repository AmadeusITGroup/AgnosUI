const e=`import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';
import './custom.scss';
import CustomSlotHandle from './CustomHandle';

const CustomSliderDemo = () => {
	const [sliderCustomLabelControl, setSliderCustomLabelControl] = useState([70]);
	const [sliderCustomHandleControl, setSliderCustomHandleControl] = useState([50]);

	return (
		<>
			<h5>Slider with custom labels</h5>
			<Slider
				min={0}
				max={100}
				stepSize={1}
				values={sliderCustomLabelControl}
				onValuesChange={setSliderCustomLabelControl}
				label={({value}: {value: number}) => '' + value + '%'}
				className="au-custom-slider-container"
			/>
			<hr />
			<h5>Slider with custom handle</h5>
			<Slider
				min={0}
				max={100}
				stepSize={1}
				values={sliderCustomHandleControl}
				onValuesChange={setSliderCustomHandleControl}
				handle={CustomSlotHandle}
				className="au-custom-slider-container"
			/>
		</>
	);
};
export default CustomSliderDemo;
`;export{e as default};
