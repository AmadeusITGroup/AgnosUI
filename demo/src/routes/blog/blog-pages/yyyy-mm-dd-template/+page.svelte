<script lang="ts">
	import Code from '$lib/layout/Code.svelte';
	import Section from '$lib/layout/Section.svelte';
	import TableOfContents from '$lib/layout/TableOfContents.svelte';
	import {intersectionApi} from '$lib/stores';
	import {onMount} from 'svelte';

	const code = `import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'df-demo-accordion-basic',
  templateUrl: './accordion-basic.html',
  standalone: true,
  imports: [NgbAccordionModule]
})
export class NgbdAccordionBasic {}`;

	const {elements$, visibleElements$} = intersectionApi;
	let container: HTMLElement;

	// needed to update the table of contents with scrollspy behavior
	onMount(() => {
		intersectionApi.patch({
			elements: [...container.querySelectorAll('section')] as HTMLElement[],
		});
	});
</script>

<svelte:head>
	<title>Blog post example</title>
	<meta name="description" content="Blog post example" />
</svelte:head>

<div class="d-flex demo-layout flex-row mt-3 align-items-baseline" bind:this={container}>
	<div class="col-10 mx-auto">
		<Section label="Loram Ipsum" id="lorem-ipsum" level={2}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis dolor quis dui condimentum, ut pharetra velit lobortis. Mauris a
			elementum metus. Sed lacinia nisi eu diam venenatis porttitor. Morbi arcu nunc, efficitur vitae sem sed, commodo pulvinar tellus. Donec eu ipsum
			consequat, mollis nibh at, pharetra tortor. Fusce sit amet lacus ac mi bibendum molestie a sed ante. In quis justo lorem. Phasellus placerat,
			dolor at eleifend iaculis, lorem augue vestibulum risus, a fermentum libero augue vitae sem. Quisque porta turpis nec fermentum consequat.
			Suspendisse vel molestie est. Aliquam mollis, nibh a iaculis sollicitudin, massa eros pulvinar massa, in rhoncus lectus nisl at nisi.
			Suspendisse euismod vulputate turpis vitae tristique. Aenean tincidunt enim quis ante pellentesque imperdiet.

			<Code {code} className="py-3 px-2 px-sm-4 code-sample" />
		</Section>

		<Section label="Nullam Enim" id="nullam-enim" level={2}>
			Quisque molestie lacinia justo eget pharetra. Phasellus et metus mattis libero consequat vestibulum. Nam vitae dignissim sem, eu egestas libero.
			Quisque fringilla quis ex vitae auctor. Nullam enim mi, posuere nec tempus a, tristique vel nisi. Nulla volutpat turpis eget turpis tempor
			scelerisque. Nunc nec vehicula elit, at molestie nisi.
		</Section>

		<Section label="Vehicula Felis" id="vehicula-felis" level={2}>
			In a ante vehicula felis ullamcorper sagittis. Sed dignissim mi sit amet magna vulputate rutrum. Donec pretium rhoncus posuere. Sed sit amet
			erat quam. Mauris eu nulla pharetra, malesuada quam non, vestibulum erat. Sed malesuada elit eu tellus elementum, quis congue dui lacinia. Donec
			facilisis erat purus, nec ornare sapien aliquet eget. Aliquam erat volutpat. Duis a eros magna. Donec varius neque non dignissim feugiat. Nullam
			pellentesque egestas tempor. Maecenas accumsan turpis est, eu efficitur ex tempor posuere. Nam interdum aliquam nibh, eu ultrices velit pharetra
			in. Etiam vitae urna hendrerit nisi ornare imperdiet eget in nisl.
		</Section>
	</div>

	<TableOfContents {visibleElements$} {elements$} />
</div>
