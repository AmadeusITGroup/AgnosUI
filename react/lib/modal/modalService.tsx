import type {ModalApi, ModalProps} from '@agnos-ui/react-headless/modal';
import ReactDOM from 'react-dom/client';
import {Modal} from './Modal';

export async function openModal<Data>(options: Partial<ModalProps<Data>>) {
	const root = ReactDOM.createRoot(document.createElement('div'));
	try {
		const api = await new Promise<ModalApi<Data> | null>((resolve) => {
			root.render(<Modal {...options} ref={resolve} />);
		});
		return await api!.open();
	} finally {
		root.unmount();
	}
}
