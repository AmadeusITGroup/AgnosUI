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
	<title>Home page - AgnosUI</title>
</svelte:head>

<!-- TODO make a list of component and iterate over it when needed -->
<div class="container-xxl flex flex-col items-center md:pt-12">
	<div class="flex md:flex-row flex-col">
		<div class="md:order-1 order-2">
			<h1 class="text-primary sm:text-start text-center sm:fs-1 md:mb-12 mb-4">
				<span
					><span class="au-clip">AgnosUI</span>
					<br />
					Where components shine.</span
				>
			</h1>
			<h2 class="text-primary sm:text-start text-center">Perfected component libraries</h2>
			<div class="flex justify-center md:justify-start">
				<ul class="au-landing-list pl-8">
					<li class="flex items-start">
						<Svg svg={bullet} className="bullet me-3" />Typescript factories
					</li>
					<li class="flex items-start">
						<Svg svg={bullet} className="bullet me-3" />Headless wrappers
					</li>
					<li class="flex items-start">
						<Svg svg={bullet} className="bullet me-3" />Bootstrap-styled ready-to-use
					</li>
				</ul>
			</div>
		</div>
		<div class="md:order-2 order-1 m-auto md:mb-4">
			<div class="relative au-logo-container">
				<span class="au-blur absolute p-4 sm:p-0"></span>
				<Svg svg={agnosUILogo} className="agnosui-big-logo me-2" />
			</div>
		</div>
	</div>
	<div class="card-body items-center text-center my-1 md:my-6 p-2 md:p-6">
		<h5 class="card-title pres-card-title mb-3 md:mb-6">Get started with</h5>
		<div class="card-text flex flex-row gap-2 sm:gap-5">
			<div>
				<a
					href="docs/react/getting-started/introduction"
					class="btn sm:btn-lg max-[480px]:btn-sm btn-outline btn-primary rounded-full flex items-center justify-start sm:px-5 sm:gap-5 gap-3 p-3 sm:p-6"
					aria-label="link to react examples"
					title="React"
				>
					<Svg svg={reactLogo} className="icon-32 max-[480px]:w-[20px]! max-[480px]:h-[20px]!" />
					React
				</a>
			</div>
			<div>
				<a
					href="docs/svelte/getting-started/introduction"
					class="btn sm:btn-lg max-[480px]:btn-sm btn-outline btn-primary rounded-full flex items-center justify-start sm:px-5 sm:gap-5 gap-3 p-3 sm:p-6"
					aria-label="link to svelte examples"
					title="Svelte"
				>
					<Svg svg={svelteLogo} className="icon-32 max-[480px]:w-[20px]! max-[480px]:h-[20px]!" />
					Svelte
				</a>
			</div>
			<div>
				<a
					href="docs/angular/getting-started/introduction"
					class="btn sm:btn-lg max-[480px]:btn-sm btn-outline btn-primary rounded-full flex items-center justify-start sm:px-5 sm:gap-5 gap-3 p-3 sm:p-6"
					aria-label="link to angular examples"
					title="Angular"
				>
					<Svg svg={angularLogo} className="icon-32 max-[480px]:w-[20px]! max-[480px]:h-[20px]!" />
					Angular
				</a>
			</div>
		</div>
	</div>
</div>
<div class="au-features container-xxl mt-2 sm:mt-5">
	<div class="cards row content-around">
		<LandingCard title="Framework agnostic">
			A framework-agnostic core of component factories that provide reactive models and APIs to drive the data. You can use it with any front-end
			framework.
		</LandingCard>
		<LandingCard title="Headless components">
			Each component is provided in headless mode in Angular, React and Svelte using the same factory. You can use them with any front-end CSS
			framework.
		</LandingCard>
		<LandingCard title="Consistent">Components are provided for Angular, React and Svelte with the exact same markup and functionalities.</LandingCard
		>
		<LandingCard title="Accessible">Components are designed with a strong emphasis on accessibility and tested for it</LandingCard>
		<LandingCard title="Highly configurable">
			Default values for all components props are configurable at any point of the application subtree.
		</LandingCard>
		<LandingCard title="Fully tested"
			>Unit tests for headless with Vitest. E2e tests for adapters with Playwright (including SSR hydration tests). Integration tests of the libs with
			Verdaccio.</LandingCard
		>
		<LandingCard title="Bootstrap components">
			Highly customizable Bootstrap CSS components are available for Angular, React and Svelte in separated packages.
		</LandingCard>
		<LandingCard title="SSR compliant">All our components are SSR compliant and can be used in a server-side rendered application.</LandingCard>
	</div>
</div>
<footer class="au-footer pt-2 mt-2">
	<div class="container-xxl flex flex-col items-center">
		<p>Released under the MIT License.</p>
		<p>Copyright © 2023 - present Amadeus</p>
	</div>
</footer>

<style>
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
		@media (max-width: 768px) {
			width: 300px;
			height: 300px;
		}
	}
	.au-blur {
		width: 300px;
		height: 300px;
		@media (max-width: 768px) {
			width: 250px;
			height: 250px;
		}
		border-radius: 50%;
		background-image: linear-gradient(-60deg, #9240cc 30%, #fce649 70%);
		filter: blur(40px);
		opacity: 0.5;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.pres-card-title {
		font-size: 1.5rem;
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
			color: var(--color-primary);
		}
	}
	.au-footer {
		border-top: 1px solid var(--color-primary);
	}
</style>
