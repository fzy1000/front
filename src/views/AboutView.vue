<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template> -->
<template>
  <div class="echart-block">
    <div style="height:10%" ref="graphchart"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
// const echarts = require(echarts);
export default {
  data() {
    return {
      echart: null,
      nodes: [
        {
          name: 'java',
          value: [1, 270],
          symbol: 'roundRect',
          symbolSize: 100,
          category: 2,
          alarmShow: 1,
          optStatus: 1,
          adminStatus: 1,
          alarmDetail: {
            critical: 1,
            major: 1,
            minor: 1,
            warning: 1
          }
          // --symbol: "image://" + this.img1
        },
        {
          name: 'web',
          value: [1, 120],
          symbolSize: 100,
          symbol: 'roundRect'
        },
        {
          name: 'mysql',
          value: [1, 240],
          symbolSize: 100,
          symbol: 'triangle'
        },
        {
          name: 'redis',
          value: [1, 300],
          symbolSize: 100,
          symbol: 'diamond'
        }
      ],
      links: [
        {
          source: 'java',
          target: 'redis',
          symbol: ['none', 'arrow'],
          label: {
            show: true,
            formatter: '×',
            padding: [0, 2, -13, 0],
            fontSize: 20
          },
          lineStyle: {
            color: 'red',
            curveness: 0.9
          }
        }
      ],
      lines: [//箭头流动方向
        // {//mysql-redis
        //   coords: [
        //     [1, 240],
        //     [1, 300]
        //   ]
        // },
        // {//redis-web
        //   coords: [
        //     [1, 300],
        //     [1, 120]
        //   ]
        // },
        {//web-mysql
          coords: [
            [1, 120],
            [1, 240]
          ]
        },
        {//mysql-java
          coords: [
            [1, 270],
            [1, 240]
          ]
        },
        // {//java-web
        //   coords: [
        //     [1, 270],
        //     [1, 120]
        //   ]
        // },
        {//java-redis
          coords: [
            [1, 270],
            [1, 300]
          ]
        },
      ]
    }
  },
  components: {
  },
  mounted() {
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
          text: 'Graph+lines 拓扑图',
          x: 'center',
          y: 'bottom',
          borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
          padding: 0, // 标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
          itemGap: -10, // 主副标题纵向间隔，单位px，默认为10
          textStyle: { // 主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontFamily: 'Arial',
            fontSize: 30,
            fontStyle: 'normal',
            fontWeight: 'normal',

          },
        },
        polar: {},
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
              position: 'inside',
              fontSize: 14
            },
            // layout:'circular',
            symbol: 'circle',
            symbolSize: 50,
            symbolPosition: 'start',
            nodes: this.nodes,
            links: this.links
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
.echart-block {
  height: 80vh;
}
</style>
