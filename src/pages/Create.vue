<template>
  <div class="create">
   <p>create blog</p>
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

.create{
  color:red;
}
@color:pink;
p{
    color: @color;
}
</style>
