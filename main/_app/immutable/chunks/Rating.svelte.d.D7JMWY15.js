const t=`import type { RatingProps } from './rating.gen';
declare const Rating: import("svelte").Component<Partial<RatingProps>, {}, "rating">;
type Rating = ReturnType<typeof Rating>;
export default Rating;
`;export{t as default};
