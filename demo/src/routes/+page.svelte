<script lang="ts">
	// import {Alert} from '@agnos-ui/svelte';
	import Svg from '$lib/layout/Svg.svelte';
	import LandingCard from '$lib/snippets/landing-page/LandingCard.svelte';
	import angularLogo from '../resources/logo-angular.svg?raw';
	import reactLogo from '../resources/logo-react.svg?raw';
	import svelteLogo from '../resources/logo-svelte.svg?raw';
	import agnosUILogo from '../resources/agnosui-logo.svg?raw';
	import bullet from 'bootstrap-icons/icons/arrow-right-square-fill.svg?raw';
</script>

<svelte:head>
	<title>AgnosUI - Home page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- TODO make a list of widget and iterate over it when needed -->
<div class="container-xxl d-flex flex-column align-items-center pt-5">
	<h1 class="text-center mb-5 mx-sm-4">
		<span><Svg svg={agnosUILogo} className="agnosui-logo" />gnosUI, where web widgets shine</span>
	</h1>
	<h2 class="text-center mx-sm-5 pe-5">Perfected open-source widget libraries</h2>
	<ul class="au-landing-list">
		<li class="d-flex align-items-start">
			<Svg svg={bullet} className="bullet me-3" />configurable Typescript widget factories
		</li>
		<li class="d-flex align-items-start">
			<Svg svg={bullet} className="bullet me-3" />headless wrappers for Angular, React and Svelte
		</li>
		<li class="d-flex align-items-start">
			<Svg svg={bullet} className="bullet me-3" />Bootstrap-compliant ready-to-use widgets for Angular, React and Svelte.
		</li>
	</ul>
	<div class="card-body au-landing-card p-4 rounded mt-4 mx-3">
		<h5 class="card-title pres-card-title mb-4">Get started with</h5>
		<div class="card-text row">
			<div class="col-12 col-sm-4">
				<a
					href="angular/getting-started/installation"
					class="btn-doc d-flex align-items-center justify-content-center"
					aria-label="link to angular examples"
					title="Angular"
				>
					<Svg svg={angularLogo} className="pres-card-logo me-3" />
					Angular
				</a>
			</div>
			<div class="col-12 col-sm-4">
				<a
					href="react/getting-started/installation"
					class="btn-doc d-flex align-items-center justify-content-center"
					aria-label="link to angular examples"
					title="Angular"
				>
					<Svg svg={reactLogo} className="pres-card-logo me-3" />
					React
				</a>
			</div>
			<div class="col-12 col-sm-4">
				<a
					href="svelte/getting-started/installation"
					class="btn-doc d-flex align-items-center justify-content-center"
					aria-label="link to angular examples"
					title="Svelte"
				>
					<Svg svg={svelteLogo} className="pres-card-logo me-3" />
					Svelte
				</a>
			</div>
		</div>
	</div>
</div>
<footer class="au-footer pt-5 mt-5 flex-grow-1">
	<div class="container-xxl">
		<div class="cards row align-content-around">
			<LandingCard title="Framework agnostic">
				A framework-agnostic core of widget factories that provide reactive models and APIs to drive the data. You can use it with any front-end
				framework.
			</LandingCard>
			<LandingCard title="Headless widgets">
				Each widget is provided in headless mode in Angular, React and Svelte using the same factory. You can use them with any front-end CSS
				framework.
			</LandingCard>
			<LandingCard title="Bootstrap widgets">
				Highly customizable Bootstrap CSS widgets are available for Angular, React and Svelte in separated packages.
			</LandingCard>
			<LandingCard title="Consistent">Widgets are provided for Angular, React and Svelte with the exact same markup and functionalities.</LandingCard>
			<LandingCard title="Highly configurable">
				Default values for all widgets props are configurable at any point of the application subtree.
			</LandingCard>
			<LandingCard title="Fully tested">Unit tests for headless with Vitest. E2e tests for adapters with Playwright.</LandingCard>
			<LandingCard title="Accessible">Widgets are tested for accessibility with Axe.</LandingCard>
		</div>
	</div>
</footer>

<style lang="scss">
	@import '../../../common/variables';

	@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
	$font-name: 'Kanit';

	.btn-doc :global(.pres-card-logo) {
		width: 30px;
		height: 30px;
	}

	:global(.agnosui-logo) {
		width: 50px;
	}
	.pres-card-title {
		font-size: 1.5rem;
		text-align: center;
	}
	.au-landing-card {
		background-color: $light-background;
		border: 1px solid var(--bs-primary);
	}
	.au-landing-list {
		list-style-type: none;
		font-size: 1rem;
		margin-bottom: 0.5rem;

		:global(.bullet) {
			width: 20px;
			height: 20px;
			min-width: 20px;
			min-height: 20px;
			margin-top: 3px;
			color: $gradient-text-top;
		}
	}
	.btn-doc {
		font-family: 'Jost', sans-serif;
		font-weight: 500;
		font-size: 15px;
		letter-spacing: 1px;
		display: inline-block;
		padding: 8px 20px;
		border-radius: 50px;
		transition: 0.5s;
		margin: 5px 0 0 0;
		color: #fff;
		background: $gradient-top;
		text-decoration: none;
	}
	.btn-doc:hover {
		background: $gradient-bottom;
		border-color: $gradient-top;
	}
	.au-footer {
		border-top: 1px solid $gradient-text-bottom;
		background-color: $light-background;
	}
</style>
