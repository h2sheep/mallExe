const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = { // 主体
  configureWebpack: {
    resolve: {
      alias: { // 别名配置
        'views': '@/views', // 这里是views文件夹的路径 src/views
        'components': '@/components' ,// 这里是components文件夹的路径 src/components
        'assets': '@/assets',
        'network': '@/network',
        'common': '@/common'
      }
    }
  }
}
