import {Collapse} from '@agnos-ui/react-bootstrap/components/collapse';
import {useState} from 'react';

const CollapseDemo = () => {
	const [visible, setVisible] = useState(true);
	const id = 'auId-0';
	return (
		<>
			<button className="btn btn-primary mb-2" type="button" aria-expanded={visible} aria-controls={id} onClick={() => setVisible(!visible)}>
				Toggle collapse
			</button>
			<Collapse id={id} visible={visible} onHidden={() => console.log('Hidden')}>
				<div className="card card-body">Visible content</div>
			</Collapse>
		</>
	);
};

export default CollapseDemo;
