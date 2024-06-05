import type {ToastApi} from '@agnos-ui/react-bootstrap/components/toast';
import {Toast} from '@agnos-ui/react-bootstrap/components/toast';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {useRef} from 'react';
import {ToastAction} from './ToastAction';

export default () => {
	const refToast = useRef<ToastApi>(null);

	function reset() {
		refToast.current?.open();
	}

	return (
		<>
			<p> To put the action in the toast simply create custom contents.</p>
			<p>
				<strong>Note:</strong> When header is not present default display is <code>flex</code>
			</p>
			<div className="col-auto col-md-6">
				<WidgetsDefaultConfig
					toast={{
						dismissible: true,
						className: 'text-bg-success',
						autoHide: false,
						structure: ToastAction,
					}}
				>
					<Toast ref={refToast}>This is a toast with action</Toast>
				</WidgetsDefaultConfig>
			</div>
			<button className="btn btn-primary mt-2" onClick={reset}>
				Reset
			</button>
		</>
	);
};
