<template>
  <div class="ScreenAdapter" :style="style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ScreenAdapter',
  // 参数注入
  props: {
    width: {
      type: String,
      default: '1920'
    },
    height: {
      type: String,
      default: '1080'
    }
  },
  data () {
    return {
      style: {
        width: this.width + 'px',
        height: this.height + 'px',
        transform: 'scale(1) translate(-50%, -50%)' // 默认不缩放，垂直水平居中
      }
    }
  },
  mounted () {
    this.setScale()
    window.onresize = this.Debounce(this.setScale, 1000)
  },
  methods: {
    Debounce: (fn, t) => {
      const delay = t || 500
      let timer
      return function () {
        const args = arguments
        if (timer) {
          clearTimeout(timer)
        }
        const context = this
        timer = setTimeout(() => {
          timer = null
          fn.apply(context, args)
        }, delay)
      }
    },
    // 获取放大缩小比例
    getScale () {
      const w = window.innerWidth / this.width
      const h = window.innerHeight / this.height
      return w + ',' + h
    },
    // 设置比例
    setScale () {
      this.style.transform =
        'scale(' + this.getScale() + ') translate(-50%, -50%)'
    }
  }
}
</script>
<style scoped>
.ScreenAdapter {
  transform-origin: 0 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transition: 0.3s;
  /*background-color: #010715;*/
  font-size: 28px !important;
  /* overflow: hidden;
  background-repeat: no-repeat; */
}
</style>
