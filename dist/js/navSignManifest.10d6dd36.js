(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["navSignManifest"],{"0dc4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-btn",{attrs:{flat:""},on:{click:function(e){t.showDialog=!0}}},[i("span",{staticClass:"mr-2"},[t._v("Firmar el manifiesto")]),i("v-icon",[t._v("create")])],1),i("v-dialog",{attrs:{scrollable:"",persistent:"","max-width":t.fullScreen?"false":"400px",transition:"dialog-bottom-transition"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[i("v-card",[i("v-card-text",[i("v-form",{model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[i("v-text-field",{attrs:{type:"text",label:"Nombre completo",hint:"Introduce tus nombres y apellidos",rules:t.nameRules},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"===typeof e?e.trim():e)},expression:"form.name"}}),i("v-text-field",{attrs:{type:"text",label:"Título Profesional",hint:"Introduce tu titulo profesional",rules:t.titleRules},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title","string"===typeof e?e.trim():e)},expression:"form.title"}}),i("v-text-field",{attrs:{type:"text",label:"URL de contacto",hint:"github, blog, sitio personal, etc",rules:t.urlRules},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url","string"===typeof e?e.trim():e)},expression:"form.url"}})],1)],1),i("v-card-actions",[i("v-btn",{attrs:{flat:""},on:{click:function(e){t.showDialog=!1}}},[t._v("cancelar")]),i("v-spacer"),i("v-btn",{attrs:{color:"secondary",loading:t.loading,disabled:!t.validForm},on:{click:function(e){return t.submit()}}},[i("span",{staticClass:"mr-2 black--text"},[t._v("Firmar")]),i("v-icon",[t._v("create")])],1)],1)],1)],1),i("v-snackbar",{attrs:{top:"",timeout:6e3,color:t.sysMessages.type},model:{value:t.showConfirm,callback:function(e){t.showConfirm=e},expression:"showConfirm"}},[t._v("\n    "+t._s(t.sysMessages.message)+"\n  ")])],1)},o=[],a=i("cebc"),r=i("2f62"),s={name:"SignManifest",beforeMount:function(){this.onResize()},data:function(){return{loading:!1,fullScreen:!1,validForm:!1,showConfirm:!1,showDialog:!1,sysMessages:{type:"warning",message:""},form:{name:"",title:"",url:""},nameRules:[function(t){return!!t||"Este campo es obligatorio"},function(t){return t.length>0||"No puedes guardar un campo vacio"},function(t){return t.length<60||"El nombre no puede exceder los 60 caracteres"}],titleRules:[function(t){return!!t||"Este campo es obligatorio"},function(t){return t.length>0||"No puedes guardar un campo vacio"},function(t){return t.length<60||"El titulo no puede exceder los 60 caracteres"}],urlRules:[function(t){return!!t||"Este campo es obligatorio"},function(t){return t.length>0||"No puedes guardar un campo vacio"},function(t){return t.length<600||"El enlace no puede exceder los 600 caracteres"}]}},methods:Object(a["a"])({},Object(r["b"])(["signManifest"]),{submit:function(){var t=this;this.loading=!0,this.signManifest(this.form).then(function(){t.sysMessages.type="info",t.sysMessages.message="Gracias por firmar el manifiesto!",t.showDialog=!1,t.showConfirm=!0,t.loading=!1})},onResize:function(){window.innerWidth>=768?this.fullScreen=!1:this.fullScreen=!0}})},l=s,c=i("2877"),u=i("6544"),d=i.n(u),h=i("8336"),v=(i("4c94"),i("d0e7"),i("b64a")),f=i("2b0e");function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=f["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){return this.computedElevation?m({},"elevation-"+this.computedElevation,!0):{}}}}),g=i("23bf"),y=i("6a18"),b=i("58df"),w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},x=Object(b["a"])(v["a"],p,g["a"],y["a"]).extend({name:"v-sheet",props:{tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return w({"v-sheet":!0,"v-sheet--tile":this.tile},this.themeClasses,this.elevationClasses)},styles:function(){return this.measurableStyles}},render:function(t){var e={class:this.classes,style:this.styles,on:this.$listeners};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}}),k=x,O=i("0d01"),$=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},A=Object(b["a"])(O["a"],k).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean},computed:{classes:function(){return $({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover},k.options.computed.classes.call(this))},styles:function(){var t=$({},k.options.computed.styles.call(this));return this.img&&(t.background='url("'+this.img+'") center center / cover no-repeat'),t}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.tag,n=e.data;return n.style=this.styles,t(i,this.setBackgroundColor(this.color,n),this.$slots.default)}}),C=i("80d2"),E=i("adda"),S=i("d9bd"),_=(E["a"].extend({name:"v-card-media",mounted:function(){Object(S["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),f["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,n=e.props,o=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),n.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,o)}}),Object(C["d"])("v-card__actions")),T=Object(C["d"])("v-card__text");i("6ec0");function D(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function N(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];n.isActive&&n.isDependent?e.push(n):e.push.apply(e,D(N(n.$children)))}return e}var B=Object(b["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?N(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,D(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay),t.push.apply(t,D(this.getOpenDependentElements())),t}}}),j=i("3e79"),I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function V(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function L(t){var e="undefined"===typeof t?"undefined":I(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var M={name:"detachable",mixins:[j["a"]],props:{attach:{type:null,default:!1,validator:L},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},beforeMount:function(){var t=this;this.$nextTick(function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach(function(e){e.elm&&t.$el.parentNode.insertBefore(e.elm,t.$el)})}})},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(function(t){t.elm&&t.elm.parentNode.removeChild(t.elm)})}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId;return t&&V({},t,"")},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(S["c"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}}},P=(i("f7dc"),f["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean},data:function(){return{overlay:null,overlayOffset:0,overlayTimeout:void 0,overlayTransitionDuration:650}},watch:{hideOverlay:function(t){t?this.removeOverlay():this.genOverlay()}},beforeDestroy:function(){this.removeOverlay()},methods:{genOverlay:function(){var t=this;if(!this.isActive||this.hideOverlay||this.isActive&&this.overlayTimeout||this.overlay)return clearTimeout(this.overlayTimeout),this.overlay&&this.overlay.classList.add("v-overlay--active");this.overlay=document.createElement("div"),this.overlay.className="v-overlay",this.absolute&&(this.overlay.className+=" v-overlay--absolute"),this.hideScroll();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");return e&&e.insertBefore(this.overlay,e.firstChild),this.overlay.clientHeight,requestAnimationFrame(function(){t.overlay&&(t.overlay.className+=" v-overlay--active",void 0!==t.activeZIndex&&(t.overlay.style.zIndex=String(t.activeZIndex-1)))}),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!this.overlay)return e&&this.showScroll();this.overlay.classList.remove("v-overlay--active"),this.overlayTimeout=window.setTimeout(function(){try{t.overlay&&t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.overlay=null,e&&t.showScroll()}catch(i){console.log(i)}clearTimeout(t.overlayTimeout),t.overlayTimeout=void 0},this.overlayTransitionDuration)},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[C["l"].up,C["l"].pageup],i=[C["l"].down,C["l"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),i=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,o=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(o,n))||this.shouldScroll(n,i)}for(var a=0;a<e.length;a++){var r=e[a];if(r===document)return!0;if(r===document.documentElement)return!0;if(r===this.$refs.content)return!0;if(this.hasScrollbar(r))return this.shouldScroll(r,i)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],i=t.target;while(i){if(e.push(i),"HTML"===i.tagName)return e.push(document),e.push(window),e;i=i.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(C["a"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})),F=f["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){var e=this;this.originalValue=t,setTimeout(function(){e.isActive=!1})}}});function Z(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var R=f["a"].extend().extend({name:"stackable",data:function(){return{stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(C["j"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(C["j"])(e)],n=[].concat(Z(document.getElementsByClassName(this.stackClass))),o=0;o<n.length;o++)t.includes(n[o])||i.push(Object(C["j"])(n[o]));return Math.max.apply(Math,i)}}}),z=i("98a1");function q(){return!1}function W(t,e,i){i.args=i.args||{};var n=i.args.closeConditional||q;if(t&&!1!==n(t)&&!("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)){var o=(i.args.include||function(){return[]})();o.push(e),!o.some(function(e){return e.contains(t.target)})&&setTimeout(function(){n(t)&&i.value&&i.value(t)},0)}}var H={inserted:function(t,e){var i=function(i){return W(i,t,e)},n=document.querySelector("[data-app]")||document.body;n.addEventListener("click",i,!0),t._clickOutside=i},unbind:function(t){if(t._clickOutside){var e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}}},Y=Object(b["a"])(y["a"]).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:y["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find(function(t){return!t.isComment&&" "!==t.text})}}),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function J(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var K={name:"v-dialog",directives:{ClickOutside:H},mixins:[B,M,P,F,R,z["a"]],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return t={},J(t,("v-dialog "+this.contentClass).trim(),!0),J(t,"v-dialog--active",this.isActive),J(t,"v-dialog--persistent",this.persistent),J(t,"v-dialog--fullscreen",this.fullscreen),J(t,"v-dialog--scrollable",this.scrollable),J(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===Object(C["i"])(this,"activator",!0)&&Object(S["a"])("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(!this.isActive||this.$refs.content.contains(t.target))&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):P.options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onKeydown:function(t){if(t.keyCode===C["l"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick(function(){return e&&e.focus()})}this.$emit("keydown",t)},onFocusin:function(t){var e=event,i=e.target;if(![document,this.$refs.content].includes(i)&&!this.$refs.content.contains(i)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(function(t){return t.contains(i)})){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}},getActivator:function(t){if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t&&(this.activatedBy=t.currentTarget||t.target),this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,i=e&&e.elm;if(i)return i}return null},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.getActivator(e),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===Object(C["i"])(this,"activator")){var i=this.$scopedSlots.activator({on:e});return this.activatorNode=i,i}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},ref:"activator",on:e},this.$slots.activator)}},render:function(t){var e=this,i=[],n={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(n.style={maxWidth:"none"===this.maxWidth?void 0:Object(C["b"])(this.maxWidth),width:"auto"===this.width?void 0:Object(C["b"])(this.width)}),i.push(this.genActivator());var o=t("div",n,this.showLazyContent(this.$slots.default));return this.transition&&(o=t("transition",{props:{name:this.transition,origin:this.origin}},[o])),i.push(t("div",{class:this.contentClasses,attrs:U({tabIndex:"-1"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(Y,{props:{root:!0,light:this.light,dark:this.dark}},[o])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},i)}},G=(i("26e5"),i("94ab")),X={name:"v-form",mixins:[Object(G["b"])("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,i=function(t){return t.$watch("hasError",function(i){e.$set(e.errorBag,t._uid,i)},{immediate:!0})},n={_uid:t._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",function(o){o&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=i(t)))}):n.valid=i(t),n},validate:function(){var t=this.inputs.filter(function(t){return!t.validate(!0)}).length;return!t},reset:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,e=this.inputs.length;e--;)this.inputs[e].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(t){var e=this.watchInput(t);this.inputs.push(t),this.watchers.push(e)},unregister:function(t){var e=this.inputs.find(function(e){return e._uid===t._uid});if(e){var i=this.watchers.find(function(t){return t._uid===e._uid});i.valid&&i.valid(),i.shouldValidate&&i.shouldValidate(),this.watchers=this.watchers.filter(function(t){return t._uid!==e._uid}),this.inputs=this.inputs.filter(function(t){return t._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}},Q=i("132d"),tt=i("2db4"),et=i("9910"),it=i("2677"),nt=Object(c["a"])(l,n,o,!1,null,null,null);e["default"]=nt.exports;d()(nt,{VBtn:h["a"],VCard:A,VCardActions:_,VCardText:T,VDialog:K,VForm:X,VIcon:Q["a"],VSnackbar:tt["a"],VSpacer:et["a"],VTextField:it["a"]})},"26e5":function(t,e,i){},"4c94":function(t,e,i){},"6ec0":function(t,e,i){},d0e7:function(t,e,i){},f7dc:function(t,e,i){}}]);
//# sourceMappingURL=navSignManifest.10d6dd36.js.map