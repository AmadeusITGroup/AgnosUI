const t=`import { getToastDefaultConfig, createToast, toastPositions, defaultToasterProps } from '@agnos-ui/core-bootstrap/components/toast';
/**
 * Retrieve a shallow copy of the default Toast config
 * @returns the default Toast config
 */
const export_getToastDefaultConfig = getToastDefaultConfig;
export { export_getToastDefaultConfig as getToastDefaultConfig };
/**
 * Create an ToastWidget with given config props
 * @param config - an optional alert config
 * @returns an ToastWidget
 */
const export_createToast = createToast;
export { export_createToast as createToast };
/**
 * A mapping of toast position keys to their corresponding CSS class strings of bootstrap.
 * These classes define the positioning of toast notifications on the screen.
 *
 * The keys represent various positions on the screen, such as top-left, top-center,
 * middle-right, etc., and the values are the CSS classes of bootstrap that apply the respective
 * positioning styles.
 *
 * Example usage:
 * \`\`\`typescript
 * const positionClass = toastPositions.topLeft; // "top-0 start-0"
 * \`\`\`
 */
const export_toastPositions = toastPositions;
export { export_toastPositions as toastPositions };
const export_defaultToasterProps = defaultToasterProps;
export { export_defaultToasterProps as defaultToasterProps };
`;export{t as default};
