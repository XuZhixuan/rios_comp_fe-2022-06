<template>
  <div>
    <b-carousel id="news-carousel" controls indicators img-height="30rem" img-width="100%">
      <b-carousel-slide v-for="msg in news" :key="msg.id">
        <template #img>
          <a :href="msg.link">
            <div class="carousel-img" :style="'background: url(' + msg.img + '); background-size: cover; background-position: center'"></div>
          </a>
        </template>
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
          img: require('@/assets/temp/banner4.png'),
          link: '/about'
        },
        {
          id: 1,
          img: require('@/assets/temp/banner2.png'),
          link: '#'
        },
        {
          id: 2,
          img: require('@/assets/temp/banner3.png'),
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
