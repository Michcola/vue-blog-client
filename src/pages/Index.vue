<template v-if="blog.user">
  <div id="index">
    <section class="blog-posts">
      <!-- 列表渲染，指定博客对应路径 -->
      <router-link class="item" v-for="blog in blogs" :key="blog.id" :to="`/detail/${blog.id}`">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>{{blog.title}}<span> {{friendlyDate(blog.createdAt)}}</span></h3>
        <p>{{blog.user.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        @current-change="onPageChange"
        layout="prev, pager, next"
        :current-page="page"
        :total="total">
      </el-pagination>
    </section>
  </div>
</template>

<script>
  import blog from "../api/blog"

  export default {
    data() {
      return {
        blogs: [],
        total: 0,
        page: 1
      }
    },
    // 在创建博客的时候直接读取博客 data等信息
    created() {
      // 判断当前页面页码 注意是 $route
      this.page = parseInt(this.$route.query.page)
      blog.getIndexBlogs({ page: this.page }).then(res => {
        //console.log(res);
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
      })
    },

    methods: {
      onPageChange(newPage) {
        blog.getIndexBlogs({
          page: newPage
        }).then(res => {
          this.blogs = res.data
          this.total = res.total
          this.page = res.page
          // 将当前分页链接引入路由，使得刷新页面不发生改变
          this.$router.push({ path: '/',query: {page: newPage }})
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../assets/base.less";

#index {
  .item {
    display: grid;
    grid: auto auto / 80px 1fr;
    margin: 20px 0;
    .avatar {
      grid-column: 1;
      grid-row: 1 / span 2;
      justify-self: center;
      margin-left: 0;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      figcaption {
        font-size: 12px;
        color: @textLighterColor;
      }
    }
    h3 {
      grid-column: 2;
      grid-row: 1;
      max-width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      &>span {
        color: @textLighterColor;
        font-size: 12px;
        font-weight: normal;
      }
    }
    p {
      grid-column: 2;
      grid-row: 2;
      margin-top: 0;
    }
  }

  .pagination{
    display: grid;
    justify-items: center;
    margin-bottom: 30px;
  }
}

</style>
