const n=`.au-drawer {
  --bs-drawer-z-index: 2010;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  z-index: var(--bs-drawer-z-index);
}
.au-drawer.inline-start {
  inset-block: 0;
  inset-inline-start: 0;
}
.au-drawer.inline-end {
  inset-block: 0;
  inset-inline-end: 0;
}
.au-drawer.inline-end .au-splitter {
  inset-inline-end: auto;
}
.au-drawer.block-start {
  inset-inline: 0;
  inset-block-start: 0;
}
.au-drawer.block-start .au-splitter {
  inset-block-start: auto;
}
.au-drawer.block-end {
  inset-inline: 0;
  inset-block-end: 0;
}
.au-drawer .au-drawer-header {
  padding: 0.75rem 1rem;
  font-weight: 600;
  border-bottom: 1px solid #e2e2e2;
}
.au-drawer .au-drawer-body {
  padding: 1rem;
  overflow-y: auto;
  flex: 1;
}
.au-drawer .au-splitter {
  position: absolute;
  inset-block: 0;
  inset-inline-end: -4px;
  width: 8px;
  cursor: ew-resize;
  background: transparent;
}
.au-drawer.block-start .au-splitter, .au-drawer.block-end .au-splitter {
  inset-inline: 0;
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
