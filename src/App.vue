<template>
  <div id="app">
    <NavBar />
    <router-view/>
    <FooterApp />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterApp from './components/FooterApp.vue';

export default {
    name: 'App',
    components: {
        NavBar,
        FooterApp,
    },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
