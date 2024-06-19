import type {ModalApi} from '@agnos-ui/react-bootstrap/components/modal';
import {Modal, modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/react-bootstrap/components/modal';
import {useRef, useState} from 'react';

const DefaultDemo = () => {
	const modal = useRef<ModalApi<any>>(null);
	const [message, setMessage] = useState('');
	const [fullscreen, setFullscreen] = useState(false);
	return (
		<>
			<Modal
				ref={modal}
				title="Save changes"
				footer={
					<>
						<button type="button" className="btn btn-outline-primary" onClick={() => modal.current!.close(true)}>
							Yes
						</button>
						<button type="button" className="btn btn-outline-danger" onClick={() => modal.current!.close(false)}>
							No
						</button>
					</>
				}
				fullscreen={fullscreen}
			>
				Do you want to save your changes?
			</Modal>
			<button
				type="button"
				className="btn btn-primary"
				onClick={async () => {
					setMessage('');
					const result = await modal.current!.open();
					if (result === modalCloseButtonClick) {
						setMessage('You clicked on the close button.');
					} else if (result === modalOutsideClick) {
						setMessage('You clicked outside the modal.');
					} else {
						setMessage(`You answered the question with "${result ? 'Yes' : 'No'}".`);
					}
				}}
			>
				Launch demo modal
			</button>
			<div className="form-check form-switch mt-3">
				<input
					className="form-check-input"
					type="checkbox"
					role="switch"
					id="fullscreen"
					checked={fullscreen}
					onChange={() => setFullscreen(!fullscreen)}
				/>
				<label className="form-check-label" htmlFor="fullscreen">
					Fullscreen
				</label>
			</div>
			<hr />
			<div data-testid="message">{message}</div>
		</>
	);
};
export default DefaultDemo;
