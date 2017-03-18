<template>
  <div class="rank">
    <div class="rank-list">
      <ul>
        <li v-for="(item, index) in rankList" class="list-item" @click="changeItem(index)">{{item.name}}</li>
      </ul>
    </div>
    <div class="rank-content" >
      <ul>
        <li v-for="(item, index) in musicList" class="music-item">
        <h2>Number.{{musicList[index].rank}}</h2>
        <div class="music-content">
          <div class="music-pic">
            <img :src="musicList[index].pic_small">
          </div>
          <div class="music-des">
            <span class="song-name">{{musicList[index].title}}</span>
            <span class="artist-name">{{musicList[index].artist_name}}</span>
            <span class="public-time">{{musicList[index].publishtime}}</span>
            <span class="info"><span class="text" @click="play(musicList[index].song_id)">详情</span></span>
          </div>
        </div>
        </li> 
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        rankList: [],
        musicList: [],
        isContent: true
      }
    },
    methods: {
      getList (type, name) {
        let url = 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=' + type + '&size=10&offset=0'
        this.$http.jsonp(url).then(function(res){
        console.log(res.data)
          if(res.data.song_list) {
            this.rankList.push({
              'name': name,
              'music': res.data.song_list
            })
          }
        })
      },
      changeItem (index) {
        this.musicList = this.rankList[index].music
        
      },
      play (id) {
        console.log(id)
        let url = 'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid='+id
        this.$http.jsonp(url).then(function(res){
        console.log(res)
          
        })
      }
    },
    created () {
      this.getList(1, '新歌榜')
      this.getList(2, '热歌榜')
      this.getList(11, '摇滚榜')
      this.getList(12, '爵士')
      this.getList(16, '流行')
      this.getList(21, '欧美金曲榜')
      this.getList(22, '经典老歌榜')
      this.getList(23, '情歌对唱榜')
      this.getList(24, '影视金曲榜')
      this.getList(25, '网络歌曲榜')
    }
  }
</script>
<style>
.rank{
  display: flex;
}
.rank>.rank-list{
  
  flex: 0 0 65px;
  width: 65px;
}
.rank>.rank-list .list-item{
  height: 30px;
  width: 100%;
  text-align: center;
  line-height: 30px;
  font-size: 10px;
  font-weight: 900;
  color: #2E2E2E;
}
.rank>.rank-content{
  flex: 1;
}
.rank>.rank-content>ul{

}
.rank>.rank-content>ul>.music-item{

}

.rank>.rank-content>ul>.music-item>.h2{
height: 25px;
font-size: 20px;
line-height: 25px;
color: red;
}
.rank>.rank-content>ul>.music-item>.music-content{
  display: flex;
}
.rank>.rank-content>ul>.music-item>.music-content>.music-pic{
 
  flex: 0 0 90px;
  width: 90px;
}
.rank>.rank-content>ul>.music-item>.music-content>.music-des{
  
  margin-left: 5px;
  flex: 1
}
.rank>.rank-content>ul>.music-item>.music-content>.music-des>.song-name{
  display: block;
  font-size: 12px;
}
.rank>.rank-content>ul>.music-item>.music-content>.music-des>.artist-name{
  display: block;
  font-size: 10px;
}
.rank>.rank-content>ul>.music-item>.music-content>.music-des>.public-time{
  display: block;
  font-size: 10px;
}
.rank>.rank-content>ul>.music-item>.music-content>.music-des>.info{
  display: block;
}
.rank>.rank-content>ul>.music-item>.music-content>.music-des>.info>.text{
  float: right;
  width: 35px;
  height: 22px;
  background: #63B8FF;
  color: #5B5B5B;
  border-radius: 3px;
  margin-right: 12px;
}
</style>