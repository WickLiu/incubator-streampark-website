"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[6450],{45069:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var a=t(86070),r=t(76113),i=t(60630),o=t(24990);const s={id:"Jdbc-Connector",title:"JDBC Connector",sidebar_position:2},c=void 0,l={id:"connector/Jdbc-Connector",title:"JDBC Connector",description:"Apache Flink officially provides the JDBC connector for reading from or writing to JDBC, which can provides AT_LEAST_ONCE (at least once) processing semantics.",source:"@site/docs/connector/2-jdbc.md",sourceDirName:"connector",slug:"/connector/Jdbc-Connector",permalink:"/docs/connector/Jdbc-Connector",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/connector/2-jdbc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Jdbc-Connector",title:"JDBC Connector",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Apache Kafka Connector",permalink:"/docs/connector/Kafka-Connector"},next:{title:"ClickHouse Connector",permalink:"/docs/connector/Clickhouse-Connector"}},d={},h=[{value:"JDBC Configuration",id:"jdbc-configuration",level:2},{value:"Semantic",id:"semantic",level:3},{value:"EXACTLY_ONCE",id:"exactly_once",level:4},{value:"AT_LEAST_ONCE &amp;&amp; NONE",id:"at_least_once--none",level:4},{value:"Others",id:"others",level:3},{value:"JDBC read",id:"jdbc-read",level:2},{value:"queryFunc to get sql",id:"queryfunc-to-get-sql",level:3},{value:"resultFunc process the query data",id:"resultfunc-process-the-query-data",level:3},{value:"JDBC Read Write",id:"jdbc-read-write",level:2},{value:"Generate target SQL based on data flow",id:"generate-target-sql-based-on-data-flow",level:3},{value:"Set to write batch size",id:"set-to-write-batch-size",level:3},{value:"Multi-instance JDBC support",id:"multi-instance-jdbc-support",level:2},{value:"Specify JDBC connection information manually",id:"specify-jdbc-connection-information-manually",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Apache Flink officially provides the ",(0,a.jsx)(n.a,{href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/connectors/jdbc.html",children:"JDBC"})," connector for reading from or writing to JDBC, which can provides ",(0,a.jsx)(n.strong,{children:"AT_LEAST_ONCE"})," (at least once) processing semantics."]}),"\n",(0,a.jsxs)(n.p,{children:["Apache StreamPark implements ",(0,a.jsx)(n.strong,{children:"EXACTLY_ONCE"})," (Exactly Once) semantics of ",(0,a.jsx)(n.code,{children:"JdbcSink"})," based on two-stage commit, and uses ",(0,a.jsx)(n.a,{href:"https://github.com/brettwooldridge/HikariCP",children:(0,a.jsx)(n.code,{children:"HikariCP"})})," as connection pool to make data reading and write data more easily and accurately."]}),"\n",(0,a.jsx)(n.h2,{id:"jdbc-configuration",children:"JDBC Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["The implementation of the ",(0,a.jsx)(n.code,{children:"Jdbc Connector"})," in ",(0,a.jsx)(n.code,{children:"StreamPark"})," uses the ",(0,a.jsx)(n.a,{href:"https://github.com/brettwooldridge/HikariCP",children:(0,a.jsx)(n.code,{children:"HikariCP"})})," connection pool, which is configured under the namespace of ",(0,a.jsx)(n.code,{children:"jdbc"}),", and the agreed configuration is as follows:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"jdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  username: root\n  password: 123456\n  driverClassName: com.mysql.jdbc.Driver\n  connectionTimeout: 30000\n  idleTimeout: 30000\n  maxLifetime: 30000\n  maximumPoolSize: 6\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n"})}),"\n",(0,a.jsx)(n.h3,{id:"semantic",children:"Semantic"}),"\n",(0,a.jsxs)(n.p,{children:["The parameter ",(0,a.jsx)(n.code,{children:"semantic"})," is the semantics when writing in ",(0,a.jsx)(n.code,{children:"JdbcSink"}),", only effect for ",(0,a.jsx)(n.strong,{children:"JdbcSink"}),", ",(0,a.jsx)(n.code,{children:"JdbcSource"})," will automatically mask this parameter, there are three options"]}),"\n",(0,a.jsx)("div",{class:"counter",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"EXACTLY_ONCE"}),"\n",(0,a.jsx)(n.li,{children:"AT_LEAST_ONCE"}),"\n",(0,a.jsx)(n.li,{children:"NONE"}),"\n"]})}),"\n",(0,a.jsx)(n.h4,{id:"exactly_once",children:"EXACTLY_ONCE"}),"\n",(0,a.jsxs)(n.p,{children:["If ",(0,a.jsx)(n.code,{children:"JdbcSink"})," is configured with ",(0,a.jsx)(n.code,{children:"EXACTLY_ONCE"})," semantics, the underlying two-phase commit implementation is used to complete the write, at this time to Apache Flink with ",(0,a.jsx)(n.code,{children:"Checkpointing"})," to take effect, how to open checkpoint please refer to Chapter 2 on ",(0,a.jsx)(n.a,{href:"/docs/model/conf",children:"checkpoint"})," configuration section"]}),"\n",(0,a.jsx)(n.h4,{id:"at_least_once--none",children:"AT_LEAST_ONCE && NONE"}),"\n",(0,a.jsxs)(n.p,{children:["The default does not specify that the ",(0,a.jsx)(n.code,{children:"NONE"})," semantics will be used, both configurations have the same effect, both are guaranteed ",(0,a.jsx)(n.strong,{children:"at least once"})," semantics"]}),"\n",(0,a.jsx)(n.admonition,{title:"tip",type:"tip",children:(0,a.jsxs)(n.p,{children:["The benefit of turning on ",(0,a.jsx)(n.code,{children:"EXACTLY_ONCE"})," exactly once is obvious, to ensure the accuracy of the data, but the cost is also high, the need for ",(0,a.jsx)(n.code,{children:"checkpoint"})," support, the underlying simulation of the transaction is submitted to read, there is a certain loss of real-time, if your business requirements for data accuracy is not so high, it is recommended to use ",(0,a.jsx)(n.code,{children:"AT_LEAST_ONCE"})," semantics"]})}),"\n",(0,a.jsx)(n.h3,{id:"others",children:"Others"}),"\n",(0,a.jsxs)(n.p,{children:["Except for the special ",(0,a.jsx)(n.code,{children:"semantic"})," configuration item, all other configurations must comply with the ",(0,a.jsx)(n.strong,{children:"HikariCP"})," connection pool configuration, please refer to the ",(0,a.jsx)(n.code,{children:"Light HikariCP"})," ",(0,a.jsx)(n.a,{href:"https://github.com/brettwooldridge/",children:"official website documentation"})," for the specific configurable items and the role of each parameter. HikariCP#gear-configuration-knobs-baby)."]}),"\n",(0,a.jsx)(n.h2,{id:"jdbc-read",children:"JDBC read"}),"\n",(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.code,{children:"StreamPark"}),", ",(0,a.jsx)(n.code,{children:"JdbcSource"})," is used to read data, and according to the data ",(0,a.jsx)(n.code,{children:"offset"})," to read data can be replayed, we look at the specific how to use ",(0,a.jsx)(n.code,{children:"JdbcSource"})," to read data, if the demand is as follows"]}),"\n",(0,a.jsx)("div",{class:"counter",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Read data from the ",(0,a.jsx)(n.code,{children:"t_order"})," table, using the ",(0,a.jsx)(n.code,{children:"timestamp"})," field, starting at ",(0,a.jsx)(n.code,{children:"2020-12-16 12:00:00"})," and extracting data from there."]}),"\n",(0,a.jsxs)(n.li,{children:["Construct the read data into an ",(0,a.jsx)(n.code,{children:"Order"})," object and return it"]}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"The jdbc configuration and reading code is as follows"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(o.A,{value:"Setting",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"jdbc:\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n"})})}),(0,a.jsx)(o.A,{value:"Scala",label:"Scala",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.source.JdbcSource\nimport org.apache.flink.api.scala._\n\nobject MySQLSourceApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n\n    JdbcSource().getDataStream[Order](lastOne => {\n      Thread.sleep(5000);\n      val laseOffset = if (lastOne == null) "2020-12-16 12:00:00" else lastOne.timestamp\n      s"select * from t_order where timestamp > \'$laseOffset\' order by timestamp asc "\n    },\n      _.map(x => new Order(x("market_id").toString, x("timestamp").toString))\n    ).print()\n\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n'})})}),(0,a.jsx)(o.A,{value:"Java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'import org.apache.streampark.flink.core.java.function.SQLQueryFunction;\nimport org.apache.streampark.flink.core.java.function.SQLResultFunction;\nimport org.apache.streampark.flink.core.java.function.StreamEnvConfigFunction;\nimport org.apache.streampark.flink.core.java.source.JdbcSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.util.StreamEnvConfig;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\n\nimport java.io.Serializable;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MySQLJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        new JdbcSource<Order>(context)\n                .getDataStream(\n                        (SQLQueryFunction<Order>) lastOne -> {\n                            Thread.sleep(5000);\n\n                            Serializable lastOffset = lastOne == null\n                            ? "2020-12-16 12:00:00"\n                            : lastOne.timestamp;\n\n                            return String.format(\n                                "select * from t_order " +\n                                "where timestamp > \'%s\' " +\n                                "order by timestamp asc ",\n                                lastOffset\n                            );\n                        },\n                        (SQLResultFunction<Order>) iterable -> {\n                            List<Order> result = new ArrayList<>();\n                            iterable.forEach(item -> {\n                                Order Order = new Order();\n                                Order.marketId = item.get("market_id").toString();\n                                Order.timestamp = Long.parseLong(item.get("timestamp").toString());\n                                result.add(Order);\n                            });\n                            return result;\n                        })\n                .returns(TypeInformation.of(Order.class))\n                .print();\n\n        context.start();\n    }\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Take the ",(0,a.jsx)(n.code,{children:"java"})," api as an example, here you have to accept two parameters"]}),"\n",(0,a.jsx)("div",{class:"counter",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SQLQueryFunction<T> queryFunc"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SQLResultFunction<T> resultFunc"})}),"\n"]})}),"\n",(0,a.jsx)(n.h3,{id:"queryfunc-to-get-sql",children:"queryFunc to get sql"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"queryFunc"})," needs to pass in a ",(0,a.jsx)(n.code,{children:"function"})," of type ",(0,a.jsx)(n.code,{children:"SQLQueryFunction"}),", the ",(0,a.jsx)(n.code,{children:"function"})," is used to get the query sql, will return the last record to the developer, and then the developer needs to return a new query ",(0,a.jsx)(n.code,{children:"sql"})," according to the last record, ",(0,a.jsx)(n.code,{children:"queryFunc"})," is defined as follows :"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@FunctionalInterface\npublic interface SQLQueryFunction<T> extends Serializable {\n    /**\n     * @return query sql\n     */\n    String query(T last) throws Exception;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["So the above code, the first time ",(0,a.jsx)(n.code,{children:"lastOne"})," (the last record) equals null, and will be judged, if null will take the default ",(0,a.jsx)(n.code,{children:"offset"}),", query sql according to the ",(0,a.jsx)(n.code,{children:"timestamp"})," field in positive order, so that after the first query, will return the last record, the next time you can directly use this record as the basis for the next query"]}),"\n",(0,a.jsx)(n.admonition,{title:"Cautions",type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"JdbcSource"})," implements the ",(0,a.jsx)(n.code,{children:"CheckpointedFunction"}),", that is, when the program opens ",(0,a.jsx)(n.strong,{children:"checkpoint"}),", it will save these state data such as ",(0,a.jsx)(n.code,{children:"laseOffset"})," to the ",(0,a.jsx)(n.code,{children:"state backend"}),", so that when the program hangs, it will automatically restore ",(0,a.jsx)(n.code,{children:"offset"})," from ",(0,a.jsx)(n.code,{children:"checkpoint"}),", and continue to read data from the last position,\nIn the production environment, a more flexible way is writing ",(0,a.jsx)(n.code,{children:"lastOffset"})," to storage, such as ",(0,a.jsx)(n.code,{children:"redis"}),", after each query and then update the offset to ",(0,a.jsx)(n.code,{children:"redis"}),", so that even if the program hangs unexpectedly, you can also get the last ",(0,a.jsx)(n.code,{children:"offset"})," from ",(0,a.jsx)(n.code,{children:"redis"})," for data extract, but also very convenient to adjust ",(0,a.jsx)(n.code,{children:"offset"})," for data replay"]})}),"\n",(0,a.jsx)(n.h3,{id:"resultfunc-process-the-query-data",children:"resultFunc process the query data"}),"\n",(0,a.jsxs)(n.p,{children:["The parameter type of ",(0,a.jsx)(n.code,{children:"resultFunc"})," is ",(0,a.jsx)(n.code,{children:"SQLResultFunction<T>"}),", which puts a query result set into ",(0,a.jsx)(n.code,{children:"Iterable<Map<String, ? >>"}),", and then returns it to the developer, at the same time, you can see that each iteration of the iterator returns a ",(0,a.jsx)(n.code,{children:"Map"}),", the ",(0,a.jsx)(n.code,{children:"Map"})," records a complete line of records, the ",(0,a.jsx)(n.code,{children:"Map"})," ",(0,a.jsx)(n.code,{children:"key"})," is the query field, ",(0,a.jsx)(n.code,{children:"value"})," is the value, ",(0,a.jsx)(n.code,{children:"SQLResultFunction<T>"})," is defined as follows"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@FunctionalInterface\npublic interface SQLResultFunction<T> extends Serializable {\n    Iterable<T> result(Iterable<Map<String, ?>> iterable);\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"jdbc-read-write",children:"JDBC Read Write"}),"\n",(0,a.jsxs)(n.p,{children:["In ",(0,a.jsx)(n.code,{children:"StreamPark"}),", ",(0,a.jsx)(n.code,{children:"JdbcSink"})," is used to write data, let's see how to write data with ",(0,a.jsx)(n.code,{children:"JdbcSink"}),", the example is to read data from ",(0,a.jsx)(n.code,{children:"kakfa"})," and write to ",(0,a.jsx)(n.code,{children:"mysql"}),"."]}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(o.A,{value:"Setting",default:!0,children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"kafka.source:\n  bootstrap.servers: kfk1:9092,kfk2:9092,kfk3:9092\n  pattern: user\n  group.id: user_02\n  auto.offset.reset: earliest # (earliest | latest)\n  ...\n\njdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n"})}),(0,a.jsx)(n.admonition,{title:"Cautions",type:"danger",children:(0,a.jsxs)(n.p,{children:["The configuration under ",(0,a.jsx)(n.code,{children:"jdbc"})," ",(0,a.jsx)(n.strong,{children:"semantic"})," is the semantics of writing, as described in ",(0,a.jsx)(n.a,{href:"#jdbc-info-config",children:"Jdbc Info Configuration"}),", the configuration will only take effect on ",(0,a.jsx)(n.code,{children:"JdbcSink"}),", ",(0,a.jsx)(n.code,{children:"StreamPark"})," is based on two-phase commit to achieve ",(0,a.jsx)(n.strong,{children:"EXACTLY_ONCE"})," semantics,\nThis requires that the database being manipulated supports transactions(",(0,a.jsx)(n.code,{children:"mysql"}),", ",(0,a.jsx)(n.code,{children:"oracle"}),", ",(0,a.jsx)(n.code,{children:"MariaDB"}),", ",(0,a.jsx)(n.code,{children:"MS SQL Server"}),"), theoretically all databases that support standard Jdbc transactions can do EXACTLY_ONCE (exactly once) write"]})})]}),(0,a.jsx)(o.A,{value:"Scala",label:"Scala",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scala",children:'import org.apache.streampark.common.util.JsonUtils\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.JdbcSink\nimport org.apache.streampark.flink.core.scala.source.KafkaSource\nimport org.apache.flink.api.common.typeinfo.TypeInformation\nimport org.apache.flink.api.java.typeutils.TypeExtractor.getForClass\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.connectors.kafka.KafkaDeserializationSchema\n\nobject JdbcSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n        val source = KafkaSource()\n          .getDataStream[String]()\n          .map(x => JsonUtils.read[User](x.value))\n\n        JdbcSink().sink[User](source)(user =>\n          s"""\n          |insert into t_user(`name`,`age`,`gender`,`address`)\n          |value(\'${user.name}\',${user.age},${user.gender},\'${user.address}\')\n          |""".stripMargin\n        )\n  }\n\n}\n\ncase class User(name:String,age:Int,gender:Int,address:String)\n\n'})})}),(0,a.jsx)(o.A,{value:"Java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"import com.fasterxml.jackson.databind.ObjectMapper;\nimport org.apache.streampark.flink.core.java.function.StreamEnvConfigFunction;\nimport org.apache.streampark.flink.core.java.source.KafkaSource;\nimport org.apache.streampark.flink.core.scala.StreamingContext;\nimport org.apache.streampark.flink.core.scala.source.KafkaRecord;\nimport org.apache.streampark.flink.core.scala.util.StreamEnvConfig;\nimport org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\nimport org.apache.flink.streaming.connectors.kafka.KafkaDeserializationSchema;\nimport org.apache.kafka.clients.consumer.ConsumerRecord;\n\nimport java.io.Serializable;\n\nimport static org.apache.flink.api.java.typeutils.TypeExtractor.getForClass;\n\npublic class JdbcSinkJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        ObjectMapper mapper = new ObjectMapper();\n\n        DataStream<JavaUser> source = new KafkaSource<String>(context)\n                .getDataStream()\n                .map((MapFunction<KafkaRecord<String>, JavaUser>) value ->\n                    mapper.readValue(value.value(), JavaUser.class));\n\n        new JdbcSink<JavaUser>(context)\n                .sql((SQLFromFunction<JavaUser>) JavaUser::toSql)\n                .sink(source);\n\n        context.start();\n    }\n\n}\n\nclass JavaUser implements Serializable {\n    String name;\n    Integer age;\n    Integer gender;\n    String address;\n    public String toSql() {\n        return String.format(\n                \"insert into t_user(`name`,`age`,`gender`,`address`) value('%s',%d,%d,'%s')\",\n                name,\n                age,\n                gender,\n                address);\n    }\n}\n\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"generate-target-sql-based-on-data-flow",children:"Generate target SQL based on data flow"}),"\n",(0,a.jsxs)(n.p,{children:["When writing, you need to know the specific ",(0,a.jsx)(n.code,{children:"sql"})," statement to write, the ",(0,a.jsx)(n.code,{children:"sql"})," statement needs to be provided by the developer by a way of the ",(0,a.jsx)(n.code,{children:"function"}),", in the ",(0,a.jsx)(n.code,{children:"scala"})," api, directly after the ",(0,a.jsx)(n.code,{children:"sink"})," method followed by the ",(0,a.jsx)(n.code,{children:"function"}),", while the ",(0,a.jsx)(n.code,{children:"java"})," api is passed a ",(0,a.jsx)(n.code,{children:"function"})," of type ",(0,a.jsx)(n.code,{children:"SQLFromFunction"})," through the ",(0,a.jsx)(n.code,{children:"sql()"})," method"]}),"\n",(0,a.jsxs)(n.p,{children:["The following is an example of the ",(0,a.jsx)(n.code,{children:"java"})," api, let's look at the definition of the ",(0,a.jsx)(n.code,{children:"function"})," method that provides sql in the ",(0,a.jsx)(n.code,{children:"java"})," api"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@FunctionalInterface\npublic interface SQLFromFunction<T> extends Serializable {\n    /**\n     * @param bean\n     * @return\n     */\n    String from(T bean);\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The generic ",(0,a.jsx)(n.code,{children:"<T>"})," on the ",(0,a.jsx)(n.code,{children:"SQLFromFunction"})," is the actual data type in the ",(0,a.jsx)(n.code,{children:"DataStream"}),", the ",(0,a.jsx)(n.code,{children:"function"})," has a method ",(0,a.jsx)(n.code,{children:"form(T bean)"}),", the ",(0,a.jsx)(n.code,{children:"bean"})," is a specific data in the current ",(0,a.jsx)(n.code,{children:"DataStream"}),", the data will be returned to the developer, the developer will based on this data, generate a specific ",(0,a.jsx)(n.code,{children:"sql"})," that can be inserted into the database"]}),"\n",(0,a.jsx)(n.h3,{id:"set-to-write-batch-size",children:"Set to write batch size"}),"\n",(0,a.jsxs)(n.p,{children:["In non-",(0,a.jsx)(n.code,{children:"EXACTLY_ONCE"})," (under the semantics of exactly once) you can set ",(0,a.jsx)(n.code,{children:"batch.size"})," to improve the performance of JDBC writes (provided that the business allows it), configured as follows"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"jdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n  batch.size: 1000\n"})}),"\n",(0,a.jsx)(n.p,{children:"In this way, instead of writing data immediately when it comes, and then performs a bulk insert"}),"\n",(0,a.jsx)(n.admonition,{title:"Cautions",type:"danger",children:(0,a.jsxs)(n.p,{children:["This setting only takes effect the non-",(0,a.jsx)(n.code,{children:"EXACTLY_ONCE"})," semantics, the benefit is to improve the performance of Jdbc writes, a large number of data insertion, the disadvantage is that data writing will inevitably have a delay, please use caution according to the actual use of the situation"]})}),"\n",(0,a.jsx)(n.h2,{id:"multi-instance-jdbc-support",children:"Multi-instance JDBC support"}),"\n",(0,a.jsx)(n.h2,{id:"specify-jdbc-connection-information-manually",children:"Specify JDBC connection information manually"})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},24990:(e,n,t)=>{t.d(n,{A:()=>o});t(30758);var a=t(13526);const r={tabItem:"tabItem_Xevx"};var i=t(86070);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:t,children:n})}},60630:(e,n,t)=>{t.d(n,{A:()=>S});var a=t(30758),r=t(13526),i=t(72469),o=t(25557),s=t(99688),c=t(17822),l=t(54991),d=t(52629);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[l,h]=m({queryString:t,groupId:r}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),x=(()=>{const e=l??f;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&c(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,i]),tabValues:i}}var j=t(78820);const x={tabList:"tabList_wCRy",tabItem:"tabItem_v3ez"};var g=t(86070);function b(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=s[t].value;r!==a&&(l(n),o(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(b,{...n,...e}),(0,g.jsx)(v,{...n,...e})]})}function S(e){const n=(0,j.A)();return(0,g.jsx)(k,{...e,children:h(e.children)},String(n))}},76113:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(30758);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);