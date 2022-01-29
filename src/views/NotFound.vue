<template>
  <section>
    <v-layout justify-center align-center style="height: 100vh" hidden>
      <v-card hover dark rounded="xl">
        <v-img
          src="https://i.pinimg.com/564x/e5/22/c9/e522c97cb3873294e96edc5d3f39b2a4.jpg"
        >
          <v-btn height="100%" width="100%" color="transparent" dark @click="goBack"></v-btn>
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
