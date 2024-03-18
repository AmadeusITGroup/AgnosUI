import {useMemo, type PropsWithChildren} from 'react';
import {createTransition} from '@agnos-ui/react/services/transitions/baseTransitions';
import {createSimpleClassTransition} from '@agnos-ui/react/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react/utils/directive';
import '@agnos-ui/common/samples/transition/flip.scss';

const Flip = ({hiddenText, children}: PropsWithChildren<{hiddenText: string}>) => {
	const {
		directives: {directive},
		api: {hide, show},
	} = useMemo(
		() =>
			createTransition({
				props: {
					visible: false,
					transition: createSimpleClassTransition({hideClasses: ['hide'], animationPendingHideClasses: ['hide']}),
				},
			}),
		[],
	);
	const transitionRef = useDirective(directive);

	return (
		<div className="flip-card">
			<div className="flip-card-inner" ref={transitionRef}>
				<div className="flip-card-front">
					{children}
					<button className="btn btn-outline-secondary" onClick={() => hide()}>
						Hide again.
					</button>
				</div>
				<div className="flip-card-back">
					<button className="btn btn-outline-primary" onClick={() => show()}>
						{hiddenText}
					</button>
				</div>
			</div>
		</div>
	);
};
export default Flip;
