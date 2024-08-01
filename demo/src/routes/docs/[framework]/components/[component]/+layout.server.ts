import {getMenu} from '../getMenu';

export const load = ({params}) => getMenu(params.component);
