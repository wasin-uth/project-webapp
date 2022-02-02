<template>
  <div id="chat_app">
    <v-menu
      min-width="300"
      class="menu"
      rounded="lg"
      top
      dark
      v-model="menu"
      :close-on-click="false"
      :close-on-content-click="false"
      :nudge-top="20"
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
            dark
            icon
            plain
          >
            <v-icon size="50"> mdi-facebook-messenger </v-icon>
          </v-btn>
        </v-fab-transition>
      </template>

      <!-- Head -->
      <v-card class="chat_box" light>
        <v-system-bar class="bar py-4" light>
          <input
            placeholder="Enter your name (ตั้งชื่อ..แล้วกดปุ่มล็อก)"
            type="text"
            v-model="name"
            :disabled="check_name"
          />
          <v-btn
            icon
            elevation="0"
            light
            @click="check_name = name != '' ? true : false"
          >
            <v-icon>mdi-lock</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon light small class="mr-2">
            <v-icon
              @click="
                fab = !fab;
                menu = false;
              "
            >
              mdi-close
            </v-icon>
          </v-btn>
        </v-system-bar>

        <!-- Contents -->
        <v-card
          class="contents"
          elevation="0"
          width="300"
          height="400"
          light
          color="light"
          rounded="0"
        >
          <v-card-text style="font-size: 18px; line-height: 1.6">
            <v-card
              class="pa-2"
              light
              width="100%"
              height="400"
              elevation="0"
              rounded="0"
              style="overflow: auto"
              color="transparent"
            >
              <ul>
                <li v-for="(m, i) in msg" :key="i">
                  <v-row>
                    <v-col cols="2" class="py-0">
                      <v-card
                        width="100%"
                        height="30"
                        style="overflow: hidden"
                        elevation="0"
                        color="transparent"
                      >
                        <span>{{ m.sender }}</span>
                      </v-card>
                    </v-col>
                    <v-col cols="10" class="py-1">
                      <v-card class="pa-1" elevation="0" rounded="lg tl-0" dark>
                        <span class="ml-2">{{ m.text }}</span>
                      </v-card>
                    </v-col>
                  </v-row>
                </li>
              </ul>
              <div ref="scroll"></div>
            </v-card>
          </v-card-text>
        </v-card>

        <!-- Send Message -->
        <v-card color="#E0E0E0" elevation="0">
          <v-row>
            <v-col cols="10">
              <input
                type="text"
                v-model="text"
                placeholder="Enter your message"
              />
            </v-col>
            <v-col cols="2">
              <v-btn icon plain light :disabled="name == ''" @click="sendMsg()">
                <v-icon color="gold">mdi-send</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
import { realtime } from "@/database/firebase.js";

export default {
  data() {
    return {
      fab: false,
      menu: false,

      // Message
      name: "",
      check_name: false,
      text: "",
      msg: {},
    };
  },
  created() {
    realtime.ref("msg").on("value", (res) => {
      this.msg = res.val();
    });
  },

  methods: {
    sendMsg() {
      realtime
        .ref("msg")
        .push({
          sender: this.name,
          text: this.text,
        })
        .then(() => {
          this.text = "";
          this.$refs["scroll"].scrollIntoView({ behavior: "smooth" });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 !important;
  padding: 0 !important;
}

input {
  outline: 0;
  width: 100%;
  padding: 5px 10px !important;
}
</style>
