<script lang="ts">
	import type {WidgetDoc} from '@agnos-ui/doc/types';
	import DocSection from './DocSection.svelte';

	interface Props {
		doc: WidgetDoc;
	}

	let {doc}: Props = $props();
</script>

<DocSection title="Props" properties={doc.props} noLastHr={!doc.api.length} />
<DocSection title="Api" properties={doc.api} noLastHr />
