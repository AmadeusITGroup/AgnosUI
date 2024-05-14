const a=`import {type RatingProps, createRating} from '@agnos-ui/react-headless/components/rating';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import classNames from 'classnames';
import React from 'react';

// You can choose here the props from the core you want as inputs
export function Rating(
	props: Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'onHover' | 'onRatingChange' | 'onLeave' | 'ariaLabel'>,
) {
	const [{visibleRating, stars, className, ariaLabel}, widget] = useWidgetWithConfig(createRating, props, 'rating');

	return (
		<div className={classNames('rating', className)}>
			{stars.map(({index}) => (
				<React.Fragment key={index}>
					<input
						onMouseLeave={widget.actions.leave}
						onMouseEnter={() => widget.actions.hover(index + 1)}
						onClick={() => widget.actions.click(index + 1)}
						// React throws a warning if an onChange is not provided.
						onChange={() => {}}
						type="radio"
						name="rating-1"
						className="mask mask-star"
						aria-label={\`\${ariaLabel} star \${index + 1}\`}
						checked={index + 1 === visibleRating}
					/>
				</React.Fragment>
			))}
		</div>
	);
}
`;export{a as default};
