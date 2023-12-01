const n=`import { allowNull, clamp, isArray, isBoolean, isFunction, isHTMLElement, isNumber, isString } from './checks';
import { INVALID_VALUE } from './stores';
export const testToNormalizeValue = (filter) => (value) => filter(value) ? value : INVALID_VALUE;
const numberNormalizeFn = testToNormalizeValue(isNumber);
export const typeNumber = {
    normalizeValue: numberNormalizeFn,
};
/**
 * Factory function for creating a type constraint for numbers within a specified range.
 *
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @param options - Additional options to customize the behavior.
 *
 * @returns A type guard function that returns the clamp value or INVALID_VALUE depending on the provided options.
 */
export function typeNumberInRangeFactory(min, max, options = {}) {
    const { strict = false, useClamp = true } = options;
    return {
        normalizeValue: (value) => {
            let normalizedNumber = numberNormalizeFn(value);
            if (normalizedNumber !== INVALID_VALUE) {
                if (!strict && useClamp) {
                    normalizedNumber = clamp(normalizedNumber, max, min);
                }
                if (normalizedNumber >= min && normalizedNumber <= max) {
                    if (!strict || (normalizedNumber !== min && normalizedNumber !== max)) {
                        return normalizedNumber;
                    }
                }
            }
            return INVALID_VALUE;
        },
    };
}
export const typeBoolean = {
    normalizeValue: testToNormalizeValue(isBoolean),
};
export const typeBooleanOrNull = {
    normalizeValue: testToNormalizeValue(allowNull(isBoolean)),
};
export const typeString = {
    normalizeValue: testToNormalizeValue(isString),
};
export const typeFunction = {
    normalizeValue: testToNormalizeValue(isFunction),
    equal: Object.is,
};
export const typeHTMLElementOrNull = {
    normalizeValue: testToNormalizeValue(allowNull(isHTMLElement)),
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
`;export{n as default};
