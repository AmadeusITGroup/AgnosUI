const a=`import type {StarContext} from '@agnos-ui/core';
import {Rating} from '@agnos-ui/react';

const RatingDemo = () => {
	return (
		<>
			<Rating
				rating={3.64}
				readonly={true}
				maxRating={5}
				className="rating-custom"
				slotStar={function ({fill}: StarContext) {
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
								&hearts;
							</span>
							&hearts;
						</span>
					);
				}}
				ariaLabel="readonly rating"
			/>
		</>
	);
};
export default RatingDemo;
`;export{a as default};
