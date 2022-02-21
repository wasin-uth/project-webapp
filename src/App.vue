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
// @import url("https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,200;0,300;0,800;0,900;1,100;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@600;800&family=Charm:wght@400;700&family=Krub:wght@300;400;600&display=swap");

$main_color: #000000;
$background: #111111;

* {
  // font-family: "Taviraj", serif !important;
  font-family: "Charm", cursive !important;
}

.v-application {
  background: $background !important;
  background-image: url("http://i.imgur.com/IHg67K8.png") !important;
  -webkit-background-image: url("http://i.imgur.com/IHg67K8.png") !important;
  // background-attachment: fixed !important;
  background-repeat: repeat !important;
}

/* Scroll bar */
// ::-webkit-scrollbar {
//   width: 10px;
// }
// /* Track */
// ::-webkit-scrollbar-track {
//   background: $background;
//   background-color: $main_color !important;
//   background-repeat: repeat !important;
// }
// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background: $background;
//   border-radius: 0;
//   border: 2px solid $main_color;
//   border-radius: 10px;
// }

@media only screen and(max-width: 960px) {
  .v-main {
    // margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
