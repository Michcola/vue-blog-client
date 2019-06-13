<template>
  <div id="login">
    <h4>用户名</h4>
    <!-- 这里未用UI组件，input 样式在 common.less 里新增 -->
    <input v-model="username" placeholder="用户名">
    <h4>密码</h4>
    <input v-model="password" type="password" placeholder="密码" @keyup.enter="onLogin"> <!-- 回车登录 -->
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">没有帐号？<router-link to="/register">注册新用户</router-link></p>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),

    onLogin() {
      this.login({username: this.username, password: this.password})
        .then(()=>{
          this.$router.push({path: '/'})
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import url('../assets/base.less');

  // 布局同样用 grid
  #login, #register {
    display: grid;
    justify-content: center;
    padding-top: 30px;

  h4 {
    margin: 16px 0;
  }

  p {
    margin: 5px 0;
  }

  input {
    width: 500px;
    font-size: 14px;
  }

  button {
    margin-top: 30px;
    justify-self: start;
  }

  .notice {
    font-size: 12px;
    color: @textLighterColor;
    text-align: center;
    margin-top: 20px;

  a {
    color: @themeColor;
  }
  }
  }
</style>
