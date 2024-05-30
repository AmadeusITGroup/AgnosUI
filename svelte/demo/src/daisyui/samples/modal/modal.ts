import type {ModalProps} from '@agnos-ui/svelte-headless/components/modal';
import Modal from './Modal.svelte';
import {mount, unmount, type Snippet} from 'svelte';

export type DaisyModalProps = Partial<
	Pick<ModalProps, 'closeOnOutsideClick' | 'ariaCloseButtonLabel' | 'closeButton' | 'visible' | 'onVisibleChange'>
> & {children: Snippet};

export async function openModal(options: DaisyModalProps) {
	const target = document.createElement('div');
	document.body.append(target);
	const component = mount(Modal, {
		target,
		props: options,
	});
	try {
		return await component.api.open();
	} finally {
		target.remove();
		unmount(component);
	}
}
