webpackJsonp([0],{0:function(t,e){},"0+Wf":function(t,e){},"1uuo":function(t,e){},IhFa:function(t,e){},"Kg/D":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r=s("/ocq"),o=s("8+8L"),n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},n,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;var i={name:"det",data:function(){return{customer:""}},methods:{fetchCustomers:function(t){this.$http.get("http://www.serendipity.wiki/vuegl/db.json"+t).then(function(t){console.log(t),this.customer=t.body})}},created:function(){this.fetchCustomers(this.$route.params.id)}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"det container"},[e("h1",{staticClass:"page-header"},[this._v(this._s(this.customer.name))])])},staticRenderFns:[]};var c=s("VU/8")(i,u,!1,function(t){s("bxPw")},"data-v-296a3164",null).exports,l={name:"customers",components:{det:c},data:function(){return{customers:[]}},methods:{fetchCustomers:function(){this.$http.get("http://www.serendipity.wiki/vuegl/db.json").then(function(t){console.log(t),this.customers=t.body})}},created:function(){this.fetchCustomers()}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"customers container"},[s("h1",{staticClass:"page-header"},[t._v("用户管理系统")]),t._v(" "),s("table",{staticClass:"table table-striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.customers,function(e){return s("tr",[s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.phone))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[t._v(t._s(e.id))]),t._v(" "),s("td",[s("router-link",{staticClass:"btn btn-default",attrs:{to:"/customer/"+e.id}},[t._v("详情")])],1)])}),0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("姓名")]),this._v(" "),e("th",[this._v("电话")]),this._v(" "),e("th",[this._v("邮箱")]),this._v(" "),e("th")])])}]};var m=s("VU/8")(l,v,!1,function(t){s("0+Wf")},"data-v-60fb1e05",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"about"},[this._v("\n\tAbout\n")])},staticRenderFns:[]};var d=s("VU/8")({name:"about",data:function(){return{}}},h,!1,function(t){s("dt4K")},"data-v-1e45c7f3",null).exports,p={name:"add",data:function(){return{customer:{}}},methods:{addCustomer:function(t){if(this.customer.name&&this.customer.phone&&this.customer.email){var e={name:this.customer.name,phone:this.customer.phone,email:this.customer.email,edu:this.customer.edu,school:this.customer.school,pro:this.customer.pro};this.$http.post("http://www.serendipity.wiki/vuegl/db.json",e).then(function(t){this.$router.push({path:"/"})}),t.preventDefault()}else alert("请填入正确的数据");t.preventDefault()}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"add container"},[s("h1",{staticClass:"page-header"},[t._v("添加用户")]),t._v(" "),s("form",{on:{submit:t.addCustomer}},[s("div",{staticClass:"well"},[s("h4",[t._v("用户信息")]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.name,expression:"customer.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"name"},domProps:{value:t.customer.name},on:{input:function(e){e.target.composing||t.$set(t.customer,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("电话")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.phone,expression:"customer.phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:"phone"},domProps:{value:t.customer.phone},on:{input:function(e){e.target.composing||t.$set(t.customer,"phone",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("邮箱")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.email,expression:"customer.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"email"},domProps:{value:t.customer.email},on:{input:function(e){e.target.composing||t.$set(t.customer,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("学历")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.edu,expression:"customer.edu"}],staticClass:"form-control",attrs:{type:"text",placeholder:"edu"},domProps:{value:t.customer.edu},on:{input:function(e){e.target.composing||t.$set(t.customer,"edu",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("毕业学校")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.school,expression:"customer.school"}],staticClass:"form-control",attrs:{type:"text",placeholder:"school"},domProps:{value:t.customer.school},on:{input:function(e){e.target.composing||t.$set(t.customer,"school",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("职业")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.customer.pro,expression:"customer.pro"}],staticClass:"form-control",attrs:{type:"text",placeholder:"pro"},domProps:{value:t.customer.pro},on:{input:function(e){e.target.composing||t.$set(t.customer,"pro",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn-primary",attrs:{type:"submit"}},[t._v("添加")])])])])},staticRenderFns:[]};var f=s("VU/8")(p,_,!1,function(t){s("IhFa")},"data-v-1ecafa8f",null).exports,b={name:"App",components:{Customers:m,About:d,Add:f}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-default"},[s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),s("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbar"}},[s("ul",{staticClass:"nav navbar-nav"},[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("主页")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/about"}},[t._v("关于我们")])],1)]),t._v(" "),s("ul",{staticClass:"nav navbar-nav navbar-right"},[s("li",[s("router-link",{attrs:{to:"/add"}},[t._v("添加用户")])],1)])])])]),t._v(" "),s("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-header"},[e("button",{staticClass:"navbar-toggle collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[e("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"}),this._v(" "),e("span",{staticClass:"icon-bar"})]),this._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[this._v("用户管理系统")])])}]};var C=s("VU/8")(b,g,!1,function(t){s("Kg/D")},null,null).exports;a.a.config.productionTip=!1,a.a.use(r.a),a.a.use(o.a);var w=new r.a({mode:"history",base:"/nr/",routes:[{path:"/",component:m},{path:"/about",component:d},{path:"/add",component:f},{path:"/customer/:id",component:c}]});new a.a({router:w,el:"#app",components:{App:C},template:"<App/>"})},bxPw:function(t,e){},dt4K:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.91918f1cd38c6c750294.js.map