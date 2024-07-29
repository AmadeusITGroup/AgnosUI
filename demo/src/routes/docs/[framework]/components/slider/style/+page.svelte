<script lang="ts">
	import Section from '$lib/layout/Section.svelte';
	import Style from '$lib/layout/Style.svelte';
	import sliderCssVars from '@agnos-ui/styles/core-bootstrap/slider?slider-css-vars';
	import sliderVars from '@agnos-ui/styles/core-bootstrap/_variables?slider-vars';
</script>

<p>
	You will need to import the styles defined in <code>@agnos-ui/core-bootstrap/css/slider.css</code> or
	<code>@agnos-ui/core-bootstrap/scss/slider.scss</code>
	<br />
	These styles are also exported in the global export <code>@agnos-ui/core-bootstrap/css/agnosui.css</code> or
	<code>@agnos-ui/core-bootstrap/scss/agnosui.scss</code>
</p>

<Section label="CSS Variables" level={2}>
	<Style style={sliderCssVars}></Style>
</Section>

<Section label="SCSS Variables" level={2}>
	<Style style={sliderVars}></Style>
</Section>
