<template>
  <div class="chart-item" :style="{ width, height }">
    <div class="title">
      <div class="desc">{{ title }}</div>
     
      <slot name="nav">
         <div class="option" >{{ option }}</div>
      </slot>
    </div>
    <slot name="item"></slot>
  </div>
</template>

<script>
export default {
  name: 'ChartItem',
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
  background-color: #071018;
  border: solid 1px #2564ae;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    width: 6px;
    height: 40px;
    position: absolute;
    left: 0;
    background-color: #2383ed;
    
  }
  .title {
    width: 100%;
    height: 40px;
    display: flex;
    margin-left: 2px;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(-90deg, #072854 0%, #102a45 100%);
    background-blend-mode: normal, normal;

    .desc {
      height: 17px;
      font-family: PingFang-SC-Bold;
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 17px;
      letter-spacing: 0px;
      color: #fefefe;
      padding-left: 30px;
      background: url("../../asset/jiao.gif") no-repeat 10px center !important;
    }
    .option {
      width: 140px;
      height: 28px;
      font-size: 16px;
      background: url("../../asset/jiao2.png") no-repeat right center;
      background-color: #061524;
      border: solid 1px;
      color: #ffffff;
      line-height: 28px;
      border: 1px solid #134086;
    }
  }
}
</style>
