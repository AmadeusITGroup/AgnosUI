const o=`import type {AccordionApi, AccordionItemApi} from '@agnos-ui/react/components/accordion';
import {Accordion, AccordionItem} from '@agnos-ui/react/components/accordion';
import {useRef} from 'react';
import BODY from './body.txt?raw';

const AccordionDemo = () => {
	const refAccordion = useRef<AccordionApi>(null);
	const refSecondPanel = useRef<AccordionItemApi>(null);
	return (
		<>
			<Accordion ref={refAccordion}>
				<AccordionItem slotItemHeader="First panel" slotItemBody={BODY} itemId={'first'} />
				<AccordionItem slotItemHeader="Second panel" slotItemBody={BODY} itemId={'second'} ref={refSecondPanel} />
			</Accordion>
			<hr />
			<button className="btn btn-sm btn-outline-primary me-2" onClick={() => refAccordion.current?.toggle('first')}>
				Toggle first
			</button>
			<button className="btn btn-sm btn-outline-primary me-2" onClick={() => refSecondPanel.current?.toggle()}>
				Toggle second
			</button>
			<button className="btn btn-sm btn-outline-primary me-2" onClick={() => refAccordion.current?.expandAll()}>
				Expand all
			</button>
			<button className="btn btn-sm btn-outline-primary me-2" onClick={() => refAccordion.current?.collapseAll()}>
				Collapse all
			</button>
		</>
	);
};
export default AccordionDemo;
`;export{o as default};
