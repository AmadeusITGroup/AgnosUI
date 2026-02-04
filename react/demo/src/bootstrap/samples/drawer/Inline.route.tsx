import type {DrawerApi} from '@agnos-ui/react-bootstrap/components/drawer';
import {Drawer} from '@agnos-ui/react-bootstrap/components/drawer';
import {useRef, useState} from 'react';
import './inline.css';

type DrawerTypes = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';

const InlineDemo = () => {
	const refDrawer = useRef<DrawerApi>(null);
	const [placement, setPlacement] = useState<DrawerTypes>('inline-start');
	const [visible, setVisible] = useState(true);

	const toggleDrawer = async () => {
		if (visible) {
			await refDrawer.current?.close();
		} else {
			await refDrawer.current?.open();
		}
	};

	return (
		<>
			<button className="btn btn-primary mb-3" onClick={toggleDrawer}>
				Toggle Inline Drawer
			</button>
			<div className="d-flex align-items-center mb-3">
				<label htmlFor="drawerPlacement" className="me-3">
					Placement:
				</label>
				<select id="drawerPlacement" className="w-auto form-select" onChange={(e) => setPlacement(e.target.value as DrawerTypes)} value={placement}>
					<option value="inline-start">Left</option>
					<option value="inline-end">Right</option>
					<option value="block-start">Top</option>
					<option value="block-end">Bottom</option>
				</select>
			</div>

			<div className={`d-flex demo-inline-drawer ${placement.includes('block') ? 'flex-column' : ''}`}>
				<div style={{order: placement.endsWith('end') ? 2 : 1}}>
					<Drawer
						ref={refDrawer}
						header={
							<>
								<h2>Inline Drawer</h2>
								<button className="btn-close ms-auto" onClick={() => refDrawer.current?.close()} aria-label="Close"></button>
							</>
						}
						className={placement}
						resizable
						inline
						onVisibleChange={setVisible}
						visible
					>
						<div className="p-3">
							<h6>Drawer Content</h6>
							<ul>
								<li>No backdrop overlay</li>
								<li>Stays in document flow</li>
								<li>Pushes page content</li>
								<li>Page remains scrollable</li>
								<li>Fully interactable</li>
							</ul>
						</div>
					</Drawer>
				</div>

				<div className="flex-grow-1 p-3" style={{order: placement.endsWith('end') ? 1 : 2}}>
					<h6>Main Page Content</h6>
					<p>This content is pushed aside by the inline drawer. You can interact with everything on this page even when the drawer is open.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<button className="btn btn-secondary">Clickable Button</button>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<input type="text" className="form-control mt-2" placeholder="Type here..." />
					<p className="mt-2">
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident.
					</p>
				</div>
			</div>
		</>
	);
};

export default InlineDemo;
