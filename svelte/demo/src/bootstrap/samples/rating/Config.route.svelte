<script lang="ts">
	import type {RatingProps, StarContext} from '@agnos-ui/svelte-bootstrap/components/rating';
	import {Rating} from '@agnos-ui/svelte-bootstrap/components/rating';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';

	const widgetsConfig$ = createWidgetsDefaultConfig();

	let rating = $state(3);

	function updateRatingConfig(change: Partial<RatingProps>) {
		$widgetsConfig$ = {...$widgetsConfig$, rating: {...$widgetsConfig$.rating, ...change}};
	}
</script>

{#snippet customStar({fill}: StarContext)}
	<span class="star" class:full={fill === 100}>
		<span class="half" style:width={fill + '%'}>&hearts;</span>&hearts;
	</span>
{/snippet}

<Rating bind:rating />
<div class="mt-3">
	Disabled:
	<div id="btn-config-disabled" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.disabled}
			onclick={() => updateRatingConfig({disabled: true})}
		>
			true
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.rating?.disabled}
			onclick={() => updateRatingConfig({disabled: false})}
		>
			false
		</button>
	</div>
	<br />
	maxRating:
	<div id="btn-config-maxRating" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.maxRating === 40}
			onclick={() => updateRatingConfig({maxRating: 40})}
		>
			40
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.maxRating === 30}
			onclick={() => updateRatingConfig({maxRating: 30})}
		>
			30
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.maxRating === 20}
			onclick={() => updateRatingConfig({maxRating: 20})}
		>
			20
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.maxRating === undefined}
			onclick={() => updateRatingConfig({maxRating: undefined})}
		>
			undefined
		</button>
	</div>
	<br />
	className:
	<div id="btn-config-className" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.className === 'fs-1'}
			onclick={() => updateRatingConfig({className: 'fs-1'})}
		>
			fs-1
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.className === 'fs-2'}
			onclick={() => updateRatingConfig({className: 'fs-2'})}
		>
			fs-2
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.rating?.className}
			onclick={() => updateRatingConfig({className: undefined})}
		>
			undefined
		</button>
	</div>
	<br />
	slotStar:
	<div id="btn-config-slotStar" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.star === customStar}
			onclick={() => updateRatingConfig({star: customStar})}
		>
			custom
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.star === '*'}
			onclick={() => updateRatingConfig({star: '*'})}
		>
			'*'
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.rating?.star}
			onclick={() => updateRatingConfig({star: undefined})}
		>
			undefined
		</button>
	</div>
</div>
