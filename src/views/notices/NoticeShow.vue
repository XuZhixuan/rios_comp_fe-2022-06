<template>
  <notice-detail :notice="notice" />
</template>

<script>
import NoticeDetail from '@/components/notices/NoticeDetail';

export default {
  name: 'NoticeShow',
  components: {
    NoticeDetail
  },
  props: {
    id: Number
  },
  data() {
    return {
      notice: null
    };
  },
  methods: {
    getData() {
      let vm = this;
      vm.$apis('noticeShow', { params: { id: vm.id } }).then((res) => {
        vm.notice = res.data.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
