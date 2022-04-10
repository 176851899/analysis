<template>
  <header>
    <div class="data data-left">
      {{ data }}
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="data data-right">{{ curDate }}</div>
  </header>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    title: {
      type: String,
      default: '社保缴费分析'
    }
  },
  name: 'headItem',
  data () {
    return {
      curDate:null,
      data:null
    }
  },
  mounted(){
    this.curDate=dayjs().format('YYYY-MM-DD HH:mm ')
    this.data=this.curDate.slice(0, 8).split('-').join('')
  }
}
</script>

<style lang="less" scoped>
header {
  height: 62px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url("../../asset/header.png") no-repeat center center;
  div {
    width: 140px;
    height: 28px;
    // background-color: blanchedalmond;
  }
  .title {
    width: 180px;
    height: 40px;
    font-family: SourceHanSansSC-Bold;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    // line-height: 40px;
    margin-bottom: 10px;
    letter-spacing: 2px;
    color: #fefefe;
    background-color: "";
  }
  .data {
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #ffffff;
    border: 1px solid #1851ab;
  }
  .data-right {
    letter-spacing: 0px;
    color: #1b67de;
    border: none;
    margin-right: 40px;
  }
  .data-left {
    margin-left: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    background: url("../../asset/jiao2.png") no-repeat right center;
  }
}
</style>
