<script module>
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

<div use:myDirective class="myClass {myExtraClass}"></div>
