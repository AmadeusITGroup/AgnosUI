<script lang="ts">
	import {normalizedType, textToLines} from '../../../app';
	import type {PropertyDoc} from '@agnos-ui/doc/types';
	import Code from '../Code.svelte';

	const noDefault = {};

	export let title: string;
	export let properties: PropertyDoc[];
	export let defaultValues: Record<string, any> = noDefault;

	$: hasDefaults = defaultValues !== noDefault;
</script>

{#if properties.length}
	<section class="mb-3">
		<h2 class="border pb-3 border-0 border-bottom">{title}</h2>
		{#each properties as { name, type, description, defaultValue } (name)}
			{@const lines = textToLines(description)}
			<div class="my-4 pb-3 border-bottom">
				<h3><a href="#{name}" class="link-offset-2">{name}</a></h3>
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
								<Code code={defaultValue} codeTitle={'function'} isSample={false} />
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
