import e from"./html.CuK0VrWf.js";import t from"./css.CbYhyuC0.js";import n from"./javascript.Dch3xQiY.js";import a from"./yaml.C5gCGmDW.js";const i=Object.freeze({displayName:"Handlebars",name:"handlebars",patterns:[{include:"#yfm"},{include:"#extends"},{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#end_block"},{include:"#else_token"},{include:"#partial_and_var"},{include:"#inline_script"},{include:"#html_tags"},{include:"text.html.basic"}],repository:{block_comments:{patterns:[{begin:"\\{\\{!--",end:"--\\}\\}",name:"comment.block.handlebars",patterns:[{match:"@\\w*",name:"keyword.annotation.handlebars"},{include:"#comments"}]},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.html"}},end:"-{2,3}\\s*>",name:"comment.block.html",patterns:[{match:"--",name:"invalid.illegal.bad-comments-or-CDATA.html"}]}]},block_helper:{begin:"(\\{\\{)(~?\\#)([-a-zA-Z0-9_\\./>]+)\\s?(@?[-a-zA-Z0-9_\\./]+)*\\s?(@?[-a-zA-Z0-9_\\./]+)*\\s?(@?[-a-zA-Z0-9_\\./]+)*",beginCaptures:{1:{name:"support.constant.handlebars"},2:{name:"support.constant.handlebars keyword.control"},3:{name:"support.constant.handlebars keyword.control"},4:{name:"variable.parameter.handlebars"},5:{name:"support.constant.handlebars"},6:{name:"variable.parameter.handlebars"},7:{name:"support.constant.handlebars"}},end:"(~?\\}\\})",endCaptures:{1:{name:"support.constant.handlebars"}},name:"meta.function.block.start.handlebars",patterns:[{include:"#string"},{include:"#handlebars_attribute"}]},comments:{patterns:[{begin:"\\{\\{!",end:"\\}\\}",name:"comment.block.handlebars",patterns:[{match:"@\\w*",name:"keyword.annotation.handlebars"},{include:"#comments"}]},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.html"}},end:"-{2,3}\\s*>",name:"comment.block.html",patterns:[{match:"--",name:"invalid.illegal.bad-comments-or-CDATA.html"}]}]},else_token:{begin:"(\\{\\{)(~?else)(@?\\s(if)\\s([-a-zA-Z0-9_\\.\\(\\s\\)/]+))?",beginCaptures:{1:{name:"support.constant.handlebars"},2:{name:"support.constant.handlebars keyword.control"},3:{name:"support.constant.handlebars"},4:{name:"variable.parameter.handlebars"}},end:"(~?\\}\\}\\}*)",endCaptures:{1:{name:"support.constant.handlebars"}},name:"meta.function.inline.else.handlebars"},end_block:{begin:"(\\{\\{)(~?/)([a-zA-Z0-9/_\\.-]+)\\s*",beginCaptures:{1:{name:"support.constant.handlebars"},2:{name:"support.constant.handlebars keyword.control"},3:{name:"support.constant.handlebars keyword.control"}},end:"(~?\\}\\})",endCaptures:{1:{name:"support.constant.handlebars"}},name:"meta.function.block.end.handlebars",patterns:[]},entities:{patterns:[{captures:{1:{name:"punctuation.definition.entity.html"},3:{name:"punctuation.definition.entity.html"}},match:"(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.html"},{match:"&",name:"invalid.illegal.bad-ampersand.html"}]},"escaped-double-quote":{match:'\\\\"',name:"constant.character.escape.js"},"escaped-single-quote":{match:"\\\\'",name:"constant.character.escape.js"},extends:{patterns:[{begin:"(\\{\\{!<)\\s([-a-zA-Z0-9_\\./]+)",beginCaptures:{1:{name:"support.function.handlebars"},2:{name:"support.class.handlebars"}},end:"(\\}\\})",endCaptures:{1:{name:"support.function.handlebars"}},name:"meta.preprocessor.handlebars"}]},handlebars_attribute:{patterns:[{include:"#handlebars_attribute_name"},{include:"#handlebars_attribute_value"}]},handlebars_attribute_name:{begin:"\\b([-a-zA-Z0-9_\\.]+)\\b=",captures:{1:{name:"variable.parameter.handlebars"}},end:`(?='|"|)`,name:"entity.other.attribute-name.handlebars"},handlebars_attribute_value:{begin:"([-a-zA-Z0-9_\\./]+)\\b",captures:{1:{name:"variable.parameter.handlebars"}},end:`('|"|)`,name:"entity.other.attribute-value.handlebars",patterns:[{include:"#string"}]},html_tags:{patterns:[{begin:"(<)([a-zA-Z0-9:-]+)(?=[^>]*></\\2>)",beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.html"}},end:"(>(<)/)(\\2)(>)",endCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"meta.scope.between-tag-pair.html"},3:{name:"entity.name.tag.html"},4:{name:"punctuation.definition.tag.html"}},name:"meta.tag.any.html",patterns:[{include:"#tag-stuff"}]},{begin:"(<\\?)(xml)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.xml.html"}},end:"(\\?>)",name:"meta.tag.preprocessor.xml.html",patterns:[{include:"#tag_generic_attribute"},{include:"#string"}]},{begin:"<!--",captures:{0:{name:"punctuation.definition.comment.html"}},end:"--\\s*>",name:"comment.block.html",patterns:[{match:"--",name:"invalid.illegal.bad-comments-or-CDATA.html"}]},{begin:"<!",captures:{0:{name:"punctuation.definition.tag.html"}},end:">",name:"meta.tag.sgml.html",patterns:[{begin:"(DOCTYPE|doctype)",captures:{1:{name:"entity.name.tag.doctype.html"}},end:"(?=>)",name:"meta.tag.sgml.doctype.html",patterns:[{match:'"[^">]*"',name:"string.quoted.double.doctype.identifiers-and-DTDs.html"}]},{begin:"\\[CDATA\\[",end:"]](?=>)",name:"constant.other.inline-data.html"},{match:"(\\s*)(?!--|>)\\S(\\s*)",name:"invalid.illegal.bad-comments-or-CDATA.html"}]},{begin:"(?:^\\s+)?(<)((?i:style))\\b(?![^>]*/>)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.style.html"},3:{name:"punctuation.definition.tag.html"}},end:"(</)((?i:style))(>)(?:\\s*\\n)?",name:"source.css.embedded.html",patterns:[{include:"#tag-stuff"},{begin:"(>)",beginCaptures:{1:{name:"punctuation.definition.tag.html"}},end:"(?=</(?i:style))",patterns:[{include:"source.css"}]}]},{begin:"(?:^\\s+)?(<)((?i:script))\\b(?![^>]*/>)",beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.script.html"}},end:"(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?",endCaptures:{2:{name:"punctuation.definition.tag.html"}},name:"source.js.embedded.html",patterns:[{include:"#tag-stuff"},{begin:"(?<!</(?:script|SCRIPT))(>)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.script.html"}},end:"(</)((?i:script))",patterns:[{captures:{1:{name:"punctuation.definition.comment.js"}},match:"(//).*?((?=<\/script)|$\\n?)",name:"comment.line.double-slash.js"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.js"}},end:"\\*/|(?=<\/script)",name:"comment.block.js"},{include:"source.js"}]}]},{begin:"(</?)((?i:body|head|html)\\b)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.structure.any.html"}},end:"(>)",name:"meta.tag.structure.any.html",patterns:[{include:"#tag-stuff"}]},{begin:"(</?)((?i:address|blockquote|dd|div|header|section|footer|aside|nav|dl|dt|fieldset|form|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|object|ol|p|ul|applet|center|dir|hr|menu|pre)\\b)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.block.any.html"}},end:"(>)",name:"meta.tag.block.any.html",patterns:[{include:"#tag-stuff"}]},{begin:"(</?)((?i:a|abbr|acronym|area|b|base|basefont|bdo|big|br|button|caption|cite|code|col|colgroup|del|dfn|em|font|head|html|i|img|input|ins|isindex|kbd|label|legend|li|link|map|meta|noscript|optgroup|option|param|q|s|samp|script|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|tt|u|var)\\b)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.inline.any.html"}},end:"((?: ?/)?>)",name:"meta.tag.inline.any.html",patterns:[{include:"#tag-stuff"}]},{begin:"(</?)([a-zA-Z0-9:-]+)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.other.html"}},end:"(>)",name:"meta.tag.other.html",patterns:[{include:"#tag-stuff"}]},{begin:"(</?)([a-zA-Z0-9{}:-]+)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.tokenised.html"}},end:"(>)",name:"meta.tag.tokenised.html",patterns:[{include:"#tag-stuff"}]},{include:"#entities"},{match:"<>",name:"invalid.illegal.incomplete.html"},{match:"<",name:"invalid.illegal.bad-angle-bracket.html"}]},inline_script:{begin:`(?:^\\s+)?(<)((?i:script))\\b(?:.*(type)=(["'](?:text/x-handlebars-template|text/x-handlebars|text/template|x-tmpl-handlebars)["']))(?![^>]*/>)`,beginCaptures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.script.html"},3:{name:"entity.other.attribute-name.html"},4:{name:"string.quoted.double.html"}},end:"(?<=</(script|SCRIPT))(>)(?:\\s*\\n)?",endCaptures:{2:{name:"punctuation.definition.tag.html"}},name:"source.handlebars.embedded.html",patterns:[{include:"#tag-stuff"},{begin:"(?<!</(?:script|SCRIPT))(>)",captures:{1:{name:"punctuation.definition.tag.html"},2:{name:"entity.name.tag.script.html"}},end:"(</)((?i:script))",patterns:[{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#end_block"},{include:"#else_token"},{include:"#partial_and_var"},{include:"#html_tags"},{include:"text.html.basic"}]}]},partial_and_var:{begin:"(\\{\\{~?\\{*(>|!<)*)\\s*(@?[-a-zA-Z0-9$_\\./]+)*",beginCaptures:{1:{name:"support.constant.handlebars"},3:{name:"variable.parameter.handlebars"}},end:"(~?\\}\\}\\}*)",endCaptures:{1:{name:"support.constant.handlebars"}},name:"meta.function.inline.other.handlebars",patterns:[{include:"#string"},{include:"#handlebars_attribute"}]},string:{patterns:[{include:"#string-single-quoted"},{include:"#string-double-quoted"}]},"string-double-quoted":{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.html"}},name:"string.quoted.double.handlebars",patterns:[{include:"#escaped-double-quote"},{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#else_token"},{include:"#end_block"},{include:"#partial_and_var"}]},"string-single-quoted":{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.html"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.html"}},name:"string.quoted.single.handlebars",patterns:[{include:"#escaped-single-quote"},{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#else_token"},{include:"#end_block"},{include:"#partial_and_var"}]},"tag-stuff":{patterns:[{include:"#tag_id_attribute"},{include:"#tag_generic_attribute"},{include:"#string"},{include:"#block_comments"},{include:"#comments"},{include:"#block_helper"},{include:"#end_block"},{include:"#else_token"},{include:"#partial_and_var"}]},tag_generic_attribute:{begin:"\\b([a-zA-Z0-9_-]+)\\b\\s*(=)",captures:{1:{name:"entity.other.attribute-name.generic.html"},2:{name:"punctuation.separator.key-value.html"}},end:`(?<='|"|)`,name:"entity.other.attribute-name.html",patterns:[{include:"#string"}]},tag_id_attribute:{begin:"\\b(id)\\b\\s*(=)",captures:{1:{name:"entity.other.attribute-name.id.html"},2:{name:"punctuation.separator.key-value.html"}},end:`(?<='|"|)`,name:"meta.attribute-with-value.id.html",patterns:[{include:"#string"}]},yfm:{patterns:[{begin:"(?<!\\s)---\\n$",end:"^---\\s",name:"markup.raw.yaml.front-matter",patterns:[{include:"source.yaml"}]}]}},scopeName:"text.html.handlebars",embeddedLangs:["html","css","javascript","yaml"],aliases:["hbs"]});var d=[...e,...t,...n,...a,i];export{d as default};
