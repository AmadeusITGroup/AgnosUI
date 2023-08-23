const t=`import type { WritableWithDefaultOptions } from './stores';
import { INVALID_VALUE } from './stores';
export declare const testToNormalizeValue: <T>(filter: (value: T) => boolean) => (value: T) => typeof INVALID_VALUE | T;
export declare const typeNumber: WritableWithDefaultOptions<number>;
export declare const typeBoolean: WritableWithDefaultOptions<boolean>;
export declare const typeString: WritableWithDefaultOptions<string, any>;
export declare const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any>;
`;export{t as default};
