const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const esmEnv = require("esm-env");
const utils_directive = require("../directive-dqfrdbI1.cjs");
const createMatchMedia = (query) => esmEnv.BROWSER ? tansu.readable(false, {
  onUse({ set }) {
    const mql = window.matchMedia(query.trim());
    set(mql.matches);
    return utils_directive.addEvent(mql, "change", (val) => set(val.matches));
  }
}) : tansu.readable(false);
exports.createMatchMedia = createMatchMedia;
`;export{e as default};
