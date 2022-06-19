<template>
  <div class="notice-area">
    <b-container>
      <h3 style="text-align: center">NOTICES</h3>
      <b-list-group flush>
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(item, id) in items" :key="id">
          <b-link class="notice-link" :to="{ name: 'noticeShow', params: { id: item.id } }">
            {{ item.title }}
            <br />
            <span style="color: #6c757d">{{ item.date }}</span>
          </b-link>
          <b-badge :variant="badgeRef[item.type]">{{ item.type }}</b-badge>
        </b-list-group-item>
        <b-list-group-item>
          <b-link to="/notices">More...</b-link>
        </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'TopNotices',
  data() {
    return {
      badgeRef: {
        INFO: 'success',
        IMPORTANT: 'warning',
        ALARM: 'danger'
      },
      items: []
    };
  },
  methods: {
    getData() {
      let vm = this;
      this.$apis('noticesIndex', { queries: { page: 1, perPage: 10 } }).then((res) => {
        let data = res.data.data;
        data.forEach((notice) => {
          vm.items.push(notice);
        });
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
.notice-area {
  padding: 5rem 0;
}

.notice-link {
  bottom: 1rem;
}
</style>
