<template>
  <header class="header-bar">
    <b-container>
      <b-navbar toggleable="md">
        <b-navbar-brand href="/">
          <b-img style="max-width: 12rem" src="@/assets/logos/logo.png" />
        </b-navbar-brand>
        <b-navbar-toggle class="ml-auto" target="header-nav">
          <template #default="{ expanded }">
            <font-awesome-icon v-if="expanded" icon="angle-up" />
            <font-awesome-icon v-else icon="angle-down" />
          </template>
        </b-navbar-toggle>
        <b-collapse id="header-nav" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/about">Overview</b-nav-item>
            <b-nav-item to="#">Notice</b-nav-item>
            <b-nav-item to="#">News</b-nav-item>
            <b-nav-item to="#">FAQs</b-nav-item>
            <b-nav-item to="#">Downloads</b-nav-item>
            <b-nav-item to="#">Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav'
};
</script>

<style lang="scss">
.header-bar {
  width: 100%;
  height: auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 30%);
}
</style>
