<template>
  <div class="process-area">
    <b-container>
      <h3 style="text-align: center; margin-bottom: 2rem">EVENT PROCESS</h3>
      <b-card no-body>
        <b-tabs content-class="process-info" pills card justified>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="bullhorn" />
              <br />
              Announcement
            </template>
            <p class="process-content">
              Announcement of competition notice <br />
              Late June 2022
            </p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="sign-in" />
              <br />
              Registration
            </template>
            <p class="process-content">
              Registration Stage <br />
              June 2022 - August 31, 2022
            </p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="microchip" />
              <br />
              Group Design
            </template>
            <p class="process-content">
              Preliminary Stage <br />
              September 2022 - February 21, 2023
            </p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="star-half-stroke" />
              <br />
              Group Review
            </template>
            <p class="process-content">
              Preliminary Evaluation <br />
              February 22, 2023 - March 8, 2023
            </p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="microchip" />
              <br />
              Final Design
            </template>
            <p class="process-content">
              Final Stage <br />
              March 9, 2023 - June 1,2023
            </p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="award" />
              <br />
              Final Review
            </template>
            <p class="process-content">
              Final Review and Award Ceremony <br />
              June 2, 2023 - June 18, 2023
            </p>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'EventProcess'
};
</script>

<style lang="scss">
.process-area {
  padding: 5rem 0;
  background-color: #f7f8fa;
}

.process-content {
  text-align: center;
}
</style>
