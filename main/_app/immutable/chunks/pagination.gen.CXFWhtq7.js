const G=`import { getPaginationDefaultConfig, createPagination } from '@agnos-ui/core-bootstrap/components/pagination';
/**
 * Retrieve a shallow copy of the default Pagination config
 * @returns the default Pagination config
 */
const export_getPaginationDefaultConfig = getPaginationDefaultConfig;
export { export_getPaginationDefaultConfig as getPaginationDefaultConfig };
/**
 * Create a PaginationWidget with given config props
 * @param config - an optional alert config
 * @returns a PaginationWidget
 */
const export_createPagination = createPagination;
export { export_createPagination as createPagination };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5nZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uZ2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQywwQkFBMEIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBSTVHOzs7R0FHRztBQUNILE1BQU0saUNBQWlDLEdBQTBCLDBCQUFpQyxDQUFDO0FBQ25HLE9BQU8sRUFBQyxpQ0FBaUMsSUFBSSwwQkFBMEIsRUFBQyxDQUFDO0FBK2xCekU7Ozs7R0FJRztBQUNILE1BQU0sdUJBQXVCLEdBQW9DLGdCQUF1QixDQUFDO0FBQ3pGLE9BQU8sRUFBQyx1QkFBdUIsSUFBSSxnQkFBZ0IsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRQYWdpbmF0aW9uRGVmYXVsdENvbmZpZywgY3JlYXRlUGFnaW5hdGlvbn0gZnJvbSAnQGFnbm9zLXVpL2NvcmUtYm9vdHN0cmFwL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XG5pbXBvcnQgdHlwZSB7V2lkZ2V0U2xvdENvbnRleHQsIFNsb3RDb250ZW50LCBXaWRnZXQsIFdpZGdldEZhY3RvcnksIERpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuXG5cbi8qKlxuICogUmV0cmlldmUgYSBzaGFsbG93IGNvcHkgb2YgdGhlIGRlZmF1bHQgUGFnaW5hdGlvbiBjb25maWdcbiAqIEByZXR1cm5zIHRoZSBkZWZhdWx0IFBhZ2luYXRpb24gY29uZmlnXG4gKi9cbmNvbnN0IGV4cG9ydF9nZXRQYWdpbmF0aW9uRGVmYXVsdENvbmZpZzogKCkgPT4gUGFnaW5hdGlvblByb3BzID0gZ2V0UGFnaW5hdGlvbkRlZmF1bHRDb25maWcgYXMgYW55O1xuZXhwb3J0IHtleHBvcnRfZ2V0UGFnaW5hdGlvbkRlZmF1bHRDb25maWcgYXMgZ2V0UGFnaW5hdGlvbkRlZmF1bHRDb25maWd9O1xuXG5cblxuLyoqXG4gKiBBIHR5cGUgZm9yIHRoZSBzbG90IGNvbnRleHQgb2YgdGhlIHBhZ2luYXRpb24gd2lkZ2V0XG4gKi9cbmV4cG9ydCB0eXBlIFBhZ2luYXRpb25Db250ZXh0ID0gV2lkZ2V0U2xvdENvbnRleHQ8UGFnaW5hdGlvbldpZGdldD47XG5cblxuXG4vKipcbiAqIEEgdHlwZSBmb3IgdGhlIHNsb3QgY29udGV4dCBvZiB0aGUgcGFnaW5hdGlvbiB3aWRnZXQgd2hlbiB0aGUgc2xvdCBpcyB0aGUgbnVtYmVyIGxhYmVsXG4gKi9cbmV4cG9ydCB0eXBlIFBhZ2luYXRpb25OdW1iZXJDb250ZXh0ID0gUGFnaW5hdGlvbkNvbnRleHQgJiB7XG5cdC8qKlxuXHQgKiBEaXNwbGF5ZWQgcGFnZVxuXHQgKi9cblx0ZGlzcGxheWVkUGFnZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uU3RhdGUge1xuXHRcblx0LyoqXG5cdCAqIFRoZSBudW1iZXIgb2YgcGFnZXMuXG5cdCAqL1xuXHRwYWdlQ291bnQ6IG51bWJlcjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBwYWdlcywgdGhlIG51bWJlciBpbiB0aGUgQXJyYXkgaXMgdGhlIG51bWJlciBvZiB0aGUgcGFnZS5cblx0ICovXG5cdHBhZ2VzOiBudW1iZXJbXTtcblx0XG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBwcmV2aW91cyBsaW5rIG5lZWQgdG8gYmUgZGlzYWJsZWRcblx0ICovXG5cdHByZXZpb3VzRGlzYWJsZWQ6IGJvb2xlYW47XG5cdFxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgbmV4dCBsaW5rIG5lZWQgdG8gYmUgZGlzYWJsZWRcblx0ICovXG5cdG5leHREaXNhYmxlZDogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBsaW5rLlxuXHQgKi9cblx0cGFnZXNMYWJlbDogc3RyaW5nW107XG5cdFxuXG5cdC8qKiBUaGUgaHJlZnMgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBsaW5rICovXG5cdHBhZ2VzSHJlZnM6IHN0cmluZ1tdO1xuXHRcblxuXHQvKiogVGhlIGhyZWZzIGZvciB0aGUgZGlyZWN0aW9uIGxpbmtzICAqL1xuXHRkaXJlY3Rpb25zSHJlZnM6IERpcmVjdGlvbnNIcmVmcztcblx0XG5cblx0LyoqIFRoZSBhcmlhLWxpdmUgdGV4dCAqL1xuXHRhcmlhTGl2ZUxhYmVsVGV4dDogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMWBcblx0ICovXG5cdHBhZ2U6IG51bWJlcjtcblx0IC8vIHZhbHVlIG9mIHRoZSBjdXJyZW50L2luaXQgcGFnZSB0byBkaXNwbGF5XG5cblx0LyoqXG5cdCAqIFRoZSBwYWdpbmF0aW9uIGRpc3BsYXkgc2l6ZS5cblx0ICpcblx0ICogQm9vdHN0cmFwIGN1cnJlbnRseSBzdXBwb3J0cyBzbWFsbCBhbmQgbGFyZ2Ugc2l6ZXMuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYG51bGxgXG5cdCAqL1xuXHRzaXplOiAnc20nIHwgJ2xnJyB8IG51bGw7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBuYXYgZWxlbWVudC5cblx0ICpcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdQYWdlIG5hdmlnYXRpb24nYFxuXHQgKi9cblx0YXJpYUxhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcImFjdGl2ZVwiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICcoY3VycmVudCknXG5cdCAqIGBgYFxuXHQgKi9cblx0YWN0aXZlTGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiRmlyc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJ0FjdGlvbiBsaW5rIGZvciBmaXJzdCBwYWdlJ1xuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFGaXJzdExhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIlByZXZpb3VzXCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgcHJldmlvdXMgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRhcmlhUHJldmlvdXNMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJOZXh0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgbmV4dCBwYWdlJ1xuXHQgKiBgYGBcblx0ICovXG5cdGFyaWFOZXh0TGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiTGFzdFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIGxhc3QgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRhcmlhTGFzdExhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkVsbGlwc2lzXCIgcGFnZS5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdFbGxpcHNpcyBwYWdlIGVsZW1lbnQnYFxuXHQgKi9cblx0YXJpYUVsbGlwc2lzTGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgcGFnaW5hdGlvbiBsaW5rcyB3aWxsIGJlIGRpc2FibGVkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdGRpc2FibGVkOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJOZXh0XCIgYW5kIFwiUHJldmlvdXNcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdGRpcmVjdGlvbkxpbmtzOiBib29sZWFuO1xuXHRcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCB0aGUgXCJGaXJzdFwiIGFuZCBcIkxhc3RcIiBwYWdlIGxpbmtzIGFyZSBzaG93bi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRib3VuZGFyeUxpbmtzOiBib29sZWFuO1xuXHRcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdGNsYXNzTmFtZTogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50XG5cdCAqIFRoZSBkZWZhdWx0IHN0cnVjdHVyZSB1c2VzIHtAbGluayBQYWdpbmF0aW9uUHJvcHMuZWxsaXBzaXNMYWJlbHxlbGxpcHNpc0xhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5maXJzdFBhZ2VMYWJlbHxmaXJzdFBhZ2VMYWJlbH0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMucHJldmlvdXNQYWdlTGFiZWx8cHJldmlvdXNQYWdlTGFiZWx9LCB7QGxpbmsgUGFnaW5hdGlvblByb3BzLm5leHRQYWdlTGFiZWx8bmV4dFBhZ2VMYWJlbH0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMubGFzdFBhZ2VMYWJlbHxsYXN0UGFnZUxhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5wYWdlc0Rpc3BsYXl8cGFnZXNEaXNwbGF5fSxcblx0ICoge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5udW1iZXJMYWJlbHxudW1iZXJMYWJlbH0sXG5cdCAqL1xuXHRzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBlbGxpcHNpcyBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oCmJ2Bcblx0ICovXG5cdGVsbGlwc2lzTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBmaXJzdCBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnwqsnYFxuXHQgKi9cblx0Zmlyc3RQYWdlTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBwcmV2aW91cyBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oC5J2Bcblx0ICovXG5cdHByZXZpb3VzUGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgbmV4dCBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAn4oC6J2Bcblx0ICovXG5cdG5leHRQYWdlTGFiZWw6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBsYXN0IHNsb3Rcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCfCuydgXG5cdCAqL1xuXHRsYXN0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgcGFnZXMgc2xvdFxuXHQgKiBUbyB1c2UgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3XG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICovXG5cdHBhZ2VzRGlzcGxheTogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIG51bWJlciBzbG90XG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBAcGFyYW0gZGlzcGxheWVkUGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHtkaXNwbGF5ZWRQYWdlfTogUGFnaW5hdGlvbk51bWJlckNvbnRleHQpID0+IGAke2Rpc3BsYXllZFBhZ2V9YFxuXHQgKiBgYGBcblx0ICovXG5cdG51bWJlckxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uTnVtYmVyQ29udGV4dD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvblByb3BzIHtcblx0XG5cdC8qKlxuXHQgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIGluIHlvdXIgcGFnaW5hdGVkIGNvbGxlY3Rpb24uXG5cdCAqXG5cdCAqIE5vdGUsIHRoYXQgdGhpcyBpcyBub3QgdGhlIG51bWJlciBvZiBwYWdlcy4gUGFnZSBudW1iZXJzIGFyZSBjYWxjdWxhdGVkIGR5bmFtaWNhbGx5IGJhc2VkIG9uXG5cdCAqIGBjb2xsZWN0aW9uU2l6ZWAgYW5kIGBwYWdlU2l6ZWAuXG5cdCAqXG5cdCAqIEV4LiBpZiB5b3UgaGF2ZSAxMDAgaXRlbXMgaW4geW91ciBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5aW5nIDIwIGl0ZW1zIHBlciBwYWdlLCB5b3UnbGwgZW5kIHVwIHdpdGggNSBwYWdlcy5cblx0ICpcblx0ICogV2hhdGV2ZXIgdGhlIGNvbGxlY3Rpb25TaXplIHRoZSBwYWdlIG51bWJlciBpcyBvZiBtaW5pbXVtIDEuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDBgXG5cdCAqL1xuXHRjb2xsZWN0aW9uU2l6ZTogbnVtYmVyO1xuXHRcblxuXHQvKipcblx0ICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS5cblx0ICogQHJlbWFya3MgbWluIHZhbHVlIGlzIDFcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgMTBgXG5cdCAqL1xuXHRwYWdlU2l6ZTogbnVtYmVyO1xuXHRcblxuXHQvKipcblx0ICogQW4gZXZlbnQgZmlyZWQgd2hlbiB0aGUgcGFnZSBpcyBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIHRoZSBudW1iZXIgb2YgdGhlIG5ld2x5IHNlbGVjdGVkIHBhZ2UuXG5cdCAqXG5cdCAqIFBhZ2UgbnVtYmVycyBzdGFydCB3aXRoIGAxYC5cblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdG9uUGFnZUNoYW5nZTogKHBhZ2U6IG51bWJlcikgPT4gdm9pZDtcblx0XG5cblx0LyoqXG5cdCAqIHBhZ2VzRmFjdG9yeSByZXR1cm5zIGEgZnVuY3Rpb24gY29tcHV0aW5nIHRoZSBhcnJheSBvZiBwYWdlcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogYXMgbnVtYmVyICgtMSBhcmUgdHJlYXRlZCBhcyBlbGxpcHNpcykuXG5cdCAqIFVzZSBQYWdlIHNsb3QgdG8gY3VzdG9taXplIHRoZSBwYWdlcyB2aWV3IGFuZCBub3QgdGhpc1xuXHQgKiBAcGFyYW0gcGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKF9wYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiB7XG5cdCAqIFx0XHRjb25zdCBwYWdlczogbnVtYmVyW10gPSBbXTtcblx0ICogXHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IHBhZ2VDb3VudDsgaSsrKSB7XG5cdCAqIFx0XHRcdHBhZ2VzLnB1c2goaSk7XG5cdCAqIFx0XHR9XG5cdCAqIFx0XHRyZXR1cm4gcGFnZXM7XG5cdCAqIFx0fVxuXHQgKiBgYGBcblx0ICovXG5cdHBhZ2VzRmFjdG9yeTogKHBhZ2U6IG51bWJlciwgcGFnZUNvdW50OiBudW1iZXIpID0+IG51bWJlcltdO1xuXHRcblxuXHQvKipcblx0ICogUHJvdmlkZSB0aGUgbGFiZWwgZm9yIGVhY2ggXCJQYWdlXCIgcGFnZSBidXR0b24uXG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBwcm9jZXNzUGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBgUGFnZSAke3Byb2Nlc3NQYWdlfSBvZiAke3BhZ2VDb3VudH1gXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYVBhZ2VMYWJlbDogKHByb2Nlc3NQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBQcm92aWRlIHRoZSBsYWJlbCBmb3IgdGhlIGFyaWEtbGl2ZSBlbGVtZW50XG5cdCAqIFRoaXMgaXMgdXNlZCBmb3IgYWNjZXNzaWJpbGl0eSBwdXJwb3Nlcy5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIEBwYXJhbSBjdXJyZW50UGFnZSAtIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG5cdCAqIEBwYXJhbSBwYWdlQ291bnQgLSBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKGN1cnJlbnRQYWdlOiBudW1iZXIpID0+IGBDdXJyZW50IHBhZ2UgaXMgJHtjdXJyZW50UGFnZX1gXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYUxpdmVMYWJlbDogKGN1cnJlbnRQYWdlOiBudW1iZXIsIHBhZ2VDb3VudDogbnVtYmVyKSA9PiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBGYWN0b3J5IGZ1bmN0aW9uIHByb3ZpZGluZyB0aGUgaHJlZiBmb3IgYSBcIlBhZ2VcIiBwYWdlIGFuY2hvcixcblx0ICogYmFzZWQgb24gdGhlIGN1cnJlbnQgcGFnZSBudW1iZXJcblx0ICogQHBhcmFtIHBhZ2VOdW1iZXIgLSBUaGUgaW5kZXggdG8gdXNlIGluIHRoZSBsaW5rXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKF9wYWdlOiBudW1iZXIpID0+IFBBR0VfTElOS19ERUZBVUxUXG5cdCAqIGBgYFxuXHQgKi9cblx0cGFnZUxpbms6IChwYWdlTnVtYmVyOiBudW1iZXIpID0+IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBUaGUgY3VycmVudCBwYWdlLlxuXHQgKlxuXHQgKiBQYWdlIG51bWJlcnMgc3RhcnQgd2l0aCBgMWAuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYDFgXG5cdCAqL1xuXHRwYWdlOiBudW1iZXI7XG5cdCAvLyB2YWx1ZSBvZiB0aGUgY3VycmVudC9pbml0IHBhZ2UgdG8gZGlzcGxheVxuXG5cdC8qKlxuXHQgKiBUaGUgcGFnaW5hdGlvbiBkaXNwbGF5IHNpemUuXG5cdCAqXG5cdCAqIEJvb3RzdHJhcCBjdXJyZW50bHkgc3VwcG9ydHMgc21hbGwgYW5kIGxhcmdlIHNpemVzLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBudWxsYFxuXHQgKi9cblx0c2l6ZTogJ3NtJyB8ICdsZycgfCBudWxsO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgbmF2IGVsZW1lbnQuXG5cdCAqXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnUGFnZSBuYXZpZ2F0aW9uJ2Bcblx0ICovXG5cdGFyaWFMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJhY3RpdmVcIiBwYWdlLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnKGN1cnJlbnQpJ1xuXHQgKiBgYGBcblx0ICovXG5cdGFjdGl2ZUxhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkZpcnN0XCIgcGFnZSBidXR0b24uXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICdBY3Rpb24gbGluayBmb3IgZmlyc3QgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRhcmlhRmlyc3RMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJQcmV2aW91c1wiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIHByZXZpb3VzIHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYVByZXZpb3VzTGFiZWw6IHN0cmluZztcblx0XG5cblx0LyoqXG5cdCAqIFRoZSBsYWJlbCBmb3IgdGhlIFwiTmV4dFwiIHBhZ2UgYnV0dG9uLlxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAnQWN0aW9uIGxpbmsgZm9yIG5leHQgcGFnZSdcblx0ICogYGBgXG5cdCAqL1xuXHRhcmlhTmV4dExhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgbGFiZWwgZm9yIHRoZSBcIkxhc3RcIiBwYWdlIGJ1dHRvbi5cblx0ICogZm9yIEkxOG4sIHdlIHN1Z2dlc3QgdG8gdXNlIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogJ0FjdGlvbiBsaW5rIGZvciBsYXN0IHBhZ2UnXG5cdCAqIGBgYFxuXHQgKi9cblx0YXJpYUxhc3RMYWJlbDogc3RyaW5nO1xuXHRcblxuXHQvKipcblx0ICogVGhlIGxhYmVsIGZvciB0aGUgXCJFbGxpcHNpc1wiIHBhZ2UuXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnRWxsaXBzaXMgcGFnZSBlbGVtZW50J2Bcblx0ICovXG5cdGFyaWFFbGxpcHNpc0xhYmVsOiBzdHJpbmc7XG5cdFxuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIHBhZ2luYXRpb24gbGlua3Mgd2lsbCBiZSBkaXNhYmxlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRkaXNhYmxlZDogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIFwiTmV4dFwiIGFuZCBcIlByZXZpb3VzXCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRkaXJlY3Rpb25MaW5rczogYm9vbGVhbjtcblx0XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCwgdGhlIFwiRmlyc3RcIiBhbmQgXCJMYXN0XCIgcGFnZSBsaW5rcyBhcmUgc2hvd24uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0Ym91bmRhcnlMaW5rczogYm9vbGVhbjtcblx0XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRjbGFzc05hbWU6IHN0cmluZztcblx0XG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgc3RydWN0dXJlIG9mIHRoZSBwYWdpbmF0aW9uIGNvbXBvbmVudFxuXHQgKiBUaGUgZGVmYXVsdCBzdHJ1Y3R1cmUgdXNlcyB7QGxpbmsgUGFnaW5hdGlvblByb3BzLmVsbGlwc2lzTGFiZWx8ZWxsaXBzaXNMYWJlbH0sIHtAbGluayBQYWdpbmF0aW9uUHJvcHMuZmlyc3RQYWdlTGFiZWx8Zmlyc3RQYWdlTGFiZWx9LFxuXHQgKiB7QGxpbmsgUGFnaW5hdGlvblByb3BzLnByZXZpb3VzUGFnZUxhYmVsfHByZXZpb3VzUGFnZUxhYmVsfSwge0BsaW5rIFBhZ2luYXRpb25Qcm9wcy5uZXh0UGFnZUxhYmVsfG5leHRQYWdlTGFiZWx9LFxuXHQgKiB7QGxpbmsgUGFnaW5hdGlvblByb3BzLmxhc3RQYWdlTGFiZWx8bGFzdFBhZ2VMYWJlbH0sIHtAbGluayBQYWdpbmF0aW9uUHJvcHMucGFnZXNEaXNwbGF5fHBhZ2VzRGlzcGxheX0sXG5cdCAqIHtAbGluayBQYWdpbmF0aW9uUHJvcHMubnVtYmVyTGFiZWx8bnVtYmVyTGFiZWx9LFxuXHQgKi9cblx0c3RydWN0dXJlOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZWxsaXBzaXMgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ+KApidgXG5cdCAqL1xuXHRlbGxpcHNpc0xhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgZmlyc3Qgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ8KrJ2Bcblx0ICovXG5cdGZpcnN0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgcHJldmlvdXMgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ+KAuSdgXG5cdCAqL1xuXHRwcmV2aW91c1BhZ2VMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIG5leHQgc2xvdFxuXHQgKiBmb3IgSTE4biwgd2Ugc3VnZ2VzdCB0byB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG5cdCAqIG92ZXJyaWRlIGFueSBjb25maWd1cmF0aW9uIHBhcmFtZXRlcnMgcHJvdmlkZWQgZm9yIHRoaXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ+KAuidgXG5cdCAqL1xuXHRuZXh0UGFnZUxhYmVsOiBTbG90Q29udGVudDxQYWdpbmF0aW9uQ29udGV4dD47XG5cdFxuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gdXNlIGZvciB0aGUgbGFzdCBzbG90XG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogb3ZlcnJpZGUgYW55IGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBwcm92aWRlZCBmb3IgdGhpc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnwrsnYFxuXHQgKi9cblx0bGFzdFBhZ2VMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbkNvbnRleHQ+O1xuXHRcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIHVzZSBmb3IgdGhlIHBhZ2VzIHNsb3Rcblx0ICogVG8gdXNlIHRvIGN1c3RvbWl6ZSB0aGUgcGFnZXMgdmlld1xuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqL1xuXHRwYWdlc0Rpc3BsYXk6IFNsb3RDb250ZW50PFBhZ2luYXRpb25Db250ZXh0Pjtcblx0XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBudW1iZXIgc2xvdFxuXHQgKiBvdmVycmlkZSBhbnkgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIHByb3ZpZGVkIGZvciB0aGlzXG5cdCAqIGZvciBJMThuLCB3ZSBzdWdnZXN0IHRvIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cblx0ICogQHBhcmFtIGRpc3BsYXllZFBhZ2UgLSBUaGUgY3VycmVudCBwYWdlIG51bWJlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICh7ZGlzcGxheWVkUGFnZX06IFBhZ2luYXRpb25OdW1iZXJDb250ZXh0KSA9PiBgJHtkaXNwbGF5ZWRQYWdlfWBcblx0ICogYGBgXG5cdCAqL1xuXHRudW1iZXJMYWJlbDogU2xvdENvbnRlbnQ8UGFnaW5hdGlvbk51bWJlckNvbnRleHQ+O1xufVxuXG5cblxuZXhwb3J0IHR5cGUgUGFnaW5hdGlvbldpZGdldCA9IFdpZGdldDxQYWdpbmF0aW9uUHJvcHMsIFBhZ2luYXRpb25TdGF0ZSwgUGFnaW5hdGlvbkFwaSwgUGFnaW5hdGlvbkRpcmVjdGl2ZXM+O1xuXG5cblxuLyoqXG4gKiBDcmVhdGUgYSBQYWdpbmF0aW9uV2lkZ2V0IHdpdGggZ2l2ZW4gY29uZmlnIHByb3BzXG4gKiBAcGFyYW0gY29uZmlnIC0gYW4gb3B0aW9uYWwgYWxlcnQgY29uZmlnXG4gKiBAcmV0dXJucyBhIFBhZ2luYXRpb25XaWRnZXRcbiAqL1xuY29uc3QgZXhwb3J0X2NyZWF0ZVBhZ2luYXRpb246IFdpZGdldEZhY3Rvcnk8UGFnaW5hdGlvbldpZGdldD4gPSBjcmVhdGVQYWdpbmF0aW9uIGFzIGFueTtcbmV4cG9ydCB7ZXhwb3J0X2NyZWF0ZVBhZ2luYXRpb24gYXMgY3JlYXRlUGFnaW5hdGlvbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aW9uc0hyZWZzIHtcblx0XG5cdC8qKlxuXHQgKiBUaGUgaHJlZiBmb3IgdGhlICdQcmV2aW91cycgbmF2aWdhdGlvbiBsaW5rXG5cdCAqL1xuXHRwcmV2aW91czogc3RyaW5nO1xuXHRcblx0LyoqXG5cdCAqIFRoZSBocmVmIGZvciB0aGUgJ05leHQnIGRpcmVjdGlvbiBsaW5rXG5cdCAqL1xuXHRuZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbkFwaSB7XG5cdFxuXHQvKipcblx0ICogVG8gXCJnb1wiIHRvIGEgc3BlY2lmaWMgcGFnZVxuXHQgKiBAcGFyYW0gcGFnZSAtIFRoZSBwYWdlIG51bWJlciB0byBzZWxlY3Rcblx0ICovXG5cdHNlbGVjdChwYWdlOiBudW1iZXIpOiB2b2lkO1xuXHRcblx0LyoqXG5cdCAqIFRvIFwiZ29cIiB0byB0aGUgZmlyc3QgcGFnZVxuXHQgKi9cblx0Zmlyc3QoKTogdm9pZDtcblx0XG5cdC8qKlxuXHQgKiBUbyBcImdvXCIgdG8gdGhlIHByZXZpb3VzIHBhZ2Vcblx0ICovXG5cdHByZXZpb3VzKCk6IHZvaWQ7XG5cdFxuXHQvKipcblx0ICogVG8gXCJnb1wiIHRvIHRoZSBuZXh0IHBhZ2Vcblx0ICovXG5cdG5leHQoKTogdm9pZDtcblx0XG5cdC8qKlxuXHQgKiBUbyBcImdvXCIgdG8gdGhlIGxhc3QgcGFnZVxuXHQgKi9cblx0bGFzdCgpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25EaXJlY3RpdmVzIHtcblx0XG5cdC8qKlxuXHQgKiBBIGRpcmVjdGl2ZSB0byBiZSBhcHBsaWVkIHRvIGVhY2ggcGFnZSBsaW5rXG5cdCAqIFRoaXMgd2lsbCBoYW5kbGUgdGhlIGNsaWNrLCB0YWJpbmRleCBhbmQgYXJpYSBhdHRyaWJ1dGVzXG5cdCAqL1xuXHRwYWdlTGluazogRGlyZWN0aXZlPHtcblx0XHRwYWdlOiBudW1iZXI7XG5cdH0+O1xuXHRcblxuXHQvKipcblx0ICogQSBkaXJlY3RpdmUgdG8gYmUgYXBwbGllZCBvbiB0aGUgcHJldmlvdXMgbGlua1xuXHQgKi9cblx0cGFnZVByZXY6IERpcmVjdGl2ZTtcblx0XG5cblx0LyoqXG5cdCAqIEEgZGlyZWN0aXZlIHRvIGJlIGFwcGxpZWQgb24gdGhlIGZpcnN0IGxpbmtcblx0ICovXG5cdHBhZ2VGaXJzdDogRGlyZWN0aXZlO1xuXHRcblxuXHQvKipcblx0ICogQSBkaXJlY3RpdmUgdG8gYmUgYXBwbGllZCBvbiB0aGUgbmV4dCBsaW5rXG5cdCAqL1xuXHRwYWdlTmV4dDogRGlyZWN0aXZlO1xuXHRcblxuXHQvKipcblx0ICogQSBkaXJlY3RpdmUgdG8gYmUgYXBwbGllZCBvbiB0aGUgTGFzdCBsaW5rXG5cdCAqL1xuXHRwYWdlTGFzdDogRGlyZWN0aXZlO1xufVxuXG4iXX0=`;export{G as default};