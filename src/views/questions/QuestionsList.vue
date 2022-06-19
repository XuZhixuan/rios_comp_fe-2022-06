<template>
  <div>
    <h5 style="text-align: center; margin: 3rem 0">FAQs list from {{ count.from }} to {{ count.to }} of {{ count.total }}.</h5>
    <question-item v-for="question in questions" :key="question.id" :question="question" />
    <b-pagination-nav pills align="center" v-model="page" :link-gen="genLink" :number-of-pages="total" use-router />
  </div>
</template>

<script>
import QuestionItem from '@/components/questions/QuestionItem';

export default {
  name: 'QuestionsList',
  components: {
    QuestionItem
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
      questions: []
    };
  },
  methods: {
    genLink(pageNum) {
      return {
        path: '/questions',
        query: { page: pageNum }
      };
    },
    getData() {
      let vm = this;
      vm.$apis('questionsIndex', { queries: { page: vm.page } }).then((res) => {
        vm.page = res.data.meta.current_page;
        vm.total = res.data.meta.last_page;
        vm.count.from = res.data.meta.from;
        vm.count.to = res.data.meta.to;
        vm.count.total = res.data.meta.total;
        res.data.data.forEach((q) => {
          vm.questions.push(q);
        });
      });
    }
  },
  watch: {
    page() {
      this.questions = [];
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
