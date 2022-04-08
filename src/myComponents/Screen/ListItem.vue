<template>
  <div class="list-item">
    <div class="images" :style="{ backgroundImage: `url(${url})` }"></div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <p>
        <span class="desc">{{ desc }}</span
        ><span style="margin: 0 15px">万元</span
        ><i :style="{ color: parseFloat(des) > 0 ? 'red' : '#258770' }">{{
          des
        }}</i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    desc: String,
    des: String
  },
  name: 'listitem'

}
</script>

<style lang="scss" scoped>
.list-item {
  width: calc(100% / 7);
  height: 71px;
  display: flex;
  position: relative;
  margin: 15px 0px 15px 21px;
  opacity: 1;
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 69px;
    right: 0;
    background-color: #2683eb;
  }
  .images {
    width: 70px;
    height: 100%;
    // border: solid 2px #21375a;
    background-position: center center;
  }
  .content {
    margin-left: 10px;
    p {
      width: 100%;
      height: 14px;
      font-family: PingFang-SC-Medium;
      font-size: 14px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 40px;
      letter-spacing: 0px;
      color: #fefefe;
      margin-bottom: 13px;
      display: flex;
      .desc {
        width: 64px;
        height: 19px;
        font-family: PingFang-SC-Bold;
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 40px;
        letter-spacing: 0px;
        color: #ffffff;
      }
      i {
        font-family: PingFang-SC-Medium;
        font-size: 12px;
        font-weight: normal;
        letter-spacing: 0px;
        color: #f32424;
      }
    }
  }
}
</style>
