(function(){"use strict";var t={6247:function(t,e,n){var a=n(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("keep-alive",[e("router-view")],1),e("van-tabbar",{ref:"refTabbar",attrs:{route:"","active-color":"grey","inactive-color":"#000"}},[e("van-tabbar-item",{attrs:{icon:"certificate",to:"/"}},[t._v("登录")]),e("van-tabbar-item",{attrs:{icon:"smile-o",to:"/home"}},[t._v("首页")]),e("van-tabbar-item",{attrs:{icon:"user-circle-o",to:"/user"}},[t._v("我的")])],1)],1)},s=[],r={data(){return{active:0}},methods:{}},o=r,l=n(1001),c=(0,l.Z)(o,i,s,!1,null,null,null),u=c.exports,f=n(2631),v=function(){var t=this,e=t._self._c;return e("div",[e("van-nav-bar",{staticClass:"navBar",attrs:{title:"备忘录","right-text":"新建"},on:{"click-right":t.add}},[e("van-icon",{attrs:{slot:"left",name:"smile-o"},slot:"left"})],1),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputText,expression:"inputText",modifiers:{trim:!0}}],ref:"refInput",attrs:{type:"text",placeholder:"   写点什么吧"},domProps:{value:t.inputText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.save.apply(null,arguments)},input:function(e){e.target.composing||(t.inputText=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._l(t.list,(function(n){return e("div",{key:n.id,attrs:{id:n.id}},[e("van-swipe-cell",{attrs:{"right-width":65}},[e("van-cell-group",[e("van-cell",{attrs:{title:n.time,value:n.text}})],1),e("span",{attrs:{slot:"right",id:n.id},on:{click:function(e){return t.del(n.id)}},slot:"right"},[t._v("删除")])],1),e("h1",[t._v(t._s(t.color))])],1)}))],2)},d=[],p=n(8848),h={name:"MyHome",data(){return{date:0,inputText:"",id:1,list:[],color:""}},created(){const t=JSON.parse(localStorage.getItem("lists"));this.list=t},methods:{add(){this.$refs.refInput.style.display="block"},save(){if(""!==this.inputText){this.$refs.refInput.style.display="none";const t=new Date;this.date=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+((new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes())+":"+((new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds()),this.id=JSON.parse(localStorage.getItem("id")),this.list.push({id:this.id,text:this.inputText,time:this.date}),localStorage.setItem("lists",JSON.stringify(this.list)),this.id++,localStorage.setItem("id",JSON.stringify(this.id)),this.inputText=""}else(0,p.Z)("内容不得为空")},del(t){const e=this.list.filter((e=>e.id!==t));this.list=e,localStorage.setItem("lists",JSON.stringify(this.list)),this.list.length||localStorage.setItem("id",JSON.stringify(0))}}},m=h,g=(0,l.Z)(m,v,d,!1,null,"922af1f2",null),y=g.exports,b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-container"},[e("div",{ref:"refUser1",staticClass:"user-card"},[e("van-cell",{ref:"refUser2",scopedSlots:t._u([{key:"icon",fn:function(){return[e("img",{staticClass:"avatar",attrs:{src:n(8412),alt:""}})]},proxy:!0},{key:"title",fn:function(){return[e("span",{staticClass:"username"},[t._v(t._s(t.name))])]},proxy:!0},{key:"label",fn:function(){return[e("van-tag",{attrs:{color:"#fff","text-color":"#007bff"}},[t._v("账号:123456789")])]},proxy:!0}])})],1),e("van-cell-group",{staticClass:"action-card"},[e("van-cell",{attrs:{icon:"edit",title:"编辑资料","is-link":""},on:{click:function(e){t.show=!0}}}),e("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":"取消","get-container":"body"},on:{select:t.onSelect},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),e("div",{ref:"refName",staticClass:"name"},[e("van-cell-group",[e("van-field",{attrs:{placeholder:"请输入用户名"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeName.apply(null,arguments)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1),e("van-cell",{attrs:{icon:"info-o",title:"关于","is-link":""},on:{click:t.about}}),e("van-cell",{attrs:{icon:"warning-o",title:"退出登录","is-link":""},on:{click:t.exit}})],1)],1)},k=[],x=n(5348),_={name:"MyUser",data(){return{count:1,show:!1,actions:[{name:"name"}],value:"",name:"游客"}},created(){const t=JSON.parse(localStorage.getItem("name"));this.name=t},methods:{about(){x.Z.alert({title:"关于",message:"这是一个简易的备忘录~"}).then((()=>{}))},onSelect(t){this.show=!1,"name"===t.name&&(this.$refs.refName.style.display="block"),"avatar"===t.name&&(this.$refs.refAva.style.display="block")},changeName(){this.name=this.value,localStorage.setItem("name",JSON.stringify(this.name)),this.$refs.refName.style.display="none",this.value="",(0,p.Z)("已修改")},exit(){localStorage.removeItem("token"),this.$router.push("/login")}}},w=_,S=(0,l.Z)(w,b,k,!1,null,"5f254a4e",null),C=S.exports,O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._m(1),e("div",{staticClass:"login"},[e("div",{staticClass:"admin"},[e("van-cell-group",[e("van-field",{attrs:{placeholder:"请输入账号",size:"large","input-align":"center"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1),e("div",[e("van-password-input",{attrs:{value:t.value,info:"请输入6位数字密码"},on:{focus:function(e){t.showKeyboard=!0}}})],1),e("van-number-keyboard",{attrs:{show:t.showKeyboard},on:{input:t.onInput,delete:t.onDelete,blur:function(e){t.showKeyboard=!1}}})],1),e("div",[e("div",{staticClass:"btn"},[e("van-button",{attrs:{type:"default"},on:{click:t.reset}},[t._v("重置")]),e("van-button",{attrs:{type:"default"},on:{click:t.login}},[t._v("登录")])],1)]),e("div",{ref:"refInfo2",staticClass:"info",staticStyle:{display:"none"}},[e("p",[t._v("已登录")])])])},I=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"info"},[e("p",[t._v("请先登录")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center avatar-box"},[e("img",{staticClass:"img-thumbnail avatar",attrs:{src:n(8412),alt:""}})])}],Z={name:"MyLogin",data(){return{username:"",value:"",showKeyboard:!0}},methods:{onInput(t){this.value=(this.value+t).slice(0,6)},onDelete(){this.value=this.value.slice(0,this.value.length-1)},reset(){this.username="",this.value=""},login(){"123456789"===this.username&"123456"===this.value?(localStorage.setItem("token",JSON.stringify("Bearerxxxx")),this.$router.push("/logined")):localStorage.removeItem("token"),this.username="",this.value=""}}},N=Z,P=(0,l.Z)(N,O,I,!1,null,"77b736e4",null),T=P.exports,D=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[t._m(0),t._m(1),e("div",{ref:"refInfo2",staticClass:"info",staticStyle:{display:"block"}},[e("p",[t._v("已登录")])])])},J=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"info"},[e("p",{staticStyle:{display:"none"}},[t._v("请先登录")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center avatar-box"},[e("img",{staticClass:"img-thumbnail avatar",attrs:{src:n(8412),alt:""}})])}],M={name:"MyLogined"},$=M,j=(0,l.Z)($,D,J,!1,null,"7beafb84",null),E=j.exports;a.ZP.use(f.ZP);const K=new f.ZP({routes:[{path:"/",component:T},{path:"/login",component:T},{path:"/logined",component:E},{path:"/home",component:y},{path:"/user",component:C}]});K.beforeEach(((t,e,n)=>{if("/home"===t.path||"/user"===t.path){const t=localStorage.getItem("token");t?n():n("./login")}else if("/"===t.path){const t=localStorage.getItem("token");n(t?"./logined":"./login")}else n()}));var U=K,B=n(5650),F=n(1381);n(5110);a.ZP.use(B.Z),a.ZP.use(F.ZP),a.ZP.config.productionTip=!1,new a.ZP({router:U,Vant:F.ZP,render:t=>t(u)}).$mount("#app")},8412:function(t,e,n){t.exports=n.p+"img/user.cf16c785.jpg"}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a](s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,s){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],s=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[l])}))?a.splice(l--,1):(o=!1,s<r&&(r=s));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,r=a[0],o=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(l)var u=l(n)}for(e&&e(a);c<r.length;c++)s=r[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkmynote"]=self["webpackChunkmynote"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6247)}));a=n.O(a)})();
//# sourceMappingURL=app.0a56b332.js.map