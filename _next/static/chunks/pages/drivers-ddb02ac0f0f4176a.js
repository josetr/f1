(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[672],{6557:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/drivers",function(){return r(3739)}])},1508:function(n,t,r){"use strict";r.d(t,{Z:function(){return i}});var e=r(5893),a=r(9451),s=r.n(a);function i(n){var t=n.children;return(0,e.jsx)("div",{className:s().card,children:t})}},9139:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var e=r(5893),a=r(8018),s=r.n(a);function i(n,t,r){return n.map((function(n){return(0,e.jsxs)("li",{children:[" ",t(n)," "]},r(n))}))}function u(n){var t=n.data,r=n.renderer,a=n.keyExtractor,u=n.small;return(0,e.jsx)("div",{className:"center",style:{maxWidth:u?"700px":void 0},children:(0,e.jsx)("ul",{className:s().list,children:i(t,r,a)})})}},8654:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var e=r(5893),a=r(1664),s=r(1783),i=r.n(s);function u(n){var t=n.driver,r=n.position,s=n.points,u=n.showNationality,c=void 0===u||u,o=s?" (".concat(s,")"):"";return(0,e.jsxs)("div",{className:i().card,style:c?{}:{padding:"8px"},children:[(0,e.jsx)("div",{className:i().no,children:(0,e.jsx)(a.default,{href:"/drivers/".concat(t.driverId),passHref:!0,children:(0,e.jsx)("a",{children:"#".concat(r)})})}),(0,e.jsxs)("div",{className:"expand",children:[(0,e.jsx)(a.default,{href:"/drivers/".concat(t.driverId),passHref:!0,children:(0,e.jsx)("a",{children:"".concat(t.givenName," ").concat(t.familyName).concat(o)})}),c&&(0,e.jsxs)("p",{children:["Nationality: ",t.nationality]})]})]})}},8080:function(n,t,r){"use strict";r.d(t,{g:function(){return i}});var e=r(5893),a=r(1405),s=r.n(a);function i(){return(0,e.jsxs)("div",{className:s()["lds-ellipsis"],children:[(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{}),(0,e.jsx)("div",{})]})}},3739:function(n,t,r){"use strict";r.r(t);var e=r(5893),a=r(7294),s=r(9139),i=r(8080),u=r(4190),c=r(8654),o=r(1508);t.default=function(){var n,t=(0,a.useState)(),r=t[0],l=t[1];return(0,a.useEffect)((function(){(0,u.IZ)().then((function(n){return l(n.StandingsLists[0])})).catch((function(n){return l(null)}))}),[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("h1",{children:["Drivers (",null!==(n=null===r||void 0===r?void 0:r.season)&&void 0!==n?n:(new Date).getFullYear(),")"]}),!r&&(0,e.jsxs)(o.Z,{children:[void 0===r&&(0,e.jsx)(i.g,{}),null===r&&"Error loading drivers"]}),r&&(0,e.jsx)(s.Z,{data:r.DriverStandings,renderer:function(n){return(0,e.jsx)(c.Z,{driver:n.Driver,position:n.position,points:n.points})},keyExtractor:function(n){return n.Driver.driverId},small:!0})]})}},4190:function(n,t,r){"use strict";r.d(t,{U2:function(){return o},gv:function(){return l},J2:function(){return p},sM:function(){return v},IZ:function(){return x},Fp:function(){return y},Qc:function(){return w},TX:function(){return _},jr:function(){return D},yc:function(){return k},bv:function(){return M},BA:function(){return S},NG:function(){return L},pf:function(){return P},Py:function(){return F}});var e=r(4051),a=r.n(e),s=r(9669),i=r.n(s);function u(n,t,r,e,a,s,i){try{var u=n[s](i),c=u.value}catch(o){return void r(o)}u.done?t(c):Promise.resolve(c).then(e,a)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(e,a){var s=n.apply(t,r);function i(n){u(s,e,a,i,c,"next",n)}function c(n){u(s,e,a,i,c,"throw",n)}i(void 0)}))}}function o(n){return i().request({url:"".concat("https://ergast.com/api/f1","/").concat(n)})}function l(){return d.apply(this,arguments)}function d(){return(d=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("current.json");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.RaceTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return(h=c(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("seasons.json?limit=1000");case 2:return t=n.sent,n.abrupt("return",t.data.MRData.SeasonTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return j.apply(this,arguments)}function j(){return(j=c(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("".concat(null!==(r=null===t||void 0===t?void 0:t.season)&&void 0!==r?r:"current","/driverStandings.json"));case 3:return e=n.sent,n.abrupt("return",e.data.MRData.StandingsTable);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return m.apply(this,arguments)}function m(){return(m=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("constructors/".concat(t,"/constructorStandings.json?limit=999"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.StandingsTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return b.apply(this,arguments)}function b(){return(b=c(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,o("constructors/".concat(t,".json"));case 3:return r=n.sent,n.abrupt("return",r.data.MRData.ConstructorTable);case 5:return n.next=7,o("current/constructors.json");case 7:return e=n.sent,n.abrupt("return",e.data.MRData.ConstructorTable);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){return g.apply(this,arguments)}function g(){return(g=c(a().mark((function n(t){var r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,o("current/circuits/".concat(t,".json"));case 3:return r=n.sent,n.abrupt("return",r.data.MRData.CircuitTable);case 5:return n.next=7,o("current/circuits.json");case 7:return e=n.sent,n.abrupt("return",e.data.MRData.CircuitTable);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function D(n){return R.apply(this,arguments)}function R(){return(R=c(a().mark((function n(t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o("drivers/".concat(t,".json"));case 2:return r=n.sent,n.abrupt("return",r.data.MRData.DriverTable);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n,t){return T.apply(this,arguments)}function T(){return(T=c(a().mark((function n(t,r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t||(t="current"),n.next=3,o("".concat(t,"/").concat(r,"/results.json"));case 3:return e=n.sent,n.abrupt("return",e.data.MRData.RaceTable);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function M(){return N.apply(this,arguments)}function N(){return(N=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/constructorStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.ConstructorStandings[0])||void 0===r?void 0:r.Constructor);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/driverStandings.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.DriverStandings[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(){return E.apply(this,arguments)}function E(){return(E=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/qualifying.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.QualifyingResults[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function P(){return Z.apply(this,arguments)}function Z(){return(Z=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function F(){return I.apply(this,arguments)}function I(){return(I=c(a().mark((function n(){var t,r,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,o("current/last/fastest/1/results.json?limit=1");case 3:return e=n.sent,n.abrupt("return",null===(r=null===(t=e.data.MRData.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9451:function(n){n.exports={card:"Card_card__z6owP"}},8018:function(n){n.exports={list:"List_list__3a3uj"}},1783:function(n){n.exports={card:"ListDriverCard_card__PcPxa",no:"ListDriverCard_no__gFium"}},1405:function(n){n.exports={"lds-ellipsis":"Loading_lds-ellipsis__YO8wB","lds-ellipsis1":"Loading_lds-ellipsis1__LzdJJ","lds-ellipsis2":"Loading_lds-ellipsis2__JTFD7","lds-ellipsis3":"Loading_lds-ellipsis3__qK3jx"}}},function(n){n.O(0,[669,774,888,179],(function(){return t=6557,n(n.s=t);var t}));var t=n.O();_N_E=t}]);