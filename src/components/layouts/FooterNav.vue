<template>
  <footer class="footer-nav">
    <b-container>
      <b-row>
        <b-col md="8">
          <b-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="#">Overview</b-nav-item>
            <b-nav-item to="#">Notice</b-nav-item>
            <b-nav-item to="#">News</b-nav-item>
            <b-nav-item to="#">FAQs</b-nav-item>
            <b-nav-item to="#">Downloads</b-nav-item>
            <b-nav-item to="#">Contact Us</b-nav-item>
          </b-nav>
          <ul style="padding-left: 1rem">
            <li>
              <p><font-awesome-icon icon="clock" /> 09:00-11:30 13:30-18:00, Monday to Friday</p>
            </li>
            <li>
              <p><font-awesome-icon icon="fa-brands fa-weixin" /> Contact info ... 1</p>
            </li>
            <li>
              <p><font-awesome-icon icon="fa-brands fa-qq" /> Contact info ... 2</p>
            </li>
            <li>
              <p><font-awesome-icon icon="fa-brands fa-weibo" /> Contact info ... 3</p>
            </li>
            <li>
              <p><font-awesome-icon icon="envelope" /> Contact info ... 4</p>
            </li>
          </ul>
        </b-col>
        <b-col align-self="center" md="4">
          <b-row>
            <b-col class="qrcode">
              <b-img rounded class="qrcode-img" src="@/assets/qrcodes/rioslab.png" />
              <p class="qrcode-text">RIOS Homepage</p>
            </b-col>
            <b-col class="qrcode">
              <b-img rounded class="qrcode-img" src="@/assets/qrcodes/rioslab.png" />
              <p class="qrcode-text">Follow on WeChat</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'FooterNav'
};
</script>

<style lang="scss">
.footer-nav {
  background-color: #343a40;
  color: #fff;
}

.btn-link {
  color: inherit;
}

.qrcode-img {
  height: 6.5rem;
}
.qrcode {
  text-align: center;
}
</style>
