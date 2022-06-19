<template>
  <div>
    <div class="banner">
      <h3 style="text-align: center">NEWS</h3>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'NewsView'
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 5rem;
  margin-bottom: 3rem;
  background-color: #e9ecef;
}
</style>
