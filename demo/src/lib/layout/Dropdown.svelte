<script lang="ts">
	import {writable} from '@amadeus-it-group/tansu';
	import {createHasFocus} from '@agnos-ui/svelte-bootstrap/services/focustrack';
	import type {DropdownItem} from './dropdown';

	const open$ = writable(false);

	// eslint-disable-next-line no-undef
	type Item = $$Generic<DropdownItem>;

	const {hasFocus$, directive} = createHasFocus();
	$: $open$ = $hasFocus$;

	function giveFocus(el: HTMLAnchorElement | HTMLButtonElement, index: number) {
		if (index === 0) {
			el.focus();
		}
	}

	const toggle = () => open$.update((val) => !val);

	export let ariaLabel: string;
	export let btnClass: string = '';
	export let items: Item[];
	export let placement: 'start' | 'end' = 'start';
	export let dropdownClass: string = '';
</script>

<div class="dropdown {dropdownClass}">
	<button
		class="btn dropdown-toggle align-items-center d-flex {btnClass}"
		aria-label={ariaLabel}
		on:mousedown|preventDefault
		on:click={toggle}
		type="button"
		aria-expanded={$open$}
	>
		<slot name="button" />
	</button>
	{#if $open$}
		<div use:directive class="dropdown-menu dropdown-menu-{placement} position-absolute" class:show={$open$} data-bs-popper="absolute">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			{#each items as item, index (item.id)}
				<svelte:element
					this={item.tag}
					use:giveFocus={index}
					class="dropdown-item d-flex align-items-center"
					href={item.tag === 'a' ? item.href : undefined}
					class:active={item.isSelected}
					aria-current={item.isSelected ? 'page' : false}
					on:click={() => {
						if (item.tag === 'button') {
							item.onclick();
						}
						toggle();
					}}
				>
					<slot name="item" {item} {index} />
				</svelte:element>
			{/each}
		</div>
	{/if}
</div>

<style lang="css">
	.nav-link {
		transition: none;
	}
</style>
