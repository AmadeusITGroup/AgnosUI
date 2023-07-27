import type {StarContext} from '@agnos-ui/core';
import type {RatingProps} from '@agnos-ui/react';
import {Rating, WidgetsDefaultConfig} from '@agnos-ui/react';
import {useState} from 'react';

const CustomStar = function ({fill}: StarContext) {
	const starClassname = ['star'];
	if (fill === 100) {
		starClassname.push('full');
	}
	const styles = {
		width: `${fill}%`,
	};
	return (
		<span className={starClassname.join(' ')}>
			{' '}
			<span className="half" style={styles}>
				&hearts;
			</span>
			&hearts;{' '}
		</span>
	);
};

const RatingDemo = () => {
	const [ratingConfig, setRatingConfig] = useState<Partial<RatingProps>>({});
	const [rating, setRating] = useState(3);

	function updateRatingConfig(values: Partial<RatingProps>) {
		setRatingConfig({...ratingConfig, ...values});
	}

	return (
		<WidgetsDefaultConfig rating={ratingConfig}>
			<Rating rating={rating} onRatingChange={setRating} />
			<div className="mt-3">
				Disabled:&nbsp;
				<div id="btn-config-disabled" className="btn-group mb-2">
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.disabled ? 'active' : ''}`}
						onClick={() => updateRatingConfig({disabled: true})}
					>
						true
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${!ratingConfig.disabled ? 'active' : ''}`}
						onClick={() => updateRatingConfig({disabled: false})}
					>
						false
					</button>
				</div>
				<br />
				maxRating:&nbsp;
				<div id="btn-config-maxRating" className="btn-group mb-2">
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.maxRating === 40 ? 'active' : ''}`}
						onClick={() => updateRatingConfig({maxRating: 40})}
					>
						40
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.maxRating === 30 ? 'active' : ''}`}
						onClick={() => updateRatingConfig({maxRating: 30})}
					>
						30
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.maxRating === 20 ? 'active' : ''}`}
						onClick={() => updateRatingConfig({maxRating: 20})}
					>
						20
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.maxRating === undefined ? 'active' : ''}`}
						onClick={() => updateRatingConfig({maxRating: undefined})}
					>
						undefined
					</button>
				</div>
				<br />
				className:&nbsp;
				<div id="btn-config-className" className="btn-group mb-2">
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.className === 'fs-1' ? 'active' : ''}`}
						onClick={() => updateRatingConfig({className: 'fs-1'})}
					>
						fs-1
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.className === 'fs-2' ? 'active' : ''}`}
						onClick={() => updateRatingConfig({className: 'fs-2'})}
					>
						fs-2
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.className === undefined ? 'active' : ''}`}
						onClick={() => updateRatingConfig({className: undefined})}
					>
						undefined
					</button>
				</div>
				<br />
				slotStar:&nbsp;
				<div id="btn-config-slotStar" className="btn-group mb-2">
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.slotStar === CustomStar ? 'active' : ''}`}
						onClick={() => updateRatingConfig({slotStar: CustomStar})}
					>
						custom
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.slotStar === '*' ? 'active' : ''}`}
						onClick={() => updateRatingConfig({slotStar: '*'})}
					>
						&apos;*&apos;
					</button>
					<button
						className={`btn btn-sm btn-outline-secondary ${ratingConfig.slotStar === undefined ? 'active' : ''}`}
						onClick={() => updateRatingConfig({slotStar: undefined})}
					>
						undefined
					</button>
				</div>
			</div>
		</WidgetsDefaultConfig>
	);
};
export default RatingDemo;
