<template>
   <div>我是推荐</div>
</template>

<script>
  export default {
    data () {
      return {
        seller1: {},
        msg: 'hehe'
      }
    },
    created () {
        let url
        this.$http.jsonp(url).then(function(res){
            console.log(res.data)
            
        })
    }
  }
</script>
<style>
 
</style> 