"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[574],{3574:(h,r,a)=>{a.r(r),a.d(r,{default:()=>g});var s=a(3713),n=a(8755),e=a(6442),u=a(7846);let g=(()=>{class i{constructor(){this.sliderControl=new n.NI([70]),this.disabledControl=new n.NI(60),this.sliderValues=[20],this.disabledToggle=!0,this.readonlyToggle=!0}ngOnInit(){this.disabledControl.disable()}handleDisabled(){this.disabledToggle?this.disabledControl.disable():this.disabledControl.enable()}static#e=this.\u0275fac=function(d){return new(d||i)};static#l=this.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,features:[e.jDz],decls:21,vars:8,consts:[["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"auValues","auValuesChange"],["auSlider","","auMin","0","auMax","100","auStepSize","1",3,"formControl","auReadonly"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","disabled",1,"form-check-input",3,"ngModel","ngModelChange","change"],["for","disabled",1,"form-check-label"],["type","checkbox","role","switch","id","readonly",1,"form-check-input",3,"ngModel","ngModelChange"],["for","readonly",1,"form-check-label"]],template:function(d,l){1&d&&(e.TgZ(0,"h2"),e._uU(1,"Slider with form control"),e.qZA(),e._UZ(2,"div",0),e._uU(3),e._UZ(4,"hr"),e.TgZ(5,"h2"),e._uU(6,"Slider with value"),e.qZA(),e.TgZ(7,"div",1),e.NdJ("auValuesChange",function(o){return l.sliderValues=o}),e.qZA(),e._uU(8),e._UZ(9,"hr"),e.TgZ(10,"h2"),e._uU(11,"Disabled slider"),e.qZA(),e._UZ(12,"div",2),e.TgZ(13,"div",3)(14,"input",4),e.NdJ("ngModelChange",function(o){return l.disabledToggle=o})("change",function(){return l.handleDisabled()}),e.qZA(),e.TgZ(15,"label",5),e._uU(16,"Disabled"),e.qZA()(),e.TgZ(17,"div",3)(18,"input",6),e.NdJ("ngModelChange",function(o){return l.readonlyToggle=o}),e.qZA(),e.TgZ(19,"label",7),e._uU(20,"Readonly"),e.qZA()()),2&d&&(e.xp6(2),e.Q6J("formControl",l.sliderControl),e.xp6(1),e.hij(" Form control value: ",l.sliderControl.value," "),e.xp6(4),e.Q6J("auValues",l.sliderValues),e.xp6(1),e.hij(" Value: ",l.sliderValues," "),e.xp6(4),e.Q6J("formControl",l.disabledControl)("auReadonly",l.readonlyToggle),e.xp6(2),e.Q6J("ngModel",l.disabledToggle),e.xp6(4),e.Q6J("ngModel",l.readonlyToggle))},dependencies:[s.N,u.P,n.UX,n.Wl,n.JJ,n.oH,n.u5,n.On],encapsulation:2})}return i})()}}]);