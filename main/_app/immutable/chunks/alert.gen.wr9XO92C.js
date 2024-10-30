const G=`import { getAlertDefaultConfig, createAlert } from '@agnos-ui/core-bootstrap/components/alert';
/**
 * Retrieve a shallow copy of the default Alert config
 * @returns the default Alert config
 */
const export_getAlertDefaultConfig = getAlertDefaultConfig;
export { export_getAlertDefaultConfig as getAlertDefaultConfig };
/**
 * Create an AlertWidget with given config props
 * @param config - an optional alert config
 * @returns an AlertWidget
 */
const export_createAlert = createAlert;
export { export_createAlert as createAlert };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuZ2VuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxXQUFXLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQU03Rjs7O0dBR0c7QUFDSCxNQUFNLDRCQUE0QixHQUFxQixxQkFBNEIsQ0FBQztBQUNwRixPQUFPLEVBQUMsNEJBQTRCLElBQUkscUJBQXFCLEVBQUMsQ0FBQztBQStML0Q7Ozs7R0FJRztBQUNILE1BQU0sa0JBQWtCLEdBQStCLFdBQWtCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGtCQUFrQixJQUFJLFdBQVcsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRBbGVydERlZmF1bHRDb25maWcsIGNyZWF0ZUFsZXJ0fSBmcm9tICdAYWdub3MtdWkvY29yZS1ib290c3RyYXAvY29tcG9uZW50cy9hbGVydCc7XG5pbXBvcnQgdHlwZSB7V2lkZ2V0U2xvdENvbnRleHQsIFNsb3RDb250ZW50LCBUcmFuc2l0aW9uRm4sIFdpZGdldCwgV2lkZ2V0RmFjdG9yeSwgRGlyZWN0aXZlfSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QlNDb250ZXh0dWFsQ2xhc3N9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC90eXBlcyc7XG5cblxuXG4vKipcbiAqIFJldHJpZXZlIGEgc2hhbGxvdyBjb3B5IG9mIHRoZSBkZWZhdWx0IEFsZXJ0IGNvbmZpZ1xuICogQHJldHVybnMgdGhlIGRlZmF1bHQgQWxlcnQgY29uZmlnXG4gKi9cbmNvbnN0IGV4cG9ydF9nZXRBbGVydERlZmF1bHRDb25maWc6ICgpID0+IEFsZXJ0UHJvcHMgPSBnZXRBbGVydERlZmF1bHRDb25maWcgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfZ2V0QWxlcnREZWZhdWx0Q29uZmlnIGFzIGdldEFsZXJ0RGVmYXVsdENvbmZpZ307XG5cblxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGNvbnRleHQgZm9yIGFuIEFsZXJ0IGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbGVydENvbnRleHQgZXh0ZW5kcyBXaWRnZXRTbG90Q29udGV4dDxBbGVydFdpZGdldD4ge31cblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBzdGF0ZSBvZiBhbiBhbGVydCBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRTdGF0ZSB7XG5cdFxuXHQvKipcblx0ICogSXMgYHRydWVgIHdoZW4gdGhlIGFsZXJ0IGlzIGhpZGRlbi4gQ29tcGFyZWQgdG8gYHZpc2libGVgLCB0aGlzIGlzIHVwZGF0ZWQgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gaXMgZXhlY3V0ZWQuXG5cdCAqL1xuXHRoaWRkZW46IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0ZGlzbWlzc2libGU6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBhbGVydCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHR2aXNpYmxlOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBjbG9zZSBidXR0b24gbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0Nsb3NlJ2Bcblx0ICovXG5cdGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogR2xvYmFsIHRlbXBsYXRlIGZvciB0aGUgYWxlcnQgY29tcG9uZW50XG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFsZXJ0Q29udGV4dD47XG5cdFxuXHQvKipcblx0ICogVGVtcGxhdGUgZm9yIHRoZSBhbGVydCBjb250ZW50XG5cdCAqL1xuXHRjaGlsZHJlbjogU2xvdENvbnRlbnQ8QWxlcnRDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBhbGVydCwgZm9sbG93aW5nIGJvb3RzdHJhcCB0eXBlcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ3ByaW1hcnknYFxuXHQgKi9cblx0dHlwZTogQlNDb250ZXh0dWFsQ2xhc3M7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgcHJvcGVydGllcyBmb3IgdGhlIEFsZXJ0IGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbGVydFByb3BzIHtcblx0XG5cdC8qKlxuXHQgKiBUaGUgdHJhbnNpdGlvbiBmdW5jdGlvbiB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGFsZXJ0IGlzIGRpc3BsYXllZCBvciBoaWRkZW4uXG5cdCAqXG5cdCAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUgb2YgYGFuaW1hdGVkT25Jbml0YCwgdGhlIGFuaW1hdGlvbiBjYW4gYmUgb3B0aW9uYWxseSBza2lwcGVkIGR1cmluZyB0aGUgc2hvd2luZyBwcm9jZXNzLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWRlVHJhbnNpdGlvbmBcblx0ICovXG5cdHRyYW5zaXRpb246IFRyYW5zaXRpb25Gbjtcblx0XG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgYWxlcnQgdmlzaWJpbGl0eSBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0b25WaXNpYmxlQ2hhbmdlOiAodmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRvbkhpZGRlbjogKCkgPT4gdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBhbGVydCBpcyBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdG9uU2hvd246ICgpID0+IHZvaWQ7XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IG9wZW5pbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQW5pbWF0aW9uIGlzIHRyaWdnZXJlZCAgd2hlbiB0aGUgYC5vcGVuKClgIGZ1bmN0aW9uIGlzIGNhbGxlZFxuXHQgKiBvciB0aGUgdmlzaWJsZSBwcm9wIGlzIGNoYW5nZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRhbmltYXRlZE9uSW5pdDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGFsZXJ0IGNsb3Npbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQW5pbWF0aW9uIGlzIHRyaWdnZXJlZCAgd2hlbiBjbGlja2VkIG9uIHRoZSBjbG9zZSBidXR0b24gKMOXKSxcblx0ICogdmlhIHRoZSBgLmNsb3NlKClgIGZ1bmN0aW9uIG9yIHRoZSB2aXNpYmxlIHByb3AgaXMgY2hhbmdlZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0YW5pbWF0ZWQ6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgLCBhbGVydCBjYW4gYmUgZGlzbWlzc2VkIGJ5IHRoZSB1c2VyLlxuXHQgKiBUaGUgY2xvc2UgYnV0dG9uICjDlykgd2lsbCBiZSBkaXNwbGF5ZWQgYW5kIHlvdSBjYW4gYmUgbm90aWZpZWQgb2YgdGhlIGV2ZW50IHdpdGggdGhlIChjbG9zZSkgb3V0cHV0LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0ZGlzbWlzc2libGU6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBhbGVydCBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHR2aXNpYmxlOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogQWNjZXNzaWJpbGl0eSBjbG9zZSBidXR0b24gbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ0Nsb3NlJ2Bcblx0ICovXG5cdGFyaWFDbG9zZUJ1dHRvbkxhYmVsOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0Y2xhc3NOYW1lOiBzdHJpbmc7XG5cdFxuXHQvKipcblx0ICogR2xvYmFsIHRlbXBsYXRlIGZvciB0aGUgYWxlcnQgY29tcG9uZW50XG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PEFsZXJ0Q29udGV4dD47XG5cdFxuXHQvKipcblx0ICogVGVtcGxhdGUgZm9yIHRoZSBhbGVydCBjb250ZW50XG5cdCAqL1xuXHRjaGlsZHJlbjogU2xvdENvbnRlbnQ8QWxlcnRDb250ZXh0Pjtcblx0XG5cdC8qKlxuXHQgKiBUeXBlIG9mIHRoZSBhbGVydCwgZm9sbG93aW5nIGJvb3RzdHJhcCB0eXBlcy5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ3ByaW1hcnknYFxuXHQgKi9cblx0dHlwZTogQlNDb250ZXh0dWFsQ2xhc3M7XG59XG5cblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYW4gYWxlcnQgd2lkZ2V0IGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IHR5cGUgQWxlcnRXaWRnZXQgPSBXaWRnZXQ8QWxlcnRQcm9wcywgQWxlcnRTdGF0ZSwgQWxlcnRBcGksIEFsZXJ0RGlyZWN0aXZlcz47XG5cblxuXG4vKipcbiAqIENyZWF0ZSBhbiBBbGVydFdpZGdldCB3aXRoIGdpdmVuIGNvbmZpZyBwcm9wc1xuICogQHBhcmFtIGNvbmZpZyAtIGFuIG9wdGlvbmFsIGFsZXJ0IGNvbmZpZ1xuICogQHJldHVybnMgYW4gQWxlcnRXaWRnZXRcbiAqL1xuY29uc3QgZXhwb3J0X2NyZWF0ZUFsZXJ0OiBXaWRnZXRGYWN0b3J5PEFsZXJ0V2lkZ2V0PiA9IGNyZWF0ZUFsZXJ0IGFzIGFueTtcbmV4cG9ydCB7ZXhwb3J0X2NyZWF0ZUFsZXJ0IGFzIGNyZWF0ZUFsZXJ0fTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBBUEkgZm9yIGFuIGFsZXJ0IGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbGVydEFwaSB7XG5cdFxuXHQvKipcblx0ICogVHJpZ2dlcnMgYWxlcnQgY2xvc2luZyBwcm9ncmFtbWF0aWNhbGx5IChzYW1lIGFzIGNsaWNraW5nIG9uIHRoZSBjbG9zZSBidXR0b24gKMOXKSkuXG5cdCAqL1xuXHRjbG9zZSgpOiB2b2lkO1xuXHRcblxuXHQvKipcblx0ICogVHJpZ2dlcnMgdGhlIGFsZXJ0IHRvIGJlIGRpc3BsYXllZCBmb3IgdGhlIHVzZXIuXG5cdCAqL1xuXHRvcGVuKCk6IHZvaWQ7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgZGlyZWN0aXZlcyBmb3IgYW4gYWxlcnQgY29tcG9uZW50LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFsZXJ0RGlyZWN0aXZlcyB7XG5cdFxuXHQvKipcblx0ICogdGhlIHRyYW5zaXRpb24gZGlyZWN0aXZlLCBwaWxvdGluZyB3aGF0IGlzIHRoZSB2aXN1YWwgZWZmZWN0IG9mIGdvaW5nIGZyb20gaGlkZGVuIHRvIHZpc2libGVcblx0ICovXG5cdHRyYW5zaXRpb25EaXJlY3RpdmU6IERpcmVjdGl2ZTtcbn1cblxuIl19`;export{G as default};