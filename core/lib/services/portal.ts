import type {Directive} from '../types.js';

export type PortalDirectiveArg =
	| {
			container?: HTMLElement | null | undefined;
			insertBefore?: HTMLElement | null | undefined;
	  }
	| null
	| undefined;

export const portal: Directive<PortalDirectiveArg> = (content, newArg) => {
	let arg: PortalDirectiveArg;
	let replaceComment: Comment | null | undefined;

	const removeReplaceComment = () => {
		if (replaceComment) {
			replaceComment.parentNode?.replaceChild(content, replaceComment);
			replaceComment = null;
		}
	};

	const update = (newArg: PortalDirectiveArg) => {
		if (newArg !== arg) {
			arg = newArg;
			const container = arg?.container ?? arg?.insertBefore?.parentElement;
			if (container) {
				if (!replaceComment) {
					replaceComment = content.parentNode?.insertBefore(content.ownerDocument.createComment('portal'), content);
				}
				container.insertBefore(content, arg?.insertBefore ?? null);
			} else {
				removeReplaceComment();
			}
		}
	};

	update(newArg);

	return {
		update,
		destroy: () => {
			removeReplaceComment();
			content.parentNode?.removeChild(content);
		},
	};
};
