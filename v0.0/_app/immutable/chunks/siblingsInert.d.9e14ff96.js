const e=`/**
 * sliblingsInert directive
 * When used on an element, all siblings of the element and of its ancestors will be inert with the inert attribute.
 * In case it is used on multiple elements, only the last one has an effect (the directive keeps a stack of elements
 * on which it is used, so when the last one disappears, the previous one in the list becomes the one in effect).
 */
export declare const sliblingsInert: import("..").Directive<void>;
`;export{e as default};
