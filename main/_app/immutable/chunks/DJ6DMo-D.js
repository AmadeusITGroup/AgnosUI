const e=`import { findChangedProperties, toReadableStore } from '@agnos-ui/core/utils/stores';
import { asWritable, computed, writable } from '@amadeus-it-group/tansu';
import { fromStore } from 'svelte/store';
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
 *
 * @param event - function that will be merged with the value of the store so that it is always called first when the event handler is called
 * @param prop - the initial value of the store
 * @returns a writable store to be used for an event handler
 */
const eventStore = (event, prop) => {
    const store$ = writable(prop, { equal: Object.is });
    return asWritable(computed(() => mergeEventFns(event, store$())), {
        set: store$.set,
        update: store$.update,
    });
};
/**
 * Call a widget factory using provided configs.
 *
 * @param factory - the widget factory to call
 * @param options - the optional options
 * @param options.defaultConfig - the default config of the widget
 * @param options.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param options.events - the events of the widget
 * @param options.props - the props of the widget
 * @returns the state, api and directives to track and interact with the widget
 */
export const callWidgetFactoryWithConfig = (factory, options) => {
    const { defaultConfig, widgetConfig, events } = options ?? {};
    const props = options?.props ?? {};
    const defaultConfig$ = toReadableStore(defaultConfig);
    const propsWithEvents = { ...props };
    if (events) {
        for (const event of Object.keys(events)) {
            propsWithEvents[event] = eventStore(events[event], props[event]);
        }
    }
    const widget = factory({
        config: computed(() => ({ ...defaultConfig$(), ...widgetConfig?.() })),
        props: propsWithEvents,
    });
    const runes = Object.fromEntries(Object.entries(widget.stores).map(([key, val]) => [key.slice(0, -1), fromStore(val)]));
    const patch = createPatchChangedProps(props, widget.patch);
    $effect(() => {
        patch({ ...options?.props });
    });
    return {
        api: widget.api,
        directives: widget.directives,
        state: new Proxy(runes, {
            get(target, name, receiver) {
                if (Reflect.has(target, name)) {
                    return Reflect.get(target, name, receiver).current;
                }
                return undefined;
            },
        }),
    };
};
`;export{e as default};
