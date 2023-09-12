<script lang="ts">
	export let visibleElements$: any;
	export let elements$: any;

	function getElementProperties(visibleElements$: any, element: HTMLElement, isVisible: boolean) {
		const header = element.querySelector('h1,h2,h3') as HTMLElement;
		if (header) {
			const classnames = [`toc-link d-inline-block toc-${header.tagName.toLowerCase()}`];

			const firstSubSection = element.querySelector('section');
			if ((firstSubSection && visibleElements$().has(firstSubSection)) || (!firstSubSection && isVisible)) {
				classnames.push('active');
			}

			return {
				label: header.innerText,
				href: header.querySelector('a')?.getAttribute('href') ?? '',
				classname: classnames.join(' '),
			};
		} else {
			return {
				label: '',
				href: '',
				classname: '',
			};
		}
	}
</script>

<div class="demo-toc col-auto d-none d-lg-flex">
	{#if $elements$.length}
		<div class="toc-content ms-2 border-start-1">
			<div class="toc-title fw-bold pb-2 mb-1">On this page</div>
			<ul class="list-unstyled mb-0 pb-0 pb-md-2 pe-lg-2 main-nav-list small">
				{#each $elements$ as element}
					{@const isVisible = $visibleElements$.has(element)}
					{@const {label, classname, href} = getElementProperties(visibleElements$, element, isVisible)}
					<li>
						<a class={classname} aria-current={isVisible ? 'page' : undefined} {href}>
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../../../../common/variables';

	.main-nav-list {
		@include media-breakpoint-down(md) {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
		}
	}

	@include media-breakpoint-up(md) {
		.demo-toc {
			position: sticky;
			top: 0;
			display: block !important;
			height: calc(100vh - 6rem);
			overflow-y: auto;
		}
	}

	.toc {
		&-link:hover,
		&-link:focus {
			color: var(--bs-emphasis-color);
			background-color: var(--demo-sidebar-link-bg);
		}
		&-link {
			padding: 0.1875rem 0.5rem;
			color: var(--bs-body-color);
			text-decoration: none;
			border-left: 3px solid transparent;
			transition: border-color 0.25s;

			&.active {
				color: var(--bs-emphasis-color);
				border-left-color: var(--bs-primary);
				transition: none;
			}
		}

		&-h2 {
			padding-left: 0.5rem;
		}
		&-h3 {
			padding-left: 1rem;
		}
	}
</style>
