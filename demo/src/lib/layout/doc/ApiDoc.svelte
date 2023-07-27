<script lang="ts">
	import type {WidgetDoc} from '@agnos-ui/doc/types';
	import DocSection from './DocSection.svelte';

	export let doc: WidgetDoc;
	export let defaultValues: Record<string, any>;
</script>

<DocSection title="Props" properties={doc.props} {defaultValues} />
<DocSection title="Api" properties={doc.api} />
