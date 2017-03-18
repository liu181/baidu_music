<template>
   <div>
     <headers></headers>
     <div class="tab">
       <div class="tab-item">
         <router-link to="/rank">排行榜</router-link>
       </div>
       <div class="tab-item">
        <router-link to="/recommend">推荐</router-link>
       </div>
       <div class="tab-item">
        <router-link to="/collection">收藏</router-link>
       </div>
     </div>
     <router-view></router-view>
   </div>
   
</template>

<script>
  import headers from './src/components/header/header.vue';
  export default {
    data() {
      return {
        msg: "hehe~~~"
      }
    },
    components: {
      headers
    }
    
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: '微软雅黑';
    background: #fff;
    padding: 3px;
    overflow: hidden;
  }
  li{
   list-style: none;
  }
  .tab{
    height: 30px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #C5C1AA;
  }
  .tab>.tab-item{
    flex: 1;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    
  }
  .tab>.tab-item>a{
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #CD5555;
    text-decoration: none;
  }
  .tab>.tab-item>a.active{
    background: pin;
  }
  

</style>
