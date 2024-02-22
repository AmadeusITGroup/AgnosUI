import type {RatingProps, RatingDirectives, StarContext, RatingState} from '@agnos-ui/react-headless/components/rating';
import {createRating} from '@agnos-ui/react-headless/components/rating';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import React from 'react';

export * from '@agnos-ui/react-headless/components/rating';

function Star({star, state, directive}: {star: StarContext; state: RatingState; directive: RatingDirectives['starDirective']}) {
	const starContainer = useDirective(directive, {index: star.index});
	return (
		<React.Fragment key={star.index}>
			<span className="visually-hidden">({star.index < state.visibleRating ? '*' : ' '})</span>
			<span ref={starContainer}>
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

	const refContainer = useDirective(containerDirective);

	return (
		<div ref={refContainer} className="d-inline-flex">
			{state.stars.map((star) => (
				<Star key={star.index} star={star} state={state} directive={starDirective} />
			))}
		</div>
	);
}
