<template>
  <div id="detail">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" :title="user.username" class="avatar">
      <h3>{{title}}</h3>
      <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link> {{friendlyDate(createdAt)}}</p>
    </section>
    <!-- 用 v-html 转换 html 为 markdown -->
    <section class="article" v-html="markdown"></section>
  </div>
</template>

<script>
  import marked from 'marked'
  import blog from '@/api/blog'

  export default {
    data() {
      return {
        title: '',
        rawContent: '',
        user: {},
        createdAt: ''
      }
    },

    created() {
      // params：参数数组
      this.blogId = this.$route.params.blogId
      blog.getDetail({ blogId: this.blogId }).then(res =>{
        this.title = res.data.title
        this.rawContent = res.data.content
        this.user = res.data.user
        this.createdAt = res.data.createdAt
      })
    },
    // computed 计算属性
    computed: {
      markdown() {
        return marked(this.rawContent)
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
