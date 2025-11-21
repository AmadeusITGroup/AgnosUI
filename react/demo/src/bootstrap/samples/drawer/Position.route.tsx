import type {DrawerApi} from '@agnos-ui/react-bootstrap/components/drawer';
import {Drawer} from '@agnos-ui/react-bootstrap/components/drawer';
import {useRef, useState} from 'react';
import './position.css';

type DrawerTypes = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

const BasicDemo = () => {
	const [placement, setPosition] = useState<DrawerTypes>('inline-start');
	const refDrawer = useRef<DrawerApi>(null);

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
			<Drawer ref={refDrawer} className={`drawer-position-size ${placement}`} header={<>Hi, I am drawer!</>} resizable>
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
