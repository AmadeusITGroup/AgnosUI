import{L as D,O as W}from"./chunk-W5WXNCR7.js";import{ba as C,ea as S,fa as M,ga as _,ha as V,la as v,ma as T}from"./chunk-HYVDFSYR.js";import"./chunk-6AZTJAM2.js";import{Eb as o,Gb as f,Hb as r,Ib as d,Jb as s,Lb as w,Oa as a,Va as t,ba as y,cb as p,nb as l,ob as i,pb as g,sb as b}from"./chunk-HJDF7RBE.js";var u=class u{constructor(){this.sliderControl=new M([70]);this.disabledControl=new M(60);this.sliderValues=t([20]);this.disabledToggle=t(!0);this.readonlyToggle=t(!0);this.showMinMax=t(!0);this.showValues=t(!0)}ngOnInit(){this.disabledControl.disable()}handleDisabled(){this.disabledToggle()?this.disabledControl.disable():this.disabledControl.enable()}};u.\u0275fac=function(h){return new(h||u)},u.\u0275cmp=y({type:u,selectors:[["ng-component"]],standalone:!0,features:[w],decls:29,vars:12,consts:[["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl","auShowMinMaxLabels","auShowValueLabels"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"auValuesChange","auValues"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl","auReadonly"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","disabled",1,"form-check-input",3,"ngModelChange","change","ngModel"],["for","disabled",1,"form-check-label"],["type","checkbox","role","switch","id","readonly",1,"form-check-input",3,"ngModelChange","ngModel"],["for","readonly",1,"form-check-label"],["type","checkbox","role","switch","id","showMinMax",1,"form-check-input",3,"ngModelChange","ngModel"],["for","showMinMax",1,"form-check-label"],["type","checkbox","role","switch","id","showValues",1,"form-check-input",3,"ngModelChange","ngModel"],["for","showValues",1,"form-check-label"]],template:function(h,e){h&1&&(l(0,"h2"),o(1,"Slider with form control"),i(),g(2,"div",0),o(3),g(4,"hr"),l(5,"h2"),o(6,"Slider with value"),i(),l(7,"div",1),s("auValuesChange",function(n){return d(e.sliderValues,n)||(e.sliderValues=n),n}),i(),o(8),g(9,"hr"),l(10,"h2"),o(11,"Disabled slider"),i(),g(12,"div",2),l(13,"div",3)(14,"input",4),s("ngModelChange",function(n){return d(e.disabledToggle,n)||(e.disabledToggle=n),n}),b("change",function(){return e.handleDisabled()}),i(),l(15,"label",5),o(16,"Disabled"),i()(),l(17,"div",3)(18,"input",6),s("ngModelChange",function(n){return d(e.readonlyToggle,n)||(e.readonlyToggle=n),n}),i(),l(19,"label",7),o(20,"Readonly"),i()(),l(21,"div",3)(22,"input",8),s("ngModelChange",function(n){return d(e.showMinMax,n)||(e.showMinMax=n),n}),i(),l(23,"label",9),o(24,"Min-Max label visibility"),i()(),l(25,"div",3)(26,"input",10),s("ngModelChange",function(n){return d(e.showValues,n)||(e.showValues=n),n}),i(),l(27,"label",11),o(28,"Value label visibility"),i()()),h&2&&(a(2),p("formControl",e.sliderControl)("auShowMinMaxLabels",e.showMinMax())("auShowValueLabels",e.showValues()),a(),f(" Form control value: ",e.sliderControl.value," "),a(4),r("auValues",e.sliderValues),a(),f(" Value: ",e.sliderValues()," "),a(4),p("formControl",e.disabledControl)("auReadonly",e.readonlyToggle()),a(2),r("ngModel",e.disabledToggle),a(4),r("ngModel",e.readonlyToggle),a(4),r("ngModel",e.showMinMax),a(4),r("ngModel",e.showValues))},dependencies:[W,D,T,C,S,V,v,_],encapsulation:2});var c=u;export{c as default};