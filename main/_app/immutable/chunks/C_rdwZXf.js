const t=`<script lang="ts">
	import Tree from './Tree.svelte';
	import {type TreeItem} from '@agnos-ui/svelte-headless/components/tree';

	const navSelector = (node: HTMLElement) => node.querySelectorAll<HTMLSpanElement>('span.au-tree-expand-icon');
	const nodes: TreeItem[] = [
		{
			label: 'resume.pdf',
		},
		{
			label: 'My Files',
			isExpanded: true,
			children: [
				{
					label: 'Project-final.psd',
				},
				{
					label: 'Project-final-2.psd',
				},
				{
					label: 'Images',
					children: [
						{
							label: 'Screenshot1.png',
						},
						{
							label: 'Screenshot2.png',
						},
						{
							label: 'Others',
							children: [
								{
									label: 'Screenshot3.png',
								},
							],
						},
					],
				},
			],
		},
		{
			label: 'reports-final-2.pdf',
		},
	];
<\/script>

<div class="flex justify-center">
	<Tree {nodes} {navSelector} />
</div>
`;export{t as default};
