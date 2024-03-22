import type {AlertProps, AlertSlots} from '@agnos-ui/svelte-headless/components/alert';
import {SvelteComponent} from 'svelte';
export default class Alert extends SvelteComponent<Partial<AlertProps>, object, AlertSlots> {
	get widget(): any;
}
