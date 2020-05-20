<template>
  <div class="cate-list">


    <div>
    </div>

    <div class="cate">
      <ul>
        <li
          v-for="(item, index) in list"
          :class="{active: index === curIndex}"
          @click="listClick(index)"
        >
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>



  </div>
</template>

<script>
  export default  {
    name: 'CategoryList',
    data() {
      return {
        curIndex: 0
      }
    },
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      listClick(index) {
        this.curIndex = index
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .cate-list {
    font-size: 14px;
    font-weight: bold;

    .cate {

      li {
        width: 90px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #e6e6e6;
      }

      .active {
        color: #d00000;
        background-color: #fff;
      }
    }
  }
</style>
