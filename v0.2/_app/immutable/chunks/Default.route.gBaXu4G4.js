const o=`import {Accordion, AccordionItem} from '@agnos-ui/react/components/accordion';
import BODY from './body.txt?raw';

const fancyHeader = () => (
	<span>
		&#9733; <b>Fancy</b> title &#9733;
	</span>
);

const AccordionDemo = () => (
	<Accordion>
		<AccordionItem slotItemHeader="Simple" slotItemBody={BODY} itemVisible={true} />
		<AccordionItem slotItemHeader={fancyHeader} slotItemBody={BODY} />
		<AccordionItem slotItemHeader="Disabled" slotItemBody={BODY} itemDisabled />
	</Accordion>
);
export default AccordionDemo;
`;export{o as default};
