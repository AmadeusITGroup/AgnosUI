<script lang="ts">
	import Section from '$lib/layout/Section.svelte';
	import Style from '$lib/layout/Style.svelte';
	import sliderCssVars from '@agnos-ui/styles/core-bootstrap/_slider?slider-css-vars';
	import sliderVars from '@agnos-ui/styles/core-bootstrap/_variables?slider-vars';
</script>

<Section label="CSS Variables" level={2}>
	<Style style={sliderCssVars}></Style>
</Section>

<Section label="SCSS Variables" level={2}>
	<Style style={sliderVars}></Style>
</Section>
