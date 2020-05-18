<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">

    <div class="size" v-for="item in paramInfo.sizes[0]">
      <div>{{item[0]}}</div>
      <div>{{item[1]}}</div>
      <div>{{item[2]}}</div>
      <div>{{item[3]}}</div>
    </div>

    <div class="infos" v-for="item in paramInfo.infos">
      <div class="key"><div>{{item.key}}</div></div>
      <div class="pink"><div>{{item.value}}</div></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'DetailParamInfo',
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .detail-param-info {
    // margin: 20px 0;
    padding: 10px 0;
    box-shadow: 0 3px 0 rgba(0, 0, 0, .1);

    .size {
      display: flex;
      // justify-content: space-between;
      margin: 0 10px;
      border-bottom: 1px solid #dcdcdc;

      & > div {
        flex: 1;
        height: 30px;
        font-size: 12px;
        line-height: 30px;
      }
    }

    .infos {
      display: flex;
      margin: 0 10px;
      border-bottom: 1px solid #dcdcdc;

      & > div {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 7px 0;
        font-size: 12px;

        &.pink {
          color: #d54865;
        }
      }
    }
  }
</style>
