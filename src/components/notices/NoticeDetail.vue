<template>
  <div style="margin: 3rem 0">
    <h3 style="text-align: center; margin-bottom: 3rem">{{ notice.title }}</h3>
    <b-row>
      <b-col style="text-align: right">
        <h6>Data: {{ notice.date }}</h6>
      </b-col>
      <b-col style="text-align: left">
        <h6>
          Type: <b-badge :variant="variant">{{ notice.type }}</b-badge>
        </h6>
      </b-col>
    </b-row>
    <hr />
    <span v-html="notice.content"></span>
  </div>
</template>

<script>
export default {
  name: 'NoticeDetail',
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
