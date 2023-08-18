const t=`export const useSvelteSlot = Symbol('useSvelteSlot');
export const isSvelteComponent = (content) => {
    // in prod mode, a svelte component has $set on its prototype
    // in dev mode with hmr (hot module reload), a svelte component has nothing on its prototype, but its name starts with Proxy<
    return typeof content === 'function' && !!content.prototype && (content.prototype.$set || /^Proxy</.test(content.name));
};
`;export{t as default};
