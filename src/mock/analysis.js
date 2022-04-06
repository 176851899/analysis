import echarts, { dispose } from 'echarts'
/***
 *   sex - 展示性别分布
 * @param {obj} element - 挂载的对象.
 *  @param {boolean} dispose -是否销毁
 * */
const sex = (element, dispose) => {
  var myChart = echarts.init(element)
  const res = [{
    label: '男性',
    value: 46356,
    pepole: '人',
    num: '20.2%'
  },
  {
    label: '女性',
    value: 25000,
    pepole: '人',
    num: '20.9%'
  }
  ]
  const man = require('../assets/man.png')

  const woman = require('../assets/waman.png')

  const color = ['#0597fc', '#ff2b85']
  const data = []
  for (let i = 0; i < res.length; i++) {
    data.push({
      value: res[i].value,
      name: res[i].label,
      itemStyle: {
        normal: {
          borderWidth: 3,
          shadowBlur: 20,
          borderColor: color[i],
          shadowColor: color[i]
        }
      }
    }, {
      value: res[0].value / 10,
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
    })
  }
  const option = {
    color,
    graphic: {
      elements: [
        {
          type: 'image',
          z: 3,
          style: {
            image: require('../assets/底部.png'),
            width: 160,
            height: 160
          },
          left: 'center',
          top: 'center',
          position: [100, 100]
        },

        {
          type: 'image',
          z: 3,
          style: {
            width: 300,
            height: 300
          },
          left: 'center',
          top: 'center',
          position: [100, 100]
        },
        {
          type: 'image',
          z: 3,
          style: {
            image: man
          // width: 85,
          // height: 120
          },
          left: '45%',
          top: '35%'
        },
        {
          type: 'image',
          z: 3,
          style: {
            image: woman
          // width: 85,
          // height: 120
          },
          left: '50%',
          top: '35%'
        }
      ]
    },
    tooltip: {
      show: false
    },
    legend: {
      data: ['男性', '女性'],
      // icon: 'vertical',
      left: '5%',
      width: '30%',
      top: '8%',
      itemWidth: 60,
      itemHeight: 10,

      formatter: function (name) {
        if (res.length) {
          const item = res.filter((item) => item.label === name)[0]
          const i = `{white|${name}}\n{blue| ${item.value}}\n{blue| ${item.pepole}}\n{blue| ${item.num}}`
          return i
        }
      },
      textStyle: {
        lineHeight: 20,
        color: '#a5dbff',
        align: 'left',
        rich: {
          white: {
            fontSize: '16px',
            color: '#38aeff',
            align: 'left',
            margin: [0, 20, 0, 0]
          },
          blue: {
            color: '#a5dbff',
            align: 'left',
            fontSize: '20px'
          }
        }
      }
    },
    // legend: {
    //   data: ['男性', '女性'],
    //   right: '25%',
    //   top: 12,
    //   textStyle: {
    //     color: '#fff'
    //   },
    //   itemWidth: 12,
    //   itemHeight: 10
    //   // itemGap: 35
    // },
    toolbox: {
      show: false
    },
    series: [
      {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: [60, 60],
        hoverAnimation: false,
        itemStyle: {
          normal: {
            label: {
              show: false,
              fontSize: 15
            },
            labelLine: {
              width: 1,
              length: 30,
              length2: 50,
              show: true,
              color: 'red'
            }
          }
        },
        data
      },
      {
        name: '',
        type: 'pie',
        radius: ['30%', '30%'],
        center: ['50%', '50%'],
        label: {
          show: false,
          fontSize: 13,
          color: '#333'
        },
        labelLine: {
          show: false
          // length: 6,
          // length2: 15
        },
        data: [
          {
            name: '张三',
            value: '300'
          },
          {
            name: '李四',
            value: '120'
          }
        ]
      }
    ]

  }
  myChart.setOption(option)
}
/***
 *   age - 展示年龄
 * @param {obj} element - 挂载的对象.
 *  @param {boolean} dispose -是否销毁
 * */
const age = (element, dispose) => {
  var myChart = echarts.init(element)
  // 人数数据
  const pepole = [1236, 2200, 1000, 5000, 100, 600, 700]
  // 占比数据
  const scaleLIst = ['12%', '16%', '10%', '12%', '30%', '22%', '12%']
  const option = {
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return (
          params[0].name +
          '<br/>' +
          "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
          params[0].seriesName +
          ' : ' +
          Number(
            (params[0].value.toFixed(4) / 10000).toFixed(2)
          ).toLocaleString() +
          ' 万元<br/>'
        )
      }
    },
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      axisLabel: {
        show: true,
        textStyle: {
          color: '#58b5f5'
        }
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: ['60岁以上', '50~59', '40~49', '30~39', '20~29', '20岁以下']
    },
    {
      type: 'category',
      inverse: true,
      axisTick: 'none',
      axisLine: 'none',
      show: true,
      axisLabel: {
        textStyle: {
          color: '#dfe0e1',
          fontSize: '12',
          rich: {
            va: {
              color: 'red',
              fontSize: 16,
              lineHeight: 15,
              height: 20,
              align: 'left'

            },
            rate: {
              color: '#f88d2d',
              fontSize: 14,
              lineHeight: 10,

              align: 'left'
            }

          }
        },
        formatter: function (value) {
          if (scaleLIst.length) {
            const item = '12%'
            if (value >= 10000) {
              return (value / 10000).toLocaleString() + '万' + item
            } else {
              return `${value.toLocaleString()}   ${item}`
            }
          }
        }
      },
      data: pepole
    }
    ],
    series: [
      {
        name: '金额',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorder: 8,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
              offset: 0,
              color: 'rgb(57,89,255,1)'
            }

            ])
          }
        },
        barWidth: 8,
        data: pepole
      },
      {
        name: '背景',
        type: 'bar',
        barWidth: 8,
        barGap: '-100%',
        data: [5000, 5000, 5000, 5000, 5000, 5000, 5000],
        itemStyle: {
          normal: {
            color: 'rgba(24,31,68,1)',
            barBorderRadius: 30

          }
        }
      }
    ]
  }
  const option1 = {
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      top: '10%',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none'
      },
      formatter: function (params) {
        return (
          params[0].name +
          '<br/>' +
          "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
          params[0].seriesName +
          ' : ' +
          Number(
            (params[0].value.toFixed(4) / 10000).toFixed(2)
          ).toLocaleString() +
          ' 万元<br/>'
        )
      }
    },
    backgroundColor: '',
    xAxis: {
      show: false,
      type: 'value'
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        data: ['60岁以上', '50~59', '40~49', '30~39', '20~29', '20岁以下']
      },
      {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
          textStyle: {
            color: '#ffffff',
            fontSize: '12'
          },
          formatter: function (value) {
            if (value >= 10000) {
              return (value / 10000).toLocaleString() + '万'
            } else {
              return value.toLocaleString()
            }
          }
        },
        data: pepole
      }
    ],
    series: [
      {
        name: '金额',
        type: 'bar',
        zlevel: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 8,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: 'rgb(57,89,255,1)'
              },
              {
                offset: 1,
                color: 'rgb(46,200,207,1)'
              }
            ])
          }
        },
        barWidth: 20,
        data: pepole
      },
      {
        name: '背景',
        type: 'bar',
        barWidth: 20,
        barGap: '-100%',
        data: [5000, 5000, 5000, 4000, 9000],
        itemStyle: {
          normal: {
            color: 'rgba(24,31,68,1)',
            barBorderRadius: 30
          }
        }
      }
    ]
  }
  myChart.setOption(option)
  if (dispose) {
    myChart.dispose()
    myChart = null
    console.log('销毁99995')
  }
}
// 教育分布
const education = (element, dispose) => {
  var myChart = echarts.init(element)

  const option = {

    color: ['#37A2DA', '#3de6e3', '#35a9c3', '#378acc', '#2f54ac'],
    tooltip: {
      show: false,
      trigger: 'item',
      formatter: function (params) {
        // '<br/>{b} : {c}%'
      }
    },
    legend: {
      show: false,
      data: [
        '20M以下',
        '20M-40M',
        '50M-99M',
        '100M-499M',
        '500M-999M',
        '1000M以上'
      ]
    },
    series: [
      {
        top: 60,
        type: 'funnel',
        left: '-10',
        right: 170,
        bottom: 50,
        // gap:'auto',
        z: 1,
        width: '40%',
        height: '86%',
        minSize: 100,
        maxSize: 100,
        sort: 'ascending',
        label: {
          normal: {
            color: '#ffff',
            position: 'right',
            padding: [0, 0],
            width: 100,
            formatter: '{c}%'
            //   formatter:function(d){
            //         var ins='{bb|}'+d.percent+'{aa|}';
            //         // ins+='{boximg| }';
            //         return ins

            //     },
            // rich:{
            //     aa:{
            //         backgroundColor:{image:url},
            //         align: 'center',

            //     },
            //     bb:{
            //         align: 'center',
            //     }

            // }
          }
        },
        // 右侧的百分比显示的地方
        labelLine: {
          show: true,
          normal: {
            length: 150,
            position: 'center',
            lineStyle: {
              width: 1,
              color: '#ffff'

            }
          }
        },
        // 主体是透明的
        itemStyle: {
          normal: {
            color: 'transparent',
            borderWidth: 0,
            opacity: 1
          }
        },
        data: [
          { value: 60, name: '20M以下' },
          { value: 40, name: '20M-40M' },
          { value: 20, name: '50M-99M' },
          { value: 80, name: '100M-499M' },
          { value: 100, name: '500M-999M' },
          { value: 120, name: '1000M以上' }
        ]
      },
      {
        name: '预期',
        type: 'funnel',
        left: '100',
        right: 200,
        width: '50%',
        height: '90%',
        sort: 'ascending',
        z: 2,
        label: {
          normal: {
            position: 'left'
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        itemStyle: {

        },
        data: [
          { value: 60, name: '20M以下' },
          { value: 40, name: '20M-40M' },
          { value: 20, name: '50M-99M' },
          { value: 80, name: '100M-499M' },
          { value: 100, name: '500M-999M' },
          { value: 120, name: '1000M以上' }
        ]
      },
      {
        name: '实际',
        type: 'funnel',
        left: '98',
        right: 'center',

        bottom: 0,
        width: '50%',
        height: '80%',
        maxSize: '100%',
        sort: 'ascending',
        z: 3,
        label: {
          show: false,
          normal: {
            show: false,

            position: 'inside',

            textStyle: {
              color: '#777'
            }
          },
          emphasis: {
            show: false,
            position: 'inside',
            formatter: ''
          }
        },
        itemStyle: {
          normal: {
            opacity: 0.4,
            borderColor: '#fff',
            borderWidth: 2
          }
        },
        data: [
          { value: 0, name: '20M以下' },
          { value: 0, name: '20M-40M' },
          { value: 0, name: '50M-99M' },
          { value: 0, name: '100M-499M' },
          { value: 0, name: '500M-999M' },
          { value: 120, name: '1000M以上' }
        ]
      }
    ]
  }

  myChart.setOption(option)
  if (dispose) {
    myChart.dispose()
    myChart = null
    console.log('销毁99995')
  }
}
// 档案分析
const archives = (element, dispose) => {
  var myChart = echarts.init(element)
  const option = {

    tooltip: {
      trigger: 'axis',
      show: true,
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '14%',
      top: '16%',
      containLabel: true
    },
    legend: {
      data: ['接收量', '转出量'],
      right: '25%',
      top: 12,
      textStyle: {
        color: '#fff'
      },
      itemWidth: 12,
      itemHeight: 10
      // itemGap: 35
    },
    xAxis: {
      data: [
        '21010329',
        '21010329',
        '21010329',
        '21010329',
        '21010329',
        '21010329'
      ],
      axisLine: {
        show: true, // 隐藏X轴轴线
        lineStyle: {}
      },
      axisTick: {
        // show: true // 隐藏X轴刻度
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#838a92' // X轴文字颜色
        }
      }
    },
    yAxis: [
      {
        type: 'value',
        name: '单位： (万次)',
        nameTextStyle: {
          color: '#838a92'
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: true
        },
        // axisLine: {
        //   show: true,
        //   lineStyle: {
        //     color: '#FFFFFF'
        //   }
        // },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#838a92'
          }
        }
      },

      {
        type: 'value',
        gridIndex: 0,
        min: 50,
        max: 100,
        splitNumber: 8,
        splitLine: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
          }
        }
      }
    ],
    series: [
      {
        name: '接收量',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#27bffd'
              }
            ]),
            barBorderRadius: 12
          }
        },
        data: [1200, 600, 890, 850, 789, 900]
      },
      {
        name: '转出量',
        type: 'bar',
        barWidth: '10%',
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#faec27'
              }

            ]),
            barBorderRadius: 10
          }
        },
        data: [890, 850, 789, 600, 400, 400]
      }

    ]
  }
  myChart.setOption(option)
}
// 性质分许
const nature = (element, dispose) => {
  var myChart = echarts.init(element)
  const res = [{
    label: '个人存档',
    value: 370,
    pepole: '人',
    num: '20.2%'
  },
  {
    label: '企业存档',
    value: 263,
    pepole: '人',
    num: '20.9%'
  }
  ]
  const price = require('../assets/存档性质分析.png')

  const color = ['#00d999', '#ffe400']
  const data = []
  for (let i = 0; i < res.length; i++) {
    data.push({
      value: res[i].value,
      name: res[i].label,
      itemStyle: {
        normal: {
          borderWidth: 3,
          shadowBlur: 10,
          borderColor: color[i],
          shadowColor: color[i]
        }
      }
    }, {
      value: res[0].value / 10,
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
    })
  }
  const option = {
    color,
    graphic: {
      elements: [
        {
          type: 'image',
          z: 3,
          style: {
            image: require('../assets/底部.png'),
            width: 160,
            height: 160
          },
          left: 'center',
          top: 'center',
          position: [100, 100]
        },
        {
          type: 'image',
          z: 3,
          style: {
            image: price
          // width: 85,
          // height: 120
          },
          left: '46%',
          top: '38%'
        }
      ]
    },
    tooltip: {
      show: false
    },
    legend: {
      data: ['个人存档', '企业存档'],
      // icon: 'vertical',
      left: '5%',
      width: '30%',
      top: '8%',
      itemWidth: 50,
      itemHeight: 10,
      formatter: function (name) {
        if (res.length) {
          const item = res.filter((item) => item.label === name)[0]
          const i = `{white|${name}}\n{blue| ${item.value}}\n{blue| ${item.pepole}}`
          return i
        }
      },
      textStyle: {
        lineHeight: 20,
        color: '#a5dbff',
        align: 'left',
        rich: {
          white: {
            fontSize: '16px',
            color: '#38aeff',
            align: 'left',
            margin: [0, 20, 0, 0]
          },
          blue: {
            color: '#a5dbff',
            align: 'left'
          }
        }
      }
    },
    toolbox: {
      show: false
    },
    series: [{
      name: '',
      type: 'pie',
      clockWise: false,
      radius: [60, 60],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: false,
            fontSize: 14
          },
          labelLine: {
            width: 4,
            length: 30,
            length2: 50,
            show: true,
            color: 'red'
          }
        }
      },
      data
    }]
  }

  myChart.setOption(option)
  if (dispose) {
    myChart.dispose()
    myChart = null
    console.log('销毁99995')
  }
}
// 民族分许
const nation = (element, dispose) => {
  var myChart = echarts.init(element)
  const res = [{
    label: '汉族',
    value: 370,
    pepole: '人',
    num: '20.2%'
  },
  {
    label: '少数民族',
    value: 263,
    pepole: '人',
    num: '20.9%'
  }
  ]
  const price = require('../assets/存档民族分析.png')

  const color = ['#125bff', '#1afbff']
  const data = []
  for (let i = 0; i < res.length; i++) {
    data.push({
      value: res[i].value,
      name: res[i].label,
      itemStyle: {
        normal: {
          borderWidth: 3,
          shadowBlur: 10,
          borderColor: color[i],
          shadowColor: color[i]
        }
      }
    }, {
      value: res[0].value / 10,
      itemStyle: {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0
        }
      }
    })
  }
  const option = {
    color,
    graphic: {
      elements: [
        {
          type: 'image',
          z: 3,
          style: {
            image: require('../assets/底部.png'),
            width: 160,
            height: 160
          },
          left: 'center',
          top: 'center',
          position: [100, 100]
        },
        {
          type: 'image',
          z: 3,
          style: {
            image: price
          // width: 85,
          // height: 120
          },
          left: '46%',
          top: '38%'
        }
      ]
    },
    tooltip: {
      show: false
    },
    legend: {
      data: ['汉族', '少数民族'],
      // icon: 'vertical',
      left: '5%',
      width: '30%',
      top: '8%',
      itemWidth: 50,
      itemHeight: 10,
      formatter: function (name) {
        if (res.length) {
          const item = res.filter((item) => item.label === name)[0]
          const i = `{white|${name}}\n{blue| ${item.value}}\n{blue| ${item.pepole}}`
          return i
        }
      },
      textStyle: {
        lineHeight: 20,
        color: '#a5dbff',
        align: 'left',
        rich: {
          white: {
            fontSize: '16px',
            color: '#38aeff',
            align: 'left',
            margin: [0, 20, 0, 0]
          },
          blue: {
            color: '#a5dbff',
            align: 'left'
          }
        }
      }
    },
    toolbox: {
      show: false
    },
    series: [{
      name: '',
      type: 'pie',
      clockWise: false,
      radius: [60, 60],
      hoverAnimation: false,
      itemStyle: {
        normal: {
          label: {
            show: false,
            fontSize: 14
          },
          labelLine: {
            width: 4,
            length: 30,
            length2: 50,
            show: true,
            color: 'red'
          }
        }
      },
      data
    }]
  }

  myChart.setOption(option)
  if (dispose) {
    myChart.dispose()
    myChart = null
    console.log('销毁99995')
  }
}
// 地图
const map = (element, dispose) => {
  var myChart = echarts.init(element)
  echarts.registerMap('yuhang', {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          adcode: 330110,
          name: ' ',
          center: [120.301737, 30.421187],
          centroid: [119.991671, 30.38163],
          childrenNum: 0,
          level: 'district',
          subFeatureIndex: 7,
          acroutes: [100000, 330000, 330100],
          parent: {
            adcode: 330100
          }
        },
        geometry: {
          type: 'MultiPolygon',
          coordinates: [
            [
              [
                [119.8542, 30.176046],
                [119.857572, 30.176746],
                [119.86016, 30.180192],
                [119.863722, 30.181139],
                [119.867569, 30.179464],
                [119.871464, 30.182141],
                [119.873031, 30.182306],
                [119.874005, 30.185271],
                [119.880227, 30.188661],
                [119.882673, 30.186245],
                [119.887114, 30.186781],
                [119.889868, 30.188332],
                [119.890082, 30.190624],
                [119.895544, 30.193698],
                [119.901291, 30.190349],
                [119.903428, 30.188112],
                [119.906396, 30.188386],
                [119.907916, 30.190953],
                [119.912215, 30.19039],
                [119.91599, 30.191461],
                [119.918603, 30.190692],
                [119.921476, 30.193122],
                [119.923043, 30.190459],
                [119.926344, 30.190322],
                [119.927057, 30.189292],
                [119.930738, 30.188949],
                [119.931284, 30.186904],
                [119.933706, 30.184859],
                [119.932424, 30.182594],
                [119.93487, 30.180302],
                [119.936627, 30.180288],
                [119.937387, 30.177364],
                [119.935606, 30.17654],
                [119.936698, 30.174248],
                [119.934181, 30.173054],
                [119.934585, 30.170775],
                [119.933682, 30.167453],
                [119.933564, 30.163169],
                [119.93639, 30.159545],
                [119.940878, 30.15938],
                [119.943846, 30.161796],
                [119.945675, 30.165476],
                [119.950685, 30.166752],
                [119.953131, 30.169292],
                [119.95591, 30.170185],
                [119.962725, 30.169127],
                [119.964269, 30.173575],
                [119.967356, 30.172985],
                [119.969873, 30.175978],
                [119.972984, 30.175278],
                [119.977568, 30.175813],
                [119.98094, 30.173877],
                [119.983979, 30.175291],
                [119.986378, 30.174015],
                [119.98975, 30.175813],
                [119.986425, 30.179794],
                [119.990652, 30.179327],
                [119.993146, 30.182388],
                [119.998085, 30.183637],
                [119.999724, 30.187728],
                [120.005566, 30.19308],
                [120.010458, 30.195208],
                [120.007774, 30.199998],
                [120.007537, 30.203291],
                [120.00559, 30.20631],
                [120.005827, 30.207655],
                [120.010244, 30.20734],
                [120.009484, 30.209892],
                [120.01345, 30.209535],
                [120.015089, 30.211786],
                [120.017416, 30.211717],
                [120.018199, 30.213693],
                [120.01307, 30.214077],
                [120.010007, 30.215642],
                [120.007109, 30.220774],
                [120.009389, 30.221624],
                [120.011598, 30.218633],
                [120.012999, 30.218688],
                [120.013687, 30.216191],
                [120.015302, 30.218016],
                [120.018342, 30.216451],
                [120.020218, 30.218002],
                [120.018983, 30.219511],
                [120.016846, 30.224835],
                [120.019506, 30.226701],
                [120.026986, 30.227744],
                [120.02853, 30.229664],
                [120.03221, 30.229829],
                [120.038409, 30.232998],
                [120.040593, 30.232875],
                [120.041994, 30.238061],
                [120.044417, 30.237128],
                [120.043396, 30.240804],
                [120.046245, 30.241298],
                [120.046079, 30.242725],
                [120.052586, 30.243397],
                [120.052728, 30.24529],
                [120.055317, 30.245427],
                [120.056077, 30.247842],
                [120.055364, 30.251573],
                [120.058689, 30.252917],
                [120.059259, 30.255413],
                [120.056267, 30.257539],
                [120.055625, 30.263012],
                [120.057692, 30.265508],
                [120.05705, 30.26821],
                [120.058784, 30.269046],
                [120.059449, 30.271871],
                [120.056884, 30.273119],
                [120.050971, 30.272914],
                [120.049831, 30.274162],
                [120.050354, 30.277659],
                [120.052728, 30.282801],
                [120.05553, 30.28601],
                [120.056765, 30.288944],
                [120.050544, 30.289959],
                [120.055673, 30.297787],
                [120.051707, 30.299693],
                [120.048169, 30.303052],
                [120.042802, 30.304163],
                [120.040926, 30.30382],
                [120.030786, 30.299817],
                [120.028126, 30.304382],
                [120.025965, 30.306109],
                [120.026986, 30.311305],
                [120.021762, 30.311894],
                [120.02055, 30.315363],
                [120.02378, 30.316075],
                [120.023448, 30.320037],
                [120.022284, 30.323971],
                [120.023519, 30.326781],
                [120.021928, 30.326904],
                [120.021762, 30.330125],
                [120.017653, 30.329878],
                [120.017653, 30.332427],
                [120.025965, 30.333058],
                [120.027081, 30.337073],
                [120.025751, 30.341336],
                [120.025751, 30.345693],
                [120.024136, 30.348338],
                [120.030881, 30.350161],
                [120.033018, 30.351819],
                [120.038005, 30.350914],
                [120.042778, 30.351737],
                [120.044654, 30.350092],
                [120.04653, 30.353915],
                [120.048572, 30.353573],
                [120.050211, 30.349777],
                [120.053963, 30.351408],
                [120.060755, 30.351942],
                [120.060802, 30.353326],
                [120.065196, 30.352668],
                [120.065006, 30.354847],
                [120.067357, 30.355436],
                [120.069209, 30.350435],
                [120.072415, 30.350174],
                [120.072557, 30.348695],
                [120.07631, 30.34805],
                [120.074813, 30.344899],
                [120.076951, 30.344734],
                [120.080062, 30.342624],
                [120.079753, 30.338608],
                [120.082816, 30.338787],
                [120.081795, 30.336183],
                [120.084645, 30.332016],
                [120.087471, 30.331838],
                [120.086925, 30.33303],
                [120.089964, 30.334894],
                [120.091698, 30.333387],
                [120.0964, 30.335689],
                [120.099036, 30.338307],
                [120.097658, 30.340582],
                [120.101696, 30.341651],
                [120.104783, 30.340609],
                [120.106136, 30.343391],
                [120.108107, 30.342802],
                [120.108416, 30.339979],
                [120.111741, 30.339691],
                [120.114139, 30.337252],
                [120.121097, 30.33769],
                [120.123258, 30.339225],
                [120.123757, 30.336443],
                [120.124968, 30.339499],
                [120.129433, 30.342514],
                [120.129433, 30.341144],
                [120.13385, 30.340198],
                [120.137198, 30.340472],
                [120.134301, 30.354052],
                [120.130929, 30.360068],
                [120.128744, 30.373878],
                [120.129338, 30.382645],
                [120.131071, 30.382536],
                [120.134301, 30.380412],
                [120.139098, 30.380262],
                [120.139525, 30.376864],
                [120.14266, 30.37681],
                [120.146151, 30.375672],
                [120.146198, 30.377837],
                [120.14919, 30.38033],
                [120.153038, 30.380385],
                [120.15299, 30.375864],
                [120.159259, 30.375549],
                [120.159022, 30.372535],
                [120.16788, 30.371042],
                [120.170801, 30.372467],
                [120.171038, 30.374015],
                [120.168616, 30.374604],
                [120.171822, 30.375823],
                [120.173437, 30.374946],
                [120.174363, 30.371946],
                [120.177687, 30.37681],
                [120.184859, 30.382892],
                [120.18569, 30.385727],
                [120.191746, 30.39259],
                [120.189442, 30.398219],
                [120.194382, 30.398918],
                [120.194548, 30.402109],
                [120.196068, 30.402177],
                [120.19678, 30.395631],
                [120.200366, 30.395042],
                [120.201672, 30.392152],
                [120.204403, 30.389618],
                [120.210221, 30.389398],
                [120.216301, 30.388522],
                [120.213641, 30.383796],
                [120.209818, 30.382837],
                [120.204451, 30.379659],
                [120.2092, 30.378481],
                [120.212762, 30.380632],
                [120.213427, 30.382755],
                [120.215873, 30.384892],
                [120.218604, 30.3857],
                [120.222641, 30.388727],
                [120.226132, 30.389933],
                [120.228103, 30.392782],
                [120.231, 30.390878],
                [120.233328, 30.391878],
                [120.237412, 30.388371],
                [120.238718, 30.388823],
                [120.241069, 30.38633],
                [120.232592, 30.375837],
                [120.234871, 30.373809],
                [120.236747, 30.374905],
                [120.241996, 30.370398],
                [120.240666, 30.367644],
                [120.246365, 30.367178],
                [120.245653, 30.363726],
                [120.247481, 30.359657],
                [120.242969, 30.358136],
                [120.24475, 30.351394],
                [120.240571, 30.346982],
                [120.231737, 30.342651],
                [120.234111, 30.340404],
                [120.240879, 30.342912],
                [120.244489, 30.338732],
                [120.250687, 30.339938],
                [120.253038, 30.33743],
                [120.256244, 30.338814],
                [120.259355, 30.338005],
                [120.262086, 30.338828],
                [120.262585, 30.337635],
                [120.258215, 30.334826],
                [120.261065, 30.331811],
                [120.264484, 30.326383],
                [120.267975, 30.328617],
                [120.266455, 30.331317],
                [120.27783, 30.337923],
                [120.282247, 30.329097],
                [120.277949, 30.324122],
                [120.272938, 30.321325],
                [120.272915, 30.320174],
                [120.291841, 30.317789],
                [120.291628, 30.315308],
                [120.295807, 30.314801],
                [120.29576, 30.317008],
                [120.298918, 30.310976],
                [120.300248, 30.320969],
                [120.300201, 30.324958],
                [120.295214, 30.324779],
                [120.29576, 30.318049],
                [120.293931, 30.317844],
                [120.29367, 30.326877],
                [120.297327, 30.337444],
                [120.299536, 30.341706],
                [120.301554, 30.343871],
                [120.300842, 30.347626],
                [120.307206, 30.350613],
                [120.309106, 30.349873],
                [120.312573, 30.351586],
                [120.319104, 30.352901],
                [120.325325, 30.353271],
                [120.326774, 30.356779],
                [120.328531, 30.358766],
                [120.33169, 30.359465],
                [120.33207, 30.362369],
                [120.334824, 30.360232],
                [120.339336, 30.363109],
                [120.340951, 30.365808],
                [120.344751, 30.367713],
                [120.345439, 30.36948],
                [120.341782, 30.373302],
                [120.34164, 30.37622],
                [120.337935, 30.375809],
                [120.336748, 30.373905],
                [120.329624, 30.37681],
                [120.323972, 30.37859],
                [120.323307, 30.376933],
                [120.319507, 30.378851],
                [120.318415, 30.382481],
                [120.319293, 30.383933],
                [120.317845, 30.386549],
                [120.31889, 30.388645],
                [120.314853, 30.395631],
                [120.312858, 30.394206],
                [120.306066, 30.393234],
                [120.306256, 30.397438],
                [120.310792, 30.400424],
                [120.311504, 30.40315],
                [120.313119, 30.399493],
                [120.316491, 30.401506],
                [120.317014, 30.402862],
                [120.322024, 30.404779],
                [120.321241, 30.408244],
                [120.324494, 30.411983],
                [120.32618, 30.411339],
                [120.328721, 30.415475],
                [120.332877, 30.415941],
                [120.333399, 30.419022],
                [120.334848, 30.419898],
                [120.332521, 30.421747],
                [120.332663, 30.424718],
                [120.330764, 30.427114],
                [120.334183, 30.429524],
                [120.336748, 30.42962],
                [120.335655, 30.433097],
                [120.34031, 30.433933],
                [120.339408, 30.440052],
                [120.340951, 30.442558],
                [120.339859, 30.450155],
                [120.337864, 30.450785],
                [120.336795, 30.458054],
                [120.337698, 30.460025],
                [120.337318, 30.464309],
                [120.340191, 30.463994],
                [120.342732, 30.465103],
                [120.341687, 30.46602],
                [120.340785, 30.470016],
                [120.341426, 30.471248],
                [120.3367, 30.473506],
                [120.332901, 30.470564],
                [120.330621, 30.471056],
                [120.330312, 30.469154],
                [120.32675, 30.470454],
                [120.328579, 30.472972],
                [120.327985, 30.475066],
                [120.32618, 30.475148],
                [120.325515, 30.479514],
                [120.327273, 30.481279],
                [120.327866, 30.484071],
                [120.32694, 30.485727],
                [120.327843, 30.491761],
                [120.326536, 30.496331],
                [120.325634, 30.496386],
                [120.325183, 30.500094],
                [120.323164, 30.50543],
                [120.321336, 30.505854],
                [120.320766, 30.508193],
                [120.322333, 30.508617],
                [120.322571, 30.512626],
                [120.321455, 30.516018],
                [120.320053, 30.51636],
                [120.319009, 30.520998],
                [120.312407, 30.521134],
                [120.312217, 30.520095],
                [120.307776, 30.520861],
                [120.299678, 30.519657],
                [120.299084, 30.517345],
                [120.296425, 30.51662],
                [120.293433, 30.513241],
                [120.291248, 30.512174],
                [120.289229, 30.513611],
                [120.286973, 30.511873],
                [120.285928, 30.507222],
                [120.279422, 30.507605],
                [120.278733, 30.504349],
                [120.275598, 30.504527],
                [120.271632, 30.506497],
                [120.266408, 30.506237],
                [120.261825, 30.504568],
                [120.255294, 30.50439],
                [120.254297, 30.506237],
                [120.249215, 30.505265],
                [120.238552, 30.504951],
                [120.238315, 30.508056],
                [120.234658, 30.509808],
                [120.234254, 30.511723],
                [120.231998, 30.51097],
                [120.229362, 30.513816],
                [120.228198, 30.512202],
                [120.229813, 30.509739],
                [120.227795, 30.508111],
                [120.214496, 30.508043],
                [120.210625, 30.507249],
                [120.203881, 30.504677],
                [120.201981, 30.509329],
                [120.200722, 30.514431],
                [120.199868, 30.514568],
                [120.194857, 30.503104],
                [120.193859, 30.502091],
                [120.190131, 30.504499],
                [120.185049, 30.502105],
                [120.182104, 30.499711],
                [120.183031, 30.497617],
                [120.181321, 30.496742],
                [120.185999, 30.494703],
                [120.183434, 30.494251],
                [120.179184, 30.491939],
                [120.176833, 30.493937],
                [120.17365, 30.492076],
                [120.178044, 30.488354],
                [120.179231, 30.484947],
                [120.181368, 30.485576],
                [120.183553, 30.483496],
                [120.181653, 30.481006],
                [120.175883, 30.485562],
                [120.17308, 30.484057],
                [120.179231, 30.478104],
                [120.173104, 30.476038],
                [120.170919, 30.47419],
                [120.165719, 30.472575],
                [120.164056, 30.473793],
                [120.161492, 30.472863],
                [120.160423, 30.469866],
                [120.14957, 30.467867],
                [120.147386, 30.470769],
                [120.146602, 30.477311],
                [120.147956, 30.477201],
                [120.148169, 30.480472],
                [120.146507, 30.480308],
                [120.146388, 30.482853],
                [120.141259, 30.483441],
                [120.142636, 30.481827],
                [120.137982, 30.480513],
                [120.1381, 30.482182],
                [120.126345, 30.478447],
                [120.125491, 30.479514],
                [120.122617, 30.479021],
                [120.12105, 30.480239],
                [120.121287, 30.483113],
                [120.119459, 30.480691],
                [120.115517, 30.480732],
                [120.117678, 30.478282],
                [120.114852, 30.47445],
                [120.10939, 30.476681],
                [120.105851, 30.479254],
                [120.107181, 30.483537],
                [120.105566, 30.484509],
                [120.104355, 30.482853],
                [120.097872, 30.483948],
                [120.09678, 30.484782],
                [120.095972, 30.489421],
                [120.100508, 30.495524],
                [120.095474, 30.497262],
                [120.076951, 30.497905],
                [120.075288, 30.494881],
                [120.068782, 30.497563],
                [120.066549, 30.490749],
                [120.066074, 30.483961],
                [120.064934, 30.48091],
                [120.060612, 30.476147],
                [120.059639, 30.473424],
                [120.060209, 30.465842],
                [120.059473, 30.457753],
                [120.062845, 30.451346],
                [120.068212, 30.445761],
                [120.068307, 30.44264],
                [120.066312, 30.438191],
                [120.064578, 30.436164],
                [120.062251, 30.435466],
                [120.064768, 30.431249],
                [120.064555, 30.429962],
                [120.057573, 30.429209],
                [120.049712, 30.427319],
                [120.042018, 30.427237],
                [120.036224, 30.425403],
                [120.035773, 30.42899],
                [120.038836, 30.429209],
                [120.04, 30.433549],
                [120.038646, 30.43522],
                [120.035915, 30.435124],
                [120.030168, 30.43689],
                [120.029693, 30.438505],
                [120.025727, 30.43856],
                [120.02359, 30.435781],
                [120.014115, 30.436],
                [120.00927, 30.437725],
                [120.008796, 30.439464],
                [120.002764, 30.445049],
                [119.99336, 30.444584],
                [119.990439, 30.445693],
                [119.983291, 30.44572],
                [119.982958, 30.443187],
                [119.978779, 30.440627],
                [119.977449, 30.440819],
                [119.973412, 30.437876],
                [119.972129, 30.434918],
                [119.972414, 30.432481],
                [119.969802, 30.431496],
                [119.967237, 30.431947],
                [119.964103, 30.429538],
                [119.961752, 30.432755],
                [119.960161, 30.432331],
                [119.957501, 30.434795],
                [119.954699, 30.43422],
                [119.953298, 30.435233],
                [119.953606, 30.439518],
                [119.951968, 30.442051],
                [119.953131, 30.446459],
                [119.949546, 30.447965],
                [119.949451, 30.450854],
                [119.945746, 30.4488],
                [119.942896, 30.445022],
                [119.939239, 30.444105],
                [119.934442, 30.446829],
                [119.933564, 30.450621],
                [119.93183, 30.452565],
                [119.924563, 30.454235],
                [119.923091, 30.45611],
                [119.922568, 30.459286],
                [119.919196, 30.460969],
                [119.916917, 30.459984],
                [119.911597, 30.455562],
                [119.909009, 30.456069],
                [119.904734, 30.459067],
                [119.901932, 30.458998],
                [119.897776, 30.456972],
                [119.892148, 30.457889],
                [119.889322, 30.457424],
                [119.886757, 30.459436],
                [119.880725, 30.458711],
                [119.874741, 30.459997],
                [119.873364, 30.464145],
                [119.87467, 30.466047],
                [119.873269, 30.468894],
                [119.876783, 30.472767],
                [119.880583, 30.473205],
                [119.878707, 30.475764],
                [119.874931, 30.477516],
                [119.869493, 30.475997],
                [119.868472, 30.477146],
                [119.864886, 30.477926],
                [119.866572, 30.481881],
                [119.86624, 30.483701],
                [119.860208, 30.487478],
                [119.857833, 30.490242],
                [119.854295, 30.496058],
                [119.850661, 30.498821],
                [119.850756, 30.495483],
                [119.848358, 30.496742],
                [119.842468, 30.495811],
                [119.837078, 30.497097],
                [119.835985, 30.496249],
                [119.834442, 30.498862],
                [119.830832, 30.501298],
                [119.830975, 30.503076],
                [119.825418, 30.507359],
                [119.822235, 30.508289],
                [119.821333, 30.510218],
                [119.817486, 30.510806],
                [119.813853, 30.50911],
                [119.811478, 30.506469],
                [119.808082, 30.507372],
                [119.804829, 30.505047],
                [119.802003, 30.504062],
                [119.801409, 30.505361],
                [119.797728, 30.504869],
                [119.792884, 30.506428],
                [119.79172, 30.505074],
                [119.788989, 30.505348],
                [119.786472, 30.50963],
                [119.780915, 30.511764],
                [119.777448, 30.511695],
                [119.769896, 30.514035],
                [119.768566, 30.515115],
                [119.762344, 30.515964],
                [119.761371, 30.516962],
                [119.762986, 30.520218],
                [119.769065, 30.522242],
                [119.7722, 30.525525],
                [119.771748, 30.530094],
                [119.767569, 30.534306],
                [119.768186, 30.537862],
                [119.767498, 30.541241],
                [119.769706, 30.54202],
                [119.772223, 30.546068],
                [119.771725, 30.552659],
                [119.767023, 30.556078],
                [119.763912, 30.553918],
                [119.758877, 30.554574],
                [119.756954, 30.551948],
                [119.753962, 30.551183],
                [119.74907, 30.551648],
                [119.744106, 30.55106],
                [119.740924, 30.547463],
                [119.735011, 30.55229],
                [119.731615, 30.551524],
                [119.729692, 30.553124],
                [119.724847, 30.552071],
                [119.723969, 30.554902],
                [119.721618, 30.556611],
                [119.724728, 30.558758],
                [119.721285, 30.562682],
                [119.71352, 30.56126],
                [119.713306, 30.55936],
                [119.708699, 30.557883],
                [119.702002, 30.558444],
                [119.700364, 30.559114],
                [119.694474, 30.559168],
                [119.692646, 30.557377],
                [119.692717, 30.553042],
                [119.695495, 30.549665],
                [119.69711, 30.54466],
                [119.696611, 30.540981],
                [119.697823, 30.540502],
                [119.699176, 30.535154],
                [119.702168, 30.531653],
                [119.704282, 30.526674],
                [119.706942, 30.52584],
                [119.707037, 30.519438],
                [119.709103, 30.518918],
                [119.70763, 30.51331],
                [119.710314, 30.509315],
                [119.709055, 30.505744],
                [119.710195, 30.503035],
                [119.708129, 30.499793],
                [119.708461, 30.496591],
                [119.704804, 30.493184],
                [119.710171, 30.489339],
                [119.710147, 30.487519],
                [119.708081, 30.483031],
                [119.708438, 30.480075],
                [119.704899, 30.477146],
                [119.703664, 30.474505],
                [119.703664, 30.470618],
                [119.702453, 30.469304],
                [119.702002, 30.464952],
                [119.698701, 30.462913],
                [119.699034, 30.461407],
                [119.695994, 30.462447],
                [119.696944, 30.45867],
                [119.69654, 30.455384],
                [119.692859, 30.451908],
                [119.693572, 30.449909],
                [119.696065, 30.450498],
                [119.698582, 30.449649],
                [119.69844, 30.446596],
                [119.703688, 30.446391],
                [119.703213, 30.443393],
                [119.705398, 30.440888],
                [119.704329, 30.439204],
                [119.70611, 30.433166],
                [119.706443, 30.429497],
                [119.703308, 30.427593],
                [119.701028, 30.428031],
                [119.697205, 30.425978],
                [119.694355, 30.426649],
                [119.692408, 30.421117],
                [119.686448, 30.417598],
                [119.682054, 30.408587],
                [119.690081, 30.405177],
                [119.690698, 30.403766],
                [119.692812, 30.404259],
                [119.6954, 30.402862],
                [119.696255, 30.401027],
                [119.701551, 30.398151],
                [119.709198, 30.396315],
                [119.714375, 30.394151],
                [119.71796, 30.389905],
                [119.719955, 30.388782],
                [119.722805, 30.3897],
                [119.727626, 30.396233],
                [119.731948, 30.397808],
                [119.733396, 30.399561],
                [119.737671, 30.397973],
                [119.736911, 30.395713],
                [119.744083, 30.395809],
                [119.746054, 30.394905],
                [119.751824, 30.390042],
                [119.753677, 30.390604],
                [119.756764, 30.387714],
                [119.750684, 30.384015],
                [119.75256, 30.381796],
                [119.752774, 30.379604],
                [119.75731, 30.379001],
                [119.758474, 30.375166],
                [119.7613, 30.377673],
                [119.763959, 30.377714],
                [119.763413, 30.375275],
                [119.76688, 30.376138],
                [119.767664, 30.379412],
                [119.769777, 30.38007],
                [119.774194, 30.375714],
                [119.775738, 30.376234],
                [119.778493, 30.373193],
                [119.775667, 30.371521],
                [119.777139, 30.370042],
                [119.778754, 30.370631],
                [119.777875, 30.36648],
                [119.781841, 30.365356],
                [119.784002, 30.361479],
                [119.788538, 30.360807],
                [119.792599, 30.357683],
                [119.793501, 30.354258],
                [119.791767, 30.352052],
                [119.792575, 30.347968],
                [119.79134, 30.345118],
                [119.78925, 30.343624],
                [119.792195, 30.341349],
                [119.795852, 30.341432],
                [119.798417, 30.343652],
                [119.801266, 30.343775],
                [119.806942, 30.342747],
                [119.807156, 30.340116],
                [119.805897, 30.339417],
                [119.805256, 30.33547],
                [119.803451, 30.334428],
                [119.799295, 30.335648],
                [119.801504, 30.340568],
                [119.800483, 30.339787],
                [119.798156, 30.334332],
                [119.798251, 30.33277],
                [119.795733, 30.333236],
                [119.796161, 30.33647],
                [119.794498, 30.336772],
                [119.794902, 30.334086],
                [119.79001, 30.331866],
                [119.790628, 30.330796],
                [119.794665, 30.330591],
                [119.794736, 30.331879],
                [119.800649, 30.331907],
                [119.801741, 30.332606],
                [119.809008, 30.333017],
                [119.806681, 30.329851],
                [119.80737, 30.327644],
                [119.803214, 30.322778],
                [119.804615, 30.320969],
                [119.804544, 30.3121],
                [119.802549, 30.306219],
                [119.801385, 30.3053],
                [119.80034, 30.299542],
                [119.803997, 30.29606],
                [119.809911, 30.295868],
                [119.81162, 30.296677],
                [119.815919, 30.300872],
                [119.822995, 30.30419],
                [119.826558, 30.307042],
                [119.834157, 30.307467],
                [119.835985, 30.306562],
                [119.83456, 30.299748],
                [119.835819, 30.297719],
                [119.837743, 30.297623],
                [119.838716, 30.293757],
                [119.837814, 30.290178],
                [119.835107, 30.288793],
                [119.831141, 30.288862],
                [119.829858, 30.287202],
                [119.827341, 30.287696],
                [119.826273, 30.285927],
                [119.82936, 30.28265],
                [119.828196, 30.280758],
                [119.829858, 30.279812],
                [119.829526, 30.276136],
                [119.826937, 30.275341],
                [119.828054, 30.271474],
                [119.831948, 30.27002],
                [119.835819, 30.270349],
                [119.836508, 30.269183],
                [119.842326, 30.271885],
                [119.845722, 30.271967],
                [119.847978, 30.269142],
                [119.849379, 30.268978],
                [119.850139, 30.274313],
                [119.854176, 30.274614],
                [119.857192, 30.273023],
                [119.86472, 30.273257],
                [119.864981, 30.271062],
                [119.867284, 30.269375],
                [119.865883, 30.268388],
                [119.865717, 30.265234],
                [119.863485, 30.263231],
                [119.862844, 30.260502],
                [119.865005, 30.258925],
                [119.865028, 30.255441],
                [119.867902, 30.254247],
                [119.867094, 30.248445],
                [119.865052, 30.24588],
                [119.864506, 30.237965],
                [119.863224, 30.234905],
                [119.859733, 30.234302],
                [119.859258, 30.230748],
                [119.854485, 30.226756],
                [119.85325, 30.224039],
                [119.850376, 30.222708],
                [119.84774, 30.220307],
                [119.843964, 30.219635],
                [119.845698, 30.214805],
                [119.844321, 30.21346],
                [119.843489, 30.207065],
                [119.840426, 30.203387],
                [119.836318, 30.199874],
                [119.836151, 30.198584],
                [119.840046, 30.196072],
                [119.840141, 30.194178],
                [119.843157, 30.190967],
                [119.848975, 30.189924],
                [119.847432, 30.186218],
                [119.848714, 30.18619],
                [119.852513, 30.182457],
                [119.85192, 30.180274],
                [119.8542, 30.176046]
              ]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '百丈镇'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.70840454101561, 30.48226081008541],
              [119.71303939819335, 30.48063350691296],
              [119.71406936645508, 30.48610705489163],
              [119.71750259399414, 30.489509375517002],
              [119.7190475463867, 30.48876975071714],
              [119.72402572631836, 30.488917676126846],
              [119.73054885864258, 30.484183951487754],
              [119.73587036132812, 30.484183951487754],
              [119.74050521850586, 30.48152113019768],
              [119.74737167358397, 30.48270461532005],
              [119.75303649902344, 30.48314841853117],
              [119.75818634033203, 30.48255668046669],
              [119.7593879699707, 30.479449996609706],
              [119.76385116577147, 30.47811853031966],
              [119.76591110229492, 30.474567864520264],
              [119.76676940917969, 30.472940432754168],
              [119.7700309753418, 30.473828126180347],
              [119.77483749389647, 30.47190478019552],
              [119.78256225585938, 30.4710170692356],
              [119.78548049926756, 30.47589937936957],
              [119.78462219238281, 30.482852549948607],
              [119.78376388549805, 30.486846699928776],
              [119.7810173034668, 30.488917676126846],
              [119.78239059448242, 30.493503252292125],
              [119.78513717651367, 30.49838443460377],
              [119.78822708129884, 30.501934231542496],
              [119.7897720336914, 30.50548389892728],
              [119.78633880615234, 30.50962501378926],
              [119.78067398071289, 30.511695505084802],
              [119.7758674621582, 30.51199128595624],
              [119.76814270019531, 30.515244816150467],
              [119.76179122924803, 30.51628000746823],
              [119.76282119750977, 30.519977029322956],
              [119.76762771606444, 30.52204730013766],
              [119.77209091186523, 30.52618770946091],
              [119.77123260498047, 30.52958862799964],
              [119.76831436157225, 30.53417228636566],
              [119.76814270019531, 30.540086364669186],
              [119.76762771606444, 30.541269137114718],
              [119.77140426635742, 30.545260887761046],
              [119.77071762084961, 30.55235692815154],
              [119.76676940917969, 30.55546128271332],
              [119.76264953613281, 30.554130857201855],
              [119.75835800170898, 30.554426508891552],
              [119.75578308105467, 30.552061270157832],
              [119.74822998046875, 30.551469951468775],
              [119.7403335571289, 30.547921963690516],
              [119.73484039306639, 30.55250475681068],
              [119.73089218139647, 30.55132212123368],
              [119.72900390625001, 30.552800413453546],
              [119.72471237182617, 30.552209099267262],
              [119.72179412841798, 30.55620040011713],
              [119.72454071044922, 30.559008994915498],
              [119.72093582153319, 30.562704390543985],
              [119.71424102783203, 30.561226249180805],
              [119.71303939819335, 30.560191536828523],
              [119.70788955688475, 30.557974258920293],
              [119.70033645629883, 30.559452449821652],
              [119.69449996948242, 30.559304631744777],
              [119.69244003295898, 30.55723515502595],
              [119.69261169433592, 30.553243896729256],
              [119.6957015991211, 30.549252474303426],
              [119.69690322875977, 30.54496520815552],
              [119.69655990600585, 30.54171267306782],
              [119.69793319702147, 30.540677752692655],
              [119.6989631652832, 30.536242254734933],
              [119.7025680541992, 30.530623666534726],
              [119.70754623413086, 30.525300493742847],
              [119.70634460449219, 30.518941877378115],
              [119.70874786376953, 30.51879399762886],
              [119.70840454101561, 30.51287862317139],
              [119.71046447753905, 30.50932922571916],
              [119.70909118652342, 30.506223396658257],
              [119.70994949340822, 30.50296956457952],
              [119.70806121826172, 30.49912398631594],
              [119.70823287963867, 30.496165745731922],
              [119.7051429748535, 30.493503252292125],
              [119.70994949340822, 30.488917676126846],
              [119.70840454101561, 30.48226081008541]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '鸬鸟镇'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.70806121826172, 30.481964938804825],
              [119.70754623413086, 30.478858236062322],
              [119.70479965209961, 30.47663910197322],
              [119.70342636108398, 30.473828126180347],
              [119.70394134521483, 30.470425257433245],
              [119.70239639282227, 30.468205931143324],
              [119.70222473144531, 30.46450694160794],
              [119.69844818115234, 30.462879341709886],
              [119.69861984252928, 30.460807811599466],
              [119.69604492187499, 30.46243544610882],
              [119.69707489013672, 30.458736237439833],
              [119.69621658325195, 30.454592956980054],
              [119.69244003295898, 30.451485381019264],
              [119.69381332397461, 30.449709578836355],
              [119.69621658325195, 30.450745467375242],
              [119.69844818115234, 30.449709578836355],
              [119.69879150390626, 30.446897825875304],
              [119.70325469970702, 30.446897825875304],
              [119.70308303833008, 30.4429020374054],
              [119.70565795898438, 30.43949808841618],
              [119.70445632934569, 30.438462080352835],
              [119.70634460449219, 30.43002560496439],
              [119.70239639282227, 30.427657340346716],
              [119.69690322875977, 30.42632516623206],
              [119.69432830810547, 30.426473186476493],
              [119.69261169433592, 30.42158839982978],
              [119.6869468688965, 30.417443540588682],
              [119.68214035034178, 30.408413059145214],
              [119.69003677368163, 30.40485985382934],
              [119.6905517578125, 30.403823477920625],
              [119.69278335571288, 30.40441569407257],
              [119.69467163085936, 30.40308320267962],
              [119.69758987426758, 30.40071428419479],
              [119.71097946166992, 30.395976274828534],
              [119.71664428710938, 30.391978400644604],
              [119.7190475463867, 30.389164983693423],
              [119.72282409667969, 30.39064573955672],
              [119.7286605834961, 30.397308863195068],
              [119.73381042480469, 30.3995298034023],
              [119.73775863647461, 30.397753055276908],
              [119.7370719909668, 30.395680141611383],
              [119.7451400756836, 30.395828208332194],
              [119.75183486938475, 30.390201515154263],
              [119.75372314453125, 30.39064573955672],
              [119.75337982177736, 30.39257068862602],
              [119.75698471069336, 30.39434753102366],
              [119.76110458374022, 30.39967786428702],
              [119.7629928588867, 30.39967786428702],
              [119.76522445678712, 30.401158460788093],
              [119.76333618164062, 30.403675423321417],
              [119.76522445678712, 30.406784522760823],
              [119.76247787475585, 30.408561106560363],
              [119.75835800170898, 30.409301340268463],
              [119.75990295410155, 30.4130024246139],
              [119.7648811340332, 30.417887641071157],
              [119.76419448852539, 30.42010811316847],
              [119.76694107055663, 30.42173642726079],
              [119.76642608642577, 30.423660763427787],
              [119.76848602294923, 30.425585061640994],
              [119.76642608642577, 30.426917245862285],
              [119.76917266845705, 30.429285528447902],
              [119.77157592773436, 30.430765675865693],
              [119.77037429809569, 30.433133865015062],
              [119.77157592773436, 30.434465946142005],
              [119.76934432983398, 30.434909969141078],
              [119.77277755737305, 30.43772206785397],
              [119.77191925048828, 30.44171806862763],
              [119.77277755737305, 30.443050032491644],
              [119.76882934570312, 30.44408599180477],
              [119.76711273193358, 30.4473417922616],
              [119.7710609436035, 30.4500055481138],
              [119.77930068969727, 30.45370508824597],
              [119.77535247802734, 30.457996378850833],
              [119.77397918701172, 30.462583411533927],
              [119.7758674621582, 30.465690633543204],
              [119.7758674621582, 30.46776205981638],
              [119.77792739868164, 30.470573210721025],
              [119.77569580078126, 30.47220068205052],
              [119.76951599121094, 30.473976074297944],
              [119.76642608642577, 30.473384280478854],
              [119.76385116577147, 30.47826647191783],
              [119.75870132446289, 30.480041753559938],
              [119.75835800170898, 30.482852549948607],
              [119.7535514831543, 30.483296352485194],
              [119.74822998046875, 30.483000484352313],
              [119.74170684814453, 30.48181700282728],
              [119.74050521850586, 30.48166906662488],
              [119.73638534545898, 30.48403601888274],
              [119.73020553588866, 30.484183951487754],
              [119.72368240356444, 30.489065601311676],
              [119.71921920776367, 30.48862182508258],
              [119.71733093261719, 30.489509375517002],
              [119.71372604370116, 30.48566326517115],
              [119.71355438232422, 30.480041753559938],
              [119.70806121826172, 30.481964938804825]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '黄湖镇'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.77775573730469, 30.4711650216242],
              [119.7758674621582, 30.468057974259104],
              [119.77603912353516, 30.465690633543204],
              [119.77380752563477, 30.462731376734283],
              [119.77552413940428, 30.457996378850833],
              [119.77930068969727, 30.45370508824597],
              [119.78067398071289, 30.451633363073963],
              [119.78307723999023, 30.45030151649247],
              [119.78324890136719, 30.44748978060767],
              [119.77895736694335, 30.44452997099753],
              [119.78324890136719, 30.442458050798688],
              [119.7901153564453, 30.44186606551117],
              [119.79457855224608, 30.439202087235582],
              [119.79440689086914, 30.433133865015062],
              [119.79818344116211, 30.432689833929565],
              [119.79972839355469, 30.42810139434223],
              [119.80401992797853, 30.425881104151195],
              [119.8091697692871, 30.425437040049022],
              [119.81122970581056, 30.42425285922818],
              [119.81569290161131, 30.424104835614955],
              [119.81466293334961, 30.427065265208352],
              [119.81981277465822, 30.426029125069398],
              [119.82410430908203, 30.423216689219416],
              [119.82599258422852, 30.42884147984279],
              [119.82856750488281, 30.430913689372137],
              [119.82908248901367, 30.434613954032987],
              [119.83182907104492, 30.435205983350652],
              [119.83612060546874, 30.434021921121317],
              [119.84161376953125, 30.43357789407897],
              [119.84659194946288, 30.43550199666173],
              [119.8443603515625, 30.438166076027205],
              [119.8495101928711, 30.435353990118514],
              [119.8501968383789, 30.43727805765897],
              [119.85105514526367, 30.44068208415258],
              [119.85036849975586, 30.445269931825383],
              [119.84624862670898, 30.449265623235018],
              [119.84813690185547, 30.450449500344746],
              [119.84676361083986, 30.454297001634203],
              [119.84830856323242, 30.456072720226384],
              [119.85088348388672, 30.45858826617149],
              [119.8479652404785, 30.45991999949615],
              [119.84710693359375, 30.460955779496754],
              [119.85191345214842, 30.460955779496754],
              [119.85723495483397, 30.46302730646074],
              [119.85689163208008, 30.46495082776935],
              [119.85946655273438, 30.468501844237416],
              [119.86204147338867, 30.470129350183385],
              [119.86839294433592, 30.469241623039075],
              [119.87268447875977, 30.469685487622733],
              [119.87646102905273, 30.472940432754168],
              [119.88023757934569, 30.474124022190715],
              [119.87560272216795, 30.47589937936957],
              [119.8695945739746, 30.479597936184486],
              [119.86478805541992, 30.47900617653641],
              [119.86564636230467, 30.48403601888274],
              [119.85980987548827, 30.4874384119111],
              [119.85071182250978, 30.49838443460377],
              [119.85088348388672, 30.495278256014693],
              [119.84830856323242, 30.496165745731922],
              [119.84264373779295, 30.496165745731922],
              [119.83680725097655, 30.497201140169295],
              [119.83560562133789, 30.496609487554466],
              [119.83251571655273, 30.500603072872085],
              [119.83062744140625, 30.502673756264958],
              [119.82255935668945, 30.50858975160729],
              [119.82101440429686, 30.510216587229984],
              [119.81689453125, 30.510808157071413],
              [119.81466293334961, 30.50932922571916],
              [119.81157302856445, 30.506814990794137],
              [119.80728149414064, 30.507110786512428],
              [119.80178833007811, 30.504152788840653],
              [119.80007171630861, 30.50518809826035],
              [119.79286193847656, 30.506519194176082],
              [119.79200363159178, 30.50548389892728],
              [119.78942871093749, 30.505040197589455],
              [119.78839874267578, 30.502377947050736],
              [119.78513717651367, 30.49838443460377],
              [119.78273391723631, 30.49483450812004],
              [119.7810173034668, 30.489213526271655],
              [119.78410720825194, 30.486846699928776],
              [119.78548049926756, 30.476491157902103],
              [119.78290557861327, 30.47146092572709],
              [119.77775573730469, 30.4711650216242]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '瓶窑镇'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.84187126159668, 30.432985854877845],
              [119.84401702880858, 30.43194977762805],
              [119.84890937805176, 30.43194977762805],
              [119.85045433044432, 30.42891548808403],
              [119.8495101928711, 30.427435312590944],
              [119.84787940979002, 30.42950755199244],
              [119.84564781188965, 30.42810139434223],
              [119.84607696533205, 30.423290701727836],
              [119.84573364257812, 30.421366358262205],
              [119.85251426696776, 30.423512738916244],
              [119.8546600341797, 30.421144316189334],
              [119.85440254211424, 30.417147472477613],
              [119.85620498657227, 30.41855378800552],
              [119.85869407653809, 30.419293945932704],
              [119.86118316650389, 30.416407298270315],
              [119.86538887023926, 30.413964683557655],
              [119.86779212951662, 30.41159602909324],
              [119.86847877502443, 30.40782086723945],
              [119.86993789672852, 30.412114177168935],
              [119.87448692321777, 30.412040156183675],
              [119.87568855285646, 30.407006597503745],
              [119.87834930419923, 30.403009174846854],
              [119.87680435180663, 30.401602635361105],
              [119.88186836242676, 30.399899955193213],
              [119.88306999206543, 30.401824721889966],
              [119.88470077514647, 30.400640254566156],
              [119.88324165344238, 30.398197245338586],
              [119.88109588623047, 30.395976274828534],
              [119.87998008728027, 30.394199462058317],
              [119.87852096557617, 30.39168225530725],
              [119.88161087036134, 30.391756291725756],
              [119.88229751586914, 30.390053439904577],
              [119.88512992858887, 30.387165927678264],
              [119.88839149475098, 30.388424597345693],
              [119.89019393920898, 30.38746208670582],
              [119.89208221435545, 30.384278330116704],
              [119.89457130432127, 30.383167692948565],
              [119.893798828125, 30.38139064722473],
              [119.89869117736818, 30.37554097682019],
              [119.90710258483885, 30.370505537135568],
              [119.91233825683592, 30.36946879677073],
              [119.91208076477051, 30.361470715911796],
              [119.91225242614746, 30.34732436062727],
              [119.91456985473633, 30.347768779868215],
              [119.92461204528809, 30.34228746818478],
              [119.93319511413574, 30.34325042354528],
              [119.93139266967772, 30.3463614453484],
              [119.92632865905763, 30.348361335716685],
              [119.93010520935057, 30.350953725366434],
              [119.93302345275879, 30.34865761229543],
              [119.93559837341309, 30.35073152323039],
              [119.9347400665283, 30.35213879490344],
              [119.93843078613281, 30.35391637229704],
              [119.94469642639159, 30.35362011164081],
              [119.94624137878418, 30.355619853661054],
              [119.94787216186522, 30.351398128124778],
              [119.9537944793701, 30.353397915559906],
              [119.95894432067871, 30.35213879490344],
              [119.96272087097168, 30.349546436649657],
              [119.9676990509033, 30.348583543234838],
              [119.97010231018066, 30.348805750248427],
              [119.97216224670409, 30.34813912769397],
              [119.98065948486327, 30.351101859843464],
              [119.98306274414062, 30.35213879490344],
              [119.9827194213867, 30.355619853661054],
              [119.98340606689452, 30.35806392728733],
              [119.98641014099121, 30.358656420788783],
              [119.98864173889159, 30.35880454360341],
              [119.99121665954588, 30.36095229921014],
              [119.99430656433105, 30.362655658054585],
              [119.9960231781006, 30.363396239603716],
              [119.99834060668945, 30.360878239457048],
              [120.0017738342285, 30.363248123742522],
              [120.00452041625975, 30.362137247633555],
              [120.00572204589842, 30.36502549927204],
              [120.00761032104492, 30.36709906322986],
              [120.00889778137207, 30.36761744734925],
              [120.00726699829102, 30.370653642004587],
              [120.01018524169922, 30.372578984886143],
              [120.00349044799805, 30.375244781665323],
              [120.00889778137207, 30.377984552603245],
              [120.0156784057617, 30.377318128902335],
              [120.01773834228517, 30.378799064289495],
              [120.0120735168457, 30.382427261157275],
              [120.01653671264648, 30.3840562036929],
              [120.0186824798584, 30.389164983693423],
              [120.01851081848145, 30.39064573955672],
              [120.0212574005127, 30.394199462058317],
              [120.0212574005127, 30.39760499147409],
              [120.01739501953125, 30.400640254566156],
              [120.01756668090819, 30.403305285841213],
              [120.01327514648438, 30.403379313449484],
              [120.01027107238768, 30.39790111885528],
              [120.00546455383301, 30.39656853856939],
              [120.00349044799805, 30.39456963405082],
              [119.99971389770508, 30.397530959488513],
              [119.99876976013184, 30.40071428419479],
              [119.99713897705077, 30.402565006671665],
              [119.99791145324706, 30.40485985382934],
              [119.99164581298828, 30.404933880259023],
              [119.99344825744629, 30.410041568363646],
              [119.98383522033691, 30.41129994324368],
              [119.98083114624022, 30.408857200717147],
              [119.97877120971678, 30.405822193037643],
              [119.97705459594727, 30.407080622305823],
              [119.98083114624022, 30.412780363510446],
              [119.97920036315918, 30.416407298270315],
              [119.9754238128662, 30.415148989234556],
              [119.97533798217773, 30.41855378800552],
              [119.9728488922119, 30.420774244945072],
              [119.9765396118164, 30.42010811316847],
              [119.97465133666992, 30.424104835614955],
              [119.97035980224608, 30.42462291727871],
              [119.96907234191896, 30.42810139434223],
              [119.96632575988768, 30.431061702653952],
              [119.96160507202147, 30.43224580082251],
              [119.95714187622069, 30.435353990118514],
              [119.95353698730469, 30.435946014943585],
              [119.95319366455077, 30.4396460886695],
              [119.95199203491212, 30.443198027353244],
              [119.9542236328125, 30.4473417922616],
              [119.9497604370117, 30.448377705965697],
              [119.9490737915039, 30.45089345055344],
              [119.9439239501953, 30.447933744297767],
              [119.93911743164062, 30.44423398509367],
              [119.93396759033202, 30.447193803690862],
              [119.93276596069335, 30.45104143350694],
              [119.92727279663086, 30.45370508824597],
              [119.9222946166992, 30.457848406458837],
              [119.9186897277832, 30.46051187513064],
              [119.91130828857422, 30.455924744912984],
              [119.9058151245117, 30.45858826617149],
              [119.89757537841797, 30.457700433842113],
              [119.88864898681639, 30.457552461000667],
              [119.88744735717772, 30.45947609041055],
              [119.88040924072266, 30.458884208483454],
              [119.875431060791, 30.46051187513064],
              [119.8737144470215, 30.46495082776935],
              [119.87337112426758, 30.4695375329863],
              [119.88040924072266, 30.474271969858705],
              [119.87268447875977, 30.470277303920717],
              [119.86238479614256, 30.470129350183385],
              [119.85912322998045, 30.469093667728284],
              [119.85671997070312, 30.46509878937364],
              [119.85723495483397, 30.462731376734283],
              [119.85191345214842, 30.461103747169314],
              [119.84745025634766, 30.461103747169314],
              [119.85088348388672, 30.458736237439833],
              [119.84676361083986, 30.454297001634203],
              [119.84813690185547, 30.450449500344746],
              [119.84642028808594, 30.449117637585196],
              [119.8501968383789, 30.444973948168244],
              [119.85139846801758, 30.441422074186605],
              [119.8495101928711, 30.435057976358188],
              [119.8443603515625, 30.43801807352744],
              [119.84590530395506, 30.435205983350652],
              [119.84230041503906, 30.43372590331772],
              [119.84187126159668, 30.432985854877845]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '径山镇'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.84848022460936, 30.431801765693898],
              [119.84058380126952, 30.433281874927655],
              [119.82994079589844, 30.435650002980296],
              [119.82856750488281, 30.430913689372137],
              [119.82341766357422, 30.422920638624273],
              [119.82101440429686, 30.426473186476493],
              [119.81449127197264, 30.427065265208352],
              [119.81449127197264, 30.424992973925598],
              [119.81071472167969, 30.42380878771476],
              [119.80762481689453, 30.425585061640994],
              [119.8004150390625, 30.42824941189154],
              [119.79801177978514, 30.432689833929565],
              [119.794921875, 30.433281874927655],
              [119.79389190673827, 30.438906085156415],
              [119.79080200195311, 30.441274076629117],
              [119.78050231933594, 30.44452997099753],
              [119.78324890136719, 30.448377705965697],
              [119.78187561035156, 30.450745467375242],
              [119.77912902832031, 30.45311317126237],
              [119.76642608642577, 30.447193803690862],
              [119.76814270019531, 30.44364201058999],
              [119.77294921874999, 30.443050032491644],
              [119.7726058959961, 30.440386086566367],
              [119.7726058959961, 30.43801807352744],
              [119.76951599121094, 30.435057976358188],
              [119.77157592773436, 30.434465946142005],
              [119.77054595947266, 30.43239381208282],
              [119.77191925048828, 30.43032163399873],
              [119.76642608642577, 30.427361303226718],
              [119.76848602294923, 30.425881104151195],
              [119.76608276367188, 30.423512738916244],
              [119.76676940917969, 30.421440372174192],
              [119.76436614990233, 30.420848259306208],
              [119.76505279541014, 30.418183706936706],
              [119.75921630859374, 30.413150465068853],
              [119.75852966308592, 30.409005247458758],
              [119.76608276367188, 30.406636472651567],
              [119.76402282714844, 30.402787091011795],
              [119.76539611816406, 30.40071428419479],
              [119.7623062133789, 30.399825924947272],
              [119.75818634033203, 30.394791736572984],
              [119.75406646728516, 30.392126472976624],
              [119.7561264038086, 30.3885726750641],
              [119.75131988525389, 30.383241735819148],
              [119.75406646728516, 30.378799064289495],
              [119.7674560546875, 30.38146469144168],
              [119.77397918701172, 30.375837171077578],
              [119.77226257324217, 30.369913115416],
              [119.78118896484375, 30.36398870080539],
              [119.78702545166016, 30.358360174486627],
              [119.78530883789062, 30.349768641476782],
              [119.79629516601562, 30.34325042354528],
              [119.80899810791016, 30.342361542010376],
              [119.8007583618164, 30.33376860437097],
              [119.79423522949219, 30.334657563929305],
              [119.79114532470703, 30.327249321016218],
              [119.80453491210936, 30.33347228272473],
              [119.8065948486328, 30.327545661492763],
              [119.80419158935547, 30.320433242598465],
              [119.80144500732422, 30.300871428242587],
              [119.81380462646483, 30.29790717639933],
              [119.83097076416017, 30.307096065407638],
              [119.83337402343749, 30.308578063619894],
              [119.84367370605469, 30.312134767906088],
              [119.86324310302734, 30.314505832388893],
              [119.87697601318361, 30.327249321016218],
              [119.89002227783202, 30.33376860437097],
              [119.89929199218749, 30.339694848974247],
              [119.90684509277344, 30.347102150249974],
              [119.91302490234374, 30.350361185215682],
              [119.91165161132811, 30.369913115416],
              [119.89757537841797, 30.376725748464917],
              [119.8941421508789, 30.38176086774858],
              [119.89002227783202, 30.38709188778112],
              [119.88487243652345, 30.38709188778112],
              [119.88143920898436, 30.39094188803621],
              [119.87834930419923, 30.391534182301918],
              [119.88384246826172, 30.400418165343517],
              [119.88281249999999, 30.402490978446036],
              [119.88040924072266, 30.400418165343517],
              [119.87628936767577, 30.402490978446036],
              [119.8773193359375, 30.403971532295337],
              [119.87457275390625, 30.411373964790272],
              [119.86942291259766, 30.412262218971094],
              [119.86804962158203, 30.408413059145214],
              [119.8659896850586, 30.413446545305213],
              [119.85946655273438, 30.41907189914401],
              [119.85397338867189, 30.41699943808526],
              [119.8550033569336, 30.420552201524814],
              [119.85260009765624, 30.423216689219416],
              [119.84504699707031, 30.42173642726079],
              [119.84573364257812, 30.42676922629162],
              [119.84745025634766, 30.42884147984279],
              [119.84985351562499, 30.427657340346716],
              [119.85122680664061, 30.4297295750316],
              [119.84848022460936, 30.431801765693898]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '运河街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.31883239746092, 30.52101217024287],
              [120.31248092651367, 30.521307922766404],
              [120.31196594238281, 30.520124907272223],
              [120.30818939208983, 30.52086429364361],
              [120.29977798461913, 30.51982915114868],
              [120.29891967773438, 30.517610951535193],
              [120.29685974121094, 30.516871540414513],
              [120.29359817504883, 30.513470176815474],
              [120.29136657714845, 30.512287065927804],
              [120.28913497924803, 30.513470176815474],
              [120.28690338134766, 30.511695505084802],
              [120.28604507446288, 30.507110786512428],
              [120.2793502807617, 30.50755447840281],
              [120.27849197387695, 30.504300690861097],
              [120.27591705322266, 30.50474439557293],
              [120.27231216430664, 30.506519194176082],
              [120.26613235473631, 30.506371295529622],
              [120.26166915893553, 30.504448592656637],
              [120.25617599487305, 30.504448592656637],
              [120.25428771972655, 30.505927598240667],
              [120.24862289428712, 30.50548389892728],
              [120.23866653442381, 30.504892296693658],
              [120.23832321166992, 30.50740658133098],
              [120.23420333862305, 30.50725868403417],
              [120.23471832275389, 30.50548389892728],
              [120.23368835449219, 30.499715623637314],
              [120.24141311645508, 30.499271895983632],
              [120.24776458740233, 30.497496965127343],
              [120.25051116943358, 30.493207415189985],
              [120.2508544921875, 30.489213526271655],
              [120.24913787841795, 30.4874384119111],
              [120.24810791015625, 30.48359221971874],
              [120.25377273559569, 30.484923611140033],
              [120.25514602661134, 30.48063350691296],
              [120.25875091552734, 30.479893814659587],
              [120.2592658996582, 30.477230876009543],
              [120.26630401611327, 30.477230876009543],
              [120.26784896850586, 30.473828126180347],
              [120.27385711669922, 30.474124022190715],
              [120.27420043945311, 30.4673181864665],
              [120.2760887145996, 30.46435897910462],
              [120.27643203735352, 30.45991999949615],
              [120.27849197387695, 30.452965191454695],
              [120.2827835083008, 30.446897825875304],
              [120.28827667236328, 30.44571390562601],
              [120.28947830200195, 30.45207730788989],
              [120.29462814331056, 30.455036888313483],
              [120.29565811157227, 30.457404487934493],
              [120.30012130737305, 30.458440294678418],
              [120.30012130737305, 30.460807811599466],
              [120.30218124389648, 30.461547648838522],
              [120.30389785766602, 30.45991999949615],
              [120.30767440795897, 30.46243544610882],
              [120.31042098999025, 30.461103747169314],
              [120.31265258789062, 30.458144351018078],
              [120.31522750854492, 30.45858826617149],
              [120.31625747680663, 30.453409130203596],
              [120.31951904296874, 30.454001045389525],
              [120.31951904296874, 30.458440294678418],
              [120.32346725463866, 30.460363906559124],
              [120.32415390014647, 30.46332323528822],
              [120.32724380493164, 30.46495082776935],
              [120.32604217529295, 30.46657839305467],
              [120.32501220703125, 30.469093667728284],
              [120.32672882080077, 30.470721163784],
              [120.32827377319336, 30.473384280478854],
              [120.3277587890625, 30.47515965114578],
              [120.32621383666994, 30.475307597240135],
              [120.32535552978514, 30.479302056810077],
              [120.32741546630858, 30.48166906662488],
              [120.32810211181639, 30.484183951487754],
              [120.32690048217773, 30.48595912520967],
              [120.3277587890625, 30.491728216186374],
              [120.32655715942383, 30.496461573838513],
              [120.32535552978514, 30.496609487554466],
              [120.32484054565428, 30.500750980290693],
              [120.32295227050781, 30.505040197589455],
              [120.3219223022461, 30.505927598240667],
              [120.32089233398436, 30.507702375249735],
              [120.32243728637695, 30.50903343674927],
              [120.32243728637695, 30.51213917605451],
              [120.32123565673828, 30.515836355396207],
              [120.3200340270996, 30.51657577439133],
              [120.31883239746092, 30.52101217024287]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '东湖街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.32655715942383, 30.470425257433245],
              [120.32552719116212, 30.469093667728284],
              [120.32707214355469, 30.465246750753185],
              [120.32415390014647, 30.4639150902461],
              [120.32312393188477, 30.460363906559124],
              [120.31917572021484, 30.45858826617149],
              [120.31883239746092, 30.454149023624225],
              [120.31625747680663, 30.453557109337122],
              [120.314884185791, 30.458440294678418],
              [120.31265258789062, 30.457996378850833],
              [120.31024932861327, 30.461399681840188],
              [120.30767440795897, 30.46243544610882],
              [120.30441284179686, 30.460067968741892],
              [120.30218124389648, 30.461399681840188],
              [120.30029296875, 30.460363906559124],
              [120.30012130737305, 30.45858826617149],
              [120.29531478881837, 30.457256514643596],
              [120.29411315917969, 30.455036888313483],
              [120.28930664062499, 30.452521250683464],
              [120.28844833374023, 30.44571390562601],
              [120.28347015380861, 30.446601847161052],
              [120.28535842895506, 30.44452997099753],
              [120.29239654541016, 30.43772206785397],
              [120.29720306396483, 30.430765675865693],
              [120.29788970947264, 30.42247656104726],
              [120.30475616455078, 30.424104835614955],
              [120.30801773071289, 30.427361303226718],
              [120.30853271484375, 30.430765675865693],
              [120.31059265136719, 30.431061702653952],
              [120.31539916992188, 30.433133865015062],
              [120.3196907043457, 30.433429884615624],
              [120.32089233398436, 30.435650002980296],
              [120.32209396362303, 30.43949808841618],
              [120.32312393188477, 30.43609402058828],
              [120.32569885253906, 30.43639003120375],
              [120.32587051391602, 30.434613954032987],
              [120.33119201660156, 30.433429884615624],
              [120.34029006958008, 30.434021921121317],
              [120.33960342407227, 30.440090088081583],
              [120.34132003784181, 30.442606046558932],
              [120.33960342407227, 30.450153532415474],
              [120.33823013305664, 30.45089345055344],
              [120.33685684204102, 30.457996378850833],
              [120.33788681030272, 30.460067968741892],
              [120.33771514892578, 30.4639150902461],
              [120.34063339233397, 30.464211016376545],
              [120.34286499023438, 30.465246750753185],
              [120.34183502197264, 30.46628247411658],
              [120.34097671508789, 30.470425257433245],
              [120.34149169921875, 30.4711650216242],
              [120.33685684204102, 30.473384280478854],
              [120.3329086303711, 30.470425257433245],
              [120.33067703247069, 30.470721163784],
              [120.3303337097168, 30.469241623039075],
              [120.32655715942383, 30.470425257433245]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.32655715942383, 30.470425257433245],
              [120.32552719116212, 30.469093667728284],
              [120.32707214355469, 30.465246750753185],
              [120.32415390014647, 30.4639150902461],
              [120.32312393188477, 30.460363906559124],
              [120.31917572021484, 30.45858826617149],
              [120.31883239746092, 30.454149023624225],
              [120.31625747680663, 30.453557109337122],
              [120.314884185791, 30.458440294678418],
              [120.31265258789062, 30.457996378850833],
              [120.31024932861327, 30.461399681840188],
              [120.30767440795897, 30.46243544610882],
              [120.30441284179686, 30.460067968741892],
              [120.30218124389648, 30.461399681840188],
              [120.30029296875, 30.460363906559124],
              [120.30012130737305, 30.45858826617149],
              [120.29531478881837, 30.457256514643596],
              [120.29411315917969, 30.455036888313483],
              [120.28930664062499, 30.452521250683464],
              [120.28844833374023, 30.44571390562601],
              [120.28347015380861, 30.446601847161052],
              [120.28535842895506, 30.44452997099753],
              [120.29239654541016, 30.43772206785397],
              [120.29720306396483, 30.430765675865693],
              [120.29788970947264, 30.42247656104726],
              [120.30475616455078, 30.424104835614955],
              [120.30801773071289, 30.427361303226718],
              [120.30853271484375, 30.430765675865693],
              [120.31059265136719, 30.431061702653952],
              [120.31539916992188, 30.433133865015062],
              [120.3196907043457, 30.433429884615624],
              [120.32089233398436, 30.435650002980296],
              [120.32209396362303, 30.43949808841618],
              [120.32312393188477, 30.43609402058828],
              [120.32569885253906, 30.43639003120375],
              [120.32587051391602, 30.434613954032987],
              [120.33119201660156, 30.433429884615624],
              [120.34029006958008, 30.434021921121317],
              [120.33960342407227, 30.440090088081583],
              [120.34132003784181, 30.442606046558932],
              [120.33960342407227, 30.450153532415474],
              [120.33823013305664, 30.45089345055344],
              [120.33685684204102, 30.457996378850833],
              [120.33788681030272, 30.460067968741892],
              [120.33771514892578, 30.4639150902461],
              [120.34063339233397, 30.464211016376545],
              [120.34286499023438, 30.465246750753185],
              [120.34183502197264, 30.46628247411658],
              [120.34097671508789, 30.470425257433245],
              [120.34149169921875, 30.4711650216242],
              [120.33685684204102, 30.473384280478854],
              [120.3329086303711, 30.470425257433245],
              [120.33067703247069, 30.470721163784],
              [120.3303337097168, 30.469241623039075],
              [120.32655715942383, 30.470425257433245]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '塘栖镇'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.14751434326172, 30.470277303920717],
              [120.14545440673828, 30.469389578125064],
              [120.14511108398436, 30.459032179302323],
              [120.14545440673828, 30.451633363073963],
              [120.14493942260742, 30.443198027353244],
              [120.14219284057617, 30.43875808377987],
              [120.13618469238281, 30.43372590331772],
              [120.13463973999022, 30.431801765693898],
              [120.13738632202147, 30.430173619593845],
              [120.13996124267577, 30.429285528447902],
              [120.14545440673828, 30.426917245862285],
              [120.1497459411621, 30.427509321899016],
              [120.15541076660156, 30.426177145763027],
              [120.15987396240234, 30.426473186476493],
              [120.1662254333496, 30.425140996191313],
              [120.172061920166, 30.425881104151195],
              [120.17618179321288, 30.42173642726079],
              [120.17566680908203, 30.418775835973133],
              [120.18545150756837, 30.41892386767087],
              [120.18871307373045, 30.41921993039263],
              [120.19008636474611, 30.415223007862238],
              [120.1893997192383, 30.409893523193663],
              [120.19472122192383, 30.409153293975873],
              [120.19849777221678, 30.410929834668767],
              [120.20313262939452, 30.413150465068853],
              [120.20467758178711, 30.41699943808526],
              [120.21429061889647, 30.417591574307398],
              [120.21858215332031, 30.417591574307398],
              [120.21978378295898, 30.424104835614955],
              [120.2204704284668, 30.429877590110305],
              [120.21875381469725, 30.433133865015062],
              [120.22579193115234, 30.440830082608688],
              [120.23025512695312, 30.442606046558932],
              [120.23471832275389, 30.442754042094503],
              [120.2369499206543, 30.44985756358743],
              [120.2395248413086, 30.452521250683464],
              [120.23780822753906, 30.455332841412183],
              [120.23660659790038, 30.457848406458837],
              [120.24244308471678, 30.460363906559124],
              [120.24124145507811, 30.46317527098687],
              [120.24862289428712, 30.46687431109371],
              [120.25360107421874, 30.469389578125064],
              [120.25428771972655, 30.472940432754168],
              [120.25840759277342, 30.474271969858705],
              [120.2592658996582, 30.477822646448885],
              [120.25875091552734, 30.479893814659587],
              [120.25514602661134, 30.480929382240507],
              [120.2534294128418, 30.484923611140033],
              [120.24793624877931, 30.48374015299826],
              [120.24948120117188, 30.487734266553137],
              [120.25102615356444, 30.489065601311676],
              [120.25033950805663, 30.49291157718828],
              [120.24793624877931, 30.496905314311686],
              [120.24141311645508, 30.499271895983632],
              [120.23351669311523, 30.499567714644332],
              [120.23488998413086, 30.504300690861097],
              [120.234375, 30.507110786512428],
              [120.23866653442381, 30.507702375249735],
              [120.23832321166992, 30.50844185611006],
              [120.23506164550781, 30.509920800959517],
              [120.234375, 30.511547614311638],
              [120.23214340209962, 30.510956048969373],
              [120.22939682006835, 30.513765952287702],
              [120.2281951904297, 30.511843395633008],
              [120.22974014282227, 30.509920800959517],
              [120.22768020629883, 30.50814606444077],
              [120.21446228027344, 30.507998168268703],
              [120.20330429077148, 30.50533599870627],
              [120.20072937011719, 30.514061726860035],
              [120.19969940185545, 30.51420961380877],
              [120.19437789916992, 30.502821660534718],
              [120.19317626953124, 30.502230042106245],
              [120.19008636474611, 30.504152788840653],
              [120.18527984619139, 30.502230042106245],
              [120.18201828002928, 30.500011440948544],
              [120.18287658691406, 30.49779278918575],
              [120.18167495727539, 30.496905314311686],
              [120.18545150756837, 30.49468659170537],
              [120.18339157104491, 30.494094923797824],
              [120.1797866821289, 30.492319898486365],
              [120.17686843872069, 30.494242841112055],
              [120.17412185668944, 30.491876137098675],
              [120.17789840698242, 30.48803012029571],
              [120.17944335937499, 30.484923611140033],
              [120.18098831176758, 30.485367404233248],
              [120.18321990966797, 30.483444286214393],
              [120.18184661865234, 30.48152113019768],
              [120.17601013183592, 30.485367404233248],
              [120.17343521118163, 30.48374015299826],
              [120.17927169799805, 30.47826647191783],
              [120.17446517944336, 30.47663910197322],
              [120.17120361328125, 30.474419917301873],
              [120.16553878784178, 30.47264453314708],
              [120.16313552856445, 30.473680177837977],
              [120.16141891479492, 30.47308838222052],
              [120.16021728515624, 30.46998139622128],
              [120.14905929565428, 30.468057974259104],
              [120.14751434326172, 30.470277303920717]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '中泰街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.86513137817381, 30.256101688343282],
              [119.86495971679686, 30.25550857462476],
              [119.86787796020508, 30.254174055663515],
              [119.86719131469727, 30.24824264093001],
              [119.86513137817381, 30.246018268082167],
              [119.86461639404297, 30.238751632543142],
              [119.86324310302734, 30.234895648570816],
              [119.85980987548827, 30.23445071760997],
              [119.85912322998045, 30.23074288129342],
              [119.85448837280272, 30.226589938611763],
              [119.85345840454102, 30.2240684235559],
              [119.85036849975586, 30.222288491651256],
              [119.84745025634766, 30.220508527534868],
              [119.84401702880858, 30.219321866895765],
              [119.84556198120117, 30.214871762004673],
              [119.8443603515625, 30.213091663685034],
              [119.84350204467773, 30.206564360982682],
              [119.8362922668457, 30.200184987782087],
              [119.8366355895996, 30.19825625867948],
              [119.84006881713866, 30.196475859816076],
              [119.84024047851562, 30.19439868711761],
              [119.84298706054688, 30.19068934116742],
              [119.84916687011717, 30.18965069926306],
              [119.84779357910156, 30.186237941597373],
              [119.84916687011717, 30.18608955814685],
              [119.85242843627928, 30.182528288276167],
              [119.85191345214842, 30.180302429227943],
              [119.85397338867189, 30.176295756214493],
              [119.85792160034181, 30.177186142075502],
              [119.86083984375, 30.180450821395706],
              [119.86427307128905, 30.18119277888203],
              [119.86753463745117, 30.179708858321735],
              [119.8728561401367, 30.18267667709129],
              [119.87422943115233, 30.18534763754125],
              [119.88058090209961, 30.18846366653094],
              [119.88281249999999, 30.18608955814685],
              [119.88727569580077, 30.187128237606288],
              [119.88985061645508, 30.188166906112478],
              [119.89002227783202, 30.1909860939853],
              [119.89568710327148, 30.19365682910568],
              [119.90169525146484, 30.190244210264005],
              [119.90375518798827, 30.188166906112478],
              [119.90598678588867, 30.18787014479982],
              [119.90787506103514, 30.191134470058895],
              [119.91233825683592, 30.190244210264005],
              [119.91628646850585, 30.191282845908933],
              [119.91834640502928, 30.19068934116742],
              [119.92160797119139, 30.192618218499273],
              [119.92315292358398, 30.190392587455374],
              [119.92589950561523, 30.190392587455374],
              [119.9274444580078, 30.19306333867198],
              [119.93396759033202, 30.194992169502903],
              [119.93791580200194, 30.197514429732422],
              [119.94186401367186, 30.196624227617708],
              [119.94512557983398, 30.197217696588513],
              [119.94323730468749, 30.200778435288452],
              [119.941349029541, 30.20448740114747],
              [119.94426727294922, 30.20537753215796],
              [119.94375228881836, 30.207899526303294],
              [119.9483871459961, 30.206861065952626],
              [119.95096206665039, 30.21576179908697],
              [119.9497604370117, 30.220805190457803],
              [119.94581222534178, 30.226293293137275],
              [119.95061874389647, 30.23341253753693],
              [119.94993209838866, 30.23652704486517],
              [119.95491027832031, 30.243200656855286],
              [119.95147705078125, 30.24824264093001],
              [119.94323730468749, 30.245721681231203],
              [119.93843078613281, 30.25017038999861],
              [119.9315643310547, 30.24987381568076],
              [119.92830276489259, 30.253284366283474],
              [119.92280960083006, 30.253432648406385],
              [119.91680145263672, 30.25120839306083],
              [119.91388320922852, 30.25017038999861],
              [119.90976333618163, 30.25209810124235],
              [119.91010665893555, 30.249132375969403],
              [119.90701675415038, 30.247204606534158],
              [119.90667343139648, 30.24987381568076],
              [119.89723205566405, 30.248687509456847],
              [119.90100860595703, 30.257287905035877],
              [119.89946365356445, 30.26440490432903],
              [119.90530014038087, 30.269001025570915],
              [119.90427017211914, 30.271076622701518],
              [119.89070892333983, 30.268407989758884],
              [119.8857307434082, 30.267370168467806],
              [119.88298416137695, 30.267073646083887],
              [119.87680435180663, 30.266480598629396],
              [119.86719131469727, 30.26351530762463],
              [119.86753463745117, 30.259808567939697],
              [119.86513137817381, 30.256101688343282]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '闲林街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.98237609863281, 30.25995684021347],
              [119.98306274414062, 30.260105112263386],
              [119.98477935791014, 30.257732732602136],
              [119.98254776000977, 30.257139628732773],
              [119.98031616210938, 30.258474107402265],
              [119.97877120971678, 30.25817755815378],
              [119.9758529663086, 30.25936374977526],
              [119.97619628906249, 30.25788100800988],
              [119.97362136840819, 30.256101688343282],
              [119.97379302978516, 30.254025774659755],
              [119.97636795043945, 30.24853922017171],
              [119.974308013916, 30.247056315010955],
              [119.97156143188475, 30.243052359289663],
              [119.96675491333008, 30.241272771047235],
              [119.967098236084, 30.238455023761645],
              [119.970703125, 30.239196544037164],
              [119.9732780456543, 30.235637195697265],
              [119.97190475463867, 30.235488886719484],
              [119.96967315673827, 30.232967599863763],
              [119.97207641601562, 30.230446248347235],
              [119.96915817260742, 30.228963070192805],
              [119.9652099609375, 30.224958377428475],
              [119.96212005615234, 30.2227334776473],
              [119.96143341064453, 30.22095352158375],
              [119.95714187622069, 30.21976686631304],
              [119.9497604370117, 30.220805190457803],
              [119.95096206665039, 30.21576179908697],
              [119.94821548461914, 30.207157770028097],
              [119.9439239501953, 30.207899526303294],
              [119.94409561157228, 30.205525886543708],
              [119.94169235229492, 30.204339045196406],
              [119.94478225708008, 30.197217696588513],
              [119.94237899780273, 30.196772595195785],
              [119.937744140625, 30.197366063272245],
              [119.93448257446289, 30.194992169502903],
              [119.92813110351561, 30.19365682910568],
              [119.92589950561523, 30.1909860939853],
              [119.9274444580078, 30.189502320953967],
              [119.93036270141602, 30.188760426055236],
              [119.93122100830078, 30.186683090607737],
              [119.93396759033202, 30.184902482495538],
              [119.9325942993164, 30.182528288276167],
              [119.93637084960938, 30.180302429227943],
              [119.93791580200194, 30.17777972817965],
              [119.93602752685545, 30.176147357788775],
              [119.93705749511719, 30.174218157917355],
              [119.93431091308594, 30.173772952583466],
              [119.93448257446289, 30.170953272096156],
              [119.93345260620116, 30.16798510022147],
              [119.93345260620116, 30.162642165611324],
              [119.93585586547852, 30.159822166712964],
              [119.9403190612793, 30.15952532003185],
              [119.94409561157228, 30.162048488335433],
              [119.94546890258789, 30.165462083852248],
              [119.95061874389647, 30.167094631229592],
              [119.95267868041992, 30.16917237969733],
              [119.95576858520506, 30.17021123750721],
              [119.9626350402832, 30.16917237969733],
              [119.9648666381836, 30.173476147910154],
              [119.96744155883789, 30.173179342342927],
              [119.97001647949219, 30.17599895913958],
              [119.97241973876953, 30.17510856255117],
              [119.97756958007811, 30.175553761851067],
              [119.98134613037108, 30.173624550358536],
              [119.98443603515625, 30.174960162337573],
              [119.98666763305663, 30.17406975636286],
              [119.98958587646484, 30.175702161170722],
              [119.98666763305663, 30.179857251383535],
              [119.99078750610353, 30.17941207152762],
              [119.9930191040039, 30.182528288276167],
              [119.99851226806639, 30.18401216636893],
              [120.00022888183594, 30.188315286433486],
              [120.00537872314453, 30.192618218499273],
              [120.01052856445314, 30.195437278944393],
              [120.00778198242186, 30.199739899804584],
              [120.00726699829102, 30.203152189537853],
              [120.00572204589842, 30.20641600816225],
              [120.0058937072754, 30.207454473209072],
              [120.00984191894533, 30.208047876887466],
              [120.00915527343749, 30.21027310881394],
              [120.01310348510741, 30.20938302208148],
              [120.01499176025389, 30.211459878600035],
              [120.01705169677733, 30.211756568810145],
              [120.01842498779298, 30.21353669128429],
              [120.01310348510741, 30.21413005828547],
              [120.01018524169922, 30.21546512095419],
              [120.00726699829102, 30.220656859108175],
              [120.0094985961914, 30.221546843850632],
              [120.01155853271484, 30.218728531207883],
              [120.01327514648438, 30.218728531207883],
              [120.01379013061525, 30.21635515266855],
              [120.01533508300781, 30.217838520965802],
              [120.01842498779298, 30.216058476325074],
              [120.02031326293944, 30.218283527093387],
              [120.01859664916992, 30.220805190457803],
              [120.01670837402344, 30.221250183164567],
              [120.01396179199219, 30.224216749760583],
              [120.01070022583008, 30.228963070192805],
              [120.01138687133789, 30.23178108955747],
              [120.00829696655272, 30.23341253753693],
              [120.01070022583008, 30.235637195697265],
              [120.01430511474608, 30.236971966428445],
              [120.018253326416, 30.238306719035243],
              [120.01945495605469, 30.24067956780551],
              [120.01962661743163, 30.243348954197124],
              [120.01773834228517, 30.244831915307145],
              [120.01876831054688, 30.248094350973442],
              [120.01670837402344, 30.24987381568076],
              [120.0204849243164, 30.25031867682182],
              [120.01911163330078, 30.25194981710498],
              [120.0230598449707, 30.253580930305485],
              [120.01996994018555, 30.253580930305485],
              [120.01893997192381, 30.25536029563551],
              [120.01636505126952, 30.259808567939697],
              [120.02031326293944, 30.261143010344604],
              [120.02443313598633, 30.26336704072365],
              [120.0227165222168, 30.263218773598812],
              [120.02323150634766, 30.264701434772807],
              [120.02580642700195, 30.265442756964347],
              [120.02614974975585, 30.268556249047727],
              [120.02769470214844, 30.26944580007901],
              [120.02408981323241, 30.271076622701518],
              [120.02477645874022, 30.27270741823115],
              [120.0285530090332, 30.27300392359839],
              [120.03164291381836, 30.275968928008236],
              [120.02906799316406, 30.276561918141727],
              [120.02323150634766, 30.27522768530293],
              [120.0208282470703, 30.275524183056834],
              [120.02065658569336, 30.276561918141727],
              [120.01876831054688, 30.276561918141727],
              [120.01533508300781, 30.27774788765996],
              [120.01258850097656, 30.276117175877488],
              [120.01070022583008, 30.27300392359839],
              [120.00417709350586, 30.271373132994828],
              [120.00040054321288, 30.27092836721901],
              [119.99164581298828, 30.269001025570915],
              [119.99113082885742, 30.267370168467806],
              [119.9897575378418, 30.266628860828856],
              [119.985294342041, 30.268407989758884],
              [119.981689453125, 30.268407989758884],
              [119.98821258544922, 30.264849699658892],
              [119.98477935791014, 30.263663574301724],
              [119.98580932617188, 30.260549927069945],
              [119.9842643737793, 30.26188435940102],
              [119.98237609863281, 30.25995684021347]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '余杭街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.83157157897948, 30.307318366567912],
              [119.83397483825684, 30.307614767330726],
              [119.8359489440918, 30.30642915890191],
              [119.83466148376463, 30.299759844302933],
              [119.83586311340332, 30.29761074628633],
              [119.83766555786133, 30.29761074628633],
              [119.83878135681151, 30.293757073274122],
              [119.83783721923828, 30.2901255889738],
              [119.83483314514159, 30.28856919740025],
              [119.83097076416017, 30.288791540565523],
              [119.82985496520996, 30.28716101231696],
              [119.82728004455566, 30.287531589298727],
              [119.82625007629393, 30.28590104010804],
              [119.82942581176756, 30.28241750331758],
              [119.82839584350586, 30.28078686913181],
              [119.82985496520996, 30.279600936340028],
              [119.82951164245604, 30.276043051970852],
              [119.82710838317871, 30.275375934291837],
              [119.82805252075195, 30.271447260428214],
              [119.83208656311034, 30.27003882962186],
              [119.83569145202637, 30.270261214776816],
              [119.83654975891113, 30.26937167113427],
              [119.84195709228514, 30.27174376960197],
              [119.84573364257812, 30.271966150894535],
              [119.848051071167, 30.269001025570915],
              [119.84942436218262, 30.26907515479554],
              [119.8501968383789, 30.274338186666988],
              [119.85440254211424, 30.274560562081735],
              [119.85697746276855, 30.273078049800244],
              [119.86461639404297, 30.273300428069934],
              [119.86495971679686, 30.27100249498824],
              [119.86710548400877, 30.26944580007901],
              [119.8659896850586, 30.268407989758884],
              [119.86564636230467, 30.265220360894592],
              [119.86358642578125, 30.26314463995245],
              [119.86289978027344, 30.260698198224393],
              [119.86495971679686, 30.258696518751023],
              [119.86504554748534, 30.255656853390146],
              [119.8674488067627, 30.259808567939697],
              [119.86727714538574, 30.26351530762463],
              [119.87646102905273, 30.266480598629396],
              [119.88598823547362, 30.267518429323925],
              [119.90418434143066, 30.271076622701518],
              [119.90555763244629, 30.26892689629031],
              [119.89954948425293, 30.26440490432903],
              [119.90118026733397, 30.25743618111515],
              [119.89740371704103, 30.24890994296491],
              [119.90658760070802, 30.24987381568076],
              [119.90701675415038, 30.247352897833554],
              [119.90967750549315, 30.24920652019233],
              [119.90967750549315, 30.25194981710498],
              [119.91388320922852, 30.250244533438178],
              [119.92238044738771, 30.25335850737292],
              [119.92821693420409, 30.253284366283474],
              [119.93165016174316, 30.24987381568076],
              [119.93838787078857, 30.25017038999861],
              [119.94297981262207, 30.24564753437857],
              [119.95147705078125, 30.24824264093001],
              [119.95508193969725, 30.243052359289663],
              [119.94993209838866, 30.23652704486517],
              [119.95070457458496, 30.23341253753693],
              [119.94555473327637, 30.22621913162882],
              [119.95001792907716, 30.220805190457803],
              [119.95731353759766, 30.21991519900476],
              [119.96117591857912, 30.22102768706283],
              [119.96203422546387, 30.2227334776473],
              [119.96546745300293, 30.225403351344774],
              [119.96907234191896, 30.22903722963186],
              [119.97190475463867, 30.23029793153857],
              [119.96993064880371, 30.23304175628246],
              [119.97190475463867, 30.235637195697265],
              [119.97310638427734, 30.235711350102243],
              [119.97078895568848, 30.239048240429582],
              [119.96692657470702, 30.238677480431676],
              [119.96675491333008, 30.241198620837817],
              [119.97156143188475, 30.243200656855286],
              [119.974308013916, 30.247130460800545],
              [119.97611045837401, 30.24839093066276],
              [119.97387886047363, 30.254025774659755],
              [119.97216224670409, 30.253580930305485],
              [119.96658325195312, 30.251060107580553],
              [119.96615409851074, 30.249280664359304],
              [119.96332168579102, 30.25076353594852],
              [119.96323585510254, 30.253951634073932],
              [119.96392250061035, 30.25817755815378],
              [119.96169090270995, 30.257732732602136],
              [119.96203422546387, 30.259660295442085],
              [119.96383666992189, 30.259734431718865],
              [119.96563911437987, 30.2603275199185],
              [119.96795654296875, 30.259808567939697],
              [119.97035980224608, 30.25862238169073],
              [119.9718189239502, 30.259512022720614],
              [119.97344970703124, 30.258844792703698],
              [119.97396469116211, 30.261513685572407],
              [119.97130393981934, 30.265220360894592],
              [119.97267723083496, 30.265368624997066],
              [119.97593879699707, 30.26581341596122],
              [119.97636795043945, 30.267518429323925],
              [119.97739791870116, 30.269297542133554],
              [119.98091697692873, 30.26944580007901],
              [119.97920036315918, 30.271076622701518],
              [119.97662544250488, 30.271447260428214],
              [119.97705459594727, 30.272855671026726],
              [119.97396469116211, 30.273671057399863],
              [119.97344970703124, 30.275524183056834],
              [119.97010231018066, 30.27589480398962],
              [119.97113227844238, 30.27863735539325],
              [119.96941566467285, 30.28175042897146],
              [119.96074676513672, 30.2788597210669],
              [119.95285034179688, 30.276191299728147],
              [119.94778633117674, 30.27722902775923],
              [119.94632720947266, 30.279156207847997],
              [119.94692802429199, 30.281379830152893],
              [119.94564056396484, 30.28301045448459],
              [119.94778633117674, 30.287902164880588],
              [119.94555473327637, 30.292200739323746],
              [119.94787216186522, 30.294498175998815],
              [119.9461555480957, 30.304428412161137],
              [119.94564056396484, 30.311171506573277],
              [119.9443531036377, 30.316876839502203],
              [119.94598388671874, 30.325915777776178],
              [119.9479579925537, 30.33258331240559],
              [119.94873046875, 30.336361380523655],
              [119.94658470153807, 30.3391022406564],
              [119.94812965393066, 30.34176894983598],
              [119.94709968566895, 30.34613923278477],
              [119.94855880737303, 30.351175926997886],
              [119.9479579925537, 30.351472195054935],
              [119.9461555480957, 30.355545789870668],
              [119.94469642639159, 30.35369417688896],
              [119.93834495544434, 30.35391637229704],
              [119.93448257446289, 30.352286927586384],
              [119.93551254272462, 30.350657455739565],
              [119.93276596069335, 30.348731681299967],
              [119.93010520935057, 30.350879658043798],
              [119.92607116699219, 30.348435404945462],
              [119.93165016174316, 30.346213303695375],
              [119.93319511413574, 30.343324496642147],
              [119.92452621459961, 30.3422133943031],
              [119.91474151611328, 30.34769471013487],
              [119.91216659545898, 30.34732436062727],
              [119.91199493408203, 30.3499167777479],
              [119.90684509277344, 30.347250290557575],
              [119.89929199218749, 30.3398430004932],
              [119.88942146301268, 30.33347228272473],
              [119.87706184387207, 30.327397491366572],
              [119.86324310302734, 30.314579927229587],
              [119.84367370605469, 30.312060671216628],
              [119.83397483825684, 30.308874460573502],
              [119.83157157897948, 30.307318366567912]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '五常街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.00319004058836, 30.271336069257153],
              [120.0042200088501, 30.27139166485842],
              [120.01065731048584, 30.27298539203916],
              [120.01258850097656, 30.276135706845412],
              [120.01535654067992, 30.27774788765996],
              [120.01872539520264, 30.276543387254307],
              [120.02065658569336, 30.276561918141727],
              [120.0208067893982, 30.275524183056834],
              [120.02318859100342, 30.275246216438788],
              [120.02904653549193, 30.276543387254307],
              [120.031578540802, 30.27595039700881],
              [120.02859592437744, 30.27298539203916],
              [120.02477645874022, 30.272725949842823],
              [120.02413272857665, 30.27103955885189],
              [120.02769470214844, 30.26944580007901],
              [120.02614974975585, 30.26861184622332],
              [120.02582788467406, 30.265461289947446],
              [120.02325296401976, 30.264682901646303],
              [120.02265214920045, 30.263237307001667],
              [120.0244116783142, 30.263329973963433],
              [120.0203561782837, 30.26119861171797],
              [120.01638650894165, 30.259808567939697],
              [120.01996994018555, 30.253618000745274],
              [120.02314567565918, 30.253599465527135],
              [120.01911163330078, 30.25194981710498],
              [120.02046346664427, 30.25033721265897],
              [120.0166869163513, 30.249855279756158],
              [120.01876831054688, 30.248094350973442],
              [120.01771688461304, 30.24486898904817],
              [120.01962661743163, 30.24336749134912],
              [120.01945495605469, 30.240698105461025],
              [120.01816749572752, 30.23838087142642],
              [120.01052856445314, 30.235785504451293],
              [120.0080394744873, 30.23341253753693],
              [120.01121520996094, 30.23178108955747],
              [120.01070022583008, 30.228963070192805],
              [120.0161075592041, 30.221621008882348],
              [120.01833915710448, 30.220879356048737],
              [120.01705169677733, 30.22510670229094],
              [120.0197982788086, 30.226589938611763],
              [120.02683639526366, 30.227702351171352],
              [120.02829551696779, 30.229778820946343],
              [120.03198623657225, 30.229778820946343],
              [120.03842353820801, 30.233115912645207],
              [120.04056930541991, 30.232967599863763],
              [120.04194259643553, 30.23823256658814],
              [120.0446033477783, 30.237046119826534],
              [120.0431442260742, 30.24067956780551],
              [120.04606246948242, 30.241421071298213],
              [120.04649162292479, 30.242755763487068],
              [120.05258560180665, 30.243348954197124],
              [120.05284309387207, 30.245202652087944],
              [120.05541801452637, 30.245499240505495],
              [120.05610466003418, 30.24802020591123],
              [120.05524635314943, 30.25157910578236],
              [120.05850791931154, 30.252913659996945],
              [120.05928039550781, 30.25521201642245],
              [120.0563621520996, 30.257510319070857],
              [120.05558967590332, 30.26292223867753],
              [120.0578212738037, 30.265442756964347],
              [120.05704879760741, 30.26803734055718],
              [120.05893707275389, 30.269001025570915],
              [120.05945205688477, 30.27181789675547],
              [120.05679130554199, 30.273152175946116],
              [120.05095481872559, 30.272855671026726],
              [120.04983901977538, 30.274189936110623],
              [120.05043983459471, 30.278044377800153],
              [120.05284309387207, 30.28286221702878],
              [120.05541801452637, 30.28567869039136],
              [120.05670547485352, 30.288791540565523],
              [120.05086898803711, 30.2901255889738],
              [120.05567550659178, 30.297684853898605],
              [120.05155563354492, 30.299611632158843],
              [120.04812240600586, 30.30294635121175],
              [120.04254341125487, 30.30420610444706],
              [120.04082679748535, 30.30398379622886],
              [120.03082752227782, 30.299796897303946],
              [120.02872467041014, 30.303353920206323],
              [120.02645015716553, 30.3023535205586],
              [120.02490520477294, 30.302057103887744],
              [120.02031326293944, 30.300426796178968],
              [120.01280307769775, 30.297944230100445],
              [120.00507831573485, 30.29516516366276],
              [120.00469207763672, 30.29438701094713],
              [120.00619411468506, 30.29234896266876],
              [120.00662326812744, 30.29112611337344],
              [120.00786781311037, 30.29097788818045],
              [120.00730991363525, 30.290088532318563],
              [120.00778198242186, 30.288309796403798],
              [120.00902652740477, 30.288198624338175],
              [120.0106143951416, 30.287235127825305],
              [120.01108646392821, 30.285863981856927],
              [120.01044273376463, 30.285159872426014],
              [120.00267505645752, 30.282528681934327],
              [120.00241756439208, 30.27863735539325],
              [120.00426292419434, 30.278489111330895],
              [120.0058078765869, 30.27474587454245],
              [120.00555038452148, 30.2740416853303],
              [120.00417709350586, 30.274671749600145],
              [120.00306129455565, 30.27426406141678],
              [120.00310420989989, 30.273559868747853],
              [120.00340461730957, 30.27189202385299],
              [120.00319004058836, 30.271336069257153]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '仓前街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [119.97001647949219, 30.348768715781194],
              [119.96774196624757, 30.34862057777214],
              [119.96276378631592, 30.349546436649657],
              [119.958815574646, 30.35221286127295],
              [119.95370864868163, 30.353397915559906],
              [119.9479579925537, 30.351509228498994],
              [119.94843006134033, 30.351175926997886],
              [119.94709968566895, 30.346213303695375],
              [119.94808673858643, 30.341805986952004],
              [119.94654178619383, 30.33913927878137],
              [119.94868755340578, 30.336324341347755],
              [119.94787216186522, 30.332472190548227],
              [119.94602680206297, 30.32580464835327],
              [119.94431018829346, 30.317025025541852],
              [119.94564056396484, 30.311245603935003],
              [119.9461555480957, 30.304354309645788],
              [119.94791507720946, 30.29453523098803],
              [119.94555473327637, 30.292274851024256],
              [119.94782924652098, 30.287939222361807],
              [119.94564056396484, 30.283047513813557],
              [119.94688510894775, 30.281379830152893],
              [119.94628429412842, 30.27919326863264],
              [119.94770050048828, 30.277191966232778],
              [119.95285034179688, 30.276228361632498],
              [119.96932983398438, 30.281787488776338],
              [119.97113227844238, 30.27863735539325],
              [119.97010231018066, 30.275968928008236],
              [119.97336387634277, 30.275487120886563],
              [119.97396469116211, 30.273708120255886],
              [119.9770975112915, 30.272892734190627],
              [119.97662544250488, 30.271484324123932],
              [119.97915744781494, 30.271076622701518],
              [119.98091697692873, 30.269482864530396],
              [119.97739791870116, 30.269334606640896],
              [119.97632503509523, 30.26759255966803],
              [119.97593879699707, 30.265887547592687],
              [119.97130393981934, 30.265257426941197],
              [119.97396469116211, 30.261476618112596],
              [119.97344970703124, 30.258807724236515],
              [119.97186183929443, 30.259549090921954],
              [119.97040271759035, 30.258696518751023],
              [119.96799945831299, 30.25984563602913],
              [119.9656820297241, 30.2603275199185],
              [119.96387958526611, 30.25977149983629],
              [119.96199131011963, 30.259697363587474],
              [119.96169090270995, 30.257732732602136],
              [119.96383666992189, 30.258251695549834],
              [119.96323585510254, 30.254174055663515],
              [119.96323585510254, 30.250800607451477],
              [119.96606826782227, 30.249280664359304],
              [119.96654033660889, 30.251097178971605],
              [119.97194766998291, 30.253618000745274],
              [119.97379302978516, 30.254025774659755],
              [119.97366428375246, 30.255990479793873],
              [119.97606754302977, 30.25784393917894],
              [119.97581005096436, 30.25936374977526],
              [119.97872829437254, 30.258251695549834],
              [119.98035907745361, 30.258511175995373],
              [119.98246192932129, 30.257213766912315],
              [119.9847364425659, 30.257732732602136],
              [119.98301982879639, 30.260142180240866],
              [119.98229026794434, 30.25999390824693],
              [119.98417854309083, 30.261847292081125],
              [119.98585224151611, 30.260549927069945],
              [119.98482227325438, 30.263737707556317],
              [119.98812675476076, 30.264849699658892],
              [119.98173236846924, 30.268333860030484],
              [119.98525142669678, 30.268407989758884],
              [119.9897575378418, 30.266628860828856],
              [119.99113082885742, 30.267407233702833],
              [119.99160289764404, 30.268963960937622],
              [120.00040054321288, 30.27100249498824],
              [120.00319004058836, 30.271299005505462],
              [120.00336170196533, 30.271854960311238],
              [120.00310420989989, 30.2742269987707],
              [120.00417709350586, 30.274597624601867],
              [120.00537872314453, 30.274152873436527],
              [120.00576496124266, 30.27474587454245],
              [120.00430583953857, 30.278452050280304],
              [120.00233173370361, 30.278674416373867],
              [120.0026321411133, 30.282565741445246],
              [120.01044273376463, 30.285233989446166],
              [120.01112937927245, 30.28593809834516],
              [120.0104856491089, 30.287235127825305],
              [120.00902652740477, 30.288198624338175],
              [120.00778198242186, 30.288420968343395],
              [120.00730991363525, 30.290051475649328],
              [120.00786781311037, 30.29094083184721],
              [120.00666618347168, 30.29112611337344],
              [120.00627994537354, 30.292311906853516],
              [120.00469207763672, 30.294349955901886],
              [120.00507831573485, 30.29516516366276],
              [120.02503395080566, 30.30224236441206],
              [120.02623558044432, 30.30239057257944],
              [120.0286817550659, 30.30331686854957],
              [120.02803802490233, 30.304428412161137],
              [120.02602100372314, 30.30605865332703],
              [120.0269651412964, 30.311356749872548],
              [120.02177238464355, 30.311986574471113],
              [120.02057075500488, 30.31532087255509],
              [120.02378940582275, 30.31609885911712],
              [120.02344608306883, 30.320099835292137],
              [120.0222873687744, 30.323952472742917],
              [120.02344608306883, 30.32680480862026],
              [120.02185821533203, 30.32695297964306],
              [120.02168655395509, 30.33017564393093],
              [120.01765251159667, 30.32999043621176],
              [120.0176954269409, 30.332398109239953],
              [120.01310348510741, 30.3324351499011],
              [120.01052856445314, 30.331694334016003],
              [120.00709533691405, 30.331842497641368],
              [120.00778198242186, 30.32917551808637],
              [120.00864028930664, 30.326508465902158],
              [120.0088119506836, 30.323693165362656],
              [120.00658035278322, 30.321174143661388],
              [120.00520706176756, 30.317321396948888],
              [120.00040054321288, 30.317765952378565],
              [119.99885559082031, 30.322507751454424],
              [119.99628067016602, 30.32132232320159],
              [119.99473571777345, 30.317173211357414],
              [119.9959373474121, 30.31509858954571],
              [119.99044418334961, 30.31554315506024],
              [119.99010086059572, 30.319988699271207],
              [119.99198913574217, 30.32132232320159],
              [119.99113082885742, 30.324434041770782],
              [119.99027252197266, 30.326360294206886],
              [119.98683929443361, 30.331990661042568],
              [119.98374938964844, 30.332879636742014],
              [119.97791290283203, 30.33036085129983],
              [119.9765396118164, 30.32769383139479],
              [119.97465133666992, 30.329027350425925],
              [119.97413635253905, 30.33036085129983],
              [119.97276306152344, 30.331842497641368],
              [119.97379302978516, 30.333916764857815],
              [119.97053146362305, 30.334213085158982],
              [119.97035980224608, 30.337768858825104],
              [119.97224807739256, 30.338065167468166],
              [119.97241973876953, 30.34088005484784],
              [119.97173309326173, 30.34369486128568],
              [119.97035980224608, 30.3463614453484],
              [119.97001647949219, 30.348768715781194]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '良渚街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.06277799606325, 30.42978508071243],
              [120.05756378173828, 30.429285528447902],
              [120.04966735839844, 30.427435312590944],
              [120.04185676574706, 30.42728729380636],
              [120.03610610961913, 30.425437040049022],
              [120.03576278686523, 30.428989496269086],
              [120.03893852233887, 30.429137512470803],
              [120.0398826599121, 30.43357789407897],
              [120.03859519958495, 30.435279986762662],
              [120.03584861755371, 30.43513197988251],
              [120.03026962280275, 30.436760043209542],
              [120.02949714660643, 30.438462080352835],
              [120.02580642700195, 30.438462080352835],
              [120.02366065979005, 30.435946014943585],
              [120.0142192840576, 30.435872012037002],
              [120.00915527343749, 30.43772206785397],
              [120.00872611999512, 30.43949808841618],
              [120.00288963317871, 30.445047944166763],
              [119.99327659606932, 30.44460396733306],
              [119.99035835266113, 30.44571390562601],
              [119.98323440551758, 30.445787901062868],
              [119.98297691345215, 30.443198027353244],
              [119.97877120971678, 30.440608084840253],
              [119.97748374938963, 30.4407560834087],
              [119.97336387634277, 30.437796069356576],
              [119.97216224670409, 30.434761961699344],
              [119.97241973876953, 30.432467817628726],
              [119.96975898742677, 30.431579747371522],
              [119.96726989746094, 30.43194977762805],
              [119.96632575988768, 30.431209715711173],
              [119.9692440032959, 30.427953376568325],
              [119.97053146362305, 30.424696928720373],
              [119.9747371673584, 30.42417884744963],
              [119.97645378112793, 30.42010811316847],
              [119.9728488922119, 30.420848259306208],
              [119.97525215148926, 30.41847977190404],
              [119.97550964355467, 30.415297026433763],
              [119.97920036315918, 30.41633328054082],
              [119.98074531555174, 30.412706343030358],
              [119.9769687652588, 30.407080622305823],
              [119.97868537902832, 30.405896218737734],
              [119.98083114624022, 30.408783177262148],
              [119.98366355895996, 30.411373964790272],
              [119.9933624267578, 30.410115590864454],
              [119.99164581298828, 30.4050079066326],
              [119.99799728393556, 30.404785827343524],
              [119.99713897705077, 30.402565006671665],
              [119.99876976013184, 30.400566224881388],
              [119.99945640563965, 30.397679023403565],
              [120.0033187866211, 30.39456963405082],
              [120.00537872314453, 30.396716603943425],
              [120.01027107238768, 30.397975150560285],
              [120.0131893157959, 30.403379313449484],
              [120.01756668090819, 30.403305285841213],
              [120.01739501953125, 30.400640254566156],
              [120.0212574005127, 30.39760499147409],
              [120.0212574005127, 30.394125427491478],
              [120.01842498779298, 30.39064573955672],
              [120.01876831054688, 30.389313060289677],
              [120.01640796661378, 30.3840562036929],
              [120.01203060150146, 30.382501304588832],
              [120.01773834228517, 30.378836087386702],
              [120.01572132110594, 30.377318128902335],
              [120.00885486602783, 30.377984552603245],
              [120.00344753265381, 30.375244781665323],
              [120.01014232635498, 30.3726160103392],
              [120.00726699829102, 30.37061661580835],
              [120.0089406967163, 30.367580420003282],
              [120.0074815750122, 30.36709906322986],
              [120.00563621520996, 30.364988470944652],
              [120.00456333160399, 30.36217427704045],
              [120.00155925750732, 30.363248123742522],
              [119.99834060668945, 30.36091526934059],
              [119.9959373474121, 30.363396239603716],
              [119.99113082885742, 30.36095229921014],
              [119.98864173889159, 30.35880454360341],
              [119.9862813949585, 30.358656420788783],
              [119.98336315155028, 30.35806392728733],
              [119.98267650604247, 30.355545789870668],
              [119.98301982879639, 30.352101761697664],
              [119.98061656951904, 30.3511388934277],
              [119.97220516204833, 30.34825023176839],
              [119.97001647949219, 30.348842784701638],
              [119.97035980224608, 30.346287374549927],
              [119.9716901779175, 30.343768934046224],
              [119.97237682342531, 30.340954129738492],
              [119.97216224670409, 30.338102205985464],
              [119.97040271759035, 30.337768858825104],
              [119.97053146362305, 30.334287165094146],
              [119.97379302978516, 30.333953804944503],
              [119.97280597686766, 30.33173137494335],
              [119.97413635253905, 30.33028676839431],
              [119.97456550598145, 30.328990308475788],
              [119.97649669647217, 30.327767916261745],
              [119.97791290283203, 30.3304349341493],
              [119.9837064743042, 30.33291667722103],
              [119.98679637908934, 30.3320647426591],
              [119.99005794525145, 30.32661959452652],
              [119.99108791351318, 30.32447108544409],
              [119.99194622039794, 30.32132232320159],
              [119.99005794525145, 30.31995165390289],
              [119.99040126800537, 30.31554315506024],
              [119.9959373474121, 30.31509858954571],
              [119.99473571777345, 30.317173211357414],
              [119.99619483947754, 30.321359368051603],
              [119.99894142150879, 30.322507751454424],
              [120.00035762786865, 30.317802998573317],
              [120.00507831573485, 30.31728435057203],
              [120.00653743743895, 30.321248233459503],
              [120.00872611999512, 30.32373020931616],
              [120.00855445861818, 30.32695297964306],
              [120.00709533691405, 30.331842497641368],
              [120.01078605651855, 30.3317684158567],
              [120.01293182373045, 30.33250923118136],
              [120.01782417297363, 30.33236106856479],
              [120.02606391906737, 30.33325004090155],
              [120.0270938873291, 30.337028083293944],
              [120.02572059631348, 30.34139857790521],
              [120.02554893493651, 30.345694806143864],
              [120.02400398254395, 30.34828726643185],
              [120.03078460693358, 30.35013898173406],
              [120.03310203552246, 30.351842528864772],
              [120.03799438476561, 30.350953725366434],
              [120.04280090332031, 30.351694395509025],
              [120.04468917846681, 30.35013898173406],
              [120.04657745361327, 30.35406450228875],
              [120.04855155944823, 30.35332385008749],
              [120.05009651184082, 30.3499167777479],
              [120.05404472351074, 30.351472195054935],
              [120.06056785583496, 30.351916595458526],
              [120.06091117858885, 30.35332385008749],
              [120.06537437438965, 30.352657258312558],
              [120.06503105163573, 30.354953277529233],
              [120.06726264953613, 30.35547172602425],
              [120.0692367553711, 30.350361185215682],
              [120.07241249084473, 30.350287117444537],
              [120.0724983215332, 30.34887981914083],
              [120.0761032104492, 30.348065058240945],
              [120.07490158081053, 30.344880018727338],
              [120.076961517334, 30.344731874831947],
              [120.08005142211913, 30.342583763150845],
              [120.07979393005371, 30.338657782063795],
              [120.08279800415038, 30.338731858636045],
              [120.08176803588867, 30.33621322373595],
              [120.08477210998534, 30.3320647426591],
              [120.08777618408203, 30.331842497641368],
              [120.08691787719727, 30.332879636742014],
              [120.09000778198241, 30.334953881988564],
              [120.09138107299806, 30.33347228272473],
              [120.0970458984375, 30.335990988134007],
              [120.09876251220703, 30.338657782063795],
              [120.09790420532225, 30.34088005484784],
              [120.10202407836914, 30.34162080123184],
              [120.10477066040039, 30.340583754724722],
              [120.10648727416991, 30.34354671559643],
              [120.10820388793945, 30.342657836752227],
              [120.10837554931639, 30.339991151787938],
              [120.11198043823242, 30.339250393072167],
              [120.1138687133789, 30.337620704167275],
              [120.12107849121094, 30.337620704167275],
              [120.12313842773438, 30.33895408801641],
              [120.12382507324219, 30.336583615284862],
              [120.12519836425781, 30.339546697231103],
              [120.1296615600586, 30.342361542010376],
              [120.12983322143555, 30.341176354074094],
              [120.13446807861328, 30.34028745370476],
              [120.13704299926758, 30.34043560432685],
              [120.1348114013672, 30.354212632056196],
              [120.13103485107422, 30.360433879760766],
              [120.12880325317381, 30.37405999207125],
              [120.12948989868163, 30.382649391283703],
              [120.12444734573363, 30.387147417709254],
              [120.12425422668456, 30.390830832461607],
              [120.12343883514403, 30.393366569946156],
              [120.12221574783325, 30.39327402593975],
              [120.1192545890808, 30.393070428817108],
              [120.11674404144287, 30.392996393394547],
              [120.11637926101685, 30.393329552354135],
              [120.11369705200194, 30.392977884530154],
              [120.11292457580565, 30.39558759979691],
              [120.11013507843018, 30.395032347068735],
              [120.10685205459596, 30.394106918840997],
              [120.10730266571045, 30.39168225530725],
              [120.10653018951417, 30.391904364394435],
              [120.1054573059082, 30.391589709705197],
              [120.10335445404053, 30.39151567316046],
              [120.10183095932007, 30.391737782626386],
              [120.1018738746643, 30.39047915564251],
              [120.1018738746643, 30.388905849109925],
              [120.10050058364868, 30.38957219379311],
              [120.10009288787842, 30.389664741306344],
              [120.09987831115721, 30.39123803561794],
              [120.09781837463377, 30.391256544811966],
              [120.09730339050294, 30.392385599017587],
              [120.09562969207764, 30.392367090037446],
              [120.09541511535645, 30.39305191996671],
              [120.09318351745604, 30.393218499493845],
              [120.09078025817873, 30.392959375662247],
              [120.09069442749022, 30.391571200574298],
              [120.08936405181883, 30.391534182301918],
              [120.08936405181883, 30.39064573955672],
              [120.08771181106566, 30.390312571444234],
              [120.08453607559204, 30.38979430767759],
              [120.08136034011841, 30.38962772231157],
              [120.08105993270873, 30.390997415776145],
              [120.08033037185668, 30.39092337878254],
              [120.07880687713622, 30.39040511825612],
              [120.07876396179198, 30.391404618238123],
              [120.0770902633667, 30.391108471161388],
              [120.0730776786804, 30.390294062071334],
              [120.07320642471312, 30.389331569848448],
              [120.07483720779419, 30.382519815437966],
              [120.07224082946776, 30.381945977484552],
              [120.07189750671387, 30.38290854245975],
              [120.07264852523805, 30.38326024652803],
              [120.0724983215332, 30.38562958831637],
              [120.07333517074586, 30.386018302967756],
              [120.0724983215332, 30.38614787417459],
              [120.07256269454955, 30.38701784782787],
              [120.07101774215698, 30.387202947605807],
              [120.07155418395995, 30.387832284227873],
              [120.07138252258301, 30.388887339470518],
              [120.07146835327147, 30.3897017602871],
              [120.07033109664917, 30.39094188803621],
              [120.07052421569824, 30.39257068862602],
              [120.06904363632202, 30.393366569946156],
              [120.07166147232056, 30.39558759979691],
              [120.07114648818968, 30.3974014033787],
              [120.06857156753539, 30.396957209697554],
              [120.06591081619261, 30.39579119167304],
              [120.06500959396362, 30.398604417787098],
              [120.06713390350342, 30.399252188638428],
              [120.06912946701048, 30.39936323463867],
              [120.06902217864992, 30.401084431496187],
              [120.06719827651976, 30.400788313767322],
              [120.06691932678221, 30.402028300764393],
              [120.06657600402832, 30.402120836476087],
              [120.06644725799562, 30.40287962600446],
              [120.06541728973389, 30.402750076990188],
              [120.06481647491455, 30.404693294157315],
              [120.06470918655394, 30.405489076692756],
              [120.06625413894653, 30.40597024438167],
              [120.06513833999634, 30.407765349064128],
              [120.06569623947144, 30.40826501150554],
              [120.06513833999634, 30.40928283449417],
              [120.06537437438965, 30.40959743218008],
              [120.06513833999634, 30.4114109755425],
              [120.06440877914429, 30.411281437848253],
              [120.06417274475098, 30.412872889031593],
              [120.06470918655394, 30.413372525330324],
              [120.06335735321045, 30.417054951008694],
              [120.06288528442381, 30.418942371617288],
              [120.06243467330933, 30.418942371617288],
              [120.06241321563719, 30.42012661689034],
              [120.06269216537474, 30.420385668628022],
              [120.06258487701416, 30.42158839982978],
              [120.06273508071898, 30.421847447686677],
              [120.06226301193237, 30.422124998198708],
              [120.06200551986693, 30.423938308781622],
              [120.06389379501341, 30.424400882616833],
              [120.06357192993163, 30.425862601520613],
              [120.06191968917845, 30.425585061640994],
              [120.06174802780151, 30.42626965858249],
              [120.06082534790039, 30.426306663685725],
              [120.06091117858885, 30.427860865345576],
              [120.06305694580077, 30.428415931366057],
              [120.06277799606325, 30.42978508071243]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '仁和街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.12331008911133, 30.393607183952476],
              [120.12331008911133, 30.400418165343517],
              [120.12399673461914, 30.40693257264556],
              [120.12468338012695, 30.411522007715064],
              [120.12142181396483, 30.41374262464341],
              [120.1157569885254, 30.413150465068853],
              [120.1157569885254, 30.415519081811507],
              [120.11198043823242, 30.41611122701556],
              [120.11009216308594, 30.419960083267238],
              [120.11198043823242, 30.42218050820639],
              [120.11198043823242, 30.424696928720373],
              [120.11592864990234, 30.424992973925598],
              [120.11970520019533, 30.429433544200425],
              [120.12468338012695, 30.431801765693898],
              [120.13120651245117, 30.429285528447902],
              [120.13463973999022, 30.43194977762805],
              [120.13614177703859, 30.433762905592292],
              [120.14214992523193, 30.438795084145067],
              [120.14489650726318, 30.443198027353244],
              [120.14545440673828, 30.451744349467532],
              [120.14511108398436, 30.459069171971926],
              [120.14545440673828, 30.469389578125064],
              [120.1476001739502, 30.470277303920717],
              [120.14742851257324, 30.4706471872806],
              [120.14657020568846, 30.477230876009543],
              [120.14802932739258, 30.477230876009543],
              [120.14811515808105, 30.48052255343327],
              [120.14657020568846, 30.4803376306861],
              [120.14639854431151, 30.482852549948607],
              [120.14120578765868, 30.483444286214393],
              [120.14253616333006, 30.481853986842722],
              [120.13807296752928, 30.480559537940554],
              [120.13807296752928, 30.48218684234958],
              [120.12639999389648, 30.47848838389355],
              [120.12549877166747, 30.479523966425212],
              [120.12258052825928, 30.479043161619803],
              [120.12107849121094, 30.480226676869176],
              [120.12129306793213, 30.483074451469843],
              [120.11944770812987, 30.480744460266187],
              [120.11554241180419, 30.48081842909806],
              [120.11768817901613, 30.478192501146836],
              [120.11481285095215, 30.474530877736747],
              [120.10953426361084, 30.47663910197322],
              [120.1058864593506, 30.479265071825047],
              [120.10713100433348, 30.483555236363735],
              [120.10558605194092, 30.484516799026867],
              [120.104341506958, 30.482889533570603],
              [120.09781837463377, 30.48396205249595],
              [120.09678840637207, 30.484775679659258],
              [120.09593009948729, 30.48947239441052],
              [120.10052204132079, 30.495611065607424],
              [120.09541511535645, 30.497275096493144],
              [120.076961517334, 30.497903722975742],
              [120.07524490356445, 30.494945445283456],
              [120.06872177124023, 30.497570921226284],
              [120.06649017333984, 30.490803705389606],
              [120.06597518920898, 30.48399903569638],
              [120.06498813629149, 30.481077319567042],
              [120.06056785583496, 30.476232255236713],
              [120.05958080291748, 30.47345825490293],
              [120.06031036376952, 30.465912574179665],
              [120.05945205688477, 30.457737427017374],
              [120.06292819976805, 30.451300403134887],
              [120.06820678710936, 30.44575090335145],
              [120.06820678710936, 30.44256904763992],
              [120.06631851196288, 30.43827707775461],
              [120.06447315216066, 30.436168023326395],
              [120.06228446960448, 30.43546499504698],
              [120.06473064422607, 30.431283722155552],
              [120.06443023681642, 30.429951597565413],
              [120.06284236907959, 30.429766578822335],
              [120.06305694580077, 30.42836042490612],
              [120.06082534790039, 30.427879367597136],
              [120.06082534790039, 30.42628816113585],
              [120.06176948547362, 30.42628816113585],
              [120.06194114685059, 30.42554805626406],
              [120.06352901458739, 30.425807093607872],
              [120.06389379501341, 30.424400882616833],
              [120.06199479103088, 30.42394756027982],
              [120.06224155426024, 30.42213424986886],
              [120.06273508071898, 30.421847447686677],
              [120.06257414817809, 30.421597651550794],
              [120.06269216537474, 30.420385668628022],
              [120.06240248680113, 30.420135868749952],
              [120.06243467330933, 30.418942371617288],
              [120.06289601325987, 30.418942371617288],
              [120.0633680820465, 30.417064203159544],
              [120.06471991539001, 30.413363272829514],
              [120.06417274475098, 30.412891394125328],
              [120.06439805030823, 30.411290690546412],
              [120.06512761116028, 30.411401722855764],
              [120.06537437438965, 30.409588179321446],
              [120.06512761116028, 30.409273581605685],
              [120.06570696830748, 30.408274264489595],
              [120.06512761116028, 30.407756096031836],
              [120.06627559661864, 30.405951737975947],
              [120.06470918655394, 30.405489076692756],
              [120.06481647491455, 30.40471180080158],
              [120.06540656089783, 30.402759330496917],
              [120.06646871566772, 30.402898132992476],
              [120.06656527519227, 30.40213934360792],
              [120.06690859794617, 30.4020190471884],
              [120.06719827651976, 30.400788313767322],
              [120.06900072097778, 30.401084431496187],
              [120.06912946701048, 30.39936323463867],
              [120.0671124458313, 30.399270696313906],
              [120.06500959396362, 30.398604417787098],
              [120.06591081619261, 30.39579119167304],
              [120.06858229637147, 30.396947955641043],
              [120.07115721702577, 30.39741065739226],
              [120.07168292999269, 30.395578345610637],
              [120.06903290748596, 30.393366569946156],
              [120.0705349445343, 30.39257068862602],
              [120.07033109664917, 30.390951142661706],
              [120.0714898109436, 30.389692505543234],
              [120.07137179374695, 30.388905849109925],
              [120.07156491279602, 30.387832284227873],
              [120.07099628448488, 30.38719369262523],
              [120.07254123687744, 30.38701784782787],
              [120.0724983215332, 30.38615712925422],
              [120.07332444190978, 30.386018302967756],
              [120.0724983215332, 30.385648098572933],
              [120.0726592540741, 30.38326024652803],
              [120.07189750671387, 30.38290854245975],
              [120.07225155830383, 30.381964488438875],
              [120.07480502128601, 30.382519815437966],
              [120.07319569587708, 30.389322315069496],
              [120.0730776786804, 30.390294062071334],
              [120.07869958877563, 30.391441636559613],
              [120.07878541946411, 30.390442136956324],
              [120.08033037185668, 30.39092337878254],
              [120.08103847503662, 30.391015925015793],
              [120.08136034011841, 30.389664741306344],
              [120.08460044860838, 30.38975728873192],
              [120.08934259414673, 30.390664248863008],
              [120.08934259414673, 30.39151567316046],
              [120.09071588516235, 30.391608218832634],
              [120.09078025817873, 30.392977884530154],
              [120.09322643280028, 30.393237008312667],
              [120.09543657302855, 30.393070428817108],
              [120.09565114974974, 30.392422616967334],
              [120.09728193283081, 30.39234858105382],
              [120.09783983230591, 30.39127505400253],
              [120.09992122650145, 30.39123803561794],
              [120.10002851486206, 30.389646231810726],
              [120.1004147529602, 30.38957219379311],
              [120.10193824768068, 30.388905849109925],
              [120.10185241699217, 30.39177480082162],
              [120.10329008102417, 30.391534182301918],
              [120.10537147521973, 30.391589709705197],
              [120.10644435882567, 30.391904364394435],
              [120.10721683502199, 30.391737782626386],
              [120.10685205459596, 30.394069901529523],
              [120.11015653610231, 30.395087872483582],
              [120.11294603347778, 30.39556909142347],
              [120.1136541366577, 30.392996393394547],
              [120.11633634567261, 30.393348061151887],
              [120.11680841445923, 30.392977884530154],
              [120.11976957321166, 30.393107446507322],
              [120.12341737747192, 30.393385078736916],
              [120.12331008911133, 30.393607183952476]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '崇贤街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.13459682464598, 30.43187577168905],
              [120.13116359710693, 30.429285528447902],
              [120.12468338012695, 30.431801765693898],
              [120.11961936950682, 30.429433544200425],
              [120.11584281921387, 30.425029979513063],
              [120.11198043823242, 30.42465992300655],
              [120.11193752288818, 30.422291528126998],
              [120.1100492477417, 30.419960083267238],
              [120.1120662689209, 30.416037209061518],
              [120.1157569885254, 30.415519081811507],
              [120.11571407318117, 30.41318747514754],
              [120.12155055999754, 30.41374262464341],
              [120.12468338012695, 30.41155901841116],
              [120.12326717376709, 30.400529210017975],
              [120.12335300445557, 30.39353314893672],
              [120.12425422668456, 30.390830832461607],
              [120.12455463409424, 30.387202947605807],
              [120.12961864471436, 30.382649391283703],
              [120.13107776641846, 30.38253832628359],
              [120.13416767120363, 30.380391044805073],
              [120.13914585113525, 30.380242954688203],
              [120.1395320892334, 30.376836820070377],
              [120.14262199401854, 30.376836820070377],
              [120.14622688293457, 30.37565204977189],
              [120.14618396759033, 30.377725388370592],
              [120.14923095703124, 30.380354022296903],
              [120.15309333801268, 30.38020593212393],
              [120.15309333801268, 30.375763122597387],
              [120.15918731689453, 30.37539287935494],
              [120.15910148620604, 30.372430882933667],
              [120.16785621643066, 30.371023903195617],
              [120.17060279846191, 30.372430882933667],
              [120.1710319519043, 30.373911892362337],
              [120.16871452331543, 30.3744302403619],
              [120.17189025878906, 30.375763122597387],
              [120.17326354980469, 30.37494858561298],
              [120.17446517944336, 30.37198657573015],
              [120.17781257629395, 30.376725748464917],
              [120.18485069274902, 30.382797477754156],
              [120.18545150756837, 30.38575916003863],
              [120.19163131713867, 30.39249665282474],
              [120.18948554992676, 30.398197245338586],
              [120.19454956054686, 30.399011588538055],
              [120.19472122192383, 30.402120836476087],
              [120.1962661743164, 30.402046807913752],
              [120.19678115844727, 30.39575417499984],
              [120.20055770874025, 30.39493980464052],
              [120.20167350769042, 30.39220050905845],
              [120.20450592041017, 30.389683250798477],
              [120.21008491516113, 30.389387098503647],
              [120.21652221679688, 30.38849863623295],
              [120.21356105804442, 30.383797055560315],
              [120.2098274230957, 30.38283449933673],
              [120.2044630050659, 30.379687614751504],
              [120.20922660827637, 30.378465855783713],
              [120.21278858184814, 30.38065020196967],
              [120.21347522735596, 30.382797477754156],
              [120.21583557128906, 30.38490768557554],
              [120.21866798400879, 30.385648098572933],
              [120.22261619567871, 30.38872075255806],
              [120.22613525390624, 30.38997940219558],
              [120.22798061370848, 30.392755777883774],
              [120.22823810577394, 30.394125427491478],
              [120.22768020629883, 30.394717702455036],
              [120.22931098937987, 30.396309423624672],
              [120.2297830581665, 30.39838232393472],
              [120.2301263809204, 30.399714879473144],
              [120.2286672592163, 30.401639649817636],
              [120.22909641265869, 30.403194244323544],
              [120.22759437561035, 30.40400854585396],
              [120.22948265075682, 30.405674141469124],
              [120.22793769836426, 30.406747510254558],
              [120.22669315338133, 30.408153975628448],
              [120.2240753173828, 30.407080622305823],
              [120.22235870361328, 30.40630335908488],
              [120.21896839141844, 30.40671049773425],
              [120.21944046020506, 30.40874616551359],
              [120.21978378295898, 30.4114109755425],
              [120.21883964538573, 30.411966135142258],
              [120.21986961364746, 30.414445809472067],
              [120.21798133850098, 30.41503796118783],
              [120.21815299987792, 30.417591574307398],
              [120.21416187286376, 30.417591574307398],
              [120.20467758178711, 30.417073455309502],
              [120.2030038833618, 30.413076444869443],
              [120.19476413726807, 30.409190305570057],
              [120.1893997192383, 30.409930534507197],
              [120.19004344940187, 30.415185998555405],
              [120.18875598907472, 30.419256938169692],
              [120.1847219467163, 30.41888685976748],
              [120.17566680908203, 30.418775835973133],
              [120.17613887786864, 30.42173642726079],
              [120.17197608947754, 30.425881104151195],
              [120.1662254333496, 30.425140996191313],
              [120.15974521636961, 30.426584201512433],
              [120.15549659729004, 30.426214150901348],
              [120.14983177185057, 30.427472317252004],
              [120.14549732208252, 30.42695425071985],
              [120.13747215270998, 30.430136615957537],
              [120.13459682464598, 30.43187577168905]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '星桥街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.22647857666016, 30.40826501150554],
              [120.22772312164307, 30.406895560195426],
              [120.22943973541258, 30.405637128541905],
              [120.22763729095459, 30.404045559398508],
              [120.22905349731445, 30.403268272016035],
              [120.22879600524901, 30.401639649817636],
              [120.23008346557616, 30.39978890980326],
              [120.2293539047241, 30.396309423624672],
              [120.22772312164307, 30.39475471952102],
              [120.22823810577394, 30.39416244478191],
              [120.2281093597412, 30.392792795693246],
              [120.23102760314941, 30.39094188803621],
              [120.23343086242674, 30.391904364394435],
              [120.23729324340819, 30.388424597345693],
              [120.23883819580078, 30.388794791220896],
              [120.2409839630127, 30.386277445209622],
              [120.23257255554198, 30.375911219501713],
              [120.23471832275389, 30.373837842423747],
              [120.23686408996582, 30.374874536459657],
              [120.24201393127443, 30.370357432042177],
              [120.24072647094728, 30.367691501999133],
              [120.2463912963867, 30.367173118272323],
              [120.24587631225585, 30.364729272260305],
              [120.2504253387451, 30.36709906322986],
              [120.24982452392577, 30.370061221182418],
              [120.25420188903809, 30.37198657573015],
              [120.25763511657713, 30.376651700657806],
              [120.2632999420166, 30.38376003434241],
              [120.27059555053711, 30.392422616967334],
              [120.27626037597656, 30.3987894956116],
              [120.27145385742186, 30.401750693103132],
              [120.26913642883301, 30.406562447512755],
              [120.25823593139647, 30.402490978446036],
              [120.25823593139647, 30.405304011565615],
              [120.25806427001953, 30.408857200717147],
              [120.2618408203125, 30.409893523193663],
              [120.26767730712892, 30.411818092891057],
              [120.26424407958983, 30.414334780625396],
              [120.2618408203125, 30.417591574307398],
              [120.25651931762695, 30.420996287860056],
              [120.24930953979492, 30.42158839982978],
              [120.24518966674803, 30.420700230527785],
              [120.24484634399414, 30.41596319105137],
              [120.24192810058592, 30.41699943808526],
              [120.23677825927736, 30.417887641071157],
              [120.23591995239256, 30.416555333560858],
              [120.22974014282227, 30.41507497055077],
              [120.22476196289061, 30.41374262464341],
              [120.22270202636717, 30.411077878267125],
              [120.22647857666016, 30.40826501150554]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '乔司街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.27626037597656, 30.399011588538055],
              [120.25403022766113, 30.37183847288025],
              [120.24973869323729, 30.37013527398147],
              [120.25051116943358, 30.367173118272323],
              [120.2457046508789, 30.36465521536717],
              [120.24579048156737, 30.363692470653177],
              [120.24742126464844, 30.359767336431304],
              [120.24295806884766, 30.358137989171265],
              [120.24476051330566, 30.351324061138545],
              [120.24046897888182, 30.346954009718157],
              [120.2318000793457, 30.342657836752227],
              [120.23411750793458, 30.340583754724722],
              [120.24106979370117, 30.342880057220047],
              [120.24450302124022, 30.338731858636045],
              [120.25068283081055, 30.339917076168582],
              [120.25308609008788, 30.337472549285252],
              [120.25643348693846, 30.338731858636045],
              [120.25943756103516, 30.338065167468166],
              [120.26201248168945, 30.338657782063795],
              [120.26261329650879, 30.337694781524203],
              [120.25823593139647, 30.334731643528194],
              [120.26115417480469, 30.3317684158567],
              [120.26450157165527, 30.326508465902158],
              [120.26793479919434, 30.328434677542585],
              [120.26656150817871, 30.33147208815761],
              [120.27780532836914, 30.337991090391483],
              [120.28209686279295, 30.329101434284162],
              [120.27797698974608, 30.324137691879947],
              [120.27291297912599, 30.321248233459503],
              [120.27308464050293, 30.320285061713502],
              [120.29196739196776, 30.317691859947004],
              [120.29162406921387, 30.31532087255509],
              [120.2958297729492, 30.314802211415493],
              [120.29591560363768, 30.31695093255003],
              [120.29900550842284, 30.31109740915552],
              [120.30003547668457, 30.320433242598465],
              [120.30012130737305, 30.324952651922324],
              [120.29531478881837, 30.324804477873492],
              [120.29591560363768, 30.318136413695846],
              [120.29385566711424, 30.317840044754075],
              [120.29359817504883, 30.327175235756982],
              [120.2973747253418, 30.337768858825104],
              [120.29934883117676, 30.34169487556195],
              [120.30175209045409, 30.3439170793991],
              [120.3009796142578, 30.347546570500022],
              [120.30209541320801, 30.348361335716685],
              [120.30029296875, 30.351990661996226],
              [120.29600143432617, 30.361322597134567],
              [120.29205322265625, 30.360581999883827],
              [120.28913497924803, 30.367543392643316],
              [120.2896499633789, 30.378058599400642],
              [120.2899932861328, 30.385907241796573],
              [120.29188156127928, 30.39064573955672],
              [120.28947830200195, 30.391534182301918],
              [120.28535842895506, 30.390793813908672],
              [120.28175354003906, 30.393681218912075],
              [120.27969360351562, 30.397530959488513],
              [120.28115272521973, 30.399751894645224],
              [120.27926445007323, 30.40219486498232],
              [120.27626037597656, 30.399011588538055]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '南苑街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.26922225952148, 30.406562447512755],
              [120.27153968811034, 30.401676664260172],
              [120.27621746063234, 30.39882651113443],
              [120.27926445007323, 30.402157850736238],
              [120.28110980987549, 30.399714879473144],
              [120.27973651885986, 30.397530959488513],
              [120.2817964553833, 30.393570166451592],
              [120.28535842895506, 30.390830832461607],
              [120.28943538665771, 30.391534182301918],
              [120.29188156127928, 30.39064573955672],
              [120.28995037078856, 30.3859812825914],
              [120.28917789459227, 30.367580420003282],
              [120.29201030731203, 30.360581999883827],
              [120.29595851898195, 30.361285567405215],
              [120.30218124389648, 30.348361335716685],
              [120.30720233917236, 30.35058338819269],
              [120.30909061431886, 30.3499167777479],
              [120.31258821487425, 30.351583295345055],
              [120.31902551651001, 30.352916488986896],
              [120.3253126144409, 30.35328681733025],
              [120.326771736145, 30.35678635096325],
              [120.32853126525879, 30.358748997574214],
              [120.33164262771605, 30.359526639112747],
              [120.33211469650269, 30.36234090919808],
              [120.33479690551758, 30.360267244354237],
              [120.33938884735107, 30.363155551215367],
              [120.34095525741576, 30.365840118927665],
              [120.34477472305296, 30.367672988341923],
              [120.34548282623291, 30.36946879677073],
              [120.34181356430054, 30.37331949128317],
              [120.34162044525146, 30.37620741263726],
              [120.33790826797485, 30.375800146844508],
              [120.33674955368042, 30.373911892362337],
              [120.32951831817628, 30.376855331992353],
              [120.32398223876952, 30.37859543700428],
              [120.32333850860594, 30.37696640345057],
              [120.3194761276245, 30.378873110469865],
              [120.31840324401855, 30.38248279373621],
              [120.31932592391969, 30.383908119129863],
              [120.31780242919922, 30.386610627082103],
              [120.3189182281494, 30.38866522352412],
              [120.314884185791, 30.395624616533215],
              [120.3128457069397, 30.39421797069127],
              [120.30606508255003, 30.393255517127976],
              [120.3062582015991, 30.397438419427623],
              [120.31078577041626, 30.400399657885515],
              [120.31151533126831, 30.40313872351737],
              [120.31314611434935, 30.3995298034023],
              [120.3164291381836, 30.401528606405883],
              [120.3169870376587, 30.402898132992476],
              [120.32196521759033, 30.404748814079547],
              [120.32132148742676, 30.40822799956053],
              [120.32454013824463, 30.411966135142258],
              [120.32617092132567, 30.41129994324368],
              [120.32866001129149, 30.4154450634084],
              [120.33286571502686, 30.41596319105137],
              [120.33342361450197, 30.4190348912968],
              [120.33479690551758, 30.419849060693945],
              [120.33252239227294, 30.421773434083455],
              [120.33269405364989, 30.424696928720373],
              [120.33067703247069, 30.427102270009787],
              [120.33423900604248, 30.429581559728298],
              [120.33668518066405, 30.42965556740803],
              [120.33569812774658, 30.433133865015062],
              [120.34029006958008, 30.433984918944986],
              [120.33114910125732, 30.433429884615624],
              [120.32578468322754, 30.43465095597065],
              [120.3257417678833, 30.43639003120375],
              [120.32312393188477, 30.43609402058828],
              [120.3220510482788, 30.439461088317767],
              [120.32097816467285, 30.435798009074265],
              [120.31977653503418, 30.433466887002535],
              [120.3154420852661, 30.433133865015062],
              [120.31063556671143, 30.43109870593931],
              [120.30861854553223, 30.43080267926336],
              [120.30801773071289, 30.427435312590944],
              [120.3046703338623, 30.424104835614955],
              [120.29806137084961, 30.42247656104726],
              [120.28990745544432, 30.41692542080486],
              [120.28106689453125, 30.410485702526568],
              [120.26922225952148, 30.406562447512755]
            ]
          ]
        }
      },
      {
        type: 'Feature',
        properties: {
          name: '临平街道'
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [120.26634693145753, 30.47726786176739],
              [120.25918006896973, 30.477304847511174],
              [120.25836467742919, 30.474271969858705],
              [120.25424480438232, 30.47301440751546],
              [120.25364398956297, 30.469389578125064],
              [120.24124145507811, 30.46321226208327],
              [120.24235725402832, 30.460400898723094],
              [120.23664951324461, 30.457848406458837],
              [120.237979888916, 30.454888911427055],
              [120.23956775665283, 30.452373269976967],
              [120.23690700531006, 30.449894559740095],
              [120.23471832275389, 30.44282803977803],
              [120.23021221160889, 30.442606046558932],
              [120.22579193115234, 30.440867082187626],
              [120.21871089935303, 30.433133865015062],
              [120.2204704284668, 30.42980358259902],
              [120.21969795227051, 30.423919805782603],
              [120.21862506866455, 30.417591574307398],
              [120.21811008453368, 30.417591574307398],
              [120.21798133850098, 30.41503796118783],
              [120.21978378295898, 30.41448281905955],
              [120.21879673004149, 30.411966135142258],
              [120.21978378295898, 30.4114109755425],
              [120.21944046020506, 30.40874616551359],
              [120.21896839141844, 30.40671049773425],
              [120.22214412689208, 30.406340371759537],
              [120.22656440734863, 30.408153975628448],
              [120.22274494171141, 30.41100385649601],
              [120.22476196289061, 30.41374262464341],
              [120.2358341217041, 30.416555333560858],
              [120.23682117462158, 30.4178506327748],
              [120.24179935455321, 30.417036446704376],
              [120.24484634399414, 30.416037209061518],
              [120.24506092071532, 30.420700230527785],
              [120.24930953979492, 30.42158839982978],
              [120.25639057159422, 30.420996287860056],
              [120.2618408203125, 30.417665591082546],
              [120.26420116424559, 30.414297770981783],
              [120.26767730712892, 30.41178108229315],
              [120.2580213546753, 30.408857200717147],
              [120.25823593139647, 30.40252799256586],
              [120.26922225952148, 30.406562447512755],
              [120.28098106384277, 30.410485702526568],
              [120.28467178344725, 30.413261495262727],
              [120.2978467941284, 30.42240254792125],
              [120.29711723327635, 30.430765675865693],
              [120.29235363006592, 30.43772206785397],
              [120.28329849243163, 30.446638844549508],
              [120.28321266174315, 30.446823831281016],
              [120.2827835083008, 30.446897825875304],
              [120.27844905853271, 30.45300218642768],
              [120.27638912200928, 30.45991999949615],
              [120.27613162994383, 30.464395969751518],
              [120.27420043945311, 30.46739216549864],
              [120.27381420135498, 30.474161009128807],
              [120.26780605316162, 30.47386511323083],
              [120.26634693145753, 30.47726786176739]
            ]
          ]
        }
      }
    ]
  })
  var option = {
    tooltip: {
      show: false,
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      orient: 'horizontal',
      top: '1%',
      left: '1%',
      data: [
        {
          name: '转入'

        },
        {
          name: '转出'

        }
      ],
      selectedMode: 'multiple',
      textStyle: {
        fontStyle: 'lighter',
        color: '#fff',
        fontSize: 8,
        padding: [0, 20, 0, 3]
      },
      itemHeight: 10,
      itemWidth: 10
    },

    grid: {
      height: '100%',
      width: '100%'
    },
    geo: {
      map: 'yuhang',
      label: {
        show: false
      },
      top: 'center',
      left: 'center',
      roam: false,
      width: '85%',
      height: '85%',
      zoom: 1.01,
      itemStyle: {
        areaColor: 'yellow',
        borderColor: '#00acfc',
        shadowColor: '#033896',
        shadowBlur: 10,
        borderWidth: 1

      }
    },

    series: [
      {
        name: '余杭区',
        type: 'map',
        mapType: 'yuhang',
        top: 'center',
        left: 'center',
        width: '85%',
        height: '85%',
        label: {
          normal: {
            show: true,
            position: 'inner',

            textStyle: {}
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            areaColor: '#031f67',
            borderColor: '#023fa4',
            borderWidth: 2,
            label: {
              show: true,
              color: '#fff',
              fontSize: '16'
            },
            emphasis: {
              label: {
                show: true
              }
            }
          }
        },
        // 鼠标移入
        emphasis: {
          show: false,
          itemStyle: {
            areaColor: 'yellow'
            // color: 'rgb(255,255,255)'
          }
        }
      },
      {
        name: '转出',
        type: 'lines',
        zlevel: 2,
        tooltip: {
          formatter: function (param) {
            return (
              param.data.fromName +
              '->' +
              param.data.toName +
              '<br>订单数：' +
              param.data.count +
              ' 条<br>订单总金额：' +
              parseFloat(param.data.amount).toFixed(2) +
              ' 元'
            )
          }
        },

        lineStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#e7db1b' // 0% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
            // color: '#E0474D'
            /* function (value){ //随机颜色

                          ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                          '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                          '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                          '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                          '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                          '#52b9c7','#4fb6d2','#4ab2e5']
   return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
   }, */

            // width: 2, // 线条宽度
            // opacity: 0.1, // 尾迹线条透明度
            // curveness: 0.3 // 尾迹线条曲直度
          },
          emphasis: {
            width: 3,
            opacity: 0.5
          }
        },
        data: [
          {
            fromName: '合肥',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [118.8062, 31.9208],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '拉萨',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [127.9688, 45.368],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [110.3467, 41.4899],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [125.8154, 44.2584],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [116.4551, 40.2539],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [123.1238, 42.1216],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [114.4995, 38.1006],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [117.4219, 39.4189],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [112.3352, 37.9413],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [109.1162, 34.2004],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [103.5901, 36.3043],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [106.3586, 38.1775],
              [119.4543, 25.9222]
            ]
          },
          {
            fromName: '吉林',
            toName: '上海',
            count: '1',
            amount: '89999',
            coords: [
              [101.4038, 36.8207],
              [119.4543, 25.9222]
            ]
          }
        ]
      },
      {
        name: '转入',
        type: 'lines',
        zlevel: 2,
        tooltip: {
          formatter: function (param) {
            return (
              param.data.fromName +
              '->' +
              param.data.toName +
              '<br>订单数：' +
              param.data.count +
              ' 条<br>订单总金额：' +
              parseFloat(param.data.amount).toFixed(2) +
              ' 元'
            )
          }
        },

        lineStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,

              colorStops: [
                {
                  offset: 0,
                  color: '#1be7d4'// 0% 处的颜色
                }

              ],
              global: false // 缺省为 false
            }
            // width: 1.5, // 线条宽度
            // opacity: 0.2, // 尾迹线条透明度
            // curveness: 0.3 // 尾迹线条曲直度
          },
          emphasis: {
            width: 3,
            opacity: 0.5
          }
        }
      }

    ]
  }

  myChart.setOption(option)
}
export {
  sex,
  age,
  education,
  archives,
  nature,
  nation,
  map

}
