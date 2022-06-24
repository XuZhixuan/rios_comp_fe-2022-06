<template>
  <div class="about-view">
    <b-button variant="secondary" class="sidebar-button" v-b-toggle.about-nav>
      <font-awesome-icon icon="bars" />
    </b-button>
    <b-sidebar id="about-nav" title="About the Contest" shadow>
      <b-nav vertical>
        <b-nav-item @click="goto('section-1')">1. Competition Info</b-nav-item>
        <b-nav-item @click="goto('section-1-1')">1.1 Introduction</b-nav-item>
        <b-nav-item @click="goto('section-1-2')">1.2 Organizing Committee</b-nav-item>
        <b-nav-item @click="goto('section-1-3')">1.3 Advisory Committee</b-nav-item>
        <b-nav-item @click="goto('section-1-4')">1.4 Acknowledgement</b-nav-item>
        <b-nav-item @click="goto('section-2')">2. Contest schedule and targeted contestants</b-nav-item>
        <b-nav-item @click="goto('section-3')">3. Original Proposed Competition Ideas</b-nav-item>
        <b-nav-item @click="goto('section-4')">4. Rules</b-nav-item>
        <b-nav-item @click="goto('section-4-1')">4.1 Group Stage</b-nav-item>
        <b-nav-item @click="goto('section-4-2')">4.2 Final Stage</b-nav-item>
        <b-nav-item @click="goto('section-5')">5 Awards</b-nav-item>
        <b-nav-item @click="goto('title')">Top</b-nav-item>
      </b-nav>
    </b-sidebar>
    <b-container>
      <h3 id="title" style="text-align: center; margin: 3rem 0">About the Contest</h3>
      <div class="intro-text">
        <h5 id="section-1">1. Competition Info</h5>
        <h6 id="section-1-1">1.1 Introduction</h6>
        <p>
          The chip design industry has faced significant challenges with Moore’s Law slowing down. Nevertheless, emerging market segments like self-driving electric cars and AI
          training in the cloud have been driving the demand of building application-specific custom computing hardware, like the Google TPU and the Telsa FSD.<br />
          With the rapid development of the community maintained OpenLane open EDA flow and the Skywater open-source PDK. we could complete the whole process from RTL to GDS using
          open source technologies and fabricate the design at a real commercial foundry at a reasonable cost. We could judge the competition by running real modern benchmarks like
          Embench (www.embench.org) on real chips that students design.<br />
          For practical reasons, the design contest will initially target a mature process node, such as Google/Skywater 130 nm, UMC 110 nm, or TSMC 130G. Each design team will be
          given a fixed silicon area (e.g. 10mm^2) to implement RISC-V based systems that support minimum RISC-V extensions to run basic code.<br />
          Each team will compete against each other in terms of both functionalities (run more programs correctly) and QoR (quality of result measured in PPA, performance, power
          and area). The contest will not limit the design. <br />
          To judge the design, we will use both public open-source benchmarks as well as secret programs announced during the final stage of the competition.
        </p>
        <h6 id="section-1-2">1.2 Organizing Committee</h6>
        <p>
          Zhangxi Tan, RIOS Lab, Tsinghua-Berkeley Shenzhen Institute<br />
          Johan Euphrosine, Google<br />
          Shang Lu, Bytedance<br />
          Robert Owen, Imagination <br />
          Wenguang Chen, Tsinghua University
        </p>
        <h6 id="section-1-3">1.3 Advisory Committee</h6>
        <p>
          David Patterson RIOS Lab / UC Berkeley<br />
          Tim Ansell Google<br />
          Weimin Zheng, Tsinghua University
        </p>
        <h6 id="section-1-4">1.4 Acknowledgement</h6>
        <p>
          We thank for valuable feedback from the following experts from both industry and academia on earlier drafts of this proposal.<br />
          Ray Simar Rice University<br />
          Mike Yan Meituan<br />
          Bryan Casper Intel
        </p>
        <h5 id="section-2">2. Contest schedule and targeted contestants</h5>
        <p>
          Considering the cycle of manufacturing a chip and system bring-up, each contest requires at least 18 months to get the full chip. However, in order to encourage more
          participants and provide a better match to the academic calendar, we plan to start a new contest every year allowing two back-to-back contests to overlap in a single
          year.<br />
          The contestants include (but are not limited to) students from global colleges and universities majoring in microelectronics and electronic related majors (electronics,
          information, computer, automation, electrical, instrumentation, etc.).<br />
          Undergraduate students and postgraduate students form separate teams, and those with postgraduate students in the team are the postgraduate teams. Each team consists of
          no more than 6 students and may have no more than 2 instructors. And each team at least has one professor as their instructor.<br />
          Each participating school shall designate a teacher who leads the competition to undertake the liaison work, organize the registration of students and participating
          teams, technical training, and ensure the competition venue, equipment and other safeguards.
        </p>
        <h5 id="section-3">3. Original Proposed Competition Ideas</h5>
        <p>
          For practical reasons, the design contest will initially target a mature process node, such as Google/Skywater 130 nm, UMC 110 nm, or TSMC 130G. Skywater 130 nm is likely
          best given the OpenPDK and OpenEDA support. Each design team will be given a fixed silicon area (e.g. 10mm^2) to implement RISC-V based systems that support minimum
          RISC-V extensions to run basic code. Each team will compete against each other in terms of both functionalities (run more programs correctly) and QoR (quality of result
          measured in PPA, performance, power and area). The contest will not limit the design. Implementing custom acceleration with modifications to open-source compilers is
          allowed and encouraged. However, no closed source technology is allowed and all results need to be reproducible under the open source rule. To judge the design, we will
          use both public open-source benchmarks as well as secret programs announced during the final stage of the competition.
        </p>
        <ul>
          <li>
            Opportunities of accessing advanced process technologies through industry partnership. During our initial discussions on industry sponsorship, we found there are
            several companies interested in joining the competition by providing tapeout opportunities along with their private (full-mask) wafer projects regularly on more
            advanced technologies, such as 22nm bulk and possible 12/16nm FinFET process. By working with industry partners, there is a good chance we can see innovative ideas with
            modern technologies.
          </li>
          <li>
            To ensure basic technical quality of student participants, we require each design team to have a faculty advisor. The responsibility of the faculty advisor is to filter
            student questions and review students’ work prior to the submission to assure contest guidelines are followed.
          </li>
        </ul>
        <h5 id="section-4">4. Rules</h5>
        <h6 id="section-4-1">4.1 Group Stage (first 9 months)</h6>
        <p>
          Given limited silicon tapeout resources (e.g. silicon manufacturing costs, system hardware resources and commercial ASIC EDA licenses, in particular backend and sign-off
          tools), we need a pre-qualifying stage to select technical qualified teams for the final tapeout. At this stage we only perform a mock tapeout using open-source EDA tools
          and Skywater 130nm OpenPDK, which are available to everyone globally under open source licenses. <br />We will make all performance and function requirements along with
          benchmarks publicly available to all design teams. No secret test program will be announced at this stage. Each team should submit their open-source designs to github (or
          similar) publicly and do a mock tape-out all the way to GDS. We will provide cloud computing resources for each team to accommodate OpenEDA computation requirements.
          <br />We also install a design space exploration framework on Google Cloud and Volcano Engine cloud computing platforms to assist design space exploration for each design
          team. In addition, we will align the end of the group stage along with the OpenMPW tapeout schedule in 2023.
          <strong>
            design team has the option to fab their design with optional OpenMPW shuttles on their own even without being selected for the final stage chip fabrication.</strong
          >
        </p>
        <h6 id="section-4-2">4.2 Final Stage (extra 3-month design time + silicon manufacturing time)</h6>
        <p>
          Judged by end-to-end application performance and completeness of functionalities,
          <strong> teams qualified after the group stage will have a chance to fab a real chip on a modern process node.</strong> We allow the usage of commercial EDA tools in
          order to get access to production quality process technologies such as those from TSMC. To complete the full design cycle, we will also cover more sophisticated power and
          thermal analysis using proprietary tools. We will help selected teams with EDA access and PDK NDAs through our tapeout sponsor.<br />We will make all We will announce
          secret programs and will give another 3 months window for each team to tweak their designs before the tape-out shuttle. We will provide the standard testboard for all
          teams to bring-up their silicon. The bring-up time will be 6 weeks before the final presentation. We will host a two-day judge and presentation event. Each team will help
          the judge to reproduce their results on their final silicon. All designs should still be open source, and should be reproducible by everyone.
        </p>
        <h5 id="section-5">5 Awards</h5>
        <p>
          The competition expert group will judge the entries based on the degree of completion, innovation, difficulty, document quality, and tapeout status of the entries.<br />
          The first prize, the second prize and the third prize will be established in the global finals. Among them, the proportion of winning the first prize shall not exceed 15%
          of the number of teams participating in the global finals, and the second prize shall not exceed 30%.<br />
          The global finals also set up 1-3 independent awards such as the Best Creative Award, the Best Engineering Award, and so on, and each independent award can be vacant. In
          addition, the competition will also set up awards such as the Outstanding Organization Award. The co-organizers can choose their own corporate special awards according to
          their needs.
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  methods: {
    goto(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    }
  },
  mounted() {
    if (this.$route.query.to) {
      this.goto(this.$route.query.to);
    } else {
      this.goto('section-1');
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-button {
  position: fixed;
  left: 2rem;
  bottom: 5rem;
  z-index: 999;
}

.intro-text {
  line-height: 1.5rem;
  text-align: justify;

  h5,
  h6 {
    margin-bottom: 1.5rem;
  }
}
</style>
