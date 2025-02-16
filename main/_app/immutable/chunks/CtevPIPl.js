const e=`<script lang="ts">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {ToastContext} from './toast.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: ToastContext = $props();
	let state = widget.state;
<\/script>

{#if state.header}
	<div class="toast-header">
		<Slot content={state.header} props={widget} />
		{#if state.dismissible}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button use:__AgnosUISveltePreprocess__classDirective={"btn-close me-0 ms-auto"} use:widget.directives.closeButtonDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.closeButtonDirective, [__AgnosUISveltePreprocess__classDirective, "btn-close me-0 ms-auto"])}></button>
		{/if}
	</div>
{/if}

<div class="toast-body">
	<Slot content={state.children} props={widget} />
</div>
{#if state.dismissible && !state.header}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button use:__AgnosUISveltePreprocess__classDirective={"btn-close btn-close-white me-2 m-auto"} use:widget.directives.closeButtonDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.closeButtonDirective, [__AgnosUISveltePreprocess__classDirective, "btn-close btn-close-white me-2 m-auto"])}></button>
{/if}
`;export{e as default};
