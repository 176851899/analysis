<template>

    <screen-adapter>
      <router-view> </router-view>
    </screen-adapter>
</template>
<script>
import ScreenAdapter from './components/screenAdapter.vue'
export default {
  name: 'App',
  components: {
    ScreenAdapter
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
i {
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
ul,
li {
  list-style: none;
}
</style>
