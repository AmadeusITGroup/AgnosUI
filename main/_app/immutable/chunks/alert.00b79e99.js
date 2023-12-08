const t=`import { createCommonAlert, getCommonAlertDefaultConfig } from './common';
import { extendWidgetProps } from '../../services/extendWidget';
import { typeString } from '../../utils/writables';
export * from './common';
const alertDefaultConfig = {
    type: 'primary',
};
const alertConfigValidator = {
    type: typeString,
};
/**
 * Retrieve a shallow copy of the default alert config
 * @returns the default alert config
 */
export function getAlertDefaultConfig() {
    return { ...getCommonAlertDefaultConfig(), ...alertDefaultConfig };
}
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
export const createAlert = extendWidgetProps(createCommonAlert, alertDefaultConfig, alertConfigValidator);
`;export{t as default};
