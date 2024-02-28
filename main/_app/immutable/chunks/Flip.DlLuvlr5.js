const i=`import {type PropsWithChildren} from 'react';
import {useWidget} from '@agnos-ui/react/utils/widget';
import {createTransition} from '@agnos-ui/react/services/transitions/baseTransitions';
import {createSimpleClassTransition} from '@agnos-ui/react/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react/utils/directive';
import './flip.scss';

const Flip = ({hiddenText, children}: PropsWithChildren<{hiddenText: string}>) => {
	const [, widget] = useWidget(
		createTransition,
		{},
		{
			props: {
				visible: false,
				transition: createSimpleClassTransition({hideClasses: ['hide'], animationPendingHideClasses: ['hide']}),
			},
		},
	);
	const transitionRef = useDirective(widget.directives.directive);

	return (
		<div className="flip-card">
			<div className="flip-card-inner" ref={transitionRef}>
				<div className="flip-card-front">
					{children}
					<button className="btn btn-outline-secondary" onClick={() => widget.api.hide()}>
						Hide again.
					</button>
				</div>
				<div className="flip-card-back">
					<button className="btn btn-outline-primary" onClick={() => widget.api.show()}>
						{hiddenText}
					</button>
				</div>
			</div>
		</div>
	);
};
export default Flip;
`;export{i as default};
