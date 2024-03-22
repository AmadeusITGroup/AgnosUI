import type {ToastProps, ToastSlots} from '@agnos-ui/svelte-headless/components/toast';
import {SvelteComponent} from 'svelte';
export default class Toast extends SvelteComponent<Partial<ToastProps>, object, ToastSlots> {
	get widget(): any;
}
