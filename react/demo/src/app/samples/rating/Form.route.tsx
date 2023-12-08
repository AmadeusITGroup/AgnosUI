import {Rating} from '@agnos-ui/react/components/rating';
import {useState} from 'react';

interface CtrlState {
	value: number;
	valid: boolean;
	invalid: boolean;
	disabled: boolean;
}

const RatingDemo = () => {
	const [ctrl, setCtrl] = useState({value: 0, valid: false, invalid: true, disabled: false} as CtrlState);
	function updateCtrl(values: Partial<CtrlState>) {
		const value = values.value ?? ctrl.value;
		const enabled = !(values.disabled ?? ctrl.disabled);
		const isValid = value >= 1;
		const newCtrl = {...ctrl, ...values, value, valid: enabled && isValid, invalid: enabled && !isValid};
		setCtrl(newCtrl);
	}

	return (
		<>
			<label className="form-label" id="ratingLabel">
				Rating of your experience
			</label>
			<br />
			<Rating rating={ctrl.value} disabled={ctrl.disabled} onRatingChange={(value) => updateCtrl({value})} ariaLabelledBy="ratingLabel" />
			<div id="form-msg" className="form-text small">
				{ctrl.valid && <div className="text-success">Thanks!</div>}
				{ctrl.invalid && <div className="text-danger">Please rate us</div>}
			</div>
			<pre>
				Model:{' '}
				<span id="form-model">
					<b>{ctrl.value}</b>
				</span>
			</pre>
			<button
				id="form-btn-enable"
				className={`btn btn-sm btn-outline-${ctrl.disabled ? 'danger' : 'success'} me-2`}
				onClick={() => updateCtrl({disabled: !ctrl.disabled})}
			>
				{ctrl.disabled ? 'control disabled' : ' control enabled'}
			</button>
			&nbsp;
			<button id="form-btn-clear" className="btn btn-sm btn-outline-primary me-2" onClick={() => updateCtrl({value: 0})}>
				Clear
			</button>
		</>
	);
};
export default RatingDemo;
