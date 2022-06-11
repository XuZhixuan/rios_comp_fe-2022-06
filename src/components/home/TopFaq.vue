<template>
  <div class="faq-area">
    <b-container>
      <h3 style="text-align: center">Frequently Asked Questions</h3>
      <b-card-group deck>
        <b-card v-for="question in questions" :key="question.id">
          <b-card-text>
            <font-awesome-icon icon="question-circle" />
            {{ question.question }}
          </b-card-text>
          <b-card-text>
            <font-awesome-icon icon="message" />
            {{ question.answer }}
          </b-card-text>
        </b-card>
      </b-card-group>
      <br />
      <b-link to="#">More Questions...</b-link>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'TopFaq',
  data() {
    return {
      questions: [
        { id: 0, question: 'How can I participate this contest?', answer: 'Click the link to sign up.' },
        { id: 1, question: 'How can I find myself a team?', answer: 'Good question, I have no idea.' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.faq-area {
  padding: 5rem 0;
  background-color: #f7f8fa;
}
</style>
