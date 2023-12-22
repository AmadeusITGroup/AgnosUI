<script lang="ts" context="module">
	import type {SliderProps as Props} from '@agnos-ui/svelte-headless/components/slider';
	import {createSlider} from '@agnos-ui/svelte-headless/components/slider';
	import {callWidgetFactory} from '@agnos-ui/svelte-headless/config';
</script>

<script lang="ts">
	// cf https://github.com/ota-meshi/eslint-plugin-svelte/issues/348
	type $$Props = Partial<Props>; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let values: number[] | undefined = undefined;

	const widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		$$slots,
		$$props,
		events: {
			onValuesChange: function (newValues: number[]): void {
				values = newValues;
			},
		},
	});

	const {
		stores: {
			className$,
			combinedLabelDisplay$,
			combinedLabelPositionLeft$,
			combinedLabelPositionTop$,
			disabled$,
			handleDisplayOptions$,
			max$,
			maxValueLabelDisplay$,
			min$,
			minValueLabelDisplay$,
			progressDisplayOptions$,
			readonly$,
			sortedHandles$,
			sortedValues$,
			values$,
			vertical$,
			showValueLabels$,
			showMinMaxLabels$,
			rtl$,
		},
		actions: {click, keydown, mouseDown},
		directives: {sliderDirective, minLabelDirective, maxLabelDirective},
		patchChangedProps,
	} = widget;
	$: patchChangedProps($$props);
</script>

<!-- on:blur={onTouched} ?? -->
<div use:sliderDirective class={`au-slider ${$vertical$ ? 'au-slider-vertical' : 'au-slider-horizontal'} ${$className$}`} class:disabled={$disabled$}>
	{#each $progressDisplayOptions$ as option}
		<div
			class="au-slider-progress"
			style:left={`${option.left}%`}
			style:right={`${option.right}%`}
			style:bottom={`${option.bottom}%`}
			style:top={`${option.top}%`}
			style:width={`${option.width}%`}
			style:height={`${option.height}%`}
		/>
	{/each}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class={$vertical$ ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'} on:click={click} />
	{#if $showMinMaxLabels$}
		<div
			class={`${$vertical$ ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'}`}
			class:invisible={!$minValueLabelDisplay$}
			class:au-slider-rtl={$rtl$}
			use:minLabelDirective
		>
			{$min$}
		</div>
		<div
			class={`${$vertical$ ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'}`}
			class:invisible={!$maxValueLabelDisplay$}
			class:au-slider-rtl={$rtl$}
			use:maxLabelDirective
		>
			{$max$}
		</div>
	{/if}
	{#if $showValueLabels$ && $combinedLabelDisplay$}
		<div
			class={$vertical$ ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
			style:left={`${$combinedLabelPositionLeft$}%`}
			style:top={`${$combinedLabelPositionTop$}%`}
		>
			{#if $rtl$}
				{$sortedValues$[1]} - {$sortedValues$[0]}
			{:else}
				{$sortedValues$[0]} - {$sortedValues$[1]}
			{/if}
		</div>
	{/if}
	{#each $sortedHandles$ as item, i (item.id)}
		<button
			class={`au-slider-handle ${$vertical$ ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'}`}
			role="slider"
			aria-valuemin={$min$}
			aria-valuemax={$max$}
			aria-readonly={$readonly$ ? true : null}
			aria-disabled={$disabled$ ? true : null}
			aria-valuenow={item.value}
			aria-valuetext={'' + item.value}
			aria-label={item.ariaLabel}
			aria-orientation={$vertical$ ? 'vertical' : null}
			disabled={$disabled$ ? true : null}
			style:left={`${$handleDisplayOptions$[item.id].left}%`}
			style:top={`${$handleDisplayOptions$[item.id].top}%`}
			on:keydown={(e) => keydown(e, item.id)}
			on:mousedown={(e) => mouseDown(e, item.id)}
		>
			&nbsp;
		</button>
		{#if $showValueLabels$ && !$combinedLabelDisplay$}
			<div
				class={$vertical$ ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
				style:left={`${$handleDisplayOptions$[i].left}%`}
				style:top={`${$handleDisplayOptions$[i].top}%`}
			>
				{$values$[i]}
			</div>
		{/if}
	{/each}
</div>
