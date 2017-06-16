import Vue from 'vue'
import App from './App.vue'
import bus from "./bus"

function handleDatabaseUpdate(){
  bus.$emit("refresh-data", [1,2,3])
}

new Vue({
  el: '#app',
  render: h => h(App),
  mounted(){
    handleDatabaseUpdate()
  }
})
