<template>
  <div class="faq-area">
    <b-container>
      <h3 style="text-align: center">FAQ</h3>
      <b-card-group columns>
        <b-card v-for="question in questions" :key="question.id">
          <b-card-text>
            <font-awesome-icon icon="question-circle" />
            {{ question.question }}
          </b-card-text>
          <b-card-text>
            <font-awesome-icon icon="message" />
            {{ question.answer }}
          </b-card-text>
          <template #footer>
            <small class="text-muted">{{ question.date }}</small>
          </template>
        </b-card>
      </b-card-group>
      <br />
      <b-link to="/questions">More Questions...</b-link>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'TopFaq',
  data() {
    return {
      questions: []
    };
  },
  methods: {
    getData() {
      let vm = this;
      vm.$apis('questionsIndex', { queries: { page: 1, perPage: 8 } }).then((res) => {
        let data = res.data.data;
        data.forEach((question) => {
          vm.questions.push(question);
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
.faq-area {
  padding: 5rem 0;
  background-color: #f7f8fa;
}
</style>
