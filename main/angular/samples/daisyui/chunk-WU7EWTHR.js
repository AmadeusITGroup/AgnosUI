import{a as J,b as K}from"./chunk-QWHXTAJ2.js";import{c as O}from"./chunk-PB33NMKT.js";import{j as q,m as Q,p as k,q as L}from"./chunk-J5BETO6K.js";import"./chunk-GO4YU65R.js";import{$ as u,Ab as P,Bb as A,Ga as T,Ha as D,Ia as n,Jb as $,Nb as x,Qa as V,T as M,Va as h,Wb as B,Xb as R,Yb as W,Za as C,a as H,aa as d,b as N,db as j,ea as E,eb as a,fb as F,gb as z,jb as y,kb as _,la as c,lb as w,mb as S,na as v,nb as s,ob as l,pb as m,tb as b,ub as f,vb as p}from"./chunk-JDXB6IFW.js";var ae=["appGalleryImage",""];function se(i,t){i&1&&m(0,"span",1)}function le(i,t){if(i&1&&m(0,"source",3),i&2){let e=t.$implicit;a("media",e.media)("srcset",e.srcset)}}function ce(i,t){if(i&1){let e=b();C(0,se,1,0,"span",1),s(1,"picture",2),w(2,le,1,2,"source",3,_),s(4,"img",4),f("load",function(){u(e);let r=p();return d(r.imageLoaded.set(!0))}),l()()}if(i&2){let e=p();y(e.imageLoaded()?-1:0),n(2),S(e.sources()),n(2),F("aspect-ratio",e.aspectRatio()),a("alt",e.alt())("src",e.src(),D)}}function me(i,t){i&1&&m(0,"div",0)}var G=class i{constructor(){this.src=c.required();this.alt=c.required();this.sources=c.required();this.loadRequested=c.required();this.aspectRatio=c.required();this.imageLoaded=v(!1)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=h({type:i,selectors:[["div","appGalleryImage",""]],hostAttrs:[1,"relative","basis-full","min-w-0","shrink-0","grow-0","flex","justify-center"],inputs:{src:[1,"src"],alt:[1,"alt"],sources:[1,"sources"],loadRequested:[1,"loadRequested"],aspectRatio:[1,"aspectRatio"]},attrs:ae,decls:2,vars:1,consts:[[1,"skeleton","w-full","h-full"],[1,"absolute","top-1/2","-translate-y-1/2","left-1/2","loading","loading-spinner","loading-lg","text-primary"],[1,"flex","justify-center"],[3,"media","srcset"],[1,"select-none","object-contain",3,"load","alt","src"]],template:function(e,o){e&1&&C(0,ce,5,5)(1,me,1,0,"div",0),e&2&&y(o.loadRequested()?0:1)},encapsulation:2,changeDetection:0})}};var Z=`<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 fill-current md:h-8 md:w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
`;var ee='<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 fill-current md:h-8 md:w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" /></svg>';var de=["mainContainer"],te=(i,t)=>({index:i,id:t}),ie=(i,t)=>[i,t];function he(i,t){if(i&1&&m(0,"div",4),i&2){let e=t.$implicit,o=t.$index,r=p();a("src",e.src)("alt",e.alt)("aspectRatio",r.aspectRatio())("loadRequested",e.loadRequested())("sources",e.sources)("auUse",x(9,ie,r.mainCarouselDirectives.slide,x(6,te,o,"gallery-photo-"+o)))}}function ye(i,t){if(i&1){let e=b();s(0,"div",5)(1,"button",10),f("pointerdown",function(r){return u(e),d(r.preventDefault())}),l(),s(2,"button",10),f("pointerdown",function(r){return u(e),d(r.preventDefault())}),l()()}if(i&2){let e=p();n(),a("auUse",e.mainCarouselDirectives.scrollPrev)("innerHTML",e.previousSvg,T),n(),a("auUse",e.mainCarouselDirectives.scrollNext)("innerHTML",e.nextSvg,T)}}function fe(i,t){if(i&1){let e=b();s(0,"div",6)(1,"button",11),f("click",function(){u(e);let r=p();return d(r.toggleFullScreen())}),l()()}if(i&2){let e=p();n(),a("innerHTML",e.isFullScreen()?e.compressSvg:e.expandSvg,T),j("aria-label",e.isFullScreen()?"leave fullscreen":"open photo in fullscreen")}}function ge(i,t){if(i&1&&($(0),s(1,"button",12),m(2,"img",13),l()),i&2){let e=t.$implicit,o=t.$index,r=p(),re="gallery-photo-"+o;n(),z("ring-3",r.mainCarouselState.selectedScrollSnap()===o),a("auUse",x(9,ie,r.mainCarouselDirectives.tabIndicator,x(6,te,o,re))),n(),F("aspect-ratio",r.aspectRatio()),a("src",e.thumbnail,D)}}var I=class i{constructor(){this.photos=c.required();this.withNavArrows=c(!1,{transform:L});this.withShowFullscreen=c(!1,{transform:L});this.aspectRatio=c(4/3);this.domSanitizer=M(O);this.previousSvg=this.domSanitizer.bypassSecurityTrustHtml(J);this.nextSvg=this.domSanitizer.bypassSecurityTrustHtml(K);this.expandSvg=this.domSanitizer.bypassSecurityTrustHtml(Z);this.compressSvg=this.domSanitizer.bypassSecurityTrustHtml(ee);this._mainCarousel=k({factory:q,widgetName:"carousel"});this._thumbCarousel=k({factory:q,widgetName:"carousel",defaultConfig:{dragFree:!0,containScroll:"keepSnaps"}});this.photosWithLoadState=R(()=>this.photos().map((t,e)=>N(H({},t),{loadRequested:v(e===0)})));this.canFullScreen=R(()=>this.withShowFullscreen()&&document?.fullscreenEnabled);this.isFullScreen=v(!1);this.mainContainer=V.required("mainContainer");this.injector=M(E)}get mainCarouselApi(){return this._mainCarousel.api}get mainCarouselDirectives(){return this._mainCarousel.directives}get mainCarouselState(){return this._mainCarousel.state}get thumbCarouselApi(){return this._thumbCarousel.api}get thumbCarouselState(){return this._thumbCarousel.state}get thumbCarouselDirectives(){return this._thumbCarousel.directives}ngOnInit(){this._mainCarousel.ngInit(),this._thumbCarousel.ngInit(),W(()=>{let t=this.mainCarouselState.selectedScrollSnap();B(()=>{this.thumbCarouselApi.scrollTo(t);let e=this.photosWithLoadState();e[t].loadRequested.set(!0),t>0&&e[t-1].loadRequested.set(!0),t<e.length-1&&e[t+1].loadRequested.set(!0)})},{injector:this.injector})}toggleFullScreen(){this.isFullScreen()?document.exitFullscreen():this.mainContainer().nativeElement.requestFullscreen(),this.isFullScreen.update(t=>!t)}scrollToSlide(t){this.mainCarouselApi.scrollTo(t,Math.abs(this.mainCarouselState.selectedScrollSnap()-t)>1)}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=h({type:i,selectors:[["app-gallery"]],viewQuery:function(e,o){e&1&&P(o.mainContainer,de,5),e&2&&A()},inputs:{photos:[1,"photos"],withNavArrows:[1,"withNavArrows"],withShowFullscreen:[1,"withShowFullscreen"],aspectRatio:[1,"aspectRatio"]},decls:12,vars:4,consts:[["mainContainer",""],[1,"grid","grid-flow-row","max-h-dvh"],[1,"overflow-hidden","relative","cursor-grab","active:cursor-grabbing",3,"auUse"],[1,"flex","max-h-full"],["appGalleryImage","",3,"src","alt","aspectRatio","loadRequested","sources","auUse"],[1,"absolute","left-5","right-5","top-1/2","flex","-translate-y-1/2","transform","justify-between"],[1,"absolute","right-5","bottom-5","flex"],[1,"overflow-hidden","mt-1","mb-2",3,"auUse"],["role","tablist",1,"grid","grid-flow-col","auto-cols-max","gap-2","mx-1","my-1","items-center"],[1,"ring-primary","cursor-pointer",3,"ring-3","auUse"],[1,"btn","btn-primary","btn-sm","md:btn-md","btn-circle","opacity-75","hover:opacity-100",3,"pointerdown","auUse","innerHTML"],[1,"btn","btn-primary","btn-sm","md:btn-md","btn-square","opacity-75","hover:opacity-100",3,"click","innerHTML"],[1,"ring-primary","cursor-pointer",3,"auUse"],["alt","random picsum","loading","lazy",1,"select-none",3,"src"]],template:function(e,o){e&1&&(s(0,"div",1,0)(2,"div",2)(3,"div",3),w(4,he,1,12,"div",4,_),l(),C(6,ye,3,4,"div",5)(7,fe,2,2,"div",6),l(),s(8,"div",7)(9,"div",8),w(10,ge,3,12,"button",9,_),l()()()),e&2&&(n(2),a("auUse",o.mainCarouselDirectives.root),n(2),S(o.photosWithLoadState()),n(2),y(o.withNavArrows()?6:-1),n(),y(o.canFullScreen()?7:-1),n(),a("auUse",o.thumbCarouselDirectives.root),n(2),S(o.photos()))},dependencies:[Q,G],encapsulation:2,changeDetection:0})}};var ve=[36,43,70,102,124,142,156,242,288,289,295,361,400,488,496,515,557,607,623,645],Ce=[124,289,400,488,607],oe=[],g=(i,t,e,o)=>`https://picsum.photos/id/${i}/${o?e:t}/${o?t:e}.webp`;for(let i of ve){let t=Ce.includes(i);oe.push({thumbnail:g(i,120,90,t),src:g(i,1600,1200,t),alt:"random picsum",sources:[{media:"(max-width: 599px)",srcset:g(i,600,450,t)},{media:"(min-width: 600px) and (max-width: 799px)",srcset:g(i,800,600,t)},{media:"(min-width: 800px) and (max-width: 1199px)",srcset:g(i,1200,900,t)},{media:"(min-width: 1200px)",srcset:g(i,1600,1200,t)}]})}var ne=[...oe];var U=class i{constructor(){this.photos=ne}static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275cmp=h({type:i,selectors:[["ng-component"]],decls:3,vars:1,consts:[[1,"w-full","flex","justify-center"],[1,"max-w-[600px]","lg:max-w-[1000px]"],["withNavArrows","","withShowFullscreen","",3,"photos"]],template:function(e,o){e&1&&(s(0,"div",0)(1,"div",1),m(2,"app-gallery",2),l()()),e&2&&(n(2),a("photos",o.photos))},dependencies:[I],encapsulation:2})}};export{U as default};
