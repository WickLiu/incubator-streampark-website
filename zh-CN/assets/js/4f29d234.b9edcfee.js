"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[4349],{13964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(86070),a=t(76113),s=t(60630),c=t(24990);const o={id:"Clickhouse-Connector",title:"Clickhouse Connector",original:!0,sidebar_position:3},i=void 0,l={id:"connector/Clickhouse-Connector",title:"Clickhouse Connector",description:"ClickHouse \u662f\u4e00\u4e2a\u7528\u4e8e\u8054\u673a\u5206\u6790\uff08OLAP\uff09\u7684\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u4e3b\u8981\u9762\u5411 OLAP \u573a\u666f\u3002\u76ee\u524d Apache Flink \u5b98\u65b9\u672a\u63d0\u4f9b\u5199\u5165",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector/3-clickhouse.md",sourceDirName:"connector",slug:"/connector/Clickhouse-Connector",permalink:"/zh-CN/docs/connector/Clickhouse-Connector",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector/3-clickhouse.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Clickhouse-Connector",title:"Clickhouse Connector",original:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JDBC Connector",permalink:"/zh-CN/docs/connector/Jdbc-Connector"},next:{title:"Apache Doris Connector",permalink:"/zh-CN/docs/connector/Doris-Connector"}},u={},d=[{value:"JDBC \u540c\u6b65\u5199\u5165",id:"jdbc-\u540c\u6b65\u5199\u5165",level:2},{value:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165",id:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165",level:3},{value:"Apache StreamPark\u2122 \u65b9\u5f0f\u5199\u5165",id:"apache-streampark-\u65b9\u5f0f\u5199\u5165",level:3},{value:"\u914d\u7f6e\u4fe1\u606f",id:"\u914d\u7f6e\u4fe1\u606f",level:4},{value:"\u5199\u5165clickhouse",id:"\u5199\u5165clickhouse",level:4},{value:"HTTP \u5f02\u6b65\u5199\u5165",id:"http-\u5f02\u6b65\u5199\u5165",level:2},{value:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165",id:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165-1",level:3},{value:"Apache StreamPark\u2122 \u65b9\u5f0f\u5199\u5165",id:"apache-streampark-\u65b9\u5f0f\u5199\u5165-1",level:3},{value:"\u5f02\u6b65\u5199\u5165\u914d\u7f6e\u53ca\u5931\u8d25\u6062\u590d\u7ec4\u4ef6\u914d\u7f6e",id:"\u5f02\u6b65\u5199\u5165\u914d\u7f6e\u53ca\u5931\u8d25\u6062\u590d\u7ec4\u4ef6\u914d\u7f6e",level:4},{value:"\u5199\u5165clickhouse",id:"\u5199\u5165clickhouse-1",level:4},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://clickhouse.com/",children:"ClickHouse"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u8054\u673a\u5206\u6790\uff08OLAP\uff09\u7684\u5217\u5f0f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u4e3b\u8981\u9762\u5411 OLAP \u573a\u666f\u3002\u76ee\u524d Apache Flink \u5b98\u65b9\u672a\u63d0\u4f9b\u5199\u5165\n\u8bfb\u53d6 ClickHouse \u6570\u636e\u7684\u8fde\u63a5\u5668\u3002Apache StreamPark \u57fa\u4e8e ClickHouse \u652f\u6301\u7684\u8bbf\u95ee\u5f62\u5f0f ",(0,r.jsx)(n.a,{href:"https://clickhouse.com/docs/zh/interfaces/http/",children:"HTTP \u5ba2\u6237\u7aef"}),"\u3001",(0,r.jsx)(n.a,{href:"https://clickhouse.com/docs/zh/interfaces/jdbc/",children:"JDBC \u9a71\u52a8"}),"\u5c01\u88c5\u4e86 ",(0,r.jsx)(n.code,{children:"ClickHouseSink"})," \u7528\u4e8e\u5411 ClickHouse \u5b9e\u65f6\u5199\u5165\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"ClickHouse \u5199\u5165\u4e0d\u652f\u6301\u4e8b\u52a1\uff0c\u4f7f\u7528 JDBC \u5411\u5176\u4e2d\u5199\u5165\u6570\u636e\u53ef\u63d0\u4f9b\u81f3\u5c11\u4e00\u6b21\u7684\u5904\u7406\u8bed\u4e49\u3002\u4f7f\u7528 HTTP \u5ba2\u6237\u7aef\u5f02\u6b65\u5199\u5165\uff0c\u5bf9\u5f02\u6b65\u5199\u5165\u91cd\u8bd5\u591a\u6b21\u5931\u8d25\u7684\u6570\u636e\u4f1a\u5199\u5165\u5916\u90e8\u7ec4\u4ef6,\u6700\u7ec8\u901a\u8fc7\u4eba\u4e3a\u4ecb\u5165\u6765\u6062\u590d\u6570\u636e\uff0c\u5b9e\u73b0\u6700\u7ec8\u6570\u636e\u4e00\u81f4\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"jdbc-\u540c\u6b65\u5199\u5165",children:"JDBC \u540c\u6b65\u5199\u5165"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://clickhouse.com/",children:"ClickHouse"})," \u63d0\u4f9b\u4e86 ",(0,r.jsx)(n.a,{href:"https://clickhouse.com/docs/zh/interfaces/jdbc/",children:"JDBC \u9a71\u52a8"}),"\uff0c\u9700\u8981\u5148\u5bfc\u5165 ClickHouse \u7684 JDBC \u9a71\u52a8\u5305\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>ru.yandex.clickhouse</groupId>\n    <artifactId>clickhouse-jdbc</artifactId>\n    <version>0.3.1</version>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165",children:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165"}),"\n",(0,r.jsx)(n.p,{children:"\u5e38\u89c4\u65b9\u5f0f\u4e0b\u521b\u5efaclickhouse jdbc\u8fde\u63a5\u7684\u65b9\u5f0f\u5982\u4e0b:"}),"\n",(0,r.jsx)(c.A,{value:"Java",label:"Java",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class ClickHouseUtil {\n    private static Connection connection;\n\n    public static Connection getConn(String host, int port, String database) throws SQLException, ClassNotFoundException {\n        Class.forName("ru.yandex.clickhouse.ClickHouseDriver");\n        String  address = "jdbc:clickhouse://" + host + ":" + port + "/" + database;\n        connection = DriverManager.getConnection(address);\n        return connection;\n    }\n\n    public static Connection getConn(String host, int port) throws SQLException, ClassNotFoundException {\n        return getConn(host,port,"default");\n    }\n    public static Connection getConn() throws SQLException, ClassNotFoundException {\n        return getConn("node-01",8123);\n    }\n    public void close() throws SQLException {\n        connection.close();\n    }\n}\n'})})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u5c06\u5404\u9879\u53c2\u6570\u62fc\u63a5\u4e3a\u8bf7\u6c42 url \u7684\u65b9\u5f0f\u8f83\u7e41\u7410\uff0c\u5e76\u4e14\u662f\u786c\u7f16\u7801\u7684\u65b9\u5f0f\u5199\u6b7b\u7684,\u975e\u5e38\u7684\u4e0d\u7075\u654f."}),"\n",(0,r.jsx)(n.h3,{id:"apache-streampark-\u65b9\u5f0f\u5199\u5165",children:"Apache StreamPark\u2122 \u65b9\u5f0f\u5199\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["\u7528",(0,r.jsx)(n.code,{children:"StreamPark"}),"\u63a5\u5165 ",(0,r.jsx)(n.code,{children:"clickhouse"}),"\u7684\u6570\u636e, \u53ea\u9700\u8981\u6309\u7167\u89c4\u5b9a\u7684\u683c\u5f0f\u5b9a\u4e49\u597d\u914d\u7f6e\u6587\u4ef6\u7136\u540e\u7f16\u5199\u4ee3\u7801\u5373\u53ef,\u914d\u7f6e\u548c\u4ee3\u7801\u5982\u4e0b\u5728",(0,r.jsx)(n.code,{children:"StreamPark"}),"\u4e2d",(0,r.jsx)(n.code,{children:"clickhose jdbc"})," \u7ea6\u5b9a\u7684\u914d\u7f6e\u89c1\u914d\u7f6e\u5217\u8868\uff0c\u8fd0\u884c\u7a0b\u5e8f\u6837\u4f8b\u4e3ascala\uff0c\u5982\u4e0b:"]}),"\n",(0,r.jsx)(n.h4,{id:"\u914d\u7f6e\u4fe1\u606f",children:"\u914d\u7f6e\u4fe1\u606f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"clickhouse:\n  sink:\n    #\u5199\u5165\u8282\u70b9\u5730\u5740\n    jdbcUrl: jdbc:clickhouse://127.0.0.1:8123,192.168.1.2:8123\n    socketTimeout: 3000000\n    database: test\n    user: $user\n    password: $password\n    #\u5199\u5165\u7ed3\u679c\u8868\u53ca\u5bf9\u5e94\u7684\u5b57\u6bb5\uff0c\u5168\u90e8\u53ef\u4e0d\u6307\u5b9a\u5b57\u6bb5\n    targetTable: orders(userId,siteId)\n    batch:\n      size: 1000\n      delaytime: 6000000\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u5199\u5165clickhouse",children:"\u5199\u5165clickhouse"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(c.A,{value:"Scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.ClickHouseSink\nimport org.apache.flink.api.scala._\n\nobject ClickHouseSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n    //\u8981\u5199\u51fa\u7684\u8868\u7ed3\u6784(\u5728clickhosue\u4e2d\u5df2\u7ecf\u5b58\u5728)\n    val createTable =\n      """\n        |create TABLE test.orders(\n        |userId UInt16,\n        |orderId UInt16,\n        |siteId UInt8,\n        |cityId UInt8,\n        |orderStatus UInt8,\n        |price Float64,\n        |quantity UInt8,\n        |timestamp UInt16\n        |)ENGINE = TinyLog;\n        |""".stripMargin\n\n    // 1) \u63a5\u5165\u6570\u636e\u6e90\n    val source = context.addSource(new TestSource)\n\n\n    // 2) \u5199\u51fa\u6570\u636e\n     ClickHouseSink().syncSink[TestEntity](source)(x => {\n         s"(${x.userId},${x.siteId})"\n     }).setParallelism(1)\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n'})})})}),"\n",(0,r.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,r.jsxs)(n.p,{children:["clickhouse \u53ef\u652f\u6301\u591a\u4e2a\u8282\u70b9\u5747\u8861\u5199\u5165\uff0c\u53ea\u9700\u5728jdbcUrl\u914d\u7f6e\u53ef\u5199\u5165\u7684\u8282\u70b9\u5373\u53ef",(0,r.jsx)("br",{}),"\n\u7531\u4e8eClickHouse\u5355\u6b21\u63d2\u5165\u7684\u5ef6\u8fdf\u6bd4\u8f83\u9ad8\uff0c\u5efa\u8bae\u8bbe\u7f6e batch.size \u6765\u6279\u91cf\u63d2\u5165\u6570\u636e\u63d0\u9ad8\u6027\u80fd,\u540c\u65f6\u4e3a\u4e86\u63d0\u9ad8\u5b9e\u65f6\u6027\uff0c\n\u652f\u6301\u6309\u7167\u6570\u636e\u91cf\u6216\u8005\u95f4\u9694\u65f6\u95f4 batch.delaytime \u6765\u6279\u6b21\u5199\u5165",(0,r.jsx)("br",{}),"\n\u5728ClickHouseSink\u7684\u5b9e\u73b0\u4e2d\uff0c\u82e5\u6700\u540e\u4e00\u6279\u6570\u636e\u7684\u6570\u76ee\u4e0d\u8db3BatchSize\uff0c\u5219\u4f1a\u5728\u5173\u95ed\u8fde\u63a5\u65f6\u5019\u63d2\u5165\u5269\u4f59\u6570\u636e"]})}),"\n",(0,r.jsx)(n.h2,{id:"http-\u5f02\u6b65\u5199\u5165",children:"HTTP \u5f02\u6b65\u5199\u5165"}),"\n",(0,r.jsx)(n.p,{children:"jdbc\u7684\u65b9\u5f0f\u8fde\u63a5\u5199\u5165\u6570\u636e,\u5728\u6570\u636e\u91cf\u8f83\u5c0f\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u91c7\u7528,\u800c\u5728\u5b9e\u9645\u751f\u4ea7\u4e2d\u66f4\u591a\u7684\u662f\u91c7\u7528async http\u7684\u65b9\u5f0f\u66f4\u9ad8\u6548\u7684,\u66f4\u5feb\u901f\u7684\u5199\u5165"}),"\n",(0,r.jsx)(n.h3,{id:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165-1",children:"\u5e38\u89c4\u65b9\u5f0f\u5199\u5165"}),"\n",(0,r.jsx)(n.p,{children:"clickhouse INSERT \u5fc5\u987b\u901a\u8fc7POST\u65b9\u6cd5\u6765\u63d2\u5165\u6570\u636e \u5e38\u89c4\u64cd\u4f5c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ echo 'INSERT INTO t VALUES (1),(2),(3)' | curl 'http://localhost:8123/' --data-binary @-\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u8ff0\u65b9\u5f0f\u64cd\u4f5c\u8f83\u7b80\u964b\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528java \u4ee3\u7801\u6765\u8fdb\u884c\u5199\u5165, StreamPark \u5bf9 http post \u5199\u5165\u65b9\u5f0f\u8fdb\u884c\u5c01\u88c5\u589e\u5f3a\uff0c\u589e\u52a0\u7f13\u5b58\u3001\u5f02\u6b65\u5199\u5165\u3001\u5931\u8d25\u91cd\u8bd5\u3001\u8fbe\u5230\u91cd\u8bd5\u9608\u503c\u540e\u6570\u636e\u5907\u4efd\u81f3\u5916\u90e8\u7ec4\u4ef6\uff08kafka,mysql,hdfs,hbase\uff09\n\u7b49\u529f\u80fd\uff0c\u4ee5\u4e0a\u529f\u80fd\u53ea\u9700\u8981\u6309\u7167\u89c4\u5b9a\u7684\u683c\u5f0f\u5b9a\u4e49\u597d\u914d\u7f6e\u6587\u4ef6\u7136\u540e\u7f16\u5199\u4ee3\u7801\u5373\u53ef,\u914d\u7f6e\u548c\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,r.jsx)(n.h3,{id:"apache-streampark-\u65b9\u5f0f\u5199\u5165-1",children:"Apache StreamPark\u2122 \u65b9\u5f0f\u5199\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"StreamPark"}),"\u4e2d",(0,r.jsx)(n.code,{children:"clickhose jdbc"})," \u7ea6\u5b9a\u7684\u914d\u7f6e\u89c1\u914d\u7f6e\u5217\u8868\uff0c\u8fd0\u884c\u7a0b\u5e8f\u6837\u4f8b\u4e3ascala\uff0c\u5982\u4e0b:"]}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u91cc\u91c7\u7528asynchttpclient\u4f5c\u4e3ahttp\u5f02\u6b65\u5ba2\u6237\u7aef\u6765\u8fdb\u884c\u5199\u5165,\u5148\u5bfc\u5165 asynchttpclient \u7684jar"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:"\x3c!--clickhouse async need asynchttpclient --\x3e\n<dependency>\n    <groupId>org.asynchttpclient</groupId>\n    <artifactId>async-http-client</artifactId>\n    <optional>true</optional>\n</dependency>\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u5f02\u6b65\u5199\u5165\u914d\u7f6e\u53ca\u5931\u8d25\u6062\u590d\u7ec4\u4ef6\u914d\u7f6e",children:"\u5f02\u6b65\u5199\u5165\u914d\u7f6e\u53ca\u5931\u8d25\u6062\u590d\u7ec4\u4ef6\u914d\u7f6e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"\nclickhouse:\n  sink:\n    hosts: 127.0.0.1:8123,192.168.1.2:8123\n    socketTimeout: 3000000\n    database: test\n    user: $user\n    password: $password\n    targetTable: test.orders(userId,siteId)\n    batch:\n      size: 1\n      delaytime: 60000\n    threshold:\n      bufferSize: 10\n      #      \u5f02\u6b65\u5199\u5165\u7684\u5e76\u53d1\u6570\n      numWriters: 4\n      #      \u7f13\u5b58\u961f\u5217\u5927\u5c0f\n      queueCapacity: 100\n      delayTime: 10\n      requestTimeout: 600\n      retries: 1\n      #      \u6210\u529f\u54cd\u5e94\u7801\n      successCode: 200\n    failover:\n      table: chfailover\n      #      \u8fbe\u5230\u5931\u8d25\u6700\u5927\u5199\u5165\u6b21\u6570\u540e\uff0c\u6570\u636e\u5907\u4efd\u7684\u7ec4\u4ef6\n      storage: kafka #kafka|mysql|hbase|hdfs\n      mysql:\n        driverClassName: com.mysql.cj.jdbc.Driver\n        jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n        username: $user\n        password: $pass\n      kafka:\n        bootstrap.servers: localhost:9092\n        topic: test1\n        group.id: user_01\n        auto.offset.reset: latest\n      hbase:\n        zookeeper.quorum: localhost\n        zookeeper.property.clientPort: 2181\n      hdfs:\n        path: /data/chfailover\n        namenode: hdfs://localhost:8020\n        user: hdfs\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u5199\u5165clickhouse-1",children:"\u5199\u5165clickhouse"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(c.A,{value:"Scala",label:"Scala",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.ClickHouseSink\nimport org.apache.flink.api.scala._\n\nobject ClickHouseSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n    val createTable =\n      """\n        |create TABLE test.orders(\n        |userId UInt16,\n        |orderId UInt16,\n        |siteId UInt8,\n        |cityId UInt8,\n        |orderStatus UInt8,\n        |price Float64,\n        |quantity UInt8,\n        |timestamp UInt16\n        |)ENGINE = TinyLog;\n        |""".stripMargin\n\n    println(createTable)\n\n    val source = context.addSource(new TestSource)\n\n\n    // \u5f02\u6b65\u5199\u5165\n    ClickHouseSink().sink[TestEntity](source)(x => {\n      s"(${x.userId},${x.siteId})"\n    }).setParallelism(1)\n\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n'})})})}),"\n",(0,r.jsx)(n.admonition,{title:"\u8b66\u544a",type:"info",children:(0,r.jsxs)(n.p,{children:["\u7531\u4e8eClickHouse\u5355\u6b21\u63d2\u5165\u7684\u5ef6\u8fdf\u6bd4\u8f83\u9ad8\uff0c\u5c0f\u6570\u636e\u91cf\u9891\u7e41\u5199\u5165\u4f1a\u9020\u6210clickhouse server \u9891\u7e41\u6392\u5e8f\u5408\u5e76\u5206\u533a\uff0c\u5efa\u8bae\u4f7f\u7528\u5f02\u6b65\u63d0\u4ea4\u65b9\u5f0f\uff0c\u8bbe\u7f6e\u5408\u7406\u9608\u503c\u63d0\u9ad8\u6027\u80fd",(0,r.jsx)("br",{}),"\n\u7531\u4e8eClickHouse \u5f02\u6b65\u5199\u5165\u5931\u8d25\u4f1a\u91cd\u65b0\u5c06\u6570\u636e\u6dfb\u52a0\u81f3\u7f13\u5b58\u961f\u5217\uff0c\u53ef\u80fd\u9020\u6210\u540c\u4e00\u7a97\u53e3\u6570\u636e\u5206\u4e24\u6279\u6b21\u5199\u5165\uff0c\u5b9e\u65f6\u6027\u8981\u6c42\u9ad8\u7684\u573a\u666f\u5efa\u8bae\u5168\u9762\u6d4b\u8bd5clickhouse\u7684\u7a33\u5b9a\u6027",(0,r.jsx)("br",{}),"\n\u5f02\u6b65\u5199\u5165\u6570\u636e\u8fbe\u5230\u91cd\u8bd5\u6700\u5927\u503c\u540e\uff0c\u4f1a\u5c06\u6570\u636e\u5907\u4efd\u81f3\u5916\u90e8\u7ec4\u4ef6\uff0c\u5728\u6b64\u65f6\u624d\u4f1a\u521d\u59cb\u5316\u7ec4\u4ef6\u8fde\u63a5\uff0c\u5efa\u8bae\u786e\u4fdd failover \u7ec4\u4ef6\u7684\u53ef\u7528\u6027"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u5176\u4ed6\u914d\u7f6e",children:"\u5176\u4ed6\u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,r.jsx)(n.strong,{children:"ClickHouseDataSource"})," \u8fde\u63a5\u6c60\u7684\u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,r.jsx)(n.code,{children:"clickhouse-jdbc"}),(0,r.jsx)(n.a,{href:"https://github.com/ClickHouse/clickhouse-jdbc",children:"\u5b98\u7f51\u6587\u6863"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},24990:(e,n,t)=>{t.d(n,{A:()=>c});t(30758);var r=t(13526);const a={tabItem:"tabItem_Xevx"};var s=t(86070);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,c),hidden:t,children:n})}},60630:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(30758),a=t(13526),s=t(72469),c=t(25557),o=t(99688),i=t(17822),l=t(54991),u=t(52629);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function k(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[c,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,d]=m({queryString:t,groupId:a}),[k,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=l??k;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&i(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(78820);const x={tabList:"tabList_wCRy",tabItem:"tabItem_v3ez"};var f=t(86070);function v(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(l(n),c(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function g(e){const n=k(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(j,{...n,...e})]})}function C(e){const n=(0,b.A)();return(0,f.jsx)(g,{...e,children:d(e.children)},String(n))}},76113:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(30758);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);