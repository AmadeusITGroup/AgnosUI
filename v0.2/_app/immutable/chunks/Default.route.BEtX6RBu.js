const t=`import type {ToastApi} from '@agnos-ui/react/components/toast';
import {Toast} from '@agnos-ui/react/components/toast';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
import {useRef} from 'react';

const DefaultToastDemo = () => {
	const refToast = useRef<ToastApi>(null);
	function reset() {
		refToast.current!.open();
	}

	return (
		<>
			<p className="mb-2">
				Color schemes are based on the Bootstrap classes, in order to have out-of-the-box text accessibility use the helper classes{' '}
				<code>.text-bg-*</code>, e.g. <code>.text.bg-primary</code>
			</p>
			<Toast ref={refToast} className="text-bg-primary" slotHeader="I am header" autohide={false}>
				Simple primary toast
			</Toast>

			<button className="btn btn-primary my-2" onClick={reset}>
				Reset
			</button>

			<h3>Variations</h3>
			<div className="row gy-2 gx-3">
				<WidgetsDefaultConfig toast={{autohide: false, dismissible: false}}>
					<div className="col-auto">
						<Toast className="text-bg-success">This is a success toast</Toast>
					</div>
					<div className="col-auto">
						<Toast className="text-bg-danger">This is an error toast</Toast>
					</div>
					<div className="col-auto">
						<Toast className="text-bg-info">This is an info toast</Toast>
					</div>
					<div className="col-auto">
						<Toast className="text-bg-warning">This is a warning toast</Toast>
					</div>
				</WidgetsDefaultConfig>
			</div>
		</>
	);
};
export default DefaultToastDemo;
`;export{t as default};
