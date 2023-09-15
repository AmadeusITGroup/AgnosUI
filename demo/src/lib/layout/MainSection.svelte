<script lang="ts">
	import {createTOC} from '../../app';
	const tocDirective = createTOC((node) => [...node.querySelectorAll('section')] as HTMLElement[]);
</script>

<div use:tocDirective><slot /></div>
