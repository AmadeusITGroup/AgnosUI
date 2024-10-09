const G=`import { getRatingDefaultConfig, createRating } from '@agnos-ui/core-bootstrap/components/rating';
/**
 * Retrieve a shallow copy of the default Rating config
 * @returns the default Rating config
 */
const export_getRatingDefaultConfig = getRatingDefaultConfig;
export { export_getRatingDefaultConfig as getRatingDefaultConfig };
/**
 * Create a RatingWidget with given config props
 * @param config - an optional rating config
 * @returns a RatingWidget
 */
const export_createRating = createRating;
export { export_createRating as createRating };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmdlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3JhdGluZy9yYXRpbmcuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxZQUFZLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUtoRzs7O0dBR0c7QUFDSCxNQUFNLDZCQUE2QixHQUFzQixzQkFBNkIsQ0FBQztBQUN2RixPQUFPLEVBQUMsNkJBQTZCLElBQUksc0JBQXNCLEVBQUMsQ0FBQztBQTJQakU7Ozs7R0FJRztBQUVILE1BQU0sbUJBQW1CLEdBQWdDLFlBQW1CLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixJQUFJLFlBQVksRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRSYXRpbmdEZWZhdWx0Q29uZmlnLCBjcmVhdGVSYXRpbmd9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC9jb21wb25lbnRzL3JhdGluZyc7XG5pbXBvcnQgdHlwZSB7U2xvdENvbnRlbnQsIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5cblxuXG4vKipcbiAqIFJldHJpZXZlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBkZWZhdWx0IFJhdGluZyBjb25maWdcbiAqIEByZXR1cm5zIHRoZSBkZWZhdWx0IFJhdGluZyBjb25maWdcbiAqL1xuY29uc3QgZXhwb3J0X2dldFJhdGluZ0RlZmF1bHRDb25maWc6ICgpID0+IFJhdGluZ1Byb3BzID0gZ2V0UmF0aW5nRGVmYXVsdENvbmZpZyBhcyBhbnk7XG5leHBvcnQge2V4cG9ydF9nZXRSYXRpbmdEZWZhdWx0Q29uZmlnIGFzIGdldFJhdGluZ0RlZmF1bHRDb25maWd9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFJhdGluZ1N0YXRlIHtcblx0XG5cdC8qKlxuXHQgKiB0aGUgYXJpYSB2YWx1ZSBvZiB0aGUgcmF0aW5nXG5cdCAqL1xuXHRhcmlhVmFsdWVUZXh0OiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogdGhlIHZpc2libGUgdmFsdWUgb2YgdGhlIHJhdGluZyAoaXQgY2hhbmdlcyB3aGVuIGhvdmVyaW5nIG92ZXIgdGhlIHJhdGluZyBldmVuIHRob3VnaCB0aGUgcmVhbCB2YWx1ZSBkaWQgbm90IGNoYW5nZSlcblx0ICovXG5cdHZpc2libGVSYXRpbmc6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBpcyB0aGUgcmF0aW5nIGludGVyYWN0aXZlIGkuZS4gbGlzdGVuaW5nIHRvIGhvdmVyLCBjbGljayBhbmQga2V5Ym9hcmQgZXZlbnRzXG5cdCAqL1xuXHRpbnRlcmFjdGl2ZTogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiB0aGUgbGlzdCBvZiBzdGFyc1xuXHQgKi9cblx0c3RhcnM6IFN0YXJDb250ZXh0W107XG5cdFxuXHQvKipcblx0ICogVGhlIGN1cnJlbnQgcmF0aW5nLiBDb3VsZCBiZSBhIGRlY2ltYWwgdmFsdWUgbGlrZSBgMy43NWAuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRyYXRpbmc6IG51bWJlcjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBtYXhpbXVtIHJhdGluZyB0aGF0IGNhbiBiZSBnaXZlbi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMTBgXG5cdCAqL1xuXHRtYXhSYXRpbmc6IG51bWJlcjtcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBpcyBkaXNhYmxlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRkaXNhYmxlZDogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIHJhdGluZyBjYW4ndCBiZSBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdHJlYWRvbmx5OiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogRGVmaW5lIGlmIHRoZSByYXRpbmcgY2FuIGJlIHJlc2V0LlxuXHQgKlxuXHQgKiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgY2FuICd1bnNldCcgdGhlIHJhdGluZyB2YWx1ZSBieSBjbGlraW5nIG9uIHRoZSBjdXJyZW50IHJhdGluZyB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdHJlc2V0dGFibGU6IGJvb2xlYW47XG5cdFxuXG5cdC8qKlxuXHQgKiBBbGxvd3Mgc2V0dGluZyBhIGN1c3RvbSByYXRpbmcgdGFiaW5kZXguXG5cdCAqIElmIHRoZSBjb21wb25lbnQgaXMgZGlzYWJsZWQsIGB0YWJpbmRleGAgd2lsbCBzdGlsbCBiZSBzZXQgdG8gYC0xYC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMGBcblx0ICovXG5cdHRhYmluZGV4OiBudW1iZXI7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgYXJpYSBsYWJlbFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnUmF0aW5nJ2Bcblx0ICovXG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxsZWQgYnlcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRhcmlhTGFiZWxsZWRCeTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byBvdmVycmlkZSB0aGUgd2F5IGVhY2ggc3RhciBpcyBkaXNwbGF5ZWQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHtmaWxsfTogU3RhckNvbnRleHQpID0+IFN0cmluZy5mcm9tQ2hhckNvZGUoZmlsbCA9PT0gMTAwID8gOTczMyA6IDk3MzQpXG5cdCAqIGBgYFxuXHQgKi9cblx0c3RhcjogU2xvdENvbnRlbnQ8U3RhckNvbnRleHQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhdGluZ1Byb3BzIHtcblx0XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtdmFsdWV0ZXh0JyBhdHRyaWJ1dGUuXG5cdCAqIEBwYXJhbSByYXRpbmcgLSBDdXJyZW50IHJhdGluZyB2YWx1ZS5cblx0ICogQHBhcmFtIG1heFJhdGluZyAtIG1heFJhdGluZyB2YWx1ZS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAocmF0aW5nOiBudW1iZXIsIG1heFJhdGluZzogbnVtYmVyKSA9PiBgJHtyYXRpbmd9IG91dCBvZiAke21heFJhdGluZ31gXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYVZhbHVlVGV4dEZuOiAocmF0aW5nOiBudW1iZXIsIG1heFJhdGluZzogbnVtYmVyKSA9PiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHJhdGluZyBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSBuZXdseSBzZWxlY3RlZCByYXRpbmcuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRvblJhdGluZ0NoYW5nZTogKHJhdGluZzogbnVtYmVyKSA9PiB2b2lkO1xuXHRcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZW1pdHRlZCB3aGVuIHRoZSB1c2VyIGlzIGhvdmVyaW5nIG92ZXIgYSBnaXZlbiByYXRpbmcuXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgaXMgZXF1YWwgdG8gdGhlIHJhdGluZyBiZWluZyBob3ZlcmVkIG92ZXIuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRvbkhvdmVyOiAocmF0aW5nOiBudW1iZXIpID0+IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgc3RvcHMgaG92ZXJpbmcgb3ZlciBhIGdpdmVuIHJhdGluZy5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgcmF0aW5nIG9mIHRoZSBsYXN0IGl0ZW0gYmVpbmcgaG92ZXJlZCBvdmVyLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0b25MZWF2ZTogKHJhdGluZzogbnVtYmVyKSA9PiB2b2lkO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHJhdGluZy4gQ291bGQgYmUgYSBkZWNpbWFsIHZhbHVlIGxpa2UgYDMuNzVgLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAwYFxuXHQgKi9cblx0cmF0aW5nOiBudW1iZXI7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbWF4aW11bSByYXRpbmcgdGhhdCBjYW4gYmUgZ2l2ZW4uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDEwYFxuXHQgKi9cblx0bWF4UmF0aW5nOiBudW1iZXI7XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgaXMgZGlzYWJsZWQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0ZGlzYWJsZWQ6IGJvb2xlYW47XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHRoZSByYXRpbmcgY2FuJ3QgYmUgY2hhbmdlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRyZWFkb25seTogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIERlZmluZSBpZiB0aGUgcmF0aW5nIGNhbiBiZSByZXNldC5cblx0ICpcblx0ICogSWYgc2V0IHRvIHRydWUsIHRoZSB1c2VyIGNhbiAndW5zZXQnIHRoZSByYXRpbmcgdmFsdWUgYnkgY2xpa2luZyBvbiB0aGUgY3VycmVudCByYXRpbmcgdmFsdWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRyZXNldHRhYmxlOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogQWxsb3dzIHNldHRpbmcgYSBjdXN0b20gcmF0aW5nIHRhYmluZGV4LlxuXHQgKiBJZiB0aGUgY29tcG9uZW50IGlzIGRpc2FibGVkLCBgdGFiaW5kZXhgIHdpbGwgc3RpbGwgYmUgc2V0IHRvIGAtMWAuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHR0YWJpbmRleDogbnVtYmVyO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGFyaWEgbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1JhdGluZydgXG5cdCAqL1xuXHRhcmlhTGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBhcmlhIGxhYmVsbGVkIGJ5XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0YXJpYUxhYmVsbGVkQnk6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRjbGFzc05hbWU6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gb3ZlcnJpZGUgdGhlIHdheSBlYWNoIHN0YXIgaXMgZGlzcGxheWVkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICh7ZmlsbH06IFN0YXJDb250ZXh0KSA9PiBTdHJpbmcuZnJvbUNoYXJDb2RlKGZpbGwgPT09IDEwMCA/IDk3MzMgOiA5NzM0KVxuXHQgKiBgYGBcblx0ICovXG5cdHN0YXI6IFNsb3RDb250ZW50PFN0YXJDb250ZXh0Pjtcbn1cblxuXG5cbmV4cG9ydCB0eXBlIFJhdGluZ1dpZGdldCA9IFdpZGdldDxSYXRpbmdQcm9wcywgUmF0aW5nU3RhdGUsIG9iamVjdCwgUmF0aW5nQWN0aW9ucywgUmF0aW5nRGlyZWN0aXZlcz47XG5cblxuXG4vKipcbiAqIENyZWF0ZSBhIFJhdGluZ1dpZGdldCB3aXRoIGdpdmVuIGNvbmZpZyBwcm9wc1xuICogQHBhcmFtIGNvbmZpZyAtIGFuIG9wdGlvbmFsIHJhdGluZyBjb25maWdcbiAqIEByZXR1cm5zIGEgUmF0aW5nV2lkZ2V0XG4gKi9cblxuY29uc3QgZXhwb3J0X2NyZWF0ZVJhdGluZzogV2lkZ2V0RmFjdG9yeTxSYXRpbmdXaWRnZXQ+ID0gY3JlYXRlUmF0aW5nIGFzIGFueTtcbmV4cG9ydCB7ZXhwb3J0X2NyZWF0ZVJhdGluZyBhcyBjcmVhdGVSYXRpbmd9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJDb250ZXh0IHtcblx0XG5cdC8qKlxuXHQgKiBpbmRpY2F0ZXMgaG93IG11Y2ggdGhlIGN1cnJlbnQgc3RhciBpcyBmaWxsZWQsIGZyb20gMCB0byAxMDBcblx0ICovXG5cdGZpbGw6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiB0aGUgcG9zaXRpb24gb2YgdGhlIHN0YXIgaW4gdGhlIHJhdGluZ1xuXHQgKi9cblx0aW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSYXRpbmdEaXJlY3RpdmVzIHtcblx0XG5cdC8qKlxuXHQgKiBBIGRpcmVjdGl2ZSB0byBiZSBhcHBsaWVkIHRvIHRoZSBtYWluIGNvbnRhaW5lclxuXHQgKiBUaGlzIHdpbGwgaGFuZGxlIHRoZSBrZXlkb3duLCBtb3VzZWxlYXZlLCB0YWJpbmRleCBhbmQgYXJpYSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRjb250YWluZXJEaXJlY3RpdmU6IERpcmVjdGl2ZTtcblx0XG5cblx0LyoqXG5cdCAqIEEgZGlyZWN0aXZlIHRvIGJlIGFwcGxpZWQgb24gZWFjaCBzdGFyIGVsZW1lbnRcblx0ICovXG5cdHN0YXJEaXJlY3RpdmU6IERpcmVjdGl2ZTx7aW5kZXg6IG51bWJlcn0+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJhdGluZ0FjdGlvbnMge1xuXHRcblx0LyoqXG5cdCAqIE1ldGhvZCB0byBiZSB1c2VkIHdoZW4gYSBzdGFyIGlzIGNsaWNrZWQuXG5cdCAqXG5cdCAqIFRvIGJlIHVzZWQgaW4gdGhlIG9uY2xpY2sgZXZlbnQgb2YgYSBzdGFyXG5cdCAqIEBwYXJhbSBpbmRleCAtIFN0YXIgaW5kZXgsIHN0YXJ0aW5nIGZyb20gMVxuXHQgKi9cblx0Y2xpY2soaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBNZXRob2QgdG8gYmUgdXNlZCB3aGVuIHRoZSBtb3VzZSBlbnRlciBpbiBhIHN0YXIuXG5cdCAqXG5cdCAqIFRvIGJlIHVzZWQgaW4gdGhlIG9ubW91c2VlbnRlciBvZiBhIHN0YXJcblx0ICogQHBhcmFtIGluZGV4IC0gU3RhciBpbmRleCwgc3RhcnRpbmcgZnJvbSAxXG5cdCAqL1xuXHRob3ZlcihpbmRleDogbnVtYmVyKTogdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIE1ldGhvZCB0byBiZSB1c2VkIHdoZW4gdGhlIG1vdXNlIGxlYXZlIHRoZSB3aWRnZXQuXG5cdCAqXG5cdCAqIFRvIGJlIHVzZWQgaW4gdGhlIG9ubW91c2VsZWF2ZSBvZiB0aGUgcmF0aW5nIGNvbnRhaW5lclxuXHQgKi9cblx0bGVhdmUoKTogdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIE1ldGhvZCB0byBiZSB1c2VkIHRvIGhhbmRsZSB0aGUga2V5Ym9hcmQuXG5cdCAqXG5cdCAqIFRvIGJlIHVzZWQgaW4gdGhlIG9ua2V5ZG93biBvZiB0aGUgcmF0aW5nIGNvbnRhaW5lclxuXHQgKi9cblx0aGFuZGxlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbn1cblxuIl19`;export{G as default};