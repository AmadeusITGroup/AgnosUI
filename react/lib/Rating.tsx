import {Slot} from '@agnos-ui/react-headless/Slot';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {createRating, type RatingProps} from '@agnos-ui/react-headless/rating';
import React from 'react';

export * from '@agnos-ui/react-headless/rating';

export function Rating(props: Partial<RatingProps>) {
	const [
		{tabindex, maxRating, visibleRating, ariaValueText, readonly, disabled, isInteractive, stars, className, slotStar, ariaLabel, ariaLabelledBy},
		widget,
	] = useWidgetWithConfig(createRating, props, 'rating');

	const starStyle = {
		cursor: isInteractive ? 'pointer' : 'default',
	};

	return (
		<div
			role="slider"
			className={`d-inline-flex au-rating ${className}`}
			tabIndex={tabindex}
			aria-valuemin={0}
			aria-valuemax={maxRating}
			aria-valuenow={visibleRating}
			aria-valuetext={ariaValueText}
			aria-readonly={readonly || undefined}
			aria-disabled={disabled || undefined}
			aria-label={ariaLabel || undefined}
			aria-labelledby={ariaLabelledBy || undefined}
			onKeyDown={(e) => widget.actions.handleKey(e as unknown as KeyboardEvent)}
			onMouseLeave={widget.actions.leave}
		>
			{stars.map((star) => (
				<React.Fragment key={star.index}>
					<span className="visually-hidden">({star.index < visibleRating ? '*' : ' '})</span>
					<span
						className="au-rating-star"
						style={starStyle}
						onMouseEnter={() => widget.actions.hover(star.index + 1)}
						onClick={() => widget.actions.click(star.index + 1)}
					>
						<Slot slotContent={slotStar} props={star}></Slot>
					</span>
				</React.Fragment>
			))}
		</div>
	);
}
