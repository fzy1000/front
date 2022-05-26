<template>
    <div>
        <div class="TopologicalGraph">
            <div style="top: -5vh; height:100%;width: 100%;" ref="graphchart">
            </div>
        </div>
    </div>
</template>
<script>

import * as echarts from 'echarts';
export default {
    props: {
        status: String
    },
    data() {
        return {
            warnStatus: this.status,
            echart: null,
            nodes: [
                {
                    name: 'Backend-Server',
                    value: [0.2, 0],
                    symbol: 'circle',
                    symbolSize: 50,
                    category:  0,
                    alarmShow: 1,
                    optStatus: 10,
                    adminStatus: 1,
                    alarmDetail: {
                        critical: 1,
                        major: 1,
                        minor: 1,
                        warning: 1
                    },
                    symbol: "image://" + require('@/assets/SPRING_BOOT.png'),
                    itemStyle: {
                        color: 'red'
                    }
                },
                {
                    name: 'Hackson',
                    value: [1, 40],
                    symbolSize: 50,
                    // symbol: 'circle'
                    symbol: "image://" + require('@/assets/MYSQL.png')
                },
                {
                    name: 'Redis',
                    value: [1, 70],
                    symbolSize: 50,
                    symbol: "image://" + require('@/assets/REDIS.png'),
                },
                {
                    name: 'Server',
                    value: [0.9, 100],
                    symbolSize: 50,
                    symbol: "image://" + require('@/assets/UNKNOWN.png'),
                },
                {
                    name: 'APIServer',
                    value: [0.8, 130],
                    symbolSize: 50,
                    symbol: "image://" + require('@/assets/SPRING_BOOT.png'),
                },
                {
                    name: 'User',
                    value: [0.8, -75],
                    symbolSize: 50,
                    symbol: "image://" + require('@/assets/USER.png'),
                }
            ],
            // links: [
            //     {
            //         source: 'QS',
            //         target: 'Gemfire',
            //         symbol: ['none', 'arrow'],
            //         label: {
            //             show: true,
            //             // formatter: '×',
            //             formatter: '',
            //             padding: [0, 2, -13, 0],
            //             fontSize: 20
            //         },
            //         lineStyle: {
            //             color: 'green',
            //             curveness: 0
            //         }
            //     },
            //     {
            //         source: 'Gemfire',
            //         target: 'Sybase',
            //         symbol: ['none', 'arrow'],
            //         label: {
            //             show: true,
            //             // formatter: '×',
            //             formatter: '',
            //             padding: [0, 2, -13, 0],
            //             fontSize: 20
            //         },
            //         lineStyle: {
            //             color: 'green',
            //             curveness: 0
            //         }
            //     },
            //     {
            //         source: 'HQS',
            //         target: 'QS',
            //         symbol: ['none', 'arrow'],
            //         label: {
            //             show: true,
            //             // formatter: '×',
            //             formatter: '',
            //             padding: [0, 2, -13, 0],
            //             fontSize: 20
            //         },
            //         lineStyle: {
            //             color: 'green',
            //             curveness: 0
            //         }
            //     },
            //     {
            //         source: 'DS',
            //         target: 'QS',
            //         symbol: ['none', 'arrow'],
            //         label: {
            //             show: true,
            //             // formatter: '×',
            //             formatter: '',
            //             padding: [0, 2, -13, 0],
            //             fontSize: 20
            //         },
            //         lineStyle: {
            //             color: 'green',
            //             curveness: 0
            //         }
            //     },
            //     {
            //         source: 'TS',
            //         target: 'QS',
            //         symbol: ['none', 'arrow'],
            //         label: {
            //             show: true,
            //             // formatter: '×',
            //             formatter: '',
            //             padding: [0, 2, -13, 0],
            //             fontSize: 20
            //         },
            //         lineStyle: {
            //             color: 'green',
            //             curveness: 0
            //         }
            //     }
            // ],
            lines: [//箭头流动方向
                // {//Gemfire-Sybase
                //   coords: [
                //     [1, 300],
                //     [1, 240]
                //   ]
                // },
                // {//Gemfire-TS
                //   coords: [
                //     [1, 300],
                //     [1, 120]
                //   ]
                // },
                // {//TS-Gemfire
                //     coords: [
                //         [1, 120],
                //         [1, 240]
                //     ]
                // },
                // {//QS-Sybase
                //     coords: [
                //         [0, 0],
                //         [1, 240]
                //     ]
                // },
                // {//TS-QS
                //   coords: [
                //     [1, 120],
                //     [0, 0]
                //   ]
                // },
                // {//HQS-QS
                //   coords: [
                //     [1, 180],
                //     [0, 0]
                //   ]
                // },
                // {//DS-QS
                //   coords: [
                //     [1, 90],
                //     [0, 0]
                //   ]
                // },
                // {//QS-Gemfire
                //     coords: [
                //         [0, 0],
                //         [1, 300]
                //     ]
                // },
            ]
        }
    },
    components: {
    },
    mounted() {
        if (this.status == '12345') {
            this.warnStatus = 'red'
            this.title = 'STATUS:AMBER'
        } else {
            this.warnStatus = 'green'
            this.title = 'STATUS:NORNAL'
        }
        this.drawChart()
        console.log(this.warnStatus)
    },
    methods: {
        drawChart() {
            // 角度
            for (let i = 0; i < this.nodes.length; i++) {
                this.nodes[i].angle = (360 / this.nodes.length) * i
            }
            this.echart = echarts.init(this.$refs.graphchart)
            let option = {
                title: {
                    text: this.title,
                    // subtext: 'PinPoint',
                    sublink: 'https://www.baidu.com',

                    // text:  <li><a href="https://www.baidu.com" target="_blank"
                    // rel="noopener">Pinpoint</a></li>,


                    x: 150,
                    y: 'head',
                    // x: 200,
                    // y: 100,
                    borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
                    padding: 0, // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
                    itemGap: -10, // 主副标题纵向间隔，单位px，默认为10
                    textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                        fontFamily: 'Arial',
                        fontSize: 30,
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        color: this.warnStatus
                    }
                    // subtextStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    //     fontSize: 20,
                    //     color: 'blue',
                    //     lineHeight: 40,
                    //     align: 'right',
                    //     textBorderDashOffset: 100,
                    //     padding: [
                    //         5,  // 上
                    //         10, // 右
                    //         5,  // 下
                    //         10, // 左
                    //     ]
                    // }
                },
                polar: {
                },
                radiusAxis: {
                    show: false
                },
                angleAxis: {
                    type: 'value',
                    min: 0,
                    max: 360,
                    show: false
                },
                series: [
                    {
                        type: 'graph',
                        coordinateSystem: 'polar',
                        label: {
                            show: true,
                            position: 'bottom',
                            fontSize: 14
                        },
                        // layout:'circular',
                        symbol: 'circle',
                        symbolSize: 50,
                        symbolPosition: 'start',
                        nodes: this.nodes,
                        links: [
                            {
                                source: 'User',
                                target: 'Backend-Server',
                                symbol: ['none', 'arrow'],
                                label: {
                                    show: true,
                                    // formatter: '×',
                                    formatter: '',
                                    padding: [0, 2, -13, 0],
                                    fontSize: 20
                                },
                                lineStyle: {
                                    color: this.warnStatus,
                                    curveness: 0
                                }
                            },
                            {
                                source: 'Backend-Server',
                                target: 'Hackson',
                                symbol: ['none', 'arrow'],
                                label: {
                                    show: true,
                                    // formatter: '×',
                                    formatter: '',
                                    padding: [0, 2, -13, 0],
                                    fontSize: 20
                                },
                                lineStyle: {
                                    color: 'green',
                                    curveness: 0
                                }
                            },
                            {
                                source: 'Backend-Server',
                                target: 'Redis',
                                symbol: ['none', 'arrow'],
                                label: {
                                    show: true,
                                    // formatter: '×',
                                    formatter: '',
                                    padding: [0, 2, -13, 0],
                                    fontSize: 20
                                },
                                lineStyle: {
                                    color: 'green',
                                    curveness: 0
                                }
                            },
                            {
                                source: 'Backend-Server',
                                target: 'Server',
                                symbol: ['none', 'arrow'],
                                label: {
                                    show: true,
                                    // formatter: '×',
                                    formatter: '',
                                    padding: [0, 2, -13, 0],
                                    fontSize: 20
                                },
                                lineStyle: {
                                    color: 'green',
                                    curveness: 0
                                }
                            },
                            {
                                source: 'Backend-Server',
                                target: 'APIServer',
                                symbol: ['none', 'arrow'],
                                label: {
                                    show: true,
                                    // formatter: '×',
                                    formatter: '',
                                    padding: [0, 2, -13, 0],
                                    fontSize: 20
                                },
                                lineStyle: {
                                    color: 'green',
                                    curveness: 0
                                }
                            }
                        ],
                    },
                    {
                        name: 'line-echart',
                        type: 'lines',
                        coordinateSystem: 'polar',
                        zlevel: 1,
                        symbol: ['none', 'arrow'],
                        symbolSize: 10,
                        polyline: true,
                        effect: {//移动图标设置
                            show: true,
                            period: 4,
                            smooth: true,
                            trailLength: 0.2,
                            symbol: 'arrow',//箭头
                            // symbol: 'circle',//原点
                            // symbol: 'image://' + require('@/assets/logo.png'),//自定义图片
                            color: 'rgba(55,155,255,0.5)',
                            symbolSize: 15,//大小
                            loop: true,//循环流动
                        },
                        lineStyle: {//连接线
                            normal: {
                                color: '#1DE9B6',
                                width: 10, // 线条宽度
                                opacity: 0.9, // 尾迹线条透明度
                                curveness: 0.3 // 尾迹线条曲直度
                            }
                        },
                        data: this.lines
                    }
                ]
            }
            this.echart.setOption(option)
        }
    }
}

</script>
 
<style scoped>
.TopologicalGraph {
    width: 50%;
    height: 70vh;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
