const e=`import { findChangedProperties, toReadableStore } from '@agnos-ui/core/utils/stores';
import { asWritable, computed, writable } from '@amadeus-it-group/tansu';
import { useSvelteSlot } from '../types';
function createPatchChangedProps(previousProps, patchFn) {
    return (props) => {
        const changedProps = findChangedProperties(previousProps, props);
        previousProps = props;
        if (changedProps) {
            patchFn(changedProps);
        }
    };
}
/**
 * Merges two functions.
 * @param fn1 - first function
 * @param fn2 - second function (or undefined or null)
 * @returns a function that successively calls fn1 and fn2 (if defined)
 */
const mergeEventFns = (fn1, fn2) => fn2
    ? (...args) => {
        fn1(...args);
        fn2(...args);
    }
    : fn1;
/**
 * Creates a writable store to be used for an event handler.
 * @param event - function that will be merged with the value of the store so that it is always called first when the event handler is called
 * @returns a writable store to be used for an event handler
 */
const eventStore = (event, prop) => {
    const store$ = writable(prop, { equal: Object.is });
    return asWritable(computed(() => mergeEventFns(event, store$())), {
        set: store$.set,
        update: store$.update,
    });
};
export const callWidgetFactoryWithConfig = ({ factory, $$slots, defaultConfig, widgetConfig, events, $$props, }) => {
    const defaultConfig$ = toReadableStore(defaultConfig);
    const processedSlots = {};
    for (const [name, present] of Object.entries($$slots)) {
        if (present) {
            processedSlots[\`slot\${name[0].toUpperCase()}\${name.substring(1)}\`] = useSvelteSlot;
        }
    }
    const props = { ...$$props };
    for (const event of Object.keys(events)) {
        props[event] = eventStore(events[event], $$props[event]);
    }
    const widget = factory({
        config: computed(() => ({ ...defaultConfig$(), ...widgetConfig?.(), ...processedSlots })),
        props,
    });
    return { ...widget, patchChangedProps: createPatchChangedProps($$props, widget.patch) };
};
export const isSvelteComponent = (content) => {
    // in prod mode, a svelte component has $set on its prototype
    // in dev mode with hmr (hot module reload), a svelte component has nothing on its prototype, but its name starts with Proxy<
    return ((typeof content === 'function' && !!content.prototype && (content.prototype.$set || /^Proxy</.test(content.name))) ||
        // when using Server Side Rendering, a svelte component is an object with a render function:
        // (cf https://svelte.dev/docs/server-side-component-api)
        typeof content?.render === 'function');
};
`;export{e as default};
