<script lang="ts">
	import {textToLines} from '../../../app';
	import type {PropertyDoc} from '@agnos-ui/doc/types';
	import Code from '../Code.svelte';
	import Section from '$lib/layout/Section.svelte';

	interface Props {
		title: string;
		properties: PropertyDoc[];
		noLastHr?: boolean;
	}

	let {title, properties, noLastHr = false}: Props = $props();
	let titleLowercase = $derived(title.toLowerCase());
</script>

{#if properties.length}
	<Section label={title} id={titleLowercase} level={2} headerClassName="my-6">
		{#each properties as { name, type, description, defaultValue }, i (name)}
			{@const lines = textToLines(description)}
			<Section label={name} id="{titleLowercase}-{name}" level={3} headerClassName="text-primary">
				<div class="d-flex flex-wrap gap-1 flex-column flex-md-row">
					<div class="grow-1 mb-4" style:flex-basis={type.length > 40 ? '90%' : '45%'}>
						<div class="mb-1">
							<span class="font-bold">Type:</span>
						</div>
						<Code code={type} language="typescript" noCopy />
					</div>
					{#if defaultValue}
						<div class="grow-1 mb-4" style:flex-basis="45%">
							<div class="mb-1"><span class="font-bold">Default value:</span></div>
							<Code code={defaultValue} language="typescript" noCopy />
						</div>
					{/if}
				</div>
				<div class="mb-4">
					{#each lines as line}
						{line}<br />
					{/each}
				</div>
			</Section>
			{#if !noLastHr || i < properties.length - 1}
				<hr />
			{/if}
		{/each}
	</Section>
{/if}
