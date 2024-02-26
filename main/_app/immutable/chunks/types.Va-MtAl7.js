const t=`/**
 * Extract actions, api, directives, state and stores from the widget to be passed to slots as context.
 *
 * @param w - the widget
 * @returns the slot context
 */
export const toSlotContextWidget = (w) => ({
    actions: w.actions,
    api: w.api,
    directives: w.directives,
    state$: w.state$,
    stores: w.stores,
});
export const INVALID_VALUE = Symbol();
`;export{t as default};
