<template>
<div>
    <h2>我是主页</h2>
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <router-view>message</router-view>
</div>
</template>

<script>
export default {
  name: "home",
  data(){
    return {
      path: "/home/news",
    }
  },
  activated(){
    this.$router.push(this.path)
  },
  beforeRouteLeave(to,from,next){
    this.path=this.$route.path
    next()
  }
}
</script>

<style scoped>
</style>