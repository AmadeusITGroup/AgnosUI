import type {AccordionApi, AccordionItemProps, AccordionProps, AccordionItemWidget} from '@agnos-ui/react-headless/components/accordion';
import {createAccordion} from '@agnos-ui/react-headless/components/accordion';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import type {WidgetFactory} from '@agnos-ui/react-headless/types';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {Context, PropsWithChildren, ReactNode, KeyboardEvent} from 'react';
import {createContext, useContext, useEffect, useId} from 'react';

const AccordionDIContext: Context<Partial<AccordionApi>> = createContext({});

export const Accordion = (
	props: PropsWithChildren<Partial<Pick<AccordionProps, 'closeOthers' | 'onItemShown' | 'onItemHidden' | 'itemDestroyOnHide' | 'className'>>>,
) => {
	const {
		api,
		directives: {accordionDirective},
	} = useWidgetWithConfig(createAccordion, props, 'accordion');
	return (
		<AccordionDIContext value={api}>
			<div {...useDirectives([classDirective, 'flex flex-col gap-2'], accordionDirective)}>{props.children}</div>
		</AccordionDIContext>
	);
};

export const AccordionItem = (
	props: PropsWithChildren<
		Partial<Pick<AccordionItemProps, 'className' | 'destroyOnHide' | 'onVisibleChange' | 'visible' | 'onHidden' | 'onShown' | 'id'>>
	> & {header: ReactNode},
) => {
	const {registerItem} = useContext(AccordionDIContext);
	const transition = createSimpleClassTransition({
		showClasses: ['collapse-open'],
		animationPendingShowClasses: ['collapse-open'],
	});
	const id = useId();
	const {
		state: {shouldBeInDOM},
		api,
		directives: {itemDirective, transitionDirective, toggleDirective, bodyContainerAttrsDirective},
	} = useWidgetWithConfig(registerItem as WidgetFactory<AccordionItemWidget>, props, null, {transition, id});
	useEffect(() => api.initDone(), [api]);
	const onEnter = (e: KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			api.toggle();
		}
	};

	return (
		<div
			{...useDirectives(
				[classDirective, 'collapse collapse-arrow bg-base-100 border border-base-300 has-[:focus-visible]:ring'],
				itemDirective,
				transitionDirective,
			)}
		>
			<div
				role="button"
				tabIndex={0}
				{...useDirectives([classDirective, 'collapse-title font-semibold focus-visible:outline-hidden'], toggleDirective)}
				onKeyDown={onEnter}
			>
				{props.header}
			</div>
			<div className="collapse-content text-sm" {...useDirective(bodyContainerAttrsDirective)}>
				{shouldBeInDOM && props.children}
			</div>
		</div>
	);
};
