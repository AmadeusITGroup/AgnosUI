import type {SliderProps, SliderSlots} from '@agnos-ui/svelte-headless/components/slider';
import {SvelteComponent} from 'svelte';
export default class Slider extends SvelteComponent<Partial<SliderProps>, object, SliderSlots> {
	get widget(): any;
}
