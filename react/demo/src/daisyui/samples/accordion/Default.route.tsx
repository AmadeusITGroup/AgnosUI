import {Accordion, AccordionItem} from './Accordion';

export default () => (
	<Accordion closeOthers itemDestroyOnHide>
		<AccordionItem header="First header" visible>
			First content
		</AccordionItem>
		<AccordionItem header="Second header">Second content</AccordionItem>
		<AccordionItem header="Third header">Third content</AccordionItem>
	</Accordion>
);
