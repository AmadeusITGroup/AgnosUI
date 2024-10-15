import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import type {SliderContext} from '@agnos-ui/react-bootstrap/components/slider';

const CustomSliderComponent = ({state, directives}: SliderContext) => {
	return (
		<>
			<div className="position-relative cup-container">
				<div className="cup">
					<div className="cup-fill-parent">
						<div className="cup-fill" style={{height: `${state.progressDisplayOptions[0].height}%`}}>
							{state.progressDisplayOptions[0].height >= 50 ? (
								<>
									<div className="bubble bubble-1"></div>
									<div className="bubble bubble-2"></div>
									<div className="bubble bubble-3"></div>
								</>
							) : null}
						</div>
					</div>
				</div>
			</div>
			<button className="coffee-indicator" {...useDirective(directives.handleDirective, {item: state.sortedHandles[0]})}>
				{'' + state.sortedHandles[0].value}
			</button>
		</>
	);
};

export default CustomSliderComponent;
