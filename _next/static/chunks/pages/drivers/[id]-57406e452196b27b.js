(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{8264:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drivers/[id]",function(){return r(1823)}])},1508:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var e=r(5893),a=r(9451),s=r.n(a);function u(n){var t=n.children;return(0,e.jsx)("div",{className:s().card,children:t})}},8080:function(n,t,r){"use strict";r.d(t,{g:function(){return u}});var e=r(5893),a=r(1405),s=r.n(a);function u(){return(0,e.jsxs)("div",{className:s()["lds-ellipsis"],children:[(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{})]})}},1823:function(n,t,r){"use strict";r.r(t);var e=r(5893),a=r(7294),s=r(1664),u=r(8080),i=r(4190),c=r(1163),o=r(1508);t.default=function(){var n=(0,a.useState)(),t=n[0],r=n[1],l=(0,a.useState)(),d=l[0],p=l[1],f=(0,c.useRouter)(),v=f.query.id;(0,a.useEffect)((function(){f.isReady&&((0,i.jr)(v).then((function(n){return p(n)})).catch((function(n){return p(null)})),(0,i.U2)("drivers/".concat(v,"/driverStandings.json")).then((function(n){var t=n.data.MRData.StandingsTable;return t.StandingsLists.sort((function(n,t){return t.season-n.season})),r(t)})).catch((function(n){return p(null)})))}),[f.isReady,v]);var h,x,j=null===d||void 0===d?void 0:d.Drivers[0];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(o.Z,{children:[void 0===d&&"Loading...",null===d&&"Error loading driver data.",d&&null==j&&"Driver doesn't exist.",j&&(0,e.jsxs)("a",{href:j.url,children:[j.givenName," ",j.familyName]}),(0,e.jsxs)("p",{children:["Nationality: ",null!==(h=null===j||void 0===j?void 0:j.nationality)&&void 0!==h?h:"Unknown"]}),(0,e.jsxs)("p",{children:["Born: ",null!==(x=null===j||void 0===j?void 0:j.dateOfBirth)&&void 0!==x?x:"Unknown"]})]}),(0,e.jsxs)("table",{children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:"Season"}),(0,e.jsx)("th",{children:"Team"}),(0,e.jsx)("th",{children:"Points"}),(0,e.jsx)("th",{children:"Wins"})]})}),(0,e.jsxs)("tbody",{children:[!t&&(0,e.jsx)("tr",{children:(0,e.jsx)("td",{colSpan:4,children:(0,e.jsx)(u.g,{})})}),t&&t.StandingsLists.map((function(n){return(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:(0,e.jsx)(s.default,{href:"/seasons/".concat(n.season),children:n.season})}),(0,e.jsx)("td",{children:(0,e.jsx)(s.default,{href:"/constructors/".concat(n.DriverStandings[0].Constructors[0].constructorId),children:n.DriverStandings[0].Constructors[0].name})}),(0,e.jsx)("td",{children:n.DriverStandings[0].points}),(0,e.jsx)("td",{children:n.DriverStandings[0].wins})]},n.season)}))]})]})]})}},4190:function(n,t,r){"use strict";r.d(t,{U2:function(){return o},gv:function(){return l},J2:function(){return p},sM:function(){return v},IZ:function(){return x},Fp:function(){return w},Qc:function(){return b},TX:function(){return m},jr:function(){return D},yc:function(){return S},bv:function(){return T},BA:function(){return C},NG:function(){return L},pf:function(){return P},Py:function(){return B}});var e=r(4051),a=r.n(e),s=r(9669),u=r.n(s);function i(n,t,r,e,a,s,u){try{var i=n[s](u),c=i.value}catch(o){return void r(o)}i.done?t(c):Promise.resolve(c).then(e,a)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(e,a){var s=n.apply(t,r);function u(n){i(s,e,a,u,c,"next",n)}function c(n){i(s,e,a,u,c,"throw",n)}u(void 0)}))}}function o(n){return u().request({url:"".concat("https://ergast.com/api/f1","/").concat(n)})}function l(n,t){return d.apply(this,arguments)}function d(){return(d=c(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(null!==t&&void 0!==t?t:"current").concat(r?"/"+r:"",".json"));case 2:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("seasons.json?limit=1000");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.SeasonTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return j.apply(this,arguments)}function j(){return(j=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(null!==t&&void 0!==t?t:"current","/driverStandings.json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("constructors/".concat(t,"/constructorStandings.json?limit=999"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return g.apply(this,arguments)}function g(){return(g=c(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,o("constructors/".concat(t,".json"));case 3:return r=n.sent,n.abrupt("return",r.data.MRData.ConstructorTable);case 5:return n.next=7,o("current/constructors.json");case 7:return e=n.sent,n.abrupt("return",e.data.MRData.ConstructorTable);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return R.apply(this,arguments)}function R(){return(R=c(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,o("current/circuits/".concat(t,".json"));case 3:return r=n.sent,n.abrupt("return",r.data.MRData.CircuitTable);case 5:return n.next=7,o("current/circuits.json");case 7:return e=n.sent,n.abrupt("return",e.data.MRData.CircuitTable);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function D(n){return _.apply(this,arguments)}function _(){return(_=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("drivers/".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.DriverTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(n,t){return k.apply(this,arguments)}function k(){return(k=c(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t||(t="current"),n.next=3,o("".concat(t,"/").concat(r,"/results.json"));case 3:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(){return M.apply(this,arguments)}function M(){return(M=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/constructorStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.ConstructorStandings[0])||void 0===r?void 0:r.Constructor);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(){return N.apply(this,arguments)}function N(){return(N=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/driverStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.DriverStandings[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(){return E.apply(this,arguments)}function E(){return(E=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/qualifying.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.QualifyingResults[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function P(){return q.apply(this,arguments)}function q(){return(q=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function B(){return J.apply(this,arguments)}function J(){return(J=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/fastest/1/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9451:function(n){n.exports={card:"Card_card__z6owP"}},1405:function(n){n.exports={"lds-ellipsis":"Loading_lds-ellipsis__YO8wB","lds-ellipsis1":"Loading_lds-ellipsis1__LzdJJ","lds-ellipsis2":"Loading_lds-ellipsis2__JTFD7","lds-ellipsis3":"Loading_lds-ellipsis3__qK3jx"}}},function(n){n.O(0,[669,774,888,179],(function(){return t=8264,n(n.s=t);var t}));var t=n.O();_N_E=t}]);