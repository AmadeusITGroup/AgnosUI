<script lang="ts">
	import {normalizedType, textToLines} from '../../../app';
	import type {PropertyDoc} from '@agnos-ui/doc/types';
	import Code from '../Code.svelte';
	import LinkHeading from '$lib/link-heading/LinkHeading.svelte';

	const noDefault = {};

	export let title: string;
	export let properties: PropertyDoc[];
	export let defaultValues: Record<string, any> = noDefault;
	$: titleLowercase = title.toLowerCase();

	$: hasDefaults = defaultValues !== noDefault;
</script>

{#if properties.length}
	<section class="mb-3">
		<div class="border pb-3 border-0 border-bottom">
			<LinkHeading label={title} id={titleLowercase} level={2} />
		</div>
		{#each properties as { name, type, description, defaultValue } (name)}
			{@const lines = textToLines(description)}
			<div class="my-4 pb-3 border-bottom">
				<LinkHeading label={name} id="{titleLowercase}-{name}" level={3} className="text-primary" />
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
			</div>
		{/each}
	</section>
{/if}

<style>
	code {
		font-size: 0.875em;
		color: var(--bs-code-color);
		word-wrap: break-word;
	}
</style>
