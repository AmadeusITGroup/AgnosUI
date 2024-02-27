<script lang="ts">
	import type {SliderSlots} from '@agnos-ui/svelte-headless/components/slider';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	type $$Props = SliderSlots['structure'];
	type $$Slots = SliderSlots; // eslint-disable-line @typescript-eslint/no-unused-vars

	export let state: $$Props['state'];
	export let widget: $$Props['widget'];

	$: slotContext = {widget, state};
</script>

{#each state.progressDisplayOptions as option}
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
<div class={state.vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'} on:click={widget.actions.click} />
{#if state.showMinMaxLabels}
	<div
		class={`${state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'}`}
		class:invisible={!state.minValueLabelDisplay}
		class:au-slider-rtl={state.rtl}
		use:widget.directives.minLabelDirective
	>
		<Slot slotContent={state.slotLabel} props={{value: state.min, ...slotContext}} let:component let:props>
			<slot slot="slot" name="label" let:props {...props} />
			<svelte:component this={component} {...props}>
				<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
				<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
	<div
		class={`${state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'}`}
		class:invisible={!state.maxValueLabelDisplay}
		class:au-slider-rtl={state.rtl}
		use:widget.directives.maxLabelDirective
	>
		<Slot slotContent={state.slotLabel} props={{value: state.max, ...slotContext}} let:component let:props>
			<slot slot="slot" name="label" let:props {...props} />
			<svelte:component this={component} {...props}>
				<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
				<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
				<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
			</svelte:component>
		</Slot>
	</div>
{/if}
{#if state.showValueLabels && state.combinedLabelDisplay}
	<div
		class={state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
		style:left={`${state.combinedLabelPositionLeft}%`}
		style:top={`${state.combinedLabelPositionTop}%`}
	>
		{#if state.rtl}
			<Slot slotContent={state.slotLabel} props={{value: state.sortedValues[1], ...slotContext}} let:component let:props>
				<slot slot="slot" name="label" let:props {...props} />
				<svelte:component this={component} {...props}>
					<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
					<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
					<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
				</svelte:component>
			</Slot> -
			<Slot slotContent={state.slotLabel} props={{value: state.sortedValues[0], ...slotContext}} let:component let:props>
				<slot slot="slot" name="label" let:props {...props} />
				<svelte:component this={component} {...props}>
					<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
					<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
					<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
				</svelte:component>
			</Slot>
		{:else}
			<Slot slotContent={state.slotLabel} props={{value: state.sortedValues[0], ...slotContext}} let:component let:props>
				<slot slot="slot" name="label" let:props {...props} />
				<svelte:component this={component} {...props}>
					<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
					<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
					<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
				</svelte:component>
			</Slot> -
			<Slot slotContent={state.slotLabel} props={{value: state.sortedValues[1], ...slotContext}} let:component let:props>
				<slot slot="slot" name="label" let:props {...props} />
				<svelte:component this={component} {...props}>
					<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
					<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
					<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
				</svelte:component>
			</Slot>
		{/if}
	</div>
{/if}
{#each state.sortedHandles as item, i (item.id)}
	<Slot slotContent={state.slotHandle} props={{item, ...slotContext}} let:component let:props>
		<slot slot="slot" name="handle" let:props {...props} />
		<svelte:component this={component} {...props}>
			<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
			<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
			<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
		</svelte:component>
	</Slot>
	{#if state.showValueLabels && !state.combinedLabelDisplay}
		<div
			class={state.vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
			style:left={`${state.handleDisplayOptions[i].left}%`}
			style:top={`${state.handleDisplayOptions[i].top}%`}
		>
			<Slot slotContent={state.slotLabel} props={{value: state.values[i], ...slotContext}} let:component let:props>
				<slot slot="slot" name="label" let:props {...props} />
				<svelte:component this={component} {...props}>
					<slot name="handle" slot="handle" let:item let:state let:widget {item} {state} {widget} />
					<slot name="label" slot="label" let:state let:value let:widget {state} {value} {widget} />
					<slot name="structure" slot="structure" let:state let:widget {state} {widget} />
				</svelte:component>
			</Slot>
		</div>
	{/if}
{/each}
