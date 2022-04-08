<template>
  <div class=''>
      <div @click="d">5</div>

  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods:{
      d(){
          this.$router.push('/screen')
          console.log(this.$route)
      }
  }
  
}
</script>

<style lang='less' scoped>

</style>
