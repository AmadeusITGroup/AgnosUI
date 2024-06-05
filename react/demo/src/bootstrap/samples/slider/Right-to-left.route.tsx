import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';

export default () => {
	const [sliderControl, setSliderControl] = useState([30]);
	const [sliderRangeControl, setSliderRangeControl] = useState([30, 70]);
	const [sliderVerticalControl, setSliderVerticalControl] = useState([30]);
	const [sliderRangeVerticalControl, setSliderRangeVerticalControl] = useState([30, 70]);

	return (
		<>
			<h3>Horizontal slider</h3>
			<Slider min={0} max={100} stepSize={1} values={sliderControl} onValuesChange={setSliderControl} rtl={true} />
			<br />
			<Slider min={0} max={100} stepSize={1} values={sliderRangeControl} onValuesChange={setSliderRangeControl} rtl={true} />
			<h3>Vertical slider</h3>
			<div className="d-flex" style={{height: '350px'}}>
				<div className="col-6" style={{height: '300px'}}>
					<Slider
						min={0}
						max={100}
						rtl={true}
						stepSize={1}
						vertical={true}
						values={sliderVerticalControl}
						onValuesChange={setSliderVerticalControl}
						className="my-0"
					/>
				</div>
				<div className="col-6" style={{height: '300px'}}>
					<Slider
						min={0}
						max={100}
						rtl={true}
						stepSize={1}
						vertical={true}
						values={sliderRangeVerticalControl}
						onValuesChange={setSliderRangeVerticalControl}
						className="my-0"
					/>
				</div>
			</div>
		</>
	);
};
