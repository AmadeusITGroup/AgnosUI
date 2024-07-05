const t=`import type {ModalContext} from '@agnos-ui/react-bootstrap/components/modal';
import {openModal} from '@agnos-ui/react-bootstrap/components/modal';

const ModalBody = ({widget, state}: ModalContext<void>) => (
	<>
		This is a modal
		<br />
		<br />
		<button
			className="btn btn-outline-primary m-1"
			onClick={() => openModal({title: 'Other modal', children: ModalBody, container: state.modalElement})}
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
	<button className="btn btn-primary" onClick={() => openModal({title: 'First modal', className: 'modal-sm', children: ModalBody})}>
		Launch demo modal
	</button>
);
export default StackDemo;
`;export{t as default};
