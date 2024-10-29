const Z=`import { widgetsConfigFactory } from '@agnos-ui/angular-headless';
import { InjectionToken } from '@angular/core';
/**
 * @param factory - The widget factory.
 * @param widgetName - The name of the widget.
 * @param defaultConfig - The default configuration for the widget.
 * @param events - The events for the widget.
 * @param afterInit - The function to call after initialization.
 */
const widgetFactories = widgetsConfigFactory(new InjectionToken('bootstrapWidgetsConfig'));
/**
 * Destructures and exports several functions and constants from the \`widgetFactories\` object.
 *
 * @constant {InjectionToken} widgetsConfigInjectionToken - Token used for injecting widget configuration.
 * @function provideWidgetsConfig - Provides the widget configuration.
 * @function injectWidgetConfig - Injects a single widget configuration.
 * @function injectWidgetsConfig - Injects multiple widget configurations.
 * @function callWidgetFactory - Calls the widget factory function.
 */
export const { widgetsConfigInjectionToken, provideWidgetsConfig, injectWidgetConfig, injectWidgetsConfig, callWidgetFactory } = widgetFactories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUloRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUTdDOzs7Ozs7R0FNRztBQUNILE1BQU0sZUFBZSxHQTBCakIsb0JBQW9CLENBQWdCLElBQUksY0FBYyxDQUFvQyx3QkFBd0IsQ0FBQyxDQUFRLENBQUM7QUFFaEk7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxFQUFDLDJCQUEyQixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFDLEdBQUcsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1xuXHRBbmd1bGFyV2lkZ2V0LFxuXHRJc1Nsb3RDb250ZW50LFxuXHRQYXJ0aWFsMkxldmVscyxcblx0U2xvdENvbnRlbnQsXG5cdFdpZGdldCxcblx0V2lkZ2V0RmFjdG9yeSxcblx0V2lkZ2V0UHJvcHMsXG5cdFdpZGdldHNDb25maWdTdG9yZSxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHt3aWRnZXRzQ29uZmlnRmFjdG9yeX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0Jvb3RzdHJhcFdpZGdldHNDb25maWd9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC9jb25maWcnO1xuaW1wb3J0IHR5cGUge1JlYWRhYmxlU2lnbmFsfSBmcm9tICdAYW1hZGV1cy1pdC1ncm91cC90YW5zdSc7XG5pbXBvcnQgdHlwZSB7RmFjdG9yeVByb3ZpZGVyLCBUZW1wbGF0ZVJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHR5cGUge1dpZGdldHNDb25maWd9IGZyb20gJy4vY29uZmlnLmdlbic7XG5leHBvcnQgdHlwZSB7V2lkZ2V0c0NvbmZpZ307XG5cbnR5cGUgQWRhcHRQYXJlbnRDb25maWcgPSAoY29uZmlnOiBQYXJ0aWFsMkxldmVsczxXaWRnZXRzQ29uZmlnPikgPT4gUGFydGlhbDJMZXZlbHM8V2lkZ2V0c0NvbmZpZz47XG50eXBlIEluamVjdFdpZGdldHNDb25maWcgPSAoY29uZmlnPzogUGFydGlhbDJMZXZlbHM8V2lkZ2V0c0NvbmZpZz4pID0+IFdpZGdldHNDb25maWdTdG9yZTxXaWRnZXRzQ29uZmlnPjtcblxuLyoqXG4gKiBAcGFyYW0gZmFjdG9yeSAtIFRoZSB3aWRnZXQgZmFjdG9yeS5cbiAqIEBwYXJhbSB3aWRnZXROYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHdpZGdldC5cbiAqIEBwYXJhbSBkZWZhdWx0Q29uZmlnIC0gVGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBmb3IgdGhlIHdpZGdldC5cbiAqIEBwYXJhbSBldmVudHMgLSBUaGUgZXZlbnRzIGZvciB0aGUgd2lkZ2V0LlxuICogQHBhcmFtIGFmdGVySW5pdCAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGFmdGVyIGluaXRpYWxpemF0aW9uLlxuICovXG5jb25zdCB3aWRnZXRGYWN0b3JpZXM6IHtcblx0d2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuOiBJbmplY3Rpb25Ub2tlbjxXaWRnZXRzQ29uZmlnU3RvcmU8V2lkZ2V0c0NvbmZpZz4+O1xuXHRwcm92aWRlV2lkZ2V0c0NvbmZpZzogKGFkYXB0UGFyZW50Q29uZmlnPzogQWRhcHRQYXJlbnRDb25maWcpID0+IEZhY3RvcnlQcm92aWRlcjtcblx0aW5qZWN0V2lkZ2V0Q29uZmlnOiA8TiBleHRlbmRzIGtleW9mIEJvb3RzdHJhcFdpZGdldHNDb25maWc+KHdpZGdldE5hbWU6IE4pID0+IFJlYWRhYmxlU2lnbmFsPFBhcnRpYWw8V2lkZ2V0c0NvbmZpZ1tOXT4gfCB1bmRlZmluZWQ+O1xuXHRpbmplY3RXaWRnZXRzQ29uZmlnOiBJbmplY3RXaWRnZXRzQ29uZmlnO1xuXHRjYWxsV2lkZ2V0RmFjdG9yeTogPFcgZXh0ZW5kcyBXaWRnZXQ8b2JqZWN0LCBvYmplY3QsIG9iamVjdCwgb2JqZWN0Pj4oe1xuXHRcdGZhY3RvcnksXG5cdFx0d2lkZ2V0TmFtZSxcblx0XHRkZWZhdWx0Q29uZmlnLFxuXHRcdGV2ZW50cyxcblx0XHRhZnRlckluaXQsXG5cdFx0c2xvdFRlbXBsYXRlcyxcblx0XHRzbG90Q2hpbGRyZW4sXG5cdH06IHtcblx0XHRmYWN0b3J5OiBXaWRnZXRGYWN0b3J5PFc+O1xuXHRcdHdpZGdldE5hbWU/OiBrZXlvZiBCb290c3RyYXBXaWRnZXRzQ29uZmlnIHwgbnVsbCB8IHVuZGVmaW5lZDtcblx0XHRkZWZhdWx0Q29uZmlnPzogUGFydGlhbDxXaWRnZXRQcm9wczxXPj4gfCBSZWFkYWJsZVNpZ25hbDxQYXJ0aWFsPFdpZGdldFByb3BzPFc+PiB8IHVuZGVmaW5lZD4gfCB1bmRlZmluZWQ7XG5cdFx0ZXZlbnRzPzogUGFydGlhbDxQaWNrPFdpZGdldFByb3BzPFc+LCBrZXlvZiBXaWRnZXRQcm9wczxXPiAmIGBvbiR7c3RyaW5nfWA+Pjtcblx0XHRhZnRlckluaXQ/OiAod2lkZ2V0OiBBbmd1bGFyV2lkZ2V0PFc+KSA9PiB2b2lkO1xuXHRcdHNsb3RUZW1wbGF0ZXM/OiAoKSA9PiB7XG5cdFx0XHRbSyBpbiBrZXlvZiBXaWRnZXRQcm9wczxXPiBhcyBJc1Nsb3RDb250ZW50PFdpZGdldFByb3BzPFc+W0tdPiBleHRlbmRzIDAgPyBuZXZlciA6IEtdOiBXaWRnZXRQcm9wczxXPltLXSBleHRlbmRzIFNsb3RDb250ZW50PGluZmVyIFU+XG5cdFx0XHRcdD8gVGVtcGxhdGVSZWY8VT4gfCB1bmRlZmluZWRcblx0XHRcdFx0OiBuZXZlcjtcblx0XHR9O1xuXHRcdHNsb3RDaGlsZHJlbj86ICgpID0+IFRlbXBsYXRlUmVmPHZvaWQ+IHwgdW5kZWZpbmVkO1xuXHR9KSA9PiBBbmd1bGFyV2lkZ2V0PFc+O1xufSA9IHdpZGdldHNDb25maWdGYWN0b3J5PFdpZGdldHNDb25maWc+KG5ldyBJbmplY3Rpb25Ub2tlbjxXaWRnZXRzQ29uZmlnU3RvcmU8V2lkZ2V0c0NvbmZpZz4+KCdib290c3RyYXBXaWRnZXRzQ29uZmlnJykpIGFzIGFueTtcblxuLyoqXG4gKiBEZXN0cnVjdHVyZXMgYW5kIGV4cG9ydHMgc2V2ZXJhbCBmdW5jdGlvbnMgYW5kIGNvbnN0YW50cyBmcm9tIHRoZSBgd2lkZ2V0RmFjdG9yaWVzYCBvYmplY3QuXG4gKlxuICogQGNvbnN0YW50IHtJbmplY3Rpb25Ub2tlbn0gd2lkZ2V0c0NvbmZpZ0luamVjdGlvblRva2VuIC0gVG9rZW4gdXNlZCBmb3IgaW5qZWN0aW5nIHdpZGdldCBjb25maWd1cmF0aW9uLlxuICogQGZ1bmN0aW9uIHByb3ZpZGVXaWRnZXRzQ29uZmlnIC0gUHJvdmlkZXMgdGhlIHdpZGdldCBjb25maWd1cmF0aW9uLlxuICogQGZ1bmN0aW9uIGluamVjdFdpZGdldENvbmZpZyAtIEluamVjdHMgYSBzaW5nbGUgd2lkZ2V0IGNvbmZpZ3VyYXRpb24uXG4gKiBAZnVuY3Rpb24gaW5qZWN0V2lkZ2V0c0NvbmZpZyAtIEluamVjdHMgbXVsdGlwbGUgd2lkZ2V0IGNvbmZpZ3VyYXRpb25zLlxuICogQGZ1bmN0aW9uIGNhbGxXaWRnZXRGYWN0b3J5IC0gQ2FsbHMgdGhlIHdpZGdldCBmYWN0b3J5IGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3Qge3dpZGdldHNDb25maWdJbmplY3Rpb25Ub2tlbiwgcHJvdmlkZVdpZGdldHNDb25maWcsIGluamVjdFdpZGdldENvbmZpZywgaW5qZWN0V2lkZ2V0c0NvbmZpZywgY2FsbFdpZGdldEZhY3Rvcnl9ID0gd2lkZ2V0RmFjdG9yaWVzO1xuIl19`;export{Z as default};
