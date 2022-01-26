<template>
  <section id="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card elevation="12">
            <v-toolbar color="gold" elevation="0">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn fab x-small elevation="0" dark @click="goBack">
                <v-icon color="gold">mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="loginRequest">
                <v-text-field
                  prepend-icon="mdi-account"
                  v-model="email"
                  name="email"
                  label="Email"
                  type="email"
                  outlined
                  color="gold"
                  dense
                ></v-text-field>

                <v-text-field
                  id="password"
                  prepend-icon="mdi-lock"
                  :append-icon="icon"
                  @click:append="showPassword"
                  v-model="password"
                  name="password"
                  label="Password"
                  :type="type"
                  outlined
                  color="gold"
                  dense
                ></v-text-field>

                <v-btn
                  block
                  color="gold"
                  type="submit"
                  v-bind:disabled="xhrRequest"
                  v-bind:class="{ disabled: xhrRequest }"
                >
                  <span v-if="!xhrRequest">Let's go</span>
                  <div
                    v-if="xhrRequest"
                    class="spinner-border text-secondary loader"
                    role="status"
                  >
                    <span class="sr-only mx-1"> Loading... </span>
                  </div>
                  <span v-if="xhrRequest">
                    <v-progress-linear
                      buffer-value="60"
                      value="40"
                      stream
                      color="gold"
                    ></v-progress-linear>
                  </span>
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { authDrt } from "@/database/directors.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      icon: "mdi-eye",
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

      authDrt
        .signInWithEmailAndPassword(v.email, v.password)
        .then(
          // (user) => {
          //   console.log(user);
          // },
          () => {
            this.$router.replace("/vote/directors-vote");
            v.xhrRequest = false;
          },
          (error) => {
            v.errorMessage = error.message;
            v.xhrRequest = false;
          }
        )
        .catch((err) => {
          console.log(err);
        });
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
