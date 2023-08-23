const e=`export const portal = (content, newArg) => {
    let arg;
    let replaceComment;
    const removeReplaceComment = () => {
        if (replaceComment) {
            replaceComment.parentNode?.replaceChild(content, replaceComment);
            replaceComment = null;
        }
    };
    const update = (newArg) => {
        if (newArg !== arg) {
            arg = newArg;
            const container = arg?.container ?? arg?.insertBefore?.parentElement;
            if (container) {
                if (!replaceComment) {
                    replaceComment = content.parentNode?.insertBefore(content.ownerDocument.createComment('portal'), content);
                }
                container.insertBefore(content, arg?.insertBefore ?? null);
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
