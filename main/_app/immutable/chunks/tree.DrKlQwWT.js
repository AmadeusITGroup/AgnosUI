const e=`/**
* Utility function to replace a substring as Sass doesn't provide the built-in method to do it
*/
/**
* Method implementation taken from Bootstrap
* ref: https://github.com/twbs/bootstrap/blob/cacbdc680ecdfee5f0c7fbb876ad15188eaf697d/scss/_functions.scss#L131
*/
.au-tree {
  --bs-tree-item-padding-start: 2.25rem;
  --bs-tree-expand-icon-margin-inline-end: 0.5rem;
  --bs-tree-expand-icon-border-radius: 0.375rem;
  --bs-tree-expand-icon-background-color: transparent;
  --bs-tree-expand-icon-background-color-hover: var(--bs-blue-100, #cfe2ff);
  --bs-tree-expand-icon-width: 2.25rem;
  --bs-tree-expand-icon-height: 2.25rem;
  --bs-tree-expand-icon: url('data:image/svg+xml;utf8,%3csvg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 10 10"%3e%3cpath d="M3 1 L7 5 L3 9" stroke="%230d6efd" stroke-width="1" fill="none"/%3e%3c/svg%3e');
  --bs-tree-expand-icon-hover: url('data:image/svg+xml;utf8,%3csvg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 10 10"%3e%3cpath d="M3 1 L7 5 L3 9" stroke="%23052c65" stroke-width="1" fill="none"/%3e%3c/svg%3e');
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
  --bs-tree-expand-icon: var(--bs-tree-expand-icon-hover);
  --bs-tree-expand-icon-background-color: var(--bs-tree-expand-icon-background-color-hover);
}
.au-tree .au-tree-expand-icon .au-tree-expand-icon-svg {
  content: var(--bs-tree-expand-icon);
  transition: transform 0.3s;
}
.au-tree .au-tree-expand-icon.au-tree-expand-icon-expanded .au-tree-expand-icon-svg {
  transform: rotate(90deg);
}

/*# sourceMappingURL=tree.css.map */
`;export{e as default};
