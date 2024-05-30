import type {ToastProps} from '@agnos-ui/react-bootstrap/components/toast';
import {Toast} from '@agnos-ui/react-bootstrap/components/toast';
import {useState} from 'react';
import {ToastPositions} from '@agnos-ui/common/samples/toast/toast-positions.enum';

type ReactToastProps = Partial<ToastProps> & {id: number};

let counter = 0;

const DynamicToastDemo = () => {
	const [position, setPosition] = useState(String(ToastPositions.topLeft));
	const [toastMap, setToastMap] = useState(new Map(Object.values(ToastPositions).map((entry: string) => [entry, [] as ReactToastProps[]])));

	function pushToast() {
		toastMap.get(position)!.push({autoHide: true, delay: 3000, className: position, id: counter++});
		setToastMap(new Map(toastMap));
	}

	function removeToast(toast: ReactToastProps) {
		toastMap.set(
			toast.className!,
			toastMap.get(toast.className!)!.filter((t: Partial<ToastProps>) => t !== toast),
		);
	}

	return (
		<>
			<p className="mb-2">
				To position toast wherever you want you should have a <code>toast-container</code> with a custom position defined by CSS classes.
			</p>
			<p className="mb-2">
				To <strong>stack</strong> toasts vertically, put them in the same container.{' '}
			</p>
			<div className="d-flex justify-content-between">
				<div className="d-flex form-group align-items-center">
					<label className="me-3" htmlFor="positionSelect">
						Position:{' '}
					</label>
					<select id="positionSelect" className="form-select w-auto" value={position} onChange={(e) => setPosition(e.target.value)}>
						{Object.entries(ToastPositions)
							.map((entry) => ({
								value: entry[1],
								label: entry[0],
							}))
							.map((position) => (
								<option key={position.value} value={position.value}>
									{position.label}
								</option>
							))}
					</select>
					<button className="btn btn-primary addToast ms-2" onClick={() => pushToast()}>
						Show toast
					</button>
				</div>
			</div>
			<div className="d-flex position-relative mt-2 w-100" aria-live="polite" aria-atomic="true" style={{height: '500px', backgroundColor: 'gray'}}>
				{[...toastMap].map(([position, toastArray]) => (
					<div className={`toast-container p-3 ${position}`} key={position}>
						{toastArray.map((toast) => (
							<Toast key={`${toast.id}`} onHidden={() => removeToast(toast)} slotHeader={`I am header`}>
								Simple toast
							</Toast>
						))}
					</div>
				))}
			</div>
		</>
	);
};
export default DynamicToastDemo;
