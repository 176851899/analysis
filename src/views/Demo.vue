<template>
  <div class="container">
    <chart-container width="540px" height="280px" title="存档民族分析">
            <template #item>
              <div
                class="nation"
                style="width: 520px; height: 200px; margin-top: 20px"
                ref="nation"
              ></div>
            </template>
          </chart-container>
  </div>
</template>

<script>
    import ChartContainer from './Analysis/ChartContainer.vue'
    import {
        sexPublishChart
} from '../instantiation/demo.js'
    export default {
  name: 'demo',
   components: {
    ChartContainer
  },
  data () {
    return {
      // 档案列表
      // mock的数据
      mock: null,
    }
  },
  created(){
//    getArchivalData()
//     .then(res => { 
//       // console.log(res)
//       this.mock=res
//       archivesAnalysisChart(this.$refs.archives,this.mock)
//     })
//     .catch(error =>{
//       console.log(error,'异常')
//   })
  },
  mounted () {
    // // 创建实列图表
    sexPublishChart(this.$refs.nation)
    // agePublishChart(this.$refs.age)
    // educationPublishChart(this.$refs.education)
    // natureChart(this.$refs.nature)
    // nationChart(this.$refs.nation)
    // laborTransferChart(this.$refs.map)
  },
  beforeDestroy(){
    // 销毁图表实列
//    sexPublishChart(this.$refs.sex,true)
//    agePublishChart(this.$refs.age,true)
//    educationPublishChart(this.$refs.education,true)
//    natureChart(this.$refs.nature,true)
//    nationChart(this.$refs.nation,true)
//    laborTransferChart(this.$refs.map,true)
//    archivesAnalysisChart(this.$refs.archives,this.mock,true)
  }
  
}
</script>

<style lang="less" scoped>
    .container {
      width: 1920px;
      height: 1080px;
      display: flex;
      flex-direction: column;
    //   background-color: #000c1d;
      .city {
        width: 223px !important;
        height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: linear-gradient(
          0deg,
          #002a55 0%,
          rgba(0, 144, 255, 0.22) 100%
        );
        font-size: 16px;
        color: #5db1ff;
        background: url("../assets/jiao.gif") no-repeat right center;
        background-size: 23px;
      }
      .nav {
        width: 100%;
        height: 112px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        background-color: #000c22;
        justify-content: space-between;
      }
      main {
        width: 1840px;
        height: 1004px;
        flex: 1;
        margin: auto;
        margin-top: 15px;
        .chart-container {
          width: 100%;
          height: 856px;
          display: flex;
          // justify-content: center;
          color: aliceblue;
          .left,
          .right {
            width: 540px;
            height: 100%;
          }
          .center {
            flex: 1;
    
            .map {
              width: 756px;
              height: 560px;
              margin-left: 45px;
              position: relative;
              overflow: hidden;
              margin-bottom: 10px;
              .title {
                height: 16px;
                font-family: MicrosoftYaHei;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 80px;
                letter-spacing: 1px;
                color: #aee0ff;
                position: relative;
    
              }
              .btn {
                transform: translateY(40px);
                span {
                  font-size: 16px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 22px;
                  letter-spacing: 0px;
                  display: inline-block;
                  color: #bcebff;
                  text-align: center;
                  line-height: 30px;
                  &:nth-child(1) {
                    box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.63);
                    width: 64px;
                    height: 30px;
                    background-color: #002b97;
                    border-radius: 2px;
                    border: solid 1px #1371ff;
                    margin-right: 8px;
                  }
                  &:nth-child(2) {
                    width: 64px;
                    height: 30px;
                    background-color: #043785;
                    border-radius: 2px;
    border: solid 1px rgba(39, 123, 237, 0.38);
                  }
                }
              }
            }
            .table {
              position: relative;
              width: 756px;
              min-height: 200px;
              margin-left: 40px;
              margin-top: 40px;
              overflow: hidden;
              border-radius: 4px;
              .title {
                height: 16px;
    
                font-family: MicrosoftYaHei;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 1px;
                color: #aee0ff;
                position: relative;
              }
              ul {
                width: 700px;
                min-height: 186px;
                margin-top: 40px;
                padding-top: 20px;
                background-color: #00112e;
                border-radius: 4px;
                display: flex;
                align-content: center;
                justify-content: space-between;
                li {
                  width: 100px;
                  height: 140px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  align-items: center;
                  .address {
                    width: 100%;
                    height: 25px;
                    text-align: center;
                    font-family: MicrosoftYaHei;
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 19px;
                    letter-spacing: 0px;
                    color: #ffffff;
                    background-position: 0 center;
                    background-repeat: no-repeat;
                  }
                  .image {
                    width: 110px;
                    height: 90px;
                    background: url("../assets/map.png") no-repeat center center;
                  }
                  .people {
                    width: 80px;
                    height: 15px;
                    text-align: center;
                    font-family: MicrosoftYaHei;
                    font-size: 16px;
                    font-weight: normal;
                    font-stretch: normal;
                    line-height: 24px;
                    letter-spacing: 0px;
                    color: #5afff1;
                  }
                }
              }
            }
          }
        }
      }
    }
    
    @keyframes play {
      from {
        transform: rotateX(50deg) rotateZ(-180deg);
      }
      to {
        transform: rotateX(50deg) rotateZ(180deg);
      }
    }
    @keyframes float {
      from {
        transform: translate(380px, 10px);
      }
      to {
        transform: translate(380px, 50px);
      }
    }
    @keyframes disk {
      from {
        transform: rotateY(0deg);
      }
      to {
        transform: rotateY(45deg);
      }
    }
    </style>
    