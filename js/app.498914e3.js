(function(t){function a(a){for(var s,r,l=a[0],o=a[1],c=a[2],u=0,v=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&v.push(i[r][0]),i[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(a);while(v.length)v.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,l=1;l<e.length;l++){var o=e[l];0!==i[o]&&(s=!1)}s&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={app:0},n=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var d=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2291:function(t,a,e){"use strict";var s=e("9b18"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(e("5c0b"),e("2877")),l={},o=Object(r["a"])(l,i,n,!1,null,null,null),c=o.exports,d=e("8c4f"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"web"},[e("div",{staticClass:"main"},[t._m(0),e("div",{staticClass:"row2"},[e("div",{staticClass:"left"},[e("div",{staticClass:"title"},[t._v("NO.9 Mansion")]),e("div",{staticClass:"slogan"},[t._v("数万福利资源，用心为您服务")]),t.domains.length>0?e("div",{staticClass:"items"},[t._l(t.domains,(function(a,s){return[e("div",{key:s,staticClass:"item"},[e("div",{staticClass:"addr"},[t._v("地址"+t._s(s+1)+"："+t._s(a))]),e("a",{staticClass:"enter",attrs:{href:"//"+a,target:"_blank"}},[t._v("马上进入")])])]}))],2):e("div",{staticClass:"items"},[e("div",{staticClass:"loading"})]),e("div",{staticClass:"intro"},[t._v("请输入邮箱地址，我们会定期为您保留最新最精彩的内容")])]),e("div",{staticClass:"right"},[t._m(1),e("div",{staticClass:"emailcontainer"},[e("div",{staticClass:"d1"},[e("span",[t._v("请输入您的常用邮箱：")]),e("span",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),e("span",{staticClass:"clearbtn",on:{click:function(a){t.email=""}}})])]),e("div",{staticClass:"send",on:{click:t.sendHanlde}},[t._v("发 送")])])])])])]),e("div",{staticClass:"h5"},[e("div",{staticClass:"main"},[e("div",{staticClass:"logo"}),e("div",{staticClass:"slogan"},[t._v("数万部福利资源，尽在9号公馆")]),e("div",{staticClass:"title"},[t._v("九号公馆 最新域名")]),t.domains.length>0?e("div",{staticClass:"items"},[t._l(t.domains,(function(a,s){return[e("div",{key:s,staticClass:"item clear"},[e("div",{staticClass:"addr"},[t._v("地址"+t._s(s+1)+"："+t._s(a))]),e("a",{staticClass:"enter",attrs:{href:"//"+a,target:"_blank"}},[t._v("马上进入")])])]}))],2):e("div",{staticClass:"items"},[e("div",{staticClass:"loading"})])]),e("p",{staticClass:"place"},[t._v("请输入邮箱地址，我们会定期为您保留最新最精彩的内容")]),e("div",{staticClass:"emailcontainer clear"},[e("div",{staticClass:"left"},[e("div",{staticClass:"ipt"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",placeholder:"请输入您的常用邮箱"},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),e("div",{staticClass:"clearbtn",on:{click:function(a){t.email=""}}})])]),e("div",{staticClass:"right",on:{click:t.sendHanlde}},[t._v("发送")])])])])},v=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row1"},[e("span",[t._v("九号公馆 最新域名")]),e("span",{staticClass:"biglogo"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"center"},[e("div",{staticClass:"slogo"}),e("p",{staticClass:"p1"},[t._v("官方唯一永久地址：")]),e("p",{staticClass:"p2"},[t._v("www.9hri.com")]),e("p",{staticClass:"p3"},[t._v("记得收藏哦~")])])}],p={name:"home",data:function(){return{email:"",domains:[]}},mounted:function(){var t=this;this.$http.get("https://open.9hmo.com/wFx3FFG0/domain_list/1").then((function(a){var e=a.data;200===e.code?t.domains=e.data:alert(res.msg)}))},methods:{sendHanlde:function(){if(this.email){var t=/[\w-.]+@[\w-]+(.[\w_-]+)+/;t.test(this.email)?this.$http.post("https://open.9hmo.com/7ZmQI70F/send_domain_list/1",{emailAddr:this.email},{transformRequest:[function(t,a){var e=new FormData;return e.append("emailAddr",t.emailAddr),e}]}).then((function(t){var a=t.data;200===a.code?alert("发送成功，请查收"):alert("发送失败")})).catch((function(t){console.log(t),alert("网站繁忙,请稍后再试")})):alert("邮箱格式不正确")}}}},m=p,f=(e("cccb"),e("2291"),Object(r["a"])(m,u,v,!1,null,"415fa897",null)),h=f.exports;s["a"].use(d["a"]);var _=new d["a"]({routes:[{path:"/",name:"home",component:h}]}),C=e("2f62");s["a"].use(C["a"]);var g=new C["a"].Store({state:{},mutations:{},actions:{}}),b=e("bc3a"),w=e.n(b);s["a"].prototype.$http=w.a.create({timeout:0}),s["a"].config.productionTip=!1,new s["a"]({router:_,store:g,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("e332"),i=e.n(s);i.a},"9b18":function(t,a,e){},cccb:function(t,a,e){"use strict";var s=e("d563"),i=e.n(s);i.a},d563:function(t,a,e){},e332:function(t,a,e){}});