<template>
  <div id="app">
    <!-- <student-form>
      {{ message }}
      <h1 slot="header">This will be injected as the header slot.</h1>
      <h5>footer</h5>
    </student-form> -->
    <!-- <slot name="content"> This will be the content of the element</slot>  -->

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <demo1 /> -->
    <!-- <demo2 /> -->
    <todo :props="props" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import demo1 from "./components/demo1.vue";
// import demo2 from "./components/demo2.vue";
import todo from "./components/todo.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // demo1,
    // demo2,
    todo,
    // "student-form": todo,
  },
  data() {
    return {
      message: "welcome",
      props: [{ name: "jb" }, { name: "jay" }, { name: "jasmin" }],
      title: ["a", "b", "c"],
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
