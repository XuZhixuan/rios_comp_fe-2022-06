<template>
  <div class="home">
    <news-carousel />
    <event-intro />
    <event-process />
    <top-notices />
    <top-faq />
    <sponsors-list />
  </div>
</template>

<script>
import NewsCarousel from '@/components/home/NewsCarousel';
import EventIntro from '@/components/home/EventIntro';
import EventProcess from '@/components/home/EventProcess';
import TopNotices from '@/components/home/TopNotices';
import TopFaq from '@/components/home/TopFaq';
import SponsorsList from '@/components/home/SponsorsList';

export default {
  name: 'HomeView',
  components: {
    NewsCarousel,
    EventIntro,
    EventProcess,
    TopNotices,
    TopFaq,
    SponsorsList
  }
};
</script>
