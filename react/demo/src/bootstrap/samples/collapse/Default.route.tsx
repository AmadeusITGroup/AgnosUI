import type {CollapseApi} from '@agnos-ui/react-bootstrap/components/collapse';
import {Collapse} from '@agnos-ui/react-bootstrap/components/collapse';
import {useRef} from 'react';

const CollapseDemo = () => {
	const refCollapse = useRef<CollapseApi>(null);

	return (
		<>
			<button className="btn btn-primary m-2" type="button" onClick={() => refCollapse?.current?.open()}>
				Open collapse
			</button>
			<button className="btn btn-primary m-2" type="button" onClick={() => refCollapse?.current?.close()}>
				Close collapse
			</button>
			<button className="btn btn-primary m-2" type="button" onClick={() => refCollapse?.current?.toggle()}>
				Toggle collapse
			</button>
			<Collapse ref={refCollapse}>Visible content</Collapse>
		</>
	);
};

export default CollapseDemo;
