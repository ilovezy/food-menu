<template>
  <div class="ui big fluid action input">
    <input type="text"
      v-model="searchKeyWord"
      placeholder="Search..."
      @keyup.enter="search" >
    <button class="ui button"
      @click="search">Search</button>
  </div>

  <br>

  <div class="ui grid">
    <div v-show="menuList.length == 0">什么都没有啊啊啊啊</div>
    <div class="doubling four column row">
      <div class="column" v-for="item in menuList">
        <menu-list-item v-bind:item="item"></menu-list-item>
      </div>
    </div>
  </div>
</template>

<script>
/**
 *   count
   description
   fcount
   id
   images
   img
   keywords
   message
   name
   rcount
 */
  import CONFIG from '../../../config.js'
  import _ from '../../../node_modules/lodash/lodash.min.js'
  import MenuListItem from './MenuListItem.vue'

  export default {
    data(){
      return {
        searchKeyWord: '宫保鸡丁',
        menuList: []
      }
    },
    methods: {
      search(){
        // /**
        //  * 天狗健康菜谱
        //  * http://apistore.baidu.com/apiworks/servicedetail/987.html
        //  */
         let self = this
         const COOK_URL = 'http://apis.baidu.com/tngou/cook/name?name=' + self.searchKeyWord
         let headers = {"apikey": CONFIG.apikey};
         $.ajax({
           method: 'GET',
           headers: headers,
           dataType: 'json',
           url: COOK_URL,
           success(data){
             console.log('天狗菜谱 ',data)
             self.menuList = _.take(data.tngou, 5)
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

</style>
