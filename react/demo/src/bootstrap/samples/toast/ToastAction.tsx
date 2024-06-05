import type {ToastContext} from '@agnos-ui/react-bootstrap/components/toast';
import {Slot} from '@agnos-ui/react-bootstrap/slot';
import BiArrowCounterClockwise from 'bootstrap-icons/icons/arrow-counterclockwise.svg?react';
import BiCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg?react';

export const ToastAction = ({widget, state}: ToastContext) => (
	<div className="d-flex w-100">
		<div className="d-flex align-items-center flex-grow-1 toast-body">
			<span className="d-flex me-2">
				<BiCheckCircleFill />
			</span>
			<Slot slotContent={state.children} props={{widget, state}} />
			<button type="button" className="btn btn-sm ms-auto text-bg-success" onClick={() => window.alert('Undo')}>
				<span className="me-2">
					<BiArrowCounterClockwise />
				</span>
				Undo
			</button>
		</div>
		{state.dismissible && (
			<button
				type="button"
				className="btn-close btn-close-white me-2 m-auto"
				onClick={widget.api.close}
				aria-label={state.ariaCloseButtonLabel}
			></button>
		)}
	</div>
);
