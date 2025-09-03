const e=`import { readable } from "@amadeus-it-group/tansu";
import { BROWSER } from "esm-env";
import { u as addEvent } from "../dom-CzJpOnsw.js";
import { false$ } from "../utils/stores.js";
const createMatchMedia = (query) => BROWSER ? readable(false, {
  onUse({ set }) {
    const mql = window.matchMedia(query.trim());
    set(mql.matches);
    return addEvent(mql, "change", (val) => set(val.matches));
  }
}) : false$;
export {
  createMatchMedia
};
`;export{e as default};
