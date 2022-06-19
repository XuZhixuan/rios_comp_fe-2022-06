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
        }
      ]
    };
  },
  methods: {
    getData() {
      let vm = this;
      vm.$apis('newsIndex', { queries: { page: 1, perPage: 3 } }).then((res) => {
        res.data.data.forEach((n) => {
          vm.news.push({
            id: n.id,
            img: n.cover,
            link: '/news/' + n.id
          });
        });
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.carousel-img {
  height: 32rem;
}
</style>
