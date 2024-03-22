import type {RatingProps, RatingSlots} from '@agnos-ui/svelte-headless/components/rating';
import {SvelteComponent} from 'svelte';
export default class Rating extends SvelteComponent<Partial<RatingProps>, object, RatingSlots> {
	get widget(): any;
}
