(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{3088:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/races",function(){return r(1379)}])},4196:function(n,t,r){"use strict";r.d(t,{E4:function(){return p},NA:function(){return h},nx:function(){return m},ws:function(){return g},l3:function(){return y},Wc:function(){return _},Hm:function(){return Z},j6:function(){return b},Wo:function(){return j},_:function(){return w},lH:function(){return S},tk:function(){return T},_u:function(){return R},PQ:function(){return x},Ew:function(){return C}});var i=r(4051),e=r.n(i),u=r(8100);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=n[r];return i}function c(n,t,r,i,e,u,o){try{var c=n[u](o),a=c.value}catch(s){return void r(s)}c.done?t(a):Promise.resolve(a).then(i,e)}function a(n){return function(){var t=this,r=arguments;return new Promise((function(i,e){var u=n.apply(t,r);function o(n){c(u,i,e,o,a,"next",n)}function a(n){c(u,i,e,o,a,"throw",n)}o(void 0)}))}}function s(n){return function(n){if(Array.isArray(n))return o(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"===typeof n)return o(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l="https://ergast.com/api/f1";function d(n){return f.apply(this,arguments)}function f(){return(f=a(e().mark((function n(t){var r,i;return e().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(l,"/").concat(t));case 2:return r=n.sent,n.next=5,r.json();case 5:return i=n.sent,n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return(0,u.ZP)(n,(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return d.apply(void 0,s(r)).then((function(n){return t(n.MRData)}))}))}function p(n,t){return v("".concat(null!==n&&void 0!==n?n:"current").concat(X(t),".json"),(function(n){return n.RaceTable}))}function h(n){return v("".concat(n,".json"),(function(n){return n.RaceTable}))}function m(){return v("seasons.json?limit=1000",(function(n){return n.SeasonTable}))}function g(n){return v("".concat(null!==n&&void 0!==n?n:"current","/driverStandings.json"),(function(n){return n.StandingsTable}))}function y(n){return v("drivers/".concat(n,"/driverStandings.json"),(function(n){return n.StandingsTable}))}function _(n){return v("constructors/".concat(n,"/constructorStandings.json?limit=999"),(function(n){return n.StandingsTable}))}function Z(n){return v("current/constructors".concat(X(n),".json"),(function(n){return n.ConstructorTable}))}function b(n){return v("current/circuits".concat(X(n),".json"),(function(n){return n.CircuitTable}))}function j(n){return v("drivers/".concat(n,".json"),(function(n){return n.DriverTable}))}function w(n,t){return v("".concat(null!==n&&void 0!==n?n:"current","/").concat(null!==t&&void 0!==t?t:"last","/results.json"),(function(n){return n.RaceTable}))}function S(){return v("current/last/constructorStandings.json?limit=1",(function(n){var t,r;return null===(r=null===(t=n.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.ConstructorStandings[0])||void 0===r?void 0:r.Constructor}))}function T(){return v("current/last/driverStandings.json?limit=1",(function(n){var t,r;return null===(r=null===(t=n.StandingsTable.StandingsLists[0])||void 0===t?void 0:t.DriverStandings[0])||void 0===r?void 0:r.Driver}))}function R(){return v("current/last/qualifying.json?limit=1",(function(n){var t,r;return null===(r=null===(t=n.RaceTable.Races[0])||void 0===t?void 0:t.QualifyingResults[0])||void 0===r?void 0:r.Driver}))}function x(){return v("current/last/results.json?limit=1",(function(n){var t,r;return null===(r=null===(t=n.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver}))}function C(){return v("current/last/fastest/1/results.json?limit=1",(function(n){var t,r;return null===(r=null===(t=n.RaceTable.Races[0])||void 0===t?void 0:t.Results[0])||void 0===r?void 0:r.Driver}))}function X(n){return n?"/"+n:""}},1508:function(n,t,r){"use strict";r.d(t,{Z:function(){return o}});var i=r(7997),e=r(9451),u=r.n(e);function o(n){var t=n.children;return(0,i.tZ)("div",{className:u().card,children:t})}},1902:function(n,t,r){"use strict";r.d(t,{Z:function(){return l}});var i=r(7997),e=r(1508),u=r(8080),o=r(290),c=r.n(o);function a(){return(0,i.BX)("div",{className:c()["lds-ring"],children:[(0,i.tZ)("div",{}),(0,i.tZ)("div",{}),(0,i.tZ)("div",{}),(0,i.tZ)("div",{})]})}var s=r(5822);function l(n){var t=n.data,r=n.name,o=n.retry,c=n.page,l=n.card;if(t)return(0,i.tZ)(i.HY,{});var d=(0,i.BX)(i.HY,{children:[void 0===t&&(c?(0,i.tZ)("div",{children:(0,i.tZ)(a,{})}):(0,i.tZ)(u.g,{})),null===t&&(0,i.tZ)(s.Z,{name:r,retry:o})]});return l||c&&null===t?(0,i.tZ)(e.Z,{children:d}):d}},9139:function(n,t,r){"use strict";r.d(t,{Z:function(){return c}});var i=r(7997),e=r(8018),u=r.n(e);function o(n,t,r){return n.map((function(n){return(0,i.BX)("li",{children:[" ",t(n)," "]},r(n))}))}function c(n){var t=n.data,r=n.renderer,e=n.keyExtractor,c=n.small;return(0,i.tZ)("div",{children:(0,i.tZ)("ul",{className:u().list,style:{maxWidth:c?"700px":void 0},children:o(t,r,e)})})}},8080:function(n,t,r){"use strict";r.d(t,{g:function(){return o}});var i=r(7997),e=r(1405),u=r.n(e);function o(){return(0,i.tZ)("div",{className:u()["lds-container"],children:(0,i.BX)("div",{className:u()["lds-ellipsis"],children:[(0,i.tZ)("div",{}),(0,i.tZ)("div",{}),(0,i.tZ)("div",{}),(0,i.tZ)("div",{})]})})}},5822:function(n,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(7997),e=r(830);function u(n){var t=n.name,r=n.retry;return(0,i.BX)("div",{style:{padding:"3px"},children:["Error loading ",t,". ",(0,i.tZ)(e.Z,{onClick:r})]})}},830:function(n,t,r){"use strict";r.d(t,{Z:function(){return e}});var i=r(7997);function e(n){var t=n.onClick;return(0,i.tZ)("a",{onClick:t,href:"#",style:{color:"var(--primary-color)"},children:"Retry"})}},1379:function(n,t,r){"use strict";r.r(t);var i=r(7997),e=r(1664),u=r(9139),o=r(4196),c=r(1902);t.default=function(){var n,t=(0,o.E4)(),r=t.data,a=t.mutate;return(0,i.BX)(i.HY,{children:[(0,i.BX)("h1",{children:["Races (",null!==(n=null===r||void 0===r?void 0:r.season)&&void 0!==n?n:(new Date).getFullYear(),")"]}),r?(0,i.tZ)(u.Z,{data:r.Races,renderer:function(n){return(0,i.BX)("div",{style:{opacity:new Date("".concat(n.date," ").concat(n.time)).getTime()<=Date.now()?1:.75},children:[(0,i.tZ)("p",{children:(0,i.tZ)(e.default,{href:"/races/".concat(n.round),children:n.raceName})}),(0,i.BX)("p",{children:["Country: ",n.Circuit.Location.country]}),(0,i.BX)("p",{children:["Locality: ",n.Circuit.Location.locality]}),(0,i.BX)("p",{children:["Date: ",n.date," ",n.time]})]})},keyExtractor:function(n){return n.raceName}}):(0,i.tZ)(c.Z,{data:r,name:"races",retry:a,page:!0})]})}},9451:function(n){n.exports={card:"Card_card__z6owP"}},8018:function(n){n.exports={list:"List_list__3a3uj"}},1405:function(n){n.exports={"lds-container":"Loading_lds-container__7t08X","lds-ellipsis":"Loading_lds-ellipsis__YO8wB","lds-ellipsis1":"Loading_lds-ellipsis1__LzdJJ","lds-ellipsis2":"Loading_lds-ellipsis2__JTFD7","lds-ellipsis3":"Loading_lds-ellipsis3__qK3jx"}},290:function(n){n.exports={"lds-ring":"LoadingRing_lds-ring__DBGJM"}}},function(n){n.O(0,[888,179],(function(){return t=3088,n(n.s=t);var t}));var t=n.O();_N_E=t}]);