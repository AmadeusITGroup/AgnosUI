<script lang="ts">
	import {normalizedType, textToLines} from '../../../app';
	import type {PropertyDoc} from '@agnos-ui/doc/types';
	import Code from '../Code.svelte';
	import Section from '$lib/layout/Section.svelte';

	const noDefault = {};

	export let title: string;
	export let properties: PropertyDoc[];
	export let defaultValues: Record<string, any> = noDefault;
	$: titleLowercase = title.toLowerCase();

	$: hasDefaults = defaultValues !== noDefault;
</script>

{#if properties.length}
	<Section label={title} id={titleLowercase} level={2} headerClassName="my-4">
		{#each properties as { name, type, description, defaultValue } (name)}
			{@const lines = textToLines(description)}
			<Section label={name} id="{titleLowercase}-{name}" level={3} headerClassName="text-primary">
				<div class="mb-3"><span class="fw-bold">Type:</span> <code>{type}</code></div>
				<div class="mb-3">
					{#each lines as line}
						{line}<br />
					{/each}
				</div>
				{#if hasDefaults && defaultValue}
					{@const nType = normalizedType(type)}
					<div class="mb-3">
						<span class="fw-bold">Default value:</span>
						{#if nType === 'function'}
							<div class="my-2">
								<Code code={defaultValue} language="typescript" />
							</div>
						{:else}
							<code>{'' + defaultValue}</code>
						{/if}
					</div>
				{/if}
			</Section>
			{#if hasDefaults && defaultValue}
				{@const nType = normalizedType(type)}
				<div class="mb-3">
					<span class="fw-bold">Default value:</span>
					{#if nType === 'function'}
						<div class="my-2">
							<Code code={defaultValue} language="typescript" />
						</div>
					{:else}
						<code>{'' + defaultValue}</code>
					{/if}
				</div>
			{/if}
			<hr />
		{/each}
	</Section>
{/if}

<style>
	code {
		font-size: 0.875em;
		color: var(--bs-code-color);
		word-wrap: break-word;
	}
</style>
