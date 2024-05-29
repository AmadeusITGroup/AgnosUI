import {Accordion, AccordionItem} from './Accordion';

const AccordionDaisyUIDemo = () => (
	<Accordion closeOthers itemDestroyOnHide>
		<AccordionItem header="First header" itemVisible>
			First content
		</AccordionItem>
		<AccordionItem header="Second header">Second content</AccordionItem>
		<AccordionItem header="Third header">Third content</AccordionItem>
	</Accordion>
);
export default AccordionDaisyUIDemo;
