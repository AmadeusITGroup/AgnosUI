<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import DropdownDaisyUI from '$lib/layout/DropdownDaisyUI.svelte';
	import {computed, writable, type ReadableSignal} from '@amadeus-it-group/tansu';
	import halfCircle from 'bootstrap-icons/icons/circle-half.svg?raw';
	import moon from 'bootstrap-icons/icons/moon-stars-fill.svg?raw';
	import sun from 'bootstrap-icons/icons/sun-fill.svg?raw';
	import {onMount} from 'svelte';
	import type {DropdownButton} from '$lib/layout/dropdown';
	import themeViewTransition from './theme-view-transition.css?raw';

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
				void setTheme('auto');
			},
			isSelected: currentTheme$() === 'auto',
		},
		{
			tag: 'button',
			id: 'light',
			name: 'Light',
			icon: sun,
			onclick: () => {
				void setTheme('light');
			},
			isSelected: currentTheme$() === 'light',
		},
		{
			tag: 'button',
			id: 'dark',
			name: 'Dark',
			icon: moon,
			onclick: () => {
				void setTheme('dark');
			},
			isSelected: currentTheme$() === 'dark',
		},
	]);

	let toggle: HTMLElement;

	async function setTheme(id: string, noAnimation = false) {
		const themeApply = () => {
			currentTheme$.set(id);
			localStorage.setItem('theme', id);
			applyTheme(id);
		};
		const appliedTheme = (theme: string) => {
			if (theme === 'auto') {
				return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'dark' : 'light';
			} else {
				return theme;
			}
		};
		if (
			!document.startViewTransition ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
			noAnimation ||
			appliedTheme(currentTheme$()) === appliedTheme(id)
		) {
			themeApply();
		} else {
			let styleElement = document.createElement('style');
			styleElement.textContent = themeViewTransition;
			document.head.appendChild(styleElement);
			const viewTransition = document.startViewTransition(themeApply);
			await viewTransition.ready;
			const {top, left, width, height} = toggle.getBoundingClientRect();
			const x = left + width / 2;
			const y = top + height / 2;
			const right = window.innerWidth - left;
			const bottom = window.innerHeight - top;
			const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));
			await document.documentElement.animate(
				{
					clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
				},
				{
					duration: 1_000,
					easing: 'ease-in-out',
					pseudoElement: '::view-transition-new(root)',
				},
			).finished;
			await viewTransition.finished;
			styleElement.remove();
		}
	}

	function applyTheme(id: string) {
		if (id === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', id);
		}
		document.documentElement.setAttribute('data-agnos-theme', id);
	}

	onMount(() => {
		// First we search in localStorage
		void setTheme(localStorage.getItem('theme') ?? 'auto', true);
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (currentTheme$() === 'auto') {
				applyTheme('auto');
			}
		});
	});
</script>

<li bind:this={toggle}>
	<DropdownDaisyUI
		btnClass="hover:bg-secondary-subtle h-full flex focus-visible:bg-secondary-subtle! active:bg-secondary-subtle!"
		dropdownClass="h-full"
		dropdownContentClass="bg-base-100 p-2"
		ariaLabel="toggle the dark mode"
		items={$themes$}
		placement="end"
	>
		{#snippet buttonSnip()}
			{#each $themes$ as theme}
				<Svg svg={theme.icon} className={theme.id} />
			{/each}
		{/snippet}
		{#snippet itemSnip(item: {icon: any; name: any})}
			<Svg className="icon-16 me-3" svg={item.icon} />{item.name}
		{/snippet}
	</DropdownDaisyUI>
</li>
