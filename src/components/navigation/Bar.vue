<template>
  <div id="appbar">
    <v-app-bar class="appbar" fixed elevation="0" color="transparent">
      <v-menu bottom left :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-spacer></v-spacer>
          <v-btn class="mx-1" dark icon v-bind="attrs" v-on="on" plain>
            <v-icon x-large>mdi-menu</v-icon>
          </v-btn>
        </template>

        <v-list>
          <!-- Contestants -->
          <v-list-group :value="false" prepend-icon="mdi-card-account-details">
            <template v-slot:activator>
              <v-list-item-title>Contestants</v-list-item-title>
            </template>

            <v-list-item
              v-for="(year, i) in contestants"
              :key="i"
              link
              :to="`/contestants/${year.id}`"
            >
              <v-list-item-title class="" v-text="year.id"></v-list-item-title>
            </v-list-item>
          </v-list-group>

          <!-- Hall Of Fame -->
          <v-list-group :value="false" prepend-icon="mdi-podium-gold">
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
          <v-list-item link to="/about">
            <v-list-item-icon>
              <v-icon>mdi-information</v-icon>
            </v-list-item-icon>

            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
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