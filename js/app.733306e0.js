(function(t){function e(e){for(var s,r,l=e[0],c=e[1],o=e[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/portfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"026f":function(t,e){},1598:function(t,e,a){"use strict";a("da13")},"3e28":function(t,e,a){},"4cdd":function(t,e,a){"use strict";a("8dd6")},5529:function(t,e,a){"use strict";a("3e28")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r=a("2877"),l={},c=Object(r["a"])(l,n,i,!1,null,null,null),o=c.exports,u=a("ecee"),d=a("f2d1"),f=a("c074"),v=a("ad3d"),p=a("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav"},[a("NavBar")],1),a("div",{staticClass:"pages",attrs:{id:"pages"}},[a("div",{staticClass:"pages-item",attrs:{id:"first-page"}},[a("Home")],1),a("div",{staticClass:"pages-item",attrs:{id:"second-page"}},[a("About")],1),a("div",{staticClass:"pages-item",attrs:{id:"third-page"}},[a("Exper")],1)])])},h=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boxAll"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"brand"},[t._m(1),a("div",{staticClass:"collapsable"},[a("div",{staticClass:"coll-content"},[a("p",[a("a",{attrs:{href:"https://github.com/alexandredorc",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),a("p",[a("a",{attrs:{href:"https://www.linkedin.com/in/alexandre-dorcival-48a7a21a1/",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)])])])])]),a("a",{attrs:{href:"#second-page"}},[a("div",{staticClass:"down"},[a("font-awesome-icon",{attrs:{icon:["fas","arrow-down"]}})],1)])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text"},[a("h1",{staticClass:"text-item"},[a("strong",[t._v(" Hello !! ")])]),a("h2",{staticClass:"text-item"},[t._v(" My name is Alexandre Dorcival"),a("br"),t._v(" and this is my portfolio ")]),a("h3",{staticClass:"text-item"},[t._v(" I am a student at the IMT Lille Douai engineering school "),a("br"),t._v(" I am keen on science and IT "),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand-title"},[a("strong",[t._v("My contents online")])])}],b=a("cffa"),C={data:function(){return{publicPath:"/portfolio/"}},mounted:function(){var t=b["a"].timeline();t.from(".text .text-item",{duration:.5,opacity:0,y:-50,stagger:.1}),t.from(".brand p",{duration:.5,opacity:0,y:50,stagger:.1}),t.from(".down",{duration:.5,opacity:0,y:-50});var e=document.getElementsByClassName("collapsable")[0],a=document.getElementsByClassName("brand")[0];a.addEventListener("mouseleave",(function(){e.style.width="0",e.style.padding="10px 0px 10px 0px",e.firstElementChild.style.transform="scale(0,1)"})),a.addEventListener("mouseover",(function(){e.style.width="auto",e.style.padding="10px 40px 10px 30px",e.firstElementChild.style.transform="scale(1)"}))}},y=C,x=(a("1598"),Object(r["a"])(y,g,_,!1,null,"03c22445",null)),w=x.exports,E=a("84ba"),S=a("d000"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boxAll"},[a("div",{staticClass:"content"},[a("h2",[t._v(" My experiences ")]),a("div",{staticClass:"collapse-list"},[a("div",{staticClass:"collapse-head"},[t._v(" Professional experiences ")]),a("div",{staticClass:"collapse-item",on:{click:function(e){return t.collapse(0)}}},[a("div",{staticClass:"collapse-title"},[t._v(" Exsymol SAM ")]),t._m(0)]),a("div",{staticClass:"collapse-item",on:{click:function(e){return t.collapse(1)}}},[a("div",{staticClass:"collapse-title"},[t._v(" Blocksi SAS ")]),t._m(1)]),a("div",{staticClass:"collapse-head"},[t._v(" Extracuricular experiences ")]),a("div",{staticClass:"collapse-item",on:{click:function(e){return t.collapse(2)}}},[a("div",{staticClass:"collapse-title"},[t._v(" One to One journey in England ")]),t._m(2)]),a("div",{staticClass:"collapse-item",on:{click:function(e){return t.collapse(3)}}},[a("div",{staticClass:"collapse-title"},[t._v(" Linguistic immersion in Argentina ")]),t._m(3)]),a("div",{staticClass:"collapse-item",on:{click:function(e){return t.collapse(4)}}},[a("div",{staticClass:"collapse-title"},[t._v(" Linguistic immersion in Australia ")]),t._m(4)])])]),a("a",{attrs:{href:"#fourth-page"}},[a("div",{staticClass:"down"},[a("font-awesome-icon",{attrs:{icon:["fas","arrow-down"]}})],1)])])},k=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse-content"},[a("strong",{staticStyle:{color:"rgb(0, 140, 255)"}},[t._v("Development of a Database using the Qualios App ")]),t._v(" "),a("br"),a("i",[t._v(" February– April 2019 – Monaco ")]),t._v(" "),a("br"),t._v(" • Use of JavaScript, JQuery and HTML/CSS "),a("br"),t._v(" • Development of forms on the Qualios App "),a("br"),t._v(" • Introduction to project management; learn to write the necessary documents "),a("br"),t._v(" for the project and organisation for the different meeting"),a("br"),a("br"),a("a",{staticClass:"lien",attrs:{href:"https://www.exsymol.com/fr/"}},[t._v("Exsymol")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse-content"},[a("strong",{staticStyle:{color:"rgb(0, 140, 255)"}},[t._v(" Web Development for an EdTech App ")]),t._v(" "),a("br"),a("i",[t._v(" May 2020 – August 2020 – Maribor Slovenia ")]),a("br"),t._v(" • Testing of different features "),a("br"),t._v(" • Development of a new feature for the Blocksi App "),a("br"),t._v(" • Learning the Frameworks NodeJS and VuejS "),a("br"),a("br"),a("a",{staticClass:"lien",attrs:{href:"https://www.blocksi.net/"}},[t._v("Blocksi")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse-content"},[a("strong",{staticStyle:{color:"rgb(0, 140, 255)"}},[t._v("2012 – 2017")]),t._v(" Full immersion in an english family (at least a week each year) "),a("br"),t._v(" for a total of around 2-3 months ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse-content"},[a("strong",{staticStyle:{color:"rgb(0, 140, 255)"}},[t._v("July 2017")]),t._v(" Full immersion in an Argentine family for 2 weeks in Buenos Aires ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collapse-content"},[a("strong",{staticStyle:{color:"rgb(0, 140, 255)"}},[t._v("June – August 2016")]),t._v(" Full immersion in an Australian family for two months "),a("br"),t._v(" • one month in holyday "),a("br"),t._v(" • one month in the "),a("a",{staticClass:"lien",attrs:{href:"https://www.mfac.edu.au/"}},[t._v("Matthew Findlers")]),t._v(" Anglican school as an exchange student ")])}],O={data:function(){return{observe:0,active:-1}},methods:{collapse:function(t){var e=document.getElementsByClassName("collapse-item");e[t].firstElementChild.classList.toggle("active");var a=e[t].lastElementChild;console.log(this.active+"  "+t),-1==this.active?(a.style.maxHeight=a.scrollHeight+"px",a.style.padding="10px",this.active=t):this.active==t?(a.style.maxHeight=null,a.style.padding="0",this.active=-1):(e[this.active].firstElementChild.classList.toggle("active"),e[this.active].lastElementChild.style.maxHeight=null,e[this.active].lastElementChild.style.padding="0",a.style.maxHeight=a.scrollHeight+"px",a.style.padding="10px",this.active=t)}}},j=O,M=(a("5529"),Object(r["a"])(j,A,k,!1,null,"48940364",null)),$=M.exports,I={name:"App",components:{Home:w,About:E["default"],NavBar:S["default"],Exper:$},data:function(){return{index:0,pages:["first-page","second-page","third-page","fourth-page"]}}},H=I,T=(a("6213"),Object(r["a"])(H,m,h,!1,null,null,null)),L=T.exports;s["a"].use(p["a"]);var B=[{path:"/",name:"App",component:L},{path:"/first-page",name:"App",component:L}],P=new p["a"]({routes:B}),D=P,J=a("2f62");s["a"].use(J["a"]);var N=new J["a"].Store({state:{retour:!1,indexRetour:0},mutations:{CHANGE_RETOUR:function(t,e){t.retour=!t.retour,t.indexRetour=e.index}},actions:{changeretour:function(t,e){t.commit("CHANGE_RETOUR",e)}}});u["c"].add(d["a"]),u["c"].add(d["b"]),u["c"].add(d["c"]),u["c"].add(d["d"]),u["c"].add(f["c"]),u["c"].add(f["a"]),u["c"].add(f["b"]),s["a"].component("font-awesome-icon",v["a"]),s["a"].config.productionTip=!1,new s["a"]({router:D,store:N,render:function(t){return t(o)}}).$mount("#app")},6213:function(t,e,a){"use strict";a("e3e3")},"642f":function(t,e,a){"use strict";var s=a("f6ca"),n=a.n(s);e["default"]=n.a},"84ba":function(t,e,a){"use strict";var s=a("85ac"),n=a("642f"),i=(a("9c3f"),a("2877")),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,"07b12e6d",null);e["default"]=r.exports},"85ac":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"allBox"},[a("h1",[t._v(" About Me ")]),t._m(0),a("a",{attrs:{href:"#third-page"}},[a("div",{staticClass:"down"},[a("font-awesome-icon",{attrs:{icon:["fas","arrow-down"]}})],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"text"},[t._v(" I am actually in third year of engineering school in the "),a("a",{staticClass:"blue",attrs:{href:"http://imt-lille-douai.fr/en/"}},[t._v(" Mines-Telecoms Institut of Lille Douai. ")]),a("br"),t._v(" It is a "),a("a",{staticClass:"blue",attrs:{href:"http://imt-lille-douai.fr/en/formations/all-courses/general-engineering-studies/syllabus/"}},[t._v(" general engineering school ")]),t._v(" , but my main domain is Computer Sciences and my minor is Services and Industry "),a("br"),t._v(" I have started programing when I was 15 during IT class in highschool, then I start to learn by myself. "),a("br"),t._v(" I also like travels, musique, cinema, and spending time with my friends. "),a("br"),t._v(" I work with many different technologies. "),a("br")]),a("div",{staticClass:"Mytechs"},[a("div",{staticClass:"tech"},[t._v(" Python ")]),a("div",{staticClass:"tech"},[t._v(" Django ")]),a("div",{staticClass:"tech"},[t._v(" C/C++ ")]),a("div",{staticClass:"tech"},[t._v(" HTML/CSS ")]),a("div",{staticClass:"tech"},[t._v(" JavaScript ")]),a("div",{staticClass:"tech"},[t._v(" NodeJS ")]),a("div",{staticClass:"tech"},[t._v(" VueJS ")]),a("div",{staticClass:"tech"},[t._v(" Git ")]),a("div",{staticClass:"tech"},[t._v(" GitHub ")]),a("div",{staticClass:"tech"},[t._v(" GitLab ")])]),a("div",{staticClass:"center"},[a("a",{staticClass:"CV",attrs:{href:"CV-en-anglais.pdf",download:""}},[t._v("Download my CV")])])])}]},"8dd6":function(t,e,a){},"9c3f":function(t,e,a){"use strict";a("cf13")},c49e:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return n}));var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navBox"},[a("div",{staticClass:"box"},[a("a",{attrs:{href:"#first-page"}},[a("div",{staticClass:"logo"},[a("p",[t._v("My Portfolio")])])]),a("div",{staticClass:"navburger"},[a("div",{staticClass:"burger-packing"},[a("div",{staticClass:"burger"},[a("span",{staticClass:"ham buns"}),a("span",{staticClass:"ham filling"}),a("span",{staticClass:"ham buns bunsinv"})])]),a("div",{staticClass:"menu"},[a("div",{staticClass:"nav-items-box"},[a("div",{staticClass:"nav-items"},[a("p",[a("a",{attrs:{href:"#second-page"}},[t._v("about")])])]),a("div",{staticClass:"nav-items"},[a("a",{attrs:{href:"#third-page"}},[a("p",[t._v("experiences")])])])])])])])])}]},cf13:function(t,e,a){},d000:function(t,e,a){"use strict";var s=a("c49e"),n=a("e03c"),i=(a("4cdd"),a("2877")),r=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,"f305612a",null);e["default"]=r.exports},da13:function(t,e,a){},e03c:function(t,e,a){"use strict";var s=a("026f"),n=a.n(s);e["default"]=n.a},e3e3:function(t,e,a){},f6ca:function(t,e){}});
//# sourceMappingURL=app.733306e0.js.map