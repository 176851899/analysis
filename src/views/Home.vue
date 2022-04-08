<template>
  <div class="container">
    <head-item title="流动人员档案情况分析">
      <template #city>
        <div class="city">新疆维吾尔自治区</div>
      </template>
    </head-item>

    <main>
      <!-- 列表 -->
      <section class="nav">
        <list-item
          v-for="item in files"
          :key="item.title"
          :url="item.url"
          :title="item.title"
          :amount="item.amount"
          :scale="item.scale"
        ></list-item>
      </section>
      <!-- 图表部分 -->
      <section class="chart-container">
        <div class="left">
          <chart-container width="540px" height="240px" title="性别发布">
            <template #item>
              <div
                class="sex"
                style="width: 540px; height: 200px; margin-top: 20px"
                ref="sex"
              ></div>
            </template>
          </chart-container>
          <chart-container width="540px" height="280px" title="年龄发布">
            <template #item>
              <div
                class="age"
                style="width: 540px; height: 200px; margin-top: 20px"
                ref="age"
              ></div>
            </template>
          </chart-container>
          <chart-container width="540px" height="280px" title="学历分布">
            <template #item>
              <div
                class="education"
                style="width: 540px; height: 220px;margin-top:-20px;"
                ref="education"
              ></div>
            </template>
          </chart-container>
        </div>
        <div class="center">
          <div class="map">
            <p class="title">劳动转移情况</p>
            <div class="btn">
              <span>转入</span>
              <span>转出</span>
            </div>
            <div
              class="map-item"
              style="width: 720px; height: 480px; margin-top: 60px"
              ref="map"
            ></div>
          </div>
          <div class="table">
            <p class="title">转移人数排行</p>
            <ul>
              <li v-for="item in pepoleList" :key="item.title">
                <p
                  class="address"
                  :style="{ backgroundImage: 'url(' + item.url + ')' }"
                >
                  {{ item.title }}
                </p>
                <div class="image"></div>
                <p class="people">{{ item.amount }}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="right">
          <chart-container width="540px" height="240px" title="存档性质分析">
            <template #item>
              <div
                class="nature"
                style="width: 520px; height: 200px; margin-top: 20px"
                ref="nature"
              ></div>
            </template>
          </chart-container>
          <chart-container width="540px" height="280px" title="存档民族分析">
            <template #item>
              <div
                class="nation"
                style="width: 520px; height: 200px; margin-top: 20px"
                ref="nation"
              ></div>
            </template>
          </chart-container>
          <chart-container
            width="540px"
            height="280px"
            title="近6个月档案接收和转出情况"
          >
            <template #item>
              <div
                class="archives"
                style="width: 520px; height: 200px; margin-top: 20px"
                ref="archives"
              ></div>
            </template>
          </chart-container>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import HeadItem from '../components/HeadItem.vue'
import ListItem from '../components/ListItem.vue'
import ChartContainer from '../components/ChartContainer.vue'
import axios from 'axios'
import {
  sex,
  age,
  education,
  archives,
  nature,
  nation,
  map
} from '../mock/analysis.js'
export default {
  name: 'home',
  data () {
    return {
      // 档案列表
      files: [
        {
          url: require('../assets/档案总存档.png'),
          title: '档案总存档',
          amount: '046199',
          scale: ['-2.56%', '2.56%']
        },
        {
          url: require('../assets/档案接受量.png'),
          title: '档案接受量',
          amount: '546699',
          scale: ['-2.56%', '2.56%']
        },
        {
          url: require('../assets/档案转出量.png'),
          title: '档案转出量',
          amount: '001199',
          scale: ['-2.56%', '2.56%']
        },
        {
          url: require('../assets/档案借阅量.png'),
          title: '档案借阅量',
          amount: '046199',
          scale: ['-2.56%', '2.56%']
        }
      ],
      // 人数排行列表
      pepoleList: [
        {
          url: require('../assets/1.png'),
          title: '地名',
          amount: '8.9万人'
        },
        {
          url: require('../assets/2.png'),
          title: '四川省',
          amount: '20万人'
        },
        {
          url: require('../assets/3.png'),
          title: '天津省',
          amount: '5万人'
        },
        {
          url: '',
          title: '河南省',
          amount: '15万人'
        },
        {
          url: '',
          title: '宁夏回族自治区',
          amount: '8.5万人'
        },
        {
          url: '',
          title: '山西省',
          amount: '9.5万人'
        }
      ],
      // mock的数据
      mock: null,
    }
  },
  components: {
    HeadItem,
    ListItem,
    ChartContainer
  },
  created(){
    axios({
      method:'post',
      url:'/mock/news'
    }).then(res => { 
        this.mock=res.data
      archives(this.$refs.archives,this.mock)
       console.log(this.mock,'moke') // 打印一下响应数据
 }).catch(error =>{
      console.log(error,'异常')
 })
  },
  mounted () {
    sex(this.$refs.sex)
    age(this.$refs.age)
    education(this.$refs.education)

    nature(this.$refs.nature)
    nation(this.$refs.nation)
    map(this.$refs.map)
  }
  
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  background-color: #000c1d;
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
