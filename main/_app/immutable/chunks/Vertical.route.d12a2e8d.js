const e=`import {Slider} from '@agnos-ui/react';
import {useState} from 'react';

const VerticalSliderDemo = () => {
	const [sliderControl, setSliderControl] = useState([10, 40]);
	const [sliderControlRange, setSliderControlRange] = useState([40]);

	return (
		<>
			<div className="d-flex" style={{height: '350px'}}>
				<div className="col-6" style={{height: '300px'}}>
					<Slider min={0} max={100} stepSize={1} vertical={true} values={sliderControl} onValuesChange={setSliderControl} className="my-0" />
					<div className="mt-3">Form control values: {sliderControl?.join(', ')}</div>
				</div>
				<div className="col-6" style={{height: '300px'}}>
					<Slider
						min={0}
						max={100}
						stepSize={1}
						vertical={true}
						values={sliderControlRange}
						onValuesChange={setSliderControlRange}
						className="my-0"
					/>
					<div className="mt-3">From control value: {sliderControlRange}</div>
				</div>
			</div>
		</>
	);
};
export default VerticalSliderDemo;
`;export{e as default};
