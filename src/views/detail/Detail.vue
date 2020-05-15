<template>
  <div>
    <h2>{{iid}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data() {
      return {
        iid: null
      }
    },
    created() {
      this.iid = this.$route.query.id
    },
    beforeRouteEnter(to, from, next) {
      next()
    },
    destroyed() {
      console.log(1)
    }
  }
</script>

<style>
</style>
