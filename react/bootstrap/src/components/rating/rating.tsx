import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '../../config';
import {useDirective, useDirectives, classDirective} from '@agnos-ui/react-headless/utils/directive';
import React from 'react';
import {createRating as coreCreateRating, getRatingDefaultConfig as coreGetRatingDefaultConfig} from '@agnos-ui/core-bootstrap/components/rating';
import type {WidgetFactory} from '@agnos-ui/react-headless/types';
import type {RatingDirectives, RatingState, RatingWidget, StarContext, RatingProps} from './rating.gen';

export type * from './rating.gen';
export const createRating: WidgetFactory<RatingWidget> = coreCreateRating as any;
export const getRatingDefaultConfig: () => RatingProps = coreGetRatingDefaultConfig as any;

function Star({star, state, directive}: {star: StarContext; state: RatingState; directive: RatingDirectives['starDirective']}) {
	const arg = {index: star.index};
	return (
		<React.Fragment key={star.index}>
			<span className="visually-hidden">({star.index < state.visibleRating ? '*' : ' '})</span>
			<span {...useDirective(directive, arg)}>
				<Slot slotContent={state.star} props={star}></Slot>
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
		<div {...useDirectives([classDirective, 'd-inline-flex'], containerDirective)}>
			{state.stars.map((star) => (
				<Star key={star.index} star={star} state={state} directive={starDirective} />
			))}
		</div>
	);
}
