(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return v})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return y}));var n=r(3),a=r(7),o=r(0),c=r.n(o),i=r(115),u=r(118),s=r(119);function l(e){var t=e.to,r=e.children;return c.a.createElement(s.a,{to:t},r||c.a.createElement(u.a,{id:"team.profile.websiteLinkLabel"},"website"))}function m(e){var t=e.className,r=e.name,n=e.children,a=e.githubUrl,o=e.twitterUrl,i=e.facebookUrl;return c.a.createElement("div",{className:t},c.a.createElement("div",{className:"card card--full-height"},c.a.createElement("div",{className:"card__header"},c.a.createElement("div",{className:"avatar avatar--vertical"},c.a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:a+".png",alt:r+"'s avatar"}),c.a.createElement("div",{className:"avatar__intro"},c.a.createElement("h3",{className:"avatar__name"},r)))),c.a.createElement("div",{className:"card__body"},n),c.a.createElement("div",{className:"card__footer"},c.a.createElement("div",{className:"button-group button-group--block"},a&&c.a.createElement("a",{className:"button button--secondary",href:a},"GitHub"),o&&c.a.createElement("a",{className:"button button--secondary",href:o},"Twitter"),i&&c.a.createElement("a",{className:"button button--secondary",href:i},"Facebook")))))}function f(e){return c.a.createElement(m,Object(n.a)({},e,{className:"col col--12 margin-bottom--lg"}))}function d(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--12"},c.a.createElement(f,{name:"Yeiko Santamaria",githubUrl:"https://github.com/yeikosantamaria",twitterUrl:"https://twitter.com/yeikosantamaria",facebookUrl:"https://facebook.com/santamariayeiko"},c.a.createElement(u.a,{id:"team.profile.Yeiko Santamaria.body"},"Obsessed open-source enthusiast \ud83d\udc4b Eternal amateur at everything \ud83e\udd37\u200d\u2642\ufe0f Maintainer of Russian docs on PHP, React, Kubernetes and much more \ud83e\uddd0"))),c.a.createElement("div",{className:"col col--6"},c.a.createElement(f,{name:"Joel Marcey",githubUrl:"https://github.com/JoelMarcey",twitterUrl:"https://twitter.com/joelmarcey"},c.a.createElement(u.a,{id:"team.profile.Joel Marcey.body"},"Docusaurus founder and now ever grateful Docusaurus cheerleader to those who actually write code for it."))),c.a.createElement("div",{className:"col col--6"},c.a.createElement(f,{name:"S\xe9bastien Lorber",githubUrl:"https://github.com/slorber",twitterUrl:"https://twitter.com/sebastienlorber"},c.a.createElement(u.a,{id:"team.profile.Sebastien Lorber.body",values:{website:c.a.createElement(l,{to:"https://sebastienlorber.com/"}),devto:c.a.createElement(s.a,{to:"https://dev.to/sebastienlorber"},"Dev.to")}},"React lover since 2014. Freelance, helping Facebook ship Docusaurus v2. He writes regularly, on his {website} and {devto}."))),c.a.createElement(f,{name:"Yangshun Tay",githubUrl:"https://github.com/yangshun",twitterUrl:"https://twitter.com/yangshunz"},c.a.createElement(u.a,{id:"team.profile.Yangshun Tay.body"},"Full Front End Stack developer who likes working on the Jamstack. Working on Docusaurus made him Facebook's unofficial part-time Open Source webmaster, which is an awesome role to be in.")))}var b={title:"team"},v={type:"mdx",permalink:"/team",source:"@site/src/pages/team.mdx"},p=[{value:"Active Team",id:"active-team",children:[]}],h={toc:p};function y(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},h,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"active-team"},"Active Team"),Object(i.b)("p",null,"The Docusaurus team works on the core functionality, plugins for the classic theme, as well as the Docusaurus documentation website."),Object(i.b)("p",null,"Current members of the Docusaurus team are listed in alphabetical order below."),Object(i.b)(d,{mdxType:"ActiveTeamRow"}))}y.isMDXComponent=!0},115:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,b=m["".concat(c,".").concat(d)]||m[d]||f[d]||o;return r?a.a.createElement(b,i(i({ref:t},s),{},{components:r})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},118:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return f}));var n=r(0),a=r.n(n),o=/{\w+}/g,c="{}";function i(e,t){var r=[],n=e.replace(o,(function(e){var n=e.substr(1,e.length-2),o=null==t?void 0:t[n];if(void 0!==o){var i=a.a.isValidElement(o)?o:String(o);return r.push(i),c}return e}));return 0===r.length?e:r.every((function(e){return"string"==typeof e}))?n.split(c).reduce((function(e,t,n){var a;return e.concat(t).concat(null!==(a=r[n])&&void 0!==a?a:"")}),""):n.split(c).reduce((function(e,t,n){return[].concat(e,[a.a.createElement(a.a.Fragment,{key:n},t,r[n])])}),[])}function u(e){return i(e.children,e.values)}var s=r(26);function l(e){var t,r=e.id,n=e.message;return null!==(t=s[null!=r?r:n])&&void 0!==t?t:n}function m(e,t){var r,n=e.message;return i(null!==(r=l({message:n,id:e.id}))&&void 0!==r?r:n,t)}function f(e){var t,r=e.children,n=e.id,o=e.values,c=null!==(t=l({message:r,id:n}))&&void 0!==t?t:r;return a.a.createElement(u,{values:o},c)}},119:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(10),c=r(125),i=r(8),u=Object(n.createContext)({collectLink:function(){}}),s=r(121),l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.a=function(e){var t,r,m,f=e.isNavLink,d=e.to,b=e.href,v=e.activeClassName,p=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,g=void 0===y||y,w=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=Object(s.b)().withBaseUrl,E=Object(n.useContext)(u),j=d||b,k=Object(c.a)(j),N=null==j?void 0:j.replace("pathname://",""),U=void 0!==N?(r=N,g&&function(e){return e.startsWith("/")}(r)?O(r):r):void 0,P=Object(n.useRef)(!1),x=f?o.e:o.c,T=i.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!T&&k&&window.docusaurus.prefetch(U),function(){T&&m&&m.disconnect()}}),[U,T,k]);var D=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,_=!U||!k||D;return U&&k&&!D&&!h&&E.collectLink(U),_?a.a.createElement("a",Object.assign({href:U},j&&!k&&{target:"_blank",rel:"noopener noreferrer"},w)):a.a.createElement(x,Object.assign({},w,{onMouseEnter:function(){P.current||(window.docusaurus.preload(U),P.current=!0)},innerRef:function(e){var t,r;T&&e&&k&&(t=e,r=function(){window.docusaurus.prefetch(U)},(m=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t),m.disconnect(),r())}))}))).observe(t))},to:U||""},f&&{isActive:p,activeClassName:v}))}},121:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var n=r(16),a=r(125);function o(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,i=void 0!==c&&c,u=o.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(i)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+l:l}(o,r,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},125:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))}}]);