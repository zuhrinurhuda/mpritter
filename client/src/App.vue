<template>
  <div id="app">
    <navbar-component></navbar-component>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style>
</style>
