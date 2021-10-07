"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6018],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9432:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],s={title:"Governance",description:"Overview of governance in Lido for Solana",keywords:["governance","multi-sig","lido","solana"],sidebar_position:1},l={unversionedId:"governance",id:"governance",isDocsHomePage:!1,title:"Governance",description:"Overview of governance in Lido for Solana",source:"@site/docs/governance.md",sourceDirName:".",slug:"/governance",permalink:"/governance",version:"current",sidebarPosition:1,frontMatter:{title:"Governance",description:"Overview of governance in Lido for Solana",keywords:["governance","multi-sig","lido","solana"],sidebar_position:1},sidebar:"solidoSidebar",previous:{title:"How to use stSOL to earn secondary rewards",permalink:"/staking/stSOL-Liquidity"},next:{title:"Administration",permalink:"/administration"}},c=[{value:"The Lido DAO",id:"the-lido-dao",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lido for Solana is part of the ",(0,a.kt)("a",{parentName:"p",href:"https://lido.fi"},(0,a.kt)("strong",{parentName:"a"},"Lido Decentralized Autonomous\nOrganization"))," (",(0,a.kt)("strong",{parentName:"p"},"Lido DAO"),") which governs and enables the\ndevelopment of liquid staking solutions on different blockchains. The first\nliquid staking protocol solution was ",(0,a.kt)("a",{parentName:"p",href:"https://blog.lido.fi/staking-ethereum-with-lido/"},"built for\nEthereum")," \u2014 and now Lido is\nexpanding to different blockchain networks."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The long-term goals")," for Lido for Solana are decided on by the Lido\ncommunity through the Lido DAO."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The validator set")," for Lido for Solana is determined by the Lido Node\nOperator Subgovernance Group on behalf of the Lido DAO. Any validator can\napply, see also ",(0,a.kt)("a",{parentName:"li",href:"/validator-onboarding#validator-admission"},"the validator admission docs"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Admininistration rights")," ",(0,a.kt)("a",{parentName:"li",href:"/administration"},"reside with a 4-out-of-7 multisig")," that\nconsists of established validators and ecosystem partners. The role of this\nmultisig is to execute decisions made by the Lido DAO, not to make\nindependent decisions.")),(0,a.kt)("h2",{id:"the-lido-dao"},"The Lido DAO"),(0,a.kt)("p",null,"The Lido DAO is the deciding authority on the various parameters of the\necosystem. The DAO decides on fees, the validator set, etc. It is in the DAO\u2019s\ncharter to make the system run smoothly and it does so through the process of\nvoting.  Holders of the ",(0,a.kt)("strong",{parentName:"p"},"LDO")," governance token can vote on proposals, either\non-chain through ",(0,a.kt)("a",{parentName:"p",href:"https://mainnet.lido.fi/#/lido-dao"},"Aragon"),", or off-chain through ",(0,a.kt)("a",{parentName:"p",href:"https://snapshot.org/#/lido-snapshot.eth"},"Snapshot"),".\nFor example, the proposal by Chorus One to build Lido for Solana was ",(0,a.kt)("a",{parentName:"p",href:"https://snapshot.org/#/lido-snapshot.eth/proposal/QmdGihkHD61rimU5syA6VqesV3ZzAQPS6Vzn7H5NnjAXNE"},"accepted\nthrough a unanimous Snapshot vote")," in favor of the proposal. Before\nproposals are put up for voting, they are discussed on the ",(0,a.kt)("a",{parentName:"p",href:"https://research.lido.fi/"},"Lido forum"),"."))}d.isMDXComponent=!0}}]);