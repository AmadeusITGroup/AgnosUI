import {Accordion, AccordionItem} from '@agnos-ui/react';

const secondSlot = () => <>Second content</>;

const fancyHeader = () => (
	<span>
		&#9733; <b>Fancy</b> title &#9733;
	</span>
);

const AccordionDemo = () => (
	<Accordion>
		<AccordionItem slotItemHeader="Simple header" slotItemBody={'First content'} itemCollapsed={false} itemId={'item-1'} />
		<AccordionItem slotItemHeader={fancyHeader} slotItemBody={secondSlot} itemId={'item-2'} />
		<AccordionItem slotItemHeader="Disabled" slotItemBody={'Third content'} itemDisabled={true} itemId={'item-3'} />
	</Accordion>
);
export default AccordionDemo;
