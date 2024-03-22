import type {AccordionProps, AccordionSlots} from '@agnos-ui/svelte-headless/components/accordion';
import {SvelteComponent} from 'svelte';
export default class Accordion extends SvelteComponent<Partial<AccordionProps>, object, {default: Record<string, never>} & AccordionSlots> {
	get widget(): any;
}
