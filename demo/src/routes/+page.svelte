<script lang="ts">
	import Svg from '$lib/layout/Svg.svelte';
	import LandingCard from '$lib/snippets/landing-page/LandingCard.svelte';
	import angularLogo from '$resources/logo-angular.svg?raw';
	import reactLogo from '$resources/logo-react.svg?raw';
	import svelteLogo from '$resources/logo-svelte.svg?raw';
	import agnosUILogo from '$resources/agnosui-logo.svg?raw';
	import bullet from 'bootstrap-icons/icons/arrow-right-square-fill.svg?raw';
</script>

<svelte:head>
	<title>AgnosUI - Home page</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- TODO make a list of widget and iterate over it when needed -->
<div class="container-xxl d-flex flex-column align-items-center pt-5">
	<div class="d-flex flex-md-row flex-column">
		<div class="order-md-1 order-2">
			<h1 class="text-primary-emphasis text-sm-start text-center fs-sm-1 mb-md-5 mb-sm-3">
				<span
					><span class="au-clip">AgnosUI</span>
					<br />
					Where web widgets shine.</span
				>
			</h1>
			<h2 class="text-primary-emphasis text-sm-start text-center">Perfected open-source widget libraries</h2>
			<ul class="au-landing-list">
				<li class="d-flex align-items-start">
					<Svg svg={bullet} className="bullet me-3" />Configurable Typescript widget factories
				</li>
				<li class="d-flex align-items-start">
					<Svg svg={bullet} className="bullet me-3" />Headless wrappers for Angular, React and Svelte
				</li>
				<li class="d-flex align-items-start">
					<Svg svg={bullet} className="bullet me-3" />Bootstrap-compliant ready-to-use widgets for Angular, React and Svelte.
				</li>
			</ul>
		</div>
		<div class="order-md-2 order-1 m-auto mb-3">
			<div class="position-relative au-logo-container">
				<span class="au-blur position-absolute p-4 p-sm-0"></span>
				<Svg svg={agnosUILogo} className="agnosui-big-logo me-2" />
			</div>
		</div>
	</div>
	<div class="card-body au-landing-card p-4 rounded mx-3">
		<h5 class="card-title pres-card-title mb-4">Get started with</h5>
		<div class="card-text row">
			<div class="col-12 col-sm-4 mb-2 mb-md-0">
				<a
					href="docs/angular/getting-started/introduction"
					class="btn btn-outline-primary rounded-pill d-flex align-items-center justify-content-center px-3"
					aria-label="link to angular examples"
					title="Angular"
				>
					<Svg svg={angularLogo} className="pres-card-logo me-2" />
					Angular
				</a>
			</div>
			<div class="col-12 col-sm-4 mb-2 mb-md-0">
				<a
					href="docs/react/getting-started/introduction"
					class="btn btn-outline-primary rounded-pill d-flex align-items-center justify-content-center px-3"
					aria-label="link to react examples"
					title="React"
				>
					<Svg svg={reactLogo} className="pres-card-logo me-2" />
					React
				</a>
			</div>
			<div class="col-12 col-sm-4 mb-2 mb-md-0">
				<a
					href="docs/svelte/getting-started/introduction"
					class="btn btn-outline-primary rounded-pill d-flex align-items-center justify-content-center px-3"
					aria-label="link to svelte examples"
					title="Svelte"
				>
					<Svg svg={svelteLogo} className="pres-card-logo me-2" />
					Svelte
				</a>
			</div>
		</div>
	</div>
</div>
<div class="au-features container-xxl mt-5">
	<div class="cards row align-content-around">
		<LandingCard title="Framework agnostic">
			A framework-agnostic core of widget factories that provide reactive models and APIs to drive the data. You can use it with any front-end
			framework.
		</LandingCard>
		<LandingCard title="Headless widgets">
			Each widget is provided in headless mode in Angular, React and Svelte using the same factory. You can use them with any front-end CSS framework.
		</LandingCard>
		<LandingCard title="Consistent">Widgets are provided for Angular, React and Svelte with the exact same markup and functionalities.</LandingCard>
		<LandingCard title="Accessible">Widgets are designed with a strong emphasis on accessibility and tested for it</LandingCard>
		<LandingCard title="Highly configurable">
			Default values for all widgets props are configurable at any point of the application subtree.
		</LandingCard>
		<LandingCard title="Fully tested">Unit tests for headless with Vitest. E2e tests for adapters with Playwright.</LandingCard>
		<LandingCard title="Bootstrap widgets">
			Highly customizable Bootstrap CSS widgets are available for Angular, React and Svelte in separated packages.
		</LandingCard>
	</div>
</div>
<footer class="au-footer pt-2 mt-2">
	<div class="container-xxl d-flex flex-column align-items-center">
		<p>Released under the MIT License.</p>
		<p>Copyright © 2023 - present Amadeus</p>
	</div>
</footer>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
	$font-name: 'Kanit';

	:global(.pres-card-logo) {
		width: 50px;
		height: 30px;
	}

	:global(.agnosui-logo) {
		width: 50px;
	}

	:global(.agnosui-big-logo) {
		height: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.au-logo-container {
		width: 380px;
		height: 380px;
	}
	.au-blur {
		width: 300px;
		height: 300px;
		background-image: linear-gradient(-60deg, #9240cc 50%, #fce649 50%);
		filter: blur(40px);
		opacity: 0.8;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.pres-card-title {
		font-size: 1.5rem;
		text-align: center;
	}
	.au-clip {
		background: -webkit-linear-gradient(100deg, #9240cc 30%, #fce649);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
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
			color: var(--bs-primary-text-emphasis);
		}
	}
	.au-footer {
		border-top: 1px solid var(--bs-primary-text-emphasis);
	}
</style>
