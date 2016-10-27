<template lang="html">
  <!-- {{listitem}} -->
  <div class="ui card raised" >
    <div class="image">
      <img v-bind:src="'http://tnfs.tngou.net/image' + item.img + '_320x240'">
    </div>
    <div class="content">
      <a class="header">{{item.name}}</a>
      <div class="meta">
        <span class="date">{{item.food}}</span>
      </div>
      <div class="description">
        {{item.description}}
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="leaf icon"></i>
        {{item.keywords}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['item'],
  computed: {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
