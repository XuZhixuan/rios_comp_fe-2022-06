<template>
  <div class="intro-area">
    <b-container>
      <div class="title">
        <h3>About the Contest</h3>
      </div>
      <div class="intro">
        <p style="text-align: justify">
          The chip design industry has faced significant challenges with Moore’s Law slowing down. Moreover, Covid-19 has accelerated the digital transformation of all aspects of
          our society. The pandemic and geopolitical conflicts have created a global chip shortage and highlighted the risks and vulnerabilities in the semiconductor supply chain
          globally. Meanwhile, after talking to many companies in the high-tech industry internationally, we found that here is a gap between what students learn and what the
          industry is demanding. Student competitions provide an immersive experience as part of the education experience. Most of CPU core design competitions are based on
          designing RISC based processors such as RISC-V and MIPS on off-the-shelf FPGA boards. Thus far, none of these contests go through the full silicon fabrication process.
          With the rapid development of the community maintained OpenLane open EDA flow and the Skywater open-source PDK, we could complete the whole process from RTL to GDS using
          open source technologies and fabricate the design at a real commercial foundry at a reasonable cost. This path will take the competition to a more realistic and inspiring
          level than prior contests have achieved. We could judge the competition by running real modern benchmarks on real chips that students design.
        </p>
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

.intro {
  line-height: 1.5rem;
}
</style>
