<template>
  <section id="login" style="height: 100vh">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card elevation="12" color="light">
            <v-toolbar color="transparent" elevation="0">
              <v-toolbar-title>LOGIN (อีเมลล์นักศึกษา)</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn plain fab small elevation="0" @click="goBack">
                <v-icon color="black">mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <form @submit.prevent="loginRequest">
                <v-row dense class="text-center">
                  <v-col cols="12">
                    <v-text-field
                      prepend-inner-icon="mdi-account"
                      v-model="email"
                      name="email"
                      label="xxxxxxxxxxxx@rmu.ac.th"
                      type="email"
                      outlined
                      color="gold"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      id="password"
                      prepend-inner-icon="mdi-lock"
                      :append-icon="showPW"
                      @click:append="showPassword"
                      v-model="password"
                      name="password"
                      label="password"
                      :type="type"
                      outlined
                      color="gold"
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <span v-if="xhrRequest">
                      <v-progress-linear
                        buffer-value="60"
                        value="40"
                        stream
                        color="gold"
                      ></v-progress-linear>
                    </span>

                    <span v-text="errorMessage"></span>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      dark
                      type="submit"
                      v-bind:disabled="xhrRequest"
                      v-bind:class="{ disabled: xhrRequest }"
                    >
                      <span v-if="!xhrRequest" style="color: #c29e59">
                        Login
                      </span>

                      <div
                        v-if="xhrRequest"
                        class="spinner-border text-secondary loader"
                        role="status"
                      >
                        <span class="sr-only mx-1"> Loading... </span>
                      </div>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" class="text-right">
                    <v-btn icon small plain class="mx-1" @click="loadOnce">
                      <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { auth } from "@/database/firebase.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showPW: "mdi-eye",
      type: "password",
      xhrRequest: false,
      errorMessage: "",
      // successMessage: "",
    };
  },
  // props: ["user"],
  methods: {
    loginRequest() {
      let v = this;

      v.xhrRequest = true;
      v.errorMessage = "";
      // v.successMessage = "";

      auth
        .signInWithEmailAndPassword(v.email, v.password)
        .then(
          // (user) => {
          //   console.log(user);
          // },
          () => {
            if (v.password != "directors123") {
              this.$router.replace("/vote/students-vote");
            } else {
              v.errorMessage = "ตรวจสอบความถูกต้อง อีเมลล์ และ รหัสผ่าน";
              v.xhrRequest = false;
            }
          },
          (error) => {
            return error;
          }
        )
        .catch((err) => {
          console.log(err);
        });
    },
    loadOnce() {
      location.reload();
    },
    // Show Password
    showPassword() {
      if (this.type === "password") {
        this.type = "text";
        this.icon = "mdi-eye-off";
      } else {
        this.type = "password";
        this.icon = "mdi-eye";
      }
    },
    // Back Page
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
}
</style>
