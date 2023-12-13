const r=`import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { createPortal } from 'react-dom';
export const Portal = ({ children, container }) => container ? createPortal(children, container) : _jsx(_Fragment, { children: children });
`;export{r as default};
