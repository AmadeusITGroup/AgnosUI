const n=`import { bindDirectiveNoArg, stateStores, typeBoolean, writablesForProps } from './services';
import { createTransition } from './transitions';
import { fadeTransition } from './transitions/bootstrap';
import { noop } from './utils';
export const defaultCommonAlertConfig = {
    visible: true,
    dismissible: true,
    ariaCloseButtonLabel: 'Close',
    onVisibleChange: noop,
    onShown: noop,
    onHidden: noop,
    slotStructure: undefined,
    slotDefault: undefined,
    animation: true,
    animationOnInit: false,
    transition: fadeTransition,
    className: '',
};
/**
 * Retrieve a shallow copy of the default alert config
 * @returns the default alert config
 */
export function getCommonAlertDefaultConfig() {
    return { ...defaultCommonAlertConfig };
}
export const commonAlertConfigValidator = {
    dismissible: typeBoolean,
};
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export function createCommonAlert(config) {
    const [{ transition$, animationOnInit$, animation$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, ...stateProps }, patch,] = writablesForProps(defaultCommonAlertConfig, config, commonAlertConfigValidator);
    const transition = createTransition({
        props: {
            transition: transition$,
            visible: requestedVisible$,
            animation: animation$,
            animationOnInit: animationOnInit$,
            onVisibleChange: onVisibleChange$,
            onHidden: onHidden$,
            onShown: onShown$,
        },
    });
    const close = () => {
        patch({ visible: false });
    };
    const open = () => {
        patch({ visible: true });
    };
    const visible$ = transition.stores.visible$;
    const hidden$ = transition.stores.hidden$;
    return {
        ...stateStores({ ...stateProps, visible$, hidden$ }),
        patch,
        api: {
            open,
            close,
        },
        directives: {
            transitionDirective: bindDirectiveNoArg(transition.directives.directive),
        },
        actions: {},
    };
}
`;export{n as default};
