"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[3888,6313,5257,5019],{66665:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var r,t=s(30758),n=s(78820),c=s(1860),l=s(43347);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},i.apply(this,arguments)}const o=e=>{let{title:a,titleId:s,...n}=e;return t.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:200,height:200,className:"icon",viewBox:"0 0 1024 1024","aria-labelledby":s},n),a?t.createElement("title",{id:s},a):null,r||(r=t.createElement("path",{fill:"#477de9",d:"M509.92 795.84c157.904 0 285.92-128.016 285.92-285.92C795.84 352 667.808 224 509.92 224 352 224 224 352 224 509.92c0 157.904 128 285.92 285.92 285.92m0 48C325.504 843.84 176 694.32 176 509.92 176 325.504 325.504 176 509.92 176s333.92 149.504 333.92 333.92-149.504 333.92-333.92 333.92m-2.448-400.704h16a16 16 0 0 1 16 16v201.728a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V459.136a16 16 0 0 1 16-16m0-100.176h16a16 16 0 0 1 16 16v23.648a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V358.96a16 16 0 0 1 16-16"})))},d=JSON.parse('[{"version":"2.1.4","date":"2024-05-14"},{"version":"2.1.3","date":"2024-03-19"},{"version":"2.1.2","date":"2023-12-11"},{"version":"2.1.1","date":"2023-06-30"},{"version":"2.1.0","date":"2023-05-11"},{"version":"2.0.0","date":"2023-02-21"}]');var h=s(71776),u=s(86070);function p(){const e=(0,n.A)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",a=c?.[e],s=[d[0]],r=d.slice(1,d.length);return(0,u.jsx)(l.A,{children:(0,u.jsxs)("div",{className:"block download_page container",style:{padding:"10px 0 30px"},children:[(0,u.jsx)("h2",{className:"fs-4 mb-4 fw-bold",children:a.download}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("span",{children:[" ",a.downloadDesc1]}),(0,u.jsxs)("li",{children:["apache-streampark_",(0,u.jsx)("span",{style:{color:"red"},children:"2.11"}),"-",(0,u.jsx)("span",{style:{color:"blue"},children:"2.1.4"}),"-incubating-bin.tar.gz"]}),(0,u.jsxs)("li",{children:["apache-streampark_",(0,u.jsx)("span",{style:{color:"red"},children:"2.12"}),"-",(0,u.jsx)("span",{style:{color:"blue"},children:"2.1.4"}),"-incubating-bin.tar.gz"]}),(0,u.jsx)("span",{children:a.downloadDesc2})]}),(0,u.jsx)("h3",{className:"fs-4 mb-4 mt-4 fw-bold",children:a.latestVersion}),(0,u.jsx)(h.default,{dataSource:s,latest:!0}),(0,u.jsx)("h3",{className:"fs-4 mb-4 fw-bold",children:a.archived}),(0,u.jsxs)("div",{className:"custom-info-block",children:[(0,u.jsxs)("div",{className:"d-flex align-items-center",children:[(0,u.jsx)(o,{className:"info-icon"}),(0,u.jsx)("p",{className:"custom-block-title",children:"Note"})]}),(0,u.jsx)("ul",{children:(0,u.jsx)("li",{children:a.note})})]}),(0,u.jsx)(h.default,{dataSource:r,latest:!1}),(0,u.jsx)("h4",{children:"License"}),(0,u.jsx)("p",{children:(0,u.jsxs)("em",{children:[(0,u.jsx)("span",{children:"The software is licensed under the "}),(0,u.jsx)("a",{href:"http://www.apache.org/licenses/LICENSE-2.0",target:"_blank",children:"Apache License 2.0"}),"."]})})]})})}},83978:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});s(30758);var r=s(78820),t=s(1860),n=s(86070);function c(e){const a=e.data||[],s=(0,r.A)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",c=t?.[s];return a.map((e=>function(e,a){let{dataSource:s,language:r}=a;const t="en"===r,c=new Intl.DateTimeFormat(r,t&&{month:"short",year:"numeric",day:"numeric"}).format(new Date(e.date));return(0,n.jsxs)("div",{className:"release-card",children:[(0,n.jsx)("div",{className:"release-card-date",children:c}),(0,n.jsxs)("div",{className:"release-card-container",children:[(0,n.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,n.jsxs)("span",{className:"release-card-header flex-1",children:["v",e.version]}),e.latest&&(0,n.jsx)("span",{className:"release-card-label-latest",children:"Latest"})]}),(0,n.jsx)("a",{href:e.releaseNotesUrl,children:s.table.releaseNotes}),(0,n.jsx)("br",{}),(0,n.jsxs)("span",{children:[(0,n.jsx)("a",{href:e.source.url,target:"_blank",children:s.table.source}),(0,n.jsx)("span",{className:"release-card-symbol",children:" ( "}),(0,n.jsx)("a",{href:e.source.signature,target:"_blank",children:"signature"}),(0,n.jsx)("span",{className:"release-card-symbol",children:" | "}),(0,n.jsx)("a",{href:e.source.sha512,target:"_blank",children:"sha512"}),(0,n.jsx)("span",{className:"release-card-symbol",children:" ) "})]}),(0,n.jsxs)("div",{className:"release-card-title",children:[(0,n.jsx)("i",{className:"fa fa-caret-down",style:{marginRight:"10px"}}),s.table.binary]}),(0,n.jsx)("ul",{children:e.binary.map((e=>function(e){return(0,n.jsxs)("li",{children:[(0,n.jsx)("a",{href:e.url,target:"_blank",children:e.name}),(0,n.jsxs)("div",{children:[(0,n.jsx)("a",{href:e.signature,target:"_blank",children:"signature"}),(0,n.jsx)("span",{className:"release-card-symbol",children:" | "}),(0,n.jsx)("a",{href:e.sha512,target:"_blank",children:"sha512"})]})]})}(e)))})]})]})}(e,{dataSource:c,language:s})))}},8987:(e,a,s)=>{s.r(a),s.d(a,{default:()=>c});s(30758);var r=s(78820),t=s(1860),n=s(86070);function c(e){const a=e.data||[],s=(0,r.A)()&&0===location.pathname.indexOf("/zh-CN/")?"zh-CN":"en",c=t?.[s];return(0,n.jsxs)("table",{className:"table-ui mb-4",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{className:"text-center",children:[" ",c.table.version," "]}),(0,n.jsxs)("th",{className:"text-center",children:[c.table.date," "]}),(0,n.jsxs)("th",{className:"text-center",children:[" ",c.table.source]}),(0,n.jsxs)("th",{className:"text-center",children:[" ",c.table.binary," "]}),(0,n.jsxs)("th",{className:"text-center",children:[" ",c.table.releaseNotes," "]})]})}),(0,n.jsx)("tbody",{children:a.map((e=>(0,n.jsxs)("tr",{style:{fontSize:"13px"},children:[(0,n.jsxs)("td",{className:"text-center",children:[" ",e.version," "]}),(0,n.jsxs)("td",{className:"text-center",children:[" ",e.date," "]}),(0,n.jsxs)("td",{className:"text-center",children:[(0,n.jsx)("a",{href:e.source.url,target:"_blank",children:"source"}),(0,n.jsx)("span",{children:" ( "}),(0,n.jsx)("a",{href:e.source.signature,target:"_blank",children:"signature"}),(0,n.jsx)("span",{children:" | "}),(0,n.jsx)("a",{href:e.source.sha512,target:"_blank",children:"sha512"}),(0,n.jsx)("span",{children:" ) "})]}),(0,n.jsx)("td",{className:"text-center",children:e.binary.map((e=>(0,n.jsxs)("span",{children:[(0,n.jsx)("a",{href:e.url,target:"_blank",children:e.name}),(0,n.jsx)("span",{children:" ( "}),(0,n.jsx)("a",{href:e.signature,target:"_blank",children:"signature"}),(0,n.jsx)("span",{children:" | "}),(0,n.jsx)("a",{href:e.sha512,target:"_blank",children:"sha512"}),(0,n.jsx)("span",{children:" ) "}),(0,n.jsx)("br",{})]})))}),(0,n.jsx)("td",{className:"text-center",children:(0,n.jsx)("a",{href:"https://streampark.apache.org/download/release-note/".concat(e.version),target:"_blank",children:c.releaseNotes})})]},e.version)))})]})}},71776:(e,a,s)=>{s.r(a),s.d(a,{default:()=>l});s(30758);var r=s(41608),t=s(8987),n=s(83978),c=s(86070);function l(e){const a="mobile"===(0,r.l)(),s=e.dataSource||[],l=e.latest||!1,i="https://www.apache.org/dyn/closer.lua/incubator/streampark/",o="https://archive.apache.org/dist/incubator/streampark/",d="https://downloads.apache.org/incubator/streampark/",h="https://streampark.apache.org/download/release-note/";function u(e){return(l?i:o).concat(e).concat("/apache-streampark-").concat(e).concat("-incubating-src.tar.gz").concat("?action=download")}function p(e,a){return(l?i:o).concat(a).concat("/apache-streampark_").concat(e).concat("-").concat(a).concat("-incubating-bin.tar.gz").concat("?action=download")}function m(e,a){return(l?d:o).concat(e).concat("/apache-streampark-").concat(e).concat("-incubating-src.tar.gz").concat(a)}function x(e,a,s){return(l?d:o).concat(a).concat("/apache-streampark_").concat(e).concat("-").concat(a).concat("-incubating-bin.tar.gz").concat(s)}const b=s.map((e=>function(e,a){let{version:s,date:r}=e;return{latest:a,version:s,date:r,releaseNotesUrl:`${h}${s}`,source:{url:u(s),signature:m(s,".asc"),sha512:m(s,".sha512")},binary:[{name:"apache-streampark_2.12-"+s+"-incubating-bin.tar.gz",url:p("2.12",s),signature:x("2.12",s,".asc"),sha512:x("2.12",s,".sha512")},{name:"apache-streampark_2.11-"+s+"-incubating-bin.tar.gz",url:p("2.11",s),signature:x("2.11",s,".asc"),sha512:x("2.11",s,".sha512")}]}}(e,l)));return a?(0,c.jsx)(n.default,{data:b}):(0,c.jsx)(t.default,{data:b})}},1860:e=>{e.exports=JSON.parse('{"zh-CN":{"download":"\u4e0b\u8f7d Apache StreamPark (incubating)","downloadDesc1":"Apache StreamPark \u652f\u6301 Scala 2.11 \u548c 2.12 \u4e24\u4e2a\u7248\u672c\uff0c\u63d0\u4f9b\u7684\u4e8c\u8fdb\u5236\u5b89\u88c5\u5305\u6587\u4ef6\u540d\u89c4\u5219\u662f\uff1aapache-streampark_${scala.version}-${streampark.version}-incubating-bin.tar.gz\uff0c\u5982\uff1a","downloadDesc2":"\u8fd9\u91cc\u7684 2.11/2.12 \u4e3a StreamPark \u9002\u914d Scala \u7684\u7248\u672c\uff0c2.1.4 \u5219\u4e3a StreamPark \u7684\u7248\u672c\uff0c\u4e0b\u8f7d\u54ea\u4e2a\u6587\u4ef6\uff0c\u53d6\u51b3\u4e8e\u7528\u6237\u7684 Apache Flink/Spark \u7684 Scala \u7248\u672c\uff0c \u4e0b\u8f7d\u548c Apache Flink/Spark \u7684 Scala \u7248\u672c\u5339\u914d\u7684 StreamPark \u5b89\u88c5\u5305\u5373\u53ef\u3002","latestVersion":"\u6700\u65b0\u7248\u672c","archived":"\u6240\u6709\u5b58\u6863\u7684\u7248\u672c","instructions":"\u8bf4\u660e","notes":"\u6ce8\u610f","note":"\u4ee5\u524d\u7248\u672c\u7684 StreamPark \u53ef\u80fd\u4f1a\u53d7\u5230\u5b89\u5168\u95ee\u9898\u7684\u5f71\u54cd\uff0c\u8bf7\u8003\u8651\u4f7f\u7528\u6700\u65b0\u7248\u672c\u3002","table":{"version":"\u7248\u672c","date":"\u65e5\u671f","source":"\u6e90\u7801","binary":"\u4e8c\u8fdb\u5236\u5305","releaseNotes":"\u53d1\u5e03\u8bb0\u5f55"},"releaseNotes":"\u53d1\u5e03\u8bb0\u5f55"},"en":{"download":"Download Apache StreamPark (incubating)","downloadDesc1":"The Apache StreamPark supports Scala 2.11 and 2.12. The dist file name rule is: apache-streampark_${scala.version}-${streampark.version}-incubating-bin.tar.gz\uff0ce.g:","downloadDesc2":"The 2.11/2.12 is a version of StreamPark adapted to Scala, the 2.1.4 is a version of StreamPark. Download which one depends on the user\'s Scala version of Apache Flink/Spark, users need to download the file of StreamPark that matches the Scala version of Apache Flink/Spark.","latestVersion":"The latest release","archived":"All archived releases","instructions":"Instructions","notes":"Notes","note":"Previous releases of StreamPark may be affected by security issues, please use the latest one.","table":{"version":"Version","date":"Date","source":"Source","binary":"Binary","releaseNotes":"Release notes"},"releaseNotes":"release notes"}}')}}]);