<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" placeholder="输入您的标题" maxlength="20"></el-input>
    <p class="msg"><span>{{titleMax}}/20</span></p>
    <h3>内容简介</h3>
    <!-- 自适应高度组件：添加 autosize 属性 -->
    <el-input type="textarea" v-model="description" placeholder="展示博客简介" maxlength="100"></el-input>
    <p class="msg"><span>{{descriptMax}}/100</span></p>
    <h3>文章内容</h3>
    <el-input type="textarea" v-model="content" placeholder="请输入内容"></el-input>
    <p class="msg"><span>已输入{{contentLength}}个字</span></p>
    <!-- 添加 atIndex 开关 -->
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button >确定</el-button>
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
<style scoped>
  p.msg {
    display: grid;
    justify-content: end;
    color: #999;
    font-size: 12px;
  }
</style>
