(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81bea824"],{4273:function(t,e,s){"use strict";var a=s("6a43"),r=s.n(a);r.a},"6a43":function(t,e,s){},e6dc:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Hero",{attrs:{title:t.title,subtitle:t.subtitle}}),s("section",{staticClass:"section"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"buttons has-addons"},[s("router-link",{staticClass:"button is-white",class:{"is-active":!t.$route.query.category},attrs:{to:"/products"}},[t._v("Visa alla")]),t._l(t.getCategories,(function(e){return s("router-link",{key:e,staticClass:"button is-white",class:{"is-active":e.toLowerCase()===t.$route.query.category},attrs:{to:t.getQuery(e)}},[t._v(t._s(e))])}))],2)])]),s("div",{staticClass:"columns is-multiline"},t._l(t.getProducts,(function(t){return s("div",{key:t.id,staticClass:"column is-half-tablet is-one-quarter-desktop"},[s("ProductCard",{attrs:{product:t}})],1)})),0)])])],1)},r=[],i=s("e915"),o=s("f949"),n={name:"Products",components:{ProductCard:i["a"],Hero:o["a"]},data:function(){return{title:"Våra produkter",subtitle:"Hos oss kan du hitta just din katts favoriter. Katter är som du säkert vet kända för att vara lite kräsna, och med all rätt tycker vi - självklart förtjänar katten endast det bästa! Bland våra produkter hittar du ett urval av kattmat, kattgodis, kattleksaker, kattlådor och allt annat du och din vän kan tänkas behöva för ett lyckligt och bekymmersfritt kattliv."}},computed:{getCategories:function(){return this.$store.getters.getProductCategories},getProducts:function(){return this.$store.getters.getProducts(this.$route.query.category)}},methods:{getQuery:function(t){return"/products?category="+t.toLowerCase()}}},c=n,u=s("2877"),l=Object(u["a"])(c,a,r,!1,null,null,null);e["default"]=l.exports},f949:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"hero is-primary is-medium"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-two-thirds has-text-centered"},[s("h1",{staticClass:"title is-1 has-text-weight-bold"},[t._v(t._s(t.title))]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.subtitle,expression:"subtitle"}],staticClass:"content is-medium"},[t._v(t._s(t.subtitle))])])])])])])},r=[],i={name:"HeroSubpage",props:{title:{type:String},subtitle:{type:String}}},o=i,n=(s("4273"),s("2877")),c=Object(n["a"])(o,a,r,!1,null,"1c7fbe66",null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-81bea824.3102dd57.js.map