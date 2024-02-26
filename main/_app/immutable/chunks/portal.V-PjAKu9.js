const t=`import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { createPortal } from 'react-dom';
/**
 * A Portal component, allowing to attach content to an external container.
 *
 * @param param - the react component inputs
 * @param param.children - the react component children
 * @param param.container - the container to attach the portal to
 * @returns the portal component
 */
export const Portal = ({ children, container }) => container ? createPortal(children, container) : _jsx(_Fragment, { children: children });
`;export{t as default};
