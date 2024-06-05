import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';

export default () => {
	const [sliderControl, setSliderControl] = useState([70]);
	const [disabledControl, setDisabledControl] = useState([60]);
	const [sliderValues, setSliderValues] = useState([20]);
	const [disabledToggle, setDisabledToggle] = useState(true);
	const [readonlyToggle, setReadonlyToggle] = useState(true);
	const [minMaxLabelToggle, setMinMaxLabelToggle] = useState(true);
	const [valueLabelToggle, setValueLabelToggle] = useState(true);

	return (
		<>
			<h3>Slider with form control</h3>
			<Slider
				min={0}
				max={100}
				stepSize={1}
				values={sliderControl}
				onValuesChange={setSliderControl}
				showMinMaxLabels={minMaxLabelToggle}
				showValueLabels={valueLabelToggle}
			/>
			Form control value: {sliderControl.join(', ')}
			<hr />
			<h3>Slider with value</h3>
			<Slider min={0} max={100} stepSize={1} values={sliderValues} onValuesChange={setSliderValues} />
			Value: {sliderValues.join(', ')}
			<hr />
			<h3>Disabled slider</h3>
			<Slider
				min={0}
				max={100}
				stepSize={1}
				values={disabledControl}
				onValuesChange={setDisabledControl}
				disabled={disabledToggle}
				readonly={readonlyToggle}
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
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					role="switch"
					id="readonly"
					checked={readonlyToggle}
					onChange={() => setReadonlyToggle(!readonlyToggle)}
				/>
				<label className="form-check-label" htmlFor="readonly">
					Readonly
				</label>
			</div>
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					role="switch"
					id="showMinMax"
					checked={minMaxLabelToggle}
					onChange={() => setMinMaxLabelToggle(!minMaxLabelToggle)}
				/>
				<label className="form-check-label" htmlFor="showMinMax">
					Min-Max label visibility
				</label>
			</div>
			<div className="form-check form-switch">
				<input
					className="form-check-input"
					type="checkbox"
					role="switch"
					id="showValues"
					checked={valueLabelToggle}
					onChange={() => setValueLabelToggle(!valueLabelToggle)}
				/>
				<label className="form-check-label" htmlFor="showValues">
					Value label visibility
				</label>
			</div>
		</>
	);
};
