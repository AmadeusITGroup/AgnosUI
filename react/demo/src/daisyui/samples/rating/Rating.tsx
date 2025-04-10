import {type RatingProps, createRating} from '@agnos-ui/react-headless/components/rating';
import {useWidget} from '@agnos-ui/react-headless/config';
import clsx from 'clsx';

// You can choose here the props from the core you want as inputs
export function Rating(
	props: Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'onHover' | 'onRatingChange' | 'onLeave' | 'ariaLabel'>,
) {
	const {
		state: {visibleRating, stars, className, ariaLabel},
		api,
	} = useWidget(createRating, props);

	return (
		<div className={clsx('rating', className)}>
			{stars.map(({index}) => (
				<input
					key={index}
					onMouseLeave={api.leave}
					onMouseEnter={() => api.setHoveredRating(index + 1)}
					onClick={() => api.setRating(index + 1)}
					// React throws a warning if an onChange is not provided.
					onChange={() => {}}
					type="radio"
					name="rating-1"
					className="mask mask-star-2 bg-orange-400"
					aria-label={`${ariaLabel} star ${index + 1}`}
					checked={index + 1 === visibleRating}
				/>
			))}
		</div>
	);
}
