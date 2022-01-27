<template>
  <div>
    <v-footer class="footer px-1 py-0" dark elevation="0">
      <v-container fluid>
        <v-row dense>
          <!-- Vote button -->
          <v-col cols="3">
            <v-tooltip top offset-y transition="scroll-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma-1" icon to="/vote" plain>
                  <!-- Vote -->
                  <v-badge
                    bordered
                    color="error"
                    dark
                    overlap
                    offset-x="0"
                    offset-y="0"
                    dot
                  >
                    <!-- <v-img
                      v-bind="attrs"
                      v-on="on"
                      width="37"
                      contain
                      src="https://cdn-icons-png.flaticon.com/512/2672/2672992.png"
                    ></v-img> -->
                    <v-icon size="50" v-bind="attrs" v-on="on">
                      mdi-view-agenda-outline
                    </v-icon>
                  </v-badge>
                </v-btn>
              </template>
              <div class="text">
                <span>VOTE</span>
              </div>
            </v-tooltip>
          </v-col>
          <!-- Collections button -->
          <v-col cols="3">
            <v-tooltip top offset-y transition="scroll-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma-1" icon to="/collections" plain>
                  <v-icon size="50" v-bind="attrs" v-on="on">
                    mdi-view-dashboard-outline
                  </v-icon>
                </v-btn>
              </template>
              <div class="text">
                <span>COLLECTIONS</span>
              </div>
            </v-tooltip>
          </v-col>
          <!-- Video button -->
          <v-col cols="3">
            <v-tooltip top offset-y transition="scroll-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="ma-1" icon to="/videos" plain>
                  <v-icon size="50" v-bind="attrs" v-on="on">
                    mdi-view-gallery-outline
                  </v-icon>
                </v-btn>
              </template>
              <div class="text">
                <span>VIDEOS</span>
              </div>
            </v-tooltip>
          </v-col>
          <!-- Chatbox button -->
          <v-col class="chat" cols="3">
            <v-tooltip top offset-y transition="scroll-y-transition">
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <Chat />
                </div>
              </template>
              <div class="text">
                <span>CHAT</span>
              </div>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import Chat from "./Chat.vue";
export default {
  components: {
    Chat,
  },
};
</script>

<style lang="scss" scoped>
* {
  background: transparent !important;
  margin: 0;
  padding: 0;
}

.footer {
  z-index: 999;
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 10px 0 0 0 !important;
  background: #000000 !important;
  backdrop-filter: blur(10px);
  width: 20%;
  .text {
    padding: 0px 10px !important;
    border-radius: 5px;
  }
}

@media only screen and(max-width: 960px) {
  .footer {
    width: 100%;
    text-align: center;
    border-radius: unset !important;
  }
  .text {
    display: none !important;
  }
}
</style>
