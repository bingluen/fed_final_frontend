<template lang="html">
  <div>
    <p>QWQ</p>
    <google-map :center="center" :zoom="10">
    </google-map>
  </div>
</template>

<script>
import * as VueGoogleMap from 'vue-google-maps'
VueGoogleMap.load({
  key: 'AIzaSyAvjqwZqa1mzE8MZ8XSe2npC9rlr6vhWu8'
})

export default {
  name: 'HeatMap',
  data () {
    return {
      center: { lat: 24, lng: 121 }
    }
  },
  computed: {},
  ready () {},
  attached () {},
  methods: {},
  components: {
    'googleMap': VueGoogleMap.Map,
  }
}
</script>

<style lang="css">
</style>
