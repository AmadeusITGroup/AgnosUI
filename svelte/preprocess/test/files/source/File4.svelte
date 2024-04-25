<script context="module">
	const myDirective = () => {};
</script>

<script>
	export let myExtraClass = '';
</script>

<div use:myDirective class="myClass {myExtraClass}"></div>
