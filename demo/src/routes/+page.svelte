<script lang="ts">
	// import {Alert} from '@agnos-ui/svelte';
	import Svg from '$lib/layout/Svg.svelte';
	import angularLogo from '../resources/logo-angular.svg?raw';
	import reactLogo from '../resources/logo-react.svg?raw';
	import sveteLogo from '../resources/logo-svelte.svg?raw';
</script>

<svelte:head>
	<title>AgnosUI - Home page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="pt-3">
	<div class="d-flex justify-content-center">
		<div class="alert alert-primary">
			<p class="text-center">Welcome to AgnosUI Demo!</p>
			<p class="mb-0">
				Experience the beginning stages of our exciting journey as we actively develop our library for CSS Bootstrap design.
				<br />
				Follow us on <a href="https://github.com/AmadeusITGroup/AgnosUI" class="link-body-emphasis">GitHub</a> for the latest updates and be a part of
				shaping the next-generation UI components!
			</p>
		</div>
	</div>

	<div class="note my-3">
		<p>
			AgnosUI is a powerful library of widgets designed specifically for <a href="https://getbootstrap.com/">Bootstrap</a>.
		</p>
		<p>
			Inspired by the success of
			<a href="https://ng-bootstrap.github.io/">ng-bootstrap</a>, AgnosUI takes the concept a step further by offering widgets that can seamlessly
			integrate with any front-end framework of your choice.
		</p>
		<p>
			With support for popular frameworks like <a href="https://angular.io/">Angular</a>,
			<a href="https://react.dev/">React</a>, and <a href="https://svelte.dev/">Svelte</a>, AgnosUI allows you to effortlessly create consistent and
			visually appealing UI components across your projects.
		</p>
	</div>

	<h4 class="text-center mt-4 mt-md-5">For a comprehensive understanding of AgnosUI's features and usage,<br />feel free to explore our demo</h4>
	<div class="d-flex links d-flex justify-content-evenly">
		<a href="angular/components/accordion/examples" aria-label="link to angular examples" title="Angular">
			<Svg svg={angularLogo} className="framework-logo" />
		</a>
		<a href="react/components/accordion/examples" aria-label="link to react examples" title="React">
			<Svg svg={reactLogo} className="framework-logo" />
		</a>
		<a href="svelte/components/accordion/examples" aria-label="link to svelte examples" title="Svelte">
			<Svg svg={sveteLogo} className="framework-logo" />
		</a>
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
