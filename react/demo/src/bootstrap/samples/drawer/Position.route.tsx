import type {DrawerApi} from '@agnos-ui/react-bootstrap/components/drawer';
import {Drawer} from '@agnos-ui/react-bootstrap/components/drawer';
import {useRef, useState} from 'react';

type DrawerTypes = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

const BasicDemo = () => {
	const [placement, setPosition] = useState<DrawerTypes>('inline-start');
	const refDrawer = useRef<DrawerApi>(null);
	const [mounted, setMounted] = useState(false);
	const [width, setWidth] = useState(200);
	const [height, setHeight] = useState(200);

	function toggle() {
		setMounted(true);
		requestAnimationFrame(() => requestAnimationFrame(() => refDrawer.current?.open()));
	}

	function onHidden() {
		setMounted(false);
	}

	return (
		<>
			<button className="btn btn-primary mb-3" onClick={toggle}>
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
			{mounted && (
				<Drawer
					ref={refDrawer}
					className={placement}
					header={<>Hi, I am drawer!</>}
					resizable
					onHidden={onHidden}
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
			)}
		</>
	);
};

export default BasicDemo;
