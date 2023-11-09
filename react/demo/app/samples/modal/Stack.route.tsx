import type {ModalContext} from '@agnos-ui/react';
import {openModal} from '@agnos-ui/react';

const ModalBody = ({widget, state}: ModalContext<void>) => (
	<>
		This is a modal
		<br />
		<br />
		<button
			className="btn btn-outline-primary m-1"
			onClick={() => openModal({slotTitle: 'Other modal', slotDefault: ModalBody, container: state.modalElement})}
		>
			Launch other modal
		</button>
		<br />
		<button className="btn btn-outline-secondary m-1" onClick={() => widget.api.patch({backdrop: true})}>
			Enable backdrop
		</button>
		<button className="btn btn-outline-secondary m-1" onClick={() => widget.api.patch({backdrop: false})}>
			Disable backdrop
		</button>
		<br />
		<button className="btn btn-outline-secondary m-1" onClick={() => widget.api.close()}>
			Close
		</button>
	</>
);

const StackDemo = () => (
	<button className="btn btn-primary" onClick={() => openModal({slotTitle: 'First modal', className: 'modal-sm', slotDefault: ModalBody})}>
		Launch demo modal
	</button>
);
export default StackDemo;
