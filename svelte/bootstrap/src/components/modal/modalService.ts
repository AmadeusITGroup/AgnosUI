import type {ModalProps} from '@agnos-ui/svelte-headless/components/modal';
import Modal from './Modal.svelte';

export async function openModal<Data>(options: Partial<ModalProps<Data>>, {context}: {context?: Map<any, any>} = {}) {
	const target = document.createElement('div');
	const component = new Modal({
		target,
		props: options,
		context,
	});
	try {
		return await component.api.open();
	} finally {
		component.$destroy();
	}
}
