(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(t,s,n){"use strict";n.r(s);n(63);var e=n(0),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"sidebar"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"block",attrs:{id:"brands"}},[n("h5",[t._v("BRANDS")]),t._v(" "),n("router-link",{staticClass:"brand",attrs:{to:""}},[t._v("Apple")]),t._v(" "),n("router-link",{staticClass:"brand",attrs:{to:""}},[t._v("LG")]),t._v(" "),n("router-link",{staticClass:"brand",attrs:{to:""}},[t._v("Samsung")]),t._v(" "),n("router-link",{staticClass:"brand",attrs:{to:""}},[t._v("Cases & Films")]),t._v(" "),n("router-link",{staticClass:"brand",attrs:{to:""}},[t._v("Siemens")])],1)])}),[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"block",attrs:{id:"categories"}},[n("h5",[t._v("CATEGORIES")]),t._v(" "),n("select",{staticClass:"category form-control"},[n("option",[t._v("Apple Car")])]),t._v(" "),n("select",{staticClass:"category form-control"},[n("option",[t._v("Air Port & wireless")])]),t._v(" "),n("select",{staticClass:"category form-control"},[n("option",[t._v("Cable & Docks")])]),t._v(" "),n("select",{staticClass:"category form-control"},[n("option",[t._v("Cases & Films")])]),t._v(" "),n("select",{staticClass:"category form-control"},[n("option",[t._v("Charging Devices")])]),t._v(" "),n("select",{staticClass:"category form-control"},[n("option",[t._v("Connected Home")])]),t._v(" "),n("select",{staticClass:"category form-control"},[n("option",[t._v("Headphones")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"block",attrs:{id:"prices"}},[s("h5",[this._v("PRICES")]),this._v(" "),s("p",{staticClass:"d-flex justify-content-between"},[s("span",[this._v("Ranger:")]),this._v(" "),s("span",[this._v("$13.99 - $25.99")])]),this._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("input",{staticClass:"form-control",attrs:{type:"number",placeholder:"Low"}})]),this._v(" "),s("div",{staticClass:"col-6"},[s("input",{staticClass:"form-control",attrs:{type:"number",placeholder:"High"}})])])])}],!1,null,"54679edb",null).exports,r=[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"background p-2"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6",attrs:{id:"hero"}},[s("h2",[this._v("iPhone 6 Plus")]),this._v(" "),s("p",[this._v("Performance and design. Taken right to the edge.")]),this._v(" "),s("a",[s("span",[this._v("SHOP NOW")])])]),this._v(" "),s("div",{staticClass:"col-md-6"},[s("img",{attrs:{src:n(24),alt:"iPhone 6 Plus",width:"100%"}})])])])}],o={},i=(n(65),Object(e.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,"03729ba1",null).exports),c=n(1);function l(t,s){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),n.push.apply(n,e)}return n}function d(t){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?l(n,!0).forEach((function(s){u(t,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))}))}return t}function u(t,s,n){return s in t?Object.defineProperty(t,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[s]=n,t}var p={name:"ProductsList",data:function(){return{posts:{}}},methods:d({},Object(c.b)(["addToCart","removeFromCart","setIntended"]),{loadPosts:function(){var t=this,s=this.$route.query.tab?this.$route.query.tab:1;this.$Progress.start(),axios.get(this.getRoutes.posts.list+s).then((function(s){t.posts=s.data,$("body").get(0).scrollIntoView(),t.$Progress.finish()})).catch((function(){t.$Progress.fail(),new toast({type:"error",title:"Error fetching posts"})}))},paginatePosts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$router.push("/products?tab="+t),this.loadPosts()},getFeaturedImage:function(t){return t.pictures.length>0?t.pictures[0].uri:"/images/post-sample.png"},alterInCart:function(t){if(!this.isLoggedIn)return this.setIntended(this.$route.fullPath),this.$router.push("/login"),new toast({type:"warning",title:"Login to continue"});var s=this.posts.data.find((function(s){return s.id===t}));s.is_ordered_by?this.removeFromCart(t).then((function(){return s.is_ordered_by=!1})):this.addToCart({post_id:t}).then((function(){return s.is_ordered_by=!0}))}}),computed:d({},Object(c.c)(["getRoutes","isLoggedIn","getSymbol"]),{noPosts:function(){return!!this.posts.data&&this.posts.data.length<1}}),mounted:function(){this.loadPosts()}},v=(n(67),{name:"ProductsList",components:{"side-bar":a,cta:i,list:Object(e.a)(p,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[[t.noPosts?n("div",[n("p",{staticClass:"lead"},[t._v("There are currently no products available.")])]):t._e(),t._v(" "),n("div",{staticClass:"d-none d-md-block"},[n("div",{staticClass:"row"},t._l(t.posts.data,(function(s){return n("div",{key:s.id,staticClass:"col-md-6 col-lg-4 text-center"},[n("div",{staticClass:"border"},[n("router-link",{staticClass:"link",attrs:{to:"/products/"+s.id}},[n("img",{staticClass:"w-100",attrs:{src:t.getFeaturedImage(s),alt:"Featured Image"}}),t._v(" "),n("p",{staticClass:"post-name pt-3"},[t._v(t._s(s.name))]),t._v(" "),n("p",{staticClass:"post-price"},[n("span",{domProps:{innerHTML:t._s(t.getSymbol)}}),t._v(t._s(t._f("discount")(s.price,s.discount))),s.discount?n("span",{staticClass:"post-discount"},[t._v("₦"+t._s(t._f("discount")(s.price)))]):t._e()])]),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-content-between align-content-center"},[n("span",{staticClass:"post-quantity"},[t._v("In stock: "+t._s(s.quantity))]),t._v(" "),n("button",{staticClass:"btn",class:{"btn-primary":s.is_ordered_by,"btn-outline-secondary":!s.is_ordered_by},on:{click:function(){return t.alterInCart(s.id)}}},[n("i",{staticClass:"fas fa-shopping-basket",class:{"text-danger":s.is_ordered_by,"text-secondary":!s.is_ordered_by}})])])],1)])})),0)]),t._v(" "),n("div",{staticClass:"d-md-none"},t._l(t.posts.data,(function(s){return n("div",{key:s.id,staticClass:"row border"},[n("div",{staticClass:"col-4"},[n("img",{staticClass:"w-100",attrs:{src:t.getFeaturedImage(s),alt:"Featured Image"}})]),t._v(" "),n("div",{staticClass:"col-8 pl-2"},[n("router-link",{staticClass:"link",attrs:{to:"/products/"+s.id}},[n("p",{staticClass:"post-name"},[t._v(t._s(s.name))]),t._v(" "),n("p",{staticClass:"post-price"},[n("span",{domProps:{innerHTML:t._s(t.getSymbol)}}),t._v(t._s(t._f("discount")(s.price,s.discount))),s.discount?n("span",{staticClass:"post-discount"},[t._v("₦"+t._s(t._f("discount")(s.price)))]):t._e()])]),t._v(" "),n("div",{staticClass:"d-flex flex-row justify-content-between align-content-center"},[n("span",{staticClass:"post-quantity"},[t._v("In stock: "+t._s(s.quantity))]),t._v(" "),n("button",{staticClass:"btn btn-sm",class:{"btn-primary":s.is_ordered_by,"btn-outline-secondary":!s.is_ordered_by},on:{click:function(){return t.alterInCart(s.id)}}},[n("i",{staticClass:"fas fa-shopping-basket",class:{"text-danger":s.is_ordered_by,"text-secondary":!s.is_ordered_by}})])])],1)])})),0)],t._v(" "),n("pagination",{staticClass:"mt-3",attrs:{data:t.posts,align:"center",limit:2},on:{"pagination-change-page":t.paginatePosts}},[n("span",{attrs:{slot:"prev-nav"},slot:"prev-nav"},[n("i",{staticClass:"fas fa-angle-left text-primary"})]),t._v(" "),n("span",{attrs:{slot:"next-nav"},slot:"next-nav"},[n("i",{staticClass:"fas fa-angle-right text-primary"})])])],2)}),[],!1,null,"276647d2",null).exports}}),f=Object(e.a)(v,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3 d-none d-md-flex"},[s("side-bar")],1),this._v(" "),s("div",{staticClass:"col-md-9 pl-md-3"},[s("cta",{staticClass:"d-none d-md-block"}),this._v(" "),s("list")],1)])}),[],!1,null,"3fd97d71",null);s.default=f.exports},16:function(t,s,n){var e=n(64);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(e,a);e.locals&&(t.exports=e.locals)},17:function(t,s,n){var e=n(66);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(e,a);e.locals&&(t.exports=e.locals)},18:function(t,s,n){var e=n(68);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(4)(e,a);e.locals&&(t.exports=e.locals)},24:function(t,s){t.exports="/images/cta.png?5580c46711087ef4c56835df57db8e80"},63:function(t,s,n){"use strict";var e=n(16);n.n(e).a},64:function(t,s,n){(t.exports=n(3)(!1)).push([t.i,"\n.block[data-v-54679edb]{\n    background: #F6F7F8;\n    color: #000000;\n    padding: 1rem;\n    margin: 0 0 2rem;\n}\n.block h5[data-v-54679edb]{\n    font-size: 1.29rem;\n    font-weight: bold;\n    margin: 0 0 0.5rem;\n}\n.block .category[data-v-54679edb]{\n    display: block !important;\n    color: #000000;\n    margin: 0.5rem 0;\n    border: none;\n    background: #00000000;\n}\n.block .brand[data-v-54679edb]{\n    display: block;\n    color: #000000;\n    margin: 0.5rem 0;\n}\n.block p[data-v-54679edb]{\n    font-weight: bold;\n}\n",""])},65:function(t,s,n){"use strict";var e=n(17);n.n(e).a},66:function(t,s,n){(t.exports=n(3)(!1)).push([t.i,"\n.background[data-v-03729ba1]{\n\tbackground: #2E90E5;\n\tcolor: #fff;\n}\n#hero[data-v-03729ba1]{\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tpadding: 0 0 0 2rem;\n\tcolor: #fff;\n}\nh2[data-v-03729ba1]{\n\tfont-size: 2.8rem;\n\tfont-weight: bold;\n\tmargin: 1rem 0;\n}\np[data-v-03729ba1]{\n\tfont-size: 1.2rem;\n\tmargin: 1rem 0;\n}\na span[data-v-03729ba1]{\n\tmargin: 1rem 0;\n\tborder-bottom: 2px solid #fff;\n\tfont-weight: bold;\n}\n",""])},67:function(t,s,n){"use strict";var e=n(18);n.n(e).a},68:function(t,s,n){(t.exports=n(3)(!1)).push([t.i,"\n.link[data-v-276647d2]{\n\ttext-decoration: none;\n}\n.border[data-v-276647d2]{\n\tborder: 2px solid #777;\n\tpadding: 1rem;\n\tmargin: 0.5rem 0;\n\tborder-radius: 10px;\n}\n.post-name[data-v-276647d2]{\n\tfont-size: 1rem;\n\tfont-weight: bold;\n\tcolor: #000;\n}\n.post-price[data-v-276647d2]{\n\tfont-size: 1.14rem;\n\tcolor: #FF6875;\n}\n.post-discount[data-v-276647d2]{\n\tfont-size: 0.9rem;\n\tcolor: #777;\n\ttext-decoration: line-through;\n}\n.post-quantity[data-v-276647d2]{\n\tfont-size: 0.9rem;\n\tcolor:#000;\n\tfont-weight: bold;\n}\n",""])}}]);