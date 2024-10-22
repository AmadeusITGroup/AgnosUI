import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import {Accordion, AccordionItem} from '@agnos-ui/react-bootstrap/components/accordion';
import type {AccordionApi, AccordionItemContext} from '@agnos-ui/react-bootstrap/components/accordion';
import {useRef, useState} from 'react';
import '@agnos-ui/common/samples/accordion/custom.scss';
import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';

const AccordionDemo = () => {
	const refAccordion = useRef<AccordionApi>(null);
	const [thirdItemDisabled, setThirdItemDisabled] = useState<boolean>(false);

	const Collapse = ({slotContext: {state, directives}}: {slotContext: AccordionItemContext}) => (
		<>
			{state.shouldBeInDOM ? (
				<div className="accordion-collapse" {...useDirective(directives.bodyContainerDirective)}>
					<div className="accordion-body" {...useDirective(directives.bodyDirective)}>
						{BODY}
					</div>
				</div>
			) : null}
		</>
	);

	const StructureOne = (slotContext: AccordionItemContext) => {
		return (
			<>
				<div
					className={`accordion-button accordion-header custom-header justify-content-between ${slotContext.state.visible ? '' : 'collapsed'}`}
					role="heading"
					aria-level={2}
					{...useDirective(slotContext.directives.headerDirective)}
				>
					<p className="m-0">First panel - {slotContext.state.visible ? 'opened' : 'collapsed'}</p>
					<button
						type="button"
						className={`btn btn-link p-0 ${slotContext.state.buttonClassName} au-accordion-item-button`}
						{...useDirective(slotContext.directives.toggleDirective)}
					>
						Toggle first
					</button>
				</div>
				<Collapse slotContext={slotContext}></Collapse>
			</>
		);
	};
	const StructureTwo = (slotContext: AccordionItemContext) => {
		return (
			<>
				<div
					className={`accordion-button accordion-header custom-header justify-content-between ${slotContext.state.visible ? '' : 'collapsed'}`}
					role="heading"
					aria-level={2}
					{...useDirective(slotContext.directives.headerDirective)}
				>
					<p className="m-0">Second panel</p>
					<div className="d-flex flex-wrap gap-2">
						<button
							type="button"
							className={`btn btn-sm btn-outline-primary ${slotContext.state.buttonClassName} au-accordion-item-button`}
							{...useDirective(slotContext.directives.toggleDirective)}
						>
							Toggle second
						</button>
						<button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => setThirdItemDisabled((disabled) => !disabled)}>
							{thirdItemDisabled ? 'En' : 'Dis'}able third
						</button>
						<button type="button" className="btn btn-sm btn-outline-danger" onClick={() => refAccordion.current?.collapseAll?.()}>
							Collapse all
						</button>
					</div>
				</div>
				<Collapse slotContext={slotContext}></Collapse>
			</>
		);
	};
	const StructureThree = (slotContext: AccordionItemContext) => {
		return (
			<>
				<div
					className={`accordion-button accordion-header custom-header justify-content-between ${slotContext.state.visible ? '' : 'collapsed'}`}
					role="heading"
					aria-level={2}
					{...useDirective(slotContext.directives.headerDirective)}
				>
					<button
						type="button"
						className={`p-0 btn btn-link container-fluid text-start ${slotContext.state.buttonClassName} au-accordion-item-button`}
						{...useDirective(slotContext.directives.toggleDirective)}
					>
						Third panel
					</button>
					{slotContext.state.disabled && <p className="text-muted m-0 small">[I&apos;m&nbsp;disabled]</p>}
				</div>
				<Collapse slotContext={slotContext}></Collapse>
			</>
		);
	};

	return (
		<Accordion ref={refAccordion}>
			<AccordionItem structure={StructureOne} />
			<AccordionItem structure={StructureTwo} />
			<AccordionItem structure={StructureThree} disabled={thirdItemDisabled} />
		</Accordion>
	);
};
export default AccordionDemo;
