<script lang="ts">
	import {page} from '$app/stores';
	import 'bootstrap/dist/css/bootstrap.css';
	import {pathToRoot$, selectedFramework$} from '../../lib/stores';
	import {menu} from '../navigation';
</script>

<div class="demo-layout">
	<aside class="demo-sidebar">
		<nav class="w-100">
			<ul class="list-unstyled mb-0 pb-0 pb-md-2 pe-lg-2 main-nav-list">
				{#each menu as { title, submenu }}
					<li class="py-2" id="sidenav-{title}">
						<strong class="d-flex w-100 align-items-center fw-semibold">{title}</strong>
						<ul class="list-unstyled fw-normal pb-2 small">
							{#each submenu as { label, path }}
								{@const isCurrent = $page.route.id?.startsWith(`/[framework]${path}`)}
								<li>
									<a
										class="demo-links-link d-inline-block rounded"
										class:active={isCurrent}
										aria-current={isCurrent ? 'page' : undefined}
										href="{$pathToRoot$}{$selectedFramework$}{path}"
									>
										{label}
									</a>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<div>
		<slot />
	</div>
</div>

<style lang="scss">
	.main-nav-list {
		@media (max-width: 992px) {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
		}
	}
</style>
