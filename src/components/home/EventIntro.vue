<template>
  <div class="intro-area">
    <b-container>
      <div class="title">
        <h3>About the Competition</h3>
      </div>
      <div class="intro">
        <b-card-group deck>
          <b-card>
            <p class="card-icon" style="color: #17a2b8">
              <font-awesome-icon icon="info-circle" />
            </p>
            <p style="text-align: center">Competition Info</p>
            <b-card-text class="line-6">
              The chip design industry has faced significant challenges with Moore's Law slowing down. Nevertheless, emerging market segments like self-driving electric cars and AI
              training in the cloud have been driving the demand of building application-specific custom computing hardware.
            </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link :to="{ path: '/about', query: { to: 'section-1' } }">See More...</b-link>
            </p>
          </b-card>
          <b-card>
            <p class="card-icon" style="color: #dc3545">
              <font-awesome-icon icon="people-group" />
            </p>
            <p style="text-align: center">Contestants</p>
            <b-card-text class="line-6">
              The contestants include (but are not limited to) students from global colleges and universities majoring in microelectronics and electronic related majors
              (electronics, information, computer, automation, electrical, instrumentation, etc.).
            </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link :to="{ path: '/about', query: { to: 'section-2' } }">See More...</b-link>
            </p>
          </b-card>
          <b-card>
            <p class="card-icon" style="color: #007bff">
              <font-awesome-icon icon="list-ol" />
            </p>
            <p style="text-align: center">Rules</p>
            <b-card-text class="line-6">
              Given limited silicon tapeout resources (e.g. silicon manufacturing costs, system hardware resources and commercial ASIC EDA licenses, in particular backend and
              sign-off tools), we need a pre-qualifying stage to select technical qualified teams for the final tapeout.
            </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link :to="{ path: '/about', query: { to: 'section-4' } }">See More...</b-link>
            </p>
          </b-card>
          <b-card>
            <p class="card-icon" style="color: #ffc107">
              <font-awesome-icon icon="trophy" />
            </p>
            <p style="text-align: center">Awards</p>
            <b-card-text class="line-6">
              The competition expert group will judge the entries based on the degree of completion, innovation, difficulty, document quality, and tapeout status of the entries.<br />
              The first prize, the second prize and the third prize will be established in the global finals.
            </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link :to="{ path: '/about', query: { to: 'section-5' } }">See More...</b-link>
            </p>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.intro-area {
  padding: 5rem 0;
}

.title {
  padding: 2.5rem;
  text-align: center;
}

.card-icon {
  font-size: 3rem;
  text-align: center;
}

.line-6 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
