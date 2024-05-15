"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5913],{22862:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(86070),t=i(76113);const r={id:"Variable",title:"Variable Management",sidebar_position:7},o=void 0,s={id:"user-guide/Variable",title:"Variable Management",description:"Background Introduction",source:"@site/docs/user-guide/7-Variable.md",sourceDirName:"user-guide",slug:"/user-guide/Variable",permalink:"/docs/user-guide/Variable",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/user-guide/7-Variable.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"Variable",title:"Variable Management",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Team & member Management",permalink:"/docs/user-guide/Team"},next:{title:"Yarn Queue Management",permalink:"/docs/user-guide/YarnQueueManagement"}},l={},c=[{value:"Background Introduction",id:"background-introduction",level:2},{value:"Create Variable",id:"create-variable",level:2},{value:"Reference variables in Flink SQL",id:"reference-variables-in-flink-sql",level:2},{value:"Reference variables in args of Flink JAR jobs",id:"reference-variables-in-args-of-flink-jar-jobs",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"background-introduction",children:"Background Introduction"}),"\n",(0,a.jsx)(n.p,{children:"In the actual production environment, Flink jobs are generally complex, and usually require multiple external components. For example, Flink jobs consume data from Kafka, then connect external components such as Apache HBase or Redis to obtain additional business information, and then write it to the downstream external components. There are the following problems."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The connection information of external components, such as IP, port and user password, needs to be configured in the application args and transferred to the Flink job,\nso that the connection information of external components is distributed in multiple applications. Once the connection information of external components changes,\nmany application args parameters need to be modified, which will lead to high operation and maintenance costs."}),"\n",(0,a.jsx)(n.li,{children:"There are many people in the team developing real-time computing jobs. There is no uniform specification for the connection information of the external components passed to the job,\nresulting in different parameter names of the same component. This is difficult to count which external components are dependent."}),"\n",(0,a.jsx)(n.li,{children:"In production practice, there are usually multiple sets of environments, such as test environment and\nproduction environment. It is not intuitive to judge whether a component belongs to a test environment or\na production environment simply through IP and ports. Even if it can be judged, there are some omissions.\nIn this way, the connection information online to the production environment may be external components of the test environment,\nor components of the production environment are inadvertently configured during testing, leading to production failures."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"create-variable",children:"Create Variable"}),"\n",(0,a.jsxs)(n.p,{children:["Variables are isolated between teams, there are independent variables under different teams, so you need to choose which Team to create variables before creating,\nHere we choose the default team, and then click the ",(0,a.jsx)(n.code,{children:"Add New"})," button to start creating variables."]}),"\n",(0,a.jsx)("img",{src:"/doc/image/variable/create_variable.png"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.p,{children:["If the value of the variable is sensitive, such as a database password, you can turn on the ",(0,a.jsx)(n.code,{children:"Desensitization"})," option when creating the variable, then the value of the variable will be displayed with ",(0,a.jsx)(n.code,{children:"********"})," instead."]}),"\n",(0,a.jsx)("img",{src:"/doc/image/variable/create_variable_desensitization.png"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("img",{src:"/doc/image/variable/variable_list.png"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"reference-variables-in-flink-sql",children:"Reference variables in Flink SQL"}),"\n",(0,a.jsxs)(n.p,{children:["The variables that have been created can be referenced in Flink SQL as ",(0,a.jsx)(n.code,{children:"${kafka.cluster}"}),", and support follow-up searches."]}),"\n",(0,a.jsx)("img",{src:"/doc/image/variable/variable_flinksql_search.png"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("img",{src:"/doc/image/variable/variable_flinksql_quote.png"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.p,{children:["You can click the ",(0,a.jsx)(n.code,{children:"Preview"})," button to view the value of the real variable. If this variable is set as desensitized, the value of the variable will be displayed as ",(0,a.jsx)(n.code,{children:"********"}),"."]}),"\n",(0,a.jsx)("img",{src:"/doc/image/variable/variable_flinksql_preview.png"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.h2,{id:"reference-variables-in-args-of-flink-jar-jobs",children:"Reference variables in args of Flink JAR jobs"}),"\n",(0,a.jsx)(n.p,{children:"Variables can also be referenced in the args of a Flink JAR job and support follow-up searches."}),"\n",(0,a.jsx)("img",{src:"/doc/image/variable/variable_flinkjar_queto.png"}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("img",{src:"/doc/image/variable/variable_flinkjar_preview.png"}),"\n",(0,a.jsx)("br",{})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},76113:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var a=i(30758);const t={},r=a.createContext(t);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);