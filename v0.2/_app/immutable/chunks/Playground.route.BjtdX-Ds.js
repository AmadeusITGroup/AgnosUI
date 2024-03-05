const o=`<script lang="ts">
	import {Modal} from '@agnos-ui/svelte/components/modal';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('modal');
<\/script>

{#key $props$}
	<Modal {...$props$} />
{/key}
`;export{o as default};
