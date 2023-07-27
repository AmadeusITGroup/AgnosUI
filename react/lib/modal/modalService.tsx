import ReactDOM from 'react-dom/client';
import type {ModalWidget, ModalProps} from './Modal';
import {Modal} from './Modal';

export const openModal = async (options: Partial<ModalProps>) => {
	const root = ReactDOM.createRoot(document.createElement('div'));
	try {
		const api = await new Promise<ModalWidget['api']>((resolve) => {
			root.render(<Modal {...options} ref={resolve} />);
		});
		return await api.open();
	} finally {
		root.unmount();
	}
};
