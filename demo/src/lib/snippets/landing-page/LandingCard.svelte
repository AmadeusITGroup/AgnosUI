<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import type {Snippet} from 'svelte';

	interface Props {
		title: string;
		svg?: string;
		children: Snippet;
	}

	let {title, svg = '', children}: Props = $props();
</script>

<div class="col-12 md:col-6 lg:col-4 mb-4 w-full md:w-1/2 lg:w-1/3">
	<div class="card">
		<div class="row g-0">
			{#if svg}
				<div class="col-4 p-2">
					<Svg {svg} className="landing-card-svg img-fluid rounded-start" />
				</div>
			{/if}
			<div class="col">
				<div class="card-body">
					<h5 class="card-title">{title}</h5>
					<p class="card-text">
						{@render children()}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	:global(.landing-card-svg) {
		width: 140px;
		height: 140px;
	}

	h5 {
		font-weight: bold;
	}

	.card {
		height: 100%;
		border: none;
	}
</style>
