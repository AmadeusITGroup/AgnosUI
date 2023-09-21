import {writable} from '@amadeus-it-group/tansu';
import type {TransitionFn} from '@agnos-ui/core';
import {bootstrap, createTransition} from '@agnos-ui/core';
import {useDirective, useObservable, useWidget} from '@agnos-ui/react';

const paramTransition$ = writable(bootstrap.collapseVerticalTransition);
const paramAnimation$ = writable(true);
const paramAnimationOnInit$ = writable(false);
const paramVisible$ = writable(true);
const paramRemoveFromDom$ = writable(true);

const InnerComponent = () => {
	const paramTransition = useObservable(paramTransition$);
	const paramAnimation = useObservable(paramAnimation$);
	const paramAnimationOnInit = useObservable(paramAnimationOnInit$);
	const paramRemoveFromDom = useObservable(paramRemoveFromDom$);
	const [transitionState, transitionWidget] = useWidget(
		createTransition,
		{},
		{
			props: {
				transition: paramTransition$,
				animation: paramAnimation$,
				animationOnInit: paramAnimationOnInit$,
				visible: paramVisible$,
			},
		}
	);
	const transitionRef = useDirective(transitionWidget.directives.directive);

	const changeTransition = (newTransition: TransitionFn) => {
		// Make sure the element is removed from the DOM
		// so that it does not keep state from the previous transition
		transitionWidget.api.toggle(false, false);
		paramRemoveFromDom$.set(true);
		paramTransition$.set(newTransition);
	};

	return (
		<>
			<div className="transition-inner">
				<p className="mt-2">
					Transition:
					<button
						type="button"
						className={`ms-2 btn btn-sm btn-outline-secondary ${paramTransition === bootstrap.collapseVerticalTransition ? 'active' : ''}`}
						onClick={() => changeTransition(bootstrap.collapseVerticalTransition)}
					>
						Vertical collapse
					</button>
					<button
						type="button"
						className={`ms-2 btn btn-sm btn-outline-secondary ${paramTransition === bootstrap.collapseHorizontalTransition ? 'active' : ''}`}
						onClick={() => changeTransition(bootstrap.collapseHorizontalTransition)}
					>
						Horizontal collapse
					</button>
					<button
						type="button"
						className={`ms-2 btn btn-sm btn-outline-secondary ${paramTransition === bootstrap.fadeTransition ? 'active' : ''}`}
						onClick={() => changeTransition(bootstrap.fadeTransition)}
					>
						Fade
					</button>
				</p>
				<label className="form-check">
					<input type="checkbox" className="form-check-input" checked={paramAnimation} onChange={() => paramAnimation$.set(!paramAnimation)} />
					Animation
				</label>
				<label className="form-check">
					<input
						type="checkbox"
						className="form-check-input"
						checked={paramAnimationOnInit}
						onChange={() => paramAnimationOnInit$.set(!paramAnimationOnInit)}
					/>
					Animation on init
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
					<input
						type="checkbox"
						className="form-check-input"
						checked={transitionState.visible}
						onChange={() => transitionWidget.patch({visible: !transitionState.visible})}
					/>
					Visible
				</label>

				<button type="button" className="btn btn-outline-primary" onClick={() => transitionWidget.api.toggle()}>
					Toggle
				</button>
				<button type="button" className="ms-2 btn btn-outline-primary" onClick={() => transitionWidget.api.toggle(undefined, true)}>
					Toggle with animation
				</button>
				<button type="button" className="ms-2 btn btn-outline-primary" onClick={() => transitionWidget.api.toggle(undefined, false)}>
					Toggle without animation
				</button>
				<ul className="mt-2">
					<li>visible = {transitionState.visible + ''}</li>
					<li>transitioning = {transitionState.transitioning + ''}</li>
					<li>shown = {transitionState.shown + ''}</li>
					<li>hidden = {transitionState.hidden + ''}</li>
				</ul>

				{paramRemoveFromDom && transitionState.hidden ? null : (
					<div ref={transitionRef} style={{maxWidth: '300px'}}>
						<div className="card" style={{width: '300px'}}>
							<div className="card-body">You can collapse this card by clicking Toggle</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};
export default InnerComponent;
