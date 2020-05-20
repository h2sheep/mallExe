export default {
    //mutations中唯一的目的就是修改state中的状态
    //每个方法尽可能只完成单一的事件
    //复杂的事件可以通过action来分解


    pushCartList(state, payload) {
      state.cartList.push(payload)
    },
    addCounter(state, payload) {
      payload.count++
    }

  }