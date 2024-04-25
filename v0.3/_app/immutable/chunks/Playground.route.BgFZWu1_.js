const o=`<script lang="ts">
	import {Slider} from '@agnos-ui/svelte-bootstrap/components/slider';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('slider');
<\/script>

{#key $props$}
	<Slider {...$props$} />
{/key}
`;export{o as default};
