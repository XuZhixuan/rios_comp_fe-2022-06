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
              training in the cloud have been driving the demand of building application-specific custom computing hardware, like the Google TPU and the Telsa FSD. With the rapid
              development of the community maintained OpenLane open EDA flow and the Skywater open-source PDK. we could complete the whole process from RTL to GDS using open source
              technologies and fabricate the design at a real commercial foundry at a reasonable cost. We could judge the competition by running real modern benchmarks like Embench
              (www.embench.org) on real chips that students design.<br />
              For practical reasons, the design contest will initially target a mature process node, such as Google/Skywater 130 nm, UMC 110 nm, or TSMC 130G. Each design team will
              be given a fixed silicon area (e.g. 10mm^2) to implement RISC-V based systems that support minimum RISC-V extensions to run basic code.
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
              (electronics, information, computer, automation, electrical, instrumentation, etc.).<br />
              Undergraduate students and postgraduate students form separate teams, and those with postgraduate students in the team are the postgraduate teams. Each team consists
              of no more than 6 students and may have no more than 2 instructors. And each team at least has one professor as their instructor.<br />

              Each participating school shall designate a teacher who leads the competition to undertake the liaison work, organize the registration of students and participating
              teams, technical training, and ensure the competition venue, equipment and other safeguards.
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
              The design contest will initially target a mature process node, such as Google/Skywater 130 nm, UMC 110 nm, or TSMC 130G. Each design team will be given a fixed
              silicon area (e.g. 10mm^2) to implement RISC-V based systems that support minimum RISC-V extensions to run basic code.<br />
              Each team will compete against each other in terms of both functionalities (run more programs correctly) and QoR (quality of result measured in PPA, performance,
              power and area). The contest will not limit the design.<br />
              To judge the design, we will use both public open-source benchmarks as well as secret programs announced during the final stage of the competition.
            </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link :to="{ path: '/about', query: { to: 'section-3' } }">See More...</b-link>
            </p>
          </b-card>
          <b-card>
            <p class="card-icon" style="color: #ffc107">
              <font-awesome-icon icon="trophy" />
            </p>
            <p style="text-align: center">Awards</p>
            <b-card-text class="line-6">
              The competition expert group will judge the entries based on the degree of completion, innovation, difficulty, document quality, and tapeout status of the entries.<br />
              The first prize, the second prize and the third prize will be established in the global finals. Among them, the proportion of winning the first prize shall not exceed
              15% of the number of teams participating in the global finals, and the second prize shall not exceed 30%.<br />
              The global finals also set up 1-3 independent awards such as the Best Creative Award, the Best Engineering Award, and so on, and each independent award can be vacant.
              <br />
              In addition, the competition will also set up awards such as the Outstanding Organization Award. The co-organizers can choose their own corporate special awards
              according to their needs.
            </b-card-text>
            <p style="text-align: right; font-size: 0.9rem">
              <b-link :to="{ path: '/about', query: { to: 'section-4-2' } }">See More...</b-link>
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
