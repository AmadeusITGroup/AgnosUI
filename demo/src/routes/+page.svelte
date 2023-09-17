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

<div class="container-xxl">
	<section class="row pres mb-4 pt-3">
		<div class="col-12 col-lg-6 order-1 order-lg-0">
			<div class="pres-logo d-block text-center text-lg-start fw-bold">AgnosUI</div>
			<div class="mt-3">
				<div class="pres-line ps-4 pres-logo-text"><Svg svg={bullet} className="bullet" /> Making your webapps powerful and consistent</div>
				<div class="pres-line ps-4 pres-logo-text"><Svg svg={bullet} className="bullet" /> Core builders for components in TS only</div>
				<div class="pres-line ps-4 pres-logo-text">
					<Svg svg={bullet} className="bullet" /> Headless widgets library for Angular, React and svelte made using the core
				</div>
				<div class="pres-line ps-4 pres-logo-text">
					<Svg svg={bullet} className="bullet" /> Highly customizable Bootstrap components made with those Headless widgets
				</div>
			</div>
			<div class="btn-docs card mb-3 mt-5">
				<div class="row g-0">
					<div class="col">
						<div class="card-body">
							<h5 class="card-title fw-bold pres-card-title text-center mb-4 fs-1">Checkout the docs</h5>
							<div class="card-text row">
								<div class="col-12 col-sm-4">
									<a
										href="angular/getting-started/installation"
										class="btn btn-primary rounded-pill d-flex align-items-center justify-items-center mt-1"
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
										class="btn btn-primary rounded-pill d-flex align-items-center justify-items-center mt-1"
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
										class="btn btn-primary rounded-pill d-flex align-items-center justify-items-center mt-1"
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
				</div>
			</div>
		</div>
		<div class="col-12 col-lg-6 order-0 order-lg-1 d-flex justify-content-center align-items-center">
			<Svg svg={agnosUILogo} className="agnosui-logo" />
		</div>
	</section>
</div>
<section class="section pt-5 mt-5 flex-grow-1">
	<div class="container-xxl">
		<div class="cards row align-content-around">
			<LandingCard title="Headless widgets">
				Each widget is managed with a framework-agnostic core that provides a reactive model and an api to drive the data. Adapters for Angular, React
				and Svelte are provided to plug the widgets in your favorite framework.
			</LandingCard>
			<LandingCard title="Consistent">Widgets are provided for Angular, React and Svelte with the exact same markup and functionalities.</LandingCard>
			<LandingCard title="Highly configurable">
				Default values for all widgets props are configurable at any point of the component subtree.
			</LandingCard>
			<LandingCard title="Fully tested">Unit tests for headless with Vitest. E2e tests for adapters with Playwright.</LandingCard>
			<LandingCard title="Accessible">Widgets are tested for accessibility with Axe.</LandingCard>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../../common/variables';

	@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
	$font-name: 'Oswald';

	.btn.btn-primary :global(.pres-card-logo) {
		width: 30px;
		height: 30px;
	}

	:global(.agnosui-logo) {
		min-width: 200px;
		max-width: 320px;
		width: 30vw;
	}

	.pres {
		&-logo {
			font-family: $font-name, sans-serif;
			font-size: 5rem;
			font-weight: 300;
			background: linear-gradient(var(--bs-primary), var(--bs-secondary));
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}

		&-line {
			font-size: 1.3rem;
			margin-bottom: 0.5rem;
			@include media-breakpoint-up(md) {
				font-size: 1.6rem !important;
			}

			:global(.bullet) {
				height: 20px;
				color: var(--bs-primary);
			}
		}
	}

	.btn-docs {
		background-color: var(--au-body-background-light-color);
	}

	.btn.btn-primary {
		font-family: 'Jost', sans-serif;
		font-weight: 500; // can be done differently
		font-size: 15px; // can be done differently
		letter-spacing: 1px; // can be done differently ?
		padding: 8px 20px; // can be done differently
		transition: 0.5s;
		color: #fff; // can be done differently
		// background: var(--bs-primary);
		text-decoration: none; // can be done differently
	}

	.section {
		border-top: 1px solid var(--au-section-border-top-color);
		background-color: var(--au-section-background-color);
	}
</style>
