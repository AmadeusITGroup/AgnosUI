import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import type {SliderSlotHandleContext} from '@agnos-ui/react-bootstrap/components/slider';

const CustomSlotHandle = (slotContext: SliderSlotHandleContext) => (
	<button className="custom-handle" {...useDirective(slotContext.widget.directives.handleDirective, {item: slotContext.item})}>
		<svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-slider-handle-color)" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
			/>
		</svg>
	</button>
);

export default CustomSlotHandle;
