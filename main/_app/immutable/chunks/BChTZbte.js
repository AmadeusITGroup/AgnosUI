const e=`import type {SliderSlotLabelContext} from '@agnos-ui/react-bootstrap/components/slider';
import {Slider} from '@agnos-ui/react-bootstrap/components/slider';
import {useState} from 'react';

const STEP_SIZE = 86400000; // 1 day in milliseconds
const MIN = 1733007600000; // 01-12-2024
const MAX = 1735599600000; // 31-12-2024

const ariaLabelledBy = () => 'labelID';
const ariaValueText = (value: number, index: number) => {
	const dateString = new Date(value).toLocaleDateString('en-GB', {dateStyle: 'medium', timeZone: 'UTC'});
	if (index == 0) {
		return \`Minimum date: \${dateString}\`;
	} else {
		return \`Maximum date: \${dateString}\`;
	}
};
const label = ({value}: SliderSlotLabelContext) => new Date(value).toLocaleDateString('en-GB', {dateStyle: 'medium', timeZone: 'UTC'});

const AccessibilitySliderDemo = () => {
	const [sliderValues, setSliderValues] = useState([MIN, MAX]);

	return (
		<>
			<span id="labelID">Date range</span>
			<Slider
				min={MIN}
				max={MAX}
				stepSize={STEP_SIZE}
				values={sliderValues}
				ariaLabelledBy={ariaLabelledBy}
				ariaValueText={ariaValueText}
				label={label}
				onValuesChange={setSliderValues}
			/>
		</>
	);
};
export default AccessibilitySliderDemo;
`;export{e as default};
