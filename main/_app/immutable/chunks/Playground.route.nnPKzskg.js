const n=`<script lang="ts">
	import {Slider} from '@agnos-ui/svelte/components/slider';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('slider');
<\/script>

{#key $props$}
	<Slider {...$props$} />
{/key}
`;export{n as default};
