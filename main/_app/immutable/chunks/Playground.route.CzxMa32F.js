const o=`<script lang="ts">
	import {Toast} from '@agnos-ui/svelte/components/toast';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('toast');
<\/script>

{#key $props$}
	<Toast {...$props$} />
{/key}
`;export{o as default};
