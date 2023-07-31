<script lang="ts">
	// import {Alert} from '@agnos-ui/svelte';
	import Svg from '$lib/layout/Svg.svelte';
	import angularLogo from '../resources/logo-angular.svg?raw';
	import reactLogo from '../resources/logo-react.svg?raw';
	import sveteLogo from '../resources/logo-svelte.svg?raw';
</script>

<svelte:head>
	<title>Home page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="pt-3">
	<div class="alert alert-primary">
		Welcome to AgnosUI Demo! Experience the beginning stages of our exciting journey as we actively develop our library for CSS Bootstrap design.
		<br />
		Follow us on <a href="https://github.com/AmadeusITGroup/AgnosUI">GitHub</a> for the latest updates and be a part of shaping the next-generation UI
		components!
	</div>

	<div class="note my-3">
		AgnosUI is a powerful library of widgets designed specifically for <a href="https://getbootstrap.com/">Bootstrap</a>. Inspired by the success of
		<a href="https://ng-bootstrap.github.io/">ng-bootstrap</a>, AgnosUI takes the concept a step further by offering widgets that can seamlessly
		integrate with any front-end framework of your choice. With support for popular frameworks like <a href="https://angular.io/">Angular</a>,
		<a href="https://react.dev/">React</a>, and <a href="https://svelte.dev/">Svelte</a>, AgnosUI allows you to effortlessly create consistent and
		visually appealing UI components across your projects.
	</div>

	<h4 class="text-center">For a comprehensive understanding of AgnosUI's features and usage,<br />feel free to explore our demo</h4>
	<div class="d-flex links d-flex justify-content-evenly">
		<a href="angular/components/alert/examples" aria-label="link to angular examples"><Svg svg={angularLogo} className="framework-logo" /></a>
		<a href="react/components/alert/examples" aria-label="link to react examples"><Svg svg={reactLogo} className="framework-logo" /></a>
		<a href="svelte/components/alert/examples" aria-label="link to svelte examples"><Svg svg={sveteLogo} className="framework-logo" /></a>
	</div>
</section>

<style lang="scss">
	.note {
		font-size: 1.25rem;
		font-weight: 300;
	}
	.links {
		padding: 1rem 0rem;
		@media (min-width: 768px) {
			padding: 3rem;
		}

		:global(.framework-logo) {
			height: 100px;
		}
	}
</style>
