import {type PropsWithChildren} from 'react';
import {createTransition} from '@agnos-ui/react-bootstrap/services/transitions/baseTransitions';
import {collapseVerticalTransition} from '@agnos-ui/react-bootstrap/services/transitions/bootstrap';
import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import type {Directive} from '@agnos-ui/react-bootstrap/types';
import '@agnos-ui/common/samples/transition/collapse.scss';
import CollapseIcon from '@agnos-ui/common/samples/transition/collapseButton.svg?react';
import {useWidget} from '@agnos-ui/react-bootstrap/config';

const CollapseContent = ({directive, children}: PropsWithChildren<{directive: Directive}>) => (
	<div id="collapse-content" {...useDirective(directive)}>
		<div className="card-body">{children}</div>
	</div>
);

const Collapse = ({
	expanded,
	onExpandedChange,
	headerText,
	children,
}: PropsWithChildren<{expanded?: boolean; onExpandedChange?: (expanded: boolean) => void; headerText: string}>) => {
	const {
		state,
		directives: {directive},
		api: {toggle},
	} = useWidget(createTransition, {visible: expanded, transition: collapseVerticalTransition, onVisibleChange: onExpandedChange});

	return (
		<div className="card">
			<div className="card-header p-0">
				<button
					type="button"
					id="collapse-toggle"
					onClick={() => toggle()}
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
			{!state.hidden && <CollapseContent directive={directive}>{children}</CollapseContent>}
		</div>
	);
};
export default Collapse;
