<script lang="ts">
	import {Tree, type TreeItem} from '@agnos-ui/svelte-bootstrap/components/tree';

	const nodes: TreeItem[] = [
		{
			label: 'Node 1',
			isExpanded: true,
			children: [
				{
					label: 'Node 1.1',
					children: [
						{
							label: 'Node 1.1.1',
						},
					],
				},
				{
					label: 'Node 1.2',
					children: [
						{
							label: 'Node 1.2.1',
						},
					],
				},
			],
		},
	];
</script>

<Tree {nodes} />
