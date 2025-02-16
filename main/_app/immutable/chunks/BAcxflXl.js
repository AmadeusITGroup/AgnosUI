const e=`import {createTransition} from '@agnos-ui/react-headless/services/transitions/baseTransitions';
import {createSimpleClassTransition} from '@agnos-ui/react-headless/services/transitions/simpleClassTransition';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import type {PropsWithChildren} from 'react';
/**
 * You can create easily your own collapse component with the help of the \`createTransition\` function
 * you will be able to plug the transition event of DaisyUI to your component.
 * The \`createSimpleClassTransition\` is a helper to create a transition that will add a class to the element but you don't have to add classes as this
 * DaisyUI CSS is not using this feature.
 */
export const Collapse = (props: PropsWithChildren<Partial<{title: string; onHidden: () => void; onShown: () => void}>>) => {
	const transition = createTransition({
		props: {
			visible: false, // could be something in an input that also add the collapse-open class
			transition: createSimpleClassTransition({}),
			onShown: () => props.onShown?.(),
			onHidden: () => props.onHidden?.(),
		},
	});

	return (
		<>
			<div
				tabIndex={0}
				className="collapse bg-base-200"
				{...useDirective(transition.directives.directive)}
				onBlur={() => transition.api.hide()}
				onFocus={() => transition.api.show()}
			>
				<div className="collapse-title font-medium text-xl">{props.title ?? 'Focus me to see content'}</div>
				<div className="collapse-content">{props.children}</div>
			</div>
		</>
	);
};
`;export{e as default};
