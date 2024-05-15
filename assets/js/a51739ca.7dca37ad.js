"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[1321],{67583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=t(86070),r=t(76113),a=t(60630),s=t(24990);const o={id:"Redis-Connector",title:"Redis Connector",sidebar_position:8},d=void 0,c={id:"connector/Redis-Connector",title:"Redis Connector",description:"Redis is an open source in-memory data structure storage system that can be used as a database, cache, and messaging middleware. It supports many types of data structures such as strings, hashes, lists, sets, ordered sets and range queries, bitmaps, hyperlogloglogs and geospatial index radius queries. Redis has built-in transactions and various levels of disk persistence, and provides high availability through Redis Sentinel and Cluster.",source:"@site/docs/connector/8-redis.md",sourceDirName:"connector",slug:"/connector/Redis-Connector",permalink:"/docs/connector/Redis-Connector",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/connector/8-redis.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"Redis-Connector",title:"Redis Connector",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"HTTP Connector",permalink:"/docs/connector/HTTP-Connector"},next:{title:"Advanced extensions",permalink:"/docs/advanced/"}},l={},u=[{value:"Redis Write Dependency",id:"redis-write-dependency",level:2},{value:"Writing Redis the Regular Way",id:"writing-redis-the-regular-way",level:2},{value:"1.Access to source",id:"1access-to-source",level:3},{value:"2. Write to redis",id:"2-write-to-redis",level:3},{value:"Apache StreamPark\u2122 Writes to Redis",id:"apache-streampark-writes-to-redis",level:2},{value:"1. Configure policy and connection information",id:"1-configure-policy-and-connection-information",level:3},{value:"2. Write to Redis",id:"2-write-to-redis-1",level:3},{value:"Supported redis operating commands",id:"supported-redis-operating-commands",level:3},{value:"Other Configuration",id:"other-configuration",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"http://www.redis.cn/",children:"Redis"})," is an open source in-memory data structure storage system that can be used as a database, cache, and messaging middleware. It supports many types of data structures such as strings, hashes, lists, sets, ordered sets and range queries, bitmaps, hyperlogloglogs and geospatial index radius queries. Redis has built-in transactions and various levels of disk persistence, and provides high availability through Redis Sentinel and Cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["Apache Flink does not officially provide a connector for writing reids data. Apache StreamPark is based on ",(0,i.jsx)(n.a,{href:"https://bahir.apache.org/docs/flink/current/flink-streaming-redis/",children:"Flink Connector Redis"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It encapsulates RedisSink, configures redis connection parameters, and automatically creates redis connections to simplify development. Currently, RedisSink supports the following connection methods: single-node mode, sentinel mode, and cluster mode because it does not support transactions."}),"\n",(0,i.jsxs)(n.p,{children:["StreamPark uses Redis' ",(0,i.jsx)(n.strong,{children:"MULTI"})," command to open a transaction and the ",(0,i.jsx)(n.strong,{children:"EXEC"})," command to commit a transaction, see the link for details: ",(0,i.jsx)(n.a,{href:"http://www.redis.cn/topics/transactions.html",children:"http://www.redis.cn/topics/transactions.html"}),", using RedisSink supports AT_LEAST_ONCE processing semantics by default. EXACTLY_ONCE semantics are supported with checkpoint enabled."]}),"\n",(0,i.jsxs)(n.admonition,{title:"tip",type:"tip",children:[(0,i.jsx)(n.p,{children:"Redis is a key-value database, AT_LEAST_ONCE semantics flink job with abnormal restart the latest data will overwrite the previous version of data to achieve the final data consistency. If an external program reads the data during the restart, there is a risk of inconsistency with the final data."}),(0,i.jsx)(n.p,{children:"EXACTLY_ONCE semantics will write to redis in batch when the flink job checkpoint is completed as a whole, and there will be a delay of checkpoint interval. Please choose the appropriate semantics according to the business scenario."})]}),"\n",(0,i.jsx)(n.h2,{id:"redis-write-dependency",children:"Redis Write Dependency"}),"\n",(0,i.jsxs)(n.p,{children:["Flink Connector Redis officially provides two kinds, the following two api are the same, StreamPark is using ",(0,i.jsx)(n.code,{children:"org.apache.bahir"})," dependency."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.bahir</groupId>\n    <artifactId>flink-connector-redis_2.11</artifactId>\n    <version>1.0</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.flink</groupId>\n    <artifactId>flink-connector-redis_2.10</artifactId>\n    <version>1.1.5</version>\n</dependency>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"writing-redis-the-regular-way",children:"Writing Redis the Regular Way"}),"\n",(0,i.jsx)(n.p,{children:"The regular way of writing data using Flink Connector Redis is as follows:"}),"\n",(0,i.jsx)(n.h3,{id:"1access-to-source",children:"1.Access to source"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import org.apache.flink.streaming.api.functions.source.SourceFunction;\nimport scala.util.Random;\n\npublic class TestSource implements SourceFunction<TestEntity> {\n\n    private boolean isRunning = true;\n\n    private Random random = new Random();\n\n    private int index = 0;\n\n    @Override\n    public void run(SourceContext<TestEntity> sourceContext) throws Exception {\n        while (isRunning && index <= 1000001) {\n            index += 1;\n            long userId = System.currentTimeMillis();\n            long orderId = random.nextInt(100);\n            int status = random.nextInt(1);\n            double price = random.nextDouble();\n            int quantity = new Random().nextInt(10);\n            TestEntity order = new TestEntity(userId, orderId, 1l, 1l, status, price, quantity, System.currentTimeMillis());\n            sourceContext.collect(order);\n        }\n    }\n\n    @Override\n    public void cancel() {\n        this.isRunning = false;\n    }\n}\nclass TestEntity {\n    Long userId;\n    Long orderId;\n    Long siteId;\n    Long cityId;\n    Integer orderStatus;\n    Double price;\n    Integer quantity;\n    Long timestamp;\n\n    /**\n     * @param userId      : User ID\n     * @param orderId     : Order ID\n     * @param siteId      : Site ID\n     * @param cityId      : City ID\n     * @param orderStatus : Order status(1:Place order,0:Return order)\n     * @param price       : Unit price\n     * @param quantity    : Number of orders\n     * @param timestamp   : Order time\n     */\n    public TestEntity(Long userId, Long orderId, Long siteId, Long cityId, Integer orderStatus, Double price, Integer quantity, Long timestamp) {\n        this.userId = userId;\n        this.orderId = orderId;\n        this.siteId = siteId;\n        this.cityId = cityId;\n        this.orderStatus = orderStatus;\n        this.price = price;\n        this.quantity = quantity;\n        this.timestamp = timestamp;\n    }\n}\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-write-to-redis",children:"2. Write to redis"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'import org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;\nimport org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;\nimport org.apache.flink.streaming.connectors.redis.RedisSink;\nimport org.apache.flink.streaming.connectors.redis.common.config.FlinkJedisPoolConfig;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommand;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommandDescription;\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisMapper;\n\npublic class FlinkRedisSink {\n\n    public static void main(String[] args) throws Exception {\n        //1.Get the execution environment\n        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n        env.setParallelism(1);\n\n        //2.Read data and convert to JavaBean\n        DataStreamSource<TestEntity> source = env.addSource(new TestSource(), TypeInformation.of(TestEntity.class));\n        //3.Write Data to Redis\n        FlinkJedisPoolConfig jedisPoolConfig = new FlinkJedisPoolConfig.Builder()\n                .setHost("localhost")\n                .setPort(6379)\n                .build();\n        source.addSink(new RedisSink<>(jedisPoolConfig, new MyRedisMapper()));\n\n        //4.Perform the task\n        env.execute();\n    }\n\n    public static class MyRedisMapper implements RedisMapper<TestEntity> {\n        @Override\n        public RedisCommandDescription getCommandDescription() {\n            // Returns the type of data that exists in Redis, stored as a hash, with the second parameter being the outside key\n            return new RedisCommandDescription(RedisCommand.HSET, "");\n        }\n\n        @Override\n        public String getKeyFromData(TestEntity data) {\n            // Get Key from data: Key of Hash\n            return String.valueOf(data.userId());\n        }\n\n        @Override\n        public String getValueFromData(TestEntity data) {\n            // Get Value from data: Value of Hash\n            return String.valueOf(data.price());\n        }\n    }\n\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The above creation of FlinkJedisPoolConfig is tedious, and each operation of redis has to build RedisMapper, which is very insensitive. ",(0,i.jsx)(n.code,{children:"StreamPark"})," uses a convention over configuration and automatic configuration. This only requires configuring redis\nStreamPark automatically assembles the source and sink parameters, which greatly simplifies the development logic and improves development efficiency and maintainability."]}),"\n",(0,i.jsx)(n.h2,{id:"apache-streampark-writes-to-redis",children:"Apache StreamPark\u2122 Writes to Redis"}),"\n",(0,i.jsx)(n.p,{children:"RedisSink defaults to AT_LEAST_ONCE (at least once) processing semantics, two-stage segment submission supports EXACTLY_ONCE semantics with checkpoint enabled, available connection types: single-node mode, sentinel mode."}),"\n",(0,i.jsx)(n.h3,{id:"1-configure-policy-and-connection-information",children:"1. Configure policy and connection information"}),"\n",(0,i.jsxs)(a.A,{children:[(0,i.jsx)(s.A,{value:"Single-node configuration",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"#redis sink configuration\nredis.sink:\n  host: 127.0.0.1 #Required parameters\n  #Optional parameters\n  port: 6379\n  database: 2\n  password:\n  connectType: jedisPool #Optional parameters: jedisPool\uff08\u9ed8\u8ba4\uff09|sentinel\n  maxTotal:\n  maxIdle:\n  minIdle:\n  connectionTimeout:\n"})})}),(0,i.jsx)(s.A,{value:"Sentinel mode configuration",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"#redis sink configuration\nredis.sink:\n  masterName: master # Sentinel mode parameters\n  host: 192.168.0.1:6379, 192.168.0.3:6379 # Required parameter, must specify the port of the connection\n  connectType: sentinel\n  #Optional parameters\n  soTimeout: 6379\n  database: 2\n  password:\n  maxTotal:\n  maxIdle:\n  minIdle:\n  connectionTimeout:\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"2-write-to-redis-1",children:"2. Write to Redis"}),"\n",(0,i.jsx)(n.p,{children:"Writing to redis with StreamPark is very simple, the code is as follows:"}),"\n",(0,i.jsx)(a.A,{children:(0,i.jsx)(s.A,{value:"scala",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:'\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.{RedisMapper, RedisSink}\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.connectors.redis.common.mapper.RedisCommand\nimport org.json4s.DefaultFormats\n\nobject FlinkRedisSinkApp extends FlinkStreaming {\n\n  @transient\n  implicit lazy val formats: DefaultFormats.type = org.json4s.DefaultFormats\n\n  override def handle(): Unit = {\n\n    /**\n     * Create the source of read data\n     */\n    val source = context.addSource(new TestSource)\n\n\n    // Redis sink..................\n    //1)Define RedisSink\n    val sink: RedisSink = RedisSink()\n    //2)Write Mapper\'s mapping\n    val personMapper: RedisMapper[TestEntity] = RedisMapper[TestEntity](RedisCommand.HSET, "flink_user", _.userId.toString, _.orderId.toString)\n\n    sink.sink[TestEntity](source, personMapper, 60000000).setParallelism(1)\n\n  }\n\n}\n\n\n/**\n * RedisMapper\n * @param cmd redis -Write command\n * @param additionalKey -Write additional keys, applicable to hset\n * @param key -Write key\n * @param value -Write value\n * @tparam T\n */\ncase class RedisMapper[T](cmd: RedisCommand, additionalKey: String, key: T => String, value: T => String) extends RMapper[T] {\n\n  override def getCommandDescription: RedisCommandDescription = new RedisCommandDescription(cmd, additionalKey)\n\n  override def getKeyFromData(r: T): String = key(r)\n\n  override def getValueFromData(r: T): String = value(r)\n\n}\n'})})})}),"\n",(0,i.jsxs)(n.p,{children:["As the code shows, StreamPark automatically loads the configuration to create a RedisSink, and the user completes the redis write operation by creating the required RedisMapper object, ",(0,i.jsx)(n.strong,{children:"additionalKey is the outermost key when hset is invalid for other write commands"}),".\nRedisSink.sink() write the corresponding key corresponding to the data is required to specify the expiration time, if not specified default expiration time is java Integer.MAX_VALUE (67 years). As shown in the code."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:'class RedisSink() extends Sink {\n\n  def sink[T](stream: DataStream[T], mapper: RedisMapper[T], ttl: Int = Int.MaxValue): DataStreamSink[T] = {\n    val sinkFun = (enableCheckpoint, cpMode) match {\n      case (false, CheckpointingMode.EXACTLY_ONCE) => throw new IllegalArgumentException("redis sink EXACTLY_ONCE must enable checkpoint")\n      case (true, CheckpointingMode.EXACTLY_ONCE) => new Redis2PCSinkFunction[T](config, mapper, ttl)\n      case _ => new RedisSinkFunction[T](config, mapper, ttl)\n    }\n    val sink = stream.addSink(sinkFun)\n    afterSink(sink, parallelism, name, uid)\n  }\n\n}\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"supported-redis-operating-commands",children:"Supported redis operating commands"}),"\n",(0,i.jsx)(n.p,{children:"The following commands are supported for redis operations:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"public enum RedisCommand {\n\n    /**\n     * Insert the specified value at the head of the list stored at key.\n     * If key does not exist, it is created as empty list before performing the push operations.\n     */\n    LPUSH(RedisDataType.LIST),\n\n    /**\n     * Insert the specified value at the tail of the list stored at key.\n     * If key does not exist, it is created as empty list before performing the push operation.\n     */\n    RPUSH(RedisDataType.LIST),\n\n    /**\n     * Add the specified member to the set stored at key.\n     * Specified member that is already a member of this set is ignored.\n     */\n    SADD(RedisDataType.SET),\n\n    /**\n     * Set key to hold the string value. If key already holds a value,\n     * it is overwritten, regardless of its type.\n     */\n    SET(RedisDataType.STRING),\n\n    /**\n     * Adds the element to the HyperLogLog data structure stored at the variable name specified as first argument.\n     */\n    PFADD(RedisDataType.HYPER_LOG_LOG),\n\n    /**\n     * Posts a message to the given channel.\n     */\n    PUBLISH(RedisDataType.PUBSUB),\n\n    /**\n     * Adds the specified members with the specified score to the sorted set stored at key.\n     */\n    ZADD(RedisDataType.SORTED_SET),\n\n    /**\n     * Removes the specified members from the sorted set stored at key.\n     */\n    ZREM(RedisDataType.SORTED_SET),\n\n    /**\n     * Sets field in the hash stored at key to value. If key does not exist,\n     * a new key holding a hash is created. If field already exists in the hash, it is overwritten.\n     */\n    HSET(RedisDataType.HASH);\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"info",children:(0,i.jsxs)(n.p,{children:["RedisSink currently supports single-node mode and sentinel mode connections. And its cluster mode does not support transactions, but StreamPark is currently for support. Please call the official Flink Connector Redis api if you have a usage scenario.",(0,i.jsx)("br",{}),"\nCheckpoint must be enabled under EXACTLY_ONCE semantics, otherwise the program will throw parameter exceptions.",(0,i.jsx)("br",{}),"\nEXACTLY_ONCE semantics checkpoint data sink cache inside the memory, you need to reasonably set the checkpoint interval according to the actual data, otherwise there is a risk of ",(0,i.jsx)(n.strong,{children:"oom"}),".",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(n.h2,{id:"other-configuration",children:"Other Configuration"}),"\n",(0,i.jsxs)(n.p,{children:["All other configurations must adhere to the ",(0,i.jsx)(n.strong,{children:"StreamPark"})," configuration, please refer to ",(0,i.jsx)(n.a,{href:"/docs/development/config/",children:"project configuration"})," for specific configurable items and the role of each parameter."]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},24990:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var i=t(13526);const r={tabItem:"tabItem_Xevx"};var a=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,s),hidden:t,children:n})}},60630:(e,n,t)=>{t.d(n,{A:()=>S});var i=t(30758),r=t(13526),a=t(72469),s=t(25557),o=t(99688),d=t(17822),c=t(54991),l=t(52629);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=p(e),[s,d]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:a}))),[c,u]=h({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,l.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),y=(()=>{const e=c??g;return m({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{y&&d(y)}),[y]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var f=t(78820);const y={tabList:"tabList_wCRy",tabItem:"tabItem_v3ez"};var v=t(86070);function k(e){let{className:n,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),l=e=>{const n=e.currentTarget,t=d.indexOf(n),r=o[t].value;r!==i&&(c(n),s(r))},u=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:u,onClick:l,...a,className:(0,r.A)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,v.jsx)(k,{...n,...e}),(0,v.jsx)(b,{...n,...e})]})}function S(e){const n=(0,f.A)();return(0,v.jsx)(x,{...e,children:u(e.children)},String(n))}},76113:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(30758);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);