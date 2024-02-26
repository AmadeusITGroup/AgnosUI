const e=`/**
 * Creates a portal directive, allowing to attach content to any element.
 *
 * @param content - the content of the portal
 * @param newArg - {@link PortalDirectiveArg} args
 * @returns the portal directive
 */
export const portal = (content, newArg) => {
    let arg;
    let replaceComment;
    const removeReplaceComment = () => {
        if (replaceComment) {
            replaceComment.parentNode?.replaceChild(content, replaceComment);
            replaceComment = null;
        }
    };
    const update = (newArg) => {
        if (newArg !== arg && (newArg?.container !== arg?.container || newArg?.insertBefore !== arg?.insertBefore)) {
            arg = newArg;
            const container = arg?.container ?? arg?.insertBefore?.parentElement;
            if (container) {
                const insertBefore = arg?.insertBefore ?? null;
                const moveNeeded = content.parentElement !== container || content.nextSibling !== insertBefore;
                if (moveNeeded) {
                    if (!replaceComment) {
                        replaceComment = content.parentNode?.insertBefore(content.ownerDocument.createComment('portal'), content);
                    }
                    container.insertBefore(content, insertBefore);
                }
            }
            else {
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
`;export{e as default};
