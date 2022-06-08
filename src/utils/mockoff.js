/***
 *  mockOff - 控制是否启用mock
 *   -判断是否为开发环境
 * */
(async () => {
  console.log(process.env.NODE_ENV)
  // console.log(process.env.NODE_ENV === 'development'?import('../mock/index.js').then():'')
  if (process.env.NODE_ENV === 'development') {
    try {
      await import('../mock/index.js')
      //  import('../mock/index.js').then()

    } catch (e) {
      console.log('mock开启异常')
    }
  } else {
    // console.log("mock禁用")
    // 因为要模拟所以先暂时用

  }
})()
