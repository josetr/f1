(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{3088:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/races",function(){return r(1379)}])},1508:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(7997),a=r(9451),u=r.n(a);function i(n){var t=n.children;return(0,e.tZ)("div",{className:u().card,children:t})}},9139:function(n,t,r){"use strict";r.d(t,{Z:function(){return c}});var e=r(7997),a=r(8018),u=r.n(a);function i(n,t,r){return n.map((function(n){return(0,e.BX)("li",{children:[" ",t(n)," "]},r(n))}))}function c(n){var t=n.data,r=n.renderer,a=n.keyExtractor,c=n.small;return(0,e.tZ)("div",{className:"center",style:{maxWidth:c?"700px":void 0},children:(0,e.tZ)("ul",{className:u().list,children:i(t,r,a)})})}},8080:function(n,t,r){"use strict";r.d(t,{g:function(){return i}});var e=r(7997),a=r(1405),u=r.n(a);function i(){return(0,e.BX)("div",{className:u()["lds-ellipsis"],children:[(0,e.tZ)("div",{}),(0,e.tZ)("div",{}),(0,e.tZ)("div",{}),(0,e.tZ)("div",{})]})}},1379:function(n,t,r){"use strict";r.r(t);var e=r(7997),a=r(1720),u=r(1664),i=r(9139),c=r(8080),s=r(4190),o=r(1508);t.default=function(){var n,t=(0,a.useState)(),r=t[0],l=t[1];return(0,a.useEffect)((function(){(0,s.gv)().then((function(n){return l(n)})).catch((function(n){return l(null)}))}),[]),(0,e.BX)(e.HY,{children:[(0,e.BX)("h1",{children:["Races (",null!==(n=null===r||void 0===r?void 0:r.season)&&void 0!==n?n:(new Date).getFullYear(),")"]}),!r&&(0,e.BX)(o.Z,{children:[void 0===r&&(0,e.tZ)(c.g,{}),null===r&&"Error loading races"]}),r&&(0,e.tZ)(i.Z,{data:r.Races,renderer:function(n){return(0,e.BX)("div",{style:{opacity:new Date("".concat(n.date," ").concat(n.time)).getTime()<=Date.now()?1:.75},children:[(0,e.tZ)("p",{children:(0,e.tZ)(u.default,{href:"/races/".concat(n.round),children:n.raceName})}),(0,e.BX)("p",{children:["Country: ",n.Circuit.Location.country]}),(0,e.BX)("p",{children:["Locality: ",n.Circuit.Location.locality]}),(0,e.BX)("p",{children:["Date: ",n.date," ",n.time]})]})},keyExtractor:function(n){return n.raceName}})]})}},4190:function(n,t,r){"use strict";r.d(t,{U2:function(){return s},gv:function(){return l},J2:function(){return f},sM:function(){return v},IZ:function(){return y},Fp:function(){return x},Qc:function(){return b},TX:function(){return R},jr:function(){return D},yc:function(){return T},bv:function(){return Z},BA:function(){return S},NG:function(){return X},pf:function(){return L},Py:function(){return E}});var e=r(4051),a=r.n(e);function u(n,t,r,e,a,u,i){try{var c=n[u](i),s=c.value}catch(o){return void r(o)}c.done?t(s):Promise.resolve(s).then(e,a)}function i(n){return function(){var t=this,r=arguments;return new Promise((function(e,a){var i=n.apply(t,r);function c(n){u(i,e,a,c,s,"next",n)}function s(n){u(i,e,a,c,s,"throw",n)}c(void 0)}))}}var c="https://ergast.com/api/f1";function s(n){return o.apply(this,arguments)}function o(){return(o=i(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/").concat(t));case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",{data:e});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return p.apply(this,arguments)}function p(){return(p=i(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(null!==t&&void 0!==t?t:"current").concat(J(r),".json"));case 2:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=i(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("seasons.json?limit=1000");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.SeasonTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(null!==t&&void 0!==t?t:"current","/driverStandings.json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("constructors/".concat(t,"/constructorStandings.json?limit=999"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return _.apply(this,arguments)}function _(){return(_=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("current/constructors".concat(J(t),".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.ConstructorTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function R(n){return g.apply(this,arguments)}function g(){return(g=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("current/circuits".concat(J(t),".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.CircuitTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function D(n){return k.apply(this,arguments)}function k(){return(k=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("drivers/".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.DriverTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(n,t){return j.apply(this,arguments)}function j(){return(j=i(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(null!==t&&void 0!==t?t:"current","/").concat(null!==r&&void 0!==r?r:"last","/results.json"));case 2:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){return M.apply(this,arguments)}function M(){return(M=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,s("current/last/constructorStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.ConstructorStandings[0])||void 0===r?void 0:r.Constructor);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(){return N.apply(this,arguments)}function N(){return(N=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,s("current/last/driverStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.DriverStandings[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function X(){return B.apply(this,arguments)}function B(){return(B=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,s("current/last/qualifying.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.QualifyingResults[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(){return C.apply(this,arguments)}function C(){return(C=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,s("current/last/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(){return P.apply(this,arguments)}function P(){return(P=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,s("current/last/fastest/1/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function J(n){return n?"/"+n:""}},9451:function(n){n.exports={card:"Card_card__z6owP"}},8018:function(n){n.exports={list:"List_list__3a3uj"}},1405:function(n){n.exports={"lds-ellipsis":"Loading_lds-ellipsis__YO8wB","lds-ellipsis1":"Loading_lds-ellipsis1__LzdJJ","lds-ellipsis2":"Loading_lds-ellipsis2__JTFD7","lds-ellipsis3":"Loading_lds-ellipsis3__qK3jx"}}},function(n){n.O(0,[888,179],(function(){return t=3088,n(n.s=t);var t}));var t=n.O();_N_E=t}]);