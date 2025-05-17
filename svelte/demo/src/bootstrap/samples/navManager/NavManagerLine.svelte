<script lang="ts">
	import {createNavManager, type NavManagerItemConfig} from '@agnos-ui/svelte-bootstrap/services/navManager';

	const {directive, focusLeft, focusRight, focusFirst, focusLast, focusFirstLeft, focusFirstRight} = createNavManager();

	const navManagerConfig: NavManagerItemConfig = {
		keys: {
			ArrowLeft: focusLeft,
			ArrowRight: focusRight,
			Home: focusFirst,
			End: focusLast,
			'Meta+ArrowLeft': focusFirstLeft,
			'Meta+ArrowRight': focusFirstRight,
		},
	};

	let {text = ''} = $props();
</script>

<div class="d-flex demo-navmanager-line">
	<input
		{@attach (el) => directive(el, navManagerConfig)?.destroy}
		type="text"
		aria-label="navigable-input-1"
		value={text}
		class="form-control me-1"
	/>
	<span {@attach (el) => directive(el, navManagerConfig)?.destroy} tabindex="-1" class="form-control w-auto me-1">{text}</span>
	<input
		{@attach (el) => directive(el, navManagerConfig)?.destroy}
		tabindex="-1"
		type="checkbox"
		aria-label="navigable-input-2"
		class="form-check-input align-self-center me-1"
	/>
	<input
		{@attach (el) => directive(el, navManagerConfig)?.destroy}
		tabindex="-1"
		type="text"
		aria-label="navigable-input-3"
		value={text}
		disabled
		class="form-control me-1"
	/>
	<input
		{@attach (el) => directive(el, navManagerConfig)?.destroy}
		tabindex="-1"
		type="text"
		aria-label="navigable-input-4"
		value={text}
		class="form-control me-1"
	/>
</div>
