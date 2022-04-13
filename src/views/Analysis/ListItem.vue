<template>
  <!-- 列表组件 -->
  <div class="list-item">
    <div class="images" :style="{ backgroundImage: `url(${url})` }"></div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <p>
        <span class="desc" v-for="(item, index) in amount" :key="index">{{
          item
        }}</span
        ><span style="">家</span>
      </p>
    </div>
    <div class="scale">
      <p v-for="item in scale" :key="item">
        <span>同比</span
        ><i :style="{ color: parseFloat(item) > 0 ? 'red' : '#258770' }">{{
          parseFloat(item) > 0 ? `+${item}` : `${item}`
        }}</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String, // 图片
    title: String,
    amount: String, // 人数
    scale: Array
  },
  name: 'listitem'
}
</script>

<style lang="less" scoped>
.list-item {
  display: flex;
  width: 447px;
  height: 111px;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(
      rgba(0, 91, 228, 0.2),
      rgba(0, 91, 228, 0.2)
    ),
    linear-gradient(#000307, #000307);
  background-blend-mode: normal, normal;
  border-radius: 4px;
  background: url("../../assets/框.png") no-repeat center center;
  .images {
    width: 70px;
    height: 100%;
    margin: 31px 10px 24px 33px;
    background-position: center center;
    background-repeat: no-repeat;
  }
  .content {
    margin-left: 10px;
    height: 100%;
    overflow: hidden;
    flex: 1;
    p {
      &:nth-child(2) {
        span {
          &:last-child {
            margin-left: 4px;
            font-size: 14px;
            width: 14px;
            height: 12px;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            line-height: 40px;
            letter-spacing: 0px;
            color: #a5a7b1;
          }
        }
      }
      .desc {
        margin-right: 3px;
        width: 27px;
        height: 27px;
        border-radius: 2px;
        border: solid 1px #274d8e;
        display: inline-block;
        text-align: center;
        line-height: 27px;
        font-family: Impact;
        font-size: 22px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 1px;
        color: #acd7f5;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.4);
      }
    }
    .title {
      width: 70px;
      height: 14px;
      margin-top: 24px;
      font-family: PingFang-SC-Regular;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 20px;
      letter-spacing: 0px;
      color: #d1d8e9;
      margin-bottom: 10px;
    }
  }
  .scale {
    width: 86px;
    height: 38px;
    font-family: MicrosoftYaHei;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #a5a7b1;
    margin-right: 25px;
    i {
      margin-left: 5px;
    }
  }
}
</style>
