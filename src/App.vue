<template>
  <div id="app">
    
      <div>
      <slot name='header'> This will be injected as the header slot.</slot>
      <slot name='content'> This will be the content of the element</slot>
      </div>
    
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <demo1/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import demo1 from './components/demo1.vue'
export default {
  name: "App",
  components: {
    // HelloWorld,
    demo1,
    // 'form-helper':form-helper,
    
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
