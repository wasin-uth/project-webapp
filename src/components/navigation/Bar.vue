<template>
  <div id="appbar">
    <v-app-bar class="bar" height="80" elevation="0" dark color="transparent">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">
          <v-img
            class="img"
            src="@/assets/logo/logo_name.png"
            contain
            width="50"
          ></v-img>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <!-- Menu -->
      <v-menu class="menu" bottom left :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-2" v-bind="attrs" v-on="on" dark icon small plain>
            <v-icon x-large>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list color="light" light>
          <!-- Menu Title -->
          <v-list-item>
            <v-list-item-title class="text-center pb-2">
              <h3>RMU Freshy boy and girl</h3>
            </v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <!-- Contestants -->
          <v-list-group
            :value="false"
            color="gold"
            prepend-icon="mdi-card-account-details"
          >
            <template v-slot:activator>
              <v-list-item-title>Contestants</v-list-item-title>
            </template>

            <v-list-item
              v-for="(year, i) in contestants"
              :key="i"
              link
              :href="`/contestants/${year.id}`"
            >
              <v-list-item-title class="" v-text="year.id"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- Hall Of Fame -->
          <v-list-group
            :value="false"
            color="gold"
            prepend-icon="mdi-podium-gold"
          >
            <template v-slot:activator>
              <v-list-item-title>Hall Of Fame</v-list-item-title>
            </template>

            <v-list-item
              v-for="(year, i) in halloffame"
              :key="i"
              link
              :to="`/hall-of-fame/${year.id}`"
            >
              <v-list-item-title class="" v-text="year.id"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- About -->
          <v-list-item link to="/admins" color="gold">
            <v-list-item-icon>
              <v-icon>mdi-account-cog</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Admins</v-list-item-title>
          </v-list-item>

          <!-- About -->
          <v-list-item link to="/about" color="gold">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>

            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-app-bar class="bar_mobile" height="80" color="transparent"></v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // ปี Contestants
      contestants: [
        { id: 2021 },
        { id: 2020 },
        { id: 2019 },
        { id: 2018 },
        { id: 2017 },
      ],
      // ปี Hall Of Fame
      halloffame: [
        { id: 2021 },
        { id: 2020 },
        { id: 2019 },
        { id: 2018 },
        { id: 2017 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.bar {
  position: fixed;
  z-index: 999;
}
.bar_mobile {
  display: none;
}

@media only screen and(max-width: 960px) {
  .bar {
    position: -webkit-sticky;
    background: #000000 !important;
  }
  .bar_mobile {
    display: block;
  }
}
</style>
