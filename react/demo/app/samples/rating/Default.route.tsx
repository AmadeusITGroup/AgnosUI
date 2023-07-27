import {Rating} from '@agnos-ui/react';
import {useState} from 'react';

const RatingDemo = () => {
	const [rating, setRating] = useState(3);
	const [hover, setHover] = useState(0);
	const [left, setLeft] = useState(0);

	return (
		<>
			<Rating rating={rating} onRatingChange={setRating} onHover={setHover} onLeave={setLeft} ariaLabel="rating" />
			<div>
				Current rate: <span id="defaultRating">{rating}</span>
				<br />
				Hovered: <span id="defaultHovered">{hover}</span>
				<br />
				Left: <span id="defaultLeft">{left}</span>
			</div>
		</>
	);
};
export default RatingDemo;
