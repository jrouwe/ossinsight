"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7389],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(a,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20826:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={title:"Step 1: Setup TiDB Serverless",sidebar_position:2},s=void 0,l={unversionedId:"workshop/ossinsight-lite/setup-tidb-serverless",id:"workshop/ossinsight-lite/setup-tidb-serverless",title:"Step 1: Setup TiDB Serverless",description:"Signup TiDB Cloud",source:"@site/docs/workshop/ossinsight-lite/setup-tidb-serverless.md",sourceDirName:"workshop/ossinsight-lite",slug:"/workshop/ossinsight-lite/setup-tidb-serverless",permalink:"/docs/workshop/ossinsight-lite/setup-tidb-serverless",draft:!1,editUrl:"https://github.com/pingcap/ossinsight/tree/main/web/docs/workshop/ossinsight-lite/setup-tidb-serverless.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Step 1: Setup TiDB Serverless",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/workshop/ossinsight-lite/introduction"},next:{title:"Step 2: Setup GitHub Action",permalink:"/docs/workshop/ossinsight-lite/setup-github-action"}},a={},p=[{value:"Signup TiDB Cloud",id:"signup-tidb-cloud",level:2},{value:"Create a serverless cluster",id:"create-a-serverless-cluster",level:2},{value:"Get connection info",id:"get-connection-info",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"signup-tidb-cloud"},"Signup TiDB Cloud"),(0,o.kt)("p",null,"Register for a TiDB Cloud account at ",(0,o.kt)("a",{parentName:"p",href:"https://tidbcloud.com/channel?utm_source=ossinsight-lite"},"https://tidbcloud.com/signup"),"."),(0,o.kt)("h2",{id:"create-a-serverless-cluster"},"Create a serverless cluster"),(0,o.kt)("p",null,"Create a serverless cluster in the TiDB Cloud dashboard."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Make sure select ",(0,o.kt)("inlineCode",{parentName:"li"},"Serverless")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"Choose a Tier")," section;"),(0,o.kt)("li",{parentName:"ol"},"Leave other as default;")),(0,o.kt)("h2",{id:"get-connection-info"},"Get connection info"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect")," on top right;")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect With")," then you will see:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-config"},"host: 'gateway01.<your_region>.prod.aws.tidbcloud.com'\nport: 4000, \nuser: 'xxxxxxxxxxxxxxx.root', \npassword: '<your_password>', \n")))))}u.isMDXComponent=!0}}]);