(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6+Ij":function(e,t,i){"use strict";i.r(t),i.d(t,"DashboardModule",(function(){return p}));var n=i("2kYt"),o=i("sEIs"),s=i("EM62"),c=i("s2Ay");function r(e,t){if(1&e){const e=s.Hb();s.Gb(0,"div",4),s.Gb(1,"div",5),s.Gb(2,"video",6),s.Eb(3,"source",7),s.Fb(),s.Gb(4,"a",8),s.Gb(5,"img",9),s.Nb("click",(function(){return s.Ub(e),s.Pb().visible=!1})),s.Fb(),s.Fb(),s.Fb(),s.Fb()}if(2&e){const e=s.Pb();s.ub(2),s.vb("poster",e.poster,s.Wb),s.ub(1),s.vb("src",e.source,s.Wb)}}let b=(()=>{class e{constructor(){this.poster="",this.source="",this.title="",this.visible=!1}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.xb({type:e,selectors:[["db-video-title"]],inputs:{poster:"poster",source:"source",title:"title"},decls:6,vars:4,consts:[["href","#",1,"video_play"],[3,"innerHTML"],["src","assets/images/circled-play-100.ltr.png",1,"video_play",3,"click"],["class","video_container",4,"ngIf"],[1,"video_container"],[1,"video_container--background"],["controls","","preload","metadata",1,"video_container--video"],["type","video/mp4"],["href","#",1,"video_close"],["src","assets/images/close-24px-white.svg",1,"video_close",3,"click"]],template:function(e,t){1&e&&(s.Gb(0,"h2"),s.Gb(1,"a",0),s.Eb(2,"span",1),s.Qb(3,"translate"),s.Gb(4,"img",2),s.Nb("click",(function(){return t.visible=!0})),s.Fb(),s.Fb(),s.Yb(5,r,6,2,"div",3),s.Fb()),2&e&&(s.ub(2),s.Sb("innerHTML",s.Rb(3,2,t.title),s.Vb),s.ub(3),s.Sb("ngIf",t.visible))},directives:[n.h],pipes:[c.c],styles:[".video_container{position:relative}.video_container--background{position:fixed;top:0;bottom:0;left:0;right:0;background-color:#000;z-index:20;display:flex;flex-direction:column;justify-content:center;align-items:center}.video_container--video{width:80%;height:auto;z-index:30}a.video_play img.video_play{margin-top:-4px;margin-left:4px;height:24px;width:24px}audio,canvas,iframe,img,svg,video{vertical-align:middle}.video_container a.video_close{position:absolute;top:20px;right:20px}"],encapsulation:2,changeDetection:0}),e})();function a(e,t){if(1&e&&(s.Eb(0,"h2",5),s.Qb(1,"translate")),2&e){const e=s.Pb();s.Sb("innerHTML",s.Rb(1,1,e.title),s.Vb)}}function l(e,t){if(1&e&&s.Eb(0,"db-video-title",6),2&e){const e=s.Pb();s.Sb("title",e.title)("poster",e.poster)("source",e.source)}}let d=(()=>{class e{constructor(){this.title="",this.content="",this.poster="",this.source=""}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.xb({type:e,selectors:[["db-section"]],inputs:{title:"title",content:"content",poster:"poster",source:"source"},decls:6,vars:5,consts:[[1,"bo-layout--section"],["dir","ltr",3,"innerHTML",4,"ngIf"],[3,"title","poster","source",4,"ngIf"],[2,"clear","both"],[3,"innerHTML"],["dir","ltr",3,"innerHTML"],[3,"title","poster","source"]],template:function(e,t){1&e&&(s.Gb(0,"div",0),s.Yb(1,a,2,3,"h2",1),s.Yb(2,l,1,3,"db-video-title",2),s.Eb(3,"div",3),s.Eb(4,"p",4),s.Qb(5,"translate"),s.Fb()),2&e&&(s.ub(1),s.Sb("ngIf",!t.source),s.ub(1),s.Sb("ngIf",t.source),s.ub(2),s.Sb("innerHTML",s.Rb(5,3,t.content),s.Vb))},directives:[n.h,b],pipes:[c.c],styles:[""],encapsulation:2,changeDetection:0}),e})(),u=(()=>{class e{constructor(e){this.translate=e}ngOnInit(){}changed(e){var t;this.translate.use(null===(t=e.target)||void 0===t?void 0:t.value)}}return e.\u0275fac=function(t){return new(t||e)(s.Db(c.d))},e.\u0275cmp=s.xb({type:e,selectors:[["db-home"]],decls:17,vars:6,consts:[[1,"bo-layout--section"],[1,"bo-layout--logo-holder"],["src","assets/images/Bio-Oil_logo.svg",1,"logo"],[1,"bo-layout--section--language-selector","ltr","font-group-1"],[2,"position","fixed","visibility","hidden","top","0","left","0"],["id","language_selector_sizer",2,"visibility","hidden"],["accept-charset","UTF-8"],["name","language_selector","id","language_selector",1,"auto_post",3,"change"],["selected","selected","value","en"],["value","si"],["value","ta"],[3,"title","content"],[3,"title","content","poster","source"]],template:function(e,t){1&e&&(s.Gb(0,"div",0),s.Gb(1,"p",1),s.Eb(2,"img",2),s.Fb(),s.Gb(3,"div",3),s.Gb(4,"div",4),s.Gb(5,"span",5),s.Zb(6,"English"),s.Fb(),s.Fb(),s.Gb(7,"form",6),s.Gb(8,"select",7),s.Nb("change",(function(e){return t.changed(e)})),s.Gb(9,"option",8),s.Zb(10,"English"),s.Fb(),s.Gb(11,"option",9),s.Zb(12,"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"),s.Fb(),s.Gb(13,"option",10),s.Zb(14,"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"),s.Fb(),s.Fb(),s.Fb(),s.Fb(),s.Fb(),s.Eb(15,"db-section",11),s.Eb(16,"db-section",12)),2&e&&(s.ub(15),s.Sb("title","SECTION_1.TITLE")("content","SECTION_1.CONTENT"),s.ub(1),s.Sb("title","SECTION_2.TITLE")("content","SECTION_2.CONTENT")("poster","https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_poster_en.png")("source","https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"))},directives:[d],styles:[""],encapsulation:2,changeDetection:0}),e})(),p=(()=>{class e{}return e.\u0275mod=s.Bb({type:e}),e.\u0275inj=s.Ab({factory:function(t){return new(t||e)},imports:[[n.b,c.b,o.a.forChild([{path:"",pathMatch:"full",component:u}])]]}),e})()}}]);