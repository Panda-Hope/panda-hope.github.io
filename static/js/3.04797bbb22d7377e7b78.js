webpackJsonp([3],{118:function(t,i,e){e(201);var n=e(35)(e(176),e(223),null,null);t.exports=n.exports},122:function(t,i,e){"use strict";function n(t){var i="",e=t.url,n="jsonp"+(new Date).getTime(),s=u()({},t.params,{jsonpCallback:n});for(var a in s)i&&(i+="&"),i+=a+"="+encodeURIComponent(s[a]);return{url:e+"?"+i,jsonpCallback:n}}function s(t,i){var e=t.url,n=t.jsonpCallback;window[n]=function(t){window[n]=void 0,document.body.removeChild(s),i(t)};var s=document.createElement("script");s.src=e,document.body.appendChild(s)}function a(t,i){return s(n("string"==typeof t?d[t]:(d[t.name].params=o()({},d[t.name].params,t.params),d[t.name])),i)}i.a=s,i.b=a;var r=e(58),o=e.n(r),c=e(124),h=e.n(c),l=e(19),u=e.n(l),p={g_tk:1604785682,uin:494873674,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,_:(new Date).getTime()},d={topList:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",params:p},rankList:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",params:u()({},p,{type:"top",page:"detail",tpl:3})},recommend:{url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",params:u()({},p,h()({pic:500,json:1,type:1,utf8:1,nosign:1,onlysong:0},"nosign",1))},indexMsg:{url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",params:u()({},p)},hotkey:{url:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",params:u()({},p)},search:{url:"https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg",params:u()({},p,{is_xml:0})},singerlist:{url:"https://c.y.qq.com/v8/fcg-bin/v8.fcg",params:u()({},p,{page:"list",channel:"singer",pagesize:100,hostUin:0,needNewCode:0,pagenum:1})},singer:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",params:u()({},p,{begin:0,num:30,order:"listen",from:"h5",songstatus:1})}}},123:function(t,i,e){t.exports={default:e(125),__esModule:!0}},124:function(t,i,e){"use strict";i.__esModule=!0;var n=e(123),s=function(t){return t&&t.__esModule?t:{default:t}}(n);i.default=function(t,i,e){return i in t?(0,s.default)(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}},125:function(t,i,e){e(126);var n=e(6).Object;t.exports=function(t,i,e){return n.defineProperty(t,i,e)}},126:function(t,i,e){var n=e(15);n(n.S+n.F*!e(7),"Object",{defineProperty:e(3).f})},127:function(t,i,e){t.exports=e.p+"static/img/play.33f05e7.png"},128:function(t,i){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},129:function(t,i,e){!function(){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()});for(var t=["webkit","moz"],i=0;i<t.length&&!window.requestAnimationFrame;++i){var e=t[i];window.requestAnimationFrame=window[e+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(t){var i=Date.now(),e=Math.max(n+16,i);return setTimeout(function(){t(n=e)},e-i)},window.cancelAnimationFrame=clearTimeout}}(),function(){function i(t,i,e){t.addEventListener(i,e,!1)}function e(t){return Math.sqrt(1-Math.pow(t-1,2))}function n(t){return 1-Math.sqrt(1-t*t)}function s(t,i){for(var e in i)if(i[e].test(t[e]))return!0;return!1}var a=function(t){this.element="string"==typeof t.touch?document.querySelector(t.touch):t.touch,this.target=this._getValue(t.target,this.element),this.vertical=this._getValue(t.vertical,!0),this.property=t.property,this.tickID=0,this.initialValue=this._getValue(t.initialValue,this.target[this.property]),this.target[this.property]=this.initialValue,this.fixed=this._getValue(t.fixed,!1),this.sensitivity=this._getValue(t.sensitivity,1),this.moveFactor=this._getValue(t.moveFactor,1),this.factor=this._getValue(t.factor,1),this.outFactor=this._getValue(t.outFactor,.3),this.min=t.min,this.max=t.max,this.deceleration=6e-4,this.maxRegion=this._getValue(t.maxRegion,600),this.springMaxRegion=this._getValue(t.springMaxRegion,60),this.maxSpeed=t.maxSpeed,this.hasMaxSpeed=!(void 0===this.maxSpeed),this.lockDirection=this._getValue(t.lockDirection,!0);var e=function(){};if(this.change=t.change||e,this.touchEnd=t.touchEnd||e,this.touchStart=t.touchStart||e,this.touchMove=t.touchMove||e,this.touchCancel=t.touchCancel||e,this.reboundEnd=t.reboundEnd||e,this.animationEnd=t.animationEnd||e,this.correctionEnd=t.correctionEnd||e,this.tap=t.tap||e,this.pressMove=t.pressMove||e,this.preventDefault=this._getValue(t.preventDefault,!0),this.preventDefaultException={tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},this.hasMin=!(void 0===this.min),this.hasMax=!(void 0===this.max),this.hasMin&&this.hasMax&&this.min>this.max)throw"the min value can't be greater than the max value.";this.isTouchStart=!1,this.step=t.step,this.inertia=this._getValue(t.inertia,!0),this._calculateIndex(),this.eventTarget=window,t.bindSelf&&(this.eventTarget=this.element),this._moveHandler=this._move.bind(this),i(this.element,"touchstart",this._start.bind(this)),i(this.eventTarget,"touchend",this._end.bind(this)),i(this.eventTarget,"touchcancel",this._cancel.bind(this)),this.eventTarget.addEventListener("touchmove",this._moveHandler,{passive:!1,capture:!1}),this.x1=this.x2=this.y1=this.y2=null};a.prototype={_getValue:function(t,i){return void 0===t?i:t},_start:function(t){this.isTouchStart=!0,this.touchStart.call(this,t,this.target[this.property]),cancelAnimationFrame(this.tickID),this._calculateIndex(),this.startTime=(new Date).getTime(),this.x1=this.preX=t.touches[0].pageX,this.y1=this.preY=t.touches[0].pageY,this.start=this.vertical?this.preY:this.preX,this._firstTouchMove=!0,this._preventMove=!1},_move:function(t){if(this.isTouchStart){var i=t.touches.length,e=t.touches[0].pageX,n=t.touches[0].pageY;if(this._firstTouchMove&&this.lockDirection){var a=Math.abs(e-this.x1)-Math.abs(n-this.y1);a>0&&this.vertical?this._preventMove=!0:a<0&&!this.vertical&&(this._preventMove=!0),this._firstTouchMove=!1}if(!this._preventMove){var r=(this.vertical?n-this.preY:e-this.preX)*this.sensitivity,o=this.moveFactor;this.hasMax&&this.target[this.property]>this.max&&r>0?o=this.outFactor:this.hasMin&&this.target[this.property]<this.min&&r<0&&(o=this.outFactor),r*=o,this.preX=e,this.preY=n,this.fixed||(this.target[this.property]+=r),this.change.call(this,this.target[this.property]);var c=(new Date).getTime();c-this.startTime>300&&(this.startTime=c,this.start=this.vertical?this.preY:this.preX),this.touchMove.call(this,t,this.target[this.property])}this.preventDefault&&!s(t.target,this.preventDefaultException)&&t.preventDefault(),1===i&&(null!==this.x2?(t.deltaX=e-this.x2,t.deltaY=n-this.y2):(t.deltaX=0,t.deltaY=0),this.pressMove.call(this,t,this.target[this.property])),this.x2=e,this.y2=n}},_cancel:function(t){var i=this.target[this.property];this.touchCancel.call(this,t,i),this._end(t)},to:function(t,i,n){this._to(t,this._getValue(i,600),n||e,this.change,function(t){this._calculateIndex(),this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this))},_calculateIndex:function(){this.hasMax&&this.hasMin&&(this.currentPage=Math.round((this.max-this.target[this.property])/this.step))},_end:function(t){if(this.isTouchStart){this.isTouchStart=!1;var i=this,s=this.target[this.property],a=Math.abs(t.changedTouches[0].pageX-this.x1)<30&&Math.abs(t.changedTouches[0].pageY-this.y1)<30;if(a&&this.tap.call(this,t,s),!1===this.touchEnd.call(this,t,s,this.currentPage))return;if(this.hasMax&&s>this.max)this._to(this.max,200,e,this.change,function(t){this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this));else if(this.hasMin&&s<this.min)this._to(this.min,200,e,this.change,function(t){this.reboundEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this));else if(!this.inertia||a||this._preventMove)i._correction();else{var r=(new Date).getTime()-this.startTime;if(r<300){var o=((this.vertical?t.changedTouches[0].pageY:t.changedTouches[0].pageX)-this.start)*this.sensitivity,c=Math.abs(o)/r,h=this.factor*c;this.hasMaxSpeed&&h>this.maxSpeed&&(h=this.maxSpeed);var l=s+h*h/(2*this.deceleration)*(o<0?-1:1),u=1;l<this.min?l<this.min-this.maxRegion?(u=n((s-this.min+this.springMaxRegion)/(s-l)),l=this.min-this.springMaxRegion):(u=n((s-this.min+this.springMaxRegion*(this.min-l)/this.maxRegion)/(s-l)),l=this.min-this.springMaxRegion*(this.min-l)/this.maxRegion):l>this.max&&(l>this.max+this.maxRegion?(u=n((this.max+this.springMaxRegion-s)/(l-s)),l=this.max+this.springMaxRegion):(u=n((this.max+this.springMaxRegion*(l-this.max)/this.maxRegion-s)/(l-s)),l=this.max+this.springMaxRegion*(l-this.max)/this.maxRegion));var p=Math.round(c/i.deceleration)*u;i._to(Math.round(l),p,e,i.change,function(t){i.hasMax&&i.target[i.property]>i.max?(cancelAnimationFrame(i.tickID),i._to(i.max,600,e,i.change,i.animationEnd)):i.hasMin&&i.target[i.property]<i.min?(cancelAnimationFrame(i.tickID),i._to(i.min,600,e,i.change,i.animationEnd)):i.step?i._correction():i.animationEnd.call(i,t),i.change.call(this,t)})}else i._correction()}}this.x1=this.x2=this.y1=this.y2=null},_to:function(t,i,e,n,s){if(!this.fixed){var a=this.target,r=this.property,o=a[r],c=t-o,h=new Date,l=this,u=function(){var p=new Date-h;if(p>=i)return a[r]=t,n&&n.call(l,t),void(s&&s.call(l,t));a[r]=c*e(p/i)+o,l.tickID=requestAnimationFrame(u),n&&n.call(l,a[r])};u()}},_correction:function(){if(void 0!==this.step){var t=this.target,i=this.property,n=t[i],s=Math.floor(Math.abs(n/this.step)),a=n%this.step;Math.abs(a)>this.step/2?this._to((n<0?-1:1)*(s+1)*this.step,400,e,this.change,function(t){this._calculateIndex(),this.correctionEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this)):this._to((n<0?-1:1)*s*this.step,400,e,this.change,function(t){this._calculateIndex(),this.correctionEnd.call(this,t),this.animationEnd.call(this,t)}.bind(this))}}},t.exports=a}()},130:function(t,i,e){(function(t,n){var s;!function(a){var r="object"==typeof i&&i,o=("object"==typeof t&&t&&t.exports,"object"==typeof n&&n);var c=function(t){this.message=t};c.prototype=new Error,c.prototype.name="InvalidCharacterError";var h=function(t){throw new c(t)},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=/[\t\n\f\r ]/g,p=function(t){t=String(t).replace(u,"");var i=t.length;i%4==0&&(t=t.replace(/==?$/,""),i=t.length),(i%4==1||/[^+a-zA-Z0-9\/]/.test(t))&&h("Invalid character: the string to be decoded is not correctly encoded.");for(var e,n,s=0,a="",r=-1;++r<i;)n=l.indexOf(t.charAt(r)),e=s%4?64*e+n:n,s++%4&&(a+=String.fromCharCode(255&e>>(-2*s&6)));return a},d=function(t){t=String(t),/[^\0-\xFF]/.test(t)&&h("The string to be encoded contains characters outside of the Latin1 range.");for(var i,e,n,s,a=t.length%3,r="",o=-1,c=t.length-a;++o<c;)i=t.charCodeAt(o)<<16,e=t.charCodeAt(++o)<<8,n=t.charCodeAt(++o),s=i+e+n,r+=l.charAt(s>>18&63)+l.charAt(s>>12&63)+l.charAt(s>>6&63)+l.charAt(63&s);return 2==a?(i=t.charCodeAt(o)<<8,e=t.charCodeAt(++o),s=i+e,r+=l.charAt(s>>10)+l.charAt(s>>4&63)+l.charAt(s<<2&63)+"="):1==a&&(s=t.charCodeAt(o),r+=l.charAt(s>>2)+l.charAt(s<<4&63)+"=="),r},f={encode:d,decode:p,version:"0.1.0"};void 0!==(s=function(){return f}.call(i,e,i,t))&&(t.exports=s)}()}).call(i,e(128)(t),e(57))},131:function(t,i,e){!function(){function i(t,i,n){for(var s=0,a=i.length;s<a;s++){e(t,i[s],n)}}function e(t,i,e){Object.defineProperty(t,i,{get:function(){return this["_"+i]},set:function(t){this["_"+i]=t,e()}})}function n(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function s(t,e){if(!t.hasOwnProperty("translateX")){var s=["translateX","translateY","translateZ","scaleX","scaleY","scaleZ","rotateX","rotateY","rotateZ","skewX","skewY","originX","originY","originZ"],a=n(t);e||s.push("perspective"),i(t,s,function(){var i=t.matrix3d.identity().appendTransform(t.translateX,t.translateY,t.translateZ,t.scaleX,t.scaleY,t.scaleZ,t.rotateX,t.rotateY,t.rotateZ,t.skewX,t.skewY,t.originX,t.originY,t.originZ),n=(e?"":"perspective("+t.perspective+"px) ")+"matrix3d("+Array.prototype.slice.call(i.elements).join(",")+")";a?t.style.transform=t.style.msTransform=t.style.OTransform=t.style.MozTransform=t.style.webkitTransform=n:t.transform=n}),t.matrix3d=new r,e||(t.perspective=500),t.scaleX=t.scaleY=t.scaleZ=1,t.translateX=t.translateY=t.translateZ=t.rotateX=t.rotateY=t.rotateZ=t.skewX=t.skewY=t.originX=t.originY=t.originZ=0}}var a=.017453292519943295,r=function(t,i,e,n,s,a,r,o,c,h,l,u,p,d,f,m){this.elements=window.Float32Array?new Float32Array(16):[];var g=this.elements;g[0]=void 0!==t?t:1,g[4]=i||0,g[8]=e||0,g[12]=n||0,g[1]=s||0,g[5]=void 0!==a?a:1,g[9]=r||0,g[13]=o||0,g[2]=c||0,g[6]=h||0,g[10]=void 0!==l?l:1,g[14]=u||0,g[3]=p||0,g[7]=d||0,g[11]=f||0,g[15]=void 0!==m?m:1};r.prototype={set:function(t,i,e,n,s,a,r,o,c,h,l,u,p,d,f,m){var g=this.elements;return g[0]=t,g[4]=i,g[8]=e,g[12]=n,g[1]=s,g[5]=a,g[9]=r,g[13]=o,g[2]=c,g[6]=h,g[10]=l,g[14]=u,g[3]=p,g[7]=d,g[11]=f,g[15]=m,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},multiplyMatrices:function(t,i){var e=t.elements,n=this.elements,s=e[0],a=e[4],r=e[8],o=e[12],c=e[1],h=e[5],l=e[9],u=e[13],p=e[2],d=e[6],f=e[10],m=e[14],g=e[3],A=e[7],v=e[11],x=e[15],y=i[0],C=i[1],b=i[2],w=i[3],_=i[4],k=i[5],M=i[6],B=i[7],T=i[8],Y=i[9],E=i[10],X=i[11],S=i[12],D=i[13],q=i[14],F=i[15];return n[0]=s*y+a*_+r*T+o*S,n[4]=s*C+a*k+r*Y+o*D,n[8]=s*b+a*M+r*E+o*q,n[12]=s*w+a*B+r*X+o*F,n[1]=c*y+h*_+l*T+u*S,n[5]=c*C+h*k+l*Y+u*D,n[9]=c*b+h*M+l*E+u*q,n[13]=c*w+h*B+l*X+u*F,n[2]=p*y+d*_+f*T+m*S,n[6]=p*C+d*k+f*Y+m*D,n[10]=p*b+d*M+f*E+m*q,n[14]=p*w+d*B+f*X+m*F,n[3]=g*y+A*_+v*T+x*S,n[7]=g*C+A*k+v*Y+x*D,n[11]=g*b+A*M+v*E+x*q,n[15]=g*w+A*B+v*X+x*F,this},_rounded:function(t,i){return i=Math.pow(10,i||15),Math.round(t*i)/i},_arrayWrap:function(t){return window.Float32Array?new Float32Array(t):t},appendTransform:function(t,i,e,n,s,r,o,c,h,l,u,p,d,f){var m=o*a,g=this._rounded(Math.cos(m)),A=this._rounded(Math.sin(m)),v=c*a,x=this._rounded(Math.cos(v)),y=this._rounded(Math.sin(v)),C=h*a,b=this._rounded(Math.cos(-1*C)),w=this._rounded(Math.sin(-1*C));return this.multiplyMatrices(this,this._arrayWrap([1,0,0,t,0,g,A,i,0,-A,g,e,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([x,0,y,0,0,1,0,0,-y,0,x,0,0,0,0,1])),this.multiplyMatrices(this,this._arrayWrap([b*n,w*s,0,0,-w*n,b*s,0,0,0,0,1*r,0,0,0,0,1])),(l||u)&&this.multiplyMatrices(this,this._arrayWrap([this._rounded(Math.cos(l*a)),this._rounded(Math.sin(l*a)),0,0,-1*this._rounded(Math.sin(u*a)),this._rounded(Math.cos(u*a)),0,0,0,0,1,0,0,0,0,1])),(p||d||f)&&(this.elements[12]-=p*this.elements[0]+d*this.elements[4]+f*this.elements[8],this.elements[13]-=p*this.elements[1]+d*this.elements[5]+f*this.elements[9],this.elements[14]-=p*this.elements[2]+d*this.elements[6]+f*this.elements[10]),this}};var o=function(t,i,e,n,s,a){return this.a=null==t?1:t,this.b=i||0,this.c=e||0,this.d=null==n?1:n,this.tx=s||0,this.ty=a||0,this};o.prototype={identity:function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},appendTransform:function(t,i,e,n,s,r,o,c,h){if(s%360)var l=s*a,u=Math.cos(l),p=Math.sin(l);else u=1,p=0;return r||o?(r*=a,o*=a,this.append(Math.cos(o),Math.sin(o),-Math.sin(r),Math.cos(r),t,i),this.append(u*e,p*e,-p*n,u*n,0,0)):this.append(u*e,p*e,-p*n,u*n,t,i),(c||h)&&(this.tx-=c*this.a+h*this.c,this.ty-=c*this.b+h*this.d),this},append:function(t,i,e,n,s,a){var r=this.a,o=this.b,c=this.c,h=this.d;return this.a=t*r+i*c,this.b=t*o+i*h,this.c=e*r+n*c,this.d=e*o+n*h,this.tx=s*r+a*c+this.tx,this.ty=s*o+a*h+this.ty,this},initialize:function(t,i,e,n,s,a){return this.a=t,this.b=i,this.c=e,this.d=n,this.tx=s,this.ty=a,this},setValues:function(t,i,e,n,s,a){return this.a=null==t?1:t,this.b=i||0,this.c=e||0,this.d=null==n?1:n,this.tx=s||0,this.ty=a||0,this},copy:function(t){return this.setValues(t.a,t.b,t.c,t.d,t.tx,t.ty)}},s.getMatrix3D=function(t){var i={translateX:0,translateY:0,translateZ:0,rotateX:0,rotateY:0,rotateZ:0,skewX:0,skewY:0,originX:0,originY:0,originZ:0,scaleX:1,scaleY:1,scaleZ:1};for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return(new r).identity().appendTransform(i.translateX,i.translateY,i.translateZ,i.scaleX,i.scaleY,i.scaleZ,i.rotateX,i.rotateY,i.rotateZ,i.skewX,i.skewY,i.originX,i.originY,i.originZ).elements},s.getMatrix2D=function(t){var i={translateX:0,translateY:0,rotation:0,skewX:0,skewY:0,originX:0,originY:0,scaleX:1,scaleY:1};for(var e in t)t.hasOwnProperty(e)&&(i[e]=t[e]);return(new o).identity().appendTransform(i.translateX,i.translateY,i.scaleX,i.scaleY,i.rotation,i.skewX,i.skewY,i.originX,i.originY)},t.exports=s}()},139:function(t,i,e){(function(t,n){var s;!function(a){function r(t){for(var i,e,n=[],s=0,a=t.length;s<a;)i=t.charCodeAt(s++),i>=55296&&i<=56319&&s<a?(e=t.charCodeAt(s++),56320==(64512&e)?n.push(((1023&i)<<10)+(1023&e)+65536):(n.push(i),s--)):n.push(i);return n}function o(t){for(var i,e=t.length,n=-1,s="";++n<e;)i=t[n],i>65535&&(i-=65536,s+=y(i>>>10&1023|55296),i=56320|1023&i),s+=y(i);return s}function c(t){if(t>=55296&&t<=57343)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value")}function h(t,i){return y(t>>i&63|128)}function l(t){if(0==(4294967168&t))return y(t);var i="";return 0==(4294965248&t)?i=y(t>>6&31|192):0==(4294901760&t)?(c(t),i=y(t>>12&15|224),i+=h(t,6)):0==(4292870144&t)&&(i=y(t>>18&7|240),i+=h(t,12),i+=h(t,6)),i+=y(63&t|128)}function u(t){for(var i,e=r(t),n=e.length,s=-1,a="";++s<n;)i=e[s],a+=l(i);return a}function p(){if(x>=v)throw Error("Invalid byte index");var t=255&A[x];if(x++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function d(){var t,i,e,n,s;if(x>v)throw Error("Invalid byte index");if(x==v)return!1;if(t=255&A[x],x++,0==(128&t))return t;if(192==(224&t)){if(i=p(),(s=(31&t)<<6|i)>=128)return s;throw Error("Invalid continuation byte")}if(224==(240&t)){if(i=p(),e=p(),(s=(15&t)<<12|i<<6|e)>=2048)return c(s),s;throw Error("Invalid continuation byte")}if(240==(248&t)&&(i=p(),e=p(),n=p(),(s=(7&t)<<18|i<<12|e<<6|n)>=65536&&s<=1114111))return s;throw Error("Invalid UTF-8 detected")}function f(t){A=r(t),v=A.length,x=0;for(var i,e=[];!1!==(i=d());)e.push(i);return o(e)}var m="object"==typeof i&&i,g=("object"==typeof t&&t&&t.exports,"object"==typeof n&&n);var A,v,x,y=String.fromCharCode,C={version:"2.1.2",encode:u,decode:f};void 0!==(s=function(){return C}.call(i,e,i,t))&&(t.exports=s)}()}).call(i,e(128)(t),e(57))},176:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(19),s=e.n(n),a=e(36),r=(e.n(a),e(122)),o=e(20),c=e(129),h=e.n(c),l=e(131),u=e.n(l),p=e(130),d=(e.n(p),e(139));e.n(d);i.default={name:"singer",created:function(){var t=this;e.i(r.b)({name:"singer",params:{begin:0,singermid:this.$route.params.id}},function(i){setTimeout(function(){t.topinfo=i.data,i.data.list.forEach(function(i){return t.songlist.push({data:i.musicData})}),t.$nextTick(function(){t._initScroll()})},400)})},data:function(){return{topinfo:{},showTitle:!1,songlist:[],selected:"1"}},methods:s()({_initScroll:function(){var t=this.$refs.scrollTouch.$el,i=this.$refs.scrollTarget;u()(i,!0);var e=this;new h.a({touch:t,target:i,sensitivity:.8,bindSelf:!0,property:"translateY",max:0,change:function(i){function n(){this.fixed=t.scrollTop>0}var s=.7*-t.clientWidth+40;e.showTitle=i<=-60,i<=s?(this.target[this.property]=s,this.preventDefault=!1,n.call(this)):this.preventDefault=!0,e._blurringCover(i/s)}})},_blurringCover:function(t){this.$refs.musicCover.style.filter="blur("+(30*t>>0)+"px)"},randomPlayAll:function(){this.stackSonglist(this.songlist),this.switchPlayOrder("random"),this.playSong("next")},loademore:function(t){}},e.i(o.b)("playing",["switchPlayOrder","stackSonglist"]),e.i(o.c)("playing",["playSong"])),components:{headerVue:function(t){e.e(13).then(function(){var i=[e(161)];t.apply(null,i)}.bind(this)).catch(e.oe)}}}},187:function(t,i,e){i=t.exports=e(109)(),i.push([t.i,'.music-cover-wrap{position:relative;margin-top:-40px;z-index:0}.music-cover-wrap .music-cover{width:100%;background-repeat:no-repeat;background-size:cover;-webkit-transition:blur .3s ease;transition:blur .3s ease}.music-cover-wrap .music-cover:after{display:block;content:"";padding-top:90%}.music-cover-wrap .title-wrap{position:absolute;width:100%;bottom:25%;color:#fff;z-index:3}.music-cover-wrap .title-wrap .main-title,.music-cover-wrap .title-wrap .minor-title{text-align:center;margin-top:0;margin-bottom:5px}.music-cover-wrap .title-wrap .main-title{font-size:18px}.music-cover-wrap .title-wrap .minor-title{font-size:14px}.music-cover-wrap .cover-overlay{position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.7);z-index:2}.ranklist-loading,.song-cotainer{position:absolute;left:0;right:0;top:0;background-color:transparent;overflow:hidden}.ranklist-loading:before,.song-cotainer:before{display:block;content:"";margin-top:70%}.ranklist-loading .lyrics-wrapper,.song-cotainer .lyrics-wrapper{line-height:42px;text-align:center;font-size:16px}.ranklist-loading{bottom:0}.ranklist-loading .loading{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-top:30%;height:100%;background-color:#fff}.ranklist-loading .loading p{margin-top:10px;margin-left:10px;font-size:10px;color:rgba(0,0,0,.5)}',"",{version:3,sources:["/Users/zhenhuadeng/Desktop/demo/vue-scaffold/src/components/singer.vue"],names:[],mappings:"AAQA,kBACE,kBAAmB,AACnB,iBAAkB,AAClB,SAAW,CACZ,AACD,+BACI,WAAY,AACZ,4BAA6B,AAC7B,sBAAuB,AACvB,iCAAkC,AAClC,wBAA0B,CAC7B,AACD,qCACM,cAAe,AACf,WAAY,AACZ,eAAiB,CACtB,AACD,8BACI,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,WAAe,AACf,SAAW,CACd,AACD,qFACM,kBAAmB,AACnB,aAAc,AACd,iBAAmB,CACxB,AACD,0CACM,cAAgB,CACrB,AACD,2CACM,cAAgB,CACrB,AACD,iCACI,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,MAAO,AACP,SAAU,AACV,gCAAqC,AACrC,SAAW,CACd,AACD,iCACE,kBAAmB,AACnB,OAAQ,AACR,QAAS,AACT,MAAO,AACP,6BAA8B,AAC9B,eAAiB,CAClB,AACD,+CACI,cAAe,AACf,WAAY,AACZ,cAAgB,CACnB,AACD,iEACI,iBAAkB,AAClB,kBAAmB,AACnB,cAAgB,CACnB,AACD,kBACE,QAAU,CACX,AACD,2BACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,gBAAiB,AACjB,YAAa,AACb,qBAA0B,CAC7B,AACD,6BACM,gBAAiB,AACjB,iBAAkB,AAClB,eAAgB,AAChB,oBAA0B,CAC/B",file:"singer.vue",sourcesContent:["\n@charset \"UTF-8\";\n/* ==================================================\n * \t\t\t \t\t 全局Sass变量\n * \t这里简单介绍下CSS的布局，这里采用主流的Flexbox,\n *  在高度上采取固定Px，宽度自适应, 在布局上有参考下\n *  Framework7 的布局,在一些宽度上采用rem来优化多终端的适应\n * ================================================= */\n.music-cover-wrap {\n  position: relative;\n  margin-top: -40px;\n  z-index: 0;\n}\n.music-cover-wrap .music-cover {\n    width: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    -webkit-transition: blur .3s ease;\n    transition: blur .3s ease;\n}\n.music-cover-wrap .music-cover:after {\n      display: block;\n      content: '';\n      padding-top: 90%;\n}\n.music-cover-wrap .title-wrap {\n    position: absolute;\n    width: 100%;\n    bottom: 25%;\n    color: #ffffff;\n    z-index: 3;\n}\n.music-cover-wrap .title-wrap .main-title, .music-cover-wrap .title-wrap .minor-title {\n      text-align: center;\n      margin-top: 0;\n      margin-bottom: 5px;\n}\n.music-cover-wrap .title-wrap .main-title {\n      font-size: 18px;\n}\n.music-cover-wrap .title-wrap .minor-title {\n      font-size: 14px;\n}\n.music-cover-wrap .cover-overlay {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    z-index: 2;\n}\n.song-cotainer, .ranklist-loading {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: transparent;\n  overflow: hidden;\n}\n.song-cotainer:before, .ranklist-loading:before {\n    display: block;\n    content: '';\n    margin-top: 70%;\n}\n.song-cotainer .lyrics-wrapper, .ranklist-loading .lyrics-wrapper {\n    line-height: 42px;\n    text-align: center;\n    font-size: 16px;\n}\n.ranklist-loading {\n  bottom: 0;\n}\n.ranklist-loading .loading {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding-top: 30%;\n    height: 100%;\n    background-color: #ffffff;\n}\n.ranklist-loading .loading p {\n      margin-top: 10px;\n      margin-left: 10px;\n      font-size: 10px;\n      color: rgba(0, 0, 0, 0.5);\n}\n"],sourceRoot:""}])},201:function(t,i,e){var n=e(187);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(110)("42b8a513",n,!0)},223:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"page"},[n("header-vue",{staticClass:"music-header-2",attrs:{fixed:"",title:t.topinfo.singer_name,showTitle:t.showTitle}},[n("fallback",{slot:"left"}),t._v(" "),n("span",{staticStyle:{"font-size":"30px","font-weight":"bold",display:"inline-block","margin-top":"-10px"},slot:"right"},[t._v("...")])],1),t._v(" "),n("div",{staticClass:"page-content",staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"music-cover-wrap"},[n("div",{ref:"musicCover",staticClass:"music-cover",style:{backgroundImage:t.topinfo.singer_mid&&"url(https://y.gtimg.cn/music/photo_new/T001R300x300M000"+t.topinfo.singer_mid+".jpg?max_age=2592000)"}}),t._v(" "),n("div",{staticClass:"title-wrap"},[t.topinfo.singer_name?n("p",{staticClass:"main-title"},[t._v(t._s(t.topinfo.singer_name))]):t._e(),t._v(" "),t.topinfo.fans?n("p",{staticClass:"minor-title"},[t._v("粉丝："+t._s(t._f("listenFormat")(t.topinfo.fans))+"万")]):t._e()])]),t._v(" "),t.songlist.length?n("div",{ref:"scrollTarget",staticClass:"song-cotainer"},[n("mt-navbar",{attrs:{value:t.selected},on:{input:function(i){t.selected=i}}},[n("mt-tab-item",{attrs:{id:"1"}},[t._v("单曲")]),t._v(" "),n("mt-tab-item",{attrs:{id:"2"}},[t._v("详情")])],1),t._v(" "),n("mt-tab-container",{ref:"scrollTouch",nativeOn:{scroll:function(i){t.loademore(i)}},model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}},[n("mt-tab-container-item",{attrs:{id:"1"}},[n("ul",[n("li",[n("mt-cell",{staticClass:"music-cell-type4"},[n("a",{on:{click:t.randomPlayAll}},[n("img",{staticClass:"icon",attrs:{src:e(127)}}),t._v("随机播放全部\n\t\t\t\t\t\t\t\t\t")])])],1),t._v(" "),t._l(t.songlist,function(i,e){return n("li",{key:"index",on:{click:function(n){t.playMusic(t.songlist,e,i.data.songid)}}},[n("mt-cell",{staticClass:"music-cell-type3"},[n("div",{staticClass:"suffix"},[n("p",{style:e<3&&{color:"#FF4500"}},[t._v(t._s(e+1))])]),t._v(" "),n("div",{staticClass:"song"},[n("p",[t._v(t._s(i.data.songname))]),t._v(" "),n("p",[t._v(t._s(t._f("spliceSinger")(i.data.singer))+" · "+t._s(i.data.albumname))])]),t._v(" "),n("span",{staticClass:"detail"},[t._v("···")])])],1)})],2)]),t._v(" "),2==t.selected?n("mt-tab-container-item",{attrs:{id:"2"}},[n("p",{staticStyle:{color:"rgba(0, 0, 0, .5)",padding:"0 15px","font-size":"14px","line-height":"22px","margin-top":"20px"},domProps:{innerHTML:t._s(t.topinfo.SingerDesc)}})]):t._e()],1)],1):n("div",{staticClass:"ranklist-loading"},[n("div",{staticClass:"loading"},[n("mt-spinner",{attrs:{type:"fading-circle"}}),t._v(" "),n("p",[t._v("正在载入...")])],1)])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.04797bbb22d7377e7b78.js.map