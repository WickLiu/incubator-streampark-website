"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4557],{21674:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var i=s(86070),r=s(76113);const c={id:"SSO",title:"SSO\u96c6\u6210",sidebar_position:10},o=void 0,t={id:"user-guide/SSO",title:"SSO\u96c6\u6210",description:"\u80cc\u666f\u4ecb\u7ecd",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/10-SSO.md",sourceDirName:"user-guide",slug:"/user-guide/SSO",permalink:"/zh-CN/docs/user-guide/SSO",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/user-guide/10-SSO.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{id:"SSO",title:"SSO\u96c6\u6210",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\u6269\u5c55\u94fe\u63a5",permalink:"/zh-CN/docs/user-guide/ExternalLink"},next:{title:"\u5e73\u53f0\u5b89\u88c5\u4ecb\u7ecd",permalink:"/zh-CN/docs/user-guide/platformInstall"}},l={},a=[{value:"\u80cc\u666f\u4ecb\u7ecd",id:"\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"SSO \u767b\u5f55\u5de5\u4f5c\u6d41",id:"sso-\u767b\u5f55\u5de5\u4f5c\u6d41",level:2},{value:"\u5982\u4f55\u542f\u7528SSO\u767b\u5f55",id:"\u5982\u4f55\u542f\u7528sso\u767b\u5f55",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u80cc\u666f\u4ecb\u7ecd",children:"\u80cc\u666f\u4ecb\u7ecd"}),"\n",(0,i.jsx)(n.p,{children:"\u4f5c\u4e3a\u4f01\u4e1a\u5b9e\u8df5\uff0c\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5e94\u7528\u5355\u70b9\u767b\u5f55 (SSO) \u662f\u5f88\u5e38\u89c1\u7684\uff0c\u8fd9\u6837\u53ef\u4ee5\u901a\u8fc7\u96c6\u4e2d\u4e14\u5b89\u5168\u7684\u65b9\u5f0f\u7ba1\u7406\u7528\u6237\u51ed\u8bc1\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u4e8e Streampark \u4f7f\u7528 Apache Shiro \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u548c\u6388\u6743\u7684\u4e8b\u5b9e\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 Pac4j \u6846\u67b6\u6765\u5b9e\u73b0\u5355\u70b9\u767b\u5f55 (SSO) \u652f\u6301\u529f\u80fd\u3002 Pac4j \u662f Shiro \u793e\u533a\u63a8\u8350\u7684 SSO \u96c6\u6210\u89e3\u51b3\u65b9\u6848\uff0c\u4e5f\u88ab\u5176\u4ed6 Apache \u9879\u76ee\u5e94\u7528\uff0c\u5982 Knox\u3001Durid\u3001Zeppelin \u7b49\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"sso-\u767b\u5f55\u5de5\u4f5c\u6d41",children:"SSO \u767b\u5f55\u5de5\u4f5c\u6d41"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u63d0\u51fa\u4e86\u4e09\u4e2a\u4e3b\u8981\u7528\u4f8b\uff0c\u5176\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"a) SSO\u542f\u7528\u65f6\uff0c\u65b0\u7528\u6237\u767b\u5f55"}),"\n",(0,i.jsx)("img",{src:"/doc/image/sso/new-user-login-process.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"b) SSO\u542f\u7528\u65f6\uff0c\u73b0\u6709\u7528\u6237\u767b\u5f55"}),"\n",(0,i.jsx)("img",{src:"/doc/image/sso/existing-user-login-process.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.p,{children:"c) SSO\u672a\u542f\u7528\u65f6\uff0c\u7528\u6237\u767b\u5f55"}),"\n",(0,i.jsx)("img",{src:"/doc/image/sso/user-login-sso-not-enabled.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"\u5982\u4f55\u542f\u7528sso\u767b\u5f55",children:"\u5982\u4f55\u542f\u7528SSO\u767b\u5f55"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u4ece\u914d\u7f6e\u6587\u4ef6",(0,i.jsx)(n.code,{children:"application.yml"}),"\u542f\u7528SSO:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...\nspring:\n  profiles:\n    active: mysql #[h2,pgsql,mysql]\n    include: sso\n...\nsso:\n    # If turn to true, please provide the sso properties the application-sso.yml\n    enable: true\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9009\u62e9\u7b2c\u4e09\u65b9\u65b9\u5f0f\uff0c\u4f8b\u5982Github\u6216\u8c37\u6b4c\u767b\u5f55\uff0c\u53c2\u6570\u8bbe\u7f6e\u7ec6\u8282\u53ef\u53c2\u7167",(0,i.jsx)(n.a,{href:"https://github.com/pac4j/pac4j/blob/master/documentation/docs/config-module.md",children:"pac4j\u914d\u7f6e\u6307\u5f15"}),", \u5e76\u586b\u5199\u5982\u4e0b\u6240\u793a\u7684",(0,i.jsx)(n.code,{children:"application-sso.yml"}),"\u914d\u7f6e:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pac4j:\n  callbackUrl: http://localhost:10000/callback\n  # Put all parameters under `properties`\n  # Check supported sso config parameters for different authentication clients from the below link\n  # https://github.com/pac4j/pac4j/blob/master/documentation/docs/config-module.md\n  properties:\n    # principalNameAttribute:\n    # Optional, change by authentication client\n    # Please replace and fill in your client config below when enabled SSO\n    principalNameAttribute: email\n    oidc:\n      type: google\n      id: xxx\n      secret: xxx\n      useNonce: true\n    # github:\n      # id: xxx\n      # secret: xxx\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u91cd\u542fStreampark\uff0c\u68c0\u67e5\u662f\u5426\u4f1a\u91cd\u5b9a\u5411\u81f3\u6b63\u786e\u7684\u7b2c\u4e09\u65b9\u767b\u5f55\u9875\uff0c\u5e76\u6210\u529f\u5b8c\u6210\u767b\u5f55\u8fc7\u7a0b:"}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/doc/image/sso/github-login.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:"/doc/image/sso/google-login.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:"/doc/image/sso/login-success-redirect.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u65b0\u7528\u6237\u901a\u8fc7SSO\u767b\u5f55\u540e\uff0c\u5176\u5e10\u6237\u5c06\u81ea\u52a8\u6dfb\u52a0\u5230streampark\u4e2d\u3002\u4f46\u7ba1\u7406\u5458\u4ecd\u7136\u9700\u8981\u624b\u52a8\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u9002\u5f53\u7684\u7ec4\u4e0b\uff0c\u5426\u5219\u65b0\u7528\u6237\u767b\u5f55\u6210\u529f\u540e\u4ecd\u7136\u65e0\u6cd5\u5b9a\u5411\u5230\u767b\u9646\u9875\u9762\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u76ee\u524d\u6211\u4eec\u4ec5\u652f\u6301",(0,i.jsx)(n.code,{children:"OAuth"}),"\u548c",(0,i.jsx)(n.code,{children:"OpenID Connect (OIDC)"}),"\u4f5c\u4e3a\u5e38\u89c4\u652f\u6301\u7684\u767b\u5f55\u65b9\u5f0f\uff0c\u5982\u679c\u60a8\u9700\u8981\u652f\u6301",(0,i.jsx)(n.code,{children:"Saml"}),"\u6216",(0,i.jsx)(n.code,{children:"CAS"}),"\uff0c\u8bf7\u8f6c\u5230",(0,i.jsx)(n.code,{children:"streampark-console/streampark-console-service/pom.xml"}),"\uff0c\u5c06\u5b83\u4eec\u66f4\u4e3a\u5305\u542b\u5728\u4f9d\u8d56\u5f53\u4e2d:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"        \x3c!-- Include pac4j-config/core/oauth/oidc--\x3e\n        <dependency>\n            <groupId>org.pac4j</groupId>\n            <artifactId>pac4j-springboot</artifactId>\n            <version>${pac4jVersion}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>commons-collections</groupId>\n                    <artifactId>commons-collections</artifactId>\n                </exclusion>\n                \x3c!-- cas & opensaml is not supported--\x3e\n                <exclusion>\n                    <groupId>org.pac4j</groupId>\n                    <artifactId>pac4j-cas</artifactId>\n                </exclusion>\n                <exclusion>\n                    <groupId>org.pac4j</groupId>\n                    <artifactId>pac4j-saml-opensamlv3</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},76113:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var i=s(30758);const r={},c=i.createContext(r);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);