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

$main_color: #ebebeb;
$background: hsl(0, 0%, 8%);

* {
  font-family: "Charm", cursive !important;
}

.v-application {
  background: $background !important;
  background-image: url("http://i.imgur.com/IHg67K8.png") !important;
  // background-attachment: fixed !important;
  background-repeat: repeat !important;
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
  background: $main_color;
  border-radius: 0;
}


@media only screen and(max-width: 960px) {
  .v-main {
    // margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
