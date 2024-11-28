const n=`import {Tree, type TreeItem} from '@agnos-ui/react-bootstrap/components/tree';

const BasicDemo = () => {
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
	return <Tree nodes={nodes} />;
};

export default BasicDemo;
`;export{n as default};
