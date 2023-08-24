const t=`import {Rating} from '@agnos-ui/react';
import type {StarContext} from '@agnos-ui/core';

const CustomStar = function ({fill, index}: StarContext) {
	const starClassname = ['star-2'];
	if (fill === 100) {
		starClassname.push('filled');
	}
	if (index < 3) {
		starClassname.push('bad');
	}
	return <span className={starClassname.join(' ')}>&#9733;</span>;
};

const RatingDemo = () => {
	return (
		<>
			<Rating className="rating-custom" rating={7} slotStar={CustomStar} ariaLabel="custom rating" />
		</>
	);
};
export default RatingDemo;
`;export{t as default};
