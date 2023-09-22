/*
 * @Author: Ren Bing
 * @Date: 2022-11-08 09:52:48
 * @LastEditors: Ren Bing
 * @LastEditTime: 2023-08-23 17:43:31
 * @Description: 请填写简介
 */
module.exports = {
  // lintOnSave: false, // 暂时关闭代码格式检测
  outputDir: 'dist', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  //  publicPath: process.env.NODE_ENV === 'production' ? '' : '/', // 部署应用包时的基本 URL
  // nginx部署有子路由时这publicpath为/
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/', // 部署应用包时的基本 URL
// webpack
  configureWebpack: {
    // 添加cdn引入，
    devtool: false,
    externals: {
      echarts: 'echarts',
    }
    // ...其它配置
    // ...其它配置
  },
  chainWebpack:config=>{
  //   config.module
  //   .rule('worker')
  // .test(/\.worker\.js$/)
  // .use('worker-loader')
  //   .loader('worker-loader')
  // .options({
  //   inline:'fallback'
  //   })
    },
}
// 启动仪式
if (process.env.NODE_ENV !== 'production') {
  console.error([
    '888888  db          dP88   dPYb     dP88',
    '  88   dPYb        dP 88  dP   Yb  dP 88',
    '  88  dP__Yb      d888888 Yb   dP d888888',
    '  88 dP    Yb         88   YbodP      88'
  ].join('\n'))
  console.warn([
    '',
    '                   _ooOoo_',
    '                  o8888888o',
    '                  88" . "88',
    '                  (| -_- |)',
    '                  O\\  =  /O',
    '               ____/`---\'\\____',
    '             .\'  \\\\|     |//  `.',
    '            /  \\\\|||  :  |||//  \\',
    '           /  _||||| 卍 |||||-  \\',
    '           |   | \\\\\\  -  /// |   |',
    '           | \\_|  \'\'\\---/\'\'  |   |',
    '           \\  .-\\__  `-`  ___/-. /',
    '         ___`. .\'  /--.--\\  `. . __',
    '      ."" \'<  `.___\\_<|>_/___.\'  >\'"".',
    '     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |',
    '     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /',
    '======`-.____`-.___\\_____/___.-`____.-\'======',
    '                   `=---=\'',
    '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
    '         佛祖保佑       永无BUG'
  ].join('\n'))
}

