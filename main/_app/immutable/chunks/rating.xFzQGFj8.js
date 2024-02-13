const n=`import { computed, writable } from '@amadeus-it-group/tansu';
import { INVALID_VALUE } from '../../types';
import { bindableProp, stateStores, writablesForProps } from '../../utils/stores';
import { clamp, isNumber } from '../../utils/internal/checks';
import { typeBoolean, typeFunction, typeNumber, typeString } from '../../utils/writables';
import { noop } from '../../utils/internal/func';
const defaultConfig = {
    rating: 0,
    tabindex: 0,
    maxRating: 10,
    disabled: false,
    readonly: false,
    resettable: true,
    ariaValueTextFn: (rating, maxRating) => \`\${rating} out of \${maxRating}\`,
    onHover: noop,
    onLeave: noop,
    onRatingChange: noop,
    className: '',
    slotStar: ({ fill }) => String.fromCharCode(fill === 100 ? 9733 : 9734),
    ariaLabel: 'Rating',
    ariaLabelledBy: '',
};
/**
 * Returns a shallow copy of the default rating config.
 * @returns a copy of the default config
 */
export function getRatingDefaultConfig() {
    return { ...defaultConfig };
}
// TODO export normalize function in utils and test them.
const configValidator = {
    rating: typeNumber,
    tabindex: typeNumber,
    maxRating: { normalizeValue: (value) => (isNumber(value) ? Math.max(0, value) : INVALID_VALUE) },
    disabled: typeBoolean,
    readonly: typeBoolean,
    resettable: typeBoolean,
    ariaValueTextFn: typeFunction,
    onHover: typeFunction,
    onLeave: typeFunction,
    onRatingChange: typeFunction,
    className: typeString,
    ariaLabel: typeString,
    ariaLabelledBy: typeString,
};
/**
 * Create a RatingWidget with given config props
 * @param config - an optional alert config
 * @returns a RatingWidget
 */
export function createRating(config) {
    const [{ 
    // dirty inputs that need adjustment:
    rating$: _dirtyRating$, tabindex$: _dirtyTabindex$, 
    // clean inputs with value validation:
    ariaValueTextFn$, onHover$, onLeave$, onRatingChange$, ...stateProps }, patch,] = writablesForProps(defaultConfig, config, configValidator);
    const { maxRating$, disabled$, readonly$, resettable$ } = stateProps;
    // clean inputs adjustment to valid range
    const tabindex$ = computed(() => (disabled$() ? -1 : _dirtyTabindex$()));
    const rating$ = bindableProp(_dirtyRating$, onRatingChange$, (dirtyRating) => clamp(dirtyRating, maxRating$()));
    // internal inputs
    const _hoveredRating$ = writable(0);
    // computed
    const isInteractive$ = computed(() => !disabled$() && !readonly$());
    const visibleRating$ = computed(() => {
        const hoveredRating = _hoveredRating$();
        return hoveredRating !== 0 ? hoveredRating : rating$();
    });
    const ariaValueText$ = computed(() => ariaValueTextFn$()(visibleRating$(), maxRating$()));
    const stars$ = computed(() => {
        const visibleRating = visibleRating$();
        return Array.from({ length: maxRating$() }, (_v, i) => ({
            fill: Math.round(Math.max(Math.min(visibleRating - i, 1), 0) * 100),
            index: i,
        }));
    });
    return {
        ...stateStores({
            ariaValueText$,
            isInteractive$,
            rating$,
            stars$,
            tabindex$,
            visibleRating$,
            ...stateProps,
        }),
        patch,
        actions: {
            click: (index) => {
                if (isInteractive$() && index > 0 && index <= maxRating$()) {
                    rating$.update((rating) => (rating === index && resettable$() ? 0 : index));
                }
            },
            hover: (index) => {
                if (isInteractive$() && index > 0 && index <= maxRating$()) {
                    _hoveredRating$.set(index);
                    onHover$()(index);
                }
            },
            leave: () => {
                if (isInteractive$()) {
                    onLeave$()(_hoveredRating$());
                    _hoveredRating$.set(0);
                }
            },
            handleKey(event) {
                if (isInteractive$()) {
                    const { key } = event;
                    switch (key) {
                        case 'ArrowLeft':
                        case 'ArrowDown':
                            rating$.update((rating) => rating - 1);
                            break;
                        case 'ArrowRight':
                        case 'ArrowUp':
                            rating$.update((rating) => rating + 1);
                            break;
                        case 'Home':
                        case 'PageDown':
                            rating$.set(0);
                            break;
                        case 'End':
                        case 'PageUp':
                            rating$.set(maxRating$());
                            break;
                        default:
                            return;
                    }
                    event.preventDefault();
                    event.stopPropagation();
                }
            },
        },
        directives: {},
        api: {},
    };
}
`;export{n as default};
