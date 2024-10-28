const n=`import { INVALID_VALUE } from "./types.js";
function isNumber(value) {
  return typeof value === "number" && !isNaN(value) && Number.isFinite(value);
}
function isBoolean(value) {
  return value === true || value === false;
}
function isFunction(value) {
  return typeof value === "function";
}
function isString(value) {
  return typeof value === "string";
}
const isArray = Array.isArray;
function clamp(value, max, min = 0) {
  return Math.max(Math.min(value, max), min);
}
const isHTMLElement = (value) => value instanceof HTMLElement;
const allowNull = (isType) => (value) => value === null || isType(value);
function isFromEnum(list) {
  return (value) => list.includes(value);
}
const testToNormalizeValue = (filter) => (value) => filter(value) ? value : INVALID_VALUE;
const numberNormalizeFn = testToNormalizeValue(isNumber);
const typeNumber = {
  normalizeValue: numberNormalizeFn
};
function typeNumberInRangeFactory(min, max, options = {}) {
  const { strict = false, useClamp = true } = options;
  return {
    normalizeValue: (value) => {
      let normalizedNumber = numberNormalizeFn(value);
      if (normalizedNumber !== INVALID_VALUE) {
        if (!strict && useClamp) {
          normalizedNumber = clamp(normalizedNumber, max, min);
        }
        if (normalizedNumber >= min && normalizedNumber <= max) {
          if (!strict || normalizedNumber !== min && normalizedNumber !== max) {
            return normalizedNumber;
          }
        }
      }
      return INVALID_VALUE;
    }
  };
}
const typeBoolean = {
  normalizeValue: testToNormalizeValue(isBoolean)
};
const typeBooleanOrNull = {
  normalizeValue: testToNormalizeValue(allowNull(isBoolean))
};
const typeString = {
  normalizeValue: testToNormalizeValue(isString)
};
const typeFunction = {
  normalizeValue: testToNormalizeValue(isFunction),
  equal: Object.is
};
const typeHTMLElementOrNull = {
  normalizeValue: testToNormalizeValue(allowNull(isHTMLElement)),
  equal: Object.is
};
const typeArray = {
  normalizeValue: testToNormalizeValue(isArray),
  equal: (a, b) => {
    if (a === b) {
      return true;
    } else {
      if ((a == null ? void 0 : a.length) !== (b == null ? void 0 : b.length)) {
        return false;
      }
      return a.every((val, index) => val === b[index]);
    }
  }
};
function createTypeEnum(enumList) {
  return {
    normalizeValue: testToNormalizeValue(isFromEnum(enumList))
  };
}
export {
  typeNumber as a,
  typeNumberInRangeFactory as b,
  typeBoolean as c,
  typeBooleanOrNull as d,
  typeString as e,
  typeFunction as f,
  typeHTMLElementOrNull as g,
  typeArray as h,
  createTypeEnum as i,
  clamp as j,
  isNumber as k,
  testToNormalizeValue as t
};
`;export{n as default};
