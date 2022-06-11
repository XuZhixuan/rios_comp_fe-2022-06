<template>
  <div id="app">
    <header-nav />
    <router-view />
    <footer-nav />
  </div>
</template>

<script>
import HeaderNav from '@/components/layouts/HeaderNav';
import FooterNav from '@/components/layouts/FooterNav';

export default {
  name: 'App',
  components: {
    HeaderNav,
    FooterNav
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Slab:200,300,400,500,600,700,900');

body {
  font-family: 'Roboto Slab';
  // background-color: #f8f9fa;
}

a {
  color: inherit;
}

ul {
  list-style: none;
  padding-left: 0;
}
</style>
