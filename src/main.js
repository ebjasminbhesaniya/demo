import Vue from 'vue'
import App from './App.vue'
Vue.directive("color",{
  bind(el){
    el.style.color="green"
    el.style.fontWeight="bold";
  }
})
Vue.config.productionTip = false
 Vue.filter('capitalize', function (value) {
   return value.toUpperCase()
 })
 Vue.filter('filterB', function (value) {
  return value.toLowerCase()
})
new Vue({
  render: h => h(App),
}).$mount('#app')
