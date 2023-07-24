<script lang="ts">
	import type {PaginationProps} from '@agnos-ui/svelte';
	import {createWidgetsDefaultConfig, Pagination} from '@agnos-ui/svelte';
	import CustomPages from './CustomPages.svelte';
	import ReuseDefault from './ReuseDefault.svelte';

	const widgetsConfig$ = createWidgetsDefaultConfig();

	let page = 3;

	function updatePaginationConfig(change: Partial<PaginationProps>) {
		$widgetsConfig$ = {...$widgetsConfig$, pagination: {...$widgetsConfig$.pagination, ...change}};
	}
</script>

<Pagination bind:page />
<div class="mt-3">
	Disabled:
	<div id="btn-config-disabled" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.disabled}
			on:click={() => updatePaginationConfig({disabled: true})}
		>
			true
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.pagination?.disabled}
			on:click={() => updatePaginationConfig({disabled: false})}
		>
			false
		</button>
	</div>
	<br />
	Collection size:
	<div id="btn-config-collectionSize" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.collectionSize === 40}
			on:click={() => updatePaginationConfig({collectionSize: 40})}
		>
			40
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.collectionSize === 30}
			on:click={() => updatePaginationConfig({collectionSize: 30})}
		>
			30
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.collectionSize === 20}
			on:click={() => updatePaginationConfig({collectionSize: 20})}
		>
			20
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.collectionSize === undefined}
			on:click={() => updatePaginationConfig({collectionSize: undefined})}
		>
			undefined
		</button>
	</div>
	<br />
	className:
	<div id="btn-config-className" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.className === 'justify-content-center'}
			on:click={() => updatePaginationConfig({className: 'justify-content-center'})}
		>
			justify-content-center
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.className === 'justify-content-end'}
			on:click={() => updatePaginationConfig({className: 'justify-content-end'})}
		>
			justify-content-end
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.pagination?.className}
			on:click={() => updatePaginationConfig({className: undefined})}
		>
			undefined
		</button>
	</div>
	<br />
	slotPages:
	<div id="btn-config-slotPages" class="btn-group mb-2">
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.slotPages === ReuseDefault}
			on:click={() => updatePaginationConfig({slotPages: ReuseDefault})}
		>
			reuse default
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={$widgetsConfig$.pagination?.slotPages === CustomPages}
			on:click={() => updatePaginationConfig({slotPages: CustomPages})}
		>
			custom pages
		</button>
		<button
			class="btn btn-sm btn-outline-secondary"
			class:active={!$widgetsConfig$.pagination?.slotPages}
			on:click={() => updatePaginationConfig({slotPages: undefined})}
		>
			undefined
		</button>
	</div>
</div>
