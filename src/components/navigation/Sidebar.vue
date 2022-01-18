<template>
  <div id="sidebar">
    <!-- Left Bar -->
    <v-navigation-drawer class="sidebar" width="80" permanent app clipped>
      <section>
        <p>
          2 <br />
          0 <br />
          2 <br />
          1
        </p>
        <div class="social">
          <v-btn
            class="my-1"
            icon
            small
            plain
            href="https://www.facebook.com/FreshyBoyAndGirlRMU"
            target="_blank"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <br />
          <v-btn class="my-1" icon small plain to="/">
            <v-icon>mdi-home-circle</v-icon>
          </v-btn>
        </div>
      </section>
    </v-navigation-drawer>

    <!-- Right Bar -->
    <v-navigation-drawer right class="sidebar" width="80" permanent app clipped>
      <section>
        <p>
          2 <br />
          0 <br />
          2 <br />
          1
        </p>
      </section>
    </v-navigation-drawer>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  background: transparent !important;
  section {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    height: 100%;
    p {
      font-size: 18px;
      line-height: 2;
    }
  }
  .rmu {
    position: absolute;
    top: 0;
    padding: 20px;
  }
  .social {
    position: absolute;
    bottom: 0;
    padding: 25px;
  }
}

@media only screen and(max-width: 960px) {
  #sidebar {
    display: none;
  }
}
</style>
