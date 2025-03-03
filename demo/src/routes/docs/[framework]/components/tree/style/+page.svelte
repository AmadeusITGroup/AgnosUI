<script lang="ts">
	import Section from '$lib/layout/Section.svelte';
	import StyleCode from '$lib/layout/StyleCode.svelte';
	import treeCssVars from '@agnos-ui/styles/core-bootstrap/tree?tree-css-vars';
	import treeVars from '@agnos-ui/styles/core-bootstrap/_variables?tree-vars';
</script>

<p>
	You will need to import the styles defined in <code>@agnos-ui/core-bootstrap/css/tree.css</code> or
	<code>@agnos-ui/core-bootstrap/scss/tree.scss</code>
	<br />
	These styles are also exported in the global export <code>@agnos-ui/core-bootstrap/css/agnosui.css</code> or
	<code>@agnos-ui/core-bootstrap/scss/agnosui.scss</code>
</p>

<Section label="CSS Variables" level={2}>
	<StyleCode style={treeCssVars} />
</Section>

<Section label="SCSS Variables" level={2}>
	<StyleCode style={treeVars} />
</Section>
