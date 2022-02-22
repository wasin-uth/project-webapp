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
                  src="https://www.youtube.com/embed/xeRuNT0IiqU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <template>
                  <div class="px-2 py-5">
                    <v-card-title>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      [Live-HD] ถ่ายทอดสด RMU
                      Freshy Day&Night ประกวด ดาว-เดือน
                      มหาวิทยาลัยราชภัฎมหาสารคาม 21/9/58
                    </v-card-title>
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
            v-for="(item, i) in videos"
            :key="i"
          >
            <v-card class="card" dark>
              <iframe
                class="frame"
                width="100%"
                height="100%"
                :src="item.src"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <template>
                <div class="px-2 py-4">
                  <v-card-text>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.dasc }}
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
      videos: [
        {
          src: "https://www.youtube.com/embed/I68cI_-b9bg",
          dasc: "[VTR] แนะนำผู้เข้าประกวด Freshy Boy & Girl RMU 2018",
        },
        {
          src: "https://www.youtube.com/embed/56JvQLapgNI",
          dasc: "[Teaser] Freshy Boy & Girl RMU 2018",
        },
        {
          src: "https://www.youtube.com/embed/PgoODy2nHLU",
          dasc: "[VTR] กิจกรรมการเก็บตัว Freshy Boy & Girl RMU 2017 (ดาวเดือน มหาวิทยาลัยราชภัฏมหาสารคาม 2560)",
        },
        {
          src: "https://www.youtube.com/embed/CS6bO-6v0mw",
          dasc: "[Teaser] Freshy Boy & Girl RMU 2017",
        },
        {
          src: "https://www.youtube.com/embed/RiXDGSJZ110",
          dasc: "RMU Freshy 2555 สิ้นสุดขบวนขำๆHD",
        },
        {
          src: "https://www.youtube.com/embed/Ccn0u6xtP1U",
          dasc: "RMU Freshy Night 2013 - OT band รักต้องเปิด(แน่นอก)",
        },
      ],
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

// section:nth-child(1) {
//   display: flex;
//   justify-content: center;
//   align-content: center;
// }

@media only screen and(max-width: 1902px) {
  .frame {
    height: 350px;
  }
}
</style>
