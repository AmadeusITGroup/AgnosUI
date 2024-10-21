import type {CollapseApi} from '@agnos-ui/react-bootstrap/components/collapse';
import {Collapse} from '@agnos-ui/react-bootstrap/components/collapse';
import {useRef} from 'react';

const CollapseDemo = () => {
	const refCollapse = useRef<CollapseApi>(null);

	return (
		<>
			<p className="d-inline-flex gap-1">
				<button className="btn btn-primary" type="button" onClick={() => refCollapse?.current?.open()}>
					Open collapse
				</button>
				<button className="btn btn-primary" type="button" onClick={() => refCollapse?.current?.close()}>
					Close collapse
				</button>
				<button className="btn btn-primary" type="button" onClick={() => refCollapse?.current?.toggle()}>
					Toggle collapse
				</button>
			</p>
			<Collapse ref={refCollapse}>
				<div className="card card-body">Visible content</div>
			</Collapse>
		</>
	);
};

export default CollapseDemo;
