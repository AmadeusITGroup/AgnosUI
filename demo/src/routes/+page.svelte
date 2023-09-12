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
	<section class="row pres mb-4">
		<div class="col-12 col-lg-6 order-1 order-lg-0">
			<div class="pres-logo d-block text-center text-lg-start">AgnosUI</div>
			<div class="mt-3">
				<div class="pres-line ps-4 pres-logo-text"><Svg svg={bullet} className="bullet" /> Making your webapps powerfull and consistent</div>
				<div class="pres-line ps-4 pres-logo-text"><Svg svg={bullet} className="bullet" /> Headless widgets library</div>
				<div class="pres-line ps-4 pres-logo-text"><Svg svg={bullet} className="bullet" /> Adapters for Angular, React and Svelte</div>
			</div>
			<div class="btn-docs card mb-3 mt-5">
				<div class="row g-0">
					<div class="col">
						<div class="card-body">
							<h5 class="card-title pres-card-title mb-4">Checkout the docs</h5>
							<div class="card-text row">
								<div class="col-12 col-sm-4">
									<a
										href="angular/components/accordion/examples"
										class="btn-doc d-flex align-items-center justify-items-center"
										aria-label="link to angular examples"
										title="Angular"
									>
										<Svg svg={angularLogo} className="pres-card-logo me-3" />
										Angular
									</a>
								</div>
								<div class="col-12 col-sm-4">
									<a
										href="react/components/accordion/examples"
										class="btn-doc d-flex align-items-center justify-items-center"
										aria-label="link to angular examples"
										title="Angular"
									>
										<Svg svg={reactLogo} className="pres-card-logo me-3" />
										React
									</a>
								</div>
								<div class="col-12 col-sm-4">
									<a
										href="svelte/components/accordion/examples"
										class="btn-doc d-flex align-items-center justify-items-center"
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
<section class="background pt-5 mt-5 flex-grow-1">
	<div class="container-xxl">
		<div class="cards row align-content-around">
			<LandingCard title="Headless widgets">
				Each widget is managed in pure typescript with a reactive model and an api to drive the data.
			</LandingCard>
			<LandingCard title="Consistent">
				Widgets are provided for Angular, React and Svelte with the exact same markup and functionnalities.
			</LandingCard>
			<LandingCard title="Highly configurable">
				Default values for all widget props are configurable at any point of the component subtree.
			</LandingCard>
			<LandingCard title="Fully tested">Unit test for headless with Vitest. E2e tests for adapters with Playwright.</LandingCard>
			<LandingCard title="Accessible">Widgets are tested with Axe.</LandingCard>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../../common/variables';

	@import url('https://fonts.googleapis.com/css2?family=Kanit&display=swap');
	$font-name: 'Kanit';

	.btn-doc :global(.pres-card-logo) {
		width: 30px;
		height: 30px;
	}

	:global(.agnosui-logo) {
		min-width: 200px;
		max-width: 320px;
		width: 30vw;
	}

	.pres {
		padding-top: 1rem;

		&-card-title {
			font-size: 1.5rem;
			text-align: center;
		}

		&-logo {
			font-family: $font-name, sans-serif;
			font-size: 5rem;
			font-weight: 300;
			background: linear-gradient($gradient-text-top, $gradient-text-bottom);
			// background: linear-gradient(#bc0cf1, #d40404);
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
				color: $gradient-text-top;
			}
		}
	}

	.btn-docs {
		background-color: $light-background;
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
		// border: 4px solid $gradient-bottom;
		// border: 5px solid #1066ef;
		text-decoration: none;
	}

	.btn-doc:hover {
		background: $gradient-bottom;
		border-color: $gradient-top;
	}

	.background {
		border-top: 1px solid $gradient-text-bottom;
		background-color: $light-background;
	}

	// 	:global(.framework-logo) {
	// 		height: 50px;
	// 	}
	// }
</style>
