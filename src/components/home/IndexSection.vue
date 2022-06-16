<template>
  <div>
    <!-- Mobile Responsive -->
    <section class="logo_mobile">
      <v-sheet color="transparent">
        <v-img
          class="img"
          contain
          src="@/assets/logo/logo_freshy.png"
          width="100%"
        >
        </v-img>
      </v-sheet>
    </section>

    <!-- Contents 1 -->
    <section class="contents">
      <div>
        <v-row>
          <!-- Freshy Boy -->
          <v-col cols="6" lg="2" md="2" class="contestants">
            <div class="slide_show">
              <v-card
                class="show"
                dark
                rounded="0"
                v-for="fb in freshyBoy"
                :key="fb.id"
                :style="{ display: active_fb.id != fb.id ? 'none' : '' }"
              >
                <v-img
                  class="profile"
                  :src="fb.image"
                  lazy-src="@/assets/image/lazy_src.png"
                  :alt="fb.cId"
                >
                  <div class="shadow"></div>
                </v-img>
              </v-card>
            </div>
          </v-col>

          <!-- Freshy Girl -->
          <v-col cols="6" lg="2" md="2" class="contestants">
            <div class="slide_show">
              <v-card
                class="show"
                dark
                rounded="0"
                v-for="fg in freshyGirl"
                :key="fg.id"
                :style="{ display: active_fg.id != fg.id ? 'none' : '' }"
              >
                <v-img
                  class="profile"
                  :src="fg.image"
                  lazy-src="@/assets/image/lazy_src.png"
                  :alt="fg.cId"
                >
                  <div class="shadow"></div>
                </v-img>
              </v-card>
            </div>
          </v-col>

          <!-- Logo -->
          <v-col cols="6" lg="8" md="8">
            <section class="logo">
              <v-img
                contain
                src="@/assets/logo/logo_freshy.png"
                max-width="600"
              ></v-img>
            </section>
          </v-col>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "@/database/firebase.js";

export default {
  name: "Home",
  data() {
    return {
      // Card Slide
      auto_animate: true,
      active_slide: 1,
      // Data
      freshyBoy: [],
      freshyGirl: [],
    };
  },
  created() {
    // Card Slide
    if (this.auto_animate) {
      this.interval = setInterval(() => {
        this.active_slide =
          this.active_slide === this.freshyBoy.length
            ? 1
            : (this.active_slide + 1) % (this.freshyBoy.length + 1);
      }, 4000);
    } else if (this.auto_animate) {
      this.interval = setInterval(() => {
        this.active_slide =
          this.active_slide === this.freshyGirl.length
            ? 1
            : (this.active_slide + 1) % (this.freshyGirl.length + 1);
      }, 4000);
    }
    
    // Get Data
    // Freshy Boy
    db.collection("/rmufreshyboyandgirl/2019/image-show-fb")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.data().no,
                  image: doc.data().image,
                  cId: doc.data().cId,
                },
              ];
            }
          });
          this.freshyBoy = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
    // Freshy Girl
    db.collection("/rmufreshyboyandgirl/2019/image-show-fg")
      .get()
      .then(
        (querySnapshot) => {
          let tempDataArray = [];
          querySnapshot.forEach((doc) => {
            if (doc.exists) {
              tempDataArray = [
                ...tempDataArray,
                {
                  id: doc.data().no,
                  image: doc.data().image,
                  cId: doc.data().cId,
                },
              ];
            }
          });
          this.freshyGirl = tempDataArray;
        },
        (err) => {
          console.log(err);
        }
      );
  },

  methods: {
    // Card Slide
    activate(id) {
      this.active_slide = id;
    },
  },

  computed: {
    // Card Slide
    active_fb: function () {
      return this.freshyBoy.filter((fb) => fb.id == this.active_slide)[0];
    },
    active_fg: function () {
      return this.freshyGirl.filter((fg) => fg.id == this.active_slide)[0];
    },
  },
};
</script>

<style lang="scss" scoped>
$main_color: #ebebeb;

* {
  margin: 0 !important;
  padding: 0 !important;
}

// Size card, Size image
$width: 400px;
$height: 100vh;

h1,
h2 {
  line-height: 1.2 !important;
}

.logo_mobile {
  display: none;
  height: 85vh;
  overflow: hidden;
}

section {
  height: $height;
  position: relative;
  padding: 0 5px !important;
  .contestants {
    padding: 0 5px !important;
    .slide_show {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .show {
        width: $width;
        height: $height;
        overflow: hidden;
        .profile {
          width: $width;
          height: $height;
          .id_name {
            position: absolute;
            bottom: 15px;
            width: 80%;
            border-radius: 0 20px 20px 0;
            z-index: 99;
            background: #000000ee;
            backdrop-filter: blur(10px);
            border-bottom: 8px solid;
            border-right: 5px solid;
            border-color: #ff080083;
          }
          .shadow {
            z-index: 1;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              0deg,
              #ac835327 0%,
              #ac835338 25%,
              #ac835338 50%,
              #ac835338 75%,
              #ac835381 100%
            );
            background: -webkit-linear-gradient(
              90deg,
              #24140181 0%,
              #49372370 25%,
              #ac835338 50%,
              #ac835338 75%,
              #ac835327 100%
            );
            backdrop-filter: blur(0.4px);
          }
        }
      }
    }
  }
  .contestants:nth-child(2) {
    .id_name {
      border-color: #2ebd268a !important;
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}

@media only screen and(max-width: 960px) {
  .logo_mobile {
    display: block !important;
    .img {
      height: 85vh;
    }
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    .show {
      height: 80vh !important;
      border-radius: 10px !important;
      .profile {
        height: 80vh !important;
      }
    }
    .logo {
      display: none;
    }
  }
}
@media only screen and(max-width: 600px) {
  section {
    .id_name {
      width: 100% !important;
      border-radius: unset !important;
    }
  }
}
</style>
