<template>
  <div>
    The database data is: {{databaseData}}  
  </div>
  
</template>
<script>
import bus from "./bus"

export default {
  data(){
    return {
      databaseData: null
    }
  },
  mounted(){
    bus.$on("refresh-data", newData => this.databaseData = newData)
  }
}
</script>
