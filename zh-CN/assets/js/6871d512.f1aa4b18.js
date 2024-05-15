"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5077],{6690:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=t(86070),i=t(76113);const s={id:"LDAP",title:"LDAP \u4f7f\u7528",sidebar_position:5},a=void 0,d={id:"user-guide/LDAP",title:"LDAP \u4f7f\u7528",description:"LDAP\u7b80\u4ecb",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/5-LDAP.md",sourceDirName:"user-guide",slug:"/user-guide/LDAP",permalink:"/zh-CN/docs/user-guide/LDAP",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/5-LDAP.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"LDAP",title:"LDAP \u4f7f\u7528",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Docker \u90e8\u7f72",permalink:"/zh-CN/docs/user-guide/docker-deployment"},next:{title:"\u56e2\u961f\u6210\u5458\u7ba1\u7406",permalink:"/zh-CN/docs/user-guide/Team"}},c={},o=[{value:"LDAP\u7b80\u4ecb",id:"ldap\u7b80\u4ecb",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528LDAP?",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528ldap",level:2},{value:"\u914d\u7f6eLDAP",id:"\u914d\u7f6eldap",level:2},{value:"1.\u5b98\u7f51\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305",id:"1\u5b98\u7f51\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305",level:3},{value:"2.\u589e\u52a0LDAP\u914d\u7f6e",id:"2\u589e\u52a0ldap\u914d\u7f6e",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"ldap\u7b80\u4ecb",children:"LDAP\u7b80\u4ecb"}),"\n",(0,r.jsx)(n.p,{children:"LDAP\uff08Light Directory Access Portocol\uff09\uff0c\u5b83\u662f\u57fa\u4e8eX.500\u6807\u51c6\u7684\u8f7b\u91cf\u7ea7\u76ee\u5f55\u8bbf\u95ee\u534f\u8bae\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u76ee\u5f55\u662f\u4e00\u4e2a\u4e3a\u67e5\u8be2\u3001\u6d4f\u89c8\u548c\u641c\u7d22\u800c\u4f18\u5316\u7684\u6570\u636e\u5e93\uff0c\u5b83\u6210\u6811\u72b6\u7ed3\u6784\u7ec4\u7ec7\u6570\u636e\uff0c\u7c7b\u4f3c\u6587\u4ef6\u76ee\u5f55\u4e00\u6837\u3002"}),"\n",(0,r.jsx)(n.p,{children:"LDAP\u76ee\u5f55\u670d\u52a1\u662f\u7531\u76ee\u5f55\u6570\u636e\u5e93\u548c\u4e00\u5957\u8bbf\u95ee\u534f\u8bae\u7ec4\u6210\u7684\u7cfb\u7edf\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528ldap",children:"\u4e3a\u4ec0\u4e48\u4f7f\u7528LDAP?"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u6211\u4eec\u65e5\u5e38\u7684\u529e\u516c\u7cfb\u7edf\u6709\u591a\u4e2a\uff0c\u6bcf\u5957\u7cfb\u7edf\u90fd\u6709\u4e0d\u540c\u7684\u8d26\u53f7\u5bc6\u7801\uff0c\u5bc6\u7801\u591a\u4e86\u60f3\u4e0d\u8d77\u6765\u5bc6\u7801\u5bf9\u5e94\u7684\u662f\u54ea\u4e2a\u7cfb\u7edf\uff0c\u5f53\u65b0\u7cfb\u7edf\u5f00\u53d1\u65f6\u662f\u4e0d\u662f\u8fd8\u8981\u518d\u65b0\u5efa\u4e00\u5957\u8d26\u53f7\u5bc6\u7801\uff1f"}),"\n",(0,r.jsx)(n.p,{children:"LDAP\u7edf\u4e00\u8ba4\u8bc1\u670d\u52a1\u7528\u6765\u89e3\u51b3\u4ee5\u4e0a\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u914d\u7f6eldap",children:"\u914d\u7f6eLDAP"}),"\n",(0,r.jsx)(n.h3,{id:"1\u5b98\u7f51\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305",children:"1.\u5b98\u7f51\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/apache/incubator-streampark/releases",children:"https://github.com/apache/incubator-streampark/releases"})}),"\n",(0,r.jsx)(n.h3,{id:"2\u589e\u52a0ldap\u914d\u7f6e",children:"2.\u589e\u52a0LDAP\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"cd streampark\ncd conf\nvim application\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ldap:\n  ## \u8be5\u503c\u4e3a\u516c\u53f8LDAP\u7528\u6237\u767b\u5f55\u9700\u8981\u7684\u57df\u540d\n  urls: ldap://99.99.99.99:389\n  ## \u7528\u6237\u540d\n  username: cn=Manager,dc=streampark,dc=com\n  ## \u5bc6\u7801\n  password: streampark\n  ## DN \u5206\u8fa8\u540d\n  embedded:\n    base-dn: dc=streampark,dc=com\n  user:\n    ## \u7528\u4e8e\u641c\u7d22\u8fc7\u6ee4\u7684Key\u503c\n    identity:\n      attribute: cn\n    ## \u7528\u6237\u5339\u914d\u7528\u6237\u7684\u90ae\u7bb1\u7684Key\u503c\n    email:\n      attribute: mail\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},76113:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>d});var r=t(30758);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);