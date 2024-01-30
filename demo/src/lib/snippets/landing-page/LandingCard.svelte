<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';

	export let title: string;
	export let svg = '';
</script>

<div class="col-12 col-md-6 col-lg-4 mb-3">
	<div class="card bg-light">
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
						<slot />
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../../../common/variables';

	:global(.landing-card-svg) {
		width: 140px;
		height: 140px;
	}

	h5 {
		color: $gradient-text-bottom;
		font-weight: bold;
	}

	.card {
		height: 100%;
		border: none;
	}
</style>
