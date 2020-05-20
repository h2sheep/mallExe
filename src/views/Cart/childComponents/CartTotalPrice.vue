<template>
  <div class="total-price">

    <div class="check">
      <check-btn
        class="check-all"
        :isChecked="isAllChecked"
        @click.native="checkAll"
      />
      <span>全选</span>
      <div class="sum">合计：￥{{totalPrice}}</div>
    </div>

    <div class="cal" ref="cal">去结算({{proCounter}})</div>

  </div>
</template>

<script>
  import CheckBtn from 'components/content/checkBtn/CheckBtn'

  import {throttle} from 'common/utils.js'

  export default {
    name: 'CartTotalPrice',
    data() {
      return {
        // isAllChecked: true
      }
    },
    components: {
      CheckBtn
    },
    mounted() {
      this.$refs.cal.onclick = throttle(this.calClick, 500)
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preVal, item) => {
          return preVal + item.price * item.count
        }, 0)
      },
      proCounter() {
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isAllChecked() {
        if (this.$store.state.cartList.length === 0) return false

        // return this.$store.state.cartList.filter(item => item.checked).length === this.$store.state.cartList.length ? true :  false

        // return !this.$store.state.cartList.filter(item => !item.checked).length

        return !this.$store.state.cartList.find(item => !item.checked)
      }
    },
    methods: {
      checkAll() {
        if (this.isAllChecked) {
          this.$store.state.cartList.forEach(item => item.checked = false)
        } else {
          this.$store.state.cartList.forEach(item => item.checked = true)
        }

        // this.$store.state.cartList.forEach(item => item.checked = !this.isAllChecked)
      },
      calClick() {
        console.log(1)
        if (this.proCounter === 0) {
          this.$toast.show('请选择需要购买的商品', 1500)
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .total-price {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 40px;
    font-size: 14px;
    background-color: #ececec;

    .check {
      display: flex;
      align-items: center;

      .check-all {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 5px 0 10px;
      }


      .sum {
        margin-left: 10px;
      }
    }

    .cal {
      width: 100px;
      margin-right: 10px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background-color: #eb0000;
    }
  }
</style>
