import '@agnos-ui/common/samples/floatingui/floatingui.scss';
import {browserDirective, useDirective} from '@agnos-ui/react/utils/directive';
import {useObservable} from '@agnos-ui/react/utils/stores';
import {createFloatingUI} from '@agnos-ui/react/services/floatingUI';
import {autoPlacement, hide, offset, shift} from '@floating-ui/dom';
import {useMemo, useState} from 'react';

const scrollToMiddle = browserDirective((element: HTMLElement) => {
	element.scrollTo({left: 326, top: 420});
});

const FloatingUI = () => {
	const [displayPopover, setDisplayPopover] = useState(true);
	const floatingUIInstance = useMemo(
		() =>
			createFloatingUI({
				props: {
					arrowOptions: {
						padding: 6,
					},
					computePositionOptions: {
						middleware: [
							offset(10),
							autoPlacement(),
							shift({
								padding: 5,
							}),
							hide(),
						],
					},
				},
			}),
		[],
	);
	const floatingUIState = useObservable(floatingUIInstance.state$);
	const refContainer = useDirective(scrollToMiddle);
	const refReference = useDirective(floatingUIInstance.directives.referenceDirective);
	const refFloating = useDirective(floatingUIInstance.directives.floatingDirective);
	const refArrow = useDirective(floatingUIInstance.directives.arrowDirective);

	return (
		<div ref={refContainer} className="position-relative overflow-auto border border-primary-subtle demo-floatingui">
			<button ref={refReference} type="button" className="btn btn-primary" onClick={() => setDisplayPopover(!displayPopover)}>
				Toggle popover
			</button>
			{displayPopover ? (
				<div
					ref={refFloating}
					data-popper-placement={floatingUIState.placement}
					className={`popover bs-popover-auto position-absolute ${floatingUIState.middlewareData?.hide?.referenceHidden ? 'invisible' : ''}`}
					role="tooltip"
				>
					<div className="popover-arrow position-absolute" ref={refArrow}></div>
					<div className="popover-body text-center">This is a sample popover</div>
				</div>
			) : null}
		</div>
	);
};
export default FloatingUI;
