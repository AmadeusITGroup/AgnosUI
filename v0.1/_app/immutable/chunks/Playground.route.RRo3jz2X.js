const n=`<script lang="ts">
	import {Rating} from '@agnos-ui/svelte/components/rating';
	import {hashChangeHook} from '../../utils';

	const props$ = hashChangeHook('rating');
<\/script>

{#key $props$}
	<Rating {...$props$} />
{/key}
`;export{n as default};
