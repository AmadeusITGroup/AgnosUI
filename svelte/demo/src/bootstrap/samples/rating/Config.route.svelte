<script lang="ts">
	import type {RatingProps} from '@agnos-ui/svelte/components/rating';
	import {Rating} from '@agnos-ui/svelte/components/rating';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte/config';
	import CustomStar from './CustomStar.svelte';

	const widgetsConfig$ = createWidgetsDefaultConfig();

	let rating = 3;

	function updateRatingConfig(change: Partial<RatingProps>) {
		$widgetsConfig$ = {...$widgetsConfig$, rating: {...$widgetsConfig$.rating, ...change}};
	}
</script>

<Rating bind:rating />
<div class="mt-3">
	Disabled:
	<div id="btn-config-disabled" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.disabled}
			on:click={() => updateRatingConfig({disabled: true})}
		>
			true
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.rating?.disabled}
			on:click={() => updateRatingConfig({disabled: false})}
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
			on:click={() => updateRatingConfig({maxRating: 40})}
		>
			40
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.maxRating === 30}
			on:click={() => updateRatingConfig({maxRating: 30})}
		>
			30
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.maxRating === 20}
			on:click={() => updateRatingConfig({maxRating: 20})}
		>
			20
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.maxRating === undefined}
			on:click={() => updateRatingConfig({maxRating: undefined})}
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
			on:click={() => updateRatingConfig({className: 'fs-1'})}
		>
			fs-1
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.className === 'fs-2'}
			on:click={() => updateRatingConfig({className: 'fs-2'})}
		>
			fs-2
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.rating?.className}
			on:click={() => updateRatingConfig({className: undefined})}
		>
			undefined
		</button>
	</div>
	<br />
	slotStar:
	<div id="btn-config-slotStar" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.slotStar === CustomStar}
			on:click={() => updateRatingConfig({slotStar: CustomStar})}
		>
			custom
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.rating?.slotStar === '*'}
			on:click={() => updateRatingConfig({slotStar: '*'})}
		>
			'*'
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.rating?.slotStar}
			on:click={() => updateRatingConfig({slotStar: undefined})}
		>
			undefined
		</button>
	</div>
</div>
