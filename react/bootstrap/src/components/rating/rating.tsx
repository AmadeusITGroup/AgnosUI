import {Slot} from '@agnos-ui/react-headless/slot';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils';
import React from 'react';
import {useWidgetWithConfig} from '../../config';
import type {RatingDirectives, RatingProps, RatingState, StarContext} from './rating.gen';
import {createRating} from './rating.gen';

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
