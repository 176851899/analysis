<template>
  <!-- 图表组件 -->
  <div class="chart-item" :style="{ width, height }">
    <div class="title">
     <slot name="desc">
        <div class="desc">{{ title }}</div>
     </slot>
    </div>
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {
  name: 'ChartContainer',
  props: {
    width: {
      type: String
    },
    height: {
      type: String,
      default: '489px'
    },
    title: {
      type: String,
      default: '各险种缴费发布'
    },
    option: {
      type: String,
      default: '征缴总金额'
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-item {
  margin-top: 15px;
  width: 420px;
  height: 550px;
  background-color: #000d1f;
  position: relative;
  overflow: hidden;
  .title {
    width: 100%;
    height: 40px;
    display: flex;
    margin-left: 2px;
    justify-content: space-between;
    align-items: center;
    height: 51px;

    background-image: linear-gradient(
        90deg,
        #002450 0%,
        rgba(0, 84, 188, 0.06) 100%
      )
      url("../../assets/指引.png") !important ;
    background-blend-mode: normal, normal;
    background: url("../../assets/指引.png") no-repeat left center;
    padding-left: 30px;
    .desc {
      height: 17px;
      font-family: PingFang-SC-Bold;
      line-height: 17px;
      color: #aee0ff;
      padding-left: 30px;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 1px;
      color: #aee0ff;
    }
    .option {
      width: 140px;
      height: 28px;
      font-size: 16px;
      background: no-repeat right center;
      background-color: #061524;
      border: solid 1px;
      color: #ffffff;
      line-height: 28px;
      border: 1px solid #134086;
    }
  }
}
</style>
