<template>
  <cc-header></cc-header>
  <div class="alert alert-info">
    {{name}}
  </div>
  <input class="form-control" type="text" v-model="name">
  <div class="btn btn-success"
  @click="clearName">clear</div>
</template>

<script>
  import ccHeader from './Header'
  export default {
    data(){
      return {
        name: 'helld'
      }
    },
    methods: {
      clearName(){
        this.name = ''
      }
    },
    components: {
      ccHeader
    }
  }
</script>

<style scoped>

</style>
