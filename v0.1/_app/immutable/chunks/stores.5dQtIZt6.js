import{s as t}from"./entry.IJgLr6yD.js";const r=()=>{const s=t;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},b={subscribe(s){return r().page.subscribe(s)}},c={subscribe(s){const e=r().updated;return c.check=e.check,e.subscribe(s)},check:()=>{throw new Error("Cannot check updated store before subscribing")}};export{b as p,c as u};
