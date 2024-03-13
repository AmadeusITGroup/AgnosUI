import {type RatingProps, createRating} from '@agnos-ui/react-headless/components/rating';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import classNames from 'classnames';
import React from 'react';

// You can choose here the props from the core you want as inputs
export function Rating(
	props: Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'onHover' | 'onRatingChange' | 'onLeave' | 'ariaLabel'>,
) {
	const [{visibleRating, interactive, stars, className, ariaLabel}, widget] = useWidgetWithConfig(createRating, props, 'rating');

	const starStyle = {
		cursor: interactive ? 'pointer' : 'default',
	};

	return (
		<div className={classNames('join', 'rating', className)}>
			{stars.map((star) => (
				<React.Fragment key={star.index}>
					<input
						onMouseLeave={widget.actions.leave}
						onMouseEnter={() => widget.actions.hover(star.index + 1)}
						onClick={() => widget.actions.click(star.index + 1)}
						style={starStyle}
						type="radio"
						name="rating-1"
						className="mask mask-star"
						aria-label={`${ariaLabel} star ${star.index + 1}`}
						checked={star.index + 1 === visibleRating}
					/>
				</React.Fragment>
			))}
		</div>
	);
}
