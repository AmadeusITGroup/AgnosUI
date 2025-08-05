const pushHandle = (
	values: number[],
	index: number,
	currentValue: number,
	direction: -1 | 1,
	minRange: number,
	min: number,
	max: number,
	pushRange: boolean,
): number => {
	let nextValue = values[index + direction];
	if (nextValue == null || Math.abs(nextValue - currentValue) >= minRange) {
		return currentValue;
	}

	if (pushRange) {
		const targetValue = currentValue + minRange * direction;
		nextValue = pushHandle(values, index + direction, targetValue, direction, minRange, min, max, pushRange);
		nextValue = Math.max(Math.min(nextValue, max), min);
		values[index + direction] = nextValue;
	}

	if (Math.abs(nextValue - currentValue) < minRange) {
		currentValue = nextValue - minRange * direction;
		values[index] = currentValue;
	}
	return currentValue;
};

const pullHandle = (
	values: number[],
	index: number,
	currentValue: number,
	direction: -1 | 1,
	maxRange: number,
	min: number,
	max: number,
	pushRange: boolean,
): number => {
	let nextValue = values[index + direction];
	if (nextValue == null || Math.abs(nextValue - currentValue) <= maxRange) {
		return currentValue;
	}

	if (pushRange) {
		const targetValue = currentValue + maxRange * direction;
		nextValue = pullHandle(values, index + direction, targetValue, direction, maxRange, min, max, pushRange);
		nextValue = Math.max(Math.min(nextValue, max), min);
		values[index + direction] = nextValue;
	}

	if (Math.abs(nextValue - currentValue) > maxRange) {
		currentValue = nextValue - maxRange * direction;
		values[index] = currentValue;
	}
	return currentValue;
};

/**
 * Manages minimum and maximum range constraints for values in an array by adjusting adjacent values.
 *
 * This function ensures that the value at the specified index maintains proper minimum and maximum
 * distance constraints with its neighboring values. It pushes adjacent handles when necessary to
 * maintain the required range constraints.
 *
 * @param values - Array of numeric values to be managed (typically slider handle positions)
 * @param index - Index of the value in the array that serves as the reference point
 * @param minRange - Minimum allowed distance between adjacent values
 * @param maxRange - Maximum allowed distance between adjacent values
 * @param min - Minimum boundary of the slider
 * @param max - Maximum boundary of the slider
 * @param pushRange - Whether to enable pushing of adjacent values to maintain range constraints
 *
 * @returns The modified values array with range constraints applied
 *
 * @example
 * ```typescript
 * const values = [10, 20, 30, 40];
 * const result = manageMinMaxRange(values, 1, 5, 15, 0, 50, true);
 * // Result ensures value at index 1 maintains 5-15 unit distance from neighbors
 * ```
 */
export const manageMinMaxRange = (
	values: number[],
	index: number,
	minRange: number,
	maxRange: number,
	min: number,
	max: number,
	pushRange: boolean,
): number[] => {
	// Values must be kept sorted, so values are changed to be inside theirs neighbors.
	let current = values[index];
	const previous = values[index - 1];
	const next = values[index + 1];
	if (previous != null && current < previous) {
		current = values[index] = previous;
	} else if (next != null && current > next) {
		current = values[index] = next;
	}
	if (minRange) {
		current = pushHandle(values, index, current, 1, minRange, min, max, pushRange);
		current = pushHandle(values, index, current, -1, minRange, min, max, pushRange);
	}
	if (maxRange) {
		current = pullHandle(values, index, current, 1, maxRange, min, max, pushRange);
		pullHandle(values, index, current, -1, maxRange, min, max, pushRange);
	}
	return values;
};
