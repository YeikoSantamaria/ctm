(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return O})),a.d(t,"metadata",(function(){return j})),a.d(t,"toc",(function(){return v})),a.d(t,"default",(function(){return g}));var n=a(3),r=a(7),i=a(0),l=a.n(i),c=a(121),o=a(138),u=a(122),s=a(89),b=a.n(s);const d=37,p=39;var m=function(e){const{lazy:t,block:a,defaultValue:n,values:r,groupId:c,className:s}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[O,j]=Object(i.useState)(n),v=i.Children.toArray(e.children),y=[];if(null!=c){const e=m[c];null!=e&&e!==O&&r.some((t=>t.value===e))&&j(e)}const g=e=>{const t=e.target,a=y.indexOf(t),n=v[a].props.value;j(n),null!=c&&(f(c,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:l}=window;return t>=0&&r<=l&&n<=i&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((()=>t.classList.remove(b.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let a;switch(e.keyCode){case p:{const t=y.indexOf(e.target)+1;a=y[t]||y[0];break}case d:{const t=y.indexOf(e.target)-1;a=y[t]||y[y.length-1];break}}null===(t=a)||void 0===t||t.focus()};return l.a.createElement("div",{className:"tabs-container"},l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":a},s)},r.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,className:Object(u.a)("tabs__item",b.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:h,onFocus:g,onClick:g},t)))),t?Object(i.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))};var f=function({children:e,hidden:t,className:a}){return l.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)},O={title:"Afiliaci\xf3n"},j={unversionedId:"afiliaci\xf3n",id:"afiliaci\xf3n",isDocsHomePage:!1,title:"Afiliaci\xf3n",description:"Pago de cuotas para afiliarse a la CTM",source:"@site/docs\\afiliaci\xf3n.md",slug:"/afiliaci\xf3n",permalink:"/docs/afiliaci\xf3n",editUrl:"https://github.com/yeikosantamaria/ctm/edit/master/docs-ctm/docs/afiliaci\xf3n.md",version:"current",sidebar:"docs",previous:{title:"Markdown",permalink:"/docs/markdown"}},v=[{value:"Pago de cuotas para afiliarse a la CTM",id:"pago-de-cuotas-para-afiliarse-a-la-ctm",children:[]},{value:"Cuota unica de afiliaci\xf3n a la CTM",id:"cuota-unica-de-afiliaci\xf3n-a-la-ctm",children:[{value:"requisitos para afiliarse",id:"requisitos-para-afiliarse",children:[]}]}],y={toc:v};function g(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"pago-de-cuotas-para-afiliarse-a-la-ctm"},"Pago de cuotas para afiliarse a la CTM"),Object(c.b)("h2",{id:"cuota-unica-de-afiliaci\xf3n-a-la-ctm"},"Cuota unica de afiliaci\xf3n a la CTM"),Object(c.b)(m,{className:"unique-tabs",defaultValue:"100",values:[{label:"$100.00",value:"100"},{label:"$50.00",value:"50"},{label:"$70.00",value:"banana"}],mdxType:"Tabs"},Object(c.b)(f,{value:"100",mdxType:"TabItem"},Object(c.b)("table",null,Object(c.b)("tr",null,Object(c.b)("td",null,"Meseros \ud83e\udd35\ud83c\udffc"),Object(c.b)("td",null,"Cantineros")),Object(c.b)("tr",null,Object(c.b)("td",null,"Garroteros"),Object(c.b)("td",null,"Ayudan. de bar")),Object(c.b)("tr",null,Object(c.b)("td",null,"Bellboy"),Object(c.b)("td",null,"Pluma")))),Object(c.b)(f,{value:"50",mdxType:"TabItem"},Object(c.b)("li",null,"Mozos"),Object(c.b)("li",null,"Camaristas"),Object(c.b)("li",null,"Steward"),Object(c.b)("li",null,"Jardineros"),Object(c.b)("li",null,"\xc1reas p\xfablicas"),Object(c.b)("li",null,"Surtidor de roperia")),Object(c.b)(f,{value:"banana",mdxType:"TabItem"},Object(c.b)("li",null,"Cocinero a,b,c"),Object(c.b)("li",null,"Pastelero"),Object(c.b)("li",null,"Panadero"),Object(c.b)("li",null,"Carnicero"),Object(c.b)("li",null,"Operador de cuartos"),Object(c.b)("li",null,"Lavanderia"),Object(c.b)("li",null,"Costurera"),Object(c.b)("li",null,"Mantenimiento"),Object(c.b)("li",null,"Alba\xf1il"))),Object(c.b)("h3",{id:"requisitos-para-afiliarse"},"requisitos para afiliarse"),Object(c.b)("p",null,"1 copia de: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Acta de nacimiento "),Object(c.b)("li",{parentName:"ul"},"Credencial de elector "),Object(c.b)("li",{parentName:"ul"},"Comprobante de domicilio "),Object(c.b)("li",{parentName:"ul"},"Comprobante de estudios "),Object(c.b)("li",{parentName:"ul"},"N\xfamero de afiliaci\xf3n del IMSS"),Object(c.b)("li",{parentName:"ul"},"CURP"),Object(c.b)("li",{parentName:"ul"},"RFC "),Object(c.b)("li",{parentName:"ul"},"2 Cartas de recomendaci\xf3n")))}g.isMDXComponent=!0},121:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=s(a),p=n,m=b["".concat(l,".").concat(p)]||b[p]||d[p]||i;return a?r.a.createElement(m,c(c({ref:t},u),{},{components:a})):r.a.createElement(m,c({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var u=2;u<i;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},122:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},138:function(e,t,a){"use strict";var n=a(0),r=a(139);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},139:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r}}]);