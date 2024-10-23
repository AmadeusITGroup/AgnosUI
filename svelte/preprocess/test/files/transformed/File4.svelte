<script module>
import {ssrAttributes as __AgnosUISveltePreprocess__ssrAttributes, classDirective as __AgnosUISveltePreprocess__classDirective} from '@agnos-ui/svelte-headless/utils/directive';
import {BROWSER as __AgnosUISveltePreprocess__BROWSER} from 'esm-env';

	const myDirective = () => {};
</script>

<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [myExtraClass]
	 */

	/** @type {Props} */
	let {myExtraClass = ''} = $props();
</script>

<div use:myDirective use:__AgnosUISveltePreprocess__classDirective={"myClass "+(myExtraClass)} {...__AgnosUISveltePreprocess__BROWSER ? {} : __AgnosUISveltePreprocess__ssrAttributes(myDirective, [__AgnosUISveltePreprocess__classDirective, "myClass "+(myExtraClass)])}></div>
