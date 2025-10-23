const e=`import type { Directive } from '../types';
/**
 * Directive to manage focus trapping by setting the \`inert\` attribute on sibling elements.
 * This is useful for modal dialogs or overlays where interaction should be limited to a specific subtree.
 *
 * - Recursively traverses up the DOM tree.
 * - Sets \`inert\` on all siblings except the target element and \`<script>\` tags.
 * - Use \`data-agnos-ignore-inert\` to avoid inert attribute for a specified element.
 *
 * Takes boolean or undefined as value:
 * - \`true\` or \`undefined\`: Apply inert to siblings.
 * - \`false\`: Do not apply inert to siblings.
 *
 * Automatically reverts when the target element changes or is removed.
 */
export declare const siblingsInert: Directive<boolean | undefined>;
`;export{e as default};
