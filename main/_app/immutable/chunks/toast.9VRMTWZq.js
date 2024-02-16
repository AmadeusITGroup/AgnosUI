const t=`import { computed } from '@amadeus-it-group/tansu';
import { extendWidgetProps } from '../../services/extendWidget';
import { directiveSubscribe } from '../../utils/directive';
import { typeBoolean, typeNumberInRangeFactory } from '../../utils/writables';
import { createCommonAlert, getCommonAlertDefaultConfig } from '../alert/common';
const toastDefaultConfig = {
    autohide: true,
    delay: 5000,
    slotHeader: undefined,
};
const toastConfigValidator = {
    autohide: typeBoolean,
    delay: typeNumberInRangeFactory(0, +Infinity, { strict: true }),
};
/**
 * Retrieve a shallow copy of the default toast config
 * @returns the default toast config
 */
export function getToastDefaultConfig() {
    return { ...getCommonAlertDefaultConfig(), ...toastDefaultConfig };
}
/**
 * Create a ToastWidget with given config props
 * @param config - an optional toast config
 * @returns a ToastWidget
 */
export function createToast(config) {
    let _timeout;
    const extendedAlert = extendWidgetProps(createCommonAlert, toastDefaultConfig, toastConfigValidator)(config);
    const time$ = computed(() => {
        clearTimeout(_timeout);
        if (extendedAlert.stores.autohide$()) {
            _timeout = setTimeout(() => extendedAlert.api.close(), extendedAlert.stores.delay$());
        }
    });
    return {
        ...extendedAlert,
        directives: {
            ...extendedAlert.directives,
            autohideDirective: directiveSubscribe(time$),
        },
    };
}
`;export{t as default};
