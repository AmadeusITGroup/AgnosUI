const t=`import type {RatingProps} from '@agnos-ui/react-bootstrap/components/rating';
import {createRating} from '@agnos-ui/react-bootstrap/components/rating';
import {Slot} from '@agnos-ui/react-bootstrap/slot';
import {useWidgetWithConfig} from '@agnos-ui/react-bootstrap/config';

export function RatingReadonly(props: Pick<Partial<RatingProps>, 'rating' | 'maxRating' | 'className' | 'star'>) {
	const {
		state: {className, stars, star: slotStar},
	} = useWidgetWithConfig(createRating, {...props, readonly: true}, 'rating');

	// applying the Slot is just a matter of retrieving the prop and using the provided AgnosUI Slot component.
	return (
		<div className={\`d-inline-flex au-rating \${className}\`}>
			{stars.map((star) => (
				<span key={star.index} className="au-rating-star">
					<Slot slotContent={slotStar} props={star} />
				</span>
			))}
		</div>
	);
}
`;export{t as default};
