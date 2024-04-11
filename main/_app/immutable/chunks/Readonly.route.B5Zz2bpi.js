const a=`import './readonly.scss';
import type {StarContext} from '@agnos-ui/react-bootstrap/components/rating';
import {Rating} from '@agnos-ui/react-bootstrap/components/rating';
import HeartFill from 'bootstrap-icons/icons/heart-fill.svg?react';

const RatingDemo = () => (
	<Rating
		rating={3.64}
		readonly={true}
		maxRating={5}
		className="rating-readonly"
		slotStar={({fill}: StarContext) => {
			const starClassname = ['star'];
			if (fill === 100) {
				starClassname.push('full');
			}
			const styles = {
				width: \`\${fill}%\`,
			};
			return (
				<span className={starClassname.join(' ')}>
					<span className="half" style={styles}>
						<HeartFill />
					</span>
					<span>
						<HeartFill />
					</span>
				</span>
			);
		}}
		ariaLabel="readonly rating"
	/>
);
export default RatingDemo;
`;export{a as default};
