<script lang="ts">
	import {createHasFocus} from '@agnos-ui/svelte-bootstrap/services/focustrack';
	import type {DropdownItem} from './dropdown';
	import {fromStore} from 'svelte/store';
	import type {Snippet} from 'svelte';

	let open = $state(false);

	type Item = $$Generic<DropdownItem>;

	const {hasFocus$, directive} = createHasFocus();
	const focus = fromStore(hasFocus$);
	$effect(() => {
		open = focus.current;
	});

	function giveFocus(el: HTMLAnchorElement | HTMLButtonElement, index: number) {
		if (index === 0) {
			el.focus();
		}
	}

	const toggle = () => (open = !open);

	interface Props {
		ariaLabel: string;
		btnClass: string;
		items: Item[];
		placement?: 'start' | 'end';
		dropdownClass?: string;
		buttonSnip: Snippet;
		itemSnip: Snippet<[Item, number]>;
	}

	let {ariaLabel, btnClass = '', items, placement = 'start', dropdownClass = '', buttonSnip, itemSnip}: Props = $props();

	const onpointerDown = (event: PointerEvent) => {
		event.preventDefault();
		(event.target as HTMLElement).focus();
	};
	const onmousedown = (event: MouseEvent) => {
		event.preventDefault();
	};
</script>

<div class="dropdown {dropdownClass}">
	<button
		class="btn dropdown-toggle align-items-center d-flex {btnClass}"
		aria-label={ariaLabel}
		{onmousedown}
		onclick={toggle}
		type="button"
		aria-expanded={open}
	>
		{@render buttonSnip()}
	</button>
	{#if open}
		<div use:directive class="dropdown-menu dropdown-menu-{placement} position-absolute" class:show={open} data-bs-popper="absolute">
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			{#each items as item, index (item.id)}
				<svelte:element
					this={item.tag}
					use:giveFocus={index}
					class="dropdown-item d-flex align-items-center"
					href={item.tag === 'a' ? item.href : undefined}
					class:active={item.isSelected}
					aria-current={item.isSelected ? 'page' : false}
					onpointerdown={onpointerDown}
					onclick={() => {
						if (item.tag === 'button') {
							item.onclick();
						}
						toggle();
					}}
				>
					{@render itemSnip(item, index)}
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
