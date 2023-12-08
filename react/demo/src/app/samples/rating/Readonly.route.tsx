import '@agnos-ui/common/samples/rating/readonly.scss';
import type {StarContext} from '@agnos-ui/react/components/rating';
import {Rating} from '@agnos-ui/react/components/rating';
import heartFill from 'bootstrap-icons/icons/heart-fill.svg?raw';

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
				width: `${fill}%`,
			};
			return (
				<span className={starClassname.join(' ')}>
					<span className="half" style={styles} dangerouslySetInnerHTML={{__html: heartFill}}></span>
					<span dangerouslySetInnerHTML={{__html: heartFill}}></span>
				</span>
			);
		}}
		ariaLabel="readonly rating"
	/>
);
export default RatingDemo;
