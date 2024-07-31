import {getPaginationDefaultConfig, getRatingDefaultConfig} from '@agnos-ui/core-bootstrap';
import {collapseVerticalTransition, fadeTransition} from '@agnos-ui/core-bootstrap/transitions';

export type PropsValues = keyof typeof propsValuesList;

const propsValuesList = {
	//common
	log: {value: (x: any) => console.log(x), label: 'Log'},
	noop: {value: () => {}, label: 'Noop'},
	//transitions
	collapse: {value: collapseVerticalTransition, label: 'Collapse'},
	fade: {value: fadeTransition, label: 'Fade'},
	//rating
	ratingValueFunction: {value: getRatingDefaultConfig().ariaValueTextFn, label: 'RatingValue'},
	heartsRatingValue: {
		value: (rating: number, maxRating: number) =>
			`${rating} ${rating === 1 ? 'heart' : 'hearts'} out of ${maxRating} ${maxRating === 1 ? 'heart' : 'hearts'}`,
		label: 'HeartsRatingValue',
	},
	starRatingValue: {
		value: (rating: number, maxRating: number) =>
			`${rating} ${rating === 1 ? 'star' : 'stars'} out of ${maxRating} ${maxRating === 1 ? 'star' : 'stars'}`,
		label: 'StarRatingValue',
	},
	starIconRating: {value: getRatingDefaultConfig().star, label: 'StarIconRating'},
	heartIconRating: {value: ({fill}: {fill: number}) => String.fromCharCode(fill === 100 ? 9829 : 9825), label: 'HeartIconRating'},
	//pagination
	defaultPageFactory: {value: getPaginationDefaultConfig().pagesFactory, label: 'DefaultPageFactory'},
	simpleLabel: {value: getPaginationDefaultConfig().ariaPageLabel, label: 'SimpleLabel'},
	pageLabel: {value: (processPage: number, pageCount: number) => `Page ${processPage} of ${pageCount}`, label: 'PageLabel'},
	numberLabel: {value: getPaginationDefaultConfig().numberLabel, label: 'NumberLabel'},
	//slider
	sliderLabelHandleDefault: {
		value: (value: number) => `${value}`,
		label: 'SliderLabelHandleDefault',
	},
	sliderValueTextUnits: {
		value: (value: number) => `${value} units`,
		label: 'SliderValueTextUnits',
	},
};

export const getPropValues = (config: Record<string, any>) => {
	const configUpdated = {...config};
	for (const [key, value] of Object.entries(configUpdated)) {
		if (propsValuesList[value?.value as PropsValues] !== undefined) {
			configUpdated[key] = propsValuesList[value.value as PropsValues].value;
		}
	}
	return configUpdated;
};

export const getPropValueLabel = (key: PropsValues) => {
	return propsValuesList[key as PropsValues].label;
};
