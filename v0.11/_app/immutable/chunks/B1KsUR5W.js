const e=`.au-tree {
  --bs-tree-item-padding-start: 2.25rem;
  --bs-tree-expand-icon-margin-inline-end: 0.5rem;
  --bs-tree-expand-icon-border-radius: 0.375rem;
  --bs-tree-expand-icon-background-color: transparent;
  --bs-tree-expand-icon-background-color-hover: var(--bs-blue-100, #cfe2ff);
  --bs-tree-expand-icon-width: 2.25rem;
  --bs-tree-expand-icon-height: 2.25rem;
  --bs-tree-expand-icon-color: #0d6efd;
  --bs-tree-expand-icon-color-hover: #052c65;
  list-style: none;
  padding: 0;
  margin: 0;
}
.au-tree ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-inline-start: var(--bs-tree-item-padding-start);
  margin: 0;
}
.au-tree li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.au-tree .au-tree-item {
  position: relative;
  display: flex;
  align-items: center;
}
.au-tree .au-tree-expand-icon-placeholder {
  display: flex;
  width: calc(var(--bs-tree-expand-icon-width) + var(--bs-tree-expand-icon-margin-inline-end));
}
.au-tree .au-tree-expand-icon {
  width: var(--bs-tree-expand-icon-width);
  height: var(--bs-tree-expand-icon-height);
  border-radius: var(--bs-tree-expand-icon-border-radius);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding-inline: 0;
  margin-inline-end: var(--bs-tree-expand-icon-margin-inline-end);
  background-color: var(--bs-tree-expand-icon-background-color);
  cursor: pointer;
}
.au-tree .au-tree-expand-icon:hover {
  --bs-tree-expand-icon-background-color: var(--bs-tree-expand-icon-background-color-hover);
}
.au-tree .au-tree-expand-icon:hover .au-tree-expand-icon-svg .au-tree-expand-icon-svg-fill {
  stroke: var(--bs-tree-expand-icon-color-hover);
}
.au-tree .au-tree-expand-icon .au-tree-expand-icon-svg {
  transition: transform 0.3s;
}
.au-tree .au-tree-expand-icon .au-tree-expand-icon-svg .au-tree-expand-icon-svg-fill {
  stroke: var(--bs-tree-expand-icon-color);
}
.au-tree .au-tree-expand-icon.au-tree-expand-icon-expanded .au-tree-expand-icon-svg {
  transform: rotate(90deg);
}

/*# sourceMappingURL=tree.css.map */
`;export{e as default};
