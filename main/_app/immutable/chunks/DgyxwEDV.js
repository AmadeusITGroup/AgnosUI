const e=`import type {DrawerApi} from '@agnos-ui/react-bootstrap/components/drawer';
import {Drawer} from '@agnos-ui/react-bootstrap/components/drawer';
import {useRef, useState} from 'react';

type DrawerTypes = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

const BasicDemo = () => {
	const [placement, setPosition] = useState<DrawerTypes>('inline-start');
	const refDrawer = useRef<DrawerApi>(null);
	const [width, setWidth] = useState(200);
	const [height, setHeight] = useState(150);

	return (
		<>
			<button className="btn btn-primary mb-3" onClick={() => refDrawer.current?.open()}>
				Open Drawer
			</button>
			<div className="d-flex align-items-center">
				<label htmlFor="drawerPlacement" className="me-3">
					Placement:
				</label>
				<select id="drawerPlacement" className="w-auto form-select" onChange={(e) => setPosition(e.target.value as DrawerTypes)} value={placement}>
					<option value="inline-start">Left</option>
					<option value="inline-end">Right</option>
					<option value="block-start">Top</option>
					<option value="block-end">Bottom</option>
				</select>
			</div>
			<Drawer
				ref={refDrawer}
				className={placement}
				header={<>Hi, I am drawer!</>}
				resizable
				width={width}
				height={height}
				onHeightChange={setHeight}
				onWidthChange={setWidth}
			>
				<ul>
					<li>First item</li>
					<li>Second item</li>
					<li>Third item</li>
				</ul>
			</Drawer>
		</>
	);
};

export default BasicDemo;
`;export{e as default};
