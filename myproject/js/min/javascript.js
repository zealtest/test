$(function(){$("#dropdown #dropdown-toggle").on("click",function(){$(this).next().slideToggle()})}),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(function(p){"use strict";var h="animsition",v={init:function(o){o=p.extend({inClass:"fade-in",outClass:"fade-out",inDuration:1500,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:"",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(t){window.location.href=t}},o),v.settings={timer:!1,data:{inClass:"animsition-in-class",inDuration:"animsition-in-duration",outClass:"animsition-out-class",outDuration:"animsition-out-duration",overlay:"animsition-overlay"},events:{inStart:"animsition.inStart",inEnd:"animsition.inEnd",outStart:"animsition.outStart",outEnd:"animsition.outEnd"}};var t=v.supportCheck.call(this,o);return t||!(0<o.browser.length)||t&&this.length?(v.optionCheck.call(this,o)&&p("."+o.overlayClass).length<=0&&v.addOverlay.call(this,o),o.loading&&p("."+o.loadingClass).length<=0&&v.addLoading.call(this,o),this.each(function(){var i=this,t=p(this),n=p(window),e=p(document);t.data(h)||(o=p.extend({},o),t.data(h,{options:o}),o.timeout&&v.addTimer.call(i),o.onLoadEvent&&n.on("load."+h,function(){v.settings.timer&&clearTimeout(v.settings.timer),v.in.call(i)}),n.on("pageshow."+h,function(t){t.originalEvent.persisted&&v.in.call(i)}),n.on("unload."+h,function(){}),e.on("click."+h,o.linkElement,function(t){t.preventDefault();var n=p(this),e=n.attr("href");2===t.which||t.metaKey||t.shiftKey||-1!==navigator.platform.toUpperCase().indexOf("WIN")&&t.ctrlKey?window.open(e,"_blank"):v.out.call(i,n,e)}))})):("console"in window||(window.console={},window.console.log=function(t){return t}),this.length||console.log("Animsition: Element does not exist on page."),t||console.log("Animsition: Does not support this browser."),v.destroy.call(this))},addOverlay:function(t){p(t.overlayParentElement).prepend('<div class="'+t.overlayClass+'"></div>')},addLoading:function(t){p(t.loadingParentElement).append('<div class="'+t.loadingClass+'">'+t.loadingInner+"</div>")},removeLoading:function(){var t=p(this).data(h).options;p(t.loadingParentElement).children("."+t.loadingClass).fadeOut().remove()},addTimer:function(){var t=this,n=p(this).data(h).options;v.settings.timer=setTimeout(function(){v.in.call(t),p(window).off("load."+h)},n.timeoutCountdown)},supportCheck:function(t){var n=p(this),e=t.browser,i=e.length,o=!1;0===i&&(o=!0);for(var a=0;a<i;a++)if("string"==typeof n.css(e[a])){o=!0;break}return o},optionCheck:function(t){var n=p(this);return!(!t.overlay&&!n.data(v.settings.data.overlay))},animationCheck:function(t,n,e){var i=p(this).data(h).options,o=typeof t,a=!n&&"number"===o,s=n&&"string"===o&&0<t.length;return a||s?t=t:n&&e?t=i.inClass:!n&&e?t=i.inDuration:n&&!e?t=i.outClass:n||e||(t=i.outDuration),t},in:function(){var t=this,n=p(this),e=n.data(h).options,i=n.data(v.settings.data.inDuration),o=n.data(v.settings.data.inClass),a=v.animationCheck.call(t,i,!1,!0),s=v.animationCheck.call(t,o,!0,!0),r=v.optionCheck.call(t,e),l=n.data(h).outClass;e.loading&&v.removeLoading.call(t),l&&n.removeClass(l),r?v.inOverlay.call(t,s,a):v.inDefault.call(t,s,a)},inDefault:function(t,n){var e=p(this);e.css({"animation-duration":n+"ms"}).addClass(t).trigger(v.settings.events.inStart).animateCallback(function(){e.removeClass(t).css({opacity:1}).trigger(v.settings.events.inEnd)})},inOverlay:function(t,n){var e=p(this),i=e.data(h).options;e.css({opacity:1}).trigger(v.settings.events.inStart),p(i.overlayParentElement).children("."+i.overlayClass).css({"animation-duration":n+"ms"}).addClass(t).animateCallback(function(){e.trigger(v.settings.events.inEnd)})},out:function(t,n){var e=this,i=p(this),o=i.data(h).options,a=t.data(v.settings.data.outClass),s=i.data(v.settings.data.outClass),r=t.data(v.settings.data.outDuration),l=i.data(v.settings.data.outDuration),d=a||s,u=r||l,c=v.animationCheck.call(e,d,!0,!1),f=v.animationCheck.call(e,u,!1,!1),m=v.optionCheck.call(e,o);i.data(h).outClass=c,m?v.outOverlay.call(e,c,f,n):v.outDefault.call(e,c,f,n)},outDefault:function(t,n,e){var i=p(this),o=i.data(h).options;i.css({"animation-duration":n+1+"ms"}).addClass(t).trigger(v.settings.events.outStart).animateCallback(function(){i.trigger(v.settings.events.outEnd),o.transition(e)})},outOverlay:function(t,n,e){var i=p(this),o=i.data(h).options,a=i.data(v.settings.data.inClass),s=v.animationCheck.call(this,a,!0,!0);p(o.overlayParentElement).children("."+o.overlayClass).css({"animation-duration":n+1+"ms"}).removeClass(s).addClass(t).trigger(v.settings.events.outStart).animateCallback(function(){i.trigger(v.settings.events.outEnd),o.transition(e)})},destroy:function(){return this.each(function(){var t=p(this);p(window).off("."+h),t.css({opacity:1}).removeData(h)})}};p.fn.animateCallback=function(n){var e="animationend webkitAnimationEnd";return this.each(function(){var t=p(this);t.on(e,function(){return t.off(e),n.call(this)})})},p.fn.animsition=function(t){return v[t]?v[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void p.error("Method "+t+" does not exist on jQuery."+h):v.init.apply(this,arguments)}}),$(document).ready(function(){$(".animsition").animsition({inClass:"fade-in",outClass:"fade-out",linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",unSupportCss:["animation-duration","-webkit-animation-duration","-o-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body"})}),function(f,m,p){function h(t,n){return typeof t===n}function v(){return"function"!=typeof m.createElement?m.createElement(arguments[0]):C?m.createElementNS.call(m,"http://www.w3.org/2000/svg",arguments[0]):m.createElement.apply(m,arguments)}function r(t,n){return function(){return t.apply(n,arguments)}}function g(t){return t.replace(/([A-Z])/g,function(t,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function w(t,n,e,i){var o,a,s,r,l,d="modernizr",u=v("div"),c=((l=m.body)||((l=v(C?"svg":"body")).fake=!0),l);if(parseInt(e,10))for(;e--;)(s=v("div")).id=i?i[e]:d+(e+1),u.appendChild(s);return(o=v("style")).type="text/css",o.id="s"+d,(c.fake?c:u).appendChild(o),c.appendChild(u),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(m.createTextNode(t)),u.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",r=y.style.overflow,y.style.overflow="hidden",y.appendChild(c)),a=n(u,t),c.fake?(c.parentNode.removeChild(c),y.style.overflow=r,y.offsetHeight):u.parentNode.removeChild(u),!!a}function l(t,n,e,i){function o(){s&&(delete E.style,delete E.modElem)}if(i=!h(i,"undefined")&&i,!h(e,"undefined")){var a=function(t,n){var e=t.length;if("CSS"in f&&"supports"in f.CSS){for(;e--;)if(f.CSS.supports(g(t[e]),n))return!0;return!1}if("CSSSupportsRule"in f){for(var i=[];e--;)i.push("("+g(t[e])+":"+n+")");return w("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",function(t){return"absolute"==getComputedStyle(t,null).position})}return p}(t,e);if(!h(a,"undefined"))return a}for(var s,r,l,d,u,c=["modernizr","tspan","samp"];!E.style&&c.length;)s=!0,E.modElem=v(c.shift()),E.style=E.modElem.style;for(l=t.length,r=0;r<l;r++)if(d=t[r],u=E.style[d],!!~(""+d).indexOf("-")&&(d=d.replace(/([a-z])-([a-z])/g,function(t,n,e){return n+e.toUpperCase()}).replace(/^-/,"")),E.style[d]!==p){if(i||h(e,"undefined"))return o(),"pfx"!=n||d;try{E.style[d]=e}catch(t){}if(E.style[d]!=u)return o(),"pfx"!=n||d}return o(),!1}function i(t,n,e,i,o){var a=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+k.join(a+" ")+a).split(" ");return h(n,"string")||h(n,"undefined")?l(s,n,i,o):function(t,n,e){var i;for(var o in t)if(t[o]in n)return!1===e?t[o]:h(i=n[t[o]],"function")?r(i,e||n):i;return!1}(s=(t+" "+b.join(a+" ")+a).split(" "),n,e)}function t(t,n,e){return i(t,p,p,n,e)}var d=[],u=[],n={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(t,n){var e=this;setTimeout(function(){n(e[t])},0)},addTest:function(t,n,e){u.push({name:t,fn:n,options:e})},addAsyncTest:function(t){u.push({name:null,fn:t})}},c=function(){};c.prototype=n,c=new c;var y=m.documentElement,C="svg"===y.nodeName.toLowerCase(),e="Moz O ms Webkit",k=n._config.usePrefixes?e.split(" "):[];n._cssomPrefixes=k;var b=n._config.usePrefixes?e.toLowerCase().split(" "):[];n._domPrefixes=b;var o={elem:v("modernizr")};c._q.push(function(){delete o.elem});var E={style:o.elem.style};c._q.unshift(function(){delete E.style}),n.testAllProps=i,n.testAllProps=t,c.addTest("csstransitions",t("transition","all",!0)),function(){var t,n,e,i,o,a;for(var s in u)if(u.hasOwnProperty(s)){if(t=[],(n=u[s]).name&&(t.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(e=0;e<n.options.aliases.length;e++)t.push(n.options.aliases[e].toLowerCase());for(i=h(n.fn,"function")?n.fn():n.fn,o=0;o<t.length;o++)1===(a=t[o].split(".")).length?c[a[0]]=i:(!c[a[0]]||c[a[0]]instanceof Boolean||(c[a[0]]=new Boolean(c[a[0]])),c[a[0]][a[1]]=i),d.push((i?"":"no-")+a.join("-"))}}(),function(t){var n=y.className,e=c._config.classPrefix||"";if(C&&(n=n.baseVal),c._config.enableJSClass){var i=new RegExp("(^|\\s)"+e+"no-js(\\s|$)");n=n.replace(i,"$1"+e+"js$2")}c._config.enableClasses&&(n+=" "+e+t.join(" "+e),C?y.className.baseVal=n:y.className=n)}(d),delete n.addTest,delete n.addAsyncTest;for(var a=0;a<c._q.length;a++)c._q[a]();f.Modernizr=c}(window,document),jQuery(document).ready(function(i){function t(t){this.element=t,this.mainNavigation=this.element.find(".main-nav"),this.mainNavigationItems=this.mainNavigation.find(".has-dropdown"),this.dropdownList=this.element.find(".dropdown-list"),this.dropdownWrappers=this.dropdownList.find(".dropdown"),this.dropdownItems=this.dropdownList.find(".content"),this.dropdownBg=this.dropdownList.find(".bg-layer"),this.mq=this.checkMq(),this.bindEvents()}t.prototype.checkMq=function(){return window.getComputedStyle(this.element.get(0),"::before").getPropertyValue("content").replace(/'/g,"").replace(/"/g,"").split(", ")},t.prototype.bindEvents=function(){var e=this;this.mainNavigationItems.mouseenter(function(t){e.showDropdown(i(this))}).mouseleave(function(){setTimeout(function(){0==e.mainNavigation.find(".has-dropdown:hover").length&&0==e.element.find(".dropdown-list:hover").length&&e.hideDropdown()},50)}),this.dropdownList.mouseleave(function(){setTimeout(function(){0==e.mainNavigation.find(".has-dropdown:hover").length&&0==e.element.find(".dropdown-list:hover").length&&e.hideDropdown()},50)}),this.mainNavigationItems.on("touchstart",function(t){var n=e.dropdownList.find("#"+i(this).data("content"));e.element.hasClass("is-dropdown-visible")&&n.hasClass("active")||(t.preventDefault(),e.showDropdown(i(this)))}),this.element.on("click",".nav-trigger",function(t){t.preventDefault(),e.element.toggleClass("nav-open")})},t.prototype.showDropdown=function(t){if(this.mq=this.checkMq(),"desktop"==this.mq){var n=this,e=this.dropdownList.find("#"+t.data("content")),i=e.innerHeight(),o=e.children(".content").innerWidth(),a=t.offset().left+t.innerWidth()/2-o/2;this.updateDropdown(e,parseInt(i),o,parseInt(a)),this.element.find(".active").removeClass("active"),e.addClass("active").removeClass("move-left move-right").prevAll().addClass("move-left").end().nextAll().addClass("move-right"),t.addClass("active"),this.element.hasClass("is-dropdown-visible")||setTimeout(function(){n.element.addClass("is-dropdown-visible")},10)}},t.prototype.updateDropdown=function(t,n,e,i){this.dropdownList.css({"-moz-transform":"translateX("+i+"px)","-webkit-transform":"translateX("+i+"px)","-ms-transform":"translateX("+i+"px)","-o-transform":"translateX("+i+"px)",transform:"translateX("+i+"px)",width:e+"px",height:n+"px"}),this.dropdownBg.css({"-moz-transform":"scaleX("+e+") scaleY("+n+")","-webkit-transform":"scaleX("+e+") scaleY("+n+")","-ms-transform":"scaleX("+e+") scaleY("+n+")","-o-transform":"scaleX("+e+") scaleY("+n+")",transform:"scaleX("+e+") scaleY("+n+")"})},t.prototype.hideDropdown=function(){this.mq=this.checkMq(),"desktop"==this.mq&&this.element.removeClass("is-dropdown-visible").find(".active").removeClass("active").end().find(".move-left").removeClass("move-left").end().find(".move-right").removeClass("move-right")},t.prototype.resetDropdown=function(){this.mq=this.checkMq(),"mobile"==this.mq&&this.dropdownList.removeAttr("style")};var n=[];if(0<i(".header").length){i(".header").each(function(){n.push(new t(i(this)))});var e=!1;function o(){n.forEach(function(t){t.resetDropdown()}),e=!1}o(),i(window).on("resize",function(){e||(e=!0,window.requestAnimationFrame?window.requestAnimationFrame(o):setTimeout(o,300))})}});