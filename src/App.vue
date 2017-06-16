<template>
  <Hello></Hello>
</template>

<script>
import Hello from "./Hello.vue"

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Hello
  }
}
</script>

<style>

</style>
