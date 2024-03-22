import type {PaginationProps, PaginationSlots} from '@agnos-ui/svelte-headless/components/pagination';
import {SvelteComponent} from 'svelte';
export default class Pagination extends SvelteComponent<Partial<PaginationProps>, object, PaginationSlots> {
	get widget(): any;
}
