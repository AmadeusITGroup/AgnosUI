import {Accordion, AccordionItem} from '@agnos-ui/react-bootstrap/components/accordion';
import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';

const fancyHeader = () => (
	<span>
		&#9733; <b>Fancy</b> title &#9733;
	</span>
);

const AccordionDemo = () => (
	<Accordion>
		<AccordionItem slotItemHeader="Simple" itemVisible={true}>
			{BODY}
		</AccordionItem>
		<AccordionItem slotItemHeader={fancyHeader}>{BODY}</AccordionItem>
		<AccordionItem slotItemHeader="Disabled" itemDisabled>
			{BODY}
		</AccordionItem>
	</Accordion>
);
export default AccordionDemo;
