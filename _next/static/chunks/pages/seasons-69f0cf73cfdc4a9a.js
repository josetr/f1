(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{2153:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/seasons",function(){return r(9764)}])},1508:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var e=r(5893),a=r(9451),s=r.n(a);function u(n){var t=n.children;return(0,e.jsx)("div",{className:s().card,children:t})}},9139:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(5893),a=r(8018),s=r.n(a);function u(n,t,r){return n.map((function(n){return(0,e.jsxs)("li",{children:[" ",t(n)," "]},r(n))}))}function i(n){var t=n.data,r=n.renderer,a=n.keyExtractor,i=n.small;return(0,e.jsx)("div",{className:"center",style:{maxWidth:i?"700px":void 0},children:(0,e.jsx)("ul",{className:s().list,children:u(t,r,a)})})}},8080:function(n,t,r){"use strict";r.d(t,{g:function(){return u}});var e=r(5893),a=r(1405),s=r.n(a);function u(){return(0,e.jsxs)("div",{className:s()["lds-ellipsis"],children:[(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{})]})}},9764:function(n,t,r){"use strict";r.r(t);var e=r(5893),a=r(7294),s=r(1664),u=r(9139),i=r(8080),c=r(4190),o=r(1508);t.default=function(){var n=(0,a.useState)(),t=n[0],r=n[1];return(0,a.useEffect)((function(){(0,c.sM)().then((function(n){n.Seasons.sort((function(n,t){return t.season-n.season})),r(n)})).catch((function(n){return r(null)}))}),[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("h1",{children:"Seasons"}),!t&&(0,e.jsxs)(o.Z,{children:[void 0===t&&(0,e.jsx)(i.g,{}),null===t&&"Error loading seasons."]}),t&&(0,e.jsx)(u.Z,{data:t.Seasons,renderer:function(n){return(0,e.jsx)("p",{style:{padding:"3px 0"},children:(0,e.jsx)(s.default,{href:"/seasons/".concat(n.season),children:n.season})})},keyExtractor:function(n){return n.season}})]})}},4190:function(n,t,r){"use strict";r.d(t,{U2:function(){return o},gv:function(){return l},J2:function(){return f},sM:function(){return v},IZ:function(){return x},Fp:function(){return y},Qc:function(){return j},TX:function(){return _},jr:function(){return g},yc:function(){return k},bv:function(){return M},BA:function(){return N},NG:function(){return E},pf:function(){return P},Py:function(){return J}});var e=r(4051),a=r.n(e),s=r(9669),u=r.n(s);function i(n,t,r,e,a,s,u){try{var i=n[s](u),c=i.value}catch(o){return void r(o)}i.done?t(c):Promise.resolve(c).then(e,a)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(e,a){var s=n.apply(t,r);function u(n){i(s,e,a,u,c,"next",n)}function c(n){i(s,e,a,u,c,"throw",n)}u(void 0)}))}}function o(n){return u().request({url:"".concat("https://ergast.com/api/f1","/").concat(n)})}function l(){return p.apply(this,arguments)}function p(){return(p=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("current.json");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("seasons.json?limit=1000");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.SeasonTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=c(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("".concat(null!==(r=null===t||void 0===t?void 0:t.season)&&void 0!==r?r:"current","/driverStandings.json"));case 3:return e=n.sent,n.abrupt("return",e.data.MRData.StandingsTable);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return b.apply(this,arguments)}function b(){return(b=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("constructors/".concat(t,"/constructorStandings.json?limit=999"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return m.apply(this,arguments)}function m(){return(m=c(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,o("constructors/".concat(t,".json"));case 3:return r=n.sent,n.abrupt("return",r.data.MRData.ConstructorTable);case 5:return n.next=7,o("current/constructors.json");case 7:return e=n.sent,n.abrupt("return",e.data.MRData.ConstructorTable);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){return R.apply(this,arguments)}function R(){return(R=c(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,o("current/circuits/".concat(t,".json"));case 3:return r=n.sent,n.abrupt("return",r.data.MRData.CircuitTable);case 5:return n.next=7,o("current/circuits.json");case 7:return e=n.sent,n.abrupt("return",e.data.MRData.CircuitTable);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return D.apply(this,arguments)}function D(){return(D=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("drivers/".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.DriverTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n,t){return T.apply(this,arguments)}function T(){return(T=c(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t||(t="current"),n.next=3,o("".concat(t,"/").concat(r,"/results.json"));case 3:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(){return S.apply(this,arguments)}function S(){return(S=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/constructorStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.ConstructorStandings[0])||void 0===r?void 0:r.Constructor);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function N(){return C.apply(this,arguments)}function C(){return(C=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/driverStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.DriverStandings[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(){return L.apply(this,arguments)}function L(){return(L=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/qualifying.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.QualifyingResults[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function P(){return Z.apply(this,arguments)}function Z(){return(Z=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function J(){return q.apply(this,arguments)}function q(){return(q=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/fastest/1/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9451:function(n){n.exports={card:"Card_card__z6owP"}},8018:function(n){n.exports={list:"List_list__3a3uj"}},1405:function(n){n.exports={"lds-ellipsis":"Loading_lds-ellipsis__YO8wB","lds-ellipsis1":"Loading_lds-ellipsis1__LzdJJ","lds-ellipsis2":"Loading_lds-ellipsis2__JTFD7","lds-ellipsis3":"Loading_lds-ellipsis3__qK3jx"}}},function(n){n.O(0,[669,774,888,179],(function(){return t=2153,n(n.s=t);var t}));var t=n.O();_N_E=t}]);