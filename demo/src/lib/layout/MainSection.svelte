<script lang="ts">
	import {createTOC} from '../../app';
	const tocDirective = createTOC((node) => Array.from(node.querySelectorAll('section')));
</script>

<div use:tocDirective><slot /></div>
