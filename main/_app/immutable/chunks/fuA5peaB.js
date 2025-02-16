const t=`import type { RatingApi, RatingProps } from './rating.gen';
declare const Rating: import("svelte").Component<Partial<RatingProps>, {
    api: RatingApi;
}, "rating">;
type Rating = ReturnType<typeof Rating>;
export default Rating;
`;export{t as default};
