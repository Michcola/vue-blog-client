
<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title" @input="titleInput" placeholder="输入您的标题" maxlength="20"></el-input>
    <p class="msg"><span>{{titleMax}}/20</span></p>
    <h3>内容简介</h3>
    <!-- 自适应高度组件：添加 autosize 属性 -->
    <el-input type="textarea" @input="descriptInput" v-model="description" :autosize="{ minRows: 2, maxRows: 4}" placeholder="展示博客简介" maxlength="100"></el-input>
    <p class="msg"><span>{{descriptMax}}/100</span></p>
    <h3>文章内容</h3>
    <el-input type="textarea" @input="contentInput" v-model="content" :autosize="{ minRows: 6, maxRows: 30}" placeholder="请输入内容"></el-input>
    <p class="msg"><span>已输入{{contentLength}}个字</span></p>
    <!-- 添加 atIndex 开关 -->
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script>
  import blog from "@/api/blog";

  export default {
    data() {
      return {
        blogId: null,
        title: '',
        description: '',
        content: '',
        atIndex: false,
        titleMax: '',
        descriptMax: '',
        contentLength: ''
      }
    },

    created() {
      this.blogId = this.$route.params.blogId
      blog.getDetail({ blogId: this.blogId }).then(res =>{
        this.title = res.data.title
        this.content = res.data.content
        this.description = res.data.description
        this.atIndex = res.data.atIndex
        this.titleMax = 20-res.data.title.length
        this.descriptMax = 100-res.data.description.length
        this.contentLength = res.data.content.length
      })
    },

    methods: {
      onEdit() {
        blog.updateBlog({ blogId: this.blogId },{
          title: this.title,
          description: this.description,
          content: this.content,
          atIndex: this.atIndex
        })
          .then(res => {
            this.$message.success(res.msg) // 创建成功
            this.$router.push({
              path: `/detail/${res.data.id}`
            }) // 跳转页面至对应博客详情页
          })
      },
      // 添加文本框输入实时计数功能
      titleInput() {
        var txtVal = this.title.length
        this.titleMax = 20 - txtVal
        if (this.titleMax === 0) {
          this.$message.warning("字数太多了哦")
        }
      },
      descriptInput() {
        var txtVal = this.description.length
        this.descriptMax = 100 - txtVal
        if (this.descriptMax === 0) {
          this.$message.warning("字数太多了哦")
        }
      },
      contentInput() {
        this.contentLength = this.content.length
      }
    }
  };
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
