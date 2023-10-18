const e=`import { findChangedProperties, toReadableStore } from '@agnos-ui/core';
import { computed } from '@amadeus-it-group/tansu';
import { createEventDispatcher as svelteCreateEventDispatcher } from 'svelte';
import { useSvelteSlot } from './slotTypes';
export function createPatchChangedProps(patchFn) {
    let previousProps = {};
    return (props) => {
        const changedProps = findChangedProperties(previousProps, props);
        previousProps = props;
        if (changedProps) {
            patchFn(changedProps);
        }
    };
}
export const createEventDispatcher = () => svelteCreateEventDispatcher();
export const callWidgetFactoryWithConfig = ({ factory, $$slots, defaultConfig, widgetConfig, events, }) => {
    const defaultConfig$ = toReadableStore(defaultConfig);
    const processedSlots = {};
    for (const [name, present] of Object.entries($$slots)) {
        if (present) {
            processedSlots[\`slot\${name[0].toUpperCase()}\${name.substring(1)}\`] = useSvelteSlot;
        }
    }
    const widget = factory({
        config: computed(() => ({ ...defaultConfig$(), ...widgetConfig?.(), ...processedSlots })),
    });
    widget.patch(events);
    return { ...widget, patchChangedProps: createPatchChangedProps(widget.patch) };
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
