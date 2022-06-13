<template>
  <div class="notice-area">
    <b-container>
      <h3 style="text-align: center">Notices</h3>
      <b-list-group flush>
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(item, id) in items" :key="id">
          <b-link class="notice-link" :to="item.link">
            {{ item.title }}
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
        INFO: 'info',
        IMPORTANT: 'warning',
        ALARM: 'danger'
      },
      items: [
        { title: 'The 1st RISC-V Chip Design Competition is comming soon.', link: '/', type: 'INFO' },
        { title: 'Sign up before 2022-13-32.', link: '/', type: 'IMPORTANT' },
        { title: 'Submit your work in 3 days.', link: '/', type: 'ALARM' }
      ]
    };
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
