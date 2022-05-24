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

                    <h1><a href="https://www.baidu.com" class="Link" v-if="topoVisible">PINPOINT</a></h1>
                <div class="log" v-if="topoVisible">
                
                    <br>
                    <br>
                    <br>
                    <br>
                    <textarea style="width:500px;height:200px;" readonly="readonly">HERE IS LOG</textarea>
                    <br>
                    <br>
                    <br>

                    <textarea style="width:500px;height:200px;" readonly="readonly">HERE IS ISSUE</textarea>
                    <!--                 
                    <iframe :src="src" width="700" height="350" frameborder="1" 
  sandbox="allow-forms allow-scripts allow-same-origin allow-popups" scrolling="auto" style="position:absolute;top: 10px;left: 0px;"></iframe> -->
                </div>
                <TopologicalGraph v-if="topoVisible" :status="form.traceId" />
                <br>
            </div>
        </div>

        <body v-if="topoVisible">
            <br />
            <br />
            <br />
            <div class="tableTitle"><span class="midText">
                    <h1>Solution</h1>
                </span></div>
            <br />
            <br />
            <h2>Please restart your server</h2>
        </body>
    </div>
</template>

<script>

import TopologicalGraph from './TopologicalGraph.vue'
export default {
    data() {
        return {
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
            // let formData = new FormData()
            // for (var key in this.form) {
            //     formData.append(key, form[key])
            // }
            console.log(form.traceId.value == "123")
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
    left: 50%;
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
    right: 30%;
    margin-top: 10px;

}

.Link {
    position: relative;
    right: -10%;
    // margin-top: 100px;
    font-size: 50;
    bottom: -50px;
}
</style>