import type {RatingDirectives, RatingProps, RatingState, StarContext} from '@agnos-ui/react-headless/components/rating';
import {createRating} from '@agnos-ui/react-headless/components/rating';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '../../config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import React from 'react';

export * from '@agnos-ui/react-headless/components/rating';

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
		<div className="d-inline-flex" {...useDirective(containerDirective)}>
			{state.stars.map((star) => (
				<Star key={star.index} star={star} state={state} directive={starDirective} />
			))}
		</div>
	);
}
