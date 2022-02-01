<template>
  <Layouts>
    <div>
      <Bar />
    </div>

    <!-- Contents -->
    <v-container class="px-5 py-2 pb-15">
      <!-- Live Video -->
      <section class="pa-2">
        <v-row>
          <v-col cols="12">
            <v-container>
              <v-card class="card live" dark width="100%">
                <iframe
                  class="frame"
                  width="100%"
                  height="800"
                  src="https://www.youtube-nocookie.com/embed/VTXbK71OGIo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <template>
                  <div class="pa-2">
                    <v-card-title>Title Name</v-card-title>
                    <v-card-text>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Harum aspernatur quae
                      eius atque officiis alias odio iure corrupti ducimus
                      eveniet cupiditate recusandae, aperiam voluptatem quo
                      ullam est? Autem, architecto quo?
                    </v-card-text>
                  </div>
                </template>
              </v-card>
            </v-container>
          </v-col>
        </v-row>
      </section>

      <!-- More Videos -->
      <section class="pa-2">
        <v-app-bar class="bar" dark rounded="lg" height="80">
          <v-row>
            <v-col class="text-center">
              <h1>More Videos</h1>
            </v-col>
          </v-row>
        </v-app-bar>
        <!-- Contents -->
        <v-row class="pa-2 pb-10">
          <v-col
            class="pa-2"
            cols="12"
            lg="4"
            md="6"
            sm="6"
            v-for="index in 9"
            :key="index"
          >
            <v-card class="card" dark>
              <v-img
                src="https://i.pinimg.com/originals/b3/2e/cc/b32eccdb1bf10c6671c5b59161684cc3.gif"
              ></v-img>
              <template>
                <div class="pa-2">
                  <v-card-title>Title Name</v-card-title>
                  <v-card-text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Harum aspernatur quae
                    eius atque officiis alias odio iure corrupti ducimus eveniet
                    cupiditate recusandae, aperiam voluptatem quo ullam est?
                    Autem, architecto quo?
                  </v-card-text>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </Layouts>
</template>

<script>
import Layouts from "@/layouts/MainLayouts.vue";
import Bar from "@/components/navigation/BarContents.vue";

export default {
  name: "Home",
  components: {
    Layouts,
    Bar,
  },
  data() {
    return {
      id: 2021,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0 auto !important;
  padding: 0 !important;
}

.bar,
.card {
  background: #000000bb !important;
}

section:nth-child(1) {
  display: flex;
  justify-content: center;
  align-content: center;
}

@media only screen and(max-width: 1902px) {
  .frame {
    height: 350px;
  }
}
</style>
