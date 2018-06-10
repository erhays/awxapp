module.exports=__NEXT_REGISTER_PAGE("/_app",function(){var e=webpackJsonp([1],{193:function(e,t,r){e.exports=r(194)},194:function(e,t,r){e.exports=r(195)},195:function(e,t,r){e.exports=r(196)},196:function(e,t,r){"use strict";var n=r(21);var a=r(4);Object.defineProperty(t,"__esModule",{value:true});t.createUrl=k;t.Container=t.default=void 0;var u=a(r(40));var o=a(r(42));var l=a(r(197));var i=a(r(36));var c=a(r(31));var p=a(r(9));var f=a(r(10));var s=a(r(32));var d=a(r(33));var v=n(r(13));var h=a(r(44));var y=a(r(95));var m=r(20);var b=r(67);var _=function(e){(0,d.default)(t,e);function t(){(0,p.default)(this,t);return(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"getChildContext",value:function e(){var t=this.props.headManager;return{headManager:t,router:(0,b.makePublicRouterInstance)(this.props.router),_containerProps:(0,i.default)({},this.props)}}},{key:"componentDidCatch",value:function e(t,r){t.info=r;true;window.next.renderError({err:t})}},{key:"render",value:function e(){var t=this.props,r=t.router,n=t.Component,a=t.pageProps;var u=k(r);return v.default.createElement(g,null,v.default.createElement(n,(0,l.default)({},a,{url:u})))}}],[{key:"getInitialProps",value:function(){var e=(0,o.default)(u.default.mark(function e(t){var r,n,a,o;return u.default.wrap(function e(u){while(1)switch(u.prev=u.next){case 0:r=t.Component,n=t.router,a=t.ctx;u.next=3;return(0,m.loadGetInitialProps)(r,a);case 3:o=u.sent;return u.abrupt("return",{pageProps:o});case 5:case"end":return u.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(v.Component);t.default=_;Object.defineProperty(_,"displayName",{configurable:true,enumerable:true,writable:true,value:"App"});Object.defineProperty(_,"childContextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:h.default.any,headManager:h.default.object,router:h.default.object}});var g=function(e){(0,d.default)(t,e);function t(){(0,p.default)(this,t);return(0,s.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,f.default)(t,[{key:"componentDidMount",value:function e(){this.scrollToHash()}},{key:"componentDidUpdate",value:function e(){this.scrollToHash()}},{key:"scrollToHash",value:function e(){var t=this.props.hash;if(!t)return;var r=document.getElementById(t);if(!r)return;setTimeout(function(){return r.scrollIntoView()},0)}},{key:"shouldComponentUpdate",value:function e(t){return!(0,y.default)(this.props,t)}},{key:"render",value:function e(){var t=this.props.children;return v.default.createElement(v.default.Fragment,null,t)}}]);return t}(v.Component);t.Container=g;Object.defineProperty(g,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:h.default.any}});var P=(0,m.execOnce)(function(){false});function k(e){var t=e.pathname,r=e.asPath,n=e.query;return{get query(){P();return n},get pathname(){P();return t},get asPath(){P();return r},back:function t(){P();e.back()},push:function t(r,n){P();return e.push(r,n)},pushTo:function t(r,n){P();var a=n?r:null;var u=n||r;return e.push(a,u)},replace:function t(r,n){P();return e.replace(r,n)},replaceTo:function t(r,n){P();var a=n?r:null;var u=n||r;return e.replace(a,u)}}}},197:function(e,t,r){var n=r(69);function a(){e.exports=a=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return a.apply(this,arguments)}e.exports=a}},[193]);return{page:e.default}});