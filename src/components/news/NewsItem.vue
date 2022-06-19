<template>
  <b-card no-body class="overflow-hidden" style="min-width: 100%; margin: 2rem 0">
    <b-row>
      <b-col md="6">
        <b-img class="news-cover" :src="news.cover" />
      </b-col>
      <b-col>
        <b-card-body :title="news.title">
          <h6 class="text-muted">{{ news.date }}</h6>
          <b-link style="vertical-align: bottom" :to="{ name: 'newsShow', params: { id: news.id } }">See details...</b-link>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    news: Object
  }
};
</script>

<style lang="scss">
.news-cover {
  width: 100%;
}
</style>
