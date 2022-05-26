<template>
    <div class="send">
        <p>{{ msg }}</p>
        <form action="/demo/form.asp" id="form" class="form">
            FUNCTION:
            <input type="text" name="function" v-model="form.function">
            TRACE ID
            <input type="text" name="traceId" v-model="form.traceId">
            <br>
            <br>
            <input type="button" @click="submit" value="Submit">
            <input type="button" @click="clear" value="Clear">
        </form>
        <div>
            <div class="topo">
                    <a href="http://34.222.223.197:8079/filteredMap/frontend-server@SPRING_BOOT/1h/2022-05-26-14-18-31?filter=%5B%7B%22fa%22:null,%22fst%22:null,%22ta%22:null,%22tst%22:null,%22a%22:%22frontend-server%22,%22st%22:%22SPRING_BOOT%22,%22ie%22:null,%22rf%22:0,%22rt%22:%22max%22,%22an%22:%22frontend-server-1%22%7D%5D&hint=%7B%7D" class="Link" target="_blank" v-if="topoVisible"><h1>PINPOINT</h1></a>
                <div class="log" v-if="topoVisible">
                    <br>
                    <br>
                    <textarea style="width:235%;height:350px; overflow-x:scroll; overflow-y:scroll" readonly="readonly" >{{this.logText}}</textarea>
                    <br>
                    <br>
                    <!--                 
                    <iframe :src="src" width="700" height="350" frameborder="1" 
  sandbox="allow-forms allow-scripts allow-same-origin allow-popups" scrolling="auto" style="position:absolute;top: 10px;left: 0px;"></iframe> -->
                </div >
                <div class="graph">
                    <TopologicalGraph v-if="topoVisible" :status="form.traceId" />
                </div>
            </div>
        </div>
        <body v-if="this.adviseText">
            <div class="tableTitle"><span class="midText">
                    <h1>Solution</h1>
                </span></div>
            <br />
            <br />
            <div class="advice">
            <h2>ISSUE: Connection refused: connect</h2>
            <h2>SOLUTION: Please Restart Backend-Server </h2>
            <h2>Please Contact Wih Server Administartor Allen Feng</h2>
            </div>
        </body>
    </div>
</template>

<script>

import TopologicalGraph from './TopologicalGraph.vue'
export default {
    data() {
        return {
            adviseText:false,
            logText:" .",
            topoVisible: false,
            // src: "../../../../Consent form_副本.pdf",
            src: "www.baidu.com",
            form: {
                'name': '',
                'gender': '',
                'address': ''
            }
        }
    },
    components: {
        TopologicalGraph
    },
    methods: {
        submit() {
            this.topoVisible = true
            if(this.form.traceId=='12345'){
                console.log("here")
                this.adviseText=true
                this.logText = "2022-05-26 12:03:23 [ERROR]([dispatcherServlet]           ) [TxId : backend-server-1^1653533346759^10 , SpanId : -8837425322077286778] Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Request processing failed; nested exception is org.springframework.web.client.ResourceAccessException: I/O error on GET request for \"http://127.0.0.1:8091/getData\": Connection refused: connect; nested exception is java.net.ConnectException: Connection refused: connect] with root cause\n" +
                "java.net.ConnectException: Connection refused: connect\n" +
                "        at java.net.DualStackPlainSocketImpl.connect0(Native Method) ~[?:1.8.0_333]\n" +
                "        at java.net.DualStackPlainSocketImpl.socketConnect(Unknown Source) ~[?:1.8.0_333]\n" +
                "        at java.net.AbstractPlainSocketImpl.doConnect(Unknown Source) ~[?:1.8.0_333]\n" +
                "        at java.net.AbstractPlainSocketImpl.connectToAddress(Unknown Source) ~[?:1.8.0_333]\n" +
                "        at java.net.AbstractPlainSocketImpl.connect(Unknown Source) ~[?:1.8.0_333]\n" +
                "        at java.net.PlainSocketImpl.connect(Unknown Source) ~[?:1.8.0_333]\n" +
                "        at java.net.SocksSocketImpl.connect(Unknown Source) ~[?:1.8.0_333]\n" +
                "        at java.net.Socket.connect(Unknown Source) ~[?:1.8.0_333]\n" +
                "        at java.net.Socket.connect(Unknown Source) ~[?:1.8.0_333]\n"
            } else {
                 this.logText="2022-05-26 11:59:12 [INFO ](WebRestController             ) [TxId : backend-server-1^1653533346759^10 , SpanId : 6661803016684038669] Start to handle request in /query...\n" +
                "2022-05-26 11:59:13 [INFO ](QueryController               ) [TxId : api-server-1^1653535321906^4 , SpanId : 3152941307172736455] Start to handle request in /getData...\n" +
                "2022-05-26 11:59:13 [INFO ](QueryService                  ) [TxId : api-server-1^1653535321906^4 , SpanId : 3152941307172736455] Start to query...\n" +
                "2022-05-26 11:59:15 [INFO ](QueryController               ) [TxId : api-server-1^1653535321906^4 , SpanId : 3152941307172736455] End of handle request in /getInternData...\n" +
                "2022-05-26 11:59:15 [INFO ](WebRestController             ) [TxId : backend-server-1^1653533346759^10 , SpanId : 6661803016684038669] HTTP status code from backapi: 200\n" +
                "2022-05-26 11:59:15 [INFO ](WebRestController             ) [TxId : backend-server-1^1653533346759^10 , SpanId : 6661803016684038669] End of handle request in /query..."
            }
            // let formData = new FormData()
            // for (var key in this.form) {
            //     formData.append(key, form[key])
            // }
            // // eslint-disable-next-line no-unused-expressions
            // this.$http.post('/api/v1/speakers',
            //     {
            //         data: this.form
            //     })
            //     .then((Response) => {
            //         alert('提交成功')
            //     },
            //         (Response) => {
            //             alert('出错了')
            //         })
        },

        clear() {
            this.topoVisible = false
                this.adviseText=false
        }
    }
}
</script>
<style lang="scss">
#send {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.tableTitle {
    position: relative;
    margin: 0 auto;
    width: 1500px;
    height: 1px;
    background-color: #0b0a0a;
    text-align: center;
    font-size: 16px;
    color: rgba(101, 101, 101, 1);
}

.midText {
    position: absolute;
    // left: 50%;
    right: 50%;
    // background-color: #f2f4f7;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
}

.log {
    float: right;
    padding: 0;
    width: 200px;
    height: 200px;
    position: absolute;
    right: 20%;
    margin-top: 10px;

}


.graph {
    position: relative;
    padding-top: -10%;  
    // bottom: -50px;
}

.Link {
    position: relative;
    right: -15%;
    // margin-top: 100px;
    font-size: 50;
    bottom: -50px;
}

.advice {
    padding-left: 30%;
    text-align: left;
    font-style:oblique
}
</style>