import {Accordion, AccordionItem} from '@agnos-ui/react-bootstrap/components/accordion';
import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';

const fancyHeader = () => (
	<span>
		&#9733; <b>Fancy</b> title &#9733;
	</span>
);

export default () => (
	<Accordion>
		<AccordionItem header="Simple" visible>
			{BODY}
		</AccordionItem>
		<AccordionItem header={fancyHeader}>{BODY}</AccordionItem>
		<AccordionItem header="Disabled" disabled>
			{BODY}
		</AccordionItem>
	</Accordion>
);
