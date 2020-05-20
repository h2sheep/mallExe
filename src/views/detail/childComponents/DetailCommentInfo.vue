<template>
  <div class="comment-info" v-if="comment">

    <div class="comment-top">
      <div>用户评价</div>
      <div>更多</div>
    </div>

    <div class="user" v-if="comment.user">
      <div class="avatar"><img :src="comment.user.avatar" alt=""></div>
      <div class="user-name">{{comment.user.uname}}</div>
    </div>

    <div class="info">
      <div>{{comment.content}}</div>
      <div class="bottom">
        <div class="time">{{new Date(comment.created * 1000).toLocaleString()}}</div>
        <div class="style">{{comment.style}}</div>
      </div>
    </div>

    <div class="imgs" v-if="comment.images">
      <div v-for="index in comment.images.length" class="img-item">
        <img :src="comment.images[index - 1]" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'DetailCommentInfo',
    props: {
      comment: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="less">
  .comment-info {
    padding: 10px 0;
    margin-bottom: 10px;
    box-shadow: 0 3px 0 rgba(0, 0, 0, .1);

    .comment-top {
      display: flex;
      margin: 0 10px;
      padding: 10px 0;
      justify-content: space-between;
      box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
    }

    .user {
      display: flex;
      align-items: center;

      .avatar {
        margin: 5px 10px;

        img {
          width: 40px;
          border-radius: 50%;
        }
      }
    }

    .info {
      margin: 0 10px;
      font-size: 14px;

      .bottom {
        display: flex;
        margin: 10px 0;
        color: #939393;

        .time {
          margin-right: 10px;
        }
      }
    }

    .imgs {
      display: flex;
      margin: 0 10px 10px;

      .img-item {
        margin-right: 5px;

        img {
          width: 50px;
          height: 50px;
        }
      }

    }
  }
</style>
