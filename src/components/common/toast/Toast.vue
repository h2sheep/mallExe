<template>
  <div class="toast"v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration = 2000) {
        this.isShow = true
        this.message = message

        setTimeout(() => {
          this.isShow = false
          this.message = ''
        }, duration)
      }
    }
  }
</script>

<style scoped="scoped">
  .toast {
    position: fixed;
    top: 40%;
    left: 50%;
    z-index: 999;
    padding: 5px 10px;
    color: #fff;
    font-size: 14px;
    background-color: rgba(0, 0, 0, .8);
    transform: translateX(-50%);
    border-radius: 10px;
  }
</style>
