const e=`import {Slider} from '@agnos-ui/react/components/slider';
import {useState} from 'react';

const RightToLeftDemo = () => {
	const [sliderControl, setSliderControl] = useState([70]);
	const [sliderRangeControl, setSliderRangeControl] = useState([30, 70]);
	const [sliderVerticalControl, setSliderVerticalControl] = useState([70]);
	const [sliderRangeVerticalControl, setSliderRangeVerticalControl] = useState([30, 70]);

	return (
		<>
			<h2>Horizontal slider</h2>
			<Slider min={0} max={100} stepSize={1} values={sliderControl} onValuesChange={setSliderControl} rtl={true} />
			<br />
			<Slider min={0} max={100} stepSize={1} values={sliderRangeControl} onValuesChange={setSliderRangeControl} rtl={true} />
			<h2>Vertical slider</h2>
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
export default RightToLeftDemo;
`;export{e as default};
