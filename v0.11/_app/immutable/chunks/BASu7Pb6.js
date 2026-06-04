const t=`import type {ToastApi, ToastContext} from '@agnos-ui/react-bootstrap/components/toast';
import {Toast} from '@agnos-ui/react-bootstrap/components/toast';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {Slot} from '@agnos-ui/react-bootstrap/slot';
import BiArrowCounterClockwise from 'bootstrap-icons/icons/arrow-counterclockwise.svg?react';
import BiCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?react';
import {useRef} from 'react';

const ActionToastDemo = () => {
	const refToast = useRef<ToastApi>(null);

	async function reset() {
		await refToast.current?.open();
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

export default ActionToastDemo;

const ToastAction = (slotContext: ToastContext) => (
	<div className="d-flex w-100">
		<div className="d-flex align-items-center flex-grow-1 toast-body">
			<span className="d-flex me-2">
				<BiCheckCircleFill />
			</span>
			<Slot slotContent={slotContext.state.children} props={slotContext} />
			<button type="button" className="btn btn-sm ms-auto text-bg-success" onClick={() => window.alert('Undo')}>
				<span className="me-2">
					<BiArrowCounterClockwise />
				</span>
				Undo
			</button>
		</div>
		{slotContext.state.dismissible ? (
			<button
				type="button"
				className="btn-close btn-close-white me-2 m-auto"
				onClick={slotContext.api.close}
				aria-label={slotContext.state.ariaCloseButtonLabel}
			></button>
		) : null}
	</div>
);
`;export{t as default};
