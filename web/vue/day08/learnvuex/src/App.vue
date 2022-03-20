<template>
  <div id="app">
    <h2>----APP内容 modules中的内容----</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改name</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>----APP内容----</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <button @click="addStudent">添加学生</button>

    <button @click="updataInfo">修改信息</button>
    <h3>{{ $store.state.info }}</h3>

    <h2>----APP内容 getters相关信息----</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>

    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>

    <h2>{{ $store.getters.moreAgeStu(17) }}</h2>

    <h2>----hellovuex内容----</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import { INCREMENT } from "./store/mutation-types";

export default {
  name: "App",
  components: {
    HelloVuex,
  },
  data() {
    return {
      message: "我是APP组件",
    };
  },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // 普通的提交风格
      // this.$store.commit("incrementCount",count)

      // 特殊的提交风格
      this.$store.commit({
        type: "incrementCount",
        // 传过去的是对象，接收时取名为payload比较好
        count,
      });
    },
    addStudent() {
      const stu = { id: 4, name: "小火龙", age: 100 };
      this.$store.commit("addStudent", stu);
    },
    updataInfo() {
      // this.$store.commit("updataInfo")
      this.$store
        .dispatch("aUpdataInfo", "我是携带的信息")
        .then((res) => console.log(res));
    },
    updateName(){
      this.$store.commit("updataName",'lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdataName')
    }
  },
};
</script>

<style>
</style>
