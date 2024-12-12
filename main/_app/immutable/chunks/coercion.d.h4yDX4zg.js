const n=`/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 * @example
 * \`\`\`readonly status = input({ transform: auBooleanAttribute });\`\`\`
 * @param value - Value to be transformed.
 * @returns the value transformed
 */
export declare function auBooleanAttribute(value: unknown): boolean | undefined;
/**
 * Transforms a value (typically a string) to a number.
 * Intended to be used as a transform function of an input.
 * @param value - Value to be transformed.
 *
 * @example
 *  \`\`\`readonly id = input({ transform: auNumberAttribute });\`\`\`
 * @returns the value transformed
 */
export declare function auNumberAttribute(value: unknown): number | undefined;
`;export{n as default};