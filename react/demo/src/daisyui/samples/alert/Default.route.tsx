import type {AlertApi} from '@agnos-ui/react-headless/components/alert';
import {useRef} from 'react';
import {Alert} from './Alert';

const DefaultAlertDemoDaisyUI = () => {
	const refAlert = useRef<AlertApi>(null);
	function reset() {
		refAlert.current!.open();
	}
	return (
		<>
			<button className="btn btn-primary" onClick={reset}>
				Reset Alert
			</button>
			<div className="flex flex-col gap-3 mt-3">
				<Alert className="alert-success" dismissible={true} ref={refAlert}>
					<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>Alert is a success!</span>
				</Alert>
				<Alert className="alert-error" dismissible={false}>
					<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>Alerts is an error!</span>
				</Alert>
			</div>
		</>
	);
};

export default DefaultAlertDemoDaisyUI;
