<template>
  <question-detail :question="question" />
</template>

<script>
import QuestionDetail from '@/components/questions/QuestionDetail';

export default {
  name: 'QuestionShow',
  components: {
    QuestionDetail
  },
  props: {
    id: Number
  },
  data() {
    return {
      question: null
    };
  },
  methods: {
    getData() {
      let vm = this;
      vm.$apis('questionShow', { params: { id: vm.id } }).then((res) => {
        vm.question = res.data.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
