const l=`import { getTreeDefaultConfig, createTree } from '@agnos-ui/core-bootstrap/components/tree';
/**
 * Retrieve a shallow copy of the default Tree config
 * @returns the default Tree config
 */
const export_getTreeDefaultConfig = getTreeDefaultConfig;
export { export_getTreeDefaultConfig as getTreeDefaultConfig };
/**
 * Create a Tree with given config props
 * @param config - an optional tree config
 * @returns a TreeWidget
 */
const export_createTree = createTree;
export { export_createTree as createTree };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5nZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy90cmVlL3RyZWUuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxVQUFVLEVBQUMsTUFBTSwwQ0FBMEMsQ0FBQztBQUsxRjs7O0dBR0c7QUFDSCxNQUFNLDJCQUEyQixHQUFvQixvQkFBMkIsQ0FBQztBQUNqRixPQUFPLEVBQUMsMkJBQTJCLElBQUksb0JBQW9CLEVBQUMsQ0FBQztBQTZKN0Q7Ozs7R0FJRztBQUNILE1BQU0saUJBQWlCLEdBQThCLFVBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFDLGlCQUFpQixJQUFJLFVBQVUsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRUcmVlRGVmYXVsdENvbmZpZywgY3JlYXRlVHJlZX0gZnJvbSAnQGFnbm9zLXVpL2NvcmUtYm9vdHN0cmFwL2NvbXBvbmVudHMvdHJlZSc7XG5pbXBvcnQgdHlwZSB7V2lkZ2V0U2xvdENvbnRleHQsIFNsb3RDb250ZW50LCBXaWRnZXQsIFdpZGdldEZhY3RvcnksIERpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuXG5cblxuLyoqXG4gKiBSZXRyaWV2ZSBhIHNoYWxsb3cgY29weSBvZiB0aGUgZGVmYXVsdCBUcmVlIGNvbmZpZ1xuICogQHJldHVybnMgdGhlIGRlZmF1bHQgVHJlZSBjb25maWdcbiAqL1xuY29uc3QgZXhwb3J0X2dldFRyZWVEZWZhdWx0Q29uZmlnOiAoKSA9PiBUcmVlUHJvcHMgPSBnZXRUcmVlRGVmYXVsdENvbmZpZyBhcyBhbnk7XG5leHBvcnQge2V4cG9ydF9nZXRUcmVlRGVmYXVsdENvbmZpZyBhcyBnZXRUcmVlRGVmYXVsdENvbmZpZ307XG5cblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGNvbnRleHQgZm9yIGEgVHJlZSB3aWRnZXQuXG4gKiBUaGlzIGludGVyZmFjZSBpcyBhbiBhbGlhcyBmb3IgYFdpZGdldFNsb3RDb250ZXh0PFRyZWVXaWRnZXQ+YC5cbiAqL1xuZXhwb3J0IHR5cGUgVHJlZUNvbnRleHQgPSBXaWRnZXRTbG90Q29udGV4dDxUcmVlV2lkZ2V0PjtcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGNvbnRleHQgZm9yIGEgdHJlZSBpdGVtLCBleHRlbmRpbmcgdGhlIGJhc2UgYFRyZWVDb250ZXh0YFxuICogd2l0aCBhbiBhZGRpdGlvbmFsIGBpdGVtYCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IHR5cGUgVHJlZVNsb3RJdGVtQ29udGV4dCA9IFRyZWVDb250ZXh0ICYge2l0ZW06IE5vcm1hbGl6ZWRUcmVlSXRlbX07XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgc3RhdGUgb2YgYSBUcmVlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmVlU3RhdGUge1xuXHRcblx0LyoqXG5cdCAqIEFycmF5IG9mIG5vcm1hbGl6ZWQgdHJlZSBub2Rlc1xuXHQgKi9cblx0bm9ybWFsaXplZE5vZGVzOiBOb3JtYWxpemVkVHJlZUl0ZW1bXTtcblx0XG5cdC8qKlxuXHQgKiBHZXR0ZXIgb2YgZXhwYW5kZWQgc3RhdGUgZm9yIGVhY2ggdHJlZSBub2RlXG5cdCAqL1xuXHRleHBhbmRlZE1hcDoge2dldChpdGVtOiBOb3JtYWxpemVkVHJlZUl0ZW0pOiBib29sZWFuIHwgdW5kZWZpbmVkfTtcblx0XG5cdC8qKlxuXHQgKiBPcHRpb25hbCBhY2Nlc3NpYmlsaXR5IGxhYmVsIGZvciB0aGUgdHJlZSBpZiB0aGVyZSBpcyBubyBleHBsaWNpdCBsYWJlbFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGFyaWFMYWJlbD86IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRjbGFzc05hbWU6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBkaXNwbGF5IG9mIHRoZSB0cmVlXG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFRyZWVDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCB0cmVlIGl0ZW1cblx0ICovXG5cdGl0ZW06IFNsb3RDb250ZW50PFRyZWVTbG90SXRlbUNvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIFNsb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IHRyZWUgaXRlbSBjb250ZW50XG5cdCAqL1xuXHRpdGVtQ29udGVudDogU2xvdENvbnRlbnQ8VHJlZVNsb3RJdGVtQ29udGV4dD47XG5cdFxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgdHJlZSBpdGVtIHRvZ2dsZVxuXHQgKi9cblx0aXRlbVRvZ2dsZTogU2xvdENvbnRlbnQ8VHJlZVNsb3RJdGVtQ29udGV4dD47XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgcHJvcGVydGllcyBmb3IgdGhlIFRyZWUgY29tcG9uZW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRyZWVQcm9wcyB7XG5cdFxuXHQvKipcblx0ICogQXJyYXkgb2YgdGhlIHRyZWUgbm9kZXMgdG8gZGlzcGxheVxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBbXWBcblx0ICovXG5cdG5vZGVzOiBUcmVlSXRlbVtdO1xuXHRcblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciB0b2dnbGVzIHRoZSBleHBhbmQgb2YgdGhlIFRyZWVJdGVtLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSBUcmVlSXRlbSBjbGlja2VkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0b25FeHBhbmRUb2dnbGU6IChub2RlOiBOb3JtYWxpemVkVHJlZUl0ZW0pID0+IHZvaWQ7XG5cdFxuXHQvKipcblx0ICogUmV0cmlldmVzIGV4cGFuZCBpdGVtcyBvZiB0aGUgVHJlZUl0ZW1cblx0ICpcblx0ICogQHBhcmFtIG5vZGUgLSBIVE1MIGVsZW1lbnQgdGhhdCBpcyByZXByZXNlbnRpbmcgdGhlIGV4cGFuZCBpdGVtXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cdCAqIGBgYFxuXHQgKi9cblx0bmF2U2VsZWN0b3Iobm9kZTogSFRNTEVsZW1lbnQpOiBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50Pjtcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBvZiB0aGUgdG9nZ2xlXG5cdCAqIEBwYXJhbSBsYWJlbCAtIHRyZWUgaXRlbSBsYWJlbFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIChsYWJlbDogc3RyaW5nKSA9PiBgVG9nZ2xlICR7bGFiZWx9YFxuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFMYWJlbFRvZ2dsZUZuOiAobGFiZWw6IHN0cmluZykgPT4gc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIE9wdGlvbmFsIGFjY2Vzc2liaWxpdHkgbGFiZWwgZm9yIHRoZSB0cmVlIGlmIHRoZXJlIGlzIG5vIGV4cGxpY2l0IGxhYmVsXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0YXJpYUxhYmVsPzogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIFNsb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IGRpc3BsYXkgb2YgdGhlIHRyZWVcblx0ICovXG5cdHN0cnVjdHVyZTogU2xvdENvbnRlbnQ8VHJlZUNvbnRleHQ+O1xuXHRcblx0LyoqXG5cdCAqIFNsb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IHRyZWUgaXRlbVxuXHQgKi9cblx0aXRlbTogU2xvdENvbnRlbnQ8VHJlZVNsb3RJdGVtQ29udGV4dD47XG5cdFxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgdHJlZSBpdGVtIGNvbnRlbnRcblx0ICovXG5cdGl0ZW1Db250ZW50OiBTbG90Q29udGVudDxUcmVlU2xvdEl0ZW1Db250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCB0cmVlIGl0ZW0gdG9nZ2xlXG5cdCAqL1xuXHRpdGVtVG9nZ2xlOiBTbG90Q29udGVudDxUcmVlU2xvdEl0ZW1Db250ZXh0Pjtcbn1cblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBUcmVlIHdpZGdldCBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCB0eXBlIFRyZWVXaWRnZXQgPSBXaWRnZXQ8VHJlZVByb3BzLCBUcmVlU3RhdGUsIFRyZWVBcGksIFRyZWVEaXJlY3RpdmVzPjtcblxuXG5cbi8qKlxuICogQ3JlYXRlIGEgVHJlZSB3aXRoIGdpdmVuIGNvbmZpZyBwcm9wc1xuICogQHBhcmFtIGNvbmZpZyAtIGFuIG9wdGlvbmFsIHRyZWUgY29uZmlnXG4gKiBAcmV0dXJucyBhIFRyZWVXaWRnZXRcbiAqL1xuY29uc3QgZXhwb3J0X2NyZWF0ZVRyZWU6IFdpZGdldEZhY3Rvcnk8VHJlZVdpZGdldD4gPSBjcmVhdGVUcmVlIGFzIGFueTtcbmV4cG9ydCB7ZXhwb3J0X2NyZWF0ZVRyZWUgYXMgY3JlYXRlVHJlZX07XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHRyZWUgaXRlbSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHJlZUl0ZW0ge1xuXHRcblx0LyoqXG5cdCAqIE9wdGlvbmFsIGFjY2Vzc2liaWxpdHkgbGFiZWwgZm9yIHRoZSBub2RlXG5cdCAqL1xuXHRhcmlhTGFiZWw/OiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogT3B0aW9uYWwgYXJyYXkgb2YgY2hpbGRyZW4gbm9kZXNcblx0ICovXG5cdGNoaWxkcmVuPzogVHJlZUl0ZW1bXTtcblx0XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgdGhlIG5vZGUgaXMgZXhwYW5kZWRcblx0ICovXG5cdGlzRXhwYW5kZWQ/OiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIFN0cmluZyB0aXRsZSBvZiB0aGUgbm9kZVxuXHQgKi9cblx0bGFiZWw6IHN0cmluZztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVkIFRyZWVJdGVtIG9iamVjdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5vcm1hbGl6ZWRUcmVlSXRlbSB7XG5cdFxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBsYWJlbCBmb3IgdGhlIG5vZGVcblx0ICovXG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogTGV2ZWwgaW4gdGhlIGhpZXJhcmNoeSwgc3RhcnRzIHdpdGggMCBmb3IgYSByb290IG5vZGVcblx0ICovXG5cdGxldmVsOiBudW1iZXI7XG5cdFxuXG5cdC8qKlxuXHQgKiBBbiBhcnJheSBvZiBjaGlsZHJlbiBub2Rlc1xuXHQgKi9cblx0Y2hpbGRyZW46IE5vcm1hbGl6ZWRUcmVlSXRlbVtdO1xuXHRcblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgbm9kZSBpcyBleHBhbmRlZFxuXHQgKi9cblx0aXNFeHBhbmRlZD86IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogU3RyaW5nIHRpdGxlIG9mIHRoZSBub2RlXG5cdCAqL1xuXHRsYWJlbDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEludGVyZmFjZSByZXByZXNlbnRpbmcgdGhlIEFQSSBmb3IgYSBUcmVlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmVlQXBpIHtcbn1cblxuLyoqXG4gKiBJbnRlcmZhY2UgcmVwcmVzZW50aW5nIHZhcmlvdXMgZGlyZWN0aXZlcyB1c2VkIGluIHRoZSBUcmVlIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmVlRGlyZWN0aXZlcyB7XG5cdFxuXHQvKipcblx0ICogRGlyZWN0aXZlIHRvIGF0dGFjaCBuYXZNYW5hZ2VyIGZvciB0aGUgdHJlZVxuXHQgKi9cblx0bmF2aWdhdGlvbkRpcmVjdGl2ZTogRGlyZWN0aXZlO1xuXHRcblx0LyoqXG5cdCAqIERpcmVjdGl2ZSB0byBoYW5kbGUgdG9nZ2xlIGZvciB0aGUgdHJlZSBpdGVtXG5cdCAqL1xuXHRpdGVtVG9nZ2xlRGlyZWN0aXZlOiBEaXJlY3RpdmU8e2l0ZW06IE5vcm1hbGl6ZWRUcmVlSXRlbX0+O1xuXHRcblx0LyoqXG5cdCAqIERpcmVjdGl2ZSB0byBoYW5kbGUgYXR0cmlidXRlcyBmb3IgdGhlIHRyZWUgaXRlbVxuXHQgKi9cblx0aXRlbUF0dHJpYnV0ZXNEaXJlY3RpdmU6IERpcmVjdGl2ZTx7aXRlbTogTm9ybWFsaXplZFRyZWVJdGVtfT47XG59XG5cbiJdfQ==`;export{l as default};
