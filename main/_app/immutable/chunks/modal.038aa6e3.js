const n=`import { computed, readable } from '@amadeus-it-group/tansu';
import { typeBoolean, typeFunction, typeHTMLElementOrNull, typeString } from '../../utils/writables';
import { stateStores, writablesForProps } from '../../utils/stores';
import { createTransition } from '../../services/transitions/baseTransitions';
import { fadeTransition } from '../../services/transitions/bootstrap/fade';
import { promiseFromStore } from '../../utils/internal/promise';
import { noop } from '../../utils/internal/func';
import { removeScrollbars, revertScrollbars } from '../../utils/internal/scrollbars';
import { bindDirective, bindDirectiveNoArg, directiveSubscribe, mergeDirectives, registrationArray } from '../../utils/directive';
import { portal } from '../../services/portal';
import { sliblingsInert } from '../../services/siblingsInert';
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click inside the viewport but outside the modal.
 */
export const modalOutsideClick = Symbol();
/**
 * Value present in the {@link ModalBeforeCloseEvent.result|result} property of the {@link ModalProps.onBeforeClose|onBeforeClose} event
 * and returned by the {@link ModalApi.open|open} method, when the modal is closed by a click on the close button.
 */
export const modalCloseButtonClick = Symbol();
const defaultConfig = {
    animation: true,
    ariaCloseButtonLabel: 'Close',
    backdrop: true,
    backdropClass: '',
    backdropTransition: fadeTransition,
    closeButton: true,
    closeOnOutsideClick: true,
    container: typeof window !== 'undefined' ? document.body : null,
    className: '',
    modalTransition: fadeTransition,
    onBeforeClose: noop,
    onVisibleChange: noop,
    onHidden: noop,
    onShown: noop,
    slotDefault: undefined,
    slotFooter: undefined,
    slotHeader: undefined,
    slotStructure: undefined,
    slotTitle: undefined,
    visible: false,
    contentData: undefined,
};
const configValidator = {
    animation: typeBoolean,
    ariaCloseButtonLabel: typeString,
    backdrop: typeBoolean,
    backdropClass: typeString,
    backdropTransition: typeFunction,
    closeButton: typeBoolean,
    closeOnOutsideClick: typeBoolean,
    container: typeHTMLElementOrNull,
    className: typeString,
    modalTransition: typeFunction,
    onBeforeClose: typeFunction,
    onVisibleChange: typeFunction,
    onHidden: typeFunction,
    onShown: typeFunction,
    visible: typeBoolean,
};
/**
 * Returns a copy of the default modal config.
 * @returns a copy of the default modal config
 */
export function getModalDefaultConfig() {
    return { ...defaultConfig };
}
const modals$ = registrationArray();
const hasModals$ = computed(() => modals$().length > 0);
const scrollbarsAction$ = computed(() => {
    if (hasModals$()) {
        removeScrollbars();
    }
    else {
        revertScrollbars();
    }
});
const modalsAction$ = computed(() => {
    scrollbarsAction$();
});
/**
 * Creates a new modal widget instance.
 * @param config$ - config of the modal, either as a store or as an object containing values or stores.
 * @returns a new modal widget instance
 */
export function createModal(config$) {
    const [{ animation$, backdrop$, backdropTransition$, closeOnOutsideClick$, container$, modalTransition$, onBeforeClose$, onVisibleChange$, onHidden$, onShown$, visible$: requestedVisible$, ...stateProps }, patch,] = writablesForProps(defaultConfig, config$, configValidator);
    const modalTransition = createTransition({
        props: {
            transition: modalTransition$,
            visible: requestedVisible$,
            animation: animation$,
            animationOnInit: animation$,
            onVisibleChange: onVisibleChange$,
            // TODO: for onHidden and onShown, should we combine with information from the backdrop transition?
            // (especially in case one of the two transitions takes more time than the other)
            onHidden: onHidden$,
            onShown: onShown$,
        },
    });
    const visible$ = modalTransition.stores.visible$;
    const backdropTransition = createTransition({
        props: {
            transition: backdropTransition$,
            visible: requestedVisible$,
            animation: animation$,
            animationOnInit: animation$,
        },
    });
    const transitioning$ = computed(() => modalTransition.stores.transitioning$() || (backdrop$() && backdropTransition.stores.transitioning$()));
    const hidden$ = computed(() => !transitioning$() && !visible$());
    const backdropHidden$ = computed(() => !backdrop$() || hidden$());
    let hideResult;
    const close = (result) => {
        hideResult = result;
        const beforeCloseEvent = {
            get result() {
                return hideResult;
            },
            set result(value) {
                hideResult = value;
            },
            cancel: false,
        };
        onBeforeClose$()(beforeCloseEvent);
        if (beforeCloseEvent.cancel) {
            return;
        }
        patch({ visible: false });
    };
    const modalPortalDirective = bindDirective(portal, computed(() => ({ container: container$() })));
    const backdropPortalDirective = bindDirective(portal, computed(() => {
        const container = container$();
        const element = container ? modalTransition.stores.element$() : undefined;
        return {
            container,
            insertBefore: element?.parentElement === container ? element : undefined,
        };
    }));
    const registerModalAction$ = readable(undefined, () => modals$.register(res));
    const action$ = computed(() => {
        if (modalTransition.stores.elementPresent$() && !hidden$()) {
            registerModalAction$();
        }
        modalsAction$();
    });
    const res = {
        ...stateStores({
            backdropHidden$,
            container$,
            hidden$,
            transitioning$,
            visible$,
            modalElement$: modalTransition.stores.element$,
            ...stateProps,
        }),
        directives: {
            modalPortalDirective,
            backdropPortalDirective,
            backdropDirective: bindDirectiveNoArg(backdropTransition.directives.directive),
            modalDirective: mergeDirectives(bindDirectiveNoArg(modalTransition.directives.directive), sliblingsInert, directiveSubscribe(action$)),
        },
        patch,
        api: {
            close,
            async open() {
                patch({ visible: true });
                await promiseFromStore(hidden$).promise;
                return hideResult;
            },
            patch,
        },
        actions: {
            modalClick(event) {
                if (event.currentTarget === event.target && closeOnOutsideClick$()) {
                    close(modalOutsideClick);
                }
            },
            closeButtonClick(event) {
                close(modalCloseButtonClick);
            },
        },
    };
    return res;
}
`;export{n as default};
