(function(e){function t(t){for(var r,a,o=t[0],u=t[1],d=t[2],l=0,m=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&m.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);g&&g(t);while(m.length)m.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},i=[];function o(e){return u.p+"js/"+({"backTracking~dynamicProgramming~greedy":"backTracking~dynamicProgramming~greedy","backTracking~greedy":"backTracking~greedy",backTracking:"backTracking","dynamicProgramming~greedy":"dynamicProgramming~greedy",greedy:"greedy",dynamicProgramming:"dynamicProgramming"}[e]||e)+"."+{"backTracking~dynamicProgramming~greedy":"863d11d6","backTracking~greedy":"3c615791",backTracking:"50d21ddb","dynamicProgramming~greedy":"25cedacc",greedy:"653a1d01",dynamicProgramming:"27ef4a9a"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"backTracking~dynamicProgramming~greedy":1,"backTracking~greedy":1,backTracking:1,"dynamicProgramming~greedy":1,greedy:1,dynamicProgramming:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({"backTracking~dynamicProgramming~greedy":"backTracking~dynamicProgramming~greedy","backTracking~greedy":"backTracking~greedy",backTracking:"backTracking","dynamicProgramming~greedy":"dynamicProgramming~greedy",greedy:"greedy",dynamicProgramming:"dynamicProgramming"}[e]||e)+"."+{"backTracking~dynamicProgramming~greedy":"1d1ab995","backTracking~greedy":"30c469b4",backTracking:"8cb52b44","dynamicProgramming~greedy":"a03129c4",greedy:"04ee91a4",dynamicProgramming:"77869580"}[e]+".css",c=u.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var d=i[o],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===c))return t()}var m=document.getElementsByTagName("style");for(o=0;o<m.length;o++){d=m[o],l=d.getAttribute("data-href");if(l===r||l===c)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var r=t&&t.target&&t.target.src||c,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],g.parentNode.removeChild(g),n(i)},g.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(g)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=i);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(e);var m=new Error;d=function(t){l.onerror=l.onload=null,clearTimeout(g);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}c[e]=void 0}};var g=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/visalgo/",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=t,d=d.slice();for(var m=0;m<d.length;m++)t(d[m]);var g=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"41f6":function(e,t,n){"use strict";n("86e1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("c760"),n("d3b7"),n("f8c9");var r=n("7a23"),a=(n("93bb"),n("e1fe"),n("eaec"),n("8f60"),n("9590"),n("b065"),n("5959"),n("f872"),n("e2bc")),c=n("fc2b"),i=n("54bb"),o=function(e){return Object(r["pushScopeId"])("data-v-6817008a"),e=e(),Object(r["popScopeId"])(),e},u=o((function(){return Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("span",null,"Visalgo")],-1)})),d=o((function(){return Object(r["createElementVNode"])("span",null,"动态规划",-1)})),l=o((function(){return Object(r["createElementVNode"])("span",null,"面额问题",-1)})),m=o((function(){return Object(r["createElementVNode"])("span",null,"01背包问题",-1)})),g=o((function(){return Object(r["createElementVNode"])("span",null,"矩阵链乘法",-1)})),b=o((function(){return Object(r["createElementVNode"])("span",null,"最长公共子序列",-1)})),f=o((function(){return Object(r["createElementVNode"])("span",null,"回溯法",-1)})),s=o((function(){return Object(r["createElementVNode"])("span",null,"N皇后问题",-1)})),y=o((function(){return Object(r["createElementVNode"])("span",null,"贪心法",-1)})),p=o((function(){return Object(r["createElementVNode"])("span",null,"活动安排问题",-1)})),O=o((function(){return Object(r["createElementVNode"])("span",null,"字符串去重",-1)}));function j(e,t){var n=a["c"],o=Object(r["resolveComponent"])("collection"),j=i["a"],h=Object(r["resolveComponent"])("files"),k=c["b"],P=c["c"],v=c["a"],x=a["a"],N=Object(r["resolveComponent"])("router-view"),C=a["d"],V=a["b"];return Object(r["openBlock"])(),Object(r["createBlock"])(V,{class:"home-container"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(n,null,{default:Object(r["withCtx"])((function(){return[u]})),_:1}),Object(r["createVNode"])(V,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(x,{width:"200px"},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(v,{"active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":"2","text-color":"#fff",router:""},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(P,{index:"dynamic-programming"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),d]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{index:"denomination"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),l]})),_:1}),Object(r["createVNode"])(k,{index:"knapsack-problem"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),m]})),_:1}),Object(r["createVNode"])(k,{index:"matrix-chain-multiplication"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),g]})),_:1}),Object(r["createVNode"])(k,{index:"longest-common-subsequence"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),b]})),_:1})]})),_:1}),Object(r["createVNode"])(P,{index:"back-tracking"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),f]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{index:"nqueens"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),s]})),_:1})]})),_:1}),Object(r["createVNode"])(P,{index:"greedy"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(o)]})),_:1}),y]})),default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(k,{index:"activity-selection"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),p]})),_:1}),Object(r["createVNode"])(k,{index:"remove-duplicate-letters"},{title:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(h)]})),_:1}),O]})),_:1})]})),_:1})]})),_:1})]})),_:1}),Object(r["createVNode"])(C,null,{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])(N)]})),_:1})]})),_:1})]})),_:1})}n("41f6");var h=n("6b0d"),k=n.n(h);const P={},v=k()(P,[["render",j],["__scopeId","data-v-6817008a"]]);var x=v,N=(n("3ca3"),n("ddb0"),n("6c02")),C=[{path:"/nqueens",name:"NQueens",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("backTracking~greedy"),n.e("backTracking")]).then(n.bind(null,"ffb1"))}},{path:"/denomination",name:"Denomination",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"2c7a"))}},{path:"/matrix-chain-multiplication",name:"MatrixChainMultiplication",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"7dc3"))}},{path:"/longest-common-subsequence",name:"LongestCommonSubsequence",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"b5b4"))}},{path:"/knapsack-problem",name:"KnapsackProblem",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("dynamicProgramming")]).then(n.bind(null,"4a99"))}},{path:"/remove-duplicate-letters",name:"RemoveDuplicateLetters",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("backTracking~greedy"),n.e("greedy")]).then(n.bind(null,"a409"))}},{path:"/activity-selection",name:"ActivitySelection",component:function(){return Promise.all([n.e("backTracking~dynamicProgramming~greedy"),n.e("dynamicProgramming~greedy"),n.e("backTracking~greedy"),n.e("greedy")]).then(n.bind(null,"b303"))}},{path:"/",redirect:"/activity-selection"}],V=Object(N["a"])({history:Object(N["b"])(),routes:C}),w=V,T=(n("a630"),n("5502")),_=Object(T["a"])({state:{isFinished:!1,isBackTracking:!1,autoPlaySetting:0,backTrackingPosition:0,boardMaxCount:0,boardCurrCount:0,boardSize:4,boardData:[],boardState:[]},mutations:{boardInit:function(e,t){e.isFinished=!1,e.isBackTracking=!1,e.autoPlaySetting=0,e.backTrackingPosition=0,e.boardSize=t,e.boardMaxCount=0,e.boardCurrCount=0,e.boardData=[],e.boardState=[Array.from({length:t},(function(){return-1}))];for(var n=0;n<t;n++)e.boardData.push(Array.from({length:t},(function(){return 0})))},boardDestroy:function(e){e.isFinished=!1,e.isBackTracking=!1,e.autoPlaySetting=0,e.backTrackingPosition=0,e.boardMaxCount=0,e.boardCurrCount=0,e.boardData=[],e.boardState=[]}},actions:{},modules:{}}),E=(n("aede"),n("1ed2")),S=Object(r["createApp"])(x);for(var A in S.use(_).use(w),E)if(Reflect.has(E,A)){var D=E[A];S.component(A,D)}S.mount("#app")},"86e1":function(e,t,n){},aede:function(e,t,n){}});
//# sourceMappingURL=app.f1f58b7c.js.map