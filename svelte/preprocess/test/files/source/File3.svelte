<script context="module">
	// this file does not use any class attribute on the same element as the directive
	// so the classDirective function should not be imported in the transformed file
	const myDirective = () => {};
</script>

<div class="something">
	<div use:myDirective></div>
</div>
