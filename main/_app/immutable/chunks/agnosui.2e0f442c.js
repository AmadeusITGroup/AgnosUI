const a=`.au-slider {
  --au-slider-background-color: var(--bs-secondary-bg);
  --au-slider-primary-size: 100%;
  --au-slider-secondary-size: 0.25rem;
  --au-slider-margin-block-start: 2rem;
  --au-slider-margin-block-end: 1rem;
  --au-slider-vertical-margin-inline-start: 1rem;
  --au-slider-vertical-margin-inline-end: 3rem;
  --au-slider-translate-vertical: translate(-40%, -50%);
  --au-slider-translate-horizontal: translate(-50%, -40%);
  --au-slider-handle-color: var(--bs-primary);
  --au-slider-handle-size: 1.25rem;
  --au-slider-handle-border: none;
  --au-slider-handle-border-radius: 0.625rem;
  --au-slider-handle-outline: none;
  --au-slider-handle-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --au-slider-progress-color: var(--bs-primary);
  --au-slider-progress-height: 0.25rem;
  --au-slider-progress-vertical-transform: rotate(90deg);
  --au-slider-label-margin-block-start: -1.9rem;
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
  position: relative;
}
.au-slider.au-slider-horizontal {
  width: var(--au-slider-primary-size);
  height: var(--au-slider-secondary-size);
  margin-block-start: var(--au-slider-margin-block-start);
  margin-block-end: var(--au-slider-margin-block-end);
}
.au-slider.au-slider-horizontal .au-slider-handle-horizontal {
  transform: var(--au-slider-translate-horizontal);
}
.au-slider.au-slider-vertical {
  height: var(--au-slider-primary-size);
  width: var(--au-slider-secondary-size);
  margin-inline-start: var(--au-slider-vertical-margin-inline-start);
  margin-inline-end: var(--au-slider-vertical-margin-inline-end);
}
.au-slider.au-slider-vertical .au-slider-handle-vertical {
  transform: var(--au-slider-translate-vertical);
}
.au-slider .au-slider-handle {
  background-color: var(--au-slider-handle-color);
  border: var(--au-slider-handle-border);
  width: var(--au-slider-handle-size);
  height: var(--au-slider-handle-size);
  border-radius: var(--au-slider-handle-border-radius);
  outline: var(--au-slider-handle-outline);
  position: absolute;
}
.au-slider .au-slider-handle:focus {
  box-shadow: var(--au-slider-handle-focus-box-shadow);
}
.au-slider .au-slider-progress {
  background-color: var(--au-slider-progress-color);
  height: var(--au-slider-progress-height);
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
