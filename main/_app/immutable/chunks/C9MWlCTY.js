import e from"./Dj6nwHGl.js";import s from"./BPhBrDlE.js";import t from"./ySlJ1b_l.js";import n from"./COyJrUc7.js";import i from"./BMYPR7BL.js";import c from"./COK4E0Yg.js";import l from"./cPjAOO0u.js";const m=Object.freeze(JSON.parse('{"fileTypes":["js","jsx","ts","tsx","html","vue","svelte","php","res"],"injectTo":["source.ts","source.js"],"injectionSelector":"L:source.js -comment -string, L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string, L:source.rescript -comment -string, L:source.vue -comment -string, L:source.svelte -comment -string, L:source.php -comment -string, L:source.rescript -comment -string","injections":{"L:source":{"patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"es-tag-css","patterns":[{"begin":"(?i)(\\\\s?\\\\/\\\\*\\\\s?(css|inline-css)\\\\s?\\\\*\\\\/\\\\s?)(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.css"},{"include":"inline.es6-htmlx#template"}]},{"begin":"(?i)(\\\\s*(css|inline-css))(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.css"},{"include":"inline.es6-htmlx#template"},{"include":"string.quoted.other.template.js"}]},{"begin":"(?i)(?<=\\\\s|\\\\,|\\\\=|\\\\:|\\\\(|\\\\$\\\\()\\\\s{0,}(((\\\\/\\\\*)|(\\\\/\\\\/))\\\\s?(css|inline-css)[ ]{0,1000}\\\\*?\\\\/?)[ ]{0,1000}$","beginCaptures":{"1":{"name":"comment.line"}},"end":"(`).*","patterns":[{"begin":"(\\\\G)","end":"(`)"},{"include":"source.ts#template-substitution-element"},{"include":"source.css"}]},{"begin":"(\\\\${)","beginCaptures":{"1":{"name":"entity.name.tag"}},"end":"(})","endCaptures":{"1":{"name":"entity.name.tag"}},"patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.js"}]}],"scopeName":"inline.es6-css","embeddedLangs":["typescript","css","javascript"]}')),r=[...e,...s,...t,m],a=Object.freeze(JSON.parse('{"fileTypes":["js","jsx","ts","tsx","html","vue","svelte","php","res"],"injectTo":["source.ts","source.js"],"injectionSelector":"L:source.js -comment -string, L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string, L:source.rescript -comment -string","injections":{"L:source":{"patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"es-tag-glsl","patterns":[{"begin":"(?i)(\\\\s?\\\\/\\\\*\\\\s?(glsl|inline-glsl)\\\\s?\\\\*\\\\/\\\\s?)(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.glsl"},{"include":"inline.es6-htmlx#template"}]},{"begin":"(?i)(\\\\s*(glsl|inline-glsl))(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.glsl"},{"include":"inline.es6-htmlx#template"},{"include":"string.quoted.other.template.js"}]},{"begin":"(?i)(?<=\\\\s|\\\\,|\\\\=|\\\\:|\\\\(|\\\\$\\\\()\\\\s{0,}(((\\\\/\\\\*)|(\\\\/\\\\/))\\\\s?(glsl|inline-glsl)[ ]{0,1000}\\\\*?\\\\/?)[ ]{0,1000}$","beginCaptures":{"1":{"name":"comment.line"}},"end":"(`).*","patterns":[{"begin":"(\\\\G)","end":"(`)"},{"include":"source.ts#template-substitution-element"},{"include":"source.glsl"}]},{"begin":"(\\\\${)","beginCaptures":{"1":{"name":"entity.name.tag"}},"end":"(})","endCaptures":{"1":{"name":"entity.name.tag"}},"patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.js"}]}],"scopeName":"inline.es6-glsl","embeddedLangs":["typescript","glsl","javascript"]}')),o=[...e,...n,...t,a],u=Object.freeze(JSON.parse('{"fileTypes":["js","jsx","ts","tsx","html","vue","svelte","php","res"],"injectTo":["source.ts","source.js"],"injectionSelector":"L:source.js -comment -string, L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string, L:source.rescript -comment -string","injections":{"L:source":{"patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"es-tag-html","patterns":[{"begin":"(?i)(\\\\s?\\\\/\\\\*\\\\s?(html|template|inline-html|inline-template)\\\\s?\\\\*\\\\/\\\\s?)(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"source.ts#template-substitution-element"},{"include":"text.html.basic"},{"include":"inline.es6-htmlx#template"}]},{"begin":"(?i)(\\\\s*(html|template|inline-html|inline-template))(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"source.ts#template-substitution-element"},{"include":"text.html.basic"},{"include":"inline.es6-htmlx#template"},{"include":"string.quoted.other.template.js"}]},{"begin":"(?i)(?<=\\\\s|\\\\,|\\\\=|\\\\:|\\\\(|\\\\$\\\\()\\\\s{0,}(((\\\\/\\\\*)|(\\\\/\\\\/))\\\\s?(html|template|inline-html|inline-template)[ ]{0,1000}\\\\*?\\\\/?)[ ]{0,1000}$","beginCaptures":{"1":{"name":"comment.line"}},"end":"(`).*","patterns":[{"begin":"(\\\\G)","end":"(`)"},{"include":"source.ts#template-substitution-element"},{"include":"text.html.basic"}]},{"begin":"(\\\\${)","beginCaptures":{"1":{"name":"entity.name.tag"}},"end":"(})","endCaptures":{"1":{"name":"entity.name.tag"}},"patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.js"}]},{"begin":"(\\\\$\\\\(`)","beginCaptures":{"1":{"name":"entity.name.tag"}},"end":"(`\\\\))","endCaptures":{"1":{"name":"entity.name.tag"}},"patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.js"}]}],"scopeName":"inline.es6-html","embeddedLangs":["typescript","html","javascript"]}')),g=[...e,...i,...t,u],p=Object.freeze(JSON.parse('{"fileTypes":["js","jsx","ts","tsx","html","vue","svelte","php","res"],"injectTo":["source.ts","source.js"],"injectionSelector":"L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string, L:source.rescript -comment -string","injections":{"L:source":{"patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"es-tag-sql","patterns":[{"begin":"(?i)\\\\b(\\\\w+\\\\.sql)\\\\s*(`)","beginCaptures":{"1":{"name":"variable.parameter"}},"end":"(`)","patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.ts#string-character-escape"},{"include":"source.sql"},{"include":"source.plpgsql.postgres"},{"match":"."}]},{"begin":"(?i)(\\\\s?\\\\/?\\\\*?\\\\s?(sql|inline-sql)\\\\s?\\\\*?\\\\/?\\\\s?)(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"source.ts#template-substitution-element"},{"include":"source.ts#string-character-escape"},{"include":"source.sql"},{"include":"source.plpgsql.postgres"},{"match":"."}]},{"begin":"(?i)(?<=\\\\s|\\\\,|\\\\=|\\\\:|\\\\(|\\\\$\\\\()\\\\s{0,}(((\\\\/\\\\*)|(\\\\/\\\\/))\\\\s?(sql|inline-sql)[ ]{0,1000}\\\\*?\\\\/?)[ ]{0,1000}$","beginCaptures":{"1":{"name":"comment.line"}},"end":"(`)","patterns":[{"begin":"(\\\\G)","end":"(`)"},{"include":"source.ts#template-substitution-element"},{"include":"source.ts#string-character-escape"},{"include":"source.sql"},{"include":"source.plpgsql.postgres"},{"match":"."}]}],"scopeName":"inline.es6-sql","embeddedLangs":["typescript","sql"]}')),d=[...e,...c,p],b=Object.freeze(JSON.parse('{"fileTypes":["js","jsx","ts","tsx","html","vue","svelte","php","res"],"injectTo":["source.ts","source.js"],"injectionSelector":"L:source.js -comment -string, L:source.js -comment -string, L:source.jsx -comment -string,  L:source.js.jsx -comment -string, L:source.ts -comment -string, L:source.tsx -comment -string, L:source.rescript -comment -string","injections":{"L:source":{"patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"es-tag-xml","patterns":[{"begin":"(?i)(\\\\s?\\\\/\\\\*\\\\s?(xml|svg|inline-svg|inline-xml)\\\\s?\\\\*\\\\/\\\\s?)(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"text.xml"}]},{"begin":"(?i)(\\\\s*(xml|inline-xml))(`)","beginCaptures":{"1":{"name":"comment.block"}},"end":"(`)","patterns":[{"include":"text.xml"}]},{"begin":"(?i)(?<=\\\\s|\\\\,|\\\\=|\\\\:|\\\\(|\\\\$\\\\()\\\\s{0,}(((\\\\/\\\\*)|(\\\\/\\\\/))\\\\s?(xml|svg|inline-svg|inline-xml)[ ]{0,1000}\\\\*?\\\\/?)[ ]{0,1000}$","beginCaptures":{"1":{"name":"comment.line"}},"end":"(`).*","patterns":[{"begin":"(\\\\G)","end":"(`)"},{"include":"text.xml"}]}],"scopeName":"inline.es6-xml","embeddedLangs":["xml"]}')),j=[...l,b],x=Object.freeze(JSON.parse('{"displayName":"TypeScript with Tags","name":"ts-tags","patterns":[{"include":"source.ts"}],"scopeName":"source.ts.tags","embeddedLangs":["typescript","es-tag-css","es-tag-glsl","es-tag-html","es-tag-sql","es-tag-xml"],"aliases":["lit"]}')),$=[...e,...r,...o,...g,...d,...j,x];export{$ as default};
