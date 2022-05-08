<template>
  <div id="app">
  <AppHeader />
    <router-view/>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 60px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.space-pbt__30 {
   padding-bottom: 30px;
 }
</style>
