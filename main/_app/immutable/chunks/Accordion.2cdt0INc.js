const e=`import type {AccordionApi, AccordionItemProps, AccordionProps, AccordionItemWidget} from '@agnos-ui/react-headless/components/accordion';
import {createAccordion} from '@agnos-ui/react-headless/components/accordion';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import type {WidgetFactory} from '@agnos-ui/react-headless/types';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {Context, PropsWithChildren, ReactNode, KeyboardEvent} from 'react';
import {createContext, useContext, useEffect} from 'react';

const AccordionDIContext: Context<Partial<AccordionApi>> = createContext({});

export const Accordion = (
	props: PropsWithChildren<Partial<Pick<AccordionProps, 'closeOthers' | 'onShown' | 'onHidden' | 'itemDestroyOnHide' | 'className'>>>,
) => {
	const [
		,
		{
			api,
			directives: {accordionDirective},
		},
	] = useWidgetWithConfig(createAccordion, props, 'accordion');
	return (
		<AccordionDIContext.Provider value={api}>
			<div {...useDirectives([classDirective, 'flex flex-col gap-2'], accordionDirective)}>{props.children}</div>
		</AccordionDIContext.Provider>
	);
};

export const AccordionItem = (
	props: PropsWithChildren<
		Partial<
			Pick<AccordionItemProps, 'itemClass' | 'itemDestroyOnHide' | 'onItemVisibleChange' | 'itemVisible' | 'onItemHidden' | 'onItemShown' | 'itemId'>
		>
	> & {header: ReactNode},
) => {
	const {registerItem} = useContext(AccordionDIContext);
	const itemTransition = createSimpleClassTransition({
		showClasses: ['collapse-open'],
		animationPendingShowClasses: ['collapse-open'],
	});
	const [
		{shouldBeInDOM},
		{
			api,
			directives: {accordionItemDirective, transitionDirective, toggleDirective, bodyContainerAttrsDirective},
		},
	] = useWidgetWithConfig(registerItem as WidgetFactory<AccordionItemWidget>, props, null, {itemTransition});
	useEffect(api.initDone, []);
	const onEnter = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			api.toggle();
		}
	};

	return (
		<div {...useDirectives([classDirective, 'collapse collapse-arrow bg-base-200'], accordionItemDirective, transitionDirective)}>
			<div
				role="button"
				tabIndex={0}
				{...useDirectives([classDirective, 'collapse-title text-xl font-medium focus-visible:outline-none'], toggleDirective)}
				onKeyDown={onEnter}
			>
				{props.header}
			</div>
			<div className="collapse-content" {...useDirective(bodyContainerAttrsDirective)}>
				{shouldBeInDOM && props.children}
			</div>
		</div>
	);
};
`;export{e as default};
