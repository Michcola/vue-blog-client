<template>
  <div id="create">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" @input="titleInput" placeholder="输入您的标题" :autosize="{ minRows: 2, maxRows: 6}" maxlength="30"></el-input>
    <p class="msg"><span>{{titleMax}}/30</span></p>
    <h3>内容简介</h3>
    <!-- 自适应高度组件：添加 autosize 属性 -->
    <el-input v-model="description" @input="descriptionInput" type="textarea" placeholder="展示博客简介" maxlength="100"></el-input>
    <p class="msg"><span>{{descriptionMax}}/100</span></p>
    <h3>文章内容</h3>
    <el-input v-model="content" @input="contentInput" type="textarea" :autosize="{ minRows: 4, maxRows: 30}"></el-input>
    <p class="msg"><span>已输入{{contentLength}}个字</span></p>
    <!-- 添加 atIndex 开关 -->
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onCreate">确定</el-button>
  </div>
</template>

<script>
import blog from '@/api/blog'

export default {

  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex: false,
      titleMax: 30,
      descriptionMax: 100,
      contentLength: 0
    }
  } ,
  methods: {
    onCreate(){
      blog.createBlog({ title:this.title, content:this.content, description:this.description,atIndex:this.atIndex})
        .then(res => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}` })
        })
    },
    // 添加文本框输入实时计数功能
    titleInput() {
      var txtVal = this.title.length
      this.titleMax = 30 - txtVal
      if (this.titleMax === 0) {
        this.$message.warning("字数太多了哦")
      }
    },
    descriptionInput() {
      var txtVal = this.description.length
      this.descriptionMax = 100 - txtVal
      if (this.descriptionMax === 0) {
        this.$message.warning("字数太多了哦")
      }
    },
    contentInput() {
      this.contentLength = this.content.length
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  p.msg {
    display: grid;
    justify-content: end;
    color: #999;
    font-size: 12px;
  }
</style>
