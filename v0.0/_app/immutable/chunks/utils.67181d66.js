const e=`const noop = () => {
    /* nothing to do*/
};
const truthyValue = (value) => !!value;
export const promiseFromStore = (store, condition = truthyValue) => {
    let resolve;
    const promise = new Promise((r) => (resolve = r));
    let unsubscribe = () => {
        storeUnsubscribe();
        unsubscribe = noop;
    };
    let storeUnsubscribe = noop;
    storeUnsubscribe = store.subscribe((value) => {
        if (condition(value)) {
            resolve(value);
            unsubscribe();
        }
    });
    if (unsubscribe === noop) {
        storeUnsubscribe();
    }
    return {
        promise,
        unsubscribe() {
            unsubscribe();
        },
    };
};
export const promiseFromEvent = (element, event) => {
    let resolve;
    const promise = new Promise((r) => (resolve = r));
    let unsubscribe = () => {
        element.removeEventListener(event, eventListener);
        unsubscribe = noop;
    };
    const eventListener = (event) => {
        if (event.target === element) {
            resolve(event);
            unsubscribe();
        }
    };
    element.addEventListener(event, eventListener);
    return {
        promise,
        unsubscribe() {
            unsubscribe();
        },
    };
};
export const promiseFromTimeout = (delay) => {
    let timeout;
    return {
        promise: new Promise((r) => {
            timeout = setTimeout(() => {
                timeout = undefined;
                r();
            }, delay);
        }),
        unsubscribe() {
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
        },
    };
};
/**
 * Launch a reflow using a call to the provided html element getBoudingClientRect
 * @param element the html element
 */
export function reflow(element = document.body) {
    element.getBoundingClientRect();
}
export const addClasses = (element, classes) => {
    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }
};
export const removeClasses = (element, classes) => {
    if (classes && classes.length > 0) {
        element.classList.remove(...classes);
    }
};
`;export{e as default};
