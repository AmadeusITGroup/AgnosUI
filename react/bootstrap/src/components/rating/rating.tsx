import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '../../config';
import {useDirective, useDirectives, useClassDirective} from '@agnos-ui/react-headless/utils/directive';
import React from 'react';
import {type RatingDirectives, type StarContext, createRating as coreCreateRating} from '@agnos-ui/core-bootstrap/components/rating';
import type {AdaptWidgetSlots, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';

export * from '@agnos-ui/react-headless/components/rating';

export type RatingWidget = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/rating').RatingWidget>;
export type RatingProps = WidgetProps<RatingWidget>;
export type RatingState = WidgetState<RatingWidget>;
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;

function Star({star, state, directive}: {star: StarContext; state: RatingState; directive: RatingDirectives['starDirective']}) {
	const arg = {index: star.index};
	return (
		<React.Fragment key={star.index}>
			<span className="visually-hidden">({star.index < state.visibleRating ? '*' : ' '})</span>
			<span {...useDirective(directive, arg)}>
				<Slot slotContent={state.slotStar} props={star}></Slot>
			</span>
		</React.Fragment>
	);
}

export function Rating(props: Partial<RatingProps>) {
	const [state, widget] = useWidgetWithConfig(createRating, props, 'rating');

	const {
		directives: {containerDirective, starDirective},
	} = widget;

	return (
		<div {...useDirectives([useClassDirective('d-inline-flex'), containerDirective])}>
			{state.stars.map((star) => (
				<Star key={star.index} star={star} state={state} directive={starDirective} />
			))}
		</div>
	);
}
