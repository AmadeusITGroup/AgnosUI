const e=`import { isArray, isBoolean, isFunction, isNumber, isString } from './checks';
import { INVALID_VALUE } from './stores';
export const testToNormalizeValue = (filter) => (value) => filter(value) ? value : INVALID_VALUE;
export const typeNumber = {
    normalizeValue: testToNormalizeValue(isNumber),
};
export const typeBoolean = {
    normalizeValue: testToNormalizeValue(isBoolean),
};
export const typeString = {
    normalizeValue: testToNormalizeValue(isString),
};
export const typeFunction = {
    normalizeValue: testToNormalizeValue(isFunction),
    equal: Object.is,
};
export const typeArray = {
    normalizeValue: testToNormalizeValue(isArray),
    equal: (a, b) => {
        if (a === b) {
            return true;
        }
        else {
            if (a?.length !== b?.length) {
                return false;
            }
            return a.every((val, index) => val === b[index]);
        }
    },
};
`;export{e as default};
