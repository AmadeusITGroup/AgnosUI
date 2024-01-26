<script lang="ts">
	import mermaid, {type MermaidConfig} from 'mermaid';
	export let code: string;

	const mermaidDirective = (element: HTMLElement, config: MermaidConfig = {}) => {
		const renderMermaid = async () => {
			const {svg} = await mermaid.render('mermaid', code);
			element.innerHTML = svg;
		};
		mermaid.initialize(config);
		if (code) {
			renderMermaid();
		}
		return {
			update: (newConfig: MermaidConfig) => {
				config = newConfig;
				mermaid.initialize(config);
				if (code) {
					renderMermaid();
				}
			},
		};
	};
</script>

<div use:mermaidDirective class={`bg-light-subtle doc p-1 d-flex flex-nowrap align-items-start py-2  px-2 px-sm-4`}></div>

<style lang="scss">
</style>
