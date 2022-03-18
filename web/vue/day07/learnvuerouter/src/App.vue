<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace active-class="active">Home</router-link>
    <router-link to="/about" replace active-class="active">About</router-link> -->
    <!-- <router-link to="/home" tag="button" replace>Home</router-link> -->
    <!-- <router-link to="/about" replace>About</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link v-bind:to="'/user/' + userId">user</router-link>
    <!-- <router-link to="/profile">profile</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'kdy',age:'18 '}}">profile</router-link> -->
    <button @click="profileClick">profile</button>

    <keep-alive exclude="profile,user">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zhangsan",
    };
  },
  methods: {
    homeClick() {
      this.$router.push("/home").catch((err) => {});
    },
    aboutClick() {
      this.$router.push("/about").catch((err) => {});
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "kdy",
          age: 18,
        },
      });
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
