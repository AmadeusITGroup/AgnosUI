import {type TreeItem} from '@agnos-ui/react-headless/components/tree';
import {Tree} from './Tree';

const DaisyUIDemo = () => {
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

	return (
		<div className="flex justify-center">
			<Tree nodes={nodes} navSelector={navSelector} />
		</div>
	);
};

export default DaisyUIDemo;
