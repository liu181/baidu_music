<template>
    <form action="" class="biaodan">
      <input type="text" class="search_input" v-model="name" placeholder="搜索音乐、歌手"><i class="search_btn" @click="getMes">搜索</i>
    </form>
</template>
<script>
  export default {
    data() { 
      return {
        errMes: '',
        name: ''
      }
    },
    methods: {
      getMes () {
        let url = 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=' + this.name;
        this.$http.jsonp(url).then(function(res){
          if(!res.body.song) {
            this.errMes = '站内搜索不到';
          } else {
            console.log(res);
          }
          
        }) 
      }
    }
  }
</script>
<style>
  .biaodan{
    width: 100%;
    height: 100%;
    padding: 2px;
    display: flex;
    box-sizing: border-box;
    margin-bottom: 5px;
  }
  .biaodan>.search_input{
    flex: 1;
    height: 21px;
    vertical-align: center;
    border: 1px solid #AAAAAA;
    border-radius: 2px;
    outline: none;
    margin-left: 25px;
    color: #CDC9C9;
    background-color: #EBEBEB;

  }
  .biaodan>.search_btn{
    flex: 0 0 40px;
    font-size: 10px;
    width: 40px;
    height: 21px;
    line-height: 21px;
    text-align: center;
    background: #7A378B;
    border-radius: 4px;
    margin: 0 0 0 15px;
  }
</style>
