import {mount, unmount} from 'svelte';
import type {ModalProps} from './modal';
import Modal from './Modal.svelte';

export async function openModal<Data>(options: Partial<ModalProps<Data>>, {context}: {context?: Map<any, any>} = {}) {
	const target = document.createElement('div');
	const component = mount(Modal<Data>, {
		target,
		props: options,
		context,
	});
	try {
		return await component.api.open();
	} finally {
		unmount(component);
	}
}
