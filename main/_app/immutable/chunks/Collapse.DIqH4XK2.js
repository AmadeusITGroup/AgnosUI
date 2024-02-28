const e=`import {type PropsWithChildren} from 'react';
import {useWidget} from '@agnos-ui/react/utils/widget';
import {createTransition} from '@agnos-ui/react/services/transitions/baseTransitions';
import {collapseVerticalTransition} from '@agnos-ui/react/services/transitions/bootstrap';
import {useDirective} from '@agnos-ui/react/utils/directive';
import './collapse.scss';
import CollapseIcon from './collapseButton.svg?react';

const Collapse = ({expanded, headerText, children}: PropsWithChildren<{expanded?: boolean; headerText: string}>) => {
	const [state, widget] = useWidget(
		createTransition,
		{},
		{
			props: {
				visible: expanded || false,
				transition: collapseVerticalTransition,
			},
		},
	);
	const transitionRef = useDirective(widget.directives.directive);

	return (
		<div className="card">
			<div className="card-header p-0">
				<button
					type="button"
					id="collapse-toggle"
					onClick={() => widget.api.toggle()}
					className="btn toggle-button"
					aria-controls="collapse-content"
					aria-expanded={state.visible || undefined}
				>
					{headerText}
					<span className={'ms-1 collapse-icon' + (state.visible ? ' expanded' : '')}>
						<CollapseIcon />
					</span>
				</button>
			</div>
			{state.hidden ? null : (
				<div id="collapse-content" ref={transitionRef}>
					<div className="card-body">{children}</div>
				</div>
			)}
		</div>
	);
};
export default Collapse;
`;export{e as default};
