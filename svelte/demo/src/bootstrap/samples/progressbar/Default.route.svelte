<script lang="ts">
	import {Progressbar, type ProgressbarContext} from '@agnos-ui/svelte-bootstrap/components/progressbar';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';

	createWidgetsDefaultConfig().set({progressbar: {children}});
</script>

{#snippet children({state: {percentage}}: ProgressbarContext)}
	{percentage}%
{/snippet}

<div class="d-flex flex-column gap-2">
	<Progressbar value={20} />
	<Progressbar value={40} type="success" />
	<Progressbar value={60} type="info" />
	<Progressbar value={80} type="warning" />
	<Progressbar value={100} type="danger" />
</div>
