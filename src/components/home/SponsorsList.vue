<template>
  <div class="sponsor-area">
    <b-container>
      <h3 style="text-align: center; margin-bottom: 3rem">Sponsors</h3>
      <b-row align-h="center">
        <b-col md="3" v-for="(sponsor, id) in sponsors" :key="id" class="sponsor-logo">
          <b-img :src="sponsor" style="max-width: 100%" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SponsorsList',
  data() {
    return {
      sponsors: [require('@/assets/logos/logo_bd.webp')]
    };
  }
};
</script>

<style>
.sponsor-area {
  padding: 5rem 0;
}

.sponsor-logo {
  min-height: 10rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
