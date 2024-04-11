const o=`import {Accordion, AccordionItem} from '@agnos-ui/react-bootstrap/components/accordion';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {useHashChange} from '../../../common/utils';

const AccordionDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig accordion={config}>
			<Accordion {...props}>
				<AccordionItem {...props} slotItemHeader="Header 1" slotItemBody="Body 1"></AccordionItem>
				<AccordionItem {...props} slotItemHeader="Header 2" slotItemBody="Body 2"></AccordionItem>
			</Accordion>
		</WidgetsDefaultConfig>
	);
};
export default AccordionDemo;
`;export{o as default};
