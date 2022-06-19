<template>
  <news-detail :news="news" />
</template>

<script>
import NewsDetail from '@/components/news/NewsDetail';

export default {
  name: 'NewsShow',
  components: {
    NewsDetail
  },
  props: {
    id: Number
  },
  data() {
    return {
      news: null
    };
  },
  methods: {
    getData() {
      let vm = this;
      vm.$apis('newsShow', { params: { id: vm.id } }).then((res) => {
        vm.news = res.data.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
