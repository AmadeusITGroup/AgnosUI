import type {SelectProps, SelectSlots} from '@agnos-ui/svelte-headless/components/select';
import {SvelteComponent} from 'svelte';
export default class Select extends SvelteComponent<Partial<SelectProps>, object, SelectSlots> {
	get widget(): any;
}
