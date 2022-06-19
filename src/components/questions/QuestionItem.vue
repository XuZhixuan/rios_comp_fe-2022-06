<template>
  <b-card style="width: 100%; margin-bottom: 2rem">
    <b-link :to="{ name: 'questionShow', params: { id: question.id } }">
      <b-card-text>
        <font-awesome-icon icon="question-circle" />
        {{ question.question }}
      </b-card-text>
      <b-card-text>
        <font-awesome-icon icon="message" />
        {{ question.answer }}
      </b-card-text>
    </b-link>
    <template #footer>
      <small class="text-muted">At {{ question.date }}</small>
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'QuestionItem',
  props: {
    question: Object
  }
};
</script>
