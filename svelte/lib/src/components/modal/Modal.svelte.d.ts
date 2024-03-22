import type {ModalProps, ModalSlots} from '@agnos-ui/svelte-headless/components/modal';
import {SvelteComponent} from 'svelte';
export default class Modal<T> extends SvelteComponent<Partial<ModalProps<T>>, object, ModalSlots<T>> {
	get widget(): any;
}
