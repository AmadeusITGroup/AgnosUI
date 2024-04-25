const t=`<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';
	import CoffeeSlider from './CoffeeSlider.svelte';

	let sliderControl = [50];

	import './custom.scss';
<\/script>

<h2>Fully custom slider</h2>

<Slider
	min={0}
	max={100}
	stepSize={1}
	bind:values={sliderControl}
	vertical
	className="custom-slider"
	slotStructure={CoffeeSlider}
	slotLabel={null}
	slotHandle={null}
/>
`;export{t as default};
