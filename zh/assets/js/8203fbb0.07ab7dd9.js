"use strict";(self.webpackChunkopenyurt_io=self.webpackChunkopenyurt_io||[]).push([[6495],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var a=r.createContext({}),c=function(t){var e=r.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(a.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,a=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),d=c(n),f=i,y=d["".concat(a,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(y,l(l({ref:e},p),{},{components:n})):r.createElement(y,l({ref:e},p))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u.mdxType="string"==typeof t?t:i,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9985:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],u={title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)"},a=void 0,c={unversionedId:"installation/yurtctl-init-join",id:"version-v0.5.0/installation/yurtctl-init-join",isDocsHomePage:!1,title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)",description:"1.\u80cc\u666f\u8bf4\u660e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v0.5.0/installation/yurtctl-init-join.md",sourceDirName:"installation",slug:"/installation/yurtctl-init-join",permalink:"/zh/docs/installation/yurtctl-init-join",editUrl:"https://github.com/openyurtio/openyurt.io/edit/master/docs/installation/yurtctl-init-join.md",tags:[],version:"v0.5.0",lastUpdatedBy:"Peeknut",lastUpdatedAt:1641451824,formattedLastUpdatedAt:"2022/1/6",frontMatter:{title:"\u521b\u5efaOpenYurt\u6d4b\u8bd5\u96c6\u7fa4(Yurtctl init/join)"},sidebar:"version-v0.5.0/docs",previous:{title:"OpenYurt\u662f\u4ec0\u4e48",permalink:"/zh/docs/"},next:{title:"\u4f7f\u7528 YurtCluster Operator \u90e8\u7f72\u8fb9\u7f18\u96c6\u7fa4",permalink:"/zh/docs/installation/yurtcluster"}},p=[{value:"1.\u80cc\u666f\u8bf4\u660e",id:"1\u80cc\u666f\u8bf4\u660e",children:[],level:2},{value:"2.\u4f7f\u7528\u6d41\u7a0b",id:"2\u4f7f\u7528\u6d41\u7a0b",children:[{value:"2.1\u524d\u7f6e\u51c6\u5907",id:"21\u524d\u7f6e\u51c6\u5907",children:[],level:3},{value:"2.2\u7f16\u8bd1 Yurtctl",id:"22\u7f16\u8bd1-yurtctl",children:[],level:3},{value:"2.3\u521d\u59cb\u5316\u96c6\u7fa4",id:"23\u521d\u59cb\u5316\u96c6\u7fa4",children:[],level:3},{value:"2.4\u8282\u70b9\u52a0\u5165",id:"24\u8282\u70b9\u52a0\u5165",children:[],level:3}],level:2}],s={toc:p};function d(t){var e=t.components,n=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1\u80cc\u666f\u8bf4\u660e"},"1.\u80cc\u666f\u8bf4\u660e"),(0,o.kt)("p",null,"\u4e3a\u4e86\u8ba9\u7528\u6237\u5feb\u901f\u62e5\u6709\u4e00\u4e2a OpenYurt \u6d4b\u8bd5\u96c6\u7fa4\uff0cOpenYurt \u63d0\u4f9b\u4e86\u547d\u4ee4 Yurtctl init \u521d\u59cb\u5316\u96c6\u7fa4\uff0cYurt -APP-Manager\u3001Yurt-Controller-Manager\u3001\nYurttunnel-Server\u3001Yurttunnel-Agent \u7ec4\u4ef6\u4f1a\u81ea\u52a8\u90e8\u7f72\u3002\u540e\u7eed\u6269\u5c55\u96c6\u7fa4\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 Yurtctl join\uff0c\u5c06\u8fb9\u7f18\u8282\u70b9\u6216\u8005\u4e91\u7aef\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\u3002"),(0,o.kt)("h2",{id:"2\u4f7f\u7528\u6d41\u7a0b"},"2.\u4f7f\u7528\u6d41\u7a0b"),(0,o.kt)("h3",{id:"21\u524d\u7f6e\u51c6\u5907"},"2.1\u524d\u7f6e\u51c6\u5907"),(0,o.kt)("p",null,"\u5bf9\u4e8e Yurtctl init \u4ee5\u53ca Yurtctl join\uff0c\u7528\u6237\u5728\u4f7f\u7528\u524d\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u4e14\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"),(0,o.kt)("h3",{id:"22\u7f16\u8bd1-yurtctl"},"2.2\u7f16\u8bd1 Yurtctl"),(0,o.kt)("p",null,"\u5728\u8fdb\u884c\u521d\u59cb\u5316\u96c6\u7fa4\u65f6\uff0c\u9700\u8981\u5148\u83b7\u53d6 Yurtctl \u53ef\u6267\u884c\u6587\u4ef6\u3002\u53ef\u4ee5\u901a\u8fc7\u7f16\u8bd1 OpenYurt \u83b7\u53d6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ make build WHAT="yurtctl" ARCH="amd64" REGION=cn\n')),(0,o.kt)("p",null,"\u53ef\u6267\u884c\u6587\u4ef6\u5c06\u5b58\u653e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"_output/bin/")," \u76ee\u5f55\u4e0b\u3002"),(0,o.kt)("h3",{id:"23\u521d\u59cb\u5316\u96c6\u7fa4"},"2.3\u521d\u59cb\u5316\u96c6\u7fa4"),(0,o.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u521d\u59cb\u5316\u96c6\u7fa4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/bin/yurtctl init --image-repository=registry.cn-hangzhou.aliyuncs.com/google_containers --kubernetes-version=v1.18.8 --pod-network-cidr=10.244.0.0/16\n")),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--yurt-version")," \u914d\u7f6e OpenYurt \u7ec4\u4ef6\u7684\u7248\u672c\u3002\u5982\u679c\u60f3\u8981\u914d\u7f6e\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"-h"),"  \u6765\u83b7\u53d6\u3002"),(0,o.kt)("h3",{id:"24\u8282\u70b9\u52a0\u5165"},"2.4\u8282\u70b9\u52a0\u5165"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 Yurtctl join \u5c06\u4e91\u7aef\u8282\u70b9\u3001\u8fb9\u7f18\u8282\u70b9\u52a0\u5165 OpenYurt \u96c6\u7fa4\u3002\u6ce8\u610f\uff0c\u5728\u52a0\u5165\u8282\u70b9\u65f6\uff0c\u540c\u6837\u9700\u8981\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u8fd0\u884c\u65f6\uff0c\u5e76\u5173\u95ed\u4ea4\u6362\u5206\u533a\u3002"),(0,o.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u8fb9\u7f18\u8282\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=edge-node --discovery-token-unsafe-skip-ca-verification --v=5\n\n")),(0,o.kt)("p",null,"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u52a0\u5165\u4e91\u7aef\u8282\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ _output/bin/yurtctl join 1.2.3.4:6443 --token=zffaj3.a5vjzf09qn9ft3gt --node-type=cloud-node --discovery-token-unsafe-skip-ca-verification --v=5\n\n")))}d.isMDXComponent=!0}}]);