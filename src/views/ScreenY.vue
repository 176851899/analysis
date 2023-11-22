<!--
 * @Author: Ren Bing
 * @Date: 2023-11-16 09:44:38
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-11-16 09:44:43
 * @Description: 请填写简介
-->
<template>
  <div
    class="container"
    v-if="obj"
  >
    <head-item></head-item>
    <nav>
      <list-item
        v-for="(item, index) in obj"
        :key="index"
        :title="item.title"
        :url="item.url"
        :desc="item.desc"
        :des="item.des"
      ></list-item>
    </nav>
    <main>
      <chart-item
        width="420px"
        style="margin-right: 15px"
      >
        <template #item>
          <div
            class="per"
            style="width: 390px; height: 400px"
            ref="per"
          ></div>
        </template>
      </chart-item>
      <chart-item
        title="各险种缴费明细"
        width="960px"
        style="margin-right: 15px"
      >
        <template #nav>
          <ul class="list">
            <li>城职养老</li>
            <li>城居养老</li>
            <li>机关养老</li>
            <li>失业保险</li>
            <li>工商保险</li>
          </ul>
        </template>
        <template #item>
          <div class="animation">
            <ul class="disk">
              <li class="l">
                <div class="title-list">288.7</div>
                <div class="title-listTwo">个人缴费金额</div>
                <div class="images"></div>
              </li>
              <li class="l">
                <div class="title-list">288.7</div>
                <div class="title-listTwo">单位缴费金额</div>
                <div class="images"></div>
              </li>
              <li class="l">
                <div class="title-list">258.7</div>
                <div class="title-listTwo">补缴金额</div>
                <div class="images"></div>
              </li>
              <li class="l">
                <div class="title-list">98.7</div>
                <div class="title-listTwo">退缴金额</div>
                <div class="images"></div>
              </li>
              <li class="l">
                <div class="images"></div>
              </li>
              <li class="l">
                <div class="images"></div>
              </li>
              <li class="l">
                <div class="title-list">96%</div>
                <div class="title-listTwo">征缴率</div>
                <div class="images"></div>
              </li>
              <li class="l">
                <div class="title-list">254.6</div>
                <div class="title-listTwo">缴费总人数</div>
                <div class="images"></div>
              </li>
              <li class="l">
                <div class="title-list">城职养老</div>
                <div class="images">
                  <p class="pone">455.7</p>
                  <p class="ptwo">征缴总金额</p>
                </div>
              </li>
            </ul>
            <div class="rotate"></div>
          </div>
        </template>
      </chart-item>
      <chart-item
        width="420px"
        title="各险种缴费补缴/退缴情况"
        :show="false"
      >
        <template #item>
          <div
            style="width: 420px; height: 420px"
            ref="rader"
          ></div>
        </template>
      </chart-item>
      <chart-item
        width="600px"
        title="缴费趋势分析"
        option="全部"
      >
        <template #item>
          <div
            style="width: 620px; height: 250px"
            ref="bar"
          ></div>
        </template>
      </chart-item>
      <chart-item
        width="600px"
        title="征缴趋势分析"
        :show="false"
        style="margin-left: 11px; margin-right: 11px"
      >
        <template #item>
          <div
            style="width: 600px; height: 300px"
            ref="axis"
          ></div>
        </template>
      </chart-item>
      <chart-item
        width="600px"
        title="补缴/退缴趋势分析"
        option="全部"
      >
        <template #item>
          <div
            style="width: 100%; height: 270px"
            ref="mix"
          ></div>
        </template>
      </chart-item>
    </main>
  </div>
</template>
<script>
import { perChart, raderChart, barChart, axisChart, mix1Chart } from '../instantiation/screen'
import img70 from '../asset/01_70.png'
import img1 from '../asset/01_7.png'
import img75 from '../asset/01_75.png'
import img38 from '../asset/01_38.png'
import img44 from '../asset/01_44.png'
import img62 from '../asset/01_62.png'
import img01 from '../asset/01.png'
import HeadItem from './Screen/HeadItem.vue'
import ListItem from './Screen/ListItem.vue'
import ChartItem from './Screen/ChartItem.vue'
export default {
  name: 'home',
   components: {
    HeadItem,
    ListItem,
    ChartItem
  },
  data () {
    return {
      obj: [
        {
          url: img70,
          title: '个人缴费金额',
          desc: '34.56',
          des: '+2.5%'
        },
        {
          url: img38,
          title: '单位缴费金额',
          desc: '86.56',
          des: '-0.2%'
        },
        {
          url: img1,
          title: '征缴总金额',
          desc: '234.5',
          des: '+2.5%'
        },
        {
          url: img75,
          title: '缴费总人数',
          desc: '34.56',
          des: '+2.5%'
        },
        {
          url: img44,
          title: '征缴率',
          desc: '96',
          des: '+2.5%'
        },
        {
          url: img62,
          title: '补缴金额',
          desc: '243.6',
          des: '+2.5%'
        },
        {
          url: img01,
          title: '退费金额金额',
          desc: '34.56',
          des: '+2.5%'
        }
      ],
      arr: [220, 182, 191, 234, 290, 330, 310, 400, 500, 300, 200, 188],
    
      list: [70, 40, 80, 70, 50, 50, 60, 70, 20, 70, 30, 40]
    }
  },
 watch: {
    // 动态
    arr: {
      // 处理器
      handler (newVal) {
        // console.log(newVal, '55', this.list)
        // console.log('监控成功')
        barChart(this.$refs.bar, newVal, this.list)
      }
      // immediate: true, // 组件实例创建时，立刻调用 handler 处理器
    }
  },
 created(){
    
  this._trimerID = setInterval(() => {
      this.arr = this.arr.map((item) => item + 1)
      this.list = this.list.map((item) => item - 1)
      // console.log('time')
    }, 1000)
  },
  mounted () {
    perChart(this.$refs.per)
    raderChart(this.$refs.rader)
    barChart(this.$refs.bar, this.arr, this.list)
    axisChart(this.$refs.axis)
    mix1Chart(this.$refs.mix)

  
  },
  beforeDestroy(){
    clearInterval(this._trimerID)
    perChart(this.$refs.per,true)
    raderChart(this.$refs.rader,true)
    barChart(this.$refs.bar, this.arr, this.list,true)
    axisChart(this.$refs.axis,true)
    mix1Chart(this.$refs.mix,true)
  }
  
}
</script>

<style lang="less" scoped>
.container {
  width: 1920px;
  height: 1080px;
  background-color: #10171f;
  nav {
    width: 1840px;
    height: 100px;
    border: solid 1px #2564ae;
    margin: auto;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
  main {
    width: 1840px;
    height: 829px;
    overflow: hidden;
    margin: auto;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .list {
      width: 465px;
      height: 100%;
      display: flex;
      li {
        font-size: 14px;
        width: 20%;
        height: 100%;
        line-height: 40px;
        color: #a9b5c0;
        cursor: pointer;
        position: relative;
        &:hover {
          color: #fff;
          &::after {
            content: "";
            width: 57px;
            height: 2px;
            background-color: #2383ed;
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
        &:nth-child(1) {
          &::after {
            content: "";
            width: 57px;
            height: 2px;
            background-color: #2383ed;
            position: absolute;
            left: 0;
            bottom: 0;
          }
        }
      }
    }
    .per {
      background: url("../asset/底部.png") no-repeat center center;
    }
  }
}
.animation {
  width: 100%;
  height: 450px;
  background: url("../asset/底部001.png") no-repeat center center;
  
  //  animation:disk 3s infinite linear alternate;
  position: relative;
  .disk {
    position: relative;
    width: 100%;
    height: 450px;
    transform-style: preserve-3d;

    // animation: play 5s  linear;
    .l {
      width: 100px;
      height: 120px;
      margin-top: 10px;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      &:nth-child(1) {
        transform: translate(200px, 210px);
        .images {
          background-image: url("../asset/球02-蓝色.png");
        }
      }
      &:nth-child(2) {
        transform: translate(610px, 213px);
        .images {
          background-image: url("../asset/球02-蓝色拷贝.png");
        }
      }
      &:nth-child(3) {
        transform: translate(70px, 100px);
        .images {
          background-image: url("../asset/球02-蓝色拷贝2.png");
        }
      }
      &:nth-child(4) {
        transform: translate(780px, 100px);
        .images {
          background-image: url("../asset/球02-蓝色拷贝3.png");
        }
      }
      &:nth-child(5) {
        transform: translate(200px, 45px);
        .images {
          background-image: url("../asset/球02-蓝色拷贝4.png");
          background-repeat: no-repeat;
        }
      }
      &:nth-child(6) {
        transform: translate(600px, 35px);
        .images {
          background-image: url("../asset/球02-蓝色拷贝4.png");
          background-repeat: no-repeat;
        }
      }
      &:nth-child(7) {
        transform: translate(480px, 162px);
        .images {
          background-image: url("../asset/球03-橙色.png");
          background-repeat: no-repeat;
        }
        .title-list,
        .title-listTwo {
          color: #f7caa3 !important;
        }
      }
      &:nth-child(8) {
        transform: translate(290px, 150px);
        .images {
          background-image: url("../asset/球03-橙色拷贝.png");
          background-repeat: no-repeat;
        }
        .title-list,
        .title-listTwo {
          color: #f7caa3 !important;
        }
      }
      &:nth-child(9) {
        // transition: all 2s;
        transform: translate(380px, 10px);
        width: 200px;
        height: 200px;
        animation: float 3s infinite linear alternate;
        .images {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background-image: url("../asset/球01.png");
          background-repeat: no-repeat;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .pone {
            width: 58px;
            height: 18px;
            font-family: DINPro-Bold;
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;

            letter-spacing: 0px;
            color: hsl(16, 85%, 55%);
          }
          .ptwo {
            width: 80px;
            height: 15px;
            font-family: PingFang-SC-Bold;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 24px;
            letter-spacing: 0px;
            color: #8a2500;
            margin-top: 13px;
          }
        }
        .title-list {
          height: 19px;
          font-family: PingFang-SC-Bold;
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 24px;
          letter-spacing: 0px;
          color: #ffa460;
        }
        // &:hover{
        //   margin-top: 100px;
        //   opacity: 0.8;
        // }
      }

      .images {
        width: 70px;
        height: 100%;
        // border: solid 2px #21375a;
        background-position: center center;
      }
      .title-list {
        font-family: DINPro-Bold;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #bbe4ff;
      }
      .title-listTwo {
        font-family: PingFang-SC-Bold;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 24px;
        letter-spacing: 0px;
        color: #bbe4ff;
      }
    }
  }
  /*把2D空间转成3D空间*/
  //
  // transform: rotateX(-30deg) rotateY(0deg);
  // animation: play 5s infinite linear;
  .rotate {
    width: 300px;
    height: 300px;
    transform: rotateX(50deg) rotateZ(-180deg) ;
    background: url("../asset/底部.png") no-repeat center center;
    background-size: cover;
    position: absolute;
   top: 10px;
    animation: play1 3s infinite linear alternate;
    left: 330px;
  

    //
    // animation-play-state: paused;
    //
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
