<template>
  <div class="list-item" >

    <div class="item-btn">
      <check-btn 
        :isChecked="item.checked" 
        class="cart-btn"
        @click.native="checkClick"
      ></check-btn>
    </div>

    <div class="img">
      <img :src="item.image" alt="">
    </div>

    <div class="info">
      <h4>{{item.title}}</h4>

      <div class="detail">
        <div class="content">{{item.title}}</div>
        <div class="price">
          <div class="red-num">￥{{item.price}}</div>
          <div class="count">X{{item.count}}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import CheckBtn from 'components/content/checkBtn/CheckBtn'

  export default {
    name: 'CartListItem',
    components: {
      CheckBtn
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.item.checked = !this.item.checked
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .list-item {
    display: flex;
    padding: 10px 5px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, .2);

    .item-btn {
      display: flex;
      align-items: center;
      width: 8%;

      .cart-btn {
        width: 16px;
        height: 16px;
      }
    }

    .img {
      width: 20%;

      img {
        width: 75px;
        height: 100px;
      }
    }

    .info {
      width: 73%;
      padding-left: 20px;

      h4 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .detail {
        margin-top: 15px;
        font-size: 14px;

        .content {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .price {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          font-weight: bold;

          .red-num {
            color: red;
          }

          .count {
            margin-right: 5px;
          }
        }
      }
    }
  }
</style>
