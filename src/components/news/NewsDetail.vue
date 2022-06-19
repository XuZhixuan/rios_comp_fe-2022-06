<template>
  <div style="margin: 3rem 0">
    <h3 style="text-align: center">{{ news.title }}</h3>
    <b-img style="width: 100%; margin: 3rem 0" :src="news.cover"></b-img>
    <span v-html="news.content"></span>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  props: {
    news: Object
  }
};
</script>

<style lang="scss" scoped>
p {
  text-align: justify;
  line-height: 1.5rem;
}
</style>
