<script lang="ts">
	import MainSection from '$lib/layout/MainSection.svelte';
	import SideMenu from './menu/SideMenu.svelte';
	import TOC from './menu/TOC.svelte';

	import 'bootstrap/dist/css/bootstrap.css';
</script>

<div class="container-xxl">
	<div class="row flex-wrap flex-sm-nowrap align-content-between">
		<aside class="demo-sidebar d-none d-md-flex col-auto flex-column flex-shrink-0 align-items-center align-items-sm-start">
			<SideMenu />
		</aside>
		<div class="pb-4 col">
			<MainSection>
				<slot />
			</MainSection>
		</div>
		<div class="demo-toc col-auto d-none d-lg-flex">
			<TOC />
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../../../common/variables';

	@include media-breakpoint-up(md) {
		.demo-sidebar {
			position: sticky;
			top: 0;
			height: calc(100vh - 6rem);
		}

		.demo-toc {
			position: sticky;
			top: 0;
			display: block !important;
			min-width: 250px;
			height: calc(100vh - 6rem);
			overflow-y: auto;
		}
	}
</style>
