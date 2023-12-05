import {createSlider, type SliderProps} from '@agnos-ui/react-headless/slider';
import {useDirective} from '@agnos-ui/react-headless/utils';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import React from 'react';

export * from '@agnos-ui/react-headless/slider';

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
		},
		{
			actions: {click, keydown, mouseDown},
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
					style={{left: `${option.left}%`, bottom: `${option.bottom}%`, width: `${option.width}%`, height: `${option.height}%`}}
				/>
			))}
			<div
				className={vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'}
				onClick={(e) => click(e as unknown as MouseEvent)}
			/>
			<div
				ref={minSetRef}
				className={vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'}
				style={{visibility: minValueLabelDisplay ? 'visible' : 'hidden'}}
			>
				{min}
			</div>
			<div
				ref={maxSetRef}
				className={vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'}
				style={{visibility: maxValueLabelDisplay ? 'visible' : 'hidden'}}
			>
				{max}
			</div>
			<div
				className={vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
				style={{
					visibility: combinedLabelDisplay ? 'visible' : 'hidden',
					left: `${combinedLabelPositionLeft}%`,
					top: `${combinedLabelPositionTop}%`,
				}}
			>
				{sortedValues[0]} - {sortedValues[1]}
			</div>
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
						style={
							vertical
								? {
										top: `${handleDisplayOptions[item.id].top}%`,
								  }
								: {
										left: `${handleDisplayOptions[item.id].left}%`,
								  }
						}
						onKeyDown={(e) => keydown(e as unknown as KeyboardEvent, item.id)}
						onMouseDown={(e) => mouseDown(e as unknown as MouseEvent, item.id)}
					>
						&nbsp;
					</button>
					<div
						className={vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'}
						style={{
							left: `${handleDisplayOptions[i].left}%`,
							top: `${handleDisplayOptions[i].top}%`,
							visibility: combinedLabelDisplay ? 'hidden' : 'visible',
						}}
					>
						{values[i]}
					</div>
				</React.Fragment>
			))}
		</div>
	);
}
