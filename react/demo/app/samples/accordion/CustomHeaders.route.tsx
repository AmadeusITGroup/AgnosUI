import {Accordion, AccordionItem, useDirective} from '@agnos-ui/react';
import type {AccordionItemContext} from '@agnos-ui/react';
import {useRef, useState} from 'react';
import type {AccordionWidget} from '@agnos-ui/core';
import '@agnos-ui/common/samples/accordion/custom.scss';
import BODY from '@agnos-ui/common/samples/accordion/body.txt?raw';

const AccordionDemo = () => {
	const refAccordion = useRef<AccordionWidget['api']>();
	const [thirdItemDisabled, setThirdItemDisabled] = useState<boolean>(false);

	const Collapse = (props: {slotContext: AccordionItemContext}) => {
		const {state, widget} = props.slotContext;
		const collapseSetRef = useDirective(widget.directives.collapseDirective);
		return (
			<>
				{state.shouldBeInDOM ? (
					<div
						className={`accordion-collapse ${state.itemCollapseClass}`}
						id={`${state.itemId}-collapse`}
						aria-labelledby={`${state.itemId}-toggle`}
						ref={collapseSetRef}
					>
						<div className={`accordion-body ${state.itemBodyClass}`}>{BODY}</div>
					</div>
				) : null}
			</>
		);
	};

	const StructureOne = (slotContext: AccordionItemContext) => {
		return (
			<>
				<div
					className={`${slotContext.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${
						slotContext.state.itemVisible ? '' : 'collapsed'
					}`}
					role="heading"
					aria-level={2}
				>
					<p className="m-0">First panel - {slotContext.state.itemVisible ? 'opened' : 'collapsed'}</p>
					<button
						type="button"
						id={`${slotContext.state.itemId}-toggle`}
						onClick={slotContext.widget.actions.click}
						className={`btn btn-link p-0 ${slotContext.state.itemButtonClass} ${slotContext.state.itemVisible ? '' : 'collapsed'}`}
						disabled={slotContext.state.itemDisabled}
						aria-controls={`${slotContext.state.itemId}-collapse`}
						aria-disabled={slotContext.state.itemDisabled}
						aria-expanded={slotContext.state.itemVisible}
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
					className={`${slotContext.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${
						slotContext.state.itemVisible ? '' : 'collapsed'
					}`}
					role="heading"
					aria-level={2}
				>
					<p className="m-0">Second panel</p>
					<div>
						<button
							type="button"
							className={`btn btn-sm btn-outline-primary me-2 ${slotContext.state.itemButtonClass} ${
								slotContext.state.itemVisible ? '' : 'collapsed'
							}`}
							id={`${slotContext.state.itemId}-toggle`}
							onClick={slotContext.widget.actions.click}
							disabled={slotContext.state.itemDisabled}
							aria-controls={`${slotContext.state.itemId}-collapse`}
							aria-disabled={slotContext.state.itemDisabled}
							aria-expanded={slotContext.state.itemVisible}
						>
							Toggle second
						</button>
						<button type="button" className="btn btn-sm btn-outline-secondary me-2" onClick={() => setThirdItemDisabled((disabled) => !disabled)}>
							{thirdItemDisabled ? 'En' : 'Dis'}able third
						</button>
						<button type="button" className="btn btn-sm btn-outline-danger me-2" onClick={() => refAccordion.current?.collapseAll?.()}>
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
					className={`${slotContext.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${
						slotContext.state.itemVisible ? '' : 'collapsed'
					}`}
					role="heading"
					aria-level={2}
				>
					<button
						type="button"
						className={`p-0 btn btn-link container-fluid text-start ${slotContext.state.itemButtonClass} ${
							slotContext.state.itemVisible ? '' : 'collapsed'
						} `}
						id={`${slotContext.state.itemId}-toggle`}
						onClick={slotContext.widget.actions.click}
						disabled={slotContext.state.itemDisabled}
						aria-disabled={slotContext.state.itemDisabled}
						aria-controls={`${slotContext.state.itemId}-collapse`}
						aria-expanded={slotContext.state.itemVisible}
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
