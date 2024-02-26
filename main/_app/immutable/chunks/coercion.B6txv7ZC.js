const n=`import { booleanAttribute, numberAttribute } from '@angular/core';
/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 * @example
 * \`\`\`@Input({ transform: auBooleanAttribute }) status: boolean | undefined;\`\`\`
 * @param value - Value to be transformed.
 * @returns the value transformed
 */
export function auBooleanAttribute(value) {
    if (value === undefined) {
        return undefined;
    }
    return booleanAttribute(value);
}
/**
 * Transforms a value (typically a string) to a number.
 * Intended to be used as a transform function of an input.
 * @param value - Value to be transformed.
 *
 * @example
 *  \`\`\`@Input({ transform: auNumberAttribute }) id: number | undefined;\`\`\`
 * @returns the value transformed
 */
export function auNumberAttribute(value) {
    if (value === undefined) {
        return undefined;
    }
    return numberAttribute(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29lcmNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvY29lcmNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVoRTs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxLQUFjO0lBQ2hELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxLQUFjO0lBQy9DLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7SUFDRCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSB2YWx1ZSAodHlwaWNhbGx5IGEgc3RyaW5nKSB0byBhIGJvb2xlYW4uXG4gKiBJbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIG9mIGFuIGlucHV0LlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBASW5wdXQoeyB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZSB9KSBzdGF0dXM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7YGBgXG4gKiBAcGFyYW0gdmFsdWUgLSBWYWx1ZSB0byBiZSB0cmFuc2Zvcm1lZC5cbiAqIEByZXR1cm5zIHRoZSB2YWx1ZSB0cmFuc2Zvcm1lZFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXVCb29sZWFuQXR0cmlidXRlKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG5cdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXHRyZXR1cm4gYm9vbGVhbkF0dHJpYnV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIHZhbHVlICh0eXBpY2FsbHkgYSBzdHJpbmcpIHRvIGEgbnVtYmVyLlxuICogSW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHRyYW5zZm9ybSBmdW5jdGlvbiBvZiBhbiBpbnB1dC5cbiAqIEBwYXJhbSB2YWx1ZSAtIFZhbHVlIHRvIGJlIHRyYW5zZm9ybWVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgYGBgQElucHV0KHsgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZSB9KSBpZDogbnVtYmVyIHwgdW5kZWZpbmVkO2BgYFxuICogQHJldHVybnMgdGhlIHZhbHVlIHRyYW5zZm9ybWVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdU51bWJlckF0dHJpYnV0ZSh2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG5cdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXHRyZXR1cm4gbnVtYmVyQXR0cmlidXRlKHZhbHVlKTtcbn1cbiJdfQ==`;export{n as default};
