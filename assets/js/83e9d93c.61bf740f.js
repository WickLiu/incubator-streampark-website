"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[8721],{25917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=r(86070),n=r(76113),o=r(60630),i=r(24990);const s={id:"Doris-Connector",title:"Apache Doris Connector",original:!0,sidebar_position:4},c=void 0,l={id:"connector/Doris-Connector",title:"Apache Doris Connector",description:"Apache Doris Connector",source:"@site/docs/connector/4-doris.md",sourceDirName:"connector",slug:"/connector/Doris-Connector",permalink:"/docs/connector/Doris-Connector",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/connector/4-doris.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Doris-Connector",title:"Apache Doris Connector",original:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"ClickHouse Connector",permalink:"/docs/connector/Clickhouse-Connector"},next:{title:"Elasticsearch Connector",permalink:"/docs/connector/Elasticsearch-Connector"}},u={},d=[{value:"Apache Doris Connector",id:"apache-doris-connector",level:2},{value:"Write with Apache StreamPark\u2122",id:"write-with-apache-streampark",level:3},{value:"Configuration list",id:"configuration-list",level:4},{value:"Write data to Doris",id:"write-data-to-doris",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"apache-doris-connector",children:"Apache Doris Connector"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://doris.apache.org/",children:"Apache Doris"})," is a high-performance, and real-time analytical database, which could support high-concurrent point query scenarios. Apache StreamPark encapsulates DoirsSink for writing data to Doris in real-time, based on ",(0,a.jsx)(t.a,{href:"https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html",children:"its stream loads"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"write-with-apache-streampark",children:"Write with Apache StreamPark\u2122"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"DorisSink"})," only supports JSON format (single-layer) writing currently, such as: ",(0,a.jsx)(t.code,{children:'{"id":1,"name":"streampark"}'})," The example of the running program is Java, as follows:"]}),"\n",(0,a.jsx)(t.h4,{id:"configuration-list",children:"Configuration list"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"doris.sink:\n  fenodes:  127.0.0.1:8030    # doris fe http url\n  database: test              # doris database\n  table: test_tbl             # doris table\n  user: root\n  password: 123456\n  batchSize: 100          # doris sink batch size per streamload\n  intervalMs: 3000        # doris sink the time interval of each streamload\n  maxRetries: 1           # stream load retries\n  streamLoad:             # doris streamload own parameters\n    format: json\n    strip_outer_array: true\n    max_filter_ratio: 1\n"})}),"\n",(0,a.jsx)(t.h4,{id:"write-data-to-doris",children:"Write data to Doris"}),"\n",(0,a.jsx)(o.A,{children:(0,a.jsx)(i.A,{value:"Java",label:"Java",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-java",children:"package org.apache.streampark.test.flink.java.datastream;\n\nimport org.apache.streampark.flink.core.StreamEnvConfig;\nimport org.apache.streampark.flink.core.java.sink.doris.DorisSink;\nimport org.apache.streampark.flink.core.java.source.KafkaSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.source.KafkaRecord;\nimport org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.streaming.api.datastream.DataStream;\n\npublic class DorisJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        DataStream<String> source = new KafkaSource<String>(context)\n            .getDataStream()\n            .map((MapFunction<KafkaRecord<String>, String>) KafkaRecord::value)\n            .returns(String.class);\n\n        new DorisSink<String>(context).sink(source);\n\n        context.start();\n    }\n}\n\n"})})})}),"\n",(0,a.jsx)(t.admonition,{title:"hint",type:"tip",children:(0,a.jsx)(t.p,{children:"It is recommended to set batchSize to insert data in batches to improve performance.\nAt the same time, to improve real-time performance, intervalMs is supported for batch writing.\nThe number of streamload retries can be increased by setting maxRetries."})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},24990:(e,t,r)=>{r.d(t,{A:()=>i});r(30758);var a=r(13526);const n={tabItem:"tabItem_Xevx"};var o=r(86070);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}},60630:(e,t,r)=>{r.d(t,{A:()=>S});var a=r(30758),n=r(13526),o=r(72469),i=r(25557),s=r(99688),c=r(17822),l=r(54991),u=r(52629);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=p(e),[i,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[l,d]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),g=(()=>{const e=l??f;return h({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(78820);const g={tabList:"tabList_wCRy",tabItem:"tabItem_v3ez"};var v=r(86070);function k(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==a&&(l(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,n.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(k,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function S(e){const t=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},76113:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>s});var a=r(30758);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);