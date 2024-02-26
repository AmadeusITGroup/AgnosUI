const e=`import { computed } from '@amadeus-it-group/tansu';
import { INVALID_VALUE } from '../../types';
import { bindableProp, stateStores, writablesForProps } from '../../utils/stores';
import { clamp, isNumber } from '../../utils/internal/checks';
import { typeBoolean, typeFunction, typeNumber, typeString } from '../../utils/writables';
import { noop } from '../../utils/internal/func';
const PAGE_LINK_DEFAULT = '#';
const defaultConfig = {
    page: 1,
    collectionSize: 0,
    pageSize: 10,
    disabled: false,
    directionLinks: true,
    boundaryLinks: false,
    size: null,
    onPageChange: noop,
    pagesFactory: (page, pageCount) => {
        // TODO extract this for testing
        const pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return pages;
    },
    ariaLabel: 'Page navigation',
    activeLabel: '(current)',
    ariaPageLabel: (processPage, pageCount) => \`Page \${processPage} of \${pageCount}\`,
    ariaFirstLabel: 'Action link for first page',
    ariaPreviousLabel: 'Action link for previous page',
    ariaNextLabel: 'Action link for next page',
    ariaLastLabel: 'Action link for last page',
    className: '',
    slotEllipsis: '…',
    slotFirst: '«',
    slotPrevious: '‹',
    slotNext: '›',
    slotLast: '»',
    slotPages: undefined,
    slotNumberLabel: ({ displayedPage }) => \`\${displayedPage}\`,
    pageLink: (_page) => PAGE_LINK_DEFAULT,
};
/**
 * Returns a shallow copy of the default pagination config
 * @returns a copy of the default config
 */
export function getPaginationDefaultConfig() {
    return { ...defaultConfig };
}
const configValidator = {
    page: typeNumber,
    collectionSize: typeNumber,
    pageSize: typeNumber,
    disabled: typeBoolean,
    directionLinks: typeBoolean,
    boundaryLinks: typeBoolean,
    size: { normalizeValue: (value) => (value === 'lg' || value === 'sm' || value === null ? value : INVALID_VALUE) },
    onPageChange: typeFunction,
    pagesFactory: typeFunction,
    ariaLabel: typeString,
    activeLabel: typeString,
    ariaPageLabel: typeFunction,
    ariaFirstLabel: typeString,
    ariaPreviousLabel: typeString,
    ariaNextLabel: typeString,
    ariaLastLabel: typeString,
    className: typeString,
    pageLink: typeFunction,
};
/**
 * Create a PaginationWidget with given config props
 * @param config - an optional pagination config
 * @returns a PaginationWidget
 */
export function createPagination(config) {
    const [{ 
    // dirty inputs that need adjustment:
    page$: _dirtyPage$, 
    // clean inputs with value validation:
    collectionSize$, pageSize$, onPageChange$, pagesFactory$, ariaPageLabel$, pageLink$, ...stateProps }, patch,] = writablesForProps(defaultConfig, config, configValidator);
    // computed
    // nb total of Pages.
    const pageCount$ = computed(() => {
        let pageCount = Math.ceil(collectionSize$() / pageSize$());
        // Here we choose to always display a page when collection size is 0
        if (!isNumber(pageCount) || pageCount < 1) {
            pageCount = 1;
        }
        return pageCount;
    });
    // current page
    const page$ = bindableProp(_dirtyPage$, onPageChange$, (dirtyPage) => clamp(dirtyPage, pageCount$(), 1));
    const pages$ = computed(() => pagesFactory$()(page$(), pageCount$()));
    const nextDisabled$ = computed(() => page$() === pageCount$() || stateProps.disabled$());
    const previousDisabled$ = computed(() => page$() === 1 || stateProps.disabled$());
    const pagesLabel$ = computed(() => {
        const ariaPageLabel = ariaPageLabel$();
        const pageCount = pageCount$();
        return pages$().map((page) => ariaPageLabel(page, pageCount));
    });
    const pagesHrefs$ = computed(() => {
        const pageLinkFactory = pageLink$();
        const pageCount = pageCount$();
        return Array.from({ length: pageCount }, (_, index) => pageLinkFactory(index + 1));
    });
    const directionsHrefs$ = computed(() => {
        const pagesHrefs = pagesHrefs$();
        const pageIndex = page$() - 1;
        return {
            previous: pagesHrefs.at(pageIndex > 0 ? pageIndex - 1 : 0),
            next: pagesHrefs.at(pageIndex + 1) ?? pagesHrefs.at(-1),
        };
    });
    /**
     * Stop event propagation when href is the default value;
     * Update page number when navigation is in the same tab and stop the event propagation;
     * For navigations outside current browser tab let the default behavior, without updating the page number;
     * @param pageNumber current page number
     * @param event UI event triggered when page changed
     * @param pageNavigationHandler change handler callback for navigation elements
     */
    function handleNavigation(pageNumber, event, pageNavigationHandler) {
        if (pagesHrefs$()[pageNumber - 1] === PAGE_LINK_DEFAULT) {
            event?.preventDefault();
        }
        if (!event || !(event.ctrlKey || event.metaKey)) {
            event?.preventDefault();
            if (pageNavigationHandler) {
                page$.update(pageNavigationHandler);
            }
            else {
                page$.set(pageNumber);
            }
        }
    }
    return {
        ...stateStores({
            pageCount$,
            page$,
            pages$,
            nextDisabled$,
            previousDisabled$,
            pagesLabel$,
            pagesHrefs$,
            directionsHrefs$,
            ...stateProps,
        }),
        patch,
        actions: {
            /**
             * Set the current page pageNumber (starting from 1)
             * @param pageNumber - Current page number to set.
             * Value is normalized between 1 and the number of page
             * @param event UI event that triggered the select
             */
            select(pageNumber, event) {
                handleNavigation(pageNumber, event);
            },
            /**
             * Select the first page
             * @param event Event triggering the action
             */
            first(event) {
                handleNavigation(1, event);
            },
            /**
             * Select the previous page
             * @param event Event triggering the action
             */
            previous(event) {
                handleNavigation(page$() - 1, event, (page) => page - 1);
            },
            /**
             * Select the next page
             * @param event Event triggering the action
             */
            next(event) {
                handleNavigation(page$() + 1, event, (page) => page + 1);
            },
            /**
             * Select the last page
             * @param event Event triggering the action
             */
            last(event) {
                handleNavigation(pageCount$(), event);
            },
        },
        api: {
            isEllipsis(pageNumber) {
                return pageNumber === -1;
            },
        },
        directives: {},
    };
}
`;export{e as default};
