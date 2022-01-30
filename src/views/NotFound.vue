<template>
  <section>
    <v-layout justify-center align-center style="height: 100vh" hidden>
      <v-card hover dark rounded="xl">
        <v-img src="@/assets/404.gif" width="500">
          <v-btn
            height="100%"
            width="100%"
            color="transparent"
            dark
            @click="goBack"
          ></v-btn>
        </v-img>
      </v-card>
    </v-layout>
  </section>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
}
</style>
