(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{6454:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/circuits",function(){return r(8589)}])},1508:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(5893),u=r(9451),a=r.n(u);function i(n){var t=n.children;return(0,e.jsx)("div",{className:a().card,children:t})}},9139:function(n,t,r){"use strict";r.d(t,{Z:function(){return s}});var e=r(5893),u=r(8018),a=r.n(u);function i(n,t,r){return n.map((function(n){return(0,e.jsxs)("li",{children:[" ",t(n)," "]},r(n))}))}function s(n){var t=n.data,r=n.renderer,u=n.keyExtractor,s=n.small;return(0,e.jsx)("div",{className:"center",style:{maxWidth:s?"700px":void 0},children:(0,e.jsx)("ul",{className:a().list,children:i(t,r,u)})})}},8080:function(n,t,r){"use strict";r.d(t,{g:function(){return i}});var e=r(5893),u=r(1405),a=r.n(u);function i(){return(0,e.jsxs)("div",{className:a()["lds-ellipsis"],children:[(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{})]})}},8589:function(n,t,r){"use strict";r.r(t);var e=r(5893),u=r(7294),a=r(1664),i=r(9139),s=r(8080),c=r(4190),o=r(1508);t.default=function(){var n,t=(0,u.useState)(),r=t[0],l=t[1];return(0,u.useEffect)((function(){(0,c.TX)().then((function(n){return l(n)})).catch((function(n){return l(null)}))}),[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("h1",{children:["Circuits (",null!==(n=null===r||void 0===r?void 0:r.season)&&void 0!==n?n:(new Date).getFullYear(),")"]}),!r&&(0,e.jsxs)(o.Z,{children:[void 0===r&&(0,e.jsx)(s.g,{}),null===r&&"Error loading circuits"]}),r&&(0,e.jsx)(i.Z,{data:r.Circuits,renderer:function(n){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:(0,e.jsx)(a.default,{href:"/circuits/".concat(n.circuitId),children:n.circuitName})}),(0,e.jsxs)("p",{children:["Country: ",n.Location.country]})]})},keyExtractor:function(n){return n.circuitName}})]})}},4190:function(n,t,r){"use strict";r.d(t,{U2:function(){return o},gv:function(){return l},J2:function(){return f},sM:function(){return v},IZ:function(){return x},Fp:function(){return y},Qc:function(){return m},TX:function(){return _},jr:function(){return R},yc:function(){return k},bv:function(){return M},BA:function(){return N},NG:function(){return E},pf:function(){return P},Py:function(){return Z}});var e=r(4051),u=r.n(e),a=r(9669),i=r.n(a);function s(n,t,r,e,u,a,i){try{var s=n[a](i),c=s.value}catch(o){return void r(o)}s.done?t(c):Promise.resolve(c).then(e,u)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(e,u){var a=n.apply(t,r);function i(n){s(a,e,u,i,c,"next",n)}function c(n){s(a,e,u,i,c,"throw",n)}i(void 0)}))}}function o(n){return i().request({url:"".concat("https://ergast.com/api/f1","/").concat(n)})}function l(n,t){return p.apply(this,arguments)}function p(){return(p=c(u().mark((function n(t,r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(null!==t&&void 0!==t?t:"current").concat(X(r),".json"));case 2:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=c(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("seasons.json?limit=1000");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.SeasonTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(null!==t&&void 0!==t?t:"current","/driverStandings.json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return j.apply(this,arguments)}function j(){return(j=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("constructors/".concat(t,"/constructorStandings.json?limit=999"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return b.apply(this,arguments)}function b(){return(b=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("current/constructors".concat(X(t),".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.ConstructorTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){return g.apply(this,arguments)}function g(){return(g=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("current/circuits".concat(X(t),".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.CircuitTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function R(n){return D.apply(this,arguments)}function D(){return(D=c(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("drivers/".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.DriverTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n,t){return T.apply(this,arguments)}function T(){return(T=c(u().mark((function n(t,r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(null!==t&&void 0!==t?t:"current","/").concat(null!==r&&void 0!==r?r:"last","/results.json"));case 2:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(){return S.apply(this,arguments)}function S(){return(S=c(u().mark((function n(){var t,r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/constructorStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.ConstructorStandings[0])||void 0===r?void 0:r.Constructor);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return C.apply(this,arguments)}function C(){return(C=c(u().mark((function n(){var t,r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/driverStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.DriverStandings[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(){return L.apply(this,arguments)}function L(){return(L=c(u().mark((function n(){var t,r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/qualifying.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.QualifyingResults[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function P(){return F.apply(this,arguments)}function F(){return(F=c(u().mark((function n(){var t,r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){return J.apply(this,arguments)}function J(){return(J=c(u().mark((function n(){var t,r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/fastest/1/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function X(n){return n?"/"+n:""}},9451:function(n){n.exports={card:"Card_card__z6owP"}},8018:function(n){n.exports={list:"List_list__3a3uj"}},1405:function(n){n.exports={"lds-ellipsis":"Loading_lds-ellipsis__YO8wB","lds-ellipsis1":"Loading_lds-ellipsis1__LzdJJ","lds-ellipsis2":"Loading_lds-ellipsis2__JTFD7","lds-ellipsis3":"Loading_lds-ellipsis3__qK3jx"}}},function(n){n.O(0,[669,774,888,179],(function(){return t=6454,n(n.s=t);var t}));var t=n.O();_N_E=t}]);