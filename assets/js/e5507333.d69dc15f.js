"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[7678],{94027:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(86070),t=s(76113);const r={id:"YarnQueueManagement",title:"Yarn Queue Management",sidebar_position:8},a=void 0,l={id:"user-guide/YarnQueueManagement",title:"Yarn Queue Management",description:"Background",source:"@site/docs/user-guide/8-YarnQueueManagement.md",sourceDirName:"user-guide",slug:"/user-guide/YarnQueueManagement",permalink:"/docs/user-guide/YarnQueueManagement",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/user-guide/8-YarnQueueManagement.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"YarnQueueManagement",title:"Yarn Queue Management",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Variable Management",permalink:"/docs/user-guide/Variable"},next:{title:"External Link Management",permalink:"/docs/user-guide/ExternalLink"}},c={},o=[{value:"Background",id:"background",level:2},{value:"How to create yarn queues",id:"how-to-create-yarn-queues",level:2},{value:"How to use available queues",id:"how-to-use-available-queues",level:2},{value:"Items about the feature",id:"items-about-the-feature",level:2}];function u(e){const n={blockquote:"blockquote",br:"br",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(n.p,{children:["In the actual production environment for the ",(0,i.jsx)(n.code,{children:"Yarn Deployment Mode"}),",\nusers often need to type in ",(0,i.jsx)(n.code,{children:"queue"})," or ",(0,i.jsx)(n.code,{children:"queue"}),"&",(0,i.jsx)(n.code,{children:"labels"})," to specify\nthe configuration for the ",(0,i.jsx)(n.code,{children:"yarn-application"})," mode flink applications\nor the ",(0,i.jsx)(n.code,{children:"yarn-session"})," mode flink clusters.\nDuring this process, manual input by users may cause errors,\nwhich may result in specified non-existed queues or the ",(0,i.jsx)(n.code,{children:"flink application"}),"/",(0,i.jsx)(n.code,{children:"flink cluster"}),"\nbeing submitted to the wrong queues."]}),"\n",(0,i.jsxs)(n.p,{children:["If the yarn cluster doesn't include users specified queues,\nthe deployment process of ",(0,i.jsx)(n.code,{children:"flink applications"}),"/",(0,i.jsx)(n.code,{children:"flink clusters"}),"\nwill be time-consuming and accompanied by poor user experience.\nIf a task is submitted to an incorrect queue due to the error-input,\nit's likely to affect the stability of yarn applications on the queue and the abuse of the queue resource."]}),"\n",(0,i.jsx)(n.p,{children:"So StreamPark introduced the queue management feature to ensure that a set of added queues are shared within the same team,\nthat is, ensure that queues resource is isolated within the scope of the team. It can generate the following benefits:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["When deploying Flink ",(0,i.jsx)(n.code,{children:"yarn-application"})," applications or Flink ",(0,i.jsx)(n.code,{children:"yarn-session"})," clusters,\nit could set quickly and accurately yarn queue(",(0,i.jsx)(n.code,{children:"yarn.application.queue"}),") & labels(",(0,i.jsx)(n.code,{children:"yarn.application.node-label"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"Not only does it ensure the correctness of queue & labels input,\nbut it also shortens the time consumption of incorrect queues leading to applications failures,\nthat is, to prompt users as early as possible whether the queue setting results are correct, improving interaction efficiency."}),"\n",(0,i.jsx)(n.li,{children:"Effectively preventing the abuse of queues resource."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-create-yarn-queues",children:"How to create yarn queues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Premise",(0,i.jsx)(n.br,{}),"\n","You must keep a admin user account. In the case, The admin user ",(0,i.jsx)(n.code,{children:"admin"})," was used to login the ",(0,i.jsx)(n.code,{children:"default"})," team of the system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Locate the ",(0,i.jsx)(n.code,{children:"Add New"})," button of the ",(0,i.jsx)(n.code,{children:"Yarn Queue"})," page as followed steps and the fig."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the admin user account to login the system with a target team."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Settings"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Yarn Queue"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Add New"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/doc/image/yarn-queue/flow_to_create.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Type in the queue fields."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Create a pure queue.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type in the required yarn queue name"}),"\n",(0,i.jsx)(n.li,{children:"Type in the optional description of the yarn queue if needed."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"OK"}),"."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/doc/image/yarn-queue/flow_to_type_in_pure_queue.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Create a queue with labels.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Type in the required yarn queue-label name.",(0,i.jsx)(n.br,{}),"\n","Queue label, eg. ",(0,i.jsx)(n.code,{children:"queue1"})," represents queue name, ",(0,i.jsx)(n.code,{children:"queue@label1,label2"})," represents that queue name is ",(0,i.jsx)(n.code,{children:"queue1"})," and labels of the queue are ",(0,i.jsx)(n.code,{children:"label1"})," & ",(0,i.jsx)(n.code,{children:"label2"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Type in the optional description of the yarn queue if needed."}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"OK"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/doc/image/yarn-queue/flow_to_type_in_pure_queue_labels.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View the existed yarn queue(-labels)s."}),"\n",(0,i.jsx)("img",{src:"/doc/image/yarn-queue/existed_queues.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-use-available-queues",children:"How to use available queues"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a flink cluster with a specified yarn queue."}),"\n",(0,i.jsx)("img",{src:"/doc/image/yarn-queue/available_queues_when_creating_cluster.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Create a yarn-application mode flink application with a specified yarn queue"}),"\n",(0,i.jsx)("img",{src:"/doc/image/yarn-queue/use_yarn_app_mode_to_create_application.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("img",{src:"/doc/image/yarn-queue/available_queues_when_creating_application.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"items-about-the-feature",children:"Items about the feature"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Will this feature affect the ",(0,i.jsx)(n.code,{children:"yarn-application"})," mode flink applications or ",(0,i.jsx)(n.code,{children:"yarn-session"})," mode flink-clusters whose yarn queue(",(0,i.jsx)(n.code,{children:"yarn.application.queue"}),") & labels(",(0,i.jsx)(n.code,{children:"yarn.application.node-label"}),") specified by the old dynamic properties ?"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The feature will not affect it at all. StreamPark still retains the highest priority of dynamic properties and does\nnot enforce verification on the specified queues and labels in the dynamic properties, providing users with space for advanced configuration."}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The isolation of Yarn queue isn't stricter."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["In the current designs, the permissions of queues aren't strictly isolated due to\nthe relationship between the queues and the ",(0,i.jsx)(n.code,{children:"yarn-session"})," mode flink clusters.",(0,i.jsx)(n.br,{}),"\n","Flink ",(0,i.jsx)(n.code,{children:"yarn-session"})," clusters are visible to all team, as shown in the figure.\nThe target ",(0,i.jsx)(n.code,{children:"yarn-session"})," flink cluster uses a queue in the ",(0,i.jsx)(n.code,{children:"default"})," team, but it can still be selected in the ",(0,i.jsx)(n.code,{children:"test"})," team.",(0,i.jsx)(n.br,{}),"\n","So, if a ",(0,i.jsx)(n.code,{children:"yarn-session"})," flink cluster uses a queue located in a certain team, as the resource usage of the target cluster increases,\nthe consumption of queues resource used by the target resource will also increase.\nThis is the phenomenon that yarn queues can't be strictly isolated\ndue to the relationship between the queues and the ",(0,i.jsx)(n.code,{children:"yarn-session"})," mode flink clusters.",(0,i.jsx)(n.br,{}),"\n","In other words, in ",(0,i.jsx)(n.code,{children:"yarn-session"})," mode, flink clusters sharing leads to indirect sharing of queues resource between teams."]}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/doc/image/yarn-queue/use_yarn_session_mode_to_create_application.png"}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Session cluster is shared by all teams. Why is it that when creating a ",(0,i.jsx)(n.code,{children:"yarn-session"})," flink cluster, only the queues in the current team instead of all teams can be used in the queues candidate list ?"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Based on the mentioned above, StreamPark hopes that when creating a ",(0,i.jsx)(n.code,{children:"yarn-session"})," flink cluster,\nadministrators can specify the queue belonged to current of the current team only,\nwhich could be better for administrators to perceive the impact of current operations on the current team."]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Why not support the isolation for ",(0,i.jsx)(n.code,{children:"flink yarn-session clusters / general clusters"})," on team wide ?"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The impact range caused by changes in cluster visibility is larger than that caused by changes in queue visibility."}),"\n",(0,i.jsx)(n.li,{children:"StreamPark need to face greater difficulties in backward compatibility while also considering the user experience."}),"\n",(0,i.jsxs)(n.li,{children:["At present, there is no exact research on the users group and applications scale deployed using\n",(0,i.jsx)(n.code,{children:"yarn-application"})," & ",(0,i.jsx)(n.code,{children:"yarn-session"})," cluster modes in the community.",(0,i.jsx)(n.br,{}),"\n","Based on this fact, the community didn't provide greater feature support."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you have any related requirements about the feature, feel free to contact us or provide feedback directly to the community email list, please.",(0,i.jsx)(n.br,{}),"\n","The community will make the next evaluation and support based on the usage status of the users group and applications scale."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Any suggestion is appreciated."})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},76113:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var i=s(30758);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);