import echarts from 'echarts'
/***
 *   sex -仪表盘
 * @param {obj} element - 挂载的对象.
 *  @param {boolean} dispose -是否销毁
 * */
const sexPublishChart = (element, dispose) => {
  var myChart = echarts.init(element)
  var dataArry = {
    one: 100,
    two: 300,
    three: 200,
  };
  const option = {
    // backgroundColor: "#040042",
    // tooltip: {
    //     formatter: "{a} <br/>{c} {b}",
    // },
    series: [{

        name: "第一部分",
        type: "gauge",
        color: ["red"],
        // min: 0,
        // max: 28,
        min: 0,
        max: 100,
        splitNumber: 5,
        // radius: "40%",
        center: ["28%", "40%"],
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            width: 7,
            color: [
              [0.4, "#ED7B2F"],
              [1, "#Cccc"],
            ],
          },
          backgroundColor: "none",
        },
        tooltip: {
          formatter: function () {
            if (dataArry.one) {
              return "第一部分dd:" + dataArry.one;
            }
          },
        },
        axisTick: {
          splitNumber: 5, // 每份split细分多少段
          // 坐标轴小标记
          length: 3, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: "auto",
          },
        },
        splitLine: {
          // 分隔线
          length: 15, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: "#000000",
          },
        },
        axisLabel: {
          borderRadius: 1,
          color: "",
          // padding: 16,
        },
        pointer: {

          width: 5
        },
        title: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          // fontWeight: 'bolder',
          fontSize: 13,
          fontColor: "#000000",
          color: "#000000",
          paddingTop: 10,
          offsetCenter: [0, "120%"],
          width: 50,
          height: 100,
          // fontStyle: 'italic'

        },
        itemStyle: {
          color: "#1092ff",
        },
        detail: {
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          // borderWidth: 1,
          textBorderColor: "#000",
          textBorderWidth: 1,
          textShadowBlur: 1,
          textShadowColor: "#fff",
          textShadowOffsetX: 10,
          textShadowOffsetY: 10,
          paddingTop: 100,
          fontFamily: "digital",
          fontSize: 20,
          width: 300,
          color: "#fff",
          rich: {},
          offsetCenter: [0, "70%"],
          formatter: function (value) {
            console.info(value);
            return value * 10 + "%";
          },
        },
        data: [{
          value: 5,
          name: "发病24h内患者急诊就诊\n\n30min内头颅CT影像学检查完成率",
        }, ],
      },

      {

        name: "第二部分",
        type: "gauge",
        color: ["red"],
        // min: 0,
        // max: 28,
        min: 0,
        max: 100,
        splitNumber: 5,
        // radius: "40%",
        center: ["78%", "40%"],
        axisLine: {
          // 坐标轴线
          lineStyle: {
            // 属性lineStyle控制线条样式
            width: 7,
            color: [
              [0.4, "#E34D59"],
              [1, "#Cccc"],
            ],
          },
          backgroundColor: "none",
        },
        tooltip: {
          formatter: function () {
            if (dataArry.one) {
              return "第一部分dd:" + dataArry.one;
            }
          },
        },
        axisTick: {
          splitNumber: 5, // 每份split细分多少段
          // 坐标轴小标记
          length: 3, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle控制线条样式
            color: "auto",
          },
        },
        splitLine: {
          // 分隔线
          length: 15, // 属性length控制线长
          lineStyle: {
            // 属性lineStyle（详见lineStyle）控制线条样式
            color: "#000000",
          },
        },

        axisLabel: {
          borderRadius: 1,
          color: "",
          // padding: 16,
        },
        pointer: {

          width: 5
        },
        title: {
          // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          // fontWeight: 'bolder',
          fontSize: 13,
          fontColor: "#000000",
          color: "#000000",
          paddingTop: 10,
          offsetCenter: [0, "120%"],
          width: 50,
          height: 100,
          // fontStyle: 'italic'

        },
        itemStyle: {
          color: "#1092ff",
        },
        detail: {
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          // borderWidth: 1,
          textBorderColor: "#000",
          textBorderWidth: 1,
          textShadowBlur: 1,
          textShadowColor: "#fff",
          textShadowOffsetX: 10,
          textShadowOffsetY: 10,
          paddingTop: 100,
          fontFamily: "digital",
          fontSize: 20,
          width: 300,
          color: "#fff",
          rich: {},
          offsetCenter: [0, "70%"],
          formatter: function (value) {
            console.info(value);
            return value * 10 + "%";
          },
        },
        data: [{
          value: 5,
          name: "发病24h内急诊就诊45min内\n\n临床实验室检查完成率",
        }, ],
      },
    ]
  };
  myChart.setOption(option)
  if (dispose) {
    myChart.dispose()
    myChart = null
    // console.log("销毁99995")
  }
}
export {
  sexPublishChart
}
