import {useMemo, type PropsWithChildren} from 'react';
import {createTransition} from '@agnos-ui/react-bootstrap/services/transitions/baseTransitions';
import {collapseVerticalTransition} from '@agnos-ui/react-bootstrap/services/transitions/bootstrap';
import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import '@agnos-ui/common/samples/transition/collapse.scss';
import CollapseIcon from '@agnos-ui/common/samples/transition/collapseButton.svg?react';
import {useObservable} from '@agnos-ui/react-bootstrap/utils/stores';

const Collapse = ({expanded, headerText, children}: PropsWithChildren<{expanded?: boolean; headerText: string}>) => {
	const {
		state$,
		directives: {directive},
		api: {toggle},
	} = useMemo(
		() =>
			createTransition({
				props: {
					visible: expanded,
					transition: collapseVerticalTransition,
				},
			}),
		[],
	);
	const transitionRef = useDirective(directive);
	const state = useObservable(state$);

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
			{state.hidden ? null : (
				<div id="collapse-content" {...transitionRef}>
					<div className="card-body">{children}</div>
				</div>
			)}
		</div>
	);
};
export default Collapse;
