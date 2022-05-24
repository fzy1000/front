<template>
    <div>
        <div class="TopologicalGraph">
            <div style="height:100%" ref="graphchart">
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
                    name: 'QS',
                    value: [0, 0],
                    symbol: 'circle',
                    symbolSize: 100,
                    category: 2,
                    alarmShow: 1,
                    optStatus: 1,
                    adminStatus: 1,
                    alarmDetail: {
                        critical: 0,
                        major: 1,
                        minor: 1,
                        warning: 1
                    },
                    symbol: "image://" + require('@/assets/TOMCAT.png'),
                    itemStyle: {
                        color: 'red'
                    }
                },
                {
                    name: 'DS',
                    value: [1, 90],
                    symbolSize: 100,
                    // symbol: 'circle'
                    symbol: "image://" + require('@/assets/TOMCAT.png')
                },
                {
                    name: 'TS',
                    value: [1, 120],
                    symbolSize: 100,
                    symbol: "image://" + require('@/assets/TOMCAT.png'),
                },
                {
                    name: 'HQS',
                    value: [0.75, 180],
                    symbolSize: 100,
                    symbol: "image://" + require('@/assets/TOMCAT.png'),
                },
                {
                    name: 'Sybase',
                    value: [1, 240],
                    symbolSize: 100,
                    symbol: "image://" + require('@/assets/HBASE_CLIENT.png'),
                },
                {
                    name: 'Gemfire',
                    value: [1, 300],
                    symbolSize: 80,
                    symbol: "image://" + require('@/assets/gimfire.webp'),
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
        if (this.status == '123') {
            this.warnStatus = 'red'
            this.title = 'STATUS:AMBER'
        } else {
            this.warnStatus = 'green'
            this.title = 'STATUS:NORNAL'
        }
        this.drawChart()
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


                    // x: 'left',
                    // y: 'head',
                    x: 200,
                    y: 100,
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
                                source: 'QS',
                                target: 'Gemfire',
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
                                source: 'Gemfire',
                                target: 'Sybase',
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
                                source: 'HQS',
                                target: 'QS',
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
                                source: 'DS',
                                target: 'QS',
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
                                source: 'TS',
                                target: 'QS',
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
                                width: 3, // 线条宽度
                                opacity: 0.1, // 尾迹线条透明度
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
    height: 50vh;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

</style>
