const r=`import type {DrawerApi} from '@agnos-ui/react-bootstrap/components/drawer';
import {Drawer} from '@agnos-ui/react-bootstrap/components/drawer';
import {useRef} from 'react';
import './sizes.css';

const BasicDemo = () => {
	const refDrawer = useRef<DrawerApi>(null);

	return (
		<>
			<button className="btn btn-primary mb-3" onClick={() => refDrawer.current?.open()}>
				Open Drawer
			</button>
			<Drawer ref={refDrawer} className="drawer-custom-size inline-start" header={<>Hi, I am drawer!</>} resizable>
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
`;export{r as default};
