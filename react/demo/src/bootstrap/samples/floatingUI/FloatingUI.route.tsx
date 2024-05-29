import '@agnos-ui/common/samples/floatingui/floatingui.scss';
import {browserDirective, useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import {useObservable} from '@agnos-ui/react-bootstrap/utils/stores';
import {createFloatingUI} from '@agnos-ui/react-bootstrap/services/floatingUI';
import type {FloatingUI} from '@agnos-ui/react-bootstrap/services/floatingUI';
import {autoPlacement, hide, offset, shift} from '@floating-ui/dom';
import {useMemo, useState} from 'react';

const scrollToMiddle = browserDirective((element: HTMLElement) => {
	element.scrollTo({left: 326, top: 420});
});

const Popover = ({floatingUIInstance}: {floatingUIInstance: FloatingUI}) => {
	const floatingUIState = useObservable(floatingUIInstance.state$);
	return (
		<div
			{...useDirective(floatingUIInstance.directives.floatingDirective)}
			data-popper-placement={floatingUIState.placement}
			className={`popover bs-popover-auto position-absolute ${floatingUIState.middlewareData?.hide?.referenceHidden ? 'invisible' : ''}`}
			role="tooltip"
		>
			<div className="popover-arrow position-absolute" {...useDirective(floatingUIInstance.directives.arrowDirective)}></div>
			<div className="popover-body text-center">This is a sample popover</div>
		</div>
	);
};

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

	return (
		<div className="position-relative overflow-auto border border-primary-subtle demo-floatingui" {...useDirective(scrollToMiddle)}>
			<button
				type="button"
				className="btn btn-primary"
				onClick={() => setDisplayPopover(!displayPopover)}
				{...useDirective(floatingUIInstance.directives.referenceDirective)}
			>
				Toggle popover
			</button>
			{displayPopover && <Popover floatingUIInstance={floatingUIInstance} />}
		</div>
	);
};
export default FloatingUI;
