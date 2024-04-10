import '@agnos-ui/common/samples/rating/custom.scss';
import {RatingReadonly} from './RatingReadonly';
import type {StarContext} from '@agnos-ui/react-bootstrap/components/rating';

const CustomStar = ({fill, index}: StarContext) => {
	const starClassname = ['star'];
	if (fill === 100) {
		starClassname.push('filled');
	}
	if (index < 3) {
		starClassname.push('bad');
	}
	return <span className={starClassname.join(' ')}>&#9733;</span>;
};

const Headless = () => (
	<>
		<div>The readonly rating without slot:</div>
		<RatingReadonly rating={7} maxRating={10} />

		<div className="mt-2">Using a slot to customize the display:</div>
		<RatingReadonly rating={7} maxRating={10} className="rating-custom" slotStar={CustomStar} />
	</>
);
export default Headless;
