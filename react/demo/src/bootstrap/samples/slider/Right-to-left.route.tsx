import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';

const RightToLeftDemo = () => {
	const [sliderControl, setSliderControl] = useState([30]);
	const [sliderRangeControl, setSliderRangeControl] = useState([30, 70]);
	const [sliderVerticalControl, setSliderVerticalControl] = useState([30]);
	const [sliderRangeVerticalControl, setSliderRangeVerticalControl] = useState([30, 70]);

	return (
		<>
			<h5>Horizontal slider</h5>
			<Slider min={0} max={100} stepSize={1} values={sliderControl} onValuesChange={setSliderControl} rtl showTicks tickInterval={25} />
			<br />
			<Slider min={0} max={100} stepSize={1} values={sliderRangeControl} onValuesChange={setSliderRangeControl} rtl />
			<h5>Vertical slider</h5>
			<div className="d-flex" style={{height: '350px'}}>
				<div className="col-6" style={{height: '300px'}}>
					<Slider
						min={0}
						max={100}
						rtl
						stepSize={1}
						vertical
						values={sliderVerticalControl}
						onValuesChange={setSliderVerticalControl}
						className="my-0"
					/>
				</div>
				<div className="col-6" style={{height: '300px'}}>
					<Slider
						min={0}
						max={100}
						rtl
						stepSize={1}
						vertical
						values={sliderRangeVerticalControl}
						onValuesChange={setSliderRangeVerticalControl}
						className="my-0"
					/>
				</div>
			</div>
		</>
	);
};
export default RightToLeftDemo;
