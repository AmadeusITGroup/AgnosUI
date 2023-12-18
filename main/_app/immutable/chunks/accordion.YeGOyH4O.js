const e=`import { stateStores, writablesForProps, normalizeConfigStores, mergeConfigStores } from '../../utils/stores';
import { createTransition } from '../../services/transitions/baseTransitions';
import { collapseVerticalTransition } from '../../services/transitions/bootstrap/collapse';
import { computed, writable } from '@amadeus-it-group/tansu';
import { noop } from '../../utils/internal/func';
import { typeBoolean, typeFunction, typeString } from '../../utils/writables';
import { bindDirectiveNoArg, directiveSubscribe, registrationArray } from '../../utils/directive';
let itemId = 0;
function getItemId() {
    return \`accordion-item-\${itemId++}\`;
}
function adjustItemsCloseOthers(items, openItems, oldOpen) {
    let keepOpen;
    if (openItems.length == 2) {
        oldOpen = oldOpen ?? openItems[0];
        keepOpen = openItems.find((id) => id !== oldOpen);
    }
    else if (openItems.length > 2) {
        //this case can happen when you have multiple items open and you toggle the close others
        keepOpen = openItems[0];
    }
    if (keepOpen) {
        items.forEach((item) => {
            if (item.state$().itemId !== keepOpen && item.state$().itemVisible) {
                item.patch({ itemVisible: false });
            }
        });
    }
    return items;
}
function getItem(items, itemId) {
    return items.find((item) => item.state$().itemId === itemId);
}
const defaultAccordionConfig = {
    closeOthers: false,
    onShown: noop,
    onHidden: noop,
    className: '',
    itemId: '',
    itemDestroyOnHide: true,
    itemDisabled: false,
    itemVisible: false,
    itemAnimation: true,
    itemTransition: collapseVerticalTransition,
    itemHeadingTag: '',
    onItemShown: noop,
    onItemHidden: noop,
    onItemVisibleChange: noop,
    slotItemStructure: undefined,
    slotItemBody: undefined,
    slotItemHeader: undefined,
    itemClass: '',
    itemHeaderClass: '',
    itemButtonClass: '',
    itemCollapseClass: '',
    itemBodyClass: '',
};
const defaultItemConfig = {
    itemId: defaultAccordionConfig.itemId,
    itemDestroyOnHide: defaultAccordionConfig.itemDestroyOnHide,
    itemDisabled: defaultAccordionConfig.itemDisabled,
    itemVisible: defaultAccordionConfig.itemVisible,
    itemAnimation: defaultAccordionConfig.itemAnimation,
    itemTransition: defaultAccordionConfig.itemTransition,
    onItemShown: defaultAccordionConfig.onItemShown,
    onItemHidden: defaultAccordionConfig.onItemHidden,
    onItemVisibleChange: defaultAccordionConfig.onItemVisibleChange,
    slotItemStructure: defaultAccordionConfig.slotItemStructure,
    slotItemBody: defaultAccordionConfig.slotItemBody,
    slotItemHeader: defaultAccordionConfig.slotItemHeader,
    itemClass: defaultAccordionConfig.itemClass,
    itemHeaderClass: defaultAccordionConfig.itemHeaderClass,
    itemButtonClass: defaultAccordionConfig.itemButtonClass,
    itemCollapseClass: defaultAccordionConfig.itemCollapseClass,
    itemBodyClass: defaultAccordionConfig.itemBodyClass,
    itemHeadingTag: defaultAccordionConfig.itemHeadingTag,
};
const accordionItemProps = Object.keys(defaultItemConfig);
/**
 * Retrieve a shallow copy of the default accordion config
 * @returns the default accordion config
 */
export function getAccordionDefaultConfig() {
    return { ...defaultAccordionConfig };
}
const configAccordionValidator = {
    closeOthers: typeBoolean,
    onShown: typeFunction,
    onHidden: typeFunction,
    itemId: typeString,
    itemDestroyOnHide: typeBoolean,
    itemDisabled: typeBoolean,
    itemVisible: typeBoolean,
    itemAnimation: typeBoolean,
    itemTransition: typeFunction,
    onItemShown: typeFunction,
    onItemHidden: typeFunction,
    onItemVisibleChange: typeFunction,
    itemClass: typeString,
    itemHeaderClass: typeString,
    itemButtonClass: typeString,
    itemCollapseClass: typeString,
    itemBodyClass: typeString,
    itemHeadingTag: typeString,
};
const configItemValidator = {
    itemId: typeString,
    itemDestroyOnHide: typeBoolean,
    itemDisabled: typeBoolean,
    itemVisible: typeBoolean,
    itemAnimation: typeBoolean,
    itemTransition: typeFunction,
    onItemShown: typeFunction,
    onItemHidden: typeFunction,
    onItemVisibleChange: typeFunction,
    itemClass: typeString,
    itemHeaderClass: typeString,
    itemButtonClass: typeString,
    itemCollapseClass: typeString,
    itemBodyClass: typeString,
    itemHeadingTag: typeString,
};
function createAccordionItem(accordionOnShown, accordionOnHidden, config) {
    const [{ itemAnimation$, itemTransition$, itemDestroyOnHide$, onItemShown$, onItemHidden$, onItemVisibleChange$, itemVisible$, itemId$: _dirtyItemId$, itemDisabled$, ...stateProps }, patch,] = writablesForProps(defaultItemConfig, config, configItemValidator);
    const initDone$ = writable(false);
    const _autoItemId$ = computed(() => getItemId());
    const itemId$ = computed(() => _dirtyItemId$() || _autoItemId$());
    const shouldBeInDOM$ = computed(() => itemDestroyOnHide$() === false || !itemTransition.state$().hidden);
    const itemTransition = createTransition({
        props: {
            transition: itemTransition$,
            visible: itemVisible$,
            onVisibleChange: onItemVisibleChange$,
            animation: itemAnimation$,
            animationOnInit: false,
            initDone: initDone$,
            onHidden: () => {
                accordionOnHidden()(itemId$());
                onItemHidden$()();
            },
            onShown: () => {
                accordionOnShown()(itemId$());
                onItemShown$()();
            },
        },
    });
    return {
        ...stateStores({
            itemVisible$,
            itemId$,
            shouldBeInDOM$,
            itemDisabled$,
            ...stateProps,
        }),
        patch,
        actions: {
            click: () => {
                if (!itemDisabled$()) {
                    itemVisible$.update((c) => !c);
                }
            },
        },
        api: {
            initDone: () => {
                initDone$.set(true);
            },
            collapse: () => {
                itemVisible$.set(false);
            },
            expand: () => {
                itemVisible$.set(true);
            },
            toggle: () => {
                itemVisible$.update((c) => !c);
            },
        },
        directives: { collapseDirective: bindDirectiveNoArg(itemTransition.directives.directive), accordionItemDirective: noop },
    };
}
/**
 * Creates a new Accordion widget instance.
 * @param config - config of the accordion, either as a store or as an object containing values or stores.
 * @returns a new accordion widget instance
 */
export function createAccordion(config) {
    const [{ closeOthers$, onShown$, onHidden$, itemId$, itemAnimation$, itemClass$, itemDisabled$, itemVisible$, itemTransition$, itemDestroyOnHide$, itemBodyClass$, itemButtonClass$, itemCollapseClass$, itemHeaderClass$, itemHeadingTag$, onItemVisibleChange$, onItemHidden$, onItemShown$, slotItemStructure$, slotItemBody$, slotItemHeader$, ...stateProps }, patch,] = writablesForProps(defaultAccordionConfig, config, configAccordionValidator);
    const accordionItemConfig = {
        itemId: itemId$,
        itemClass: itemClass$,
        itemAnimation: itemAnimation$,
        itemDisabled: itemDisabled$,
        itemVisible: itemVisible$,
        itemTransition: itemTransition$,
        itemDestroyOnHide: itemDestroyOnHide$,
        itemBodyClass: itemBodyClass$,
        itemButtonClass: itemButtonClass$,
        itemCollapseClass: itemCollapseClass$,
        itemHeaderClass: itemHeaderClass$,
        itemHeadingTag: itemHeadingTag$,
        onItemVisibleChange: onItemVisibleChange$,
        onItemHidden: onItemHidden$,
        onItemShown: onItemShown$,
        slotItemStructure: slotItemStructure$,
        slotItemBody: slotItemBody$,
        slotItemHeader: slotItemHeader$,
    };
    const itemsWidget$ = registrationArray();
    const openItems$ = computed(() => {
        const openItems = [];
        itemsWidget$().forEach((item) => {
            if (item.state$().itemVisible) {
                openItems.push(item.state$().itemId);
            }
        });
        return openItems;
    });
    const oldOpenItem$ = writable(openItems$()[0]);
    const checkCloseOthersAction$ = computed(() => {
        if (closeOthers$()) {
            adjustItemsCloseOthers(itemsWidget$(), openItems$(), oldOpenItem$());
            oldOpenItem$.set(openItems$()[0]);
        }
    });
    const action$ = computed(() => {
        checkCloseOthersAction$();
    });
    return {
        ...stateStores({ itemsWidget$, ...stateProps }),
        patch,
        actions: {},
        api: {
            isExpanded: (id) => {
                const item = getItem(itemsWidget$(), id);
                if (item) {
                    return item.state$().itemVisible;
                }
                else {
                    return false;
                }
            },
            expand: (id) => {
                getItem(itemsWidget$(), id)?.api.expand();
            },
            collapse: (id) => {
                getItem(itemsWidget$(), id)?.api.collapse();
            },
            toggle: (id) => {
                getItem(itemsWidget$(), id)?.api.toggle();
            },
            expandAll: () => {
                itemsWidget$().forEach((i) => i.api.expand());
            },
            collapseAll: () => {
                itemsWidget$().forEach((i) => i.api.collapse());
            },
            registerItem: (propsConfig) => {
                const item = createAccordionItem(onShown$, onHidden$, {
                    config: mergeConfigStores(accordionItemProps, normalizeConfigStores(accordionItemProps, propsConfig?.config), accordionItemConfig),
                    props: propsConfig?.props,
                });
                item.directives.accordionItemDirective = () => ({ destroy: itemsWidget$.register(item) });
                return item;
            },
        },
        directives: { accordionDirective: directiveSubscribe(action$) },
    };
}
`;export{e as default};
