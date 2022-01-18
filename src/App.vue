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

$gold: #c29e59;
$background: #141414;

* {
  color: $gold !important;
  font-family: "Charm", cursive !important;
}

.v-application {
  background: $background !important;
  background-image: url("http://i.imgur.com/IHg67K8.png") !important;
  background-attachment: fixed !important;
}

/* Scroll bar */
::-webkit-scrollbar {
  width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
  background: $background;
  background-image: url("http://i.imgur.com/IHg67K8.png") !important;
  background-repeat: repeat !important;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: $gold;
  border-radius: 0;
}


@media only screen and(max-width: 960px) {
  .v-main {
    // margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
