const n=`import { readable } from '@amadeus-it-group/tansu';
/** Store exposing the location.hash string */
export const hash$ = readable('', {
    onUse({ set }) {
        function handleHashChange() {
            const hash = location.hash;
            set(hash ? hash.substring(1) : '');
        }
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    },
});
`;export{n as default};
