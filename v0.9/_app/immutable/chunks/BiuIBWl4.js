const e=`import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import type {SliderContext} from '@agnos-ui/react-bootstrap/components/slider';

const CustomSliderComponent = (slotContext: SliderContext) => {
	return (
		<>
			<div className="position-relative cup-container">
				<div className="cup">
					<div className="cup-fill-parent">
						<div className="cup-fill" style={{height: \`\${slotContext.state.progressDisplayOptions[0].height}%\`}}>
							{slotContext.state.progressDisplayOptions[0].height >= 50 ? (
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
			<button className="coffee-indicator" {...useDirective(slotContext.directives.handleDirective, {item: slotContext.state.sortedHandles[0]})}>
				{'' + slotContext.state.sortedHandles[0].value}
			</button>
		</>
	);
};

export default CustomSliderComponent;
`;export{e as default};
