import type {ModalApi} from '@agnos-ui/react/modal/Modal';
import {Modal, modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/react/modal/Modal';
import {useRef, useState} from 'react';

const DefaultDemo = () => {
	const modal = useRef<ModalApi<void>>(null);
	const [message, setMessage] = useState('');
	return (
		<>
			<Modal
				ref={modal}
				slotTitle="Save changes"
				slotFooter={
					<>
						<button type="button" className="btn btn-outline-primary" onClick={() => modal.current!.close(true)}>
							Yes
						</button>
						<button type="button" className="btn btn-outline-danger" onClick={() => modal.current!.close(false)}>
							No
						</button>
					</>
				}
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
			<div className="mt-3" data-testid="message">
				{message}
			</div>
		</>
	);
};
export default DefaultDemo;
