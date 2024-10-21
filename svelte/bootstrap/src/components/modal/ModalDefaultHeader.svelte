<script lang="ts" generics="Data">
	import type {ModalContext} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: ModalContext<Data> = $props();
</script>

<h5 class="modal-title">
	<Slot content={widget.state.title} props={widget} />
</h5>
{#if widget.state.closeButton}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button class="btn-close" use:widget.directives.closeButtonDirective></button>
{/if}
