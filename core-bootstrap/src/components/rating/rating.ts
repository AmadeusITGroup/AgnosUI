import type {RatingApi, RatingDirectives, StarContext, RatingState as CoreState, RatingProps as CoreProps} from '@agnos-ui/core/components/rating';
import {getRatingDefaultConfig as getCoreDefaultConfig, createRating as createCoreRating} from '@agnos-ui/core/components/rating';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import type {SlotContent, Widget, WidgetFactory} from '@agnos-ui/core/types';

export * from '@agnos-ui/core/components/rating';

interface RatingExtraProps {
	/**
	 * The template to override the way each star is displayed.
	 *
	 * @defaultValue
	 * ```ts
	 * ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734)
	 * ```
	 */
	star: SlotContent<StarContext>;
}

/**
 * Represents the state of a rating component.
 */
export interface RatingState extends CoreState, RatingExtraProps {}

/**
 * Represents the properties for the Rating component.
 */
export interface RatingProps extends CoreProps, RatingExtraProps {}

/**
 * Represents a Rating Widget component.
 */
export type RatingWidget = Widget<RatingProps, RatingState, RatingApi, RatingDirectives>;

const defaultConfigExtraProps: RatingExtraProps = {
	star: ({fill}: StarContext) => String.fromCharCode(fill === 100 ? 9733 : 9734),
};

/**
 * Retrieve a shallow copy of the default Rating config
 * @returns the default Rating config
 */
export function getRatingDefaultConfig(): RatingProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps} as any;
}

/**
 * Create a RatingWidget with given config props
 * @param config - an optional rating config
 * @returns a RatingWidget
 */

export const createRating: WidgetFactory<RatingWidget> = extendWidgetProps(createCoreRating, defaultConfigExtraProps, {});
