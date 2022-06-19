<template>
  <div class="sponsor-area">
    <b-container>
      <h3 style="text-align: center; margin-bottom: 3rem">Organizers</h3>
      <b-row align-h="center">
        <b-col md="3" v-for="(sponsor, id) in sponsors1" :key="id" class="sponsor-logo">
          <b-img :src="sponsor" style="width: 85%" />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col md="3" v-for="(sponsor, id) in sponsors2" :key="id" class="sponsor-logo">
          <b-img :src="sponsor" style="width: 85%" />
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
      sponsors1: [require('@/assets/logos/logo_google.svg'), require('@/assets/logos/logo_ve.svg'), require('@/assets/logos/logo_img.svg')],
      sponsors2: [require('@/assets/logos/logo_thu.png'), require('@/assets/logos/logo_berkeley.png'), require('@/assets/logos/logo_rios.png')]
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
  padding: 0 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
