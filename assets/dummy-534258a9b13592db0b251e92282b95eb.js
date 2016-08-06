"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,a,n,r){var d=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,d=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),(0,n.default)(d,r.default.modulePrefix),e.default=d}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,a){var n=a.default.APP.name,r=a.default.APP.version;e.default=t.default.extend({version:r,name:n})}),define("dummy/components/paper-checkbox",["exports","ember-polymer-paper/components/paper-checkbox"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/paper-input",["exports","ember-polymer-paper/components/paper-input"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/paper-radio-button",["exports","ember-polymer-paper/components/paper-radio-button"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/paper-radio-group",["exports","ember-polymer-paper/components/paper-radio-group"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,a){e.default={name:"App Version",initialize:(0,t.default)(a.default.APP.name,a.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n,r=a.default.exportApplicationGlobal;n="string"==typeof r?r:t.default.String.classify(a.default.modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});n.map(function(){}),e.default=n}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","outlet");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("ember-polymer-paper");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0]),3,3),n},statements:[["content","outlet",["loc",[null,[4,2],[4,12]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:11,column:4},end:{line:13,column:4}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("      I feel good\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:15,column:6},end:{line:17,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        😎   you feel good!\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:17,column:6},end:{line:19,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        😅   you feel .. how?\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){var e=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:27,column:6},end:{line:29,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        Small\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:30,column:6},end:{line:32,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        Medium\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:33,column:6},end:{line:35,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        Large\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:26,column:4},end:{line:36,column:4}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(3);return n[0]=e.createMorphAt(t,0,0,a),n[1]=e.createMorphAt(t,1,1,a),n[2]=e.createMorphAt(t,2,2,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","paper-radio-button",[],["name","small"],0,null,["loc",[null,[27,6],[29,29]]]],["block","paper-radio-button",[],["name","medium"],1,null,["loc",[null,[30,6],[32,29]]]],["block","paper-radio-button",[],["name","large"],2,null,["loc",[null,[33,6],[35,29]]]]],locals:[],templates:[e,t,a]}}();return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:1,column:0},end:{line:129,column:0}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("Normal paper-input");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    Your name is: ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("paper-checkbox");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("paper-radio-group with paper-radio-button's");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("\n      Selected: ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("number input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Number = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("date input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Date = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("time input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Time = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("color input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Color = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("email input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Email = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("month input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Month = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("week input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Week = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("tel input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Phone number = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("file input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("File = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("password input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Password = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("search input (paper-input)");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Search query = ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("section"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h3"),r=e.createTextNode("paper-textarea");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("p"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0,3]),r=e.childAt(t,[2,3]),d=e.childAt(t,[4,3]),l=e.childAt(t,[6,3]),p=e.childAt(t,[8,3]),i=e.childAt(t,[10,3]),o=e.childAt(t,[12,3]),c=e.childAt(t,[14,3]),m=e.childAt(t,[16,3]),u=e.childAt(t,[18,3]),h=e.childAt(t,[20,3]),C=e.childAt(t,[22,3]),s=e.childAt(t,[24,3]),v=e.childAt(t,[26,3]),x=e.childAt(t,[28,3]),f=new Array(30);return f[0]=e.createMorphAt(n,1,1),f[1]=e.createMorphAt(n,3,3),f[2]=e.createMorphAt(r,1,1),f[3]=e.createMorphAt(e.childAt(r,[3]),1,1),f[4]=e.createMorphAt(d,1,1),f[5]=e.createMorphAt(e.childAt(d,[3]),1,1),f[6]=e.createMorphAt(l,1,1),f[7]=e.createMorphAt(e.childAt(l,[3]),1,1),f[8]=e.createMorphAt(p,1,1),f[9]=e.createMorphAt(e.childAt(p,[3]),1,1),f[10]=e.createMorphAt(i,1,1),f[11]=e.createMorphAt(e.childAt(i,[3]),1,1),f[12]=e.createMorphAt(o,1,1),f[13]=e.createMorphAt(e.childAt(o,[3]),1,1),f[14]=e.createMorphAt(c,1,1),f[15]=e.createMorphAt(e.childAt(c,[3]),1,1),f[16]=e.createMorphAt(m,1,1),f[17]=e.createMorphAt(e.childAt(m,[3]),1,1),f[18]=e.createMorphAt(u,1,1),f[19]=e.createMorphAt(e.childAt(u,[3]),1,1),f[20]=e.createMorphAt(h,1,1),f[21]=e.createMorphAt(e.childAt(h,[3]),1,1),f[22]=e.createMorphAt(C,1,1),f[23]=e.createMorphAt(e.childAt(C,[3]),1,1),f[24]=e.createMorphAt(s,1,1),f[25]=e.createMorphAt(e.childAt(s,[3]),1,1),f[26]=e.createMorphAt(v,1,1),f[27]=e.createMorphAt(e.childAt(v,[3]),1,1),f[28]=e.createMorphAt(x,1,1),f[29]=e.createMorphAt(e.childAt(x,[3]),1,1),f},statements:[["inline","paper-input",[],["value",["subexpr","@mut",[["get","name",["loc",[null,[4,24],[4,28]]],0,0,0,0]],[],[],0,0],"label","Name"],["loc",[null,[4,4],[4,43]]],0,0],["content","name",["loc",[null,[5,18],[5,26]]],0,0,0,0],["block","paper-checkbox",[],["checked",["subexpr","@mut",[["get","checkboxChecked",["loc",[null,[11,30],[11,45]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[11,4],[13,23]]]],["block","if",[["get","checkboxChecked",["loc",[null,[15,12],[15,27]]],0,0,0,0]],[],1,2,["loc",[null,[15,6],[19,13]]]],["block","paper-radio-group",[],["selected",["subexpr","@mut",[["get","checkedRadioButton",["loc",[null,[26,34],[26,52]]],0,0,0,0]],[],[],0,0]],3,null,["loc",[null,[26,4],[36,26]]]],["content","checkedRadioButton",["loc",[null,[38,16],[38,38]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theNumber",["loc",[null,[45,24],[45,33]]],0,0,0,0]],[],[],0,0],"type","number","label","Enter a number"],["loc",[null,[45,4],[45,72]]],0,0],["content","theNumber",["loc",[null,[46,16],[46,29]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theDate",["loc",[null,[52,24],[52,31]]],0,0,0,0]],[],[],0,0],"type","date","label","Give in a date"],["loc",[null,[52,4],[52,68]]],0,0],["content","theDate",["loc",[null,[53,14],[53,25]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theTime",["loc",[null,[59,24],[59,31]]],0,0,0,0]],[],[],0,0],"type","time","label","Give in a time"],["loc",[null,[59,4],[59,68]]],0,0],["content","theTime",["loc",[null,[60,14],[60,25]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theColor",["loc",[null,[66,24],[66,32]]],0,0,0,0]],[],[],0,0],"type","color","label","Give in a color"],["loc",[null,[66,4],[66,71]]],0,0],["content","theColor",["loc",[null,[67,15],[67,27]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theEmail",["loc",[null,[73,24],[73,32]]],0,0,0,0]],[],[],0,0],"type","email","label","Give in a email"],["loc",[null,[73,4],[73,71]]],0,0],["content","theEmail",["loc",[null,[74,15],[74,27]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theMonth",["loc",[null,[80,24],[80,32]]],0,0,0,0]],[],[],0,0],"type","month","label","Give in a month"],["loc",[null,[80,4],[80,71]]],0,0],["content","theMonth",["loc",[null,[81,15],[81,27]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theWeek",["loc",[null,[87,24],[87,31]]],0,0,0,0]],[],[],0,0],"type","week","label","Select a week"],["loc",[null,[87,4],[87,67]]],0,0],["content","theWeek",["loc",[null,[88,14],[88,25]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theTel",["loc",[null,[94,24],[94,30]]],0,0,0,0]],[],[],0,0],"type","tel","label","Select a telephone number"],["loc",[null,[94,4],[94,77]]],0,0],["content","theTel",["loc",[null,[95,22],[95,32]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theFile",["loc",[null,[101,24],[101,31]]],0,0,0,0]],[],[],0,0],"type","file","label","Select a file"],["loc",[null,[101,4],[101,67]]],0,0],["content","theFile",["loc",[null,[102,14],[102,25]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","thePassword",["loc",[null,[108,24],[108,35]]],0,0,0,0]],[],[],0,0],"type","password","label","Type your password"],["loc",[null,[108,4],[108,80]]],0,0],["content","thePassword",["loc",[null,[109,18],[109,33]]],0,0,0,0],["inline","paper-input",[],["value",["subexpr","@mut",[["get","theSearchQuery",["loc",[null,[115,24],[115,38]]],0,0,0,0]],[],[],0,0],"type","search","label","Do a search"],["loc",[null,[115,4],[115,74]]],0,0],["content","theSearchQuery",["loc",[null,[116,22],[116,40]]],0,0,0,0],["inline","paper-input",[],["tagName","paper-textarea","label","This is a multiline textarea!","value",["subexpr","@mut",[["get","myTextArea",["loc",[null,[123,24],[123,34]]],0,0,0,0]],[],[],0,0]],["loc",[null,[122,4],[123,36]]],0,0],["content","myTextArea",["loc",[null,[125,6],[125,20]]],0,0,0,0]],locals:[],templates:[e,t,a,n]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e.default.$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-polymer-paper",version:"0.0.0+c6aa578d"});