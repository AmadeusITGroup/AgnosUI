const t=`import {writable} from '@amadeus-it-group/tansu';
import type {TransitionFn} from '@agnos-ui/react-bootstrap/services/transitions/baseTransitions';
import {collapseHorizontalTransition, collapseVerticalTransition, fadeTransition} from '@agnos-ui/react-bootstrap/services/transitions/bootstrap';
import {createTransition} from '@agnos-ui/react-bootstrap/services/transitions/baseTransitions';
import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import {useObservable} from '@agnos-ui/react-bootstrap/utils/stores';
import type {Directive} from '@agnos-ui/react-bootstrap/types';
import {useMemo} from 'react';

const paramTransition$ = writable(collapseVerticalTransition);
const paramAnimated$ = writable(true);
const paramAnimatedOnInit$ = writable(false);
const paramVisible$ = writable(true);
const paramRemoveFromDom$ = writable(true);

const Content = ({directive}: {directive: Directive}) => (
	<div style={{maxWidth: '300px'}} {...useDirective(directive)}>
		<div className="card" style={{width: '300px'}}>
			<div className="card-body">You can collapse this card by clicking Toggle</div>
		</div>
	</div>
);

const InnerComponent = () => {
	const paramTransition = useObservable(paramTransition$);
	const paramAnimated = useObservable(paramAnimated$);
	const paramAnimatedOnInit = useObservable(paramAnimatedOnInit$);
	const paramRemoveFromDom = useObservable(paramRemoveFromDom$);
	const transition = useMemo(
		() =>
			createTransition({
				props: {
					transition: paramTransition$,
					animated: paramAnimated$,
					animatedOnInit: paramAnimatedOnInit$,
					visible: paramVisible$,
				},
			}),
		[],
	);
	const state = useObservable(transition.state$);
	const {api, directives} = transition;

	const changeTransition = (newTransition: TransitionFn) => {
		// Make sure the element is removed from the DOM
		// so that it does not keep state from the previous transition
		void api.toggle(false, false);
		paramRemoveFromDom$.set(true);
		paramTransition$.set(newTransition);
	};

	return (
		<>
			<div className="transition-inner">
				<div className="h6 mt-2">Transition:</div>
				<div className="d-flex flex-wrap gap-2">
					<button
						type="button"
						className={\`btn btn-sm btn-outline-secondary \${paramTransition === collapseVerticalTransition ? 'active' : ''}\`}
						onClick={() => changeTransition(collapseVerticalTransition)}
					>
						Vertical collapse
					</button>
					<button
						type="button"
						className={\`btn btn-sm btn-outline-secondary \${paramTransition === collapseHorizontalTransition ? 'active' : ''}\`}
						onClick={() => changeTransition(collapseHorizontalTransition)}
					>
						Horizontal collapse
					</button>
					<button
						type="button"
						className={\`btn btn-sm btn-outline-secondary \${paramTransition === fadeTransition ? 'active' : ''}\`}
						onClick={() => changeTransition(fadeTransition)}
					>
						Fade
					</button>
				</div>
				<div className="h6 mt-2">Other properties:</div>
				<label className="form-check">
					<input type="checkbox" className="form-check-input" checked={paramAnimated} onChange={() => paramAnimated$.set(!paramAnimated)} />
					Animated
				</label>
				<label className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						checked={paramAnimatedOnInit}
						onChange={() => paramAnimatedOnInit$.set(!paramAnimatedOnInit)}
					/>
					Animated on init
				</label>
				<label className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						checked={paramRemoveFromDom}
						onChange={() => paramRemoveFromDom$.set(!paramRemoveFromDom)}
					/>
					Remove from DOM
				</label>
				<label className="form-check mb-2">
					<input type="checkbox" className="form-check-input" checked={state.visible} onChange={() => transition.patch({visible: !state.visible})} />
					Visible
				</label>

				<div className="d-flex flex-wrap gap-2">
					<button type="button" className="btn btn-outline-primary" onClick={() => api.toggle()}>
						Toggle
					</button>
					<button type="button" className="btn btn-outline-primary" onClick={() => api.toggle(undefined, true)}>
						Toggle with animation
					</button>
					<button type="button" className="btn btn-outline-primary" onClick={() => api.toggle(undefined, false)}>
						Toggle without animation
					</button>
				</div>
				<ul className="mt-2">
					<li>visible = {state.visible + ''}</li>
					<li>transitioning = {state.transitioning + ''}</li>
					<li>shown = {state.shown + ''}</li>
					<li>hidden = {state.hidden + ''}</li>
				</ul>

				{(!paramRemoveFromDom || !state.hidden) && <Content directive={directives.directive} />}
			</div>
		</>
	);
};
export default InnerComponent;
`;export{t as default};
