import {Accordion, AccordionItem} from '@agnos-ui/react';

const body = () => (
	<>
		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
		dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
		assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
		butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven&apos;t heard of them
		accusamus labore sustainable VHS.
	</>
);

const fancyHeader = () => (
	<span>
		&#9733; <b>Fancy</b> title &#9733;
	</span>
);

const AccordionDemo = () => (
	<Accordion>
		<AccordionItem slotItemHeader="Simple" slotItemBody={body} itemCollapsed={false} itemId={'item-1'} />
		<AccordionItem slotItemHeader={fancyHeader} slotItemBody={body} itemId={'item-2'} />
		<AccordionItem slotItemHeader="Disabled" slotItemBody={body} itemDisabled={true} itemId={'item-3'} />
	</Accordion>
);
export default AccordionDemo;
