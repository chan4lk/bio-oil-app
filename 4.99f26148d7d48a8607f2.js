(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"6+Ij":function(e,i,t){"use strict";t.r(i),t.d(i,"DashboardModule",(function(){return S}));var n=t("2kYt"),s=t("sEIs"),o=t("EM62"),c=t("s2Ay"),r=t("ZTXN");let a=(()=>{class e{constructor(){this.videoSource=new r.a,this.videoSource$=this.videoSource.asObservable()}setVideoSource(e){this.videoSource.next(e)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=o.Db({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function l(e,i){if(1&e){const e=o.Lb();o.Kb(0,"div",1),o.Kb(1,"div",2),o.Kb(2,"video",3),o.Ib(3,"source",4),o.Jb(),o.Kb(4,"a",5),o.Kb(5,"img",6),o.Rb("click",(function(){return o.bc(e),o.Tb().close()})),o.Jb(),o.Jb(),o.Jb(),o.Jb()}if(2&e){const e=o.Tb();o.xb(2),o.yb("poster",e.poster,o.dc),o.xb(1),o.yb("src",e.source,o.dc)}}let d=(()=>{class e{constructor(e){this.service=e,this.poster="",this.source="",this.visible=!1,this.video_closed=new o.n}ngOnInit(){this.service.videoSource$.subscribe(e=>{""!==e&&(this.visible=!0),this.source=e})}close(){this.visible=!1,this.service.setVideoSource("")}}return e.\u0275fac=function(i){return new(i||e)(o.Hb(a))},e.\u0275cmp=o.Bb({type:e,selectors:[["db-video-player"]],inputs:{poster:"poster",source:"source"},outputs:{video_closed:"video_closed"},decls:1,vars:1,consts:[["class","video_container",4,"ngIf"],[1,"video_container"],[1,"video_container--background"],["controls","","preload","metadata",1,"video_container--video"],["type","video/mp4"],["href","#",1,"video_close"],["src","assets/images/close-24px-white.svg",1,"video_close",3,"click"]],template:function(e,i){1&e&&o.fc(0,l,6,2,"div",0),2&e&&o.Yb("ngIf",i.visible)},directives:[n.i],styles:[""]}),e})();t("P4Xx"),t("GoAz"),t("YtkY");const b=new o.q("NgValueAccessor"),h=["*"];let u=(()=>{class e{constructor(e,i,t){this.el=e,this.zone=i,this.platformId=t,this.afterChange=new o.n,this.beforeChange=new o.n,this.breakpoint=new o.n,this.destroy=new o.n,this.init=new o.n,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!Object(n.o)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){const e=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===e?this.unslick():(this._addedSlides.forEach(e=>{this.slides.push(e),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickAdd",e.el.nativeElement)})}),this._addedSlides=[],this._removedSlides.forEach(e=>{const i=this.slides.indexOf(e);this.slides=this.slides.filter(i=>i!==e),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickRemove",i)})}),this._removedSlides=[]):e>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular(()=>{this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(e,i)=>{this.zone.run(()=>{this.init.emit({event:e,slick:i})})}),this.$instance.slick(this.config),this.zone.run(()=>{var e;this.initialized=!0,this.currentIndex=(null===(e=this.config)||void 0===e?void 0:e.initialSlide)||0}),this.$instance.on("afterChange",(e,i,t)=>{this.zone.run(()=>{this.afterChange.emit({event:e,slick:i,currentSlide:t,first:0===t,last:i.$slides.length===t+i.options.slidesToScroll}),this.currentIndex=t})}),this.$instance.on("beforeChange",(e,i,t,n)=>{this.zone.run(()=>{this.beforeChange.emit({event:e,slick:i,currentSlide:t,nextSlide:n}),this.currentIndex=n})}),this.$instance.on("breakpoint",(e,i,t)=>{this.zone.run(()=>{this.breakpoint.emit({event:e,slick:i,breakpoint:t})})}),this.$instance.on("destroy",(e,i)=>{this.zone.run(()=>{this.destroy.emit({event:e,slick:i}),this.initialized=!1})})})}addSlide(e){this._addedSlides.push(e)}removeSlide(e){this._removedSlides.push(e)}slickGoTo(e){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickGoTo",e)})}slickNext(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickNext")})}slickPrev(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPrev")})}slickPause(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPause")})}slickPlay(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPlay")})}unslick(){this.$instance&&(this.zone.runOutsideAngular(()=>{this.$instance.slick("unslick")}),this.$instance=void 0),this.initialized=!1}ngOnChanges(e){if(this.initialized){const i=e.config;if(i.previousValue!==i.currentValue&&void 0!==i.currentValue){const e=i.currentValue.refresh,t=Object.assign({},i.currentValue);delete t.refresh,this.zone.runOutsideAngular(()=>{this.$instance.slick("slickSetOption",t,e)})}}}}return e.\u0275fac=function(i){return new(i||e)(o.Hb(o.l),o.Hb(o.z),o.Hb(o.B))},e.\u0275cmp=o.Bb({type:e,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[o.wb([{provide:b,useExisting:Object(o.S)(()=>e),multi:!0}]),o.vb],ngContentSelectors:h,decls:1,vars:0,template:function(e,i){1&e&&(o.Xb(),o.Wb(0))},encapsulation:2}),e})(),p=(()=>{class e{constructor(e,i,t){this.el=e,this.platformId=i,this.carousel=t}ngOnInit(){Object(n.n)(this.platformId)&&this.carousel.addSlide(this)}ngOnDestroy(){Object(n.n)(this.platformId)&&this.carousel.removeSlide(this)}}return e.\u0275fac=function(i){return new(i||e)(o.Hb(o.l),o.Hb(o.B),o.Hb(u,1))},e.\u0275dir=o.Cb({type:e,selectors:[["","ngxSlickItem",""]]}),e})(),f=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(i){return new(i||e)},imports:[[n.b]]}),e})(),v=(()=>{class e{constructor(e){this.service=e,this.poster="",this.source="",this.title="",this.content="",this.video_clicked=new o.n,this.video_closed=new o.n}ngOnInit(){this.service.videoSource$.subscribe(e=>{""===e&&this.video_closed.emit()})}play(){this.video_clicked.emit(),this.service.setVideoSource(this.source)}}return e.\u0275fac=function(i){return new(i||e)(o.Hb(a))},e.\u0275cmp=o.Bb({type:e,selectors:[["db-video-title"]],inputs:{poster:"poster",source:"source",title:"title",content:"content"},outputs:{video_clicked:"video_clicked",video_closed:"video_closed"},decls:8,vars:8,consts:[[1,"feature-card"],["src","assets/images/Flame.svg","alt","",1,"logo"],[1,"title",3,"innerHTML"],[1,"content",3,"innerHTML"],["src","assets/images/Play.svg","alt","",1,"btn-play",3,"click"]],template:function(e,i){1&e&&(o.Kb(0,"div",0),o.Ib(1,"img",1),o.Ib(2,"div",2),o.Ub(3,"uppercase"),o.Ub(4,"translate"),o.Ib(5,"div",3),o.Ub(6,"translate"),o.Kb(7,"img",4),o.Rb("click",(function(){return i.play()})),o.Jb(),o.Jb()),2&e&&(o.xb(2),o.Yb("innerHTML",o.Vb(3,2,o.Vb(4,4,i.title)),o.cc),o.xb(3),o.Yb("innerHTML",o.Vb(6,6,i.content),o.cc))},pipes:[n.l,c.c],styles:[".video_container{position:relative}.video_container--background{position:fixed;top:0;bottom:0;left:0;right:0;background-color:#000;z-index:20;display:flex;flex-direction:column;justify-content:center;align-items:center}.video_container--video{width:80%;height:auto;z-index:30}a.video_play img.video_play{margin-top:-4px;margin-left:4px;height:24px;width:24px}audio,canvas,iframe,img,svg,video{vertical-align:middle}.video_container a.video_close{position:absolute;top:20px;right:20px}"],encapsulation:2,changeDetection:0}),e})();function g(e,i){if(1&e){const e=o.Lb();o.Kb(0,"div",3),o.Kb(1,"db-video-title",4),o.Rb("video_clicked",(function(){return o.bc(e),o.Tb(),o.ac(1).slickPause()}))("video_closed",(function(){return o.bc(e),o.Tb(),o.ac(1).slickPlay()})),o.Jb(),o.Jb()}if(2&e){const e=i.$implicit;o.xb(1),o.Yb("title",e.title)("content",e.content)("source",e.url)}}let _=(()=>{class e{constructor(){this.slides=[{title:"FEATURES.TITLE_1",content:"FEATURES.CONTENT_1",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_2",content:"FEATURES.CONTENT_2",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_3",content:"FEATURES.CONTENT_3",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_4",content:"FEATURES.CONTENT_4",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_5",content:"FEATURES.CONTENT_5",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_6",content:"FEATURES.CONTENT_6",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_7",content:"FEATURES.CONTENT_7",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_8",content:"FEATURES.CONTENT_8",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_9",content:"FEATURES.CONTENT_9",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"},{title:"FEATURES.TITLE_10",content:"FEATURES.CONTENT_10",url:"https://assets.bio-oil.com/Website/Skincare_research_and_development_v5_1080p.mp4"}],this.slideConfig={slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,mobileFirst:!0}}ngOnInit(){}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["db-carousel"]],decls:3,vars:2,consts:[[1,"carousel",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","","class","slide",4,"ngFor","ngForOf"],["ngxSlickItem","",1,"slide"],[3,"title","content","source","video_clicked","video_closed"]],template:function(e,i){1&e&&(o.Kb(0,"ngx-slick-carousel",0,1),o.fc(2,g,2,3,"div",2),o.Jb()),2&e&&(o.Yb("config",i.slideConfig),o.xb(2),o.Yb("ngForOf",i.slides))},directives:[u,n.h,p,v],styles:[""],encapsulation:2}),e})();function m(e,i){if(1&e){const e=o.Lb();o.Kb(0,"div",2),o.Kb(1,"div",3),o.Kb(2,"div",4),o.gc(3),o.Ub(4,"translate"),o.Kb(5,"a",5),o.Rb("click",(function(){return o.bc(e),o.Tb().showPoliciy=!0})),o.gc(6),o.Ub(7,"translate"),o.Jb(),o.gc(8),o.Ub(9,"translate"),o.Jb(),o.Kb(10,"a",6),o.Rb("click",(function(){return o.bc(e),o.Tb().accept()})),o.gc(11),o.Ub(12,"translate"),o.Jb(),o.Jb(),o.Jb()}2&e&&(o.xb(3),o.ic(" ",o.Vb(4,4,"CONSENT.MESSAGE_PART_1")," "),o.xb(3),o.hc(o.Vb(7,6,"CONSENT.MESSAGE_PART_2")),o.xb(2),o.ic(" ",o.Vb(9,8,"CONSENT.MESSAGE_PART_3")," "),o.xb(3),o.ic(" ",o.Vb(12,10,"CONSENT.ACCEPT")," "))}function E(e,i){if(1&e){const e=o.Lb();o.Kb(0,"div",7),o.Kb(1,"div",8),o.Kb(2,"div",9),o.Kb(3,"div",10),o.Kb(4,"h5"),o.gc(5),o.Ub(6,"translate"),o.Jb(),o.Kb(7,"p"),o.gc(8),o.Ub(9,"translate"),o.Jb(),o.Jb(),o.Kb(10,"a",11),o.Rb("click",(function(){return o.bc(e),o.Tb().showPoliciy=!1})),o.Ib(11,"img",12),o.Jb(),o.Jb(),o.Jb(),o.Jb()}2&e&&(o.xb(5),o.hc(o.Vb(6,2,"CONSENT.POLICY_TITLE")),o.xb(3),o.ic(" ",o.Vb(9,4,"CONSENT.POLICY_STATEMENT")," "))}let T=(()=>{class e{constructor(){this.showPoliciy=!1,this.showBanner=!0}ngOnInit(){}accept(){this.showBanner=!1}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=o.Bb({type:e,selectors:[["db-consent-notification"]],decls:2,vars:2,consts:[["class","bo--notification-banner",4,"ngIf"],["class","bo--notification-sheet--container","id","open-policy-sheet",4,"ngIf"],[1,"bo--notification-banner"],[1,"bo--notification-banner--content"],[1,"bo--notification-banner--text"],["href","#",1,"bo--notification-sheet--open",3,"click"],["rel","nofollow","href","#",1,"bo--notification-banner--accept",3,"click"],["id","open-policy-sheet",1,"bo--notification-sheet--container"],[1,"bo--notification-sheet"],[1,"bo--notification-sheet--content"],[1,"bo--notification-text"],["rel","nofollow","href","#",1,"bo--notification-sheet--close","ltr",3,"click"],["src","assets/images/close-24px-dark.svg"]],template:function(e,i){1&e&&(o.fc(0,m,13,12,"div",0),o.fc(1,E,12,6,"div",1)),2&e&&(o.Yb("ngIf",i.showBanner),o.xb(1),o.Yb("ngIf",i.showPoliciy&&i.showBanner))},directives:[n.i],pipes:[c.c],styles:[".bo--notification-sheet--container{position:fixed;overflow-y:hidden;z-index:40;top:20%;bottom:20%;left:0;padding-left:80px;padding-right:80px}.bo--notification-sheet{background-color:#f5f5f5;color:#000;padding:30px;font-size:14px}.bo--notification-sheet--content{position:relative;line-height:1rem}.bo--notification-sheet--close{position:absolute;top:0;right:0;color:#000;cursor:pointer;height:16px}.bo--notification-sheet--close img{width:16px}.bo--notification-text h5{font-weight:700}.bo--notification-banner{position:fixed;bottom:0;left:0;right:0;z-index:10;display:flex;flex-direction:column;justify-content:center;font-size:14px;padding:0 80px;height:90px;background-color:#f5f5f5;color:#000}.bo--notification-banner--content{display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;line-height:1rem}.bo--notification-banner--accept{margin-left:30px}.bo--notification-banner a{color:#000;text-decoration:underline}.bo--notification-banner--accept{padding:10px 20px;color:#000;border:1px solid #000;text-decoration:none!important;white-space:nowrap;align-items:flex-end;vertical-align:center}@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){.bo--notification-sheet--container{padding-left:23px;padding-right:23px}.bo--notification-sheet{font-size:10px}.bo--notification-banner{padding:0 23px;height:60px;font-size:10px}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (-webkit-min-device-pixel-ratio:1){.bo--notification-sheet--container{padding-left:80px;padding-right:80px}}"],encapsulation:2,changeDetection:0}),e})(),x=(()=>{class e{constructor(e){this.translate=e}ngOnInit(){}changed(e){var i;this.translate.use(null===(i=e.target)||void 0===i?void 0:i.value)}}return e.\u0275fac=function(i){return new(i||e)(o.Hb(c.d))},e.\u0275cmp=o.Bb({type:e,selectors:[["db-home"]],decls:39,vars:24,consts:[[1,"bo-layout--section","banner"],["src","assets/images/Banner.svg","alt","",1,"img-banner"],[1,"bo-layout--section","ingredients"],[1,"bottle-section"],[1,"bottle-anim"],[1,"circles"],[1,"circle","circle-1"],[1,"img"],["src","assets/images/Bottle.svg","alt","",1,"bottle"],[1,"ingredients-items"],[1,"bo-layout--section","features"]],template:function(e,i){1&e&&(o.Kb(0,"div",0),o.Ib(1,"img",1),o.Jb(),o.Kb(2,"div",2),o.Kb(3,"div",3),o.Kb(4,"div",4),o.Kb(5,"div",5),o.Ib(6,"div",6),o.Jb(),o.Kb(7,"div",7),o.Ib(8,"img",8),o.Jb(),o.Jb(),o.Jb(),o.Kb(9,"div",9),o.Kb(10,"h1"),o.gc(11),o.Ub(12,"translate"),o.Jb(),o.Kb(13,"ul"),o.Kb(14,"li"),o.gc(15),o.Ub(16,"translate"),o.Jb(),o.Kb(17,"li"),o.gc(18),o.Ub(19,"translate"),o.Jb(),o.Kb(20,"li"),o.gc(21),o.Ub(22,"translate"),o.Jb(),o.Kb(23,"li"),o.gc(24),o.Ub(25,"translate"),o.Jb(),o.Kb(26,"li"),o.gc(27),o.Ub(28,"translate"),o.Jb(),o.Kb(29,"li"),o.gc(30),o.Ub(31,"translate"),o.Jb(),o.Kb(32,"li"),o.gc(33),o.Ub(34,"translate"),o.Jb(),o.Jb(),o.Jb(),o.Jb(),o.Kb(35,"div",10),o.Ib(36,"db-video-player"),o.Ib(37,"db-carousel"),o.Jb(),o.Ib(38,"db-consent-notification")),2&e&&(o.xb(11),o.hc(o.Vb(12,8,"INGREDIENTS.TITLE")),o.xb(4),o.hc(o.Vb(16,10,"INGREDIENTS.INGREDIENT_1")),o.xb(3),o.hc(o.Vb(19,12,"INGREDIENTS.INGREDIENT_2")),o.xb(3),o.hc(o.Vb(22,14,"INGREDIENTS.INGREDIENT_3")),o.xb(3),o.hc(o.Vb(25,16,"INGREDIENTS.INGREDIENT_4")),o.xb(3),o.hc(o.Vb(28,18,"INGREDIENTS.INGREDIENT_5")),o.xb(3),o.hc(o.Vb(31,20,"INGREDIENTS.INGREDIENT_6")),o.xb(3),o.hc(o.Vb(34,22,"INGREDIENTS.INGREDIENT_7")))},directives:[d,_,T],pipes:[c.c],styles:[""],encapsulation:2,changeDetection:0}),e})(),S=(()=>{class e{}return e.\u0275mod=o.Fb({type:e}),e.\u0275inj=o.Eb({factory:function(i){return new(i||e)},imports:[[n.b,c.b,f,s.a.forChild([{path:"",pathMatch:"full",component:x}])]]}),e})()}}]);