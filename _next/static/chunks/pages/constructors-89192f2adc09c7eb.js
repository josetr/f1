(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[936],{7340:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/constructors",function(){return r(818)}])},1508:function(n,t,r){"use strict";r.d(t,{Z:function(){return s}});var e=r(5893),a=r(9451),u=r.n(a);function s(n){var t=n.children;return(0,e.jsx)("div",{className:u().card,children:t})}},9139:function(n,t,r){"use strict";r.d(t,{Z:function(){return c}});var e=r(5893),a=r(8018),u=r.n(a);function s(n,t,r){return n.map((function(n){return(0,e.jsxs)("li",{children:[" ",t(n)," "]},r(n))}))}function c(n){var t=n.data,r=n.renderer,a=n.keyExtractor,c=n.small;return(0,e.jsx)("div",{className:"center",style:{maxWidth:c?"700px":void 0},children:(0,e.jsx)("ul",{className:u().list,children:s(t,r,a)})})}},8080:function(n,t,r){"use strict";r.d(t,{g:function(){return s}});var e=r(5893),a=r(1405),u=r.n(a);function s(){return(0,e.jsxs)("div",{className:u()["lds-ellipsis"],children:[(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{})]})}},818:function(n,t,r){"use strict";r.r(t);var e=r(5893),a=r(7294),u=r(1664),s=r(9139),c=r(8080),i=r(4190),o=r(1508);t.default=function(){var n,t=(0,a.useState)(),r=t[0],l=t[1];return(0,a.useEffect)((function(){(0,i.Qc)().then((function(n){return l(n)})).catch((function(n){return l(null)}))}),[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("h1",{children:["Constructors (",null!==(n=null===r||void 0===r?void 0:r.season)&&void 0!==n?n:(new Date).getFullYear(),")"]}),!r&&(0,e.jsxs)(o.Z,{children:[void 0===r&&(0,e.jsx)(c.g,{}),null===r&&"Error loading constructors"]}),r&&(0,e.jsx)(s.Z,{data:r.Constructors,renderer:function(n){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("p",{children:(0,e.jsx)(u.default,{href:"/constructors/".concat(n.constructorId),children:n.name})}),(0,e.jsxs)("p",{children:["Nationality: ",n.nationality]})]})},keyExtractor:function(n){return n.name},small:!0})]})}},4190:function(n,t,r){"use strict";r.d(t,{U2:function(){return o},gv:function(){return l},J2:function(){return f},sM:function(){return v},IZ:function(){return x},Fp:function(){return y},Qc:function(){return j},TX:function(){return _},jr:function(){return g},yc:function(){return k},bv:function(){return M},BA:function(){return C},NG:function(){return E},pf:function(){return P},Py:function(){return Z}});var e=r(4051),a=r.n(e),u=r(9669),s=r.n(u);function c(n,t,r,e,a,u,s){try{var c=n[u](s),i=c.value}catch(o){return void r(o)}c.done?t(i):Promise.resolve(i).then(e,a)}function i(n){return function(){var t=this,r=arguments;return new Promise((function(e,a){var u=n.apply(t,r);function s(n){c(u,e,a,s,i,"next",n)}function i(n){c(u,e,a,s,i,"throw",n)}s(void 0)}))}}function o(n){return s().request({url:"".concat("https://ergast.com/api/f1","/").concat(n)})}function l(n,t){return p.apply(this,arguments)}function p(){return(p=i(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(null!==t&&void 0!==t?t:"current").concat(r?"/"+r:"",".json"));case 2:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=i(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("seasons.json?limit=1000");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.SeasonTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=i(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("".concat(null!==(r=null===t||void 0===t?void 0:t.season)&&void 0!==r?r:"current","/driverStandings.json"));case 3:return e=n.sent,n.abrupt("return",e.data.MRData.StandingsTable);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return b.apply(this,arguments)}function b(){return(b=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("constructors/".concat(t,"/constructorStandings.json?limit=999"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return m.apply(this,arguments)}function m(){return(m=i(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,o("constructors/".concat(t,".json"));case 3:return r=n.sent,n.abrupt("return",r.data.MRData.ConstructorTable);case 5:return n.next=7,o("current/constructors.json");case 7:return e=n.sent,n.abrupt("return",e.data.MRData.ConstructorTable);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){return R.apply(this,arguments)}function R(){return(R=i(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,o("current/circuits/".concat(t,".json"));case 3:return r=n.sent,n.abrupt("return",r.data.MRData.CircuitTable);case 5:return n.next=7,o("current/circuits.json");case 7:return e=n.sent,n.abrupt("return",e.data.MRData.CircuitTable);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return D.apply(this,arguments)}function D(){return(D=i(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("drivers/".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.DriverTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n,t){return T.apply(this,arguments)}function T(){return(T=i(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t||(t="current"),n.next=3,o("".concat(t,"/").concat(r,"/results.json"));case 3:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(){return S.apply(this,arguments)}function S(){return(S=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/constructorStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.ConstructorStandings[0])||void 0===r?void 0:r.Constructor);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(){return N.apply(this,arguments)}function N(){return(N=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/driverStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.DriverStandings[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(){return L.apply(this,arguments)}function L(){return(L=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/qualifying.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.QualifyingResults[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function P(){return F.apply(this,arguments)}function F(){return(F=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(){return J.apply(this,arguments)}function J(){return(J=i(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/fastest/1/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9451:function(n){n.exports={card:"Card_card__z6owP"}},8018:function(n){n.exports={list:"List_list__3a3uj"}},1405:function(n){n.exports={"lds-ellipsis":"Loading_lds-ellipsis__YO8wB","lds-ellipsis1":"Loading_lds-ellipsis1__LzdJJ","lds-ellipsis2":"Loading_lds-ellipsis2__JTFD7","lds-ellipsis3":"Loading_lds-ellipsis3__qK3jx"}}},function(n){n.O(0,[669,774,888,179],(function(){return t=7340,n(n.s=t);var t}));var t=n.O();_N_E=t}]);