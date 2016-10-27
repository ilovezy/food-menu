// import Vue from 'vue'
import MenuListContainer from './components/MenuListContainer'
import ccHeader from './components/ccHeader'
import ccFooter from './components/ccFooter'

// import '../../node_modules/.3.3.7@bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/semantic-ui/dist/semantic.min.css'

new Vue({
  el: '#app',
  data: {
    msg: 'hello dfsafdsaindex'
  },
  components: {
    MenuListContainer, ccHeader, ccFooter
  }
})
