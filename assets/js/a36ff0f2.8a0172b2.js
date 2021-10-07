"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9399],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8741:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],l={title:"lib",description:"Specification of the lib.rs module",keywords:["development","developers","lido","specification","intent","lib","solido","solana"],sidebar_position:8},s={unversionedId:"development/specification/solido/lib",id:"development/specification/solido/lib",isDocsHomePage:!1,title:"Lib",description:"Specification of the lib.rs module",source:"@site/docs/development/specification/solido/lib.md",sourceDirName:"development/specification/solido",slug:"/development/specification/solido/lib",permalink:"/development/specification/solido/lib",version:"current",sidebarPosition:8,frontMatter:{title:"lib",description:"Specification of the lib.rs module",keywords:["development","developers","lido","specification","intent","lib","solido","solana"],sidebar_position:8},sidebar:"solidoSidebar",previous:{title:"Instruction",permalink:"/development/specification/solido/instruction"},next:{title:"Logic",permalink:"/development/specification/solido/logic"}},c=[{value:"Constants",id:"constants",children:[{value:"RESERVE_AUTHORITY",id:"reserve_authority",children:[]},{value:"DEPOSIT_AUTHORITY",id:"deposit_authority",children:[]},{value:"VALIDATOR_STAKE_ACCOUNT",id:"validator_stake_account",children:[]}]},{value:"Functions",id:"functions",children:[{value:"find_authority_program_address",id:"find_authority_program_address",children:[]}]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aside from the standard Rust convention of pulling all the modules together, the lib.rs module contains some important seeds for the Solido program along with functionality to find the correct public key and bump seed for a given authority."),(0,i.kt)("h2",{id:"constants"},"Constants"),(0,i.kt)("h3",{id:"reserve_authority"},"RESERVE_AUTHORITY"),(0,i.kt)("p",null,"Seed for reserve authority in SOL."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub const RESERVE_AUTHORITY: &[u8] = b"reserve_authority";\n')),(0,i.kt)("h3",{id:"deposit_authority"},"DEPOSIT_AUTHORITY"),(0,i.kt)("p",null,"Seed for deposit authority"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub const DEPOSIT_AUTHORITY: &[u8] = b"deposit_authority";\n')),(0,i.kt)("h3",{id:"validator_stake_account"},"VALIDATOR_STAKE_ACCOUNT"),(0,i.kt)("p",null,"Additional seed for validator stake accounts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'pub const VALIDATOR_STAKE_ACCOUNT: &[u8] = b"validator_stake_account";\n')),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"find_authority_program_address"},"find_authority_program_address"),(0,i.kt)("p",null,"The find_authority_program_address function finds the public key and bump seed for a given authority."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn find_authority_program_address(\n    program_id: &Pubkey,\n    lido_address: &Pubkey,\n    authority: &[u8],\n) -> (Pubkey, u8) {\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: This function can take some time to run so it is preferred to use ",(0,i.kt)("inlineCode",{parentName:"p"},"PubKey::create_program_address")," function inside programs.")))}d.isMDXComponent=!0}}]);