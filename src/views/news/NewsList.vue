<template>
  <div>
    <b-pagination-nav pills align="center" v-model="page" :link-gen="genLink" :number-of-pages="total" use-router />
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'NewsList',
  data() {
    return {
      page: 1,
      total: 1,
      news: []
    };
  },
  methods: {
    getData() {
      api.test();
      // Get data within page from backend
      this.news.push({
        title: 'A news title',
        date: '2022-06-17'
      });
    },
    genLink(pageNum) {
      return {
        path: '/news',
        query: { page: pageNum }
      };
    }
  },
  watch: {
    page() {
      this.news = [];
      this.getData();
    }
  },
  mounted() {
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page);
    } else {
      this.page = 1;
    }
    this.getData();
  }
};
</script>
