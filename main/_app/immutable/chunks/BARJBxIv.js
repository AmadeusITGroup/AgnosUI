const n=`.au-drawer {
  --bs-drawer-z-index: 2010;
  display: inline-flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  z-index: var(--bs-drawer-z-index);
  --bs-drawer-size: max-content;
  --bs-drawer-min-size: 0;
  --bs-drawer-max-size: none;
  --bs-drawer-splitter-size: 8px;
  width: 100%;
  min-width: 0;
  max-width: none;
  height: var(--bs-drawer-size);
  min-height: var(--bs-drawer-min-size);
  max-height: var(--bs-drawer-max-size);
}
.au-drawer.collapse-horizontal {
  width: var(--bs-drawer-size);
  min-width: var(--bs-drawer-min-size);
  max-width: var(--bs-drawer-max-size);
  height: 100%;
  min-height: 0;
  max-height: none;
}
.au-drawer.collapsing {
  min-width: 0px !important;
  min-height: 0px !important;
}
.au-drawer .au-drawer-container {
  overflow: hidden;
}
.au-drawer .au-drawer-content {
  min-width: max-content;
}
.au-drawer.inline-start {
  inset-inline-start: 0;
  inset-block: 0;
}
.au-drawer.inline-start .au-splitter {
  inset-block: 0;
  inset-inline: auto calc(var(--bs-drawer-splitter-size) / -2);
}
.au-drawer.inline-end {
  inset-inline-end: 0;
  inset-block: 0;
}
.au-drawer.inline-end .au-splitter {
  inset-block: 0;
  inset-inline: calc(var(--bs-drawer-splitter-size) auto / -2);
}
.au-drawer.block-start {
  inset-inline: 0;
  inset-block: 0;
}
.au-drawer.block-start .au-splitter {
  inset-block: auto calc(var(--bs-drawer-splitter-size) / -2);
  inset-inline: 0;
}
.au-drawer.block-end {
  inset-inline: 0;
  inset-block-end: 0;
}
.au-drawer.block-end .au-splitter {
  inset-block: calc(var(--bs-drawer-splitter-size) auto / -2);
  inset-inline: 0;
}
.au-drawer .au-drawer-header {
  padding: 0.75rem 1rem;
  font-weight: 600;
  border-bottom: 1px solid #e2e2e2;
}
.au-drawer .au-drawer-container {
  display: inline-block;
}
.au-drawer .au-drawer-body {
  padding: 1rem;
  overflow-y: auto;
  flex: 1;
}
.au-drawer .au-splitter {
  position: absolute;
  width: var(--bs-drawer-splitter-size);
  cursor: ew-resize;
  touch-action: none;
}
.au-drawer.block-start .au-splitter, .au-drawer.block-end .au-splitter {
  width: auto;
  height: 8px;
  cursor: ns-resize;
}

.au-drawer-backdrop {
  --bs-drawer-backdrop-z-index: 2000;
  --bs-drawer-backdrop-color: #1a1a1a;
  --bs-drawer-backdrop-opacity: 0.75;
  position: fixed;
  inset: 0;
  background: var(--bs-drawer-backdrop-color);
  z-index: var(--bs-drawer-backdrop-z-index);
}
.au-drawer-backdrop.show {
  opacity: var(--bs-drawer-backdrop-opacity);
  pointer-events: auto;
}

/*# sourceMappingURL=drawer.css.map */
`;export{n as default};
