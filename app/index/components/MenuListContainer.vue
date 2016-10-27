<template>
  <div class="ui big fluid action input">
    <h2>搜索菜名</h2>
    <input type="text"
      v-model="searchKeyWord"
      placeholder="菜谱名称"
      @keyup.enter="search" >
    <button class="ui button"
      @click="search">Search</button>
  </div>
  <br>
  <div class="ui big fluid action input">
    <h2>随机搜索</h2>
    <hr>
    <input type="number" placeholder="搜索个数" v-model="randomMenuListRows">
    <button class="ui button"
      @click="searchList">Search list</button>
  </div>
  <br>
  <div class="ui big fluid action input">
    <h2>美女图片 </h2>
    <hr>
    <input type="number" placeholder="搜索个数" v-model="girlsNum">
    <button class="ui button"
      @click="searchGirl">Search list</button>
  </div>
  <br>

  <div class="ui grid">
    <div class="column">
    <button class="ui button" @click="clearMenuData">clear</button>
    </div>
  </div>
  <div class="ui grid">
    <div class="doubling four column row">
      <div class="column" v-for="item in menuList" transition="bounce" enter-stagger="200">
        <menu-list-item v-bind:item="item"></menu-list-item>
      </div>

      <div class="column" v-for="item in girlsList" transition="bounce" enter-stagger="200">
        <div class="ui card raised">
        <div class="image">
            <img v-bind:src="item.picUrl" />
          </div>
          <div class="content">
            <a class="header">{{item.title}}</a>
            <div class="meta">
              <span class="date">{{item.ctime}}</span>
            </div>
            <div class="description">
              {{item.description}}
            </div>
          </div>
          <!-- <div class="extra content">
            <a>
              <i class="leaf icon"></i>
              {{item.keywords}}
            </a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CONFIG from '../../../config.js'
  import _ from '../../../node_modules/lodash/lodash.min.js'
  import MenuListItem from './MenuListItem.vue'

  export default {
    data(){
      return {
        searchKeyWord: '宫保鸡丁',
        menuList: [],
        randomMenuList: [],
        randomMenuListPage: 1,
        randomMenuListRows: 10,
        girlsNum: 10,
        girlsList: []
      }
    },
    methods: {
      search(){
        // 天狗健康菜谱 http://apistore.baidu.com/apiworks/servicedetail/987.html
        let self = this
        let COOK_URL = 'http://apis.baidu.com/tngou/cook/name?name=' + self.searchKeyWord
        let headers = {"apikey": CONFIG.apikey};
        $.ajax({
          method: 'GET',
          headers: headers,
          dataType: 'json',
          url: COOK_URL,
          success(data){
            self.menuList = _.take(data.tngou, 10)
          }
        })
      },

      clearMenuData(){
        let self = this
        self.menuList = []
      },

      searchList(){
        // 天狗健康菜谱列表
         let self = this
         let COOL_LIST_URL = 'http://apis.baidu.com/tngou/cook/list?id=0&page='+self.randomMenuListPage+'&rows=' + self.randomMenuListRows
         self.randomMenuListPage = _.random(0, 100)
         let headers = {"apikey": CONFIG.apikey};
         $.ajax({
           method: 'GET',
           headers: headers,
           dataType: 'json',
           url: COOL_LIST_URL,
           success(data){
             self.menuList = data.tngou
           }
         })
      },
      searchGirl(){
        // 美女图片 http://apis.baidu.com/txapi/mvtp/meinv?num=10
        let self = this
        let GIRLS_URL = 'http://apis.baidu.com/txapi/mvtp/meinv?num=10'+self.girlsNum
        self.clearMenuData()
        let headers = {"apikey": CONFIG.apikey};
        $.ajax({
          method: 'GET',
          headers: headers,
          dataType: 'json',
          url: GIRLS_URL,
          success(data){
            console.log(data)
            self.girlsList = data.newslist
          }
        })
      }
    },

    components: {
      MenuListItem
    }
  }
</script>

<style scoped>
/* 必需 */
.fadeIn-transition {
transition: all .3s ease;
}

/* .fadeIn-enter 定义进入的开始状态 */
/* .fadeIn-leave 定义离开的结束状态 */
.fadeIn-enter, .fadeIn-leave {
  height: 0;
  opacity: 0;
}

.bounce-transition {
  display: inline-block; /* 否则 scale 动画不起作用 */
}
.bounce-enter {
  animation: bounce-in 1s;
}
.bounce-leave {
  animation: bounce-out 1s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(0);
  }
}
</style>
