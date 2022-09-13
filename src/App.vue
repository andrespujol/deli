<template>
  <div id="app">
    <NavBar />
    <HomeView title="Delicias"/>
    <ProductCard />
    <ContactUs />
    <FooterApp />
  </div>
</template>

<script>
import HomeView from './components/HomeView.vue';
import NavBar from './components/NavBar.vue';
import FooterApp from './components/FooterApp.vue';
import ContactUs from './components/ContactUs.vue';
import ProductCard from './components/ProductCard.vue';

export default {
  name: 'App',
  components: {
    HomeView,
    NavBar,
    FooterApp,
    ContactUs,
    ProductCard,
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
