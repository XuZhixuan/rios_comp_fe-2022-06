<template>
  <div>
    <h5 style="text-align: center">News list from {{ count.from }} to {{ count.to }} of {{ count.total }}.</h5>
    <news-item v-for="n in news" :key="n.id" :news="n"></news-item>
    <b-pagination-nav pills align="center" v-model="page" :link-gen="genLink" :number-of-pages="total" use-router />
  </div>
</template>

<script>
import NewsItem from '@/components/news/NewsItem';

export default {
  name: 'NewsList',
  components: {
    NewsItem
  },
  data() {
    return {
      page: 1,
      total: 1,
      count: {
        from: 0,
        to: 0,
        total: 0
      },
      news: []
    };
  },
  methods: {
    getData() {
      let vm = this;
      vm.$apis('newsIndex', { queries: { page: vm.page } }).then((res) => {
        vm.page = res.data.meta.current_page;
        vm.total = res.data.meta.last_page;
        vm.count.from = res.data.meta.from;
        vm.count.to = res.data.meta.to;
        vm.count.total = res.data.meta.total;
        res.data.data.forEach((n) => {
          vm.news.push(n);
        });
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
