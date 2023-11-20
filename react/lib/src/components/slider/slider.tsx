import type {SliderProps} from '@agnos-ui/react-headless/components/slider';
import {createSlider} from '@agnos-ui/react-headless/components/slider';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import React from 'react';

export * from '@agnos-ui/react-headless/components/slider';

export function Slider(props: Partial<SliderProps>) {
	const [
		{
			className,
			combinedLabelDisplay,
			combinedLabelPositionLeft,
			combinedLabelPositionTop,
			disabled,
			handleDisplayOptions,
			max,
			maxValueLabelDisplay,
			min,
			minValueLabelDisplay,
			progressDisplayOptions,
			readonly,
			sortedHandles,
			sortedValues,
			values,
			vertical,
			showValueLabels,
			showMinMaxLabels,
			rtl,
		},
		{
			actions: {click, keydown, mouseDown, touchStart},
			directives: {sliderDirective, minLabelDirective, maxLabelDirective},
		},
	] = useWidgetWithConfig(createSlider, props, 'slider');

	const sliderSetRef = useDirective(sliderDirective);
	const minSetRef = useDirective(minLabelDirective);
	const maxSetRef = useDirective(maxLabelDirective);

	return (
		<div
			ref={sliderSetRef}
			className={`au-slider ${vertical ? 'au-slider-vertical' : 'au-slider-horizontal'} ${className} ${disabled ? ' disabled' : ''}`}
		>
			{progressDisplayOptions.map((option, index) => (
				<div
					key={index}
					className={'au-slider-progress'}
					style={{
						left: `${option.left}%`,
						right: `${option.right}%`,
						bottom: `${option.bottom}%`,
						top: `${option.top}%`,
						width: `${option.width}%`,
						height: `${option.height}%`,
					}}
				/>
			))}
			<div
				className={vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'}
				onClick={(e) => click(e as unknown as MouseEvent)}
			/>
			{showMinMaxLabels ? (
				<>
					<div
						ref={minSetRef}
						className={`${rtl ? 'au-slider-rtl' : ''} ${
							vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'
						} ${!minValueLabelDisplay ? ' invisible' : ''}
						`}
					>
						{min}
					</div>
					<div
						ref={maxSetRef}
						className={`${rtl ? 'au-slider-rtl' : ''} ${
							vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'
						} ${!maxValueLabelDisplay ? ' invisible' : ''}`}
					>
						{max}
					</div>
				</>
			) : (
				<></>
			)}
			{showValueLabels && combinedLabelDisplay ? (
				<div
					className={vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
					style={{
						left: `${combinedLabelPositionLeft}%`,
						top: `${combinedLabelPositionTop}%`,
					}}
				>
					{rtl ? (
						<>
							{sortedValues[1]} - {sortedValues[0]}
						</>
					) : (
						<>
							{sortedValues[0]} - {sortedValues[1]}
						</>
					)}
				</div>
			) : (
				<></>
			)}

			{sortedHandles.map((item, i) => (
				<React.Fragment key={item.id}>
					<button
						className={`au-slider-handle ${vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'}`}
						role="slider"
						aria-valuemin={min}
						aria-valuemax={max}
						aria-valuenow={item.value}
						aria-valuetext={'' + item.value}
						aria-label={item.ariaLabel}
						aria-readonly={readonly ? 'true' : undefined}
						aria-disabled={disabled ? 'true' : undefined}
						aria-orientation={vertical ? 'vertical' : undefined}
						disabled={disabled}
						style={{
							top: `${handleDisplayOptions[item.id].top}%`,
							left: `${handleDisplayOptions[item.id].left}%`,
						}}
						onKeyDown={(e) => keydown(e as unknown as KeyboardEvent, item.id)}
						onMouseDown={(e) => mouseDown(e as unknown as MouseEvent, item.id)}
						onTouchStart={(e) => touchStart(e as unknown as TouchEvent, item.id)}
					>
						&nbsp;
					</button>
					{showValueLabels && !combinedLabelDisplay ? (
						<div
							className={vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
							style={{
								left: `${handleDisplayOptions[i].left}%`,
								top: `${handleDisplayOptions[i].top}%`,
							}}
						>
							{values[i]}
						</div>
					) : (
						<></>
					)}
				</React.Fragment>
			))}
		</div>
	);
}
