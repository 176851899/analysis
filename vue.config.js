module.exports = {
    // lintOnSave: false, // 暂时关闭代码格式检测
   outputDir: 'dist', // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
   publicPath: process.env.NODE_ENV === 'production' ? '' : '/', // 部署应用包时的基本 URL
 }
