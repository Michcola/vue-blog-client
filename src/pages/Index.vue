<template>
  <div class="Index">
   Index
   <p>sss</p>
   <dir>
     <el-button @click="onClick1">111</el-button>
     <el-button type="text" @click="open">点击打开 Message Box</el-button>
   </dir>
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
<style scoped lang=less>
@import "../assets/base.less";

p{
  color: @themeColor;
}
</style>
