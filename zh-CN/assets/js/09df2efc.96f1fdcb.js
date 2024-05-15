"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[2498],{88119:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var r=a(86070),n=a(76113);const s={slug:"flink-development-framework-streampark",title:"Flink \u5f00\u53d1\u5229\u5668 Apache StreamPark\u2122",tags:["StreamPark","DataStream","FlinkSQL"]},i=void 0,o={permalink:"/zh-CN/blog/flink-development-framework-streampark",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/1-flink-framework-streampark.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/1-flink-framework-streampark.md",title:"Flink \u5f00\u53d1\u5229\u5668 Apache StreamPark\u2122",description:"Hadoop \u4f53\u7cfb\u867d\u7136\u5728\u76ee\u524d\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\uff0c\u4f46\u67b6\u6784\u7e41\u7410\u3001\u8fd0\u7ef4\u590d\u6742\u5ea6\u8fc7\u9ad8\u3001\u7248\u672c\u5347\u7ea7\u56f0\u96be\uff0c\u4e14\u7531\u4e8e\u90e8\u95e8\u539f\u56e0\uff0c\u6570\u636e\u4e2d\u53f0\u9700\u6c42\u6392\u671f\u8f83\u957f\uff0c\u6211\u4eec\u6025\u9700\u63a2\u7d22\u654f\u6377\u6027\u5f00\u53d1\u7684\u6570\u636e\u5e73\u53f0\u6a21\u5f0f\u3002\u5728\u76ee\u524d\u4e91\u539f\u751f\u67b6\u6784\u7684\u666e\u53ca\u548c\u6e56\u4ed3\u4e00\u4f53\u5316\u7684\u5927\u80cc\u666f\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u786e\u5b9a\u4e86\u5c06 Doris \u4f5c\u4e3a\u79bb\u7ebf\u6570\u636e\u4ed3\u5e93\uff0c\u5c06 TiDB\uff08\u76ee\u524d\u5df2\u7ecf\u5e94\u7528\u4e8e\u751f\u4ea7\uff09\u4f5c\u4e3a\u5b9e\u65f6\u6570\u636e\u5e73\u53f0\uff0c\u540c\u65f6\u56e0\u4e3a Doris \u5177\u6709 on MySQL \u7684 ODBC \u80fd\u529b\uff0c\u6240\u4ee5\u53c8\u53ef\u4ee5\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8d44\u6e90\u8fdb\u884c\u6574\u5408\uff0c\u7edf\u4e00\u5bf9\u5916\u8f93\u51fa\u62a5\u8868",date:"2024-05-15T14:21:50.000Z",tags:[{label:"StreamPark",permalink:"/zh-CN/blog/tags/stream-park"},{label:"DataStream",permalink:"/zh-CN/blog/tags/data-stream"},{label:"FlinkSQL",permalink:"/zh-CN/blog/tags/flink-sql"}],readingTime:15.375,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"flink-development-framework-streampark",title:"Flink \u5f00\u53d1\u5229\u5668 Apache StreamPark\u2122",tags:["StreamPark","DataStream","FlinkSQL"]},unlisted:!1,prevItem:{title:"Apache StreamPark\u2122 Flink on Kubernetes \u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-flink-on-k8s"},nextItem:{title:"\u81ea\u5982\u57fa\u4e8e Apache StreamPark\u2122 + Paimon \u5b9e\u73b0\u6570\u636e\u4e00\u952e\u5165\u6e56\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-flink-with-paimon-in-ziru"}},l={authorsImageUrls:[]},m=[];function p(e){const t={img:"img",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:"Hadoop \u4f53\u7cfb\u867d\u7136\u5728\u76ee\u524d\u5e94\u7528\u975e\u5e38\u5e7f\u6cdb\uff0c\u4f46\u67b6\u6784\u7e41\u7410\u3001\u8fd0\u7ef4\u590d\u6742\u5ea6\u8fc7\u9ad8\u3001\u7248\u672c\u5347\u7ea7\u56f0\u96be\uff0c\u4e14\u7531\u4e8e\u90e8\u95e8\u539f\u56e0\uff0c\u6570\u636e\u4e2d\u53f0\u9700\u6c42\u6392\u671f\u8f83\u957f\uff0c\u6211\u4eec\u6025\u9700\u63a2\u7d22\u654f\u6377\u6027\u5f00\u53d1\u7684\u6570\u636e\u5e73\u53f0\u6a21\u5f0f\u3002\u5728\u76ee\u524d\u4e91\u539f\u751f\u67b6\u6784\u7684\u666e\u53ca\u548c\u6e56\u4ed3\u4e00\u4f53\u5316\u7684\u5927\u80cc\u666f\u4e0b\uff0c\u6211\u4eec\u5df2\u7ecf\u786e\u5b9a\u4e86\u5c06 Doris \u4f5c\u4e3a\u79bb\u7ebf\u6570\u636e\u4ed3\u5e93\uff0c\u5c06 TiDB\uff08\u76ee\u524d\u5df2\u7ecf\u5e94\u7528\u4e8e\u751f\u4ea7\uff09\u4f5c\u4e3a\u5b9e\u65f6\u6570\u636e\u5e73\u53f0\uff0c\u540c\u65f6\u56e0\u4e3a Doris \u5177\u6709 on MySQL \u7684 ODBC \u80fd\u529b\uff0c\u6240\u4ee5\u53c8\u53ef\u4ee5\u5bf9\u5916\u90e8\u6570\u636e\u5e93\u8d44\u6e90\u8fdb\u884c\u6574\u5408\uff0c\u7edf\u4e00\u5bf9\u5916\u8f93\u51fa\u62a5\u8868"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:a(93404).A+"",width:"1200",height:"738"})})]})}function k(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},93404:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/doris-4baaea78343b928b0a798ae9238c489f.png"},76113:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var r=a(30758);const n={},s=r.createContext(n);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);