const n=`import { booleanAttribute, numberAttribute } from '@angular/core';
/**
 * Transforms a value (typically a string) to a boolean.
 * Intended to be used as a transform function of an input.
 *
 *  @usageNotes
 *  \`\`\`typescript
 *  @Input({ transform: auBooleanAttribute }) status: boolean | undefined;
 *  \`\`\`
 * @param value Value to be transformed.
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
 * @param value Value to be transformed.
 *
 *  @usageNotes
 *  \`\`\`typescript
 *  @Input({ transform: auNumberAttribute }) id: number | undefined;
 *  \`\`\`
 */
export function auNumberAttribute(value) {
    if (value === undefined) {
        return undefined;
    }
    return numberAttribute(value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29lcmNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9oZWFkbGVzcy9zcmMvbGliL2NvZXJjaW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFaEU7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQWM7SUFDaEQsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0tBQ2pCO0lBQ0QsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEtBQWM7SUFDL0MsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDO0tBQ2pCO0lBQ0QsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9vbGVhbkF0dHJpYnV0ZSwgbnVtYmVyQXR0cmlidXRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgdmFsdWUgKHR5cGljYWxseSBhIHN0cmluZykgdG8gYSBib29sZWFuLlxuICogSW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHRyYW5zZm9ybSBmdW5jdGlvbiBvZiBhbiBpbnB1dC5cbiAqXG4gKiAgQHVzYWdlTm90ZXNcbiAqICBgYGB0eXBlc2NyaXB0XG4gKiAgQElucHV0KHsgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGUgfSkgc3RhdHVzOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICogIGBgYFxuICogQHBhcmFtIHZhbHVlIFZhbHVlIHRvIGJlIHRyYW5zZm9ybWVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXVCb29sZWFuQXR0cmlidXRlKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG5cdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXHRyZXR1cm4gYm9vbGVhbkF0dHJpYnV0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtcyBhIHZhbHVlICh0eXBpY2FsbHkgYSBzdHJpbmcpIHRvIGEgbnVtYmVyLlxuICogSW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHRyYW5zZm9ybSBmdW5jdGlvbiBvZiBhbiBpbnB1dC5cbiAqIEBwYXJhbSB2YWx1ZSBWYWx1ZSB0byBiZSB0cmFuc2Zvcm1lZC5cbiAqXG4gKiAgQHVzYWdlTm90ZXNcbiAqICBgYGB0eXBlc2NyaXB0XG4gKiAgQElucHV0KHsgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZSB9KSBpZDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICogIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gYXVOdW1iZXJBdHRyaWJ1dGUodmFsdWU6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuXHRpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblx0cmV0dXJuIG51bWJlckF0dHJpYnV0ZSh2YWx1ZSk7XG59XG4iXX0=`;export{n as default};
