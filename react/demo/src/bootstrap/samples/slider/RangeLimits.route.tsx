import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';

const RangeSliderDemo = () => {
	const [sliderControl, setSliderControl] = useState([10, 40, 50, 60, 90]);
	const [sliderValues, setSliderValues] = useState([10, 40]);

	const [options, setOptions] = useState({
		minRange: 10,
		maxRange: 30,
		pushRange: false,
	});

	return (
		<>
			<div className="d-flex flex-column justify-content-between gap-2">
				<div className="d-flex flex-column flex-sm-row form-group align-items-center gap-3">
					<div className="d-flex align-items-center justify-content-between">
						<label className="me-3" htmlFor="minRange">
							minRange:{' '}
						</label>
						<input
							id="minRange"
							type="number"
							min="0"
							className="form-control w-50"
							value={options.minRange}
							onChange={(e) => setOptions({...options, minRange: Number(e.target.value)})}
						/>
					</div>
					<div className="d-flex align-items-center justify-content-between">
						<label className="me-3" htmlFor="maxRange">
							maxRange:{' '}
						</label>
						<input
							id="maxRange"
							type="number"
							min="0"
							className="form-control w-50"
							value={options.maxRange}
							onChange={(e) => setOptions({...options, maxRange: Number(e.target.value)})}
						/>
					</div>
					<div className="d-inline-flex align-items-center justify-content-between">
						<label className="me-3" htmlFor="pushRange">
							pushRange:{' '}
						</label>
						<input
							type="checkbox"
							className="form-check-input"
							id="pushRange"
							checked={options.pushRange}
							onChange={(e) => setOptions({...options, pushRange: e.target.checked})}
						/>
					</div>
				</div>
			</div>
			<h5>Simple range</h5>
			<Slider
				min={0}
				max={100}
				minRange={options.minRange}
				maxRange={options.maxRange}
				pushRange={options.pushRange}
				stepSize={1}
				values={sliderValues}
				onValuesChange={setSliderValues}
			/>
			Values: {sliderValues.join(', ')}
			<hr />
			<h5>Multiple ranges</h5>
			<Slider
				min={0}
				max={100}
				minRange={options.minRange}
				maxRange={options.maxRange}
				pushRange={options.pushRange}
				stepSize={1}
				values={sliderControl}
				onValuesChange={setSliderControl}
			/>
			Form control values: {sliderControl?.join(', ')}
		</>
	);
};
export default RangeSliderDemo;
