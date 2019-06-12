<template>
  <div id="detail">
   <section class="user-info">
     <img class="avatar" src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="">
     <h3>前端一部大揭秘</h3>
     <p> <router-link to="/user">嘻嘻</router-link> 发布与 3天钱</p>
   </section>
   <section class="article">
     <h1>大前端</h1>
     <p>hehe </p>
     <h2>xx</h2>
   </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/base.less";
@import "../assets/article.less";

#detail {
  .user-info {
    display: grid;
    grid: auto auto / 80px 1fr;

    margin-top: 30px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ebebeb;

    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;

      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    h3 {
      grid-column: 2;
      grid-row: 1;
      margin: 5px 0;
    }

    p {
      grid-column: 2;
      grid-row: 2;

      margin-top: 0;
      font-size: 12px;
      color: @textLighterColor;
    }

    a {
      color: @themeColor;
      text-decoration: none;
    }
  }
}

.article {
  padding: 30px 0;
}
</style>
