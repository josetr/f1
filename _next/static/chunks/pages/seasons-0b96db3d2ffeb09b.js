(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{7664:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seasons",function(){return r(7102)}])},1508:function(n,t,r){"use strict";r.d(t,{Z:function(){return s}});var e=r(7997),a=r(9451),u=r.n(a);function s(n){var t=n.children;return(0,e.tZ)("div",{className:u().card,children:t})}},9139:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(7997),a=r(8018),u=r.n(a);function s(n,t,r){return n.map((function(n){return(0,e.BX)("li",{children:[" ",t(n)," "]},r(n))}))}function i(n){var t=n.data,r=n.renderer,a=n.keyExtractor,i=n.small;return(0,e.tZ)("div",{className:"center",style:{maxWidth:i?"700px":void 0},children:(0,e.tZ)("ul",{className:u().list,children:s(t,r,a)})})}},8080:function(n,t,r){"use strict";r.d(t,{g:function(){return s}});var e=r(7997),a=r(1405),u=r.n(a);function s(){return(0,e.BX)("div",{className:u()["lds-ellipsis"],children:[(0,e.tZ)("div",{}),(0,e.tZ)("div",{}),(0,e.tZ)("div",{}),(0,e.tZ)("div",{})]})}},7102:function(n,t,r){"use strict";r.r(t);var e=r(7997),a=r(1720),u=r(1664),s=r(9139),i=r(8080),c=r(4190),o=r(1508);t.default=function(){var n=(0,a.useState)(),t=n[0],r=n[1];return(0,a.useEffect)((function(){(0,c.sM)().then((function(n){n.Seasons.sort((function(n,t){return t.season-n.season})),r(n)})).catch((function(n){return r(null)}))}),[]),(0,e.BX)(e.HY,{children:[(0,e.tZ)("h1",{children:"Seasons"}),!t&&(0,e.BX)(o.Z,{children:[void 0===t&&(0,e.tZ)(i.g,{}),null===t&&"Error loading seasons."]}),t&&(0,e.tZ)(s.Z,{data:t.Seasons,renderer:function(n){return(0,e.tZ)("p",{children:(0,e.tZ)(u.default,{href:"/seasons/".concat(n.season),children:n.season})})},keyExtractor:function(n){return n.season}})]})}},4190:function(n,t,r){"use strict";r.d(t,{U2:function(){return c},gv:function(){return l},J2:function(){return f},sM:function(){return v},IZ:function(){return w},Fp:function(){return y},Qc:function(){return m},TX:function(){return R},jr:function(){return k},yc:function(){return j},bv:function(){return S},BA:function(){return M},NG:function(){return E},pf:function(){return C},Py:function(){return B}});var e=r(4051),a=r.n(e);function u(n,t,r,e,a,u,s){try{var i=n[u](s),c=i.value}catch(o){return void r(o)}i.done?t(c):Promise.resolve(c).then(e,a)}function s(n){return function(){var t=this,r=arguments;return new Promise((function(e,a){var s=n.apply(t,r);function i(n){u(s,e,a,i,c,"next",n)}function c(n){u(s,e,a,i,c,"throw",n)}i(void 0)}))}}var i="https://ergast.com/api/f1";function c(n){return o.apply(this,arguments)}function o(){return(o=s(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"/").concat(t));case 2:return r=n.sent,n.next=5,r.json();case 5:return e=n.sent,n.abrupt("return",{data:e});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return p.apply(this,arguments)}function p(){return(p=s(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("".concat(null!==t&&void 0!==t?t:"current").concat(J(r),".json"));case 2:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=s(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=s(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("seasons.json?limit=1000");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.SeasonTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return x.apply(this,arguments)}function x(){return(x=s(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("".concat(null!==t&&void 0!==t?t:"current","/driverStandings.json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return b.apply(this,arguments)}function b(){return(b=s(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("constructors/".concat(t,"/constructorStandings.json?limit=999"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return _.apply(this,arguments)}function _(){return(_=s(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("current/constructors".concat(J(t),".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.ConstructorTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function R(n){return g.apply(this,arguments)}function g(){return(g=s(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("current/circuits".concat(J(t),".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.CircuitTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return D.apply(this,arguments)}function D(){return(D=s(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("drivers/".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.DriverTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n,t){return T.apply(this,arguments)}function T(){return(T=s(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c("".concat(null!==t&&void 0!==t?t:"current","/").concat(null!==r&&void 0!==r?r:"last","/results.json"));case 2:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(){return Z.apply(this,arguments)}function Z(){return(Z=s(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,c("current/last/constructorStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.ConstructorStandings[0])||void 0===r?void 0:r.Constructor);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(){return N.apply(this,arguments)}function N(){return(N=s(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,c("current/last/driverStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.DriverStandings[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(){return L.apply(this,arguments)}function L(){return(L=s(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,c("current/last/qualifying.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.QualifyingResults[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(){return X.apply(this,arguments)}function X(){return(X=s(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,c("current/last/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function B(){return P.apply(this,arguments)}function P(){return(P=s(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,c("current/last/fastest/1/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function J(n){return n?"/"+n:""}},9451:function(n){n.exports={card:"Card_card__z6owP"}},8018:function(n){n.exports={list:"List_list__3a3uj"}},1405:function(n){n.exports={"lds-ellipsis":"Loading_lds-ellipsis__YO8wB","lds-ellipsis1":"Loading_lds-ellipsis1__LzdJJ","lds-ellipsis2":"Loading_lds-ellipsis2__JTFD7","lds-ellipsis3":"Loading_lds-ellipsis3__qK3jx"}}},function(n){n.O(0,[888,179],(function(){return t=7664,n(n.s=t);var t}));var t=n.O();_N_E=t}]);