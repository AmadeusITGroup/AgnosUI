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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29lcmNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvY29lcmNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVoRTs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxLQUFjO0lBQ2hELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtRQUN4QixPQUFPLFNBQVMsQ0FBQztLQUNqQjtJQUNELE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEtBQWM7SUFDL0MsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0tBQ2pCO0lBQ0QsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgdmFsdWUgKHR5cGljYWxseSBhIHN0cmluZykgdG8gYSBib29sZWFuLlxuICogSW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHRyYW5zZm9ybSBmdW5jdGlvbiBvZiBhbiBpbnB1dC5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgQElucHV0KHsgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGUgfSkgc3RhdHVzOiBib29sZWFuIHwgdW5kZWZpbmVkO2BgYFxuICogQHBhcmFtIHZhbHVlIC0gVmFsdWUgdG8gYmUgdHJhbnNmb3JtZWQuXG4gKiBAcmV0dXJucyB0aGUgdmFsdWUgdHJhbnNmb3JtZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGF1Qm9vbGVhbkF0dHJpYnV0ZSh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuXHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblx0cmV0dXJuIGJvb2xlYW5BdHRyaWJ1dGUodmFsdWUpO1xufVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSB2YWx1ZSAodHlwaWNhbGx5IGEgc3RyaW5nKSB0byBhIG51bWJlci5cbiAqIEludGVuZGVkIHRvIGJlIHVzZWQgYXMgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gb2YgYW4gaW5wdXQuXG4gKiBAcGFyYW0gdmFsdWUgLSBWYWx1ZSB0byBiZSB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogIGBgYEBJbnB1dCh7IHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGUgfSkgaWQ6IG51bWJlciB8IHVuZGVmaW5lZDtgYGBcbiAqIEByZXR1cm5zIHRoZSB2YWx1ZSB0cmFuc2Zvcm1lZFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXVOdW1iZXJBdHRyaWJ1dGUodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuXHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblx0cmV0dXJuIG51bWJlckF0dHJpYnV0ZSh2YWx1ZSk7XG59XG4iXX0=`;export{n as default};
