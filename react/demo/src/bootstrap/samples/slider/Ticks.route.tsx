import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';

const TicksDemo = () => {
	const [sliderControl, setSliderControl] = useState([30]);

	const [sliderRangeControl, setSliderRangeControl] = useState([30, 70]);
	const [disabledToggle, setDisabledToggle] = useState(false);

	const [sliderRangeControlLabels, setSliderRangeControlLabels] = useState([30, 70]);

	return (
		<>
			<h2>Ticks as steps</h2>
			<Slider
				min={0}
				max={100}
				stepSize={25}
				values={sliderRangeControl}
				onValuesChange={setSliderRangeControl}
				disabled={disabledToggle}
				showTicks
			/>

			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					role="switch"
					id="disabled"
					checked={disabledToggle}
					onChange={() => setDisabledToggle(!disabledToggle)}
				/>
				<label className="form-check-label" htmlFor="disabled">
					Disabled
				</label>
			</div>

			<h2>With intermediate steps</h2>
			<Slider min={0} max={100} stepSize={1} values={sliderControl} onValuesChange={setSliderControl} showTicks tickInterval={25} />
			<br />

			<h2>Without tick labels</h2>
			<Slider
				min={0}
				max={100}
				stepSize={25}
				values={sliderRangeControlLabels}
				onValuesChange={setSliderRangeControlLabels}
				showTicks
				showTickValues={false}
			/>
			<p>
				{' '}
				If <code>showTickValues</code> is set to <code>false</code> the min/max/current label display is automatically put to <code>true</code>
			</p>
		</>
	);
};
export default TicksDemo;
