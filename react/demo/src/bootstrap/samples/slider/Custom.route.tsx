import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';
import '@agnos-ui/common/samples/slider/custom.scss';
import {CustomHandle} from './CustomHandle';

const CustomSliderDemo = () => {
	const [sliderCustomLabelControl, setSliderCustomLabelControl] = useState([70]);
	const [sliderCustomHandleControl, setSliderCustomHandleControl] = useState([50]);

	return (
		<>
			<h3>Slider with custom labels</h3>
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
			<h3>Slider with custom handle</h3>
			<Slider
				min={0}
				max={100}
				stepSize={1}
				values={sliderCustomHandleControl}
				onValuesChange={setSliderCustomHandleControl}
				handle={CustomHandle}
				className="au-custom-slider-container"
			/>
		</>
	);
};
export default CustomSliderDemo;
