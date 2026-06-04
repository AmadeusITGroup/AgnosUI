const e=`<script lang="ts" generics="Data">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	import type {ModalContext} from './modal.gen';
	import {Slot} from '@agnos-ui/svelte-headless/slot';

	let widget: ModalContext<Data> = $props();
<\/script>

<h5 class="modal-title">
	<Slot content={widget.state.title} props={widget} />
</h5>
{#if widget.state.closeButton}
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<button use:__AgnosUISveltePreprocess__classDirective={"btn-close"} use:widget.directives.closeButtonDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(widget.directives.closeButtonDirective, [__AgnosUISveltePreprocess__classDirective, "btn-close"])}></button>
{/if}
`;export{e as default};
