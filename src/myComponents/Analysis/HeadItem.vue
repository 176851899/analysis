<template>
<!-- 标题栏 -->
  <header>
    <div class="data data-left">
      <slot name="city">
        {{ data }}
      </slot>
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div class="data data-right date">{{ curDate }}</div>
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
      curDate: null,
      data: null
    }
  },
  mounted () {
    this.date()
    setInterval(this.date, 60000)
  },
  methods: {
    date () {
      this.curDate = dayjs().format('YYYY年MM月DD日')
      this.data = this.curDate.slice(0, 8).split('-').join('')
    }
  }
}
</script>

<style lang="less" scoped>
header {
  height: 76px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url("../../assets/header.png") no-repeat center center;

  background-color: #001b46;
  box-shadow: 0px 7px 12px 0px rgba(0, 26, 78, 0.57);
  div {
    width: 140px;
    height: 28px;
    // background-color: blanchedalmond;
  }
  .title {
    width: 300px;
height: 100%;
    font-family: SourceHanSansCN-Bold;
    font-size: 26px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 1px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("../../assets/title.gif") no-repeat center bottom;
    background-size:contain;
    box-shadow: 0px 2px 3px 0px rgba(0, 15, 57, 0.63);
  }
  .data {
    font-family: PingFang-SC-Bold;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 40px;
    letter-spacing: 0px;
    color: #ffffff;
  }
  .date{
    width: 223px;
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
    background: url('../../assets/jiao.gif') no-repeat right center;
      background-size: 23px;

  }
  .data-right {
    letter-spacing: 0px;
    border: none;
    margin-right: 40px;
  }
  .data-left {
    margin-left: 47px;
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    background: no-repeat right center;
    width: 223px;
    height: 33px;
    justify-content: center;
    background-image: linear-gradient(0deg, rgba(0, 144, 255, 0.22) 100%),
      linear-gradient(#0065cd, #0065cd);
    background-blend-mode: normal, normal;
  }
}
</style>
