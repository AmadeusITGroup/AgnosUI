const n=`import type { Directive } from '../types';
/**
 * Configuration options for tracking pointer position after a pointerdown event.
 */
export interface PointerPositionHandlers {
    /**
     * Callback function invoked when the mouse moves after a pointerdown event.
     * @param position - The current mouse position information including origin and current coordinates.
     */
    onMove?: (event: PointerEvent) => void;
    /**
     * Callback function invoked when the move ends after a pointerdown event.
     */
    onEnd?: (event?: PointerEvent) => void;
}
/**
 * Creates a directive for tracking pointer position during drag operations.
 *
 * This function sets up event listeners that track pointer movements from an initial pointerdown event
 * through pointermover and pointerup events. It provides a directive that can be attached to DOM elements
 * to enable drag tracking functionality.
 *
 * @param onStart - Callback function invoked when the pointerdown event happens.
 *
 * @returns The pointerdownPositionDirective that can be applied to elements.
 *
 * @example
 * \`\`\`typescript
 * const pointerPositionDirective = createPointerdownPositionDirective((event) => {
 *   console.log(\`Drag started at (\${event.clientX}, \${event.clientY})\`);
 *   return {
 *     onMove: (event) => {
 *       console.log(\`Dragging: \${event.clientX}, dy=\${event.clientY}\`);
 *     },
 *     onEnd: () => {
 *       console.log(\`Drag ended\`);
 *     }
 *   };
 * });
 * \`\`\`
 */
export declare const createPointerdownPositionDirective: <T = void>(onStart: (position: PointerEvent, arg: T) => PointerPositionHandlers | undefined) => Directive<T>;
`;export{n as default};
