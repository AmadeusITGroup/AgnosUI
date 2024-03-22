import type {ProgressbarProps, ProgressbarSlots} from '@agnos-ui/svelte-headless/components/progressbar';
import {SvelteComponent} from 'svelte';
export default class Progressbar extends SvelteComponent<Partial<ProgressbarProps>, object, ProgressbarSlots> {
	get widget(): any;
}
