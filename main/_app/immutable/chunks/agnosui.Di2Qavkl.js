const r=`.au-select:focus-within {
  box-shadow: var(--bs-focus-ring-x, 0) var(--bs-focus-ring-y, 0) var(--bs-focus-ring-blur, 0) var(--bs-focus-ring-width) var(--bs-focus-ring-color);
}

.au-select-input {
  outline: none;
}

.au-slider {
  --bs-slider-background-color: var(--bs-secondary-bg, #e9ecef);
  --bs-slider-font-size: 1rem;
  --bs-slider-border-radius: 0.125rem;
  --bs-slider-line-height: 1.5;
  --bs-slider-primary-size: 100%;
  --bs-slider-secondary-size: 0.25rem;
  --bs-slider-margin-block-start: calc((1.25rem - 0.25rem) / 2 + 1rem * 1.5 + 0.5rem);
  --bs-slider-margin-block-end: calc((1.25rem - 0.25rem) / 2 + 0.5rem);
  --bs-slider-vertical-margin-inline-start: 1rem;
  --bs-slider-vertical-margin-inline-end: 3rem;
  --bs-slider-translate-vertical: translateY(-50%);
  --bs-slider-translate-horizontal: translateX(-50%);
  --bs-slider-handle-color: var(--bs-primary, #0d6efd);
  --bs-slider-handle-size: 1.25rem;
  --bs-slider-handle-border: none;
  --bs-slider-handle-border-hover: none;
  --bs-slider-handle-border-radius: 50%;
  --bs-slider-handle-outline: none;
  --bs-slider-handle-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  --bs-slider-progress-color: var(--bs-primary, #0d6efd);
  --bs-slider-progress-height: 0.25rem;
  --bs-slider-progress-vertical-transform: rotate(90deg);
  --bs-slider-label-margin-block-start: calc(-1 * (1rem * 1.5 + (1.25rem - 0.25rem) / 2));
  --bs-slider-label-font-weight: normal;
  --bs-slider-label-now-font-weight: normal;
  --bs-slider-label-min-position: 0;
  --bs-slider-label-max-position: 0;
  --bs-slider-label-now-transform: translateX(-50%);
  --bs-slider-label-vertical-margin-inline-start: 1rem;
  --bs-slider-label-vertical-min-transform: translateY(-75%);
  --bs-slider-label-vertical-max-transform: translateY(-25%);
  --bs-slider-label-vertical-white-space: nowrap;
  --bs-slider-label-vertical-min-top: 100%;
  --bs-slider-label-vertical-max-top: 0%;
  --bs-slider-label-vertical-now-transform: translateY(-50%);
  --bs-slider-clickable-area-main-size: 1.5rem;
  --bs-slider-clickable-area-secondary-size: 100%;
  --bs-slider-clickable-area-translate: translateY(-50%);
  --bs-slider-clickable-area-vertical-translate: translateX(-50%);
  --bs-slider-clickable-area-vertical-flex-shrink: 0;
  --bs-slider-disabled-color: var(--bs-dark-bg-subtle, #ced4da);
  --bs-slider-disabled-cursor: not-allowed;
  display: flex;
  background-color: var(--bs-slider-background-color);
  border-radius: var(--bs-slider-border-radius);
  font-size: var(--bs-slider-font-size);
  line-height: var(--bs-slider-line-height);
  position: relative;
}
.au-slider.au-slider-lg {
  --bs-slider-font-size: 1.125rem;
  --bs-slider-border-radius: calc(0.3125rem / 2);
  --bs-slider-secondary-size: 0.3125rem;
  --bs-slider-margin-block-start: calc((1.5rem - 0.3125rem) / 2 + 1.125rem * 1.5 + 0rem);
  --bs-slider-margin-block-end: calc((1.5rem - 0.3125rem) / 2 + 0rem);
  --bs-slider-vertical-margin-inline-start: calc((1.5rem - 0.3125rem) / 2 + 0rem);
  --bs-slider-vertical-margin-inline-end: calc((1.5rem - 0.3125rem) / 2 + 0rem + 3ch + 0rem);
  --bs-slider-handle-size: 1.5rem;
  --bs-slider-label-margin-block-start: calc(-1 * (1.125rem * 1.5 + (1.5rem - 0.3125rem) / 2));
  --bs-slider-label-vertical-margin-inline-start: calc((1.5rem - 0.3125rem) / 2 + 0.3125rem + 0rem);
}
.au-slider.au-slider-sm {
  --bs-slider-font-size: 0.875rem;
  --bs-slider-border-radius: calc(0.2rem / 2);
  --bs-slider-secondary-size: 0.2rem;
  --bs-slider-margin-block-start: calc((1rem - 0.2rem) / 2 + 0.875rem * 1.5 + 0rem);
  --bs-slider-margin-block-end: calc((1rem - 0.2rem) / 2 + 0rem);
  --bs-slider-vertical-margin-inline-start: calc((1rem - 0.2rem) / 2 + 0rem);
  --bs-slider-vertical-margin-inline-end: calc((1rem - 0.2rem) / 2 + 0rem + 3ch + 0rem);
  --bs-slider-handle-size: 1rem;
  --bs-slider-label-margin-block-start: calc(-1 * (0.875rem * 1.5 + (1rem - 0.2rem) / 2));
  --bs-slider-label-vertical-margin-inline-start: calc((1rem - 0.2rem) / 2 + 0.2rem + 0rem);
}
.au-slider.au-slider-horizontal {
  width: var(--bs-slider-primary-size);
  height: var(--bs-slider-secondary-size);
  margin-block-start: var(--bs-slider-margin-block-start);
  margin-block-end: var(--bs-slider-margin-block-end);
}
.au-slider.au-slider-horizontal .au-slider-handle-horizontal {
  top: calc(50% - var(--bs-slider-handle-size) / 2);
  transform: var(--bs-slider-translate-horizontal);
}
.au-slider.au-slider-vertical {
  height: var(--bs-slider-primary-size);
  width: var(--bs-slider-secondary-size);
  margin-inline-start: var(--bs-slider-vertical-margin-inline-start);
  margin-inline-end: var(--bs-slider-vertical-margin-inline-end);
}
.au-slider.au-slider-vertical .au-slider-handle-vertical {
  left: calc(50% - var(--bs-slider-handle-size) / 2);
  transform: var(--bs-slider-translate-vertical);
}
.au-slider .au-slider-handle {
  background-color: var(--bs-slider-handle-color);
  border: var(--bs-slider-handle-border);
  border-radius: var(--bs-slider-handle-border-radius);
  outline: var(--bs-slider-handle-outline);
  position: absolute;
  width: var(--bs-slider-handle-size);
  height: var(--bs-slider-handle-size);
}
.au-slider .au-slider-handle:not([disabled]):hover {
  border: var(--bs-slider-handle-border-hover);
}
.au-slider .au-slider-handle:focus {
  box-shadow: var(--bs-slider-handle-focus-box-shadow);
}
.au-slider .au-slider-progress {
  background-color: var(--bs-slider-progress-color);
  border-radius: var(--bs-slider-border-radius);
  position: absolute;
}
.au-slider .au-slider-progress-vertical {
  transform: var(--bs-slider-progress-vertical-transform);
}
.au-slider .au-slider-label {
  font-weight: var(--bs-slider-label-font-weight);
  margin-block-start: var(--bs-slider-label-margin-block-start);
  position: absolute;
}
.au-slider .au-slider-label.au-slider-label-min:not(.au-slider-rtl) {
  left: var(--bs-slider-label-min-position);
}
.au-slider .au-slider-label.au-slider-label-min.au-slider-rtl {
  right: var(--bs-slider-label-max-position);
}
.au-slider .au-slider-label.au-slider-label-max:not(.au-slider-rtl) {
  right: var(--bs-slider-label-max-position);
}
.au-slider .au-slider-label.au-slider-label-max.au-slider-rtl {
  left: var(--bs-slider-label-min-position);
}
.au-slider .au-slider-label.au-slider-label-now {
  font-weight: var(--bs-slider-label-now-font-weight);
  transform: var(--bs-slider-label-now-transform);
}
.au-slider .au-slider-label-vertical {
  position: absolute;
  margin-inline-start: var(--bs-slider-label-vertical-margin-inline-start);
  white-space: var(--bs-slider-label-vertical-white-space);
}
.au-slider .au-slider-label-vertical.au-slider-label-vertical-min:not(.au-slider-rtl) {
  top: var(--bs-slider-label-vertical-min-top);
  transform: var(--bs-slider-label-vertical-min-transform);
}
.au-slider .au-slider-label-vertical.au-slider-label-vertical-min.au-slider-rtl {
  top: var(--bs-slider-label-vertical-max-top);
  transform: var(--bs-slider-label-vertical-max-transform);
}
.au-slider .au-slider-label-vertical.au-slider-label-vertical-max:not(.au-slider-rtl) {
  top: var(--bs-slider-label-vertical-max-top);
  transform: var(--bs-slider-label-vertical-max-transform);
}
.au-slider .au-slider-label-vertical.au-slider-label-vertical-max.au-slider-rtl {
  top: var(--bs-slider-label-vertical-min-top);
  transform: var(--bs-slider-label-vertical-min-transform);
}
.au-slider .au-slider-label-vertical.au-slider-label-vertical-now {
  transform: var(--bs-slider-label-vertical-now-transform);
}
.au-slider .au-slider-clickable-area {
  height: var(--bs-slider-clickable-area-main-size);
  width: var(--bs-slider-clickable-area-secondary-size);
  transform: var(--bs-slider-clickable-area-translate);
}
.au-slider .au-slider-clickable-area-vertical {
  width: var(--bs-slider-clickable-area-main-size);
  height: var(--bs-slider-clickable-area-secondary-size);
  transform: var(--bs-slider-clickable-area-vertical-translate);
  flex-shrink: var(--bs-slider-clickable-area-vertical-flex-shrink);
}
.au-slider.disabled {
  cursor: var(--bs-slider-disabled-cursor);
}
.au-slider.disabled .au-slider-label,
.au-slider.disabled .au-slider-label-vertical {
  color: var(--bs-slider-disabled-color);
}
.au-slider.disabled .au-slider-progress,
.au-slider.disabled .au-slider-handle {
  background-color: var(--bs-slider-disabled-color);
  cursor: var(--bs-slider-disabled-cursor);
}

.au-toast {
  width: unset;
}

/*# sourceMappingURL=agnosui.css.map */
`;export{r as default};
