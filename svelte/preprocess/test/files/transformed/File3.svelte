<script context="module">
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	// this file does not use any class attribute on the same element as the directive
	// so the classDirective function should not be imported in the transformed file
	const myDirective = () => {};
</script>

<div class="something">
	<div use:myDirective {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(myDirective)}></div>
</div>
