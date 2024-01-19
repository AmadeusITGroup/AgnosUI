const e=`import { computed } from '@amadeus-it-group/tansu';
import { INVALID_VALUE } from '../../types';
import { bindableDerived, stateStores, writablesForProps } from '../../utils/stores';
import { clamp, isNumber } from '../../utils/internal/checks';
import { typeBoolean, typeFunction, typeNumber, typeString } from '../../utils/writables';
import { noop } from '../../utils/internal/func';
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
    collectionSize$, pageSize$, onPageChange$, pagesFactory$, ariaPageLabel$, ...stateProps }, patch,] = writablesForProps(defaultConfig, config, configValidator);
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
    const page$ = bindableDerived(onPageChange$, [_dirtyPage$, pageCount$], ([dirtyPage, pageCount]) => clamp(dirtyPage, pageCount, 1));
    const pages$ = computed(() => pagesFactory$()(page$(), pageCount$()));
    const nextDisabled$ = computed(() => page$() === pageCount$() || stateProps.disabled$());
    const previousDisabled$ = computed(() => page$() === 1 || stateProps.disabled$());
    const pagesLabel$ = computed(() => {
        const ariaPageLabel = ariaPageLabel$();
        const pageCount = pageCount$();
        return pages$().map((page) => ariaPageLabel(page, pageCount));
    });
    return {
        ...stateStores({
            pageCount$,
            page$,
            pages$,
            nextDisabled$,
            previousDisabled$,
            pagesLabel$,
            ...stateProps,
        }),
        patch,
        actions: {
            /**
             * Set the current page pageNumber (starting from 1)
             * @param pageNumber - Current page number to set.
             * Value is normalized between 1 and the number of page
             */
            select(pageNumber) {
                patch({ page: pageNumber });
            },
            /**
             * Select the first page
             */
            first() {
                patch({ page: 1 });
            },
            /**
             * Select the previous page
             */
            previous() {
                patch({ page: page$() - 1 });
            },
            /**
             * Select the next page
             */
            next() {
                patch({ page: page$() + 1 });
            },
            /**
             * Select the last page
             */
            last() {
                patch({ page: pageCount$() });
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
