<script lang="ts" generics="Item extends import('./dropdown').DropdownItem">
	import {createHasFocus} from '@agnos-ui/svelte-bootstrap/services/focustrack';
	import {fromStore} from 'svelte/store';
	import type {Snippet} from 'svelte';

	let open = $state(false);

	const {hasFocus$, directive} = createHasFocus();
	const focus = fromStore(hasFocus$);
	$effect(() => {
		open = focus.current;
	});

	function giveFocus(el: HTMLAnchorElement | HTMLButtonElement, index: number) {
		if (index === 0) {
			// is possible in ssr because always closed first
			el.focus();
		}
	}

	const toggle = (event: (MouseEvent & {currentTarget: EventTarget & HTMLElement}) | undefined, prevent: boolean = false) => {
		open = !open;
		if (prevent) {
			event?.preventDefault();
		}
	};

	interface Props {
		ariaLabel: string;
		btnClass: string;
		items: Item[];
		placement?: 'start' | 'end';
		dropdownClass?: string;
		buttonSnip: Snippet;
		itemSnip: Snippet<[Item, number]>;
		dropdownContentClass?: string;
	}

	let {
		ariaLabel,
		btnClass = 'btn m-1',
		items,
		placement = 'start',
		dropdownClass = 'dropdown',
		dropdownContentClass = 'menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm',
		buttonSnip,
		itemSnip,
	}: Props = $props();

	let isDropdown = dropdownClass.includes('dropdown');
	let dropdownPlacement = `dropdown-${placement}`;
	const onpointerDown = (event: PointerEvent) => {
		event.preventDefault();
		(event.target as HTMLElement).focus();
	};
	const onmousedown = (event: MouseEvent) => {
		event.preventDefault();
	};
</script>

<details class={[isDropdown ? {dropdownPlacement} : isDropdown, dropdownClass]} {open}>
	<summary {onmousedown} aria-label={ariaLabel} onclick={(e) => toggle(e, true)} class={btnClass}>{@render buttonSnip()}</summary>
	<ul use:directive class={dropdownContentClass}>
		{#if open}
			{#each items as item, index (item.id)}
				<li>
					<svelte:element
						this={item.tag}
						use:giveFocus={index}
						class={[
							'flex items-center',
							{'menu-active': item.isSelected},
							{'hover:bg-secondary-subtle!': !item.isSelected},
							{'hover:bg-primary-subtle!': item.isSelected},
							{'focus-visible:bg-secondary-subtle!': !item.isSelected},
							{'focus-visible:bg-primary-subtle!': item.isSelected},
						]}
						href={item.tag === 'a' ? item.href : undefined}
						aria-current={item.isSelected ? 'page' : false}
						onpointerdown={onpointerDown}
						onclick={(e: (MouseEvent & {currentTarget: EventTarget & HTMLElement}) | undefined) => {
							if (item.tag === 'button') {
								item.onclick();
							}
							toggle(e);
						}}
					>
						{@render itemSnip(item, index)}
					</svelte:element>
				</li>
			{/each}
		{/if}
	</ul>
</details>

<style>
	.dropdown {
		button ~ button {
			margin-top: 0.5rem;
		}
	}
</style>
