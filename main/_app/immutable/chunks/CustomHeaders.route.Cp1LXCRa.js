const t=`import {useDirective} from '@agnos-ui/react/utils/directive';
import {Accordion, AccordionItem} from '@agnos-ui/react/components/accordion';
import type {AccordionApi, AccordionItemContext} from '@agnos-ui/react/components/accordion';
import {useRef, useState} from 'react';
import './custom.scss';
import BODY from './body.txt?raw';

const AccordionDemo = () => {
	const refAccordion = useRef<AccordionApi>(null);
	const [thirdItemDisabled, setThirdItemDisabled] = useState<boolean>(false);

	const Collapse = (props: {slotContext: AccordionItemContext}) => {
		const {state, widget} = props.slotContext;
		return (
			<>
				{state.shouldBeInDOM ? (
					<div className="accordion-collapse" ref={useDirective(widget.directives.bodyContainerDirective)}>
						<div className="accordion-body" ref={useDirective(widget.directives.bodyDirective)}>
							{BODY}
						</div>
					</div>
				) : null}
			</>
		);
	};

	const StructureOne = (slotContext: AccordionItemContext) => {
		return (
			<>
				<div
					className={\`accordion-button accordion-header custom-header justify-content-between \${slotContext.state.itemVisible ? '' : 'collapsed'}\`}
					role="heading"
					aria-level={2}
					ref={useDirective(slotContext.widget.directives.headerDirective)}
				>
					<p className="m-0">First panel - {slotContext.state.itemVisible ? 'opened' : 'collapsed'}</p>
					<button
						type="button"
						ref={useDirective(slotContext.widget.directives.toggleDirective)}
						className={\`btn btn-link p-0 \${slotContext.state.itemButtonClass} au-accordion-item-button\`}
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
					className={\`accordion-button accordion-header custom-header justify-content-between \${slotContext.state.itemVisible ? '' : 'collapsed'}\`}
					role="heading"
					aria-level={2}
					ref={useDirective(slotContext.widget.directives.headerDirective)}
				>
					<p className="m-0">Second panel</p>
					<div className="d-flex flex-wrap gap-2">
						<button
							type="button"
							className={\`btn btn-sm btn-outline-primary \${slotContext.state.itemButtonClass} au-accordion-item-button\`}
							ref={useDirective(slotContext.widget.directives.toggleDirective)}
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
					className={\`accordion-button accordion-header custom-header justify-content-between \${slotContext.state.itemVisible ? '' : 'collapsed'}\`}
					role="heading"
					aria-level={2}
					ref={useDirective(slotContext.widget.directives.headerDirective)}
				>
					<button
						type="button"
						className={\`p-0 btn btn-link container-fluid text-start \${slotContext.state.itemButtonClass} au-accordion-item-button\`}
						ref={useDirective(slotContext.widget.directives.toggleDirective)}
					>
						Third panel
					</button>
					{slotContext.state.itemDisabled ? <p className="text-muted m-0 small">[I&apos;m&nbsp;disabled]</p> : <></>}
				</div>
				<Collapse slotContext={slotContext}></Collapse>
			</>
		);
	};

	return (
		<Accordion ref={refAccordion}>
			<AccordionItem slotItemStructure={StructureOne} />
			<AccordionItem slotItemStructure={StructureTwo} />
			<AccordionItem slotItemStructure={StructureThree} itemDisabled={thirdItemDisabled} />
		</Accordion>
	);
};
export default AccordionDemo;
`;export{t as default};
