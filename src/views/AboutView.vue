<template>
  <div class="about-view">
    <b-button variant="secondary" class="sidebar-button" v-b-toggle.about-nav>
      <font-awesome-icon icon="bars" />
    </b-button>
    <b-sidebar id="about-nav" title="About the Contest" shadow>
      <b-nav vertical>
        <b-nav-item @click="goto('section-1')">1. Motivation and Background</b-nav-item>
        <b-nav-item @click="goto('section-2')">2. Contest schedule and targeted participants</b-nav-item>
        <b-nav-item @click="goto('section-3')">3. Original Proposed Competition Ideas</b-nav-item>
        <b-nav-item @click="goto('section-4')">4. Competition Mode</b-nav-item>
        <b-nav-item @click="goto('section-4-1')">4.1 Group Stage</b-nav-item>
        <b-nav-item @click="goto('section-4-2')">4.2 Final Stage</b-nav-item>
        <b-nav-item @click="goto('title')">Top</b-nav-item>
      </b-nav>
    </b-sidebar>
    <b-container>
      <h3 id="title" style="text-align: center; margin: 3rem 0">About the Contest</h3>
      <div class="intro-text">
        <h5 id="section-1">1. Motivation and Background</h5>
        <p>
          The chip design industry has faced significant challenges with Moore’s Law slowing down. Nevertheless, emerging market segments like self-driving electric cars and AI
          training in the cloud have been driving the demand of building application-specific custom computing hardware, like the Google TPU and the Telsa FSD. With the advent of
          the RISC-V open instruction set architecture and open source EDA tools, we hope to see more innovative hardware and software co-design ideas by building custom silicon
          that could run complex software stacks. According to SEMI, the global semiconductor market will be $1 trillion in 2030. Addressing the talent gap is vital for the success
          and the growth of our industry.<br />
          Unfortunately, with high-tech economy growth centered upon internet applications in the past decade, students majoring in electrical engineering and computer science were
          more leaning towards software and algorithm focused courses like AI and ML than computer architecture/systems and chip design. The imbalance of training makes building a
          “talent bank” with skills in semiconductor and chip design more challenging. This gap in return could hurt companies even in emerging markets going deeper into AI and ML.
          Moreover, Covid-19 has accelerated the digital transformation of all aspects of our society. The pandemic and geopolitical conflicts have created a global chip shortage
          and highlighted the risks and vulnerabilities in the semiconductor supply chain globally. Students graduating from universities are starting to realize that “digital
          companies cannot exist without chips”.<br />
          Student competitions provide an immersive experience as part of the education experience. Having an element of competition enhances interest and concentration. CPU core
          design contests have been sponsored by companies in industry and academia to encourage innovations as well as part of extracurricular training programs. Most of these
          competitions are based on designing RISC based processors such as RISC-V and MIPS on off-the-shelf FPGA boards. Thus far, none of these contests go through the full
          silicon fabrication process. With the rapid development of the community maintained OpenLane open EDA flow and the Skywater open-source PDK, we could complete the whole
          process from RTL to GDS using open source technologies and fabricate the design at a real commercial foundry at a reasonable cost. This path will take the competition to
          a more realistic and inspiring level than prior contests have achieved. We could judge the competition by running real modern benchmarks like Embench (www.embench.org) on
          real chips that students design.
        </p>
        <h5 id="section-2">2. Contest schedule and targeted participants</h5>
        <p>
          Considering the cycle of manufacturing a chip and system bring-up, each contest requires at least 18 months to get the full chip. However, in order to encourage more
          participants and provide a better match to the academic calendar, we plan to start a new contest every year allowing two back-to-back contests to overlap in a single
          year.
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
            Although open-source EDA tools have the least restrictions on license availability and are very easy to get started with, technically they might not be sophisticated
            enough to support complex designs such as Linux-capable CPU from every single process of the full chip design flow. On the other hand, as a by-product of extensively
            using open-source EDA in the competition, the open EDA community can also gain a large number of test cases to improve the development of the tools. We will balance the
            use of open-source EDA tools and commercial EDA tools (for tape-outs with mass production commercial processes) to make sure participants will not be hampered by
            limitations in the open EDA tools.
          </li>
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
          and Skywater 130nm OpenPDK, which are available to everyone globally with little comercial legal license complications. Unfortunately, at this moment open EDA tools have
          limited system verilog language features and may not support the full design flow (from RTL to GDS) for complex designs. <br />We will make all performance and function
          requirements along with benchmarks publicly available to all design teams. No secret test program will be announced at this stage. Each team should submit their
          open-source designs to github (or similar) publicly and do a mock tape-out all the way to GDS. We will provide cloud computing resources for each team to accommodate
          OpenEDA computation requirements. <br />We also install a design space exploration framework on Google Cloud and Volcano Engine cloud computing platforms to assist design
          space exploration for each design team. In addition, we will align the end of the group stage along with the OpenMPW tapeout schedule in 2023. Each design team has the
          option to fab their design with optional OpenMPW shuttles on their own even without being selected for the final stage chip fabrication.
        </p>
        <h6 id="section-4-2">4.2 Final Stage (extra 3-month design time + silicon manufacturing time)</h6>
        <p>
          Judged by end-to-end application performance and completeness of functionalities, all teams qualified after the group stage will have a chance to fab a real chip. We
          allow the usage of commercial EDA tools in order to get access to production quality process technologies such as those from TSMC. To complete the full design cycle, we
          will also cover areas where the Open EDA flow falls short, for example more sophisticated power and thermal analysis. We will help selected teams with EDA access and PDK
          NDAs through our tapeout sponsor.<br />We will make all We will announce secret programs and will give another 3 months window for each team to tweak their designs before
          the tape-out shuttle. We will provide the standard testboard for all teams to bring-up their silicon. The bring-up time will be 6 weeks before the final presentation. We
          will host a two-day judge and presentation event. Each team will help the judge to reproduce their results on their final silicon. All designs should still be open
          source, and should be reproducible by everyone.
        </p>
        <h6 id="section-5">5 Awards</h6>
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
