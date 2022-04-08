import echarts from 'echarts'
const per = (element,dispose) => {
  var myChart = echarts.init(element)
  var seriesData = [{
    name: '失业保险',
    value: '机关养老',
    value2: '334.5万元25%'
  },
  {
    name: '城居养老',
    value: '城居养老',
    value2: '334.5万元25%'
  }
  ]
  const option = {
    // backgroundColor: '#2c343c',
    title: {
      // text: '南丁格尔玫瑰图',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#fff'
      }
    },
    legend: {
      // itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
      // itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
      width: '70%',
      left: 'center',
      textStyle: {
        // color: '#fff',
        fontSize: 16,
        rich: {
          name: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 12,
            align: 'left'
          },
          value: {
            color: '#ffff',
            fontSize: 16,
            lineHeight: 15,
            height: 20,
            align: 'left',
            padding: [-20, 0, 0, 0]
          },
          rate: {
            color: '#f88d2d',
            fontSize: 14,
            lineHeight: 10,
            padding: [-50, 0, 0, 0],
            align: 'left'
          }

        }
      },
      icon: 'circle',
      right: '0',
      bottom: '0',
      itemWidth: 10, // 图例标记的图形宽度。[ default: 25 ]
      itemHeight: 10,
      padding: [50, 50],
      itemGap: 40,
      data: ['失业保险', '城居养老'],
      formatter: (name) => {
        if (seriesData.length) {
          const item = seriesData.filter((item) => item.name === name)[0]
          const i = `{name|${name}}\n{value| ${item.value}}\n{rate| ${item.value2}}`
          return i
        }
      }

    },
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },

    visualMap: {
      show: false,
      min: 500,
      max: 600,
      inRange: {
        // colorLightness: [0, 1]
      }
    },
    series: [{

      name: '访问来源',
      type: 'pie',
      radius: ['20%', '40%'], // 配置圆大小
      emphasis: {
        show: false
      },
      center: ['50%', '50%'],
      color: ['#0095fc', '#15c3ca', '#1238cb', '#ca6e19', '#00b068'], // '#FBFE27','rgb(11,228,96)','#FE5050'
      data: [{
        value: 285,
        name: '城居养老'
      },
      {
        name: '城职养老',
        value: 300

      },
      {
        value: 274,
        name: '工商保险'
      },
      {
        value: 380,
        name: '失业保险'
      },
      {
        value: 360,
        name: '机关养老'
      }
      ].sort(function (a, b) {
        return b.value - a.value
      }),
      roseType: 'radius',

      label: {
        normal: {
          formatter: ['{b|{b}}', '{c|{c}}' + '万元'].join('\n'),
          rich: {
            c: {
              color: '#fff',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 5
            },
            b: {
              color: 'rgb(98,137,169)',
              fontSize: 15,
              height: 40
            }
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: 'rgb(98,137,169)'
          },
          smooth: 0.2,
          length: 10,
          length2: 20
        }
      },
      itemStyle: {
        normal: {
          shadowColor: 'rgba(0, 0, 0, 0.8)',
          shadowBlur: 50
        }
      }
    }
      // 最外部进度条
      // {
      //   name: '最外部进度条',
      //   type: 'gauge',
      //   radius: '80%',
      //   splitNumber: 10,
      //   axisLine: {
      //     lineStyle: {
      //       color: [
      //         [
      //           dataArr / 10,
      //           new echarts.graphic.LinearGradient(0, 1, 0, 0, [
      //             {
      //               offset: 0,
      //               color: 'rgba(145,207,255,0)'
      //             },
      //             {
      //               offset: 0.5,
      //               color: 'rgba(145,207,255,0.2)'
      //             },
      //             {
      //               offset: 1,
      //               color: 'rgba(145,207,255,1)'
      //             }
      //           ])
      //         ],
      //         [1, 'rgba(28,128,245,.0)']
      //       ],
      //       width: 3
      //     }
      //   },
      //   axisLabel: {
      //     show: false
      //   },
      //   axisTick: {
      //     show: false
      //   },
      //   splitLine: {
      //     show: false
      //   },
      //   itemStyle: {
      //     show: false
      //   },
      //   detail: {
      //     show: false
      //   },
      //   title: {
      //   // 标题
      //     show: false
      //   },
      //   data: [
      //     {
      //       name: 'title',
      //       value: dataArr
      //     }
      //   ],
      //   pointer: {
      //     show: false
      //   },
      //   animationDuration: 4000
      // }
    ]
  }
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  if(dispose){
    myChart.dispose()
    myChart =null
    console.log("销毁99995")
  }
}
const rader = (element,dispose) => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(element)
  if(dispose){
    myChart.dispose()
    myChart =null
    console.log("销毁")
    return
  }
  var seriesData = [{
    name: '补缴最多险种',
    value: '机关养老',
    value2: '334.5万元25%'
  },
  {
    name: '退缴最少险种',
    value: '城居养老',
    value2: '300.5万元25%'
  }
  ]
  const option = {
    color: ['#00c2ff', '#f9cf67', '#e92b77'],
    data: ['补缴最多险种', '退缴最多险种'],
    legend: {
      show: true,
      icon: 'circle', // 图例形状
      bottom: 20,
      center: 0,
      itemWidth: 10, // 图例标记的图形宽度。[ default: 25 ]
      itemHeight: 10, // 图例标记的图形高度。[ default: 14 ]
      itemGap: 15, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
      textStyle: {
        fontSize: 14,
        color: '#ade3ff',
        align: 'center',
        rich: {
          name: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 12,
            align: 'left'
          },
          value: {
            color: '#ffff',
            fontSize: 16,
            lineHeight: 15,
            height: 20,
            align: 'left',
            padding: [-20, 0, 0, 0]
          },
          rate: {
            color: '#f88d2d',
            fontSize: 14,
            lineHeight: 10,
            padding: [-50, 0, 0, 0],
            align: 'left'
          }

        }
      },
      data: ['补缴最多险种', '退缴最少险种'],
      formatter: (name) => {
        if (seriesData.length) {
          const item = seriesData.filter((item) => item.name === name)[0]
          const i = `{name|${name}}\n{value| ${item.value}}\n{rate| ${item.value2}}`
          return i
        }
      }
    },
    radar: [{
      indicator: [{
        text: '机关养老',
        max: 100
      },
      {
        text: '工伤保险',
        max: 100
      },
      {
        text: '城居养老',
        max: 100
      },
      {
        text: '城职养老',
        max: 100
      },
      {
        text: '失业保险',
        max: 100
      }
      ],

      textStyle: {
        color: 'red'
      },
      center: ['50%', '50%'],
      radius: 142,
      startAngle: 90,
      splitNumber: 3,
      orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
      // shape: 'circle',
      // backgroundColor: {
      //     image:imgPath[0]
      // },
      name: {
        formatter: '{value}',
        textStyle: {
          fontSize: 14, // 外圈标签字体大小
          color: '#5b81cb' // 外圈标签字体颜色
        }
      },
      splitArea: {
        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: true,
        areaStyle: {
          // 分隔区域的样式设置。
          color: ['#141c42', '#141c42'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
        }
      },
      // axisLabel:{//展示刻度
      //     show: true
      // },
      axisLine: {
        // 指向外圈文本的分隔线样式
        lineStyle: {
          color: '#153269'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#113865', // 分隔线颜色
          width: 1 // 分隔线线宽
        }
      }
    }],
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} ({d}%)'
    },
    series: [{

      name: '雷达图',
      type: 'radar',
      itemStyle: {
        emphasis: {
          lineStyle: {
            width: 4
          }
        }
      },
      data: [{
        name: '补缴最多险种',
        value: [85, 65, 55, 90, 82],
        areaStyle: {
          normal: {
            // 单项区域填充样式
            color: {
              type: 'linear',
              x: 0, // 右
              y: 0, // 下
              x2: 1, // 左
              y2: 1, // 上
              colorStops: [{
                offset: 0,
                color: '#00c2ff'
              },
              {
                offset: 0.5,
                color: 'rgba(0,0,0,0)'
              },
              {
                offset: 1,
                color: '#00c2ff'
              }
              ],
              globalCoord: false
            },
            opacity: 1 // 区域透明度
          }
        },
        symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
        label: {
          // 单个拐点文本的样式设置
          normal: {
            show: true, // 单个拐点文本的样式设置。[ default: false ]
            position: 'top', // 标签的位置。[ default: top ]
            distance: 2, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
            color: '#6692e2', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
            fontSize: 14, // 文字的字体大小
            formatter: function (params) {
              return params.value
            }
          }
        },
        itemStyle: {
          normal: {
            // 图形悬浮效果
            borderColor: '#00c2ff',
            borderWidth: 2.5
          }
        }
        // lineStyle: {
        //     normal: {
        //         opacity: 0.5// 图形透明度
        //     }
        // }
      },
      {
        name: '退缴最少险种',
        value: [50, 20, 45, 30, 75],
        symbolSize: 2.5,
        itemStyle: {
          normal: {
            borderColor: '#f9cf67',
            borderWidth: 2.5
          }
        },
        areaStyle: {
          normal: {
            // 单项区域填充样式
            color: {
              type: 'linear',
              x: 0, // 右
              y: 0, // 下
              x2: 1, // 左
              y2: 1, // 上
              colorStops: [{
                offset: 0,
                color: '#f9cf67'
              },
              {
                offset: 0.5,
                color: 'rgba(0,0,0,0)'
              },
              {
                offset: 1,
                color: '#f9cf67'
              }
              ],
              globalCoord: false
            },
            opacity: 1 // 区域透明度
          }
        }
        // lineStyle: {
        //     normal: {
        //         opacity: 0.5// 图形透明度
        //     }
        // }
      }

      ]
    }]
  }
  myChart.setOption(option)
}

/***
 *   bar - 展示柱状图
 * @param {obj} element - 挂载的对象.
 * @param {arr} arr -数据数组
 * @param {arr} list -数据数组
 *  @param {boolean} dispose -是否销毁
 * */
const bar = (element, arr, list,dispose) => {

  var myChart = echarts.init(element)
    if(dispose){
      myChart.dispose()
      myChart =null
      return
    }
  // 同比数据
  var comparedData = [...list]
  // console.log('即时更新')
  var data = [...arr]
  var sideData = data.map((item) => item - 20)
  const option = {
    title: {
      textStyle: {

        color: '#fff'

      },
      top: '3%',
      left: '10%'
    },
    grid: {
      top: '25%',
      bottom: '10%' // 也可设置left和right设置距离来控制图表的大小
    },
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'shadow',
    //     label: {
    //       show: true
    //     }
    //   }
    // },
    legend: {
      data: ['征缴总额', '同比'],
      top: '15%',
      // itemStyle:[''],
      left: '22%',
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        color: '#ffffff'
      }
    },
    // Y显示线
    tooltip: {
      show: true,
      trigger: 'axis', // axis , item
      backgroundColor: 'RGBA(0, 49, 85, 1)',
      borderColor: 'rgba(0, 151, 251, 1)',
      borderWidth: 1,
      borderRadius: 0,
      textStyle: {
        color: '#BCE9FC',
        fontSize: 16,
        align: 'left'
      },
      axisPointer: {
        // type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        lineStyle: {
          color: '#21e1e4'
        }
      }
    },
    xAxis: {
      data: [
        '2101',
        '2102',
        '2103',
        '2104',
        '2105',
        '2106',
        '2107',
        '2108',
        '2109',
        '2110',
        '2111',
        '2112'
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
    yAxis: [{
      type: 'value',
      name: '金额 (万元)',
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
      name: '同比 (%)',
      nameTextStyle: {
        color: '#838a92'
      },
      position: 'right',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        formatter: '{value} ', // 右侧Y轴文字显示
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
    series: [{
      name: '同比',
      type: 'line',
      barWidth: 7,
      yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
      // smooth: true, // 平滑曲线显示
      showAllSymbol: true, // 显示所有图形。
      // symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC', // 标记的图形为实心圆
      symbolSize: 10, // 标记的大小
      itemStyle: {
        // 折线拐点标志的样式
        color: '#70a7f9'
      },
      lineStyle: {
        color: '#70a7f9'
      },
      // 投影
      areaStyle: {
        color: 'rgba(5,140,255,0.2)'
      },
      data: comparedData
    },
    {
      name: '征缴总额',
      tooltip: {
        show: false
      },
      type: 'bar',
      barWidth: 9,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            0,
            [{
              offset: 0,
              color: '#0B4EC3' // 0% 处的颜色
            },
            {
              offset: 0.6,
              color: '#138CEB' // 60% 处的颜色
            },
            {
              offset: 1,
              color: '#17AAFE' // 100% 处的颜色
            }
            ],
            false
          )
        }
      },
      data: data,
      barGap: 0
    },
    {
      name: '征缴总额',
      type: 'bar',
      barWidth: 3,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            0,
            [{
              offset: 0,
              color: '#1782e0'
            },
            {
              offset: 1,
              color: '#1c83f9'
            }
            ],
            false
          )
        }
      },
      barGap: 0,
      data: sideData
    },
    {
      name: '征缴总额',
      tooltip: {
        show: false
      },
      type: 'pictorialBar',
      itemStyle: {
        borderWidth: 1,
        borderColor: '#0571D5',
        color: '#1779E0'
      },
      symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
      symbolSize: ['13', '13'],
      symbolOffset: ['0', '-11'],
      // symbolRotate: -5,
      symbolPosition: 'end',
      data: data,
      z: 2
    }
    ]
  }

  myChart.setOption(option)
  
  myChart=null
}
const axis =  (element,dispose) => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(element)
  if(dispose){
    myChart.dispose()
    myChart =null
    console.log("销毁")
    return
  }
  const colorList = ['#0689fd', '#40d2bd', '#d94156']
  const option = {
    title: {
      textStyle: {
        fontSize: 12,
        fontWeight: 400
      },
      left: 'center',
      top: '5%'
    },
    legend: {
      show: true,
      top: '5%',
      left: '18%',
      itemWidth: 13,
      itemHeight: 13,
      itemGap: 20,
      icon: 'line',
      textStyle: {
        color: '#556677'
      }
    },
    // Y显示线
    tooltip: {
      show: true,
      trigger: 'axis', // axis , item
      backgroundColor: 'RGBA(0, 49, 85, 1)',
      borderColor: 'rgba(0, 151, 251, 1)',
      borderWidth: 1,
      borderRadius: 0,
      textStyle: {
        color: '#BCE9FC',
        fontSize: 16,
        align: 'left'
      },
      axisPointer: {
        // type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        lineStyle: {
          color: '#21e1e4'
        }
      }
    },
    grid: {
      top: '15%'
    },
    xAxis: [{
      type: 'category',
      data: ['2101', '2102', '2103', '2104', '2105', '2106', '2107', '2108', '2109', '2110', '2111', '2112'],
      axisLine: {
        lineStyle: {
          color: '#DCE2E8'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        textStyle: {
          color: '#838a92'
        },
        // 默认x轴字体大小
        fontSize: 12,
        // margin:文字到x轴的距离
        margin: 15
      },
      axisPointer: {
        label: {
          // padding: [11, 5, 7],
          padding: [0, 0, 10, 0],
          /*
    除了padding[0]建议必须是0之外，其他三项可随意设置

    和CSSpadding相同，[上，右，下，左]

    如果需要下边线超出文字，设左右padding即可，注：左右padding最好相同

    padding[2]的10:

    10 = 文字距下边线的距离 + 下边线的宽度

    如：UI图中文字距下边线距离为7 下边线宽度为2

    则padding: [0, 0, 9, 0]

                */
          // 这里的margin和axisLabel的margin要一致!
          margin: 15,
          // 移入时的字体大小
          fontSize: 12,
          backgroundColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#fff' // 0% 处的颜色
            },
            {
              // offset: 0.9,
              offset: 0.86,
              /*
0.86 = （文字 + 文字距下边线的距离）/（文字 + 文字距下边线的距离 + 下边线的宽度）

                        */
              color: '#fff' // 0% 处的颜色
            },
            {
              offset: 0.86,
              color: '#33c0cd' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#33c0cd' // 100% 处的颜色
            }
            ],
            global: false // 缺省为 false
          }
        }
      },
      boundaryGap: false
    }],
    yAxis: [{
      type: 'value',
      name: '金额 (万元)',
      nameTextStyle: {
        color: '#838a92'
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: true
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#838a92'
        }
      }
    },
    {
      type: 'value',
      name: '同比 (%)',
      nameTextStyle: {
        color: '#838a92'
      },
      position: 'right',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        formatter: '{value} ', // 右侧Y轴文字显示
        textStyle: {
          color: '#838a92'
        }
      }
    }
    ],
    series: [{
      name: '城职养老',
      type: 'line',
      data: [
        40, 19, 70, 29, 29, 49, 19, 29, 49, 70, 19, 56
      ],
      symbolSize: 1,
      symbol: 'circle',

      yAxisIndex: 0,
      showSymbol: false,
      // 折线配置
      lineStyle: {
        width: 2,
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
          offset: 0,
          color: '#0689fd'
        },
        {
          offset: 1,
          color: '#0575d7'
        }
        ]),
        shadowColor: 'rgba(158,135,255, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        normal: {
          color: colorList[0],
          borderColor: colorList[0]
        }
      },
      areaStyle: {
        color: 'rgba(5,140,255,0.3)'
      }
    },
    {
      name: '失业保险',
      type: 'line',
      data: [5, 12, 11, 14, 25, 16, 10, 40, 30, 50, 40, 20],
      symbolSize: 1,
      symbol: 'circle',
      yAxisIndex: 0,
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [{
          offset: 0,
          color: '#37dbc2'
        },
        {
          offset: 1,
          color: '#37dbc6'
        }
        ]),
        shadowColor: 'rgba(115,221,255, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        normal: {
          color: colorList[1],
          borderColor: colorList[1]
        }
      }
    },
    {
      name: '机关养老',
      type: 'line',
      data: [15, 12, 270, 40, 50, 16, 45, 30, 40, 50, 60, 20],
      symbolSize: 1,
      yAxisIndex: 1,
      symbol: 'circle',
      showSymbol: false,
      lineStyle: {
        width: 2,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: '#d94156'
        },
        {
          offset: 1,
          color: '#d94159'
        }
        ]),
        shadowColor: 'rgba(254,154,139, 0.3)',
        shadowBlur: 10,
        shadowOffsetY: 20
      },
      itemStyle: {
        normal: {
          color: colorList[2],
          borderColor: colorList[2]
        }
      }
    }
    ]
  }

  myChart.setOption(option)
}
const mix1 =  (element,dispose) => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(element)
  if(dispose){
    myChart.dispose()
    myChart =null
    return
  }
  const data = [220, 182, 191, 234, 290, 330, 310, 400, 500, 300, 200, 188]
  const sideData = data.map((item) => item + 4.5)
  var data1 = [
    400, 199, 70, 229, 329, 229, 199, 299, 499, 70, 199, 568
  ]
  var data2 = [
    500, 299, 170, 329, 429, 529, 299, 399, 599, 170, 299, 668
  ]
  var xData = [
    '01月',
    '02月',
    '03月',
    '04月',
    '05月',
    '06月',
    '07月',
    '08月',
    '09月',
    '10月',
    '11月',
    '12月'
  ]
  const option = {
    title: {
      textStyle: {

        color: '#fff'

      },
      top: '3%',
      left: '10%'
    },
    grid: {
      top: '25%',
      bottom: '10%' // 也可设置left和right设置距离来控制图表的大小
    },
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'shadow',
    //     label: {
    //       show: true
    //     }
    //   }
    // },
    legend: {
      data: ['补缴金额', '补缴同比', '退缴金额', '退缴同比'],
      top: '15%',
      // itemStyle:[''],
      left: '22%',
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        color: '#ffffff'
      }
    },
    // Y显示线
    tooltip: {
      show: true,
      trigger: 'axis', // axis , item
      backgroundColor: 'RGBA(0, 49, 85, 1)',
      borderColor: 'rgba(0, 151, 251, 1)',
      borderWidth: 1,
      borderRadius: 0,
      textStyle: {
        color: '#BCE9FC',
        fontSize: 16,
        align: 'left'
      },
      axisPointer: {
        // type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        lineStyle: {
          color: '#21e1e4'
        }
      }
    },
    xAxis: {
      data: [
        '2101',
        '2102',
        '2103',
        '2104',
        '2105',
        '2106',
        '2107',
        '2108',
        '2109',
        '2110',
        '2111',
        '2112'
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
    yAxis: [{
      type: 'value',
      name: '金额 (万元)',
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
      name: '同比 (%)',
      nameTextStyle: {
        color: '#838a92'
      },
      position: 'right',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        show: true,
        formatter: '{value} ', // 右侧Y轴文字显示
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
    series: [{
      name: '退缴同比',
      type: 'line',
      barWidth: 20,
      icon: 'line',
      symbol: 'circle',
      yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
      // smooth: true, // 平滑曲线显示
      showAllSymbol: true, // 显示所有图形。
      // symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC', // 标记的图形为实心圆
      symbolSize: 10, // 标记的大小
      itemStyle: {
        // 折线拐点标志的样式
        color: '#70a7f9'
      },
      lineStyle: {
        color: '#f26d82'
      },
      // 投影
      areaStyle: {
        color: 'rgba(5,140,255,0.1)'
      },
      data: [50, 30, 60, 50, 30, 20, 40, 40, 60, 60, 30, 40]
    },
    {
      name: '补缴同比',
      type: 'line',
      barWidth: 20,
      yAxisIndex: 1, // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
      // smooth: true, // 平滑曲线显示
      showAllSymbol: true, // 显示所有图形。
      // symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABRCAYAAABFTSEIAAAACXBIWXMAAAsSAAALEgHS3X78AAAEp0lEQVR42u3cz4sjRRTA8W9Vd3Vn8mMmjj9WQWSRZQ+CsH+B7MnDIgiCd0E8CYJ/gOAIelo8ehUP/gF6WLw5/gMueFP2sIcF0dHd2Z1kknR11fOQZJJJMtlZd03H7HtQpNOTnpn+8Lrm1etmjIig8e/DKoECKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIqoAJudKTr+osZMNPvBUQBHwHsPF9fB9R0DeHMOQ6T6WOrhEzXBM4swDOL0M6CrArRVoq3t2dGUIb9fTvatg8ZZup1PDBgzPmy98mey6qfzjLz2WaWjEUZKEvGyi9nWyneMOvGIyFQo2Sbg4MUSChpU9IeTTUpJdsEajPZOJeJG5uBZj7rLLduWS5dGm6XNLEELOFUFj54ACJCaychkpDSASK3bwsXL0YgVpWJKwM0iy9Zy8HdGru7jvt3Pbu7w0wES7drTwAbjTHMGCsQcIAnYTC1/wRx0wEnl27JNgZI8HQ6Kc1mQq83RNzaMjPzXqDbjTQaJRFLxIyyMSxAXEkWrhrQzAAmo5HOjCQf7jflILxOkohL+aUPgV4vEGNJo+E5PAy02+UIMEwBxo0CPDP7Dg5SnEtpt1PA0e87XO25FOoh8IYIH2Y5b45RzGAQBiIltZoHxqMcjbksXAVgdc2EQMYzzzdotyeZWKuleULXJtwT4SODfC2QCWR+IF9KnjuX1Xbo99Op7LVE8iXlz0YBTk5SyLEEjo5OLuccEoFUvHfO+reuUPx4zftXAIcx1hdcF+/TvFab4A0Bs0VwqyhpVnkJT89/Q4DDQ0e77YCMwIUsFMeFZD856699URRvX4nxE4A/jbnxXp7v4Zw3ReGNSDHI8wFQjIafuoyn58L/fB6sth/Ybg9fez2TRC6QZcZYvgHsazF+MP7YCyLXcM7gvSXLDGBqYDg+NhwdmSpPoTrAkub0W+f4FSB1fDucIunMHSLpO8WAH0rSy8u+19MBCHB4OHzd2pI+CEUhpigEiN+l6WcdY252jLn5s7Wf472ImPcN8pUl/tEHoV4XWq1Ke4KrLmPsTA3oODpytFoOyJKSyzHyMSIxteWngMW5cSEdDJQUhTdZVgxOz3/+jFJm4+bA2e5JpNU6WZ4Fw99JwnWMKccwpeddP+B7GZTNUPKqybJy0O+Hs1YfMz9swwvpB8fbGDG0GuGkkK7V0hxSmZQpABI8l2z0v3sJf50qpAMJCd2qCulql3LD1lRGQjm7lEsDz0rkxTQOfiPPxUBcuJTbbhss/Y1eyi3NwsmKInmkZsKk5gtPUzNhvp11507CSy/X6XYStpvFudpZw1ZWIOF4Cq6SdtbKbioJyAhRTu3u9yMJXerN+ugvaQQsjcZ8Q3VnZwxlSDhe1lB9GjrSw5b+1avT8+Jw+979nNaOI6U3KpTrWAosxVQmygK4ld8X0ZtK/7eViExD7O1NQPb3T7fsl4/4sBpwYzPwjFbTo95Yl9l9Vd1YN1X/147HebSjary1AHyc5qc+XLQEQx9ve8Kg6xr6hKoCKqACKqCGAiqgAiqghgIqoAIqoIYCKqACKqCGAiqgAiqghgIq4JrHP8fEWV8FMTmOAAAAAElFTkSuQmCC', // 标记的图形为实心圆
      symbolSize: 10, // 标记的大小
      itemStyle: {
        // 折线拐点标志的样式
        color: '#70a7f9'
      },
      lineStyle: {
        color: '#70a7f9'
      },
      // 投影
      areaStyle: {
        color: 'rgba(5,140,255,0.2)'
      },
      data: [70, 40, 80, 70, 50, 50, 60, 70, 20, 80, 30, 40]
    },
    {
      name: '补缴金额',
      tooltip: {
        show: false
      },
      type: 'bar',
      barWidth: 7,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            0,
            [{
              offset: 0,
              color: '#0B4EC3' // 0% 处的颜色
            },
            {
              offset: 0.6,
              color: '#138CEB' // 60% 处的颜色
            },
            {
              offset: 1,
              color: '#17AAFE' // 100% 处的颜色
            }
            ],
            false
          )
        }
      },
      data: data,
      barGap: 0
    },
    {
      name: '补缴金额',
      type: 'bar',
      barWidth: 3,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            0,
            [{
              offset: 0,
              color: '#1782e0'
            },
            {
              offset: 1,
              color: '#1c83f9'
            }
            ],
            false
          )
        }
      },
      barGap: 0,
      data: sideData
    },
    {
      name: '补缴金额',
      tooltip: {
        show: false
      },
      type: 'pictorialBar',
      itemStyle: {
        borderWidth: 1,
        borderColor: '#0571D5',
        color: '#1779E0'
      },
      symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
      symbolSize: ['12', '12'],
      symbolOffset: ['0', '-11'],
      // symbolRotate: -5,
      symbolPosition: 'end',
      data: data,
      z: 2
    },
    {
      name: '退缴金额',

      tooltip: {
        show: false
      },
      type: 'bar',
      barWidth: 7,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            5,
            2,
            3,
            [{
              offset: 0,
              color: '#f26d82' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#f26d89' // 100% 处的颜色
            }
            ],
            false
          )
        }
      },
      data: data,
      barGap: 0
    },
    {
      name: '退缴金额',
      type: 'bar',
      barWidth: 3,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            3,
            [{
              offset: 0,
              color: '#f26d82' // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#f26d89' // 100% 处的颜色
            }
            ],
            false
          )
        }
      },
      barGap: 0,
      data: sideData
    },
    {
      name: '退缴金额',
      tooltip: {
        show: false
      },
      type: 'pictorialBar',
      itemStyle: {
        borderWidth: 1,
        borderColor: '##f26d89',
        color: '#f26d89'
      },
      symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
      symbolSize: ['12', '12'],
      symbolOffset: ['0', '-8'],
      // symbolRotate: -5,
      symbolPosition: 'end',
      data: data,
      z: 2
    }

    ]
  }

  myChart.setOption(option)
}
export {
  per,
  rader,
  bar,
  axis,
  mix1
}
