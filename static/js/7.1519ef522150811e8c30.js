webpackJsonp([7],{121:function(t,e,s){s(209);var n=s(35)(s(180),s(236),null,null);t.exports=n.exports},122:function(t,e,s){"use strict";function n(t){var e="",s=t.url,n="jsonp"+(new Date).getTime(),i=p()({},t.params,{jsonpCallback:n});for(var a in i)e&&(e+="&"),e+=a+"="+encodeURIComponent(i[a]);return{url:s+"?"+e,jsonpCallback:n}}function i(t,e){var s=t.url,n=t.jsonpCallback;window[n]=function(t){window[n]=void 0,document.body.removeChild(i),e(t)};var i=document.createElement("script");i.src=s,document.body.appendChild(i)}function a(t,e){return i(n("string"==typeof t?f[t]:(f[t.name].params=o()({},f[t.name].params,t.params),f[t.name])),e)}e.a=i,e.b=a;var c=s(58),o=s.n(c),r=s(124),l=s.n(r),u=s(19),p=s.n(u),m={g_tk:1604785682,uin:494873674,format:"jsonp",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,_:(new Date).getTime()},f={topList:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",params:m},rankList:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",params:p()({},m,{type:"top",page:"detail",tpl:3})},recommend:{url:"https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg",params:p()({},m,l()({pic:500,json:1,type:1,utf8:1,nosign:1,onlysong:0},"nosign",1))},indexMsg:{url:"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",params:p()({},m)},hotkey:{url:"https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg",params:p()({},m)},search:{url:"https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg",params:p()({},m,{is_xml:0})},singerlist:{url:"https://c.y.qq.com/v8/fcg-bin/v8.fcg",params:p()({},m,{page:"list",channel:"singer",pagesize:100,hostUin:0,needNewCode:0,pagenum:1})},singer:{url:"https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",params:p()({},m,{begin:0,num:30,order:"listen",from:"h5",songstatus:1})}}},123:function(t,e,s){t.exports={default:s(125),__esModule:!0}},124:function(t,e,s){"use strict";e.__esModule=!0;var n=s(123),i=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t,e,s){return e in t?(0,i.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},125:function(t,e,s){s(126);var n=s(6).Object;t.exports=function(t,e,s){return n.defineProperty(t,e,s)}},126:function(t,e,s){var n=s(15);n(n.S+n.F*!s(7),"Object",{defineProperty:s(3).f})},180:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(122),i=s(36);s.n(i);e.default={name:"topList",created:function(){var t=this;s.i(n.b)("topList",function(e){t.topList=e.data.topList})},data:function(){return{topList:{}}}}},195:function(t,e,s){e=t.exports=s(109)(),e.push([t.i,".music-list>li{margin:0 10px 10px}","",{version:3,sources:["/Users/zhenhuadeng/Desktop/demo/vue-scaffold/src/components/topList.vue"],names:[],mappings:"AAQA,eACE,kBAAoB,CACrB",file:"topList.vue",sourcesContent:['\n@charset "UTF-8";\n/* ==================================================\n * \t\t\t \t\t 全局Sass变量\n * \t这里简单介绍下CSS的布局，这里采用主流的Flexbox,\n *  在高度上采取固定Px，宽度自适应, 在布局上有参考下\n *  Framework7 的布局,在一些宽度上采用rem来优化多终端的适应\n * ================================================= */\n.music-list > li {\n  margin: 0 10px 10px;\n}\n'],sourceRoot:""}])},209:function(t,e,s){var n=s(195);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(110)("c994cce2",n,!0)},236:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("mt-header",{staticClass:"music-header",attrs:{fixed:"",title:"排行"}},[s("fallback",{slot:"left"})],1),t._v(" "),s("div",{staticClass:"page-content"},[s("ul",{staticClass:"music-list"},[s("li",[s("mt-cell",{staticClass:"music-cell-type1",attrs:{title:"Q Q 音 乐 巅 峰 榜"}})],1),t._v(" "),t._l(t.topList,function(e){return s("router-link",{key:"item.id",attrs:{tag:"li",to:{name:"rankList",params:{id:e.id}}}},[s("mt-cell",{staticClass:"music-cell-type2"},[s("div",{staticClass:"listen-cover"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}]}),t._v(" "),s("span",{staticClass:"listen-count"},[s("i",{staticClass:"listen-icon"}),t._v("\n              "+t._s(t._f("listenFormat")(e.listenCount))+"万\n            ")]),t._v(" "),s("i",{staticClass:"listen-play"})]),t._v(" "),s("ul",{staticClass:"song-list",slot:"title"},t._l(e.songList,function(e,n){return s("li",{key:"index",staticClass:"song-item"},[t._v(" \n              "+t._s(n+1)+"\n              "+t._s(e.songname)+"\n              "),s("span",{staticClass:"song-singer"},[t._v(t._s("- "+e.singername))])])})),t._v(" "),s("i",{staticClass:"song-arrow",slot:"right"})])],1)})],2)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.1519ef522150811e8c30.js.map