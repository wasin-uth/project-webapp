<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@600;800&family=Charm:wght@400;700&family=Krub:wght@300;400;600&display=swap");

* {
  color: #c29e59 !important;
  font-family: "Charm", cursive !important;
}

.v-application {
  background: #141414 !important;
  background-image: url("http://i.imgur.com/IHg67K8.png") !important;
}
</style>
