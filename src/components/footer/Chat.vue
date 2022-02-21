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

      <v-card class="chat_box" light>
        <!-- Head -->
        <v-system-bar class="bar py-4" light color="white">
          <v-avatar class="ml-2 my-1" size="20" color="gold">
            <v-icon>mdi-facebook-messenger</v-icon>
          </v-avatar>
          <input
            placeholder="your name (ตั้งชื่อ..แล้วกดปุ่มล็อก)"
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
            <v-icon size="20">mdi-lock</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon light small class="mr-2">
            <v-icon
              color="gold"
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
          color="white"
          rounded="0"
        >
          <v-card-text style="font-size: 18px; line-height: 1.6">
            <v-card
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
                  <v-row class="mb-1">
                    <v-col cols="2">
                      <v-layout align-end justify-center style="height: 100%">
                        <v-avatar class="pl-4" size="30" color="gold">
                          <span style="font-size: 34px">
                            {{ m.userName }}
                          </span>
                        </v-avatar>
                      </v-layout>
                    </v-col>
                    <v-col cols="10">
                      <v-card
                        class="pl-2"
                        width="100%"
                        height="30"
                        elevation="0"
                        color="transparent"
                      >
                        <span style="font-size: 14px">{{ m.userName }}</span>
                      </v-card>
                      <v-card
                        class="pa-1 pl-2"
                        elevation="0"
                        rounded="lg"
                        light
                        color="light"
                        width="80%"
                      >
                        <span>{{ m.text }}</span>
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
        <v-card class="pa-1" color="white" elevation="0">
          <v-row>
            <v-col cols="10">
              <v-card color="light" rounded="lg" elevation="0">
                <input
                  type="text"
                  v-model="text"
                  placeholder="Enter your message"
                />
              </v-card>
            </v-col>
            <v-col cols="2">
              <v-layout align-center justify-center>
                <v-card height="100%" elevation="0">
                  <v-icon
                    size="30"
                    color="gold"
                    :disabled="name == ''"
                    @click="sendMsg()"
                  >
                    mdi-send
                  </v-icon>
                </v-card>
              </v-layout>
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
          userName: this.name,
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
