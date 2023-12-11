import type {ToastProps} from '@agnos-ui/react/components/toast';
import {Toast} from '@agnos-ui/react/components/toast';
import {useReducer, useState} from 'react';

export enum ToastPositions {
	topLeft = 'top-0 start-0',
	topCenter = 'top-0 start-50 translate-middle-x',
	topRight = 'top-0 end-0',
	middleLeft = 'top-50 start-0 translate-middle-y',
	middleCenter = 'top-50 start-50 translate-middle',
	middleRight = 'top-50 end-0 translate-middle-y',
	bottomLeft = 'bottom-0 start-0',
	bottomCenter = 'bottom-0 start-50 translate-middle-x',
	bottomRight = 'bottom-0 end-0',
}

let counter = 0;
function toastsReducer(toasts: any, action: any) {
	switch (action.type) {
		case 'add': {
			return [...toasts, {...action.payload, id: counter++}];
		}
		case 'remove': {
			return toasts.filter((al: Partial<ToastProps>) => al !== action.toast);
		}
	}
}

const DynamicToastDemo = () => {
	const [toasts, dispatch] = useReducer(toastsReducer, []);
	const [position, setPosition] = useState(String(ToastPositions.topLeft));

	return (
		<>
			<div className="d-flex justify-content-between">
				<div className="d-flex form-group">
					<label className="align-self-center me-3" htmlFor="positionSelect">
						Toast position:{' '}
					</label>
					<select id="positionSelect" className="form-select w-auto" value={position} onChange={(e) => setPosition(e.target.value)}>
						{Object.entries(ToastPositions)
							.map((entry) => {
								return {
									value: entry[1],
									label: entry[0],
								};
							})
							.map((position) => (
								<option key={position.value} value={position.value}>
									{position.label}
								</option>
							))}
					</select>
				</div>
				<button
					className="btn btn-primary addToast"
					onClick={() => dispatch({type: 'add', payload: {autohide: false, delay: 1000, className: position}})}
				>
					Show toast
				</button>
			</div>
			<div className="toastCount mb-3">Toasts in the service: {toasts.length}</div>
			<div
				className="d-flex position-relative"
				aria-live="polite"
				aria-atomic="true"
				style={{height: '500px', width: '600px', backgroundColor: 'gray'}}
			>
				{toasts.map((toast: Partial<ToastProps> & {id: number}) => (
					<div className={`toast-container p-3 ${toast.className}`} key={`${toast.id}`}>
						<Toast key={`${toast.id}`} onHidden={() => dispatch!({type: 'remove', toast})} slotHeader={`I am header`}>
							Simple toast
						</Toast>
					</div>
				))}
			</div>
		</>
	);
};
export default DynamicToastDemo;
