const e=`import type { PaginationContext, PaginationProps } from './pagination.gen';
/**
 * Renders the default slot pages for the pagination component.
 *
 * @param slotContext - The context containing pagination state and directives.
 * @returns The rendered pagination items or null if there are no pages.
 *
 * The function iterates over the pages in the pagination state and generates JSX elements for each page.
 * If a page is represented by -1, it renders an ellipsis item. Otherwise, it renders a page item.
 *
 * - Ellipsis items are rendered as disabled list items with an aria-hidden attribute for accessibility.
 * - Page items are rendered using the \`PageItem\` component, with properties for disabled state, active state, and directives.
 *
 * The function returns a fragment containing the generated JSX elements, or null if there are no pages to render.
 */
export declare const PaginationDefaultSlotPages: (slotContext: PaginationContext) => import("react/jsx-runtime").JSX.Element | null;
/**
 * Renders the default slot structure for the pagination component.
 *
 * @param slotContext - The context containing the state and directives for pagination.
 * @returns The rendered pagination component.
 *
 * The function constructs the pagination structure based on the provided state and directives.
 * It conditionally includes navigation buttons for first, previous, next, and last pages based on the state.
 * The pagination items are wrapped in an unordered list with appropriate classes.
 * Additionally, an aria-live region is included for accessibility purposes.
 */
export declare const PaginationDefaultSlotStructure: (slotContext: PaginationContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Pagination component that renders a navigation element for paginated content.
 * It uses the {@link useWidgetWithConfig} hook to create a pagination widget with the provided props.
 *
 * @param props - The properties for the Pagination component.
 * @returns The rendered pagination navigation element.
 */
export declare function Pagination(props: Partial<PaginationProps>): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
