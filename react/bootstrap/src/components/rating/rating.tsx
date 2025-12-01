import {Slot} from '@agnos-ui/react-headless/slot';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import {type Ref, useImperativeHandle, Fragment} from 'react';
import {useWidget} from '../../config';
import type {RatingApi, RatingDirectives, RatingProps, RatingState, StarContext} from './rating.gen';
import {createRating} from './rating.gen';

function Star({star, state, directive}: {star: StarContext; state: RatingState; directive: RatingDirectives['starDirective']}) {
	return (
		<Fragment key={star.index}>
			<span className="visually-hidden">({star.index < state.visibleRating ? '*' : ' '})</span>
			<span {...useDirective(directive, {index: star.index})}>
				<Slot slotContent={state.star} props={star} />
			</span>
		</Fragment>
	);
}

/**
 * Rating component that displays a series of stars based on the provided state.
 *
 * @param props - The properties for the Rating component.
 * @param props.ref - Ref to the Rating API.
 * @returns The rendered Rating component.
 *
 * @remarks
 * This component uses the {@link useWidget} hook to initialize and configure the rating widget.
 * It applies directives to the container and individual stars for styling and behavior.
 *
 */
export function Rating({ref, ...props}: Partial<RatingProps> & {ref?: Ref<RatingApi>}) {
	const {
		state,
		directives: {containerDirective, starDirective},
		api,
	} = useWidget(createRating, props);
	useImperativeHandle(ref, () => api, [api]);

	return (
		<div {...useDirectives([classDirective, 'd-inline-flex'], containerDirective)}>
			{state.stars.map((star) => (
				<Star key={star.index} star={star} state={state} directive={starDirective} />
			))}
		</div>
	);
}
