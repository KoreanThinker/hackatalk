(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[7511],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),l=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),m=l(n),s=o,g=m["".concat(u,".").concat(s)]||m[s]||f[s]||a;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function s(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},815:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={slug:"react-navigation-v5",title:"react-navigation v5 \ub9c8\uc774\uadf8\ub808\uc774\uc158",author:"hyochan",authorTitle:"dooboolab core team",authorURL:"https://github.com/hyochan",authorImageURL:"https://avatars1.githubusercontent.com/u/27461460?s=460&u=b5860875e26d33fd70fd210f4ea74f81cdf9d99b&v=4",authorTwitter:"dooboolab",tags:["react-navigation","migration"]},c=void 0,u={permalink:"/ko/blog/react-navigation-v5",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2019-12-08-react-navigation-v5.md",title:"react-navigation v5 \ub9c8\uc774\uadf8\ub808\uc774\uc158",description:"react-navigation\uc774 v5\ubd80\ud130 \uc644\uc804\ud788 \uc7ac \uc124\uacc4\ub41c HOC \ud328\ud134\uc73c\ub85c \ucd9c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud574\ucee4\ud1a1\ub3c4 v5\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0 \uad00\ub828 \uac8c\uc2dc\ubb3c\uc744 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",date:"2019-12-08T00:00:00.000Z",formattedDate:"2019\ub144 12\uc6d4 8\uc77c",tags:[{label:"react-navigation",permalink:"/ko/blog/tags/react-navigation"},{label:"migration",permalink:"/ko/blog/tags/migration"}],readingTime:.09,truncated:!1,prevItem:{title:"Prisma2 \ub9c8\uc774\uadf8\ub808\uc774\uc158",permalink:"/ko/blog/prisma2-migration"},nextItem:{title:"dooboo-cli v3 \ub9b4\ub9ac\uc988",permalink:"/ko/blog/dooboo-cli-v3"}},l=[],p={toc:l};function f(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactnavigation.org"},"react-navigation"),"\uc774 ",(0,a.kt)("inlineCode",{parentName:"p"},"v5"),"\ubd80\ud130 \uc644\uc804\ud788 \uc7ac \uc124\uacc4\ub41c HOC \ud328\ud134\uc73c\ub85c \ucd9c\uc2dc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud574\ucee4\ud1a1\ub3c4 ",(0,a.kt)("inlineCode",{parentName:"p"},"v5"),"\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4. ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/dooboolab/migrating-to-react-navigation-v5-2998cd9c9d0b"},"\uc5ec\uae30\uc5d0 \uad00\ub828 \uac8c\uc2dc\ubb3c"),"\uc744 \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}f.isMDXComponent=!0}}]);