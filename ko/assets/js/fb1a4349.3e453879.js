(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[891],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},s=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}s.displayName="MDXCreateElement"},3919:function(e,n,t){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}t.d(n,{b:function(){return o},Z:function(){return r}})},4996:function(e,n,t){"use strict";t.d(n,{C:function(){return i},Z:function(){return a}});var o=t(2263),r=t(3919);function i(){var e=(0,o.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,c=void 0!==a&&a,l=i.absolute,p=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,r.b)(t))return t;if(c)return n+t;var u=t.startsWith(n)?t:n+t.replace(/^\//,"");return p?e+u:u}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},7135:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var o=t(2122),r=t(9756),i=(t(7294),t(3905)),a=t(4996),c={id:"components",title:"\ucef4\ud3ec\ub10c\ud2b8",sidebar_label:"\ucef4\ud3ec\ub10c\ud2b8"},l=void 0,p={unversionedId:"client/components",id:"client/components",isDocsHomePage:!1,title:"\ucef4\ud3ec\ub10c\ud2b8",description:"Component \ub9cc\ub4e4\uae30",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/client/components.md",sourceDirName:"client",slug:"/client/components",permalink:"/ko/docs/client/components",editUrl:"https://github.com/dooboolab/hackatalk/tree/master/website/docs/client/components.md",version:"current",frontMatter:{id:"components",title:"\ucef4\ud3ec\ub10c\ud2b8",sidebar_label:"\ucef4\ud3ec\ub10c\ud2b8"},sidebar:"docs",previous:{title:"\uc124\uce58",permalink:"/ko/docs/client/installation"},next:{title:"Backend \uc5f0\ub3d9",permalink:"/ko/docs/client/integrate-with-backend"}},u=[{value:"Component \ub9cc\ub4e4\uae30",id:"component-\ub9cc\ub4e4\uae30",children:[{value:"dooboo-cli \uc0ac\uc6a9\ud558\uae30",id:"dooboo-cli-\uc0ac\uc6a9\ud558\uae30",children:[]}]},{value:"\ud0c0\uc785",id:"\ud0c0\uc785",children:[{value:"Navigation",id:"navigation",children:[]},{value:"Page",id:"page",children:[]},{value:"UI",id:"ui",children:[]}]}],d={toc:u};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"component-\ub9cc\ub4e4\uae30"},"Component \ub9cc\ub4e4\uae30"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HackaTalk"),"\uc5d0 \ucd94\uac00 \uad6c\uc131 \uc694\uc18c\ub97c \uc0dd\uc131\ud558\ub824\uba74",(0,i.kt)("inlineCode",{parentName:"p"},"dooboo page")," \uba85\ub839\uc744 \ud1b5\ud574 \uc27d\uac8c \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub824\uba74 \uba3c\uc800 ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli"),"\ub97c \uc124\uce58\ud574\uc57c\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"dooboo-cli-\uc0ac\uc6a9\ud558\uae30"},(0,i.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli")," \uc0ac\uc6a9\ud558\uae30"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli"),"\uac00 ",(0,i.kt)("strong",{parentName:"p"},"version 3"),"\uc73c\ub85c 2019\ub144 12\uc6d4\uc5d0 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/dooboolab/announcing-dooboo-cli-v3-5c9fceeb2ac4"},"Mediaum \ud3ec\uc2a4\ud2b8"),"\uc5d0\uc11c \uad00\ub828 \ub0b4\uc6a9\uc744 \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub9ac\uace0 ",(0,i.kt)("strong",{parentName:"p"},"dooboo-cli@6")," \ubc84\uc804\ubd80\ud130\ub294 \ud15c\ud50c\ub9bf\uc5d0 \ub2e4\uc18c \ubcc0\uacbd\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uacfc\uac70\uc5d0\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"screen"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"shared"),"\ub85c \ud3f4\ub354\uad00\ub9ac\ub97c \ud588\uc9c0\ub9cc \ud574\ub2f9 \ubc84\uc804\ubd80\ud130\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"navigations"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"pages"),", \uadf8\ub9ac\uace0 ",(0,i.kt)("inlineCode",{parentName:"p"},"uis")," \uad6c\uc870\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad00\ub9ac\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("img",{src:(0,a.Z)("img/dooboo-cli-5.png"),alt:"dooboo-cli-v5 sample commands",width:"600"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc704 \uc2a4\ud06c\ub9b0\uc0f7\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"li"},"dooboo-cli"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ube60\ub974\uac8c \ucef4\ud3ec\ub10c\ud2b8 \ud15c\ud50c\ub9bf\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,i.kt)("h2",{id:"\ud0c0\uc785"},"\ud0c0\uc785"),(0,i.kt)("p",null,"\uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uac83\ucc98\ub7fc \ud604\uc7ac \uba54\uc778 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc740 \ub300\ud45c\uc801\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"navigation"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ui")," 3\uac00\uc9c0 \ud2b9\uc131\uc73c\ub85c \uad6c\ubd84\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"navigation"},"Navigation"),(0,i.kt)("p",null,"\ub124\ube44\uac8c\uc774\uc158 \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud558\ub098\uc758 \uc2a4\ud06c\ub9b0\uc744 \ub2f4\ub2f9\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \ubb36\uc5b4\uc8fc\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub9cc\uc57d\uc5d0 \uc5ec\ub7ec\ubd84\uc758 \uc571\uc774 \uad49\uc7a5\ud788 \ubcf5\uc7a1\ud55c \ub124\ube44\uac8c\uc774\uc158 \uad6c\uc870\ub97c \uac00\uc9c0\uace0 \uc788\ub2e4\uba74 \ub124\ube44\uac8c\uc774\uc158 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \ubcc4\ub3c4 \ub514\ub809\ud1a0\ub9ac\uac00 \uc544\ub2cc ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," \ucef4\ud3ec\ub10c\ud2b8 \uc548\uc5d0\uc11c \uc791\uc131\ud558\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub9bd\ub2c8\ub2e4."),(0,i.kt)("h4",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,i.kt)("img",{src:(0,a.Z)("img/nested-navigation-structure.png"),alt:"dooboo-cli-v5 sample commands",width:"300"}),(0,i.kt)("p",null,"\uc704 \uad6c\uc870\ub294 \ubcf5\uc7a1\ud55c \ub124\ube44\uac8c\uc774\uc158 \uad6c\uc870 \uc548\uc5d0\uc11c \ub2f9\uc2e0\uc73c\ub85c \ud558\uc5ec\uae08 \ub354 \uc27d\uac8c \uc6d0\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ucc3e\uc544\uac08 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc90d\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"page"},"Page"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Page")," \ucef4\ud3ec\ub10c\ud2b8\ub294 \uc774\ub978\ubc14 ",(0,i.kt)("inlineCode",{parentName:"p"},"full-screen-sized")," component\ub85c \ub300\uac1c \ub514\ubc14\uc774\uc2a4 \uc2a4\ud06c\ub9b0 \uc0ac\uc774\uc988\ub9cc\ud07c \ucc28\uc9c0\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \ub9d0\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uac00\ub054 ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud0ed")," \ud654\uba74\uc73c\ub85c \uac00\ub824\uc838 \uc870\uae08 \ub354 \uc791\uc740 \uc2a4\ud06c\ub9b0 \uc0ac\uc774\uc988\ub97c \ucee4\ubc84\ud558\ub294 \ud654\uba74\ub4e4\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \uacbd\uc6b0 \ub9cc\uc57d \ud558\ub098\uc758 ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc720\uc77c\ud558\uac8c \ub098\uba38\uc9c0 \uc601\uc5ed\uc744 \ubaa8\ub450 \uad00\ud560\ud558\uace0 \uc788\ub2e4\uba74 \uc774 \ub610\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," \ucef4\ud3ec\ub10c\ud2b8\ub85c \ucde8\uae09\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"ui"},"UI"),(0,i.kt)("p",null,"UI \ucef4\ud3ec\ub10c\ud2b8\ub294 UI \ub808\uc774\uc5b4\uc5d0 \uc911\uc810\uc744 \ub454 \uc7ac\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc785\ub2c8\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"Button"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"EditText"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Calendar")," \ub4f1\uacfc \uac19\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc774 \uc5ec\uae30\uc5d0 \ud574\ub2f9\ub429\ub2c8\ub2e4. \ub9ce\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"page")," \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc774 UI \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc7ac\uc0ac\uc6a9\ud560 \uc788\uc2b5\ub2c8\ub2e4."))}s.isMDXComponent=!0}}]);