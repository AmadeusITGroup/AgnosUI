const n=`/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 *  @usageNotes
 *  \`\`\`typescript
 *  @Input({ transform: auBooleanAttribute }) status: boolean | undefined;
 *  \`\`\`
 * @param value Value to be transformed.
 */
export declare function auBooleanAttribute(value: unknown): boolean | undefined;
/**
 * Transforms a value (typically a string) to a number.
 * Intended to be used as a transform function of an input.
 * @param value Value to be transformed.
 *
 *  @usageNotes
 *  \`\`\`typescript
 *  @Input({ transform: auNumberAttribute }) id: number | undefined;
 *  \`\`\`
 */
export declare function auNumberAttribute(value: unknown): number | undefined;
`;export{n as default};
