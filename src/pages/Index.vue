<template>
  <div id="index">
    <section class="blog-posts">
      <!-- 列表渲染，指定博客对应路径 -->
      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="blog.user.username">
          <figcaption>嘻嘻</figcaption>
        </figure>
        <h3>前端大揭秘}<span> 2天谴</span></h3> 
        <p>本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆
          本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆
        </p>
      </div>

      <div class="item">
        <figure class="avatar">
          <img src="http://cn.gravatar.com/avatar/1?s=128&d=identicon" alt="blog.user.username">
          <figcaption>嘻嘻</figcaption>
        </figure>
        <h3>前端大揭秘}<span>2天谴</span></h3> 
        <p>本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆
          本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆本文是啊啊啊啊 打豆豆
        </p>
      </div>

    </section>
   
  </div>
</template>

<script>
import request from "@/helpers/request"
import auth from '@/api/auth'
import blog from '@/api/blog'

window.request = request
window.auth = auth
window.blog = blog


export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    onClick1(){
      this.$message({
        message:'恭喜你',
        type: 'success'
      })
    },
    open() {
      this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
      dangerouslyUseHTMLString: true
      });
    },
  },
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
        border-radius: 50%;
      }

      figcaption {
        font-size: 12px;
        color: @textLighterColor;
      }
    }

    h3 {
      grid-column: 2;
      grid-row: 1;

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
}
</style>
