<script lang="ts">
	import type {ModalContext} from '@agnos-ui/svelte-bootstrap/components/modal';

	type ModalContent = {name: string};
	let {state, widget}: ModalContext<ModalContent> = $props();
</script>

<p>Hello, {state.contentData.name}!</p>
<button type="button" class="btn btn-outline-primary" onclick={() => widget.api.close()}>Close</button>
