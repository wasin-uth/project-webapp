<template>
  <div>
    <v-app-bar dark color="#000000bb" rounded="b-lg" height="80">
      <v-row>
        <!-- Freshy Boy -->
        <v-col class="text-center">
          <h1>{{ this.$route.name }} {{ this.$route.params.id }}</h1>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style lang="scss" scoped>
$main_color: #ebebeb;

h1 {
  color: $main_color;
}
</style>
