export interface BaseDropdownItem {
	tag: string;
	id: string;
	isSelected: boolean;
}
export interface DropdownButton extends BaseDropdownItem {
	tag: 'button';
	onclick: () => void;
}
export interface DropdownAnchor extends BaseDropdownItem {
	tag: 'a';
	href: string;
}
export type DropdownItem = DropdownButton | DropdownAnchor;
