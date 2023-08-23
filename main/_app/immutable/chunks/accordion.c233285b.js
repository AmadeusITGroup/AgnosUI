const e=`import { bindDirectiveNoArg, bindableDerived, directiveSubscribe, registrationArray, stateStores, typeBoolean, typeFunction, typeString, writablesForProps, } from './services';
import { createTransition } from './transitions';
import { collapseVerticalTransition } from './transitions/bootstrap';
import { computed, readable, writable } from '@amadeus-it-group/tansu';
import { noop } from './utils';
let itemId = 0;
function getItemId() {
    return \`accordion-item-\${itemId++}\`;
}
function adjustItemsCloseOthers(items, openItems, oldOpen) {
    if (openItems.length == 2) {
        oldOpen = oldOpen ?? openItems[0];
        const keepOpen = openItems.find((id) => id !== oldOpen);
        items.forEach((item) => {
            if (item.state$().itemId !== keepOpen && !item.state$().itemCollapsed) {
                item.patch({ itemCollapsed: true });
            }
        });
    }
    else if (openItems.length > 2) {
        //this case can happen when you have multiple items open and you toggle the close others
        const keepOpen = openItems[0];
        items.forEach((item) => {
            if (item.state$().itemId !== keepOpen && !item.state$().itemCollapsed) {
                item.patch({ itemCollapsed: true });
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
    accordionClass: '',
    itemId: '',
    itemDestroyOnHide: false,
    itemDisabled: false,
    itemCollapsed: true,
    itemAnimation: true,
    itemTransition: collapseVerticalTransition,
    onItemShown: noop,
    onItemHidden: noop,
    onItemCollapsedChange: noop,
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
    itemCollapsed: defaultAccordionConfig.itemCollapsed,
    itemAnimation: defaultAccordionConfig.itemAnimation,
    itemTransition: defaultAccordionConfig.itemTransition,
    onItemShown: defaultAccordionConfig.onItemShown,
    onItemHidden: defaultAccordionConfig.onItemHidden,
    onItemCollapsedChange: defaultAccordionConfig.onItemCollapsedChange,
    slotItemStructure: defaultAccordionConfig.slotItemStructure,
    slotItemBody: defaultAccordionConfig.slotItemBody,
    slotItemHeader: defaultAccordionConfig.slotItemHeader,
    itemClass: defaultAccordionConfig.itemClass,
    itemHeaderClass: defaultAccordionConfig.itemHeaderClass,
    itemButtonClass: defaultAccordionConfig.itemButtonClass,
    itemCollapseClass: defaultAccordionConfig.itemCollapseClass,
    itemBodyClass: defaultAccordionConfig.itemBodyClass,
};
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
    itemCollapsed: typeBoolean,
    itemAnimation: typeBoolean,
    itemTransition: typeFunction,
    onItemShown: typeFunction,
    onItemHidden: typeFunction,
    onItemCollapsedChange: typeFunction,
    itemClass: typeString,
    itemHeaderClass: typeString,
    itemButtonClass: typeString,
    itemCollapseClass: typeString,
    itemBodyClass: typeString,
};
const configItemValidator = {
    itemId: typeString,
    itemDestroyOnHide: typeBoolean,
    itemDisabled: typeBoolean,
    itemCollapsed: typeBoolean,
    itemAnimation: typeBoolean,
    itemTransition: typeFunction,
    onItemShown: typeFunction,
    onItemHidden: typeFunction,
    onItemCollapsedChange: typeFunction,
    itemClass: typeString,
    itemHeaderClass: typeString,
    itemButtonClass: typeString,
    itemCollapseClass: typeString,
    itemBodyClass: typeString,
};
function createAccordionItem(accordionOnShown, accordionOnHidden, config) {
    const [{ itemAnimation$, itemTransition$, itemDestroyOnHide$, onItemShown$, onItemHidden$, onItemCollapsedChange$, itemCollapsed$, itemId$: _dirtyItemId$, itemDisabled$, ...stateProps }, patch,] = writablesForProps(defaultItemConfig, config, configItemValidator);
    const initDone$ = writable(false);
    const itemId$ = bindableDerived(readable(noop), [_dirtyItemId$], ([dirtyItemId]) => (dirtyItemId ? dirtyItemId : getItemId()));
    const shouldBeInDOM$ = computed(() => {
        return itemDestroyOnHide$() === false || !itemTransition.state$().hidden;
    });
    const itemTransition = createTransition({
        transition: itemTransition$,
        visible: computed(() => {
            const collapsed = itemCollapsed$();
            onItemCollapsedChange$()(collapsed);
            return !collapsed;
        }),
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
    });
    return {
        ...stateStores({
            itemCollapsed$,
            itemId$,
            shouldBeInDOM$,
            itemDisabled$,
            ...stateProps,
        }),
        patch,
        actions: {
            click: () => {
                if (!itemDisabled$()) {
                    itemCollapsed$.update((c) => !c);
                }
            },
        },
        api: {
            initDone: () => {
                initDone$.set(true);
            },
            collapse: () => {
                itemCollapsed$.set(true);
            },
            expand: () => {
                itemCollapsed$.set(false);
            },
            toggle: () => {
                itemCollapsed$.update((c) => !c);
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
    const [{ closeOthers$, onShown$, onHidden$, itemId$, itemAnimation$, itemClass$, itemDisabled$, itemCollapsed$, itemTransition$, itemDestroyOnHide$, itemBodyClass$, itemButtonClass$, itemCollapseClass$, itemHeaderClass$, onItemCollapsedChange$, onItemHidden$, onItemShown$, slotItemStructure$, slotItemBody$, slotItemHeader$, ...stateProps }, patch,] = writablesForProps(defaultAccordionConfig, config, configAccordionValidator);
    const itemsWidget$ = registrationArray();
    const openItems$ = computed(() => {
        const openItems = [];
        itemsWidget$().forEach((item) => {
            if (!item.state$().itemCollapsed) {
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
        else {
            itemsWidget$();
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
                    return !item.state$().itemCollapsed;
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
            registerItem: (itemConfig) => {
                const item = createAccordionItem(onShown$, onHidden$, computed(() => ({
                    itemId: itemId$(),
                    itemClass: itemClass$(),
                    itemAnimation: itemAnimation$(),
                    itemDisabled: itemDisabled$(),
                    itemCollapsed: itemCollapsed$(),
                    itemTransition: itemTransition$(),
                    itemDestroyOnHide: itemDestroyOnHide$(),
                    itemBodyClass: itemBodyClass$(),
                    itemButtonClass: itemButtonClass$(),
                    itemCollapseClass: itemCollapseClass$(),
                    itemHeaderClass: itemHeaderClass$(),
                    onItemCollapsedChange: onItemCollapsedChange$(),
                    onItemHidden: onItemHidden$(),
                    onItemShown: onItemShown$(),
                    slotItemStructure: slotItemStructure$(),
                    slotItemBody: slotItemBody$(),
                    slotItemHeader: slotItemHeader$(),
                    ...itemConfig?.(),
                })));
                item.directives.accordionItemDirective = () => ({ destroy: itemsWidget$.register(item) });
                return item;
            },
        },
        directives: { accordionDirective: directiveSubscribe(action$) },
    };
}
`;export{e as default};
