import Vue from 'vue'
import Favlist from './components/Favlist.vue'
import '../../node_modules/.3.3.7@bootstrap/dist/css/bootstrap.min.css'

/**
 * 天狗健康菜谱
 * http://apistore.baidu.com/apiworks/servicedetail/987.html
 */
const COOK_URL = 'http://apis.baidu.com/tngou/cook/name?name=%E5%AE%AB%E4%BF%9D%E9%B8%A1%E4%B8%81'
 var headers = {"apikey": "5292d6abaf0ec95c2b7924551e50668f"};
$.ajax({
  method: 'GET',
  headers: headers,
  dataType: 'json',
  url: COOK_URL,
  success: function(data){
    console.log('!!!!', data)
  }
})

new Vue({
  el: '#app',
  data: {
    msg: 'hello dfsafdsaindex'
  },
  components: {
    Favlist
  }
})
