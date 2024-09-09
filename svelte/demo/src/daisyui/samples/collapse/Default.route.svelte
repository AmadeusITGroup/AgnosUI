<script lang="ts">
	import Collapse from './Collapse.svelte';
</script>

<Collapse onHidden={() => console.log('Hidden')}>
	<p>tabindex necessary is already put</p>
</Collapse>
