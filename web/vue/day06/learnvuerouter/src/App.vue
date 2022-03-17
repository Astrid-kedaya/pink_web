<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">Home</router-link>
    <router-link to="/about" replace active-class="active">About</router-link> -->
    <!-- <router-link to="/home" tag="button" replace>Home</router-link> -->
    <!-- <router-link to="/about" replace>About</router-link> -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    homeClick() {
      this.$router.push("/home").catch((err) => {});
    },
    aboutClick() {
      this.$router.push("/about").catch((err) => {});
    },
  },
};
</script>

<style>
/* .router-link-active {
  color: red;
} */

.active {
  color: red;
}
</style>
