const n=`<script lang="ts">
	import {Pagination} from '@agnos-ui/svelte/components/pagination';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('pagination');
<\/script>

{#key $props$}
	<Pagination {...$props$} />
{/key}
`;export{n as default};
