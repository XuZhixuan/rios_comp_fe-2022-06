<template>
  <div class="process-area">
    <b-container>
      <h3 style="text-align: center; margin-bottom: 2rem">Event Process</h3>
      <b-card no-body>
        <b-tabs content-class="process-info" pills card justified>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="bullhorn" />
              <br />
              Announcement
            </template>
            <p>Announcing the Competition</p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="sign-in" />
              <br />
              Sign Up
            </template>
            <p>Announcing the Competition</p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="microchip" />
              <br />
              Working
            </template>
            <p>Announcing the Competition</p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="star-half-stroke" />
              <br />
              Review
            </template>
            <p>Announcing the Competition</p>
          </b-tab>
          <b-tab>
            <template #title>
              <font-awesome-icon icon="award" />
              <br />
              Awards
            </template>
            <p>Announcing the Competition</p>
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
</style>
