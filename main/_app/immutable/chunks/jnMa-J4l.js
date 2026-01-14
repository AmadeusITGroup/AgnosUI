const n=`import type { Directive } from '../types';
/**
 * Represents the position of the mouse during a mousedown event.
 * Typically used to capture the x and y coordinates of the mouse
 * when the user presses a mouse button.
 *
 */
export interface PointerPosition {
    /**
     * The initial X coordinate where the mouse button was pressed down.
     */
    xOrigin: number;
    /**
     * The initial Y coordinate where the mouse button was pressed down.
     */
    yOrigin: number;
    /**
     * The horizontal displacement (delta X) from the origin point.
     * Represents how far the mouse has moved horizontally since mousedown.
     */
    dx: number;
    /**
     * The vertical displacement (delta X) from the origin point.
     * Represents how far the mouse has moved vertically since mousedown.
     */
    dy: number;
}
/**
 * Configuration options for tracking mouse position after a mousedown event.
 */
export interface PointerdownPositionProps {
    /**
     * Callback function invoked when the mouse moves after a mousedown event.
     * @param position - The current mouse position information including origin and current coordinates.
     */
    onMoveStart?: (position: PointerPosition) => void;
    /**
     * Callback function invoked when the mouse moves after a mousedown event.
     * @param position - The current mouse position information including origin and current coordinates.
     */
    onMove?: (position: PointerPosition) => void;
    /**
     * Callback function invoked when the mouse moves after a mousedown event.
     * @param position - The current mouse position information including origin and current coordinates.
     */
    onMoveEnd?: (position: PointerPosition) => void;
}
/**
 * Creates a directive for tracking mouse position during drag operations.
 *
 * This function sets up event listeners that track mouse movements from an initial mousedown event
 * through mousemove and mouseup events. It provides a directive that can be attached to DOM elements
 * to enable drag tracking functionality.
 *
 * @param options - Configuration options for the pointerdown position tracker.
 * @param options.onMoveStart - Callback function invoked when the move starts.
 * @param options.onMove - Callback function invoked when the mouse moves during a drag operation.
 * @param options.onMoveEnd - Callback function invoked when the move ends.
 *
 * @returns The mousedownPositionDirective that can be applied to elements.
 *
 * @example
 * \`\`\`typescript
 * const pointerPositionDirective = createPointerdownPositionDirective({
 *   onMoveStart: (position) => {
 *     console.log(\`Drag started at (\${position.xOrigin}, \${position.yOrigin})\`);
 *   },
 *   onMove: (position) => {
 *     console.log(\`Dragging: dx=\${position.dx}, dy=\${position.dy}\`);
 *   },
 *   onMoveEnd: (position) => {
 *     console.log(\`Drag ended at (\${position.xOrigin + position.dx}, \${position.yOrigin + position.dy})\`);
 *   }
 * });
 * \`\`\`
 */
export declare function createPointerdownPositionDirective({ onMoveStart, onMove, onMoveEnd }?: PointerdownPositionProps): Directive;
`;export{n as default};
