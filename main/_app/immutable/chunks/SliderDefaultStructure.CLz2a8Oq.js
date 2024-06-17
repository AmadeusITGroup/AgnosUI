const t=`<script>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';
import { Slot } from "@agnos-ui/svelte-headless/slot";
export let state;
export let widget;
$: slotContext = { widget, state };
<\/script>

{#each state.progressDisplayOptions as option}
	<div use:widget.directives.progressDisplayDirective={{option}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([widget.directives.progressDisplayDirective, {option}])} />
{/each}
<div use:widget.directives.clickableAreaDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.clickableAreaDirective)} />
{#if state.showMinMaxLabels}
	<div use:widget.directives.minLabelDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.minLabelDirective)}>
		<Slot slotContent={state.slotLabel} props={{value: state.min, ...slotContext}} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="label" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
	<div use:widget.directives.maxLabelDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.maxLabelDirective)}>
		<Slot slotContent={state.slotLabel} props={{value: state.max, ...slotContext}} let:component let:props>
			<svelte:fragment slot="slot" let:props><slot name="label" {...props} /></svelte:fragment>
			<svelte:component this={component} {...props}>
				<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
				<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
				<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
			</svelte:component>
		</Slot>
	</div>
{/if}
{#if state.showValueLabels && state.combinedLabelDisplay}
	<div use:widget.directives.combinedHandleLabelDisplayDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.combinedHandleLabelDisplayDirective)}>
		{#if state.rtl}
			<Slot slotContent={state.slotLabel} props={{value: state.sortedValues[1], ...slotContext}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="label" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props}>
					<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
					<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				</svelte:component>
			</Slot> -
			<Slot slotContent={state.slotLabel} props={{value: state.sortedValues[0], ...slotContext}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="label" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props}>
					<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
					<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				</svelte:component>
			</Slot>
		{:else}
			<Slot slotContent={state.slotLabel} props={{value: state.sortedValues[0], ...slotContext}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="label" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props}>
					<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
					<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				</svelte:component>
			</Slot> -
			<Slot slotContent={state.slotLabel} props={{value: state.sortedValues[1], ...slotContext}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="label" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props}>
					<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
					<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				</svelte:component>
			</Slot>
		{/if}
	</div>
{/if}
{#each state.sortedHandles as item, i (item.id)}
	<Slot slotContent={state.slotHandle} props={{item, ...slotContext}} let:component let:props>
		<svelte:fragment slot="slot" let:props><slot name="handle" {...props} /></svelte:fragment>
		<svelte:component this={component} {...props}>
			<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
			<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
			<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
		</svelte:component>
	</Slot>
	{#if state.showValueLabels && !state.combinedLabelDisplay}
		<div use:widget.directives.handleLabelDisplayDirective={{index: i}} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes([widget.directives.handleLabelDisplayDirective, {index: i}])}>
			<Slot slotContent={state.slotLabel} props={{value: state.values[i], ...slotContext}} let:component let:props>
				<svelte:fragment slot="slot" let:props><slot name="label" {...props} /></svelte:fragment>
				<svelte:component this={component} {...props}>
					<svelte:fragment slot="handle" let:item let:state let:widget><slot name="handle" {item} {state} {widget} /></svelte:fragment>
					<svelte:fragment slot="label" let:state let:value let:widget><slot name="label" {state} {value} {widget} /></svelte:fragment>
					<svelte:fragment slot="structure" let:state let:widget><slot name="structure" {state} {widget} /></svelte:fragment>
				</svelte:component>
			</Slot>
		</div>
	{/if}
{/each}
`;export{t as default};
