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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29lcmNpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvY29lcmNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVoRTs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsS0FBYztJQUNoRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDeEIsT0FBTyxTQUFTLENBQUM7S0FDakI7SUFDRCxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsS0FBYztJQUMvQyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7UUFDeEIsT0FBTyxTQUFTLENBQUM7S0FDakI7SUFDRCxPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib29sZWFuQXR0cmlidXRlLCBudW1iZXJBdHRyaWJ1dGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSB2YWx1ZSAodHlwaWNhbGx5IGEgc3RyaW5nKSB0byBhIGJvb2xlYW4uXG4gKiBJbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIG9mIGFuIGlucHV0LlxuICpcbiAqICBAdXNhZ2VOb3Rlc1xuICogIGBgYHR5cGVzY3JpcHRcbiAqICBASW5wdXQoeyB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZSB9KSBzdGF0dXM6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gKiAgYGBgXG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gYmUgdHJhbnNmb3JtZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdUJvb2xlYW5BdHRyaWJ1dGUodmFsdWU6IHVua25vd24pOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcblx0aWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHR9XG5cdHJldHVybiBib29sZWFuQXR0cmlidXRlKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1zIGEgdmFsdWUgKHR5cGljYWxseSBhIHN0cmluZykgdG8gYSBudW1iZXIuXG4gKiBJbnRlbmRlZCB0byBiZSB1c2VkIGFzIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIG9mIGFuIGlucHV0LlxuICogQHBhcmFtIHZhbHVlIFZhbHVlIHRvIGJlIHRyYW5zZm9ybWVkLlxuICpcbiAqICBAdXNhZ2VOb3Rlc1xuICogIGBgYHR5cGVzY3JpcHRcbiAqICBASW5wdXQoeyB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlIH0pIGlkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gKiAgYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdU51bWJlckF0dHJpYnV0ZSh2YWx1ZTogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG5cdGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0fVxuXHRyZXR1cm4gbnVtYmVyQXR0cmlidXRlKHZhbHVlKTtcbn1cbiJdfQ==`;export{n as default};
