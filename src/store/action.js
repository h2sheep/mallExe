export default {
    addCart({state, commit}, payload) {
      return new Promise((resolve, reject) => {
        //3.1 获取之前存在的商品
        let oldProduct = state.cartList.find(item => {
          //通过iid作为标识符来做比较
          return item.iid === payload.iid
        })

        //1. 判断新添加的商品是否之前存在
        if (!oldProduct) {
          //2. 不存在则添加到数组中
          //2.1 数目设置为1
          payload.count = 1
          //2.2 默认选中
          payload.checked = true
          commit('pushCartList', payload)

          resolve('添加了新的商品')
        } else {
          //3. 存在就让商品的数目加1
          //payload加1 ?  不是同一个对象  应该是原来存在的加一
          commit('addCounter', oldProduct)

          resolve('当前的商品数量+1')
        }
      })
    }
  }
