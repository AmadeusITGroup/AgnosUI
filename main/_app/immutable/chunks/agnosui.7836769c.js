const a=`.au-select:focus-within {
  box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);
}

.au-select-input {
  outline: none;
}

.au-slider {
  --au-slider-background-color: var(--bs-secondary-bg);
  --au-slider-font-size: 1rem;
  --au-slider-border-radius: 0.125rem;
  --au-slider-line-height: 1.5;
  --au-slider-primary-size: 100%;
  --au-slider-secondary-size: 0.25rem;
  --au-slider-margin-block-start: 2rem;
  --au-slider-margin-block-end: 1rem;
  --au-slider-vertical-margin-inline-start: 1rem;
  --au-slider-vertical-margin-inline-end: 3rem;
  --au-slider-translate-vertical: translateY(-50%);
  --au-slider-translate-horizontal: translateX(-50%);
  --au-slider-handle-color: var(--bs-primary);
  --au-slider-handle-size: 1.25rem;
  --au-slider-handle-border: none;
  --au-slider-handle-border-radius: 50%;
  --au-slider-handle-outline: none;
  --au-slider-handle-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --au-slider-progress-color: var(--bs-primary);
  --au-slider-progress-height: 0.25rem;
  --au-slider-progress-vertical-transform: rotate(90deg);
  --au-slider-label-margin-block-start: calc(-1 * (1rem * 1.5 + (1.25rem - 0.25rem) / 2));
  --au-slider-label-min-left: 0;
  --au-slider-label-max-right: 0;
  --au-slider-label-now-transform: translateX(-50%);
  --au-slider-label-vertical-margin-inline-start: 1rem;
  --au-slider-label-vertical-min-transform: translateY(-75%);
  --au-slider-label-vertical-max-transform: translateY(-25%);
  --au-slider-label-vertical-white-space: nowrap;
  --au-slider-label-vertical-min-top: 100%;
  --au-slider-label-vertical-max-top: 0%;
  --au-slider-label-vertical-now-transform: translateY(-50%);
  --au-slider-clickable-area-main-size: 1.5rem;
  --au-slider-clickable-area-secondary-size: 100%;
  --au-slider-clickable-area-translate: translateY(-50%);
  --au-slider-clickable-area-vertical-translate: translateX(-50%);
  --au-slider-clickable-area-vertical-flex-shrink: 0;
  --au-slider-disabled-color: var(--bs-dark-bg-subtle);
  --au-slider-disabled-cursor: not-allowed;
  display: flex;
  background-color: var(--au-slider-background-color);
  border-radius: var(--au-slider-border-radius);
  font-size: var(--au-slider-font-size);
  line-height: var(--au-slider-line-height);
  position: relative;
}
.au-slider.au-slider-horizontal {
  width: var(--au-slider-primary-size);
  height: var(--au-slider-secondary-size);
  margin-block-start: var(--au-slider-margin-block-start);
  margin-block-end: var(--au-slider-margin-block-end);
}
.au-slider.au-slider-horizontal .au-slider-handle-horizontal {
  top: calc(50% - var(--au-slider-handle-size) / 2);
  transform: var(--au-slider-translate-horizontal);
}
.au-slider.au-slider-vertical {
  height: var(--au-slider-primary-size);
  width: var(--au-slider-secondary-size);
  margin-inline-start: var(--au-slider-vertical-margin-inline-start);
  margin-inline-end: var(--au-slider-vertical-margin-inline-end);
}
.au-slider.au-slider-vertical .au-slider-handle-vertical {
  left: calc(50% - var(--au-slider-handle-size) / 2);
  transform: var(--au-slider-translate-vertical);
}
.au-slider .au-slider-handle {
  background-color: var(--au-slider-handle-color);
  border: var(--au-slider-handle-border);
  border-radius: var(--au-slider-handle-border-radius);
  outline: var(--au-slider-handle-outline);
  position: absolute;
  width: var(--au-slider-handle-size);
  height: var(--au-slider-handle-size);
}
.au-slider .au-slider-handle:focus {
  box-shadow: var(--au-slider-handle-focus-box-shadow);
}
.au-slider .au-slider-progress {
  background-color: var(--au-slider-progress-color);
  border-radius: var(--au-slider-border-radius);
  position: absolute;
}
.au-slider .au-slider-progress-vertical {
  transform: var(--au-slider-progress-vertical-transform);
}
.au-slider .au-slider-label {
  margin-block-start: var(--au-slider-label-margin-block-start);
  position: absolute;
}
.au-slider .au-slider-label.au-slider-label-min {
  left: var(--au-slider-label-min-left);
}
.au-slider .au-slider-label.au-slider-label-max {
  right: var(--au-slider-label-max-right);
}
.au-slider .au-slider-label.au-slider-label-now {
  transform: var(--au-slider-label-now-transform);
}
.au-slider .au-slider-label-vertical {
  position: absolute;
  margin-inline-start: var(--au-slider-label-vertical-margin-inline-start);
  white-space: var(--au-slider-label-vertical-white-space);
}
.au-slider .au-slider-label-vertical.au-slider-label-vertical-min {
  top: var(--au-slider-label-vertical-min-top);
  transform: var(--au-slider-label-vertical-min-transform);
}
.au-slider .au-slider-label-vertical.au-slider-label-vertical-max {
  top: var(--au-slider-label-vertical-max-top);
  transform: var(--au-slider-label-vertical-max-transform);
}
.au-slider .au-slider-label-vertical.au-slider-label-vertical-now {
  transform: var(--au-slider-label-vertical-now-transform);
}
.au-slider .au-slider-clickable-area {
  height: var(--au-slider-clickable-area-main-size);
  width: var(--au-slider-clickable-area-secondary-size);
  transform: var(--au-slider-clickable-area-translate);
}
.au-slider .au-slider-clickable-area-vertical {
  width: var(--au-slider-clickable-area-main-size);
  height: var(--au-slider-clickable-area-secondary-size);
  transform: var(--au-slider-clickable-area-vertical-translate);
  flex-shrink: var(--au-slider-clickable-area-vertical-flex-shrink);
}
.au-slider.disabled {
  cursor: var(--au-slider-disabled-cursor);
}
.au-slider.disabled .au-slider-label,
.au-slider.disabled .au-slider-label-vertical {
  color: var(--au-slider-disabled-color);
}
.au-slider.disabled .au-slider-progress,
.au-slider.disabled .au-slider-handle {
  background-color: var(--au-slider-disabled-color);
  cursor: var(--au-slider-disabled-cursor);
}

/*# sourceMappingURL=agnosui.css.map */
`;export{a as default};
