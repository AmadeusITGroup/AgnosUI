import {defaultToasterProps, ToastPositions, useToaster} from '@agnos-ui/react-bootstrap/services/toaster';
import {ToasterProvider} from '@agnos-ui/react-bootstrap/services/toaster';
import {useEffect, useState} from 'react';

const ToasterActions = () => {
	const toaster = useToaster();
	let [index, setIndex] = useState(0);
	return (
		<>
			<button
				className="btn btn-primary ms-2"
				onClick={() => {
					toaster.addToast({children: `Simple toast ${index}`, header: 'I am header'});
					setIndex(++index);
				}}
			>
				Show toast
			</button>
			<button
				className="btn btn-primary ms-2"
				onClick={() => {
					toaster.addToast({children: `Simple toast ${index}`, className: 'text-bg-danger', dismissible: true, autoHide: true, delay: 10000});
					setIndex(++index);
				}}
			>
				Show error toast
			</button>
		</>
	);
};

const ToasterDemo = () => {
	const positions = Object.entries(ToastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
	const [options, setOptions] = useState({...defaultToasterProps, pauseOnHover: false, closeAll: false, limit: 10});
	useEffect(() => {
		if (options.duration === 0) {
			setOptions((prevOptions) => ({...prevOptions, dismissible: true}));
		}
	}, [options.duration]);

	return (
		<ToasterProvider options={options}>
			<p className="mb-2">Similar to dynamic stacking, we expose a service to ease the usage of Toasts</p>
			<div className="d-flex flex-column justify-content-between gap-2">
				<div className="d-flex flex-column flex-sm-row form-group align-items-center gap-3">
					<div className="d-flex w-100 align-items-center justify-content-between">
						<label className="me-3" htmlFor="positionSelect">
							Position:{' '}
						</label>
						<select
							id="positionSelect"
							className="form-select w-auto"
							value={options.position}
							onChange={(e) => setOptions({...options, position: e.target.value as ToastPositions})}
						>
							{positions.map(({value, label}) => (
								<option key={value} value={value}>
									{' '}
									{label}
								</option>
							))}
						</select>
					</div>
					<div className="d-flex w-100 align-items-center justify-content-between">
						<label className="me-3" htmlFor="dismissible">
							Dismissible:{' '}
						</label>
						<input
							type="checkbox"
							className="form-check-input"
							id="dismissible"
							disabled={options.duration === 0}
							checked={options.dismissible}
							onChange={(e) => setOptions({...options, dismissible: e.target.checked})}
						/>
					</div>
					<div className="d-flex w-100 align-items-center justify-content-between">
						<label className="me-3" htmlFor="duration">
							Duration:{' '}
						</label>
						<input
							id="duration"
							type="number"
							className="form-control w-50"
							value={options.duration}
							onChange={(e) => setOptions({...options, duration: Number(e.target.value)})}
						/>
					</div>
				</div>
				<div className="d-flex flex-column flex-sm-row form-group align-items-center gap-3">
					<div className="d-flex w-100 align-items-center justify-content-between">
						<label className="me-3" htmlFor="limit">
							Max # of toasts:{' '}
						</label>
						<input
							id="limit"
							type="number"
							className="form-control w-50"
							value={options.limit}
							onChange={(e) => setOptions({...options, limit: Number(e.target.value)})}
						/>
					</div>
					<div className="d-flex w-100 align-items-center justify-content-between">
						<label className="me-3" htmlFor="pause">
							Pause timer on hover:{' '}
						</label>
						<input
							type="checkbox"
							className="form-check-input"
							id="pause"
							checked={options.pauseOnHover}
							onChange={(e) => setOptions({...options, pauseOnHover: e.target.checked})}
						/>
					</div>
					<div className="d-flex w-100 align-items-center justify-content-between">
						<label className="me-3" htmlFor="closeAll">
							Close all toasts button
						</label>
						<input
							type="checkbox"
							className="form-check-input"
							id="closeAll"
							checked={options.closeAll}
							onChange={(e) => setOptions({...options, closeAll: e.target.checked})}
						/>
					</div>
				</div>
				<div className="d-flex form-group align-items-center gap-3 py-3">
					<ToasterActions />
				</div>
			</div>
			<div className="d-flex position-relative mt-2 w-100" style={{height: '500px', backgroundColor: 'gray'}}></div>
		</ToasterProvider>
	);
};

export default ToasterDemo;
