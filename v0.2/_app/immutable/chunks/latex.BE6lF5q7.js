import e from"./tex.BKGhwytq.js";import n from"./css.CbYhyuC0.js";import t from"./haskell.DAGYewaG.js";import a from"./html.CuK0VrWf.js";import i from"./xml.BzTcx3OS.js";import o from"./java.ClXEvkw9.js";import u from"./lua.0ontURQf.js";import l from"./julia.CJaopngF.js";import r from"./ruby.DbgIee08.js";import c from"./javascript.Dch3xQiY.js";import m from"./typescript.DC8MraHL.js";import s from"./python.DwuVtWc2.js";import p from"./yaml.C5gCGmDW.js";import d from"./rust.j8KhMG0x.js";import b from"./scala.vMsNTMhM.js";import g from"./gnuplot.nclm9rTJ.js";const x=Object.freeze({displayName:"LaTeX",name:"latex",patterns:[{comment:"This scope identifies partially typed commands such as `\\tab`. We use this to trigger “Command Completion” only when it makes sense.",match:"(?<=\\\\[\\w@]|\\\\[\\w@]{2}|\\\\[\\w@]{3}|\\\\[\\w@]{4}|\\\\[\\w@]{5}|\\\\[\\w@]{6})\\s",name:"meta.space-after-command.latex"},{begin:"((\\\\)(?:usepackage|documentclass))\\b(?=\\[|\\{)",beginCaptures:{1:{name:"keyword.control.preamble.latex"},2:{name:"punctuation.definition.function.latex"}},end:"(?<=\\})",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.preamble.latex",patterns:[{include:"#multiline-optional-arg"},{begin:"((?:\\G|(?<=\\]))\\{)",beginCaptures:{0:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"support.class.latex",end:"(\\})",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},patterns:[{include:"$self"}]}]},{begin:"((\\\\)(?:include|input))(\\{)",beginCaptures:{1:{name:"keyword.control.include.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.include.latex",patterns:[{include:"$self"}]},{begin:"((\\\\)((?:sub){0,2}section|(?:sub)?paragraph|chapter|part|addpart|addchap|addsec|minisec|frametitle)(?:\\*)?)((?:\\[[^\\[]*?\\]){0,2})(\\{)",beginCaptures:{1:{name:"support.function.section.latex"},2:{name:"punctuation.definition.function.latex"},4:{patterns:[{include:"#optional-arg"}]},5:{name:"punctuation.definition.arguments.begin.latex"}},comment:"this works OK with all kinds of crazy stuff as long as section is one line",contentName:"entity.name.section.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.function.section.$3.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((?:\\s*)\\\\begin\\{songs\\}\\{.*\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.data.environment.songs.latex",end:"(\\\\end\\{songs\\}(?:\\s*\\n)?)",name:"meta.function.environment.songs.latex",patterns:[{begin:"\\\\\\[",end:"\\]",name:"meta.chord.block.latex support.class.chord.block.environment.latex",patterns:[{include:"$base"}]},{match:"\\^",name:"meta.chord.block.latex support.class.chord.block.environment.latex"},{include:"$self"}]},{begin:"(?:^\\s*)?\\\\begin\\{(lstlisting|minted|pyglist)\\}(?=\\[|\\{)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\\\end\\{\\1\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)((?:c|cpp))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.cpp.embedded.latex",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.cpp.embedded.latex"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:asy|asymptote))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.asy",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.asy"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:css))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.css",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.css"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:hs|haskell))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.haskell",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.haskell"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:html))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"text.html",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"text.html.basic"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:xml))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"text.xml",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"text.xml"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:java))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.java",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.java"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:lua))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.lua",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.lua"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:jl|julia))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.julia",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.julia"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:rb|ruby))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.ruby",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.ruby"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:js|javascript))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.js",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.js"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:ts|typescript))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.ts",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.ts"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:py|python))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.python"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:yaml))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.yaml",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.yaml"}]},{begin:"(?:\\G|(?<=\\]))(\\{)((?:rust))(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"source.rust",end:"^\\s*(?=\\\\end\\{(?:minted|lstlisting|pyglist)\\})",patterns:[{include:"source.rust"}]},{begin:"(?:\\G|(?<=\\]))(\\{)([a-zA-Z]*)(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"meta.function.embedded.latex",end:"^\\s*(?=\\\\end\\{(?:lstlisting|minted|pyglist)\\})",name:"meta.embedded.block.generic.latex"}]},{begin:"\\s*\\\\begin\\{(?:cppcode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:cppcode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.cpp.embedded.latex",end:"^\\s*(?=\\\\end\\{(?:cppcode)\\*?\\})",patterns:[{include:"source.cpp.embedded.latex"}]}]},{begin:"\\s*\\\\begin\\{(?:hscode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:hscode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.haskell",end:"^\\s*(?=\\\\end\\{(?:hscode)\\*?\\})",patterns:[{include:"source.haskell"}]}]},{begin:"\\s*\\\\begin\\{(?:luacode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:luacode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.lua",end:"^\\s*(?=\\\\end\\{(?:luacode)\\*?\\})",patterns:[{include:"source.lua"}]}]},{begin:"\\s*\\\\begin\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.julia",end:"^\\s*(?=\\\\end\\{(?:jlcode|jlverbatim|jlblock|jlconcode|jlconsole|jlconverbatim)\\*?\\})",patterns:[{include:"source.julia"}]}]},{begin:"\\s*\\\\begin\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.julia",end:"^\\s*(?=\\\\end\\{(?:juliacode|juliaverbatim|juliablock|juliaconcode|juliaconsole|juliaconverbatim)\\*?\\})",patterns:[{include:"source.julia"}]}]},{begin:"\\s*\\\\begin\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:sageblock|sagesilent|sageverbatim|sageexample|sagecommandline|python|pythonq|pythonrepl)\\*?\\})",patterns:[{include:"source.python"}]}]},{begin:"\\s*\\\\begin\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:pycode|pyverbatim|pyblock|pyconcode|pyconsole|pyconverbatim)\\*?\\})",patterns:[{include:"source.python"}]}]},{begin:"\\s*\\\\begin\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:pylabcode|pylabverbatim|pylabblock|pylabconcode|pylabconsole|pylabconverbatim)\\*?\\})",patterns:[{include:"source.python"}]}]},{begin:"\\s*\\\\begin\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.python",end:"^\\s*(?=\\\\end\\{(?:sympycode|sympyverbatim|sympyblock|sympyconcode|sympyconsole|sympyconverbatim)\\*?\\})",patterns:[{include:"source.python"}]}]},{begin:"\\s*\\\\begin\\{(?:scalacode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:scalacode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.scala",end:"^\\s*(?=\\\\end\\{(?:scalacode)\\*?\\})",patterns:[{include:"source.scala"}]}]},{begin:"\\s*\\\\begin\\{(?:asy|asycode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:asy|asycode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.asymptote",end:"^\\s*(?=\\\\end\\{(?:asy|asycode)\\*?\\})",patterns:[{include:"source.asymptote"}]}]},{begin:"\\s*\\\\begin\\{(?:dot2tex|dotcode)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:dot2tex|dotcode)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.dot",end:"^\\s*(?=\\\\end\\{(?:dot2tex|dotcode)\\*?\\})",patterns:[{include:"source.dot"}]}]},{begin:"\\s*\\\\begin\\{(?:gnuplot)\\*?\\}(?:\\[[a-zA-Z0-9_-]*\\])?(?=\\[|\\{|\\s*$)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\s*\\\\end\\{(?:gnuplot)\\*?\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"variable.parameter.function.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}}},{begin:"^(?=\\s*)",contentName:"source.gnuplot",end:"^\\s*(?=\\\\end\\{(?:gnuplot)\\*?\\})",patterns:[{include:"source.gnuplot"}]}]},{begin:"\\s*\\\\begin\\{([a-zA-Z]*code|lstlisting|minted|pyglist)\\*?\\}(?:\\[.*\\])?(?:\\{.*\\})?",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.function.embedded.latex",end:"\\\\end\\{\\1\\}(?:\\s*\\n)?",name:"meta.embedded.block.generic.latex"},{begin:"(?:^\\s*)?\\\\begin\\{(terminal\\*?)\\}(?=\\[|\\{)",captures:{0:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"\\\\end\\{\\1\\}",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)([a-zA-Z]*)(\\})",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.end.latex"}},contentName:"meta.function.embedded.latex",end:"^\\s*(?=\\\\end\\{terminal\\*?\\})",name:"meta.embedded.block.generic.latex"}]},{begin:"((\\\\)addplot)(?:\\+?)((?:\\[[^\\[]*\\]))*\\s*(gnuplot)\\s*((?:\\[[^\\[]*\\]))*\\s*(\\{)",captures:{1:{name:"support.function.be.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"variable.parameter.function.latex"},5:{patterns:[{include:"#optional-arg"}]},6:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\s*(\\};)",patterns:[{begin:"%",beginCaptures:{0:{name:"punctuation.definition.comment.latex"}},end:"$\\n?",name:"comment.line.percentage.latex"},{include:"source.gnuplot"}]},{begin:"(\\s*\\\\begin\\{((?:fboxv|boxedv|V|v|spv)erbatim\\*?)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"markup.raw.verbatim.latex",end:"(\\\\end\\{\\2\\})",name:"meta.function.verbatim.latex"},{begin:"(\\s*\\\\begin\\{VerbatimOut\\}\\{[^\\}]*\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"markup.raw.verbatim.latex",end:"(\\\\end\\{\\VerbatimOut\\})",name:"meta.function.verbatim.latex"},{begin:"(\\s*\\\\begin\\{alltt\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"markup.raw.verbatim.latex",end:"(\\\\end\\{alltt\\})",name:"meta.function.alltt.latex",patterns:[{captures:{1:{name:"punctuation.definition.function.latex"}},match:"(\\\\)[A-Za-z]+",name:"support.function.general.latex"}]},{begin:"(\\s*\\\\begin\\{([Cc]omment)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"punctuation.definition.comment.latex",end:"(\\\\end\\{\\2\\})",name:"meta.function.verbatim.latex"},{begin:"(?:\\s*)((\\\\)(?:href|hyperref|hyperimage))(?=\\[|\\{)",beginCaptures:{1:{name:"support.function.url.latex"}},comment:"Captures \\command[option]{url}{optional category}{optional name}{text}",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.function.hyperlink.latex",patterns:[{include:"#multiline-optional-arg-no-highlight"},{begin:"(?:\\G|(?<=\\]))(\\{)([^}]*)(\\})(?:\\{[^}]*\\}){2}?(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"markup.underline.link.latex"},3:{name:"punctuation.definition.arguments.end.latex"},4:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"meta.variable.parameter.function.latex",end:"(?=\\})",patterns:[{include:"$base"}]},{begin:"(?:\\G|(?<=\\]))(?:(\\{)[^}]*(\\}))?(\\{)",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.latex"},2:{name:"punctuation.definition.arguments.end.latex"},3:{name:"punctuation.definition.arguments.begin.latex"}},contentName:"meta.variable.parameter.function.latex",end:"(?=\\})",patterns:[{include:"$base"}]}]},{captures:{1:{name:"support.function.url.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.arguments.begin.latex"},5:{name:"punctuation.definition.arguments.end.latex"},"'":{name:"markup.underline.link.latex"}},match:"(?:\\s*)((\\\\)url)(\\{)([^}]*)(\\})",name:"meta.function.link.url.latex"},{captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},comment:"These two patterns match the \\begin{document} and \\end{document} commands, so that the environment matching pattern following them will ignore those commands.",match:"(\\s*\\\\begin\\{document\\})",name:"meta.function.begin-document.latex"},{captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},match:"(\\s*\\\\end\\{document\\})",name:"meta.function.end-document.latex"},{begin:"(?:\\s*)((\\\\)begin)(\\{)((?:\\+?array|equation|(?:IEEE)?eqnarray|multline|align|aligned|alignat|alignedat|flalign|flaligned|flalignat|split|gather|gathered|\\+?cases|(?:display)?math|\\+?[a-zA-Z]*matrix|[pbBvV]?NiceMatrix|[pbBvV]?NiceArray|(?:(?:arg)?(?:mini|maxi)))(?:\\*|!)?)(\\})(\\s*\\n)?",captures:{1:{name:"support.function.be.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.arguments.begin.latex"},4:{name:"variable.parameter.function.latex"},5:{name:"punctuation.definition.arguments.end.latex"}},contentName:"meta.math.block.latex support.class.math.block.environment.latex",end:"(?:\\s*)((\\\\)end)(\\{)(\\4)(\\})(?:\\s*\\n)?",name:"meta.function.environment.math.latex",patterns:[{match:"(?<!\\\\)&",name:"keyword.control.equation.align.latex"},{match:"\\\\\\\\",name:"keyword.control.equation.newline.latex"},{include:"#definition-label"},{include:"text.tex#math"},{include:"$base"}]},{begin:"(?:\\s*)(\\\\begin\\{empheq\\}(?:\\[.*\\])?)",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.math.block.latex support.class.math.block.environment.latex",end:"(?:\\s*)(\\\\end\\{empheq\\})",name:"meta.function.environment.math.latex",patterns:[{match:"(?<!\\\\)&",name:"keyword.control.equation.align.latex"},{match:"\\\\\\\\",name:"keyword.control.equation.newline.latex"},{include:"#definition-label"},{include:"text.tex#math"},{include:"$base"}]},{begin:"(\\s*\\\\begin\\{(tabular[xy*]?|xltabular|longtable|(?:long)?tabu|(?:long|tall)?tblr|NiceTabular[X*]?|booktabs)\\}(\\s*\\n)?)",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.data.environment.tabular.latex",end:"(\\s*\\\\end\\{(\\2)\\}(?:\\s*\\n)?)",name:"meta.function.environment.tabular.latex",patterns:[{match:"(?<!\\\\)&",name:"keyword.control.table.cell.latex"},{match:"\\\\\\\\",name:"keyword.control.table.newline.latex"},{include:"$base"}]},{begin:"(\\s*\\\\begin\\{(itemize|enumerate|description|list)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{\\2\\}(?:\\s*\\n)?)",name:"meta.function.environment.list.latex",patterns:[{include:"$base"}]},{begin:"(\\s*\\\\begin\\{tikzpicture\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{tikzpicture\\}(?:\\s*\\n)?)",name:"meta.function.environment.latex.tikz",patterns:[{include:"$base"}]},{begin:"(\\s*\\\\begin\\{frame\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{frame\\})",name:"meta.function.environment.frame.latex",patterns:[{include:"$base"}]},{begin:"(\\s*\\\\begin\\{(mpost\\*?)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{\\2\\}(?:\\s*\\n)?)",name:"meta.function.environment.latex.mpost"},{begin:"(\\s*\\\\begin\\{markdown\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},contentName:"meta.embedded.markdown_latex_combined",end:"(\\\\end\\{markdown\\})",patterns:[{include:"text.tex.markdown_latex_combined"}]},{begin:"(\\s*\\\\begin\\{(\\w+\\*?)\\})",captures:{1:{patterns:[{include:"#begin-env-tokenizer"}]}},end:"(\\\\end\\{\\2\\}(?:\\s*\\n)?)",name:"meta.function.environment.general.latex",patterns:[{include:"$base"}]},{captures:{1:{name:"storage.type.function.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.begin.latex"},4:{name:"support.function.general.latex"},5:{name:"punctuation.definition.function.latex"},6:{name:"punctuation.definition.end.latex"}},match:"((\\\\)(?:newcommand|renewcommand|(?:re)?newrobustcmd|DeclareRobustCommand))\\*?({)((\\\\)[^}]*)(})"},{begin:"((\\\\)marginpar)((?:\\[[^\\[]*?\\])*)(\\{)",beginCaptures:{1:{name:"support.function.marginpar.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.marginpar.begin.latex"}},contentName:"meta.paragraph.margin.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.marginpar.end.latex"}},patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)footnote)((?:\\[[^\\[]*?\\])*)(\\{)",beginCaptures:{1:{name:"support.function.footnote.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.footnote.begin.latex"}},contentName:"entity.name.footnote.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.footnote.end.latex"}},patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)emph)(\\{)",beginCaptures:{1:{name:"support.function.emph.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.emph.begin.latex"}},contentName:"markup.italic.emph.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.emph.end.latex"}},name:"meta.function.emph.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)textit)(\\{)",captures:{1:{name:"support.function.textit.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.textit.begin.latex"}},comment:`We put the keyword in a capture and name this capture, so that disabling spell checking for “keyword” won't be inherited by the argument to \\textit{...}.

Put specific matches for particular LaTeX keyword.functions before the last two more general functions`,contentName:"markup.italic.textit.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.textit.end.latex"}},name:"meta.function.textit.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)textbf)(\\{)",captures:{1:{name:"support.function.textbf.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.textbf.begin.latex"}},contentName:"markup.bold.textbf.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.textbf.end.latex"}},name:"meta.function.textbf.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{begin:"((\\\\)texttt)(\\{)",captures:{1:{name:"support.function.texttt.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.texttt.begin.latex"}},contentName:"markup.raw.texttt.latex",end:"\\}",endCaptures:{0:{name:"punctuation.definition.texttt.end.latex"}},name:"meta.function.texttt.latex",patterns:[{include:"text.tex#braces"},{include:"$base"}]},{captures:{0:{name:"keyword.other.item.latex"},1:{name:"punctuation.definition.keyword.latex"}},match:"(\\\\)item\\b",name:"meta.scope.item.latex"},{begin:"((\\\\)(?:[aA]uto|foot|full|no|ref|short|[tT]ext|[pP]aren|[sS]mart)?[cC]ite(?:al)?(?:p|s|t|author|year(?:par)?|title)?[ANP]*\\*?)((?:(?:\\([^\\)]*\\)){0,2}(?:\\[[^\\]]*\\]){0,2}\\{[\\p{Alphabetic}:.]*\\})*)(?:([<\\[])[^\\]<>]*([>\\]]))?(?:(\\[)[^\\]]*(\\]))?(\\{)",captures:{1:{name:"keyword.control.cite.latex"},2:{name:"punctuation.definition.keyword.latex"},3:{patterns:[{include:"#autocites-arg"}]},4:{name:"punctuation.definition.arguments.optional.begin.latex"},5:{name:"punctuation.definition.arguments.optional.end.latex"},6:{name:"punctuation.definition.arguments.optional.begin.latex"},7:{name:"punctuation.definition.arguments.optional.end.latex"},8:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.citation.latex",patterns:[{captures:{1:{name:"comment.line.percentage.tex"},2:{name:"punctuation.definition.comment.tex"}},match:"((%).*)$"},{match:"[\\p{Alphabetic}\\p{Number}:.-]+",name:"constant.other.reference.citation.latex"}]},{begin:"((\\\\)bibentry)(\\{)",captures:{1:{name:"keyword.control.cite.latex"},2:{name:"punctuation.definition.keyword.latex"},3:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.citation.latex",patterns:[{match:"[\\p{Alphabetic}\\p{Number}:.]+",name:"constant.other.reference.citation.latex"}]},{begin:"((\\\\)(?:\\w*[rR]ef\\*?))(\\{)",beginCaptures:{1:{name:"keyword.control.ref.latex"},2:{name:"punctuation.definition.keyword.latex"},3:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.reference.label.latex",patterns:[{match:"[\\p{Alphabetic}\\p{Number}\\.,:/*!^_-]",name:"constant.other.reference.label.latex"}]},{include:"#definition-label"},{begin:"((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((\\\\)scantokens)(\\{)",beginCaptures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"support.function.verb.latex"},4:{name:"punctuation.definition.verb.latex"},5:{name:"punctuation.definition.begin.latex"}},contentName:"markup.raw.verb.latex",end:"(\\})",endCaptures:{1:{name:"punctuation.definition.end.latex"}},name:"meta.function.verb.latex",patterns:[{include:"$self"}]},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.verb.latex"},4:{name:"markup.raw.verb.latex"},5:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)(?:verb|Verb|spverb)\\*?)\\s*((?<=\\s)\\S|[^a-zA-Z])(.*?)(\\3|$)",name:"meta.function.verb.latex"},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.arguments.begin.latex"},5:{name:"punctuation.definition.arguments.end.latex"},6:{name:"punctuation.definition.verb.latex"},7:{name:"markup.raw.verb.latex"},8:{name:"punctuation.definition.verb.latex"},9:{name:"punctuation.definition.verb.latex"},10:{name:"markup.raw.verb.latex"},11:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)(?:mint|mintinline))((?:\\[[^\\[]*?\\])?)(\\{)[a-zA-Z]*(\\})(?:(?:([^a-zA-Z\\{])(.*?)(\\6))|(?:(\\{)(.*?)(\\})))",name:"meta.function.verb.latex"},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.verb.latex"},5:{name:"markup.raw.verb.latex"},6:{name:"punctuation.definition.verb.latex"},7:{name:"punctuation.definition.verb.latex"},8:{name:"markup.raw.verb.latex"},9:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)[a-z]+inline)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",name:"meta.function.verb.latex"},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.verb.latex"},5:{name:"source.python",patterns:[{include:"source.python"}]},6:{name:"punctuation.definition.verb.latex"},7:{name:"punctuation.definition.verb.latex"},8:{name:"source.python",patterns:[{include:"source.python"}]},9:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)(?:(?:py|pycon|pylab|pylabcon|sympy|sympycon)[cv]?|pyq|pycq|pyif))((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",name:"meta.function.verb.latex"},{captures:{1:{name:"support.function.verb.latex"},2:{name:"punctuation.definition.function.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.verb.latex"},5:{name:"source.julia",patterns:[{include:"source.julia"}]},6:{name:"punctuation.definition.verb.latex"},7:{name:"punctuation.definition.verb.latex"},8:{name:"source.julia",patterns:[{include:"source.julia"}]},9:{name:"punctuation.definition.verb.latex"}},match:"((\\\\)(?:jl|julia)[cv]?)((?:\\[[^\\[]*?\\])?)(?:(?:([^a-zA-Z\\{])(.*?)(\\4))|(?:(\\{)(.*?)(\\})))",name:"meta.function.verb.latex"},{match:"\\\\(?:newline|pagebreak|clearpage|linebreak|pause)(?:\\b)",name:"keyword.control.layout.latex"},{begin:"\\\\\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.latex"}},end:"\\\\\\)",endCaptures:{0:{name:"punctuation.definition.string.end.latex"}},name:"meta.math.block.latex support.class.math.block.environment.latex",patterns:[{include:"text.tex#math"},{include:"$base"}]},{begin:"\\$\\$",beginCaptures:{0:{name:"punctuation.definition.string.begin.latex"}},end:"\\$\\$",endCaptures:{0:{name:"punctuation.definition.string.end.latex"}},name:"meta.math.block.latex support.class.math.block.environment.latex",patterns:[{match:"\\\\\\$",name:"constant.character.escape.latex"},{include:"text.tex#math"},{include:"$base"}]},{begin:"\\$",beginCaptures:{0:{name:"punctuation.definition.string.begin.tex"}},end:"\\$",endCaptures:{0:{name:"punctuation.definition.string.end.tex"}},name:"meta.math.block.tex support.class.math.block.tex",patterns:[{match:"\\\\\\$",name:"constant.character.escape.latex"},{include:"text.tex#math"},{include:"$base"}]},{begin:"\\\\\\[",beginCaptures:{0:{name:"punctuation.definition.string.begin.latex"}},end:"\\\\\\]",endCaptures:{0:{name:"punctuation.definition.string.end.latex"}},name:"meta.math.block.latex support.class.math.block.environment.latex",patterns:[{include:"text.tex#math"},{include:"$base"}]},{captures:{1:{name:"punctuation.definition.constant.latex"}},match:"(\\\\)(text(s(terling|ixoldstyle|urd|e(ction|venoldstyle|rvicemark))|yen|n(ineoldstyle|umero|aira)|c(ircledP|o(py(left|right)|lonmonetary)|urrency|e(nt(oldstyle)?|lsius))|t(hree(superior|oldstyle|quarters(emdash)?)|i(ldelow|mes)|w(o(superior|oldstyle)|elveudash)|rademark)|interrobang(down)?|zerooldstyle|o(hm|ne(superior|half|oldstyle|quarter)|penbullet|rd(feminine|masculine))|d(i(scount|ed|v(orced)?)|o(ng|wnarrow|llar(oldstyle)?)|egree|agger(dbl)?|blhyphen(char)?)|uparrow|p(ilcrow|e(so|r(t(housand|enthousand)|iodcentered))|aragraph|m)|e(stimated|ightoldstyle|uro)|quotes(traight(dblbase|base)|ingle)|f(iveoldstyle|ouroldstyle|lorin|ractionsolidus)|won|l(not|ira|e(ftarrow|af)|quill|angle|brackdbl)|a(s(cii(caron|dieresis|acute|grave|macron|breve)|teriskcentered)|cutedbl)|r(ightarrow|e(cipe|ferencemark|gistered)|quill|angle|brackdbl)|g(uarani|ravedbl)|m(ho|inus|u(sicalnote)?|arried)|b(igcircle|orn|ullet|lank|a(ht|rdbl)|rokenbar)))\\b",name:"constant.character.latex"},{captures:{1:{name:"punctuation.definition.column-specials.begin.latex"},2:{name:"punctuation.definition.column-specials.end.latex"}},match:"(?:<|>)(\\{)\\$(\\})",name:"meta.column-specials.latex"},{include:"text.tex"}],repository:{"autocites-arg":{patterns:[{captures:{1:{name:"punctuation.definition.arguments.optional.begin.latex"},2:{name:"punctuation.definition.arguments.optional.end.latex"},3:{name:"punctuation.definition.arguments.optional.begin.latex"},4:{name:"punctuation.definition.arguments.optional.end.latex"},5:{name:"punctuation.definition.arguments.begin.latex"},6:{name:"constant.other.reference.citation.latex"},7:{name:"punctuation.definition.arguments.end.latex"},8:{patterns:[{include:"#autocites-arg"}]}},match:"(?:(\\()[^\\)]*(\\))){0,2}(?:(\\[)[^\\]]*(\\])){0,2}(\\{)([\\p{Alphabetic}\\p{Number}:.]+)(\\})(.*)"}]},"begin-env-tokenizer":{captures:{1:{name:"support.function.be.latex"},2:{name:"punctuation.definition.function.latex"},3:{name:"punctuation.definition.arguments.begin.latex"},4:{name:"variable.parameter.function.latex"},5:{name:"punctuation.definition.arguments.end.latex"},6:{name:"punctuation.definition.arguments.optional.begin.latex"},7:{patterns:[{include:"$base"}]},8:{name:"punctuation.definition.arguments.optional.end.latex"},9:{name:"punctuation.definition.arguments.begin.latex"},10:{name:"variable.parameter.function.latex"},11:{name:"punctuation.definition.arguments.end.latex"}},match:"\\s*((\\\\)(?:begin|end))(\\{)([a-zA-Z]*\\*?)(\\})(?:(\\[)(.*)(\\]))?(?:(\\{)([^{}]*)(\\}))?"},"definition-label":{begin:"((\\\\)label)((?:\\[[^\\[]*?\\])*)(\\{)",beginCaptures:{1:{name:"keyword.control.label.latex"},2:{name:"punctuation.definition.keyword.latex"},3:{patterns:[{include:"#optional-arg"}]},4:{name:"punctuation.definition.arguments.begin.latex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.arguments.end.latex"}},name:"meta.definition.label.latex",patterns:[{match:"[\\p{Alphabetic}\\p{Number}\\.,:/*!^_-]",name:"variable.parameter.definition.label.latex"}]},"multiline-optional-arg":{begin:"\\G\\[",beginCaptures:{0:{name:"punctuation.definition.arguments.optional.begin.latex"}},contentName:"variable.parameter.function.latex",end:"\\]",endCaptures:{0:{name:"punctuation.definition.arguments.optional.end.latex"}},name:"meta.parameter.optional.latex",patterns:[{include:"$self"}]},"multiline-optional-arg-no-highlight":{begin:"\\G\\[",beginCaptures:{0:{name:"punctuation.definition.arguments.optional.begin.latex"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.arguments.optional.end.latex"}},name:"meta.parameter.optional.latex",patterns:[{include:"$self"}]},"optional-arg":{patterns:[{captures:{1:{name:"punctuation.definition.arguments.optional.begin.latex"},2:{name:"variable.parameter.function.latex"},3:{name:"punctuation.definition.arguments.optional.end.latex"}},match:"(\\[)([^\\[]*?)(\\])",name:"meta.parameter.optional.latex"}]}},scopeName:"text.tex.latex",embeddedLangs:["tex","css","haskell","html","xml","java","lua","julia","ruby","javascript","typescript","python","yaml","rust","scala","gnuplot"]});var V=[...e,...n,...t,...a,...i,...o,...u,...l,...r,...c,...m,...s,...p,...d,...b,...g,x];export{V as default};
