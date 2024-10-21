<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import Dropdown from '$lib/layout/Dropdown.svelte';
	import {computed, writable, type ReadableSignal} from '@amadeus-it-group/tansu';
	import halfCircle from 'bootstrap-icons/icons/circle-half.svg?raw';
	import moon from 'bootstrap-icons/icons/moon-stars-fill.svg?raw';
	import sun from 'bootstrap-icons/icons/sun-fill.svg?raw';
	import {onMount} from 'svelte';
	import type {DropdownButton} from '$lib/layout/dropdown';

	interface Theme extends DropdownButton {
		name: string;
		icon: string;
		onclick: () => void;
		isSelected: boolean;
	}

	const currentTheme$ = writable('auto');
	const themes$: ReadableSignal<Theme[]> = computed(() => [
		{
			tag: 'button',
			id: 'auto',
			name: 'Auto',
			icon: halfCircle,
			onclick: () => {
				setTheme('auto');
			},
			isSelected: currentTheme$() === 'auto',
		},
		{
			tag: 'button',
			id: 'light',
			name: 'Light',
			icon: sun,
			onclick: () => {
				setTheme('light');
			},
			isSelected: currentTheme$() === 'light',
		},
		{
			tag: 'button',
			id: 'dark',
			name: 'Dark',
			icon: moon,
			onclick: () => {
				setTheme('dark');
			},
			isSelected: currentTheme$() === 'dark',
		},
	]);

	function setTheme(id: string): void {
		currentTheme$.set(id);
		localStorage.setItem('theme', id);
		applyTheme(id);
	}

	function applyTheme(id: string) {
		if (id === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.setAttribute('data-bs-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-bs-theme', id);
		}
		document.documentElement.setAttribute('data-agnos-theme', id);
	}

	onMount(() => {
		// First we search in localStorage
		setTheme(localStorage.getItem('theme') ?? 'auto');
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (currentTheme$() === 'auto') {
				applyTheme('auto');
			}
		});
	});
</script>

<div class="nav-item">
	<Dropdown btnClass="btn-dark-mode nav-link" ariaLabel="toggle the dark mode" items={$themes$} placement="end">
		{#snippet buttonSnip()}
			{#each $themes$ as theme}
				<Svg svg={theme.icon} className={theme.id} />
			{/each}
		{/snippet}
		{#snippet itemSnip(item)}
			<Svg className="me-3" svg={item.icon} />{item.name}
		{/snippet}
	</Dropdown>
</div>
