import {Slot} from '@agnos-ui/react-headless/slot';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
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

/**
 * Rating component that displays a series of stars based on the provided state.
 *
 * @param props - The properties for the Rating component.
 * @returns The rendered Rating component.
 *
 * @remarks
 * This component uses the {@link useWidgetWithConfig} hook to initialize and configure the rating widget.
 * It applies directives to the container and individual stars for styling and behavior.
 *
 */
export function Rating(props: Partial<RatingProps>) {
	const {
		state,
		directives: {containerDirective, starDirective},
	} = useWidgetWithConfig(createRating, props, 'rating');

	return (
		<div {...useDirectives([classDirective, 'd-inline-flex'], containerDirective)}>
			{state.stars.map((star) => (
				<Star key={star.index} star={star} state={state} directive={starDirective} />
			))}
		</div>
	);
}
