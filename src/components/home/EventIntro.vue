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
            <b-card-text> Any infomation here... </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link to="/about">See More...</b-link>
            </p>
          </b-card>
          <b-card>
            <p class="card-icon" style="color: #dc3545">
              <font-awesome-icon icon="people-group" />
            </p>
            <p style="text-align: center">Contestants</p>
            <b-card-text> Any infomation here... </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link to="#">See More...</b-link>
            </p>
          </b-card>
          <b-card>
            <p class="card-icon" style="color: #007bff">
              <font-awesome-icon icon="list-ol" />
            </p>
            <p style="text-align: center">Rules</p>
            <b-card-text> Any infomation here... </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link to="#">See More...</b-link>
            </p>
          </b-card>
          <b-card>
            <p class="card-icon" style="color: #ffc107">
              <font-awesome-icon icon="trophy" />
            </p>
            <p style="text-align: center">Awards</p>
            <b-card-text> Any infomation here... </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link to="#">See More...</b-link>
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
</style>
