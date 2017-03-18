<template>
  <div class="header">
    <div class="logo">百度<i class="img"></i>音乐</div>
    <div class="search">
      <search></search>
    </div>
  </div>
</template>

<script>
  import search from '../search/search.vue';
  export default {
    data() { 
      return { 
        msg: "囧囧~~~"
      }
    },
    components: {
      search
    }
  }
</script>
<style>
  .header{
    height: 65px;
  }
  .header>.logo{
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #CD0000;
    font-weight: 900;
    font-size: 24px;
  }
  .header>.logo>.img{
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url('../../../img/baidu.bmp') 
  }
  .header>.search{
    
    height: 25px;
    
  }
</style>
