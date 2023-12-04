const t=`<script lang="ts">
	import {Select} from '@agnos-ui/svelte';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('select');
<\/script>

{#key $props$}
	<Select {...$props$} />
{/key}
`;export{t as default};
