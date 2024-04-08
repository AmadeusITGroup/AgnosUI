<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import {createHasFocus} from '@agnos-ui/svelte/services/focustrack';
	import {writable} from '@amadeus-it-group/tansu';
	import halfCircle from 'bootstrap-icons/icons/circle-half.svg?raw';
	import moon from 'bootstrap-icons/icons/moon-stars-fill.svg?raw';
	import sun from 'bootstrap-icons/icons/sun-fill.svg?raw';
	import {onMount} from 'svelte';

	interface Theme {
		id: string;
		name: string;
		icon: string;
	}

	const themes: Theme[] = [
		{id: 'auto', name: 'Auto', icon: halfCircle},
		{id: 'light', name: 'Light', icon: sun},
		{id: 'dark', name: 'Dark', icon: moon},
	];
	const currentTheme$ = writable({id: 'auto', name: 'auto', icon: halfCircle});

	function getPreferredTheme(): Theme {
		if (currentTheme$()) {
			return currentTheme$();
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return themes.find((t) => t.id === 'dark')!;
		} else {
			return themes.find((t) => t.id === 'light')!;
		}
	}

	const open$ = writable(false);
	function setTheme(theme: Theme): void {
		currentTheme$.set(theme);
		localStorage.setItem('theme', theme.id);
		if (theme.id === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.setAttribute('data-bs-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-bs-theme', theme.id);
		}
		document.documentElement.setAttribute('data-agnos-theme', theme.id);
	}

	const {hasFocus$, directive} = createHasFocus();
	$: $open$ = $hasFocus$;

	onMount(() => {
		// First we search in localStorage
		const theme = themes.find((t) => t.id === localStorage.getItem('theme'));
		if (theme) {
			currentTheme$.set(theme);
		}
		setTheme(getPreferredTheme());
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
			if (currentTheme$().id !== 'light' || currentTheme$().id !== ('dark' as any)) {
				setTheme(getPreferredTheme());
			}
		});
	});

	function giveFocus(el: HTMLButtonElement, index: number) {
		if (index === 0) {
			el.focus();
		}
	}
</script>

<div class="nav-item">
	<div class="dropdown">
		<button
			class="btn nav-link dropdown-toggle align-items-center d-flex btn-dark-mode"
			aria-label="toggle the dark mode"
			on:mousedown|preventDefault
			on:click={() => ($open$ = !$open$)}
			type="button"
			data-bs-toggle="dropdown"
			aria-expanded={$open$}
		>
			{#each themes as theme}
				<Svg svg={theme.icon} className={theme.id} />
			{/each}
		</button>
		{#if $open$}
			<div use:directive class="dropdown-menu dropdown-menu-end bs-popover-auto position-absolute" class:show={$open$}>
				{#each themes as theme, index}
					<button
						use:giveFocus={index}
						class="dropdown-item d-flex align-items-center"
						class:active={theme.id === $currentTheme$.id}
						on:click={() => {
							setTheme(theme);
							$open$ = !$open$;
						}}
					>
						<Svg className="me-3" svg={theme.icon} />{theme.name}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>
