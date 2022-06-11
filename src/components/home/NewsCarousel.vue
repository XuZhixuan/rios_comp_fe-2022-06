<template>
  <div>
    <b-carousel id="news-carousel" controls indicators img-height="30rem" img-width="100%">
      <b-carousel-slide v-for="msg in news" :key="msg.id">
        <template #img>
          <a :href="msg.link">
            <div class="carousel-img" :style="'background: url(' + msg.img + '); background-size: cover; background-position: center'"></div>
          </a>
        </template>
        <h5 v-if="msg.title">{{ msg.title }}</h5>
        <p v-if="msg.title">{{ msg.detail }}</p>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'NewsCarousel',
  data() {
    return {
      news: [
        {
          id: 0,
          img: require('@/assets/temp/banner1.jpg'),
          title: null,
          detail: null,
          link: '#'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.carousel-img {
  height: 32rem;
}
</style>
