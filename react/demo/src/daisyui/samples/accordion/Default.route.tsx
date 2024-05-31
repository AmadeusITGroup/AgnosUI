import {Accordion, AccordionItem} from './Accordion';

const AccordionDaisyUIDemo = () => (
	<Accordion closeOthers destroyOnHide>
		<AccordionItem header="First header" visible>
			First content
		</AccordionItem>
		<AccordionItem header="Second header">Second content</AccordionItem>
		<AccordionItem header="Third header">Third content</AccordionItem>
	</Accordion>
);
export default AccordionDaisyUIDemo;
