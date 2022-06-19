<template>
  <div style="margin: 3rem 0">
    <h4 style="font-weight: bold">Question:</h4>
    <p>{{ question.question }}</p>
    <hr />
    <h4 style="font-weight: bold">Answer:</h4>
    <p>{{ question.answer }}</p>
    <h6>At: {{ question.date }}</h6>
  </div>
</template>

<script>
export default {
  name: 'QuestionDetail',
  props: {
    question: Object
  }
};
</script>
