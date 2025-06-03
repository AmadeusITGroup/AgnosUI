const t=`import {useState} from 'react';
import {Rating} from './Rating';

const DaisyUIDemo = () => {
	const [rating, setRating] = useState(3);
	const [hover, setHover] = useState(0);
	const [left, setLeft] = useState(0);

	return (
		<>
			<Rating rating={rating} onRatingChange={setRating} onHover={setHover} onLeave={setLeft} />
			<div className="mt-2">
				Current rate: <span id="defaultRating">{rating}</span>
				<br />
				Hovered: <span id="defaultHovered">{hover}</span>
				<br />
				Left: <span id="defaultLeft">{left}</span>
			</div>
		</>
	);
};

export default DaisyUIDemo;
`;export{t as default};
