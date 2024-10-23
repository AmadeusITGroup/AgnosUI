<script>
	const directive1 = () => {};
	const directive2 = () => {};
	const directive3 = () => {};

	/**
	 * @typedef {Object} Props
	 * @property {number} [b]
	 * @property {any} [array]
	 * @property {any} [promise]
	 * @property {any} [myAttr]
	 */

	/** @type {Props} */
	let {b = 1, array = [], promise = new Promise(() => {}), myAttr = {a: 1, b: 2}} = $props();
</script>

<div use:directive1>
	<div use:directive2={2} use:directive3></div>
	{#if b === 1}
		<div use:directive1 {...myAttr}>b is 1</div>
	{:else if b === 2}
		<div use:directive1>b is 2</div>
	{:else}
		<div use:directive1>b is something else than 1 or 2</div>
	{/if}
	{#each array as item}
		<div use:directive1>item {item}</div>
	{/each}
	{#await promise}
		<div use:directive1>promise is loading</div>
	{:then _value}
		<div use:directive1>promise is resolved</div>
	{:catch _error}
		<div use:directive1>promise is in error</div>
	{/await}
</div>
