<template lang="pug">
  #app
    router-view
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "../config/config_setting";

body {
  background-color: $base-back-color;
}

#app {
  font-family: "Hiragino Maru Gothic ProN", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $base-font-color;
}
</style>
