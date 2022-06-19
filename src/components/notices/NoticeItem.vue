<template>
  <b-card :header="notice.type" :border-variant="variant" :header-bg-variant="variant" header-text-variant="white" style="margin: 3rem 0">
    <b-card-title>
      {{ notice.title }}
    </b-card-title>
    <template #footer>
      <b-row align-h="between">
        <b-col>
          <small class="text-muted">At {{ notice.date }}</small>
        </b-col>
        <b-col style="text-align: right">
          <b-link :to="{ name: 'noticeShow', params: { id: notice.id } }"> See details...</b-link>
        </b-col>
      </b-row>
    </template>
  </b-card>
</template>

<script>
export default {
  name: 'NoticeItem',
  props: {
    notice: Object
  },
  computed: {
    variant() {
      let vRef = {
        INFO: 'success',
        IMPORTANT: 'warning',
        ALARM: 'danger'
      };
      return vRef[this.notice.type];
    }
  }
};
</script>
