const t=`const toSlotContextWidget = (w) => ({
  actions: w.actions,
  api: w.api,
  directives: w.directives,
  state$: w.state$,
  stores: w.stores
});
const INVALID_VALUE = Symbol();
export {
  INVALID_VALUE,
  toSlotContextWidget
};
`;export{t as default};
