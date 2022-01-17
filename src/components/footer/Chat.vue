<template>
  <div id="chat_app">
    <v-menu
      min-width="300"
      class="menu"
      top
      v-model="menu"
      :close-on-click="false"
      :close-on-content-click="false"
      :nudge-top="10"
      offset-y
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator="{ on }">
        <v-fab-transition>
          <v-btn
            class="fab ma-1"
            v-model="fab"
            v-on="on"
            @click="
              fab = !fab;
              menu = false;
            "
            light
            icon
            plain
          >
            <v-icon size="50"> mdi-facebook-messenger </v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
      <v-card class="chat_box">
        <v-system-bar class="bar py-4 px-2" dark>
          <span>Chat box</span>
          <v-spacer></v-spacer>
          <v-btn icon small plain>
            <v-icon small>mdi-logout</v-icon>
          </v-btn>
          <v-btn icon small plain>
            <v-icon
              small
              @click="
                fab = !fab;
                menu = false;
              "
            >
              mdi-close
            </v-icon>
          </v-btn>
        </v-system-bar>

        <main>
          <div>
            <v-card
              class="contents"
              elevation="0"
              width="300"
              height="400"
              light
              rounded="0"
            ></v-card>
          </div>

          <div ref="scrollable"></div>
        </main>

        <div class="form_input">
          <form>
            <v-row class="send_message">
              <v-col cols="10">
                <form class="input_message">
                  <input type="text" placeholder="Enter your message" />
                </form>
              </v-col>
              <v-col class="submit" cols="2">
                <v-btn type="submit" icon plain>
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </form>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fab: false,
      menu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$gold: #c29e59;
$background: #1d1d1c;
$border: #020202;

* {
  margin: 0 !important;
  padding: 0 !important;
}

.v-menu__content {
  box-shadow: -2px 2px 15px $border !important;
  border-radius: 10px;
}

.fab {
  color: $background !important;
}

.chat_box {
  background: $background !important;
  .bar {
    background: transparent !important;
    border-bottom: 1px solid $gold;
    border-radius: 10px;
  }
  .contents {
    background: transparent !important;
  }
  .form_input {
    background: transparent !important;
    border-top: 1px solid $gold;
    border-radius: 10px;
    .send_message {
      justify-content: center;
      align-items: center;
    }
    input {
      outline: 0;
      width: 100%;
      padding: 5px 10px !important;
      color: $gold !important;
    }
    .submit {
      text-align: center;
    }
  }
}
</style>
