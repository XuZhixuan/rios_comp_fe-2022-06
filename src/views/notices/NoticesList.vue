<template>
  <div>
    <h5 style="text-align: center; margin: 3rem 0">FAQs list from {{ count.from }} to {{ count.to }} of {{ count.total }}.</h5>
    <notice-item v-for="notice in notices" :key="notice.id" :notice="notice" />
    <b-pagination-nav pills align="center" v-model="page" :link-gen="genLink" :number-of-pages="total" use-router />
  </div>
</template>

<script>
import NoticeItem from '@/components/notices/NoticeItem';

export default {
  name: 'NoticesList',
  components: {
    NoticeItem
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
      notices: []
    };
  },
  methods: {
    genLink(pageNum) {
      return {
        path: '/notices',
        query: { page: pageNum }
      };
    },
    getData() {
      let vm = this;
      vm.$apis('noticesIndex', { queries: { page: vm.page } }).then((res) => {
        vm.page = res.data.meta.current_page;
        vm.total = res.data.meta.last_page;
        vm.count.from = res.data.meta.from;
        vm.count.to = res.data.meta.to;
        vm.count.total = res.data.meta.total;
        res.data.data.forEach((n) => {
          vm.notices.push(n);
        });
      });
    }
  },
  watch: {
    page() {
      this.notices = [];
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
