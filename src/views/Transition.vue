<template>
  <!-- 项目大屏入口 -->
  <div>
    <div class="Tips">
      <router-link
        to="/pag/screen"
        custom
        v-slot="{ navigate, isActive }"
      >
        <li
          @click="navigate"
          :class="isActive? 'active':''"
        >
          社保缴费分析
        </li>
      </router-link>
      <router-link
        to="/pag/analysis"
        custom
        v-slot="{ navigate, isActive }"
      >
        <li
          @click="navigate"
          :class="isActive? 'active':''"
        >
          流动人口
        </li>
      </router-link>

    </div>
    <router-view> </router-view>
  </div>

</template>
<script>

export default {
   name: 'App'
}
</script>
<style lang="less" scoped>
i  {
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul,li {
  list-style: none;
}
.Tips{
  position: fixed;
  color: #fff;
  width: 200px;
  min-height: 100px;
  left:15%;
  top:6%;
  z-index: 999;
  //  animation:play 12s infinite linear alternate;
  cursor: pointer;
  display: flex;
  .active{
    color: #42b983;
  }
  li{
    width: 100%;
    height: 50px;
    font-size: 16px;
  }

}
</style>
