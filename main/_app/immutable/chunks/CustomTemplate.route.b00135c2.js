const a=`import '@agnos-ui/common/samples/rating/custom.scss';
import {Rating} from '@agnos-ui/react';
import type {StarContext} from '@agnos-ui/core';

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
const RatingDemo = () => <Rating className="rating-custom" rating={7} slotStar={CustomStar} ariaLabel="custom rating" />;
export default RatingDemo;
`;export{a as default};
