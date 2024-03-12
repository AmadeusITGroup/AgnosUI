const n=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const hash$ = tansu.readable("", {
  onUse({ set }) {
    function handleHashChange() {
      const hash = location.hash;
      set(hash ? hash.substring(1) : "");
    }
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }
});
exports.hash$ = hash$;
`;export{n as default};
