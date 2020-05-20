import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {

  /* 插件式封装 */

  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2.创建组件对象
  const toast = new toastConstructor()

  //3.挂载到某个元素上
  toast.$mount(document.createElement('div'))

  //4.插入到文档中
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

}

export default obj
